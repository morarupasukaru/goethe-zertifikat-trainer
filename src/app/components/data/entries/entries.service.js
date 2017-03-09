class EntriesService {

    /*@ngInject*/
    constructor(vocabularyA1Service, vocabularyA2Service) {
        this.vocabularyA1Service = vocabularyA1Service;
        this.vocabularyA2Service = vocabularyA2Service;
        this.initData();
    }

    initData() {
        this.entries = [];
        // TODO uncomment when voc a2 is translate
        // this.addAll(this.vocabularyA1Service.getEntries());
        this.addAll(this.vocabularyA2Service.getEntries());
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