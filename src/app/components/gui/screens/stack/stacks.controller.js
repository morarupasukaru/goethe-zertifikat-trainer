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
        let entries = this.stackPersistenceService.getStackEntries(stack.id);
        if (!!entries) {
            let entry = entries.shift();
            if (!!entry) {
                this.$location.url('flashcard/' + entry);
            }
        }
    }
}

export default StacksController;