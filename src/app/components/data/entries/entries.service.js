class EntriesService {

    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service, vocabularyA2Service) {
        this.grammarA1Service = grammarA1Service;
        this.notionsA1Service = notionsA1Service;
        this.speechActsA1Service = speechActsA1Service;
        this.strategiesA1Service = strategiesA1Service;
        this.themasA1Service = themasA1Service;
        this.vocabularyA1Service = vocabularyA1Service;
        this.vocabularyA2Service = vocabularyA2Service;
        this.initData();
    }

    initData() {
        this.entries = [];
//        this.addAll(this.speechActsA1Service.getEntries());
//        this.addAll(this.strategiesA1Service.getEntries());
//        this.addAll(this.notionsA1Service.getEntries());
//        this.addAll(this.themasA1Service.getEntries());
        this.addAll(this.vocabularyA1Service.getEntries());
        this.addAll(this.vocabularyA2Service.getEntries());
//        this.addAll(this.grammarA1Service.getEntries());
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
        let indexOfSlash = id.indexOf('/');
        if (indexOfSlash !== -1) {
            id = id.substr(indexOfSlash + 1);
        }
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i].id === id) {
                return this.entries[i];
            }
        }
        return null;
    }
}

export default EntriesService;