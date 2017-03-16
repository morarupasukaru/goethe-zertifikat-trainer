class StackService {

    /*@ngInject*/
    constructor(stackPersistenceService, initialStack) {
        this.stackPersistenceService = stackPersistenceService;
        this.initialStack = initialStack;
    }

    getStack(id) {
        let stacks = this.getStacks();
        for (let i = 0; i < stacks.length; i++) {
            if (stacks[i].id === id) {
                return stacks[i];
            }
        }
        return null;
    }

    getStacks() {
        let stacks = [
                { id: this.initialStack, leftName: null, shortcut: 'z', rightName: 'u lernen' },
                { id: 'stufe1', leftName: 'Stufe 1', max: 3 },
                { id: 'stufe2', leftName: 'Stufe 2', max: 5 },
                { id: 'stufe3', leftName: 'Stufe 3', max: 5 },
                { id: 'stufe4', leftName: 'Stufe 4', max: 7 },
                { id: 'kiste1', leftName: 'Kiste 1', max: 30 },
                { id: 'kiste2', leftName: 'Kiste 2', max: 60 },
                { id: 'kiste3', leftName: 'Kiste 3', max: 150 },
                { id: 'kiste4', leftName: 'Kiste 4', max: 400 },
                { id: 'kiste5', leftName: 'Kiste 5', max: 1000 },
                { id: 'kiste6', leftName: 'Kiste 6', max: 2000 },
                { id: 'gelernt', leftName: null, shortcut: 'g', rightName: 'elernt' },
                { id: 'ausgegrenzte', leftName: 'A', shortcut: 'u', rightName: 'sgegrente' }
        ];
        for (let i = 0; i < stacks.length; i++) {
            let count = this.stackPersistenceService.getCount(stacks[i].id);
            stacks[i].count = count;
        }
        return stacks;
    }
}

export default StackService;