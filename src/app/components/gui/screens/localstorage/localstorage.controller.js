class LocalstorageController {

    /*@ngInject*/
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
        this.initData();
    }

    initData() {
        this.localStorageAsText = this.persistenceService.export();
    }

    import() {
        if (!!importData) {
            this.persistenceService.import(this.importData);
        }
    }

    clear() {
        localStorage.clear();
        this.initData();
    }

    displayAsList() {
        this.listDisplayed = true;
    }
}

export default LocalstorageController;