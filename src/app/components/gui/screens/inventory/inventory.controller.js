class InventoryController {
    /*@ngInject*/
    constructor($location, grammarA1Service, notionsA1Service, speechActsA1Service, strategiesA1Service, themasA1Service, vocabularyA1Service) {
        this.$location = $location;

        this.data = {
            thema: 'Goethe-Zertifikat A1',
            children: [],
            level: 1
        };
        this.themas = {
            thema: 'Inventorare',
            children: [],
            level: 2
        };
        this.data.children.push(this.themas);
        this.groupByThema(this.themas, speechActsA1Service.getEntries());
        this.groupByThema(this.themas, strategiesA1Service.getEntries());
        this.groupByThema(this.themas, notionsA1Service.getEntries());
        this.groupByThema(this.themas, themasA1Service.getEntries());
        this.groupByThema(this.themas, vocabularyA1Service.getEntries());
        this.groupByThema(this.themas, grammarA1Service.getEntries());

        this.themas.count = 0;
        for (let i = 0; i < this.themas.children.length; i++) {
            this.themas.children[i].count = this.countEntries(this.themas.children[i]);
            this.themas.count = this.themas.count + this.themas.children[i].count;
        }
    }

    groupByThema(mergedThemas, entries) {
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

    countEntries(thema) {
        let count = 0;
        if (!!thema.children) {
            for (let i = 0; i < thema.children.length; i++) {
                count = count + this.countEntries(thema.children[i]);
            }
        }
        if (!!thema.entries) {
            count = count + thema.entries.length;
        }
        return count;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default InventoryController;