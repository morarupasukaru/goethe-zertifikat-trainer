class StacksController {
    /*@ngInject*/
    constructor(stackService, stackPersistenceService, $location) {
        this.stackService = stackService;
        this.stackPersistenceService = stackPersistenceService;
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
        let nextEntryKey = this.stackPersistenceService.testNextFlashcard(stack.id);
        if (!!nextEntryKey) {
            this.$location.url('flashcard/' + nextEntryKey);
        }
    }
}

export default StacksController;