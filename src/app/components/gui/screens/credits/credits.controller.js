class CreditsController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default CreditsController;