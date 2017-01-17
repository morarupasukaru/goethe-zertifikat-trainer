class EntryController {
    /*@ngInject*/
    constructor($stateParams, entriesService) {
        this.id = $stateParams.id;
        this.data = entriesService.getEntry(this.id);
        debugger;
    }
}

export default EntryController;