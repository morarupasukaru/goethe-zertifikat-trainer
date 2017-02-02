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
        let vocabularyEntryExampleFlashcardType = {
            id: 'vocabulary-entry-example',
            name: 'Verstehen Sie den Eintrag?',
            fields: {
                question: [ { id: 'entry', name: 'Eintrag', leoEnabled: true } ],
                answer: [ { id:'alternative', name: 'Alternative' }, { id:'example', name: 'Beispiel' }, { id:'translate', name:'Übersetzung' } ]
            }
        }
        vocabularyEntryExampleFlashcardType.isSupported = function(entry) {
            return "vocabulary" === entry.type;
        }

        let speechActsEntryFlashcardType = {
            id: 'speechActs-entry',
            name: 'Verstehen Sie den Eintrag?',
            fields: {
                question: [ { id: 'entry', name: 'Eintrag', leoEnabled: true }, { id: 'thema', name: 'Themen' } ],
                answer: [ { id:'translate', name:'Übersetzung' } ]
            }
        }
        speechActsEntryFlashcardType.isSupported = function(entry) {
            return "speechAct" === entry.type;
        }

        return [ vocabularyEntryExampleFlashcardType, speechActsEntryFlashcardType ];
    }
}

export default FlashcardService;