class EntryController {
    /*@ngInject*/
    constructor($stateParams, entriesService) {
        this.id = $stateParams.id;
        this.data = entriesService.getEntry(this.id);

        this.fields = Object.keys(this.data);
    }
}

export default EntryController;