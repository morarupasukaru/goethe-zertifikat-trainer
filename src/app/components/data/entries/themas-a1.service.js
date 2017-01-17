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
        let thema = ['Themen', 'xyz'];
        entries.push(new Builder().id('f32ef541-9cea-44f4-994a-2a8a7635b7e7').thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default ThemasA1Service;