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
        let flashcardType = this.flashcardService.getFlashcardType(this.type);
        this.fields = this.computeFields(entry, flashcardType);
        this.showAnswer = false;
        this.title = flashcardType.name;

        let currentStackId = this.stackPersistenceService.getStackFromFlashcard(this.type, entry.id);
        let currentStack = this.stackService.getStack(currentStackId);
        if (!!currentStack) {
            this.currentStackName = currentStack.name;
        }
        this.stacksDestination = this.stackService.getStacks();
    }

    computeFields(entry, flashcardType) {
        let fields = [];
        for (let i = 0; i < flashcardType.fields.question.length; i++) {
            let field = {};
            field.id = flashcardType.fields.question[i].id;
            field.name = flashcardType.fields.question[i].name;
            field.value = entry[field.id];
            field.list = Array.isArray(field.value);
            field.question = true;
            fields.push(field);
        }
        for (let i = 0; i < flashcardType.fields.answer.length; i++) {
            let field = {};
            field.id = flashcardType.fields.answer[i].id;
            field.name = flashcardType.fields.answer[i].name;
            field.value = entry[field.id];
            field.list = Array.isArray(field.value);
            field.question = false;
            fields.push(field);
        }
        return fields;
    }

    displayAnswer() {
        this.showAnswer = true;
    }

    addToStack(stackId) {
        this.stackPersistenceService.addToStack(this.type, this.id, stackId);
        // force a refresh
        this.$location.url('/flashcard/' + this.type + '/' + this.id + '?refresh=' + new Date().getTime());
    }

    back() {
        this.$location.url('/stack');
    }
}

export default FlashcardController;