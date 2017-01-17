class EntriesController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
    }

    display(entry) {
        this.$location.url('entry/' + entry.id);
    }
}

export default EntriesController;