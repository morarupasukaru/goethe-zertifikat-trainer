class StackPersistenceService {

    /*@ngInject*/
    constructor(persistenceService, flashcardService, initialStack, entriesService) {
        this.persistenceService = persistenceService;
        this.flashcardService = flashcardService;
        this.entriesService = entriesService;
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
        if (!!oldStackId) {
            this.removeEntryIdFromStack(oldStackId, value);
        }
        let newEntries = this.persistenceService.get(key);
        if (!newEntries) {
            newEntries = [];
        }
        newEntries.push(value);
        this.persistenceService.save(key, newEntries);
    }

    removeEntryIdFromStack(stackId, entryKey) {
        if (stackId.indexOf('stack-') !== 0) {
            stackId = 'stack-' + stackId;
        }
        let entries = this.persistenceService.get(stackId);
        entries.splice(entries.indexOf(entryKey), 1);
        this.persistenceService.save(stackId, entries);
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


    testNextFlashcard(stackId) {
        let entries;
        let nextEntryKey;
        do {
            entries = this.getStackEntries(stackId);
            if (!!entries) {
                nextEntryKey = entries.shift();
                if (!!nextEntryKey) {
                    let entry = this.entriesService.getEntry(nextEntryKey);
                    if (!entry) {
                        this.removeEntryIdFromStack(stackId, nextEntryKey);
                    }
                }
            }
        } while (!!entries && !nextEntryKey);
        return nextEntryKey;
    }
 }

export default StackPersistenceService;