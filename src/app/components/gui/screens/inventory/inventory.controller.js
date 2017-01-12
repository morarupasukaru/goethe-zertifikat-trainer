class HomeController {
    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {
        this.vocabulary = vocabularyA1Service.getEntries();
    }
}

export default HomeController;