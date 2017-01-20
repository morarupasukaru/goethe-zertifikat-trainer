class StackPersistenceService {

    /*@ngInject*/
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
    }

    initialAddAll(entries, stackId) {
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            let key = 'flashcard-' + entry.type + '-' + entry.entryId;
            let oldStackId = this.persistenceService.get(key);
            this.persistenceService.save(key, stackId);
        }

        let count = this.getCount(stackId);
        count = count + entries.length;
        this.setCount(stackId, count);
    }

    add(type, entryId, stackId) {
        let key = 'flashcard-' + type + '-' + entryId;
        let oldStackId = this.persistenceService.get(key);
        this.decrement(oldStackId);
        this.increment(stackId);
        this.persistenceService.save(key, stackId);
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
        this.persistenceService.save(key, count);
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