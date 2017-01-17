class EntriesService {

    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {
        this.grammarA1Service = grammarA1Service;
        this.notionsA1Service = notionsA1Service;
        this.speechActsA1Service = speechActsA1Service;
        this.strategiesA1Service = strategiesA1Service;
        this.themasA1Service = themasA1Service;
        this.vocabularyA1Service = vocabularyA1Service;
        this.initData();
    }

    initData() {
        this.entries = [];
        this.addAll(this.speechActsA1Service.getEntries());
        this.addAll(this.strategiesA1Service.getEntries());
        this.addAll(this.notionsA1Service.getEntries());
        this.addAll(this.themasA1Service.getEntries());
        this.addAll(this.vocabularyA1Service.getEntries());
        this.addAll(this.grammarA1Service.getEntries());
    }

    addAll(list) {
        for (let i = 0; i < list.length; i++) {
            this.entries.push(list[i]);
        }
    }

    getEntries() {
        return this.entries;
    }

    getEntry(id) {
        debugger;
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i].id === id) {
                return this.entries[i];
            }
        }
        return null;
    }
}

export default EntriesService;