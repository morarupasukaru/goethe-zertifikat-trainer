class FlashcardController {
    /*@ngInject*/
    constructor($stateParams, $location, entriesService, flashcardService, stackService, stackPersistenceService) {
        this.$location = $location;
        this.entriesService = entriesService;
        this.flashcardService = flashcardService;
        this.stackService = stackService;
        this.stackPersistenceService = stackPersistenceService;

        this.id = $stateParams.id;
        this.type = $stateParams.type;
        this.initData();
    }

    initData() {
        let entry = this.entriesService.getEntry(this.id);
        if (!!entry) {
            let flashcardType = this.flashcardService.getFlashcardType(this.type);
            this.fields = this.computeFields(entry, flashcardType);
            this.title = flashcardType.name;

            let currentStackId = this.stackPersistenceService.getStackFromFlashcard(this.type, entry.id);
            let currentStack = this.stackService.getStack(currentStackId);
            if (!!currentStack) {
                this.currentStackId = currentStack.id;
            }
        }
        this.stacksDestination = this.stackService.getStacks();
    }

    computeFields(entry, flashcardType) {
        let fields = [];
        this.showAnswer = true;
        for (let i = 0; i < flashcardType.fields.question.length; i++) {
            let field = {};
            field.id = flashcardType.fields.question[i].id;
            field.name = flashcardType.fields.question[i].name;
            field.value = entry[field.id];
            field.list = Array.isArray(field.value);
            field.leoEnabled = !!flashcardType.fields.question[i].leoEnabled;
            field.question = true;
            field.separator = flashcardType.fields.question[i].separator;
            fields.push(field);
        }
        for (let i = 0; i < flashcardType.fields.answer.length; i++) {
            let field = {};
            field.id = flashcardType.fields.answer[i].id;
            field.name = flashcardType.fields.answer[i].name;
            field.value = entry[field.id];
            field.list = Array.isArray(field.value);
            field.leoEnabled = !!flashcardType.fields.answer[i].leoEnabled;
            field.question = false;
            field.separator = flashcardType.fields.answer[i].separator;
            fields.push(field);
            if (!!field.value) {
                this.showAnswer = false;
            }
        }
        return fields;
    }

    displayAnswer() {
        this.showAnswer = true;
    }

    onStackClick(stackId) {
        this.testNextFlashcard(stackId);
    }

    addToStack(stackId) {
        this.stackPersistenceService.addToStack(this.type, this.id, stackId);
        // force a refresh
        this.$location.url('/flashcard/' + this.type + '/' + this.id + '?refresh=' + new Date().getTime());
    }

    testNextFlashcard(stackId) {
        let nextEntryKey = this.stackPersistenceService.testNextFlashcard(stackId);
        if (!!nextEntryKey) {
            this.$location.url('flashcard/' + nextEntryKey);
        }
    }

    previousStack() {
        let previous = this.getPreviousStack();
        if (!!previous) {
            this.addToStack(previous.id);
        }
    }

    nextStack() {
        let next = this.getNextStack();
        if (!!next) {
            this.addToStack(next.id);
        }
    }

    getPreviousStack() {
        let previousStack = null;
        if (!!this.currentStackId) {
            for (let i = 0; i < this.stacksDestination.length; i++) {
                if (this.stacksDestination[i].id === this.currentStackId) {
                    return previousStack;
                }
                previousStack = this.stacksDestination[i];
            }
        }
        return previousStack;
    }

    getNextStack() {
        if (!!this.currentStackId) {
            for (let i = 0; i < this.stacksDestination.length; i++) {
                if (this.stacksDestination[i].id === this.currentStackId) {
                    if (i < this.stacksDestination.length-1) {
                        return this.stacksDestination[i+1];
                    } else {
                        return null;
                    }
                }
            }
        }
        return null;
    }
}

export default FlashcardController;