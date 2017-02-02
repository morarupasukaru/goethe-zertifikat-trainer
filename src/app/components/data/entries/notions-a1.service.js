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
        entries.push(new Builder().id('').thema(thema).entry(['Gibt es hier einen Kindergarten?', '- Nein, es gibt nur eine Grundschule.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Hier gibt es aber viele Kinos.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'anwesend/abwesend sein'];
        entries.push(new Builder().id('').thema(thema).entry(['Ist Elke da?', '- Ja./Nein, leider nicht.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) verfügbar sein'];
        entries.push(new Builder().id('').thema(thema).entry(['Hast du ein Auto?', '- Nein, leider nicht.', '- Nein, ich habe kein Auto.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) vorkommen'];
        entries.push(new Builder().id('').thema(thema).entry('Was ist passiert?').get());
        entries.push(new Builder().id('').thema(thema).entry('Wann ist das passiert?').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Inklusion/Exklusion'];
        entries.push(new Builder().id('').thema(thema).entry('Ich komme mit meiner Freundin.').get());
        entries.push(new Builder().id('').thema(thema).entry('Er kommt ohne Auto.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Besitz/Zugehörigkeit'];
        entries.push(new Builder().id('').thema(thema).entry(['Wem gehört der Mercedes?', '- Das ist mein/dein/sein/ihr Auto.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Simon arbeitet jetzt bei Siemens.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Ort'];
        entries.push(new Builder().id('').thema(thema).entry(['Wo wohnst du?', '- In Köln.', '- Ich wohne jetzt bei Petra.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wo ist denn meine Brille?', '- Hier.', '- Dort.', '- Da ist sie ja.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wo sind die Kinder?', '- Zu Hause.', '- In der Schule.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wo liegt ...?', '- Kiel liegt an der Ostsee.', '- Die Schlüssel liegen auf dem Tisch.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Herkunft'];
        entries.push(new Builder().id('').thema(thema).entry(['Woher kommst du?', '- Aus der Ukraine.', '- Aus Prag.', '- Vom Arzt.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Richtung'];
        entries.push(new Builder().id('').thema(thema).entry(['Wohin gehst du?', 'Wohin fährst du?', '- Nach Hause.', '- Zur Arbeit.', '- In die Schule.', '- Zu Susi.', '- Auf die Bank.', '- Ans Meer.', '- Nach Österreich.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Raum definieren', 'Distanz'];
        entries.push(new Builder().id('').thema(thema).entry(['Wie weit ist es bis Bonn?', '- Nur zehn Kilometer.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Zeitpunkt'];
        entries.push(new Builder().id('').thema(thema).entry(['Wann kommst du?', '- Um 3 (Uhr).', '- Am 20. September.', '- Im Juli.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wie spät ist es bitte?', '- Es ist jetzt 7 Uhr .']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Zeitangaben'];
        entries.push(new Builder().id('').thema(thema).entry(['Wann sind Sie geboren?', '- Am 12. Mai 1988.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Wir fahren im Mai in Urlaub.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Vorzeitigkeit'];
        entries.push(new Builder().id('').thema(thema).entry('Komm bitte vor 10 Uhr.').get());
        entries.push(new Builder().id('').thema(thema).entry('Wir sind (zu) früh .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Nachzeitigkeit'];
        entries.push(new Builder().id('').thema(thema).entry('Bitte nach 23 Uhr nicht mehr anrufen.').get());
        entries.push(new Builder().id('').thema(thema).entry('Wir sind leider zu spät .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Zukunftsbezug'];
        entries.push(new Builder().id('').thema(thema).entry('Morgen muss ich arbeiten.').get());
        entries.push(new Builder().id('').thema(thema).entry('Wir machen das bald/später .').get());
        entries.push(new Builder().id('').thema(thema).entry('Heute Abend rufe ich dich an.').get());
        entries.push(new Builder().id('').thema(thema).entry('Am Montag gehen wir ins Kino.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Gegenwartsbezug'];
        entries.push(new Builder().id('').thema(thema).entry('Wir essen jetzt .').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich bin schon da.').get());
        entries.push(new Builder().id('').thema(thema).entry('Er ist heute in Mainz.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Vergangenheitsbezug'];
        entries.push(new Builder().id('').thema(thema).entry('Gestern/vor zwei Tagen habe ich die Prüfung gemacht.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Verspätung/Frühzeitigkeit'];
        entries.push(new Builder().id('').thema(thema).entry('Es ist schon spät .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Dauer'];
        entries.push(new Builder().id('').thema(thema).entry(['Wie lange bleibt ihr in Berlin?', '- Drei Wochen.', '- (Nicht) Lange.', '- Bis Montag.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Beginn'];
        entries.push(new Builder().id('').thema(thema).entry(['Wann beginnt der Film?', '- Um 20 Uhr fängt er an .']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Ende'];
        entries.push(new Builder().id('').thema(thema).entry(['Bis wann arbeitest du?', '- Heute bis 18 Uhr.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', 'Häufigkeit'];
        entries.push(new Builder().id('').thema(thema).entry(['Wie oft geht sie ins Kino?', '- Zweimal im Monat.', '- Nie!', '- Oft.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Zahlen/Mengenangaben'];
/*
        entries.push(new Builder().id('').thema(thema).entry('').get());
Was/Wie viel kostet die Zeitung?
- Vier Euro.
        entries.push(new Builder().id('').thema(thema).entry('').get());
Was darf‘s denn sein?
- Ein Pfund Tomaten, bitte.
- Ein Glas Milch, bitte.
- Eine Flasche Wein, bitte.
- Eine Tasse Tee, bitte.
- 1,5 Liter, bitte.
        entries.push(new Builder().id('').thema(thema).entry('').get());
Wie viel möchten Sie?
- (Nicht) Alles.
- Viel.
- Ein bisschen, bitte.
*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Menge'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Grad'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Quantität angeben', 'Dimension/Maßangabe'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'physisch'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'Wertung'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Art und Weise angeben', 'Vergleich'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Grund'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Bedingung'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Logische Verknüpfung herstellen', 'Aufzählung/Alternative'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Fähigkeit'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Möglichkeit'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

        thema = ['Allgemeine Begriffe (Notionen)', 'Modales ausdrücken', 'Notwendigkeit/Verpflichtung'];
        entries.push(new Builder().id('').thema(thema).entry('').get());
/*

*/

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

        // TODO uuid
        entries.push(new Builder().id('').thema(thema).entry('Vorzeitigkeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Nachzeitigkeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Zukunftsbezug').get());
        entries.push(new Builder().id('').thema(thema).entry('Gegenwartsbezug').get());
        entries.push(new Builder().id('').thema(thema).entry('Vergangenheitsbezug').get());
        entries.push(new Builder().id('').thema(thema).entry('Verspätung').get());
        entries.push(new Builder().id('').thema(thema).entry('Frühzeitigkeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Beginn').get());
        entries.push(new Builder().id('').thema(thema).entry('Ende').get());
        thema = ['Allgemeine Begriffe (Notionen)', 'Zeit angeben', ''];
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