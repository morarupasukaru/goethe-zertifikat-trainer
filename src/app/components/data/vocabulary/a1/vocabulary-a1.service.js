class VocabularyA1Service {

    /*@ngInject*/
    constructor() {
        this.createEntries();
    }

    createEntries() {
        this.entries = [];
        this.addEntries(this.createZahlenEntries());
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createZahlenEntries() {
        let entries = [];
        let thema = 'Zahlen';
        entries.push(this.createEntry(thema, 'eins', '1'));
        entries.push(this.createEntry(thema, 'zwei', '2'));
        entries.push(this.createEntry(thema, 'drei', '3'));
        entries.push(this.createEntry(thema, 'vier', '4'));
        entries.push(this.createEntry(thema, 'fünf', '5'));
        entries.push(this.createEntry(thema, 'sechs', '6'));
        entries.push(this.createEntry(thema, 'sieben', '7'));
        entries.push(this.createEntry(thema, 'acht', '8'));
        entries.push(this.createEntry(thema, 'neun', '9'));
        entries.push(this.createEntry(thema, 'zehn', '10'));
        entries.push(this.createEntry(thema, 'elf', '11'));
        entries.push(this.createEntry(thema, 'zwölf', '12'));
        entries.push(this.createEntry(thema, 'dreizehn', '13'));
        entries.push(this.createEntry(thema, 'vierzehn', '14'));
        entries.push(this.createEntry(thema, 'fünfzehn', '15'));
        entries.push(this.createEntry(thema, 'sechzehn', '16'));
        entries.push(this.createEntry(thema, 'siebzehn', '17'));
        entries.push(this.createEntry(thema, 'achtzehn', '18'));
        entries.push(this.createEntry(thema, 'neunzehn', '19'));
        entries.push(this.createEntry(thema, 'zwanzig', '20'));
        entries.push(this.createEntry(thema, 'einundzwanzig', '21'));
        entries.push(this.createEntry(thema, 'dreißig', '30'));
        entries.push(this.createEntry(thema, 'vierzig', '40'));
        entries.push(this.createEntry(thema, 'fünfzig', '50'));
        entries.push(this.createEntry(thema, 'sechzig', '60'));
        entries.push(this.createEntry(thema, 'siebzig', '70'));
        entries.push(this.createEntry(thema, 'achtzig', '80'));
        entries.push(this.createEntry(thema, 'neunzig', '90'));
        entries.push(this.createEntry(thema, '(ein)hundert', '100'));
        entries.push(this.createEntry(thema, 'hunderteins', '101'));
        entries.push(this.createEntry(thema, 'zweihundert', '200'));
        entries.push(this.createEntry(thema, '(ein)tausend', '1000'));
        entries.push(this.createEntry(thema, 'eine Million, en', "1'000'000"));
        entries.push(this.createEntry(thema, 'eine Milliarde, en', "1'000'000'000"));
        entries.push(this.createEntry(thema, 'das/der/die erste'));
        entries.push(this.createEntry(thema, 'zweite'));
        entries.push(this.createEntry(thema, 'dritte'));
        entries.push(this.createEntry(thema, 'vierte'));
        entries.push(this.createEntry(thema, 'usw.'));
        return entries;
    }

    createEntry(thema, entry, translate) {
        return {
            thema: thema,
            entry: entry,
            translate: translate,
            level: 'a1'
        };
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA1Service;