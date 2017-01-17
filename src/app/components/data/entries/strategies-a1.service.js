class StrategiesA1Service {

    /*@ngInject*/
    constructor(StrategyBuilder) {
        this.createEntries(StrategyBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createStrategiesEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createStrategiesEntries(Builder) {
        let entries = [];
        let thema = ['Strategien', 'xyz'];
        entries.push(new Builder().id('4e0ea898-9140-4482-9bc0-219c24a915ab').thema(thema).entry('xyz').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default StrategiesA1Service;