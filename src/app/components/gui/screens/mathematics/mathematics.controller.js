class MathematicsController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
    }

    show() {
        this.showAll = true;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default MathematicsController;