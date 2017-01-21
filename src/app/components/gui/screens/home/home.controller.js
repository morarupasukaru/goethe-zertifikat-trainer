class HomeController {
    /*@ngInject*/
    constructor($location) {
        $location.url('localstorage');
    }
}

export default HomeController;