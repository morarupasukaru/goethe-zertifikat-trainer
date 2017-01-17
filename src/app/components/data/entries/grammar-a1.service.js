class GrammarA1Service {

    /*@ngInject*/
    constructor(GrammarBuilder) {
        this.createEntries(GrammarBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createGrammarEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createGrammarEntries(Builder) {
        let entries = [];
        let thema = ['Grammatik', 'xyz'];
        entries.push(new Builder().id('4a75fff1-82c7-40f7-8ad5-74f77470e907').thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default GrammarA1Service;