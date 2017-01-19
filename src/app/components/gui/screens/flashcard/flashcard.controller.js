class FlashcardController {
    /*@ngInject*/
    constructor($stateParams, $location, entriesService, flashcardService) {
        this.$location = $location;
        this.entriesService = entriesService;
        this.flashcardService = flashcardService;

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
    }

    computeFields(entry, flashcardType) {
        let fields = [];
        for (let i = 0; i < flashcardType.fields.question.length; i++) {
            let field = {};
            field.name = flashcardType.fields.question[i];
            field.value = entry[field.name];
            field.list = Array.isArray(field.value);
            field.question = true;
            fields.push(field);
        }
        for (let i = 0; i < flashcardType.fields.answer.length; i++) {
            let field = {};
            field.name = flashcardType.fields.answer[i];
            field.value = entry[field.name];
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