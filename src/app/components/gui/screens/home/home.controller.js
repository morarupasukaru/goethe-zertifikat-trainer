class HomeController {
    /*@ngInject*/
    constructor($location) {
        $location.url('inventory');
    }
}

export default HomeController;