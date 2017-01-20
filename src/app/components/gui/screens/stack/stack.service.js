class StackService {

    /*@ngInject*/
    constructor(stackPersistenceService, initialStack) {
        this.stackPersistenceService = stackPersistenceService;
        this.initialStack = initialStack;
    }

    getStacks() {
        let stacks = [
                { id: this.initialStack, name: 'Zu lernen' },
                { id: 'stufe1', name: 'Stufe 1', max: 3 },
                { id: 'stufe2', name: 'Stufe 2', max: 5 },
                { id: 'stufe3', name: 'Stufe 3', max: 5 },
                { id: 'stufe4', name: 'Stufe 4', max: 7 },
                { id: 'kiste1', name: 'Kiste 1', max: 30 },
                { id: 'kiste2', name: 'Kiste 2', max: 60 },
                { id: 'kiste3', name: 'Kiste 3', max: 150 },
                { id: 'kiste4', name: 'Kiste 4', max: 400 },
                { id: 'kiste5', name: 'Kiste 5', max: 1000 },
                { id: 'kiste6', name: 'Kiste 6', max: 2000 },
                { id: 'gelernt', name: 'Gelernt' }
        ];
        for (let i = 0; i < stacks.length; i++) {
            let count = this.stackPersistenceService.getCount(stacks[i].id);
            stacks[i].count = count;
        }
        return stacks;
    }
}

export default StackService;