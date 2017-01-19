class StackController {
    /*@ngInject*/
    constructor() {
        this.initData();
    }

    initData() {
        this.stacks = [
                { name: 'Zu lernen', count:0 },
                { name: 'Stufe 1', count:0, max: 3 },
                { name: 'Stufe 1', count:0, max: 5 },
                { name: 'Stufe 1', count:0, max: 5 },
                { name: 'Stufe 1', count:0, max: 7 },
                { name: 'Kiste 1', count:0, max: 30 },
                { name: 'Kiste 2', count:0, max: 60 },
                { name: 'Kiste 3', count:0, max: 150 },
                { name: 'Kiste 4', count:0, max: 400 },
                { name: 'Kiste 5', count:0, max: 1000 },
                { name: 'Kiste 6', count:0, max: 2000 },
                { name: 'Gelernt', count:0 }
        ];
    }
}

export default StackController;