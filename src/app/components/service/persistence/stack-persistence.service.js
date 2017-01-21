class StackPersistenceService {

    /*@ngInject*/
    constructor(persistenceService, flashcardService, initialStack) {
        this.persistenceService = persistenceService;
        this.flashcardService = flashcardService;
        let flashcardIds = this.flashcardService.getFlashcardIds();
        this.initialAddAll(flashcardIds, initialStack);
    }

    initialAddAll(entries, stackId) {
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            let oldStack = this.getStackKey(entry.type, entry.entryId);
            if (!oldStack) {
                this.addToStack(entry.type, entry.entryId, stackId);
            }
        }
    }

    addToStack(type, entryId, stackId) {
        let key = 'stack-' + stackId;
        let value = type + '/' + entryId;
        let oldStackId = this.getStackKey(type, entryId);
        if (key !== oldStackId) {
            if (!!oldStackId) {
                let oldEntries = this.persistenceService.get(oldStackId);
                oldEntries.splice(oldEntries.indexOf(value), 1);
                this.persistenceService.save(oldStackId, oldEntries);
            }
            let newEntries = this.persistenceService.get(key);
            if (!newEntries) {
                newEntries = [];
            }
            newEntries.push(value);
            this.persistenceService.save(key, newEntries);
        }
    }

    getStackFromFlashcard(type, entryId) {
        let key = this.getStackKey(type, entryId);
        if (!key) {
            return null;
        } else {
            return key.substr(6);
        }
    }

    getStackKey(type, entryId) {
        let value = type + '/' + entryId;
        let keys = this.persistenceService.findKeysWithPrefix('stack-');
        for (let i = 0; i < keys.length; i++) {
            let entries = this.persistenceService.get(keys[i]);
            if (entries.indexOf(value) !== -1) {
                return keys[i];
            }
        }
    }

    getCount(stackId) {
        return this.getStackEntries(stackId).length;
    }

    getStackEntries(stackId) {
        let key = 'stack-' + stackId;
        let entries = this.persistenceService.get(key);
        if (!entries) {
            return [];
        } else {
            return entries;
        }
    }
 }

export default StackPersistenceService;