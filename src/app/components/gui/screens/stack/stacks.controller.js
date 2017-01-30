class StacksController {
    /*@ngInject*/
    constructor(stackService, stackPersistenceService, $location, entriesService) {
        this.stackService = stackService;
        this.stackPersistenceService = stackPersistenceService;
        this.entriesService = entriesService;
        this.$location = $location;
        this.initData();
    }

    initData() {
        this.stacks = this.filterEmptyStacks(this.stackService.getStacks());
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

    testNextFlashcard(stack) {
        let entries;
        let nextEntryKey;
        do {
            entries = this.stackPersistenceService.getStackEntries(stack.id);
            if (!!entries) {
                nextEntryKey = entries.shift();
                if (!!nextEntryKey) {
                    let entry = this.entriesService.getEntry(nextEntryKey);
                    if (!entry) {
                        this.stackPersistenceService.removeEntryIdFromStack(stack.id, nextEntryKey);
                    }
                }
            }
        } while (!!entries && !nextEntryKey);
        if (!!nextEntryKey) {
            this.$location.url('flashcard/' + nextEntryKey);
        }
    }
}

export default StacksController;