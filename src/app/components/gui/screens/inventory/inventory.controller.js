class InventoryController {
    /*@ngInject*/
    constructor(grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {

        this.data = {
            thema: 'Goethe-Zertifikat A1 - Start Deutsch 1',
            children: [],
            level: 1
        };
        this.themas = {
            thema: 'Inventorare',
            children: [],
            level: 2
        };
        this.data.children.push(this.themas);
        this.themas.children.push(this.groupByThema(speechActsA1Service.getEntries()));
        this.themas.children.push(this.groupByThema(strategiesA1Service.getEntries()));
        this.themas.children.push(this.groupByThema(notionsA1Service.getEntries()));
        this.themas.children.push(this.groupByThema(themasA1Service.getEntries()));
        this.themas.children.push(this.groupByThema(vocabularyA1Service.getEntries()));
        this.themas.children.push(this.groupByThema(grammarA1Service.getEntries()));
    }

    groupByThema(entries) {
        let mergedThemas = {
            children: []
        };
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            let entryThemas = this.getThemas(entry);
            let lastThema = this.mergeThemas(mergedThemas, entryThemas);
            if (!lastThema.entries) {
                lastThema.entries = [];
            }
            lastThema.entries.push(entry);
        }
        return mergedThemas;
    }

    getThemas(entry) {
        let themas;
        if (Array.isArray(entry.thema)) {
            themas = entry.thema;
        } else {
            themas = [];
            themas.push(entry.thema);
        }
        return themas;
    }

    mergeThemas(mergedThemas, entryThemas) {
        for (let i = 0; i < entryThemas.length; i++) {
            let findThema = this.findMergeThema(mergedThemas, entryThemas[i]);
            if (!findThema) {
                findThema = {
                    level: i+3,
                    thema: entryThemas[i],
                    children: []
                };
                mergedThemas.children.push(findThema);
            }
            mergedThemas = findThema;
        }
        return mergedThemas;
    }

    findMergeThema(mergedThemas, entryThema) {
        for (let i = 0; i < mergedThemas.children.length; i++) {
            if (mergedThemas.children[i].thema === entryThema) {
                return mergedThemas.children[i];
            }
        }
        return null;
    }
}

export default InventoryController;