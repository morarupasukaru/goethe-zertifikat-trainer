class FlashcardController {
    /*@ngInject*/
    constructor($stateParams, $location, entriesService, flashcardService, stackService) {
        this.$location = $location;
        this.entriesService = entriesService;
        this.flashcardService = flashcardService;
        this.stackService = stackService;

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
        this.stacksDestination = this.stackService.getStacks();
        this.stacksToLearn = this.filterEmptyStacks(this.stackService.getStacks());
        // TODO take value from localstorage
        this.currentStackName = 'Stufe 1';
    }

    filterEmptyStacks(stacks) {
        let result = [];
        for (let i = 0; i < stacks.length; i++) {
            if (stacks[i].count > 0) {
                result.push(stacks[i]);
            }
        }
        return result;
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

    back() {
        this.$location.url('/stack');
    }
}

export default FlashcardController;