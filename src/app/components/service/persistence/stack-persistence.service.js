class StackPersistenceService {

    /*@ngInject*/
    constructor(persistenceService, flashcardService, initialStack) {
        this.persistenceService = persistenceService;
        this.flashcardService = flashcardService;
        let flashcardIds = this.flashcardService.getFlashcardIds();
        this.initialAddAll(flashcardIds, initialStack);
    }

    initialAddAll(entries, stackId) {
        let addedEntries = 0;
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            let oldStackId = this.get(entry.type, entry.entryId);
            if (!oldStackId) {
                this.set(entry.type, entry.entryId, stackId);
                addedEntries = addedEntries + 1;
            }
        }

        let count = this.getCount(stackId);
        count = count + addedEntries;
        this.setCount(stackId, count);
    }

    add(type, entryId, stackId) {
        let oldStackId = this.get(type, entryId);
        if (!!oldStackId) {
            this.decrement(oldStackId);
        }
        this.increment(stackId);
        this.set(type, entryId, stackId);
    }

    set(type, entryId, stackId) {
        let key = 'flashcard-' + type + '-' + entryId;
        this.persistenceService.save(key, stackId);
    }

    get(type, entryId) {
        let key = 'flashcard-' + type + '-' + entryId;
        return this.persistenceService.get(key);
    }

    increment(stackId) {
        let count = this.getCount(stackId);
        count = count + 1;
        this.setCount(stackId, count);
    }

    decrement(stackId) {
        let count = this.getCount(stackId);
        count = count - 1;
        this.setCount(stackId, count);
    }

    setCount(stackId, value) {
        let key = 'stack-' + stackId;
        this.persistenceService.save(key, value);
    }

    getCount(stackId) {
        let key = 'stack-' + stackId;
        let count = this.persistenceService.get(key);
        if (!count) {
            count = 0;
        }
        return count;
    }
 }

export default StackPersistenceService;