class HomeController {
    /*@ngInject*/
    constructor(vocabularyA1Service) {
        this.entries = vocabularyA1Service.getEntries();
    }
}

export default HomeController;