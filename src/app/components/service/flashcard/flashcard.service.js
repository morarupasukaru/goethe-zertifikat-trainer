class FlashcardService {

    /*@ngInject*/
    constructor(entriesService) {
        this.entriesService = entriesService;
    }

    getFlashcards() {
        let entries = this.entriesService.getEntries();
        let types = this.getFlashcardTypes();
        let flashcards = [];
        for (let i = 0; i < types.length; i++) {
            let type = types[i];
            for (let j = 0; j < entries.length; j++) {
                let entry = entries[j];
                if (type.isSupported(entry)) {
                    // TODO create or get from localstorage
                    flashcards.add({
                        entry: entry,
                        flashcardType : type
                    });
                }
            }
        }
    }

    getFlashcardType(id) {
        let flashcardTypes = this.getFlashcardTypes();
        for (let i = 0; i < flashcardTypes.length; i++) {
            let flashcardType = flashcardTypes[i];
            if (flashcardType.id === id) {
                return flashcardType;
            }
        }
        return null;
    }

    getFlashcardTypes() {
        let vocabularyEntryExampleFlashcardType = {
            id: 'vocabulary-entry-example',
            name: 'Verstehst du den Eintrag?',
            fields: {
                question: ['entry'],
                answer: ['example']
            }
        }
        vocabularyEntryExampleFlashcardType.isSupported = function(entry) {
            return "vocabulary" === entry.type;
        }
        return [ vocabularyEntryExampleFlashcardType ];
    }
}

export default FlashcardService;