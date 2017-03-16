class FlashcardService {

    /*@ngInject*/
    constructor(entriesService) {
        this.entriesService = entriesService;
    }

    getFlashcardIds() {
        let entries = this.entriesService.getEntries();
        let types = this.getFlashcardTypes();
        let flashcards = [];
        for (let i = 0; i < types.length; i++) {
            let type = types[i];
            for (let j = 0; j < entries.length; j++) {
                let entry = entries[j];
                if (type.isSupported(entry)) {
                    flashcards.push({
                        entryId: entry.id,
                        type: type.id
                    });
                }
            }
        }
        return flashcards;
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
        return [
                this.getVocabularyFlashcardType()
            ];
    }

    getVocabularyFlashcardType() {
        let flashcardType = {
            id: 'vocabulary-entry-example',
            name: 'Verstehen Sie diese Wortschatz Eintrag?',
            fields: {
                question: [ { id: 'entry', name: 'Eintrag', leoEnabled: true }, { id: 'thema', name: 'Themen', separator: ' / ' } ],
                answer: [ { id:'alternative', name: 'Alternative' }, { id:'example', name: 'Beispiel' }, { id:'translate', name:'Übersetzung' } ]
            }
        }
        flashcardType.isSupported = function(entry) {
            return "vocabulary" === entry.type;
        }
        return flashcardType;
    }
}

export default FlashcardService;