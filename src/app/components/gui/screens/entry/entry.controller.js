class EntryController {
    /*@ngInject*/
    constructor($stateParams, $location, entriesService) {
        this.$location = $location;
        this.id = $stateParams.id;
        this.data = entriesService.getEntry(this.id);
        this.fields = this.computeFields(this.data);
    }

    computeFields(data) {
        let fields = [];
        for (let i = 0; i < data.visibleFields.length; i++) {
            let field = {};
            field.name = data.visibleFields[i];
            field.value = data[field.name];
            field.list = Array.isArray(field.value);
            fields.push(field);
        }
        return fields;
    }

    back() {
        this.$location.url('/inventory');
    }
}

export default EntryController;