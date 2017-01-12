class SpeechActsA1Service {

    /*@ngInject*/
    constructor(SpeechActBuilder) {
        this.createEntries(SpeechActBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createEntries(Builder) {
        let entries = [];
        let thema = 'xyz';
        entries.push(new Builder().thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;