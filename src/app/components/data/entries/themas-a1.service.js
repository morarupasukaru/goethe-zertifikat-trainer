class ThemasA1Service {

    /*@ngInject*/
    constructor(ThemaBuilder) {
        this.createEntries(ThemaBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createThemasEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createThemasEntries(Builder) {
        let entries = [];
        let thema = 'xyz';
        entries.push(new Builder().thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default ThemasA1Service;