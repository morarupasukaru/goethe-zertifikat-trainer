class NotionsA1Service {

    /*@ngInject*/
    constructor(NotionBuilder) {
        this.createEntries(NotionBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createNotionsEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createNotionsEntries(Builder) {
        let entries = [];
        let thema = ['Notionen', 'xyz'];
        entries.push(new Builder().thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default NotionsA1Service;