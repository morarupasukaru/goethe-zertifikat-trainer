class HomeController {
    /*@ngInject*/
    constructor($location) {
        $location.url('flashcard');
    }
}

export default HomeController;