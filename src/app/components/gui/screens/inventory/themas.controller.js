class ThemasController {
    /*@ngInject*/
    constructor() {
        debugger;
        this.keys = Object.keys(this.themas);
        this.data = [];
        for (let i = 0; i < this.keys.length; i++) {
            let thema = this.themas[this.keys[i]];
            let row = { thema: this.keys[i] };
            if (!!thema.entries) {
                row.entries = thema.entries;
            }
            this.data.push(row);
        }
    }
}

export default ThemasController;