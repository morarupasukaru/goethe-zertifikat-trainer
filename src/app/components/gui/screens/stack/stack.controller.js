class StackController {
    /*@ngInject*/
    constructor(stackService) {
        this.stackService = stackService;
        this.initData();
    }

    initData() {
        this.stacks = this.stackService.getStacks();
    }
}

export default StackController;