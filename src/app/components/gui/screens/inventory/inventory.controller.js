class InventoryController {
    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {
        this.grammar = grammarA1Service.getEntries();
        this.notions = notionsA1Service.getEntries();
        this.speechActs = speechActsA1Service.getEntries();
        this.strategies = strategiesA1Service.getEntries();
        this.themas = themasA1Service.getEntries();
        this.vocabulary = vocabularyA1Service.getEntries();
    }
}

export default InventoryController;