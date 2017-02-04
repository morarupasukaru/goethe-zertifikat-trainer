class LocalstorageController {

    /*@ngInject*/
    constructor($location, persistenceService) {
        this.$location = $location;
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

    back() {
        this.$location.url('/stack');
    }
}

export default LocalstorageController;