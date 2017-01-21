class StacksController {
    /*@ngInject*/
    constructor(stackService) {
        this.stackService = stackService;
        this.initData();
    }

    initData() {
        this.stacks = this.stackService.getStacks();
    }

    testNextFlashcard(stack) {

    }
}

export default StacksController;