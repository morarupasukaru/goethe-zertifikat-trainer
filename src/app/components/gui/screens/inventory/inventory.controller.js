class InventoryController {
    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {
        this.grammar = this.groupByThema(grammarA1Service.getEntries());
        this.notions = this.groupByThema(notionsA1Service.getEntries());
        this.speechActs = this.groupByThema(speechActsA1Service.getEntries());
        this.strategies = this.groupByThema(strategiesA1Service.getEntries());
        this.themas = this.groupByThema(themasA1Service.getEntries());
        this.vocabulary = this.groupByThema(vocabularyA1Service.getEntries());
    }

    groupByThema(entries) {
        let results = {};
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            let themas = entry.thema;
            if (Array.isArray(themas)) {
                let subRepository = results;
                for (let j = 0; j < themas.length; j++) {
                    subRepository = this.addThema(subRepository, themas[j]);
                }
                this.addEntry(subRepository, entry);

            } else {
                let subRepository = this.addThema(results, themas);
                this.addEntry(subRepository, entry);
            }
        }
        return results;
    }

    addThema(repository, thema) {
        if (!repository[thema]) {
            repository[thema] = {};
        }
        return repository[thema];
    }

    addEntry(repository, entry) {
        if (!!entry) {
            if (!repository.entries) {
                repository.entries = [];
            }
            repository.entries.push(entry);
        }
    }
}

export default InventoryController;