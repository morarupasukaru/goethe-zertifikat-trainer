class NotionsA1Service {

    /*@ngInject*/
    constructor(NotionBuilder, VocabularyBuilder) {
        this.createEntries(NotionBuilder);
        this.createNotionsWordEntries(VocabularyBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createNotionsEntries(Builder));
    }

    createNotionsEntries(Builder) {
        let entries = [];
        let thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) sein'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'anwesend/abwesend sein'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) verfügbar sein'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) vorkommen'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Inklusion/Exklusion'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Besitz/Zugehörigkeit'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'ausdrücken'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Ort'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Herkunft'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Richtung'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Distanz'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Zeitpunkt'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Zeitangaben'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Dauer'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Häufigkeit'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Zahlen/Mengenangaben'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Menge'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Grad'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Dimension/Maßangabe'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'physisch'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'Wertung'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'Vergleich'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Grund'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Bedingung'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Aufzählung/Alternative'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Fähigkeit'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Möglichkeit'];
        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Notwendigkeit/Verpflichtung'];
        return entries;
    }

    createNotionsWordEntries(Builder) {
        let entries = [];
        let thema = 'Allgemeine Begriffe (Notionen)';
        entries.push(new Builder().id('417bb4a4-8549-4d50-ab03-3a2717bb4c58').thema(thema).entry('Existenz von Personen und Dingen, Besitz').get());
        entries.push(new Builder().id('097b0ee8-5f7c-411f-93d2-e76864d52276').thema(thema).entry('Zugehörigkeit ausdrücken').get());
        entries.push(new Builder().id('db83018f-e871-4cb1-a1b7-fda21dadb802').thema(thema).entry('(nicht) sein').get());
        entries.push(new Builder().id('7fe580c1-dfd5-40d3-b782-e8e89764e721').thema(thema).entry('anwesend sein').get());
        entries.push(new Builder().id('93f15e88-e3c7-4528-86c6-167bf8dc29d4').thema(thema).entry('abwesend sein').get());
        entries.push(new Builder().id('e1fd1ae3-d708-4592-8be1-453ac67e57cc').thema(thema).entry('(nicht) verfügbar sein').get());
        entries.push(new Builder().id('13f6909c-1eee-4c91-a65c-9afa07f5bc4a').thema(thema).entry('(nicht) vorkommen').get());
        entries.push(new Builder().id('096f38ef-a27a-4785-bf72-da4d04979794').thema(thema).entry('Inklusion').get());
        entries.push(new Builder().id('a1695eb1-fdeb-41dc-9382-fc9aa5d38787').thema(thema).entry('Exklusion').get());
        entries.push(new Builder().id('735695e6-8663-4ea7-9ff1-512f64a98cdd').thema(thema).entry('Zugehörigkeit').get());
        entries.push(new Builder().id('c0c659ab-49f3-4e56-9da2-ddf336908b23').thema(thema).entry('Besitz').get());
        entries.push(new Builder().id('a972f650-50b1-43f1-a41a-37b32c2d6183').thema(thema).entry('ausdrücken').get());
        entries.push(new Builder().id('b3b71c87-b2ea-4a18-9272-404c9d11e97c').thema(thema).entry('Raum definieren').get());
        entries.push(new Builder().id('e10f61e9-e13e-4a9d-9ca9-b6e09b044641').thema(thema).entry('Ort').get());
        entries.push(new Builder().id('e76a10ef-6878-49c3-a424-0a3cc266a80a').thema(thema).entry('Herkunft').get());
        entries.push(new Builder().id('820d8f5f-63b3-4653-b1f3-c04f909d9135').thema(thema).entry('Richtung').get());
        entries.push(new Builder().id('751c1b0c-9826-4fe7-805d-dbdcae215e9d').thema(thema).entry('Distanz').get());
        entries.push(new Builder().id('5fbefed9-20f1-422d-9893-ea243dfee703').thema(thema).entry('Zeit angeben').get());
        entries.push(new Builder().id('c3e65cb3-39b8-45aa-968a-fde13bc140f2').thema(thema).entry('Zeitpunkt').get());
        entries.push(new Builder().id('c3e40543-7ffe-45f0-8832-232ff2fba37a').thema(thema).entry('Zeitangaben').get());
        entries.push(new Builder().id('fc4d02c5-5a0e-4fe3-9336-6ea893e51f79').thema(thema).entry('Dauer').get());
        entries.push(new Builder().id('f805c7d3-6873-4319-8069-49b39e3877c1').thema(thema).entry('Häufigkeit').get());
        entries.push(new Builder().id('06cf66cb-1c24-498c-bef8-ebf2eff7e8df').thema(thema).entry('Quantität angeben').get());
        entries.push(new Builder().id('2ac41ac5-417b-4a56-aa27-ca4547747e68').thema(thema).entry('Zahlen').get());
        entries.push(new Builder().id('3d14da3b-e890-455e-922b-da4fa727b2cf').thema(thema).entry('Mengenangaben').get());
        entries.push(new Builder().id('adf84a7b-3f0f-4e5c-9b5c-97797725528b').thema(thema).entry('Menge').get());
        entries.push(new Builder().id('7825a254-57be-4153-b911-04c31c42d39f').thema(thema).entry('Grad').get());
        entries.push(new Builder().id('9f55abc1-c552-407c-882f-e7d370d691b3').thema(thema).entry('Dimension').get());
        entries.push(new Builder().id('c68beba6-85f3-4df0-b5b6-68e8fc9d6554').thema(thema).entry('Maßangabe').get());
        entries.push(new Builder().id('6ee15b97-1d00-457d-8404-d2ad763abdfc').thema(thema).entry('Art und Weise angeben').get());
        entries.push(new Builder().id('df952e29-a8ff-4db7-95f0-80a2e3d3a3ab').thema(thema).entry('physisch').get());
        entries.push(new Builder().id('d9d8f4d6-3882-48d3-b39c-18443b2a3bb5').thema(thema).entry('Wertung').get());
        entries.push(new Builder().id('dfa36229-0b42-43f3-9d17-05a1274d2598').thema(thema).entry('Vergleich').get());
        entries.push(new Builder().id('a12d807b-45b1-4717-af36-599af0849253').thema(thema).entry('Logische Verknüpfung herstellen').get());
        entries.push(new Builder().id('506e4bfa-7017-4750-a340-ff4ea2025a8a').thema(thema).entry('Grund').get());
        entries.push(new Builder().id('2529b6b0-1862-4eb6-bcef-4baea86ff21e').thema(thema).entry('Bedingung').get());
        entries.push(new Builder().id('13a6b9c5-746f-4366-ae3e-a103bde6e4b0').thema(thema).entry('Aufzählung').get());
        entries.push(new Builder().id('d4a505e5-fecf-40a6-abe7-6b0a44337f0f').thema(thema).entry('Alternative').get());
        entries.push(new Builder().id('e5dcbaf3-f2ae-42f0-873c-be9e137ce997').thema(thema).entry('Modales ausdrücken').get());
        entries.push(new Builder().id('eaf19a42-c1bf-4460-82f0-9d4ac8868396').thema(thema).entry('Fähigkeit').get());
        entries.push(new Builder().id('ef2ceb84-a949-460f-9f3d-5bef4f5ca6f8').thema(thema).entry('Möglichkeit').get());
        entries.push(new Builder().id('c5207c56-0c48-419b-b433-3923b15f24d7').thema(thema).entry('Notwendigkeit').get());
        entries.push(new Builder().id('6b5fa972-29d7-4677-b5e7-939ac75b2b27').thema(thema).entry('Verpflichtung').get());
        this.addEntries(entries);
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    getEntries() {
        return this.entries;
    }
}

export default NotionsA1Service;