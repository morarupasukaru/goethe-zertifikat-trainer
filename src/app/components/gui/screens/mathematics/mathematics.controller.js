class MathematicsController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
    }

    show(data) {
        this[data] = true;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default MathematicsController;