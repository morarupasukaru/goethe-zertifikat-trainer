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
        let thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) sein'];
        entries.push(new Builder().id('d61ab341-bd1e-43e9-a236-1f4e7f02b278').thema(thema).entry(['Gibt es hier einen Kindergarten?', '– Nein, es gibt nur eine Grundschule.']).get());
        entries.push(new Builder().id('38b0eee2-4d43-4140-82ba-ba364c5b4968').thema(thema).entry('Hier gibt es aber viele Kinos.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'anwesend/abwesend sein'];
        entries.push(new Builder().id('f534fe27-b0bd-4ded-abd9-de139673ade2').thema(thema).entry(['Ist Elke da?', '– Ja./Nein, leider nicht.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) verfügbar sein'];
        entries.push(new Builder().id('98cf6007-169c-4959-888f-5d9cafd40a46').thema(thema).entry(['Hast du ein Auto?', '– Nein, leider nicht.', '– Nein, ich habe kein Auto.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) vorkommen'];
        entries.push(new Builder().id('c4c0413a-6927-4a08-9a76-348d7b27e6e4').thema(thema).entry('Was ist passiert?').get());
        entries.push(new Builder().id('a9f010f7-ab7e-479d-b2d4-bdaf8dcbd5ba').thema(thema).entry('Wann ist das passiert?').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Inklusion/Exklusion'];
        entries.push(new Builder().id('07efa5e1-3206-493d-a5b9-e9e1171140a2').thema(thema).entry('Ich komme mit meiner Freundin.').get());
        entries.push(new Builder().id('6fbe2d67-5bd7-46b1-9518-41211336d9fd').thema(thema).entry('Er kommt ohne Auto.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Besitz/Zugehörigkeit'];
        entries.push(new Builder().id('10aa9ef7-37cd-4c0d-80be-8d02e7c9cb6a').thema(thema).entry(['Wem gehört der Mercedes?', '– Das ist mein/dein/sein/ihr Auto.']).get());
        entries.push(new Builder().id('8d200679-9584-4c05-94e2-c2cc9d5f450a').thema(thema).entry('Simon arbeitet jetzt bei Siemens.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Ort'];
        entries.push(new Builder().id('d73e9bca-16b6-449f-9200-6db680faa87e').thema(thema).entry(['Wo wohnst du?', '– In Köln.', '– Ich wohne jetzt bei Petra.']).get());
        entries.push(new Builder().id('2be6c907-9e93-4bc1-bd64-f571e459150e').thema(thema).entry(['Wo ist denn meine Brille?', '– Hier.', '– Dort.', '– Da ist sie ja.']).get());
        entries.push(new Builder().id('e16b7a41-fe7b-499f-a0ca-1b86fdf4dfc5').thema(thema).entry(['Wo sind die Kinder?', '– Zu Hause.', '– In der Schule.']).get());
        entries.push(new Builder().id('632c42f9-10ae-4dc0-877d-8468b00d47fd').thema(thema).entry(['Wo liegt ...?', '– Kiel liegt an der Ostsee.', '– Die Schlüssel liegen auf dem Tisch.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Herkunft'];
        entries.push(new Builder().id('b217eae2-48af-4255-9a73-a38073f04eae').thema(thema).entry(['Woher kommst du?', '– Aus der Ukraine.', '– Aus Prag.', '– Vom Arzt.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Richtung'];
        entries.push(new Builder().id('5ef39bb5-0c83-4258-b8c1-796b277b9032').thema(thema).entry(['Wohin gehst du?', 'Wohin fährst du?', '– Nach Hause.', '– Zur Arbeit.', '– In die Schule.', '– Zu Susi.', '– Auf die Bank.', '– Ans Meer.', '– Nach Österreich.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Distanz'];
        entries.push(new Builder().id('f415487e-eefc-4e5f-af47-b324d1f4ca5e').thema(thema).entry(['Wie weit ist es bis Bonn?', '– Nur zehn Kilometer.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zeitpunkt'];
        entries.push(new Builder().id('d0149e0e-fd9d-407a-963e-02984e3f20d8').thema(thema).entry(['Wann kommst du?', '– Um 3 (Uhr).', '– Am 20. September.', '– Im Juli.']).get());
        entries.push(new Builder().id('c51c2744-299d-4041-9840-80b3acc2b3c2').thema(thema).entry(['Wie spät ist es bitte?', '– Es ist jetzt 7 Uhr .']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zeitangaben'];
        entries.push(new Builder().id('0591f36d-55e1-434e-9f96-8ad20ad3bb97').thema(thema).entry(['Wann sind Sie geboren?', '– Am 12. Mai 1988.']).get());
        entries.push(new Builder().id('5f992da2-af53-4c41-a302-462942f62943').thema(thema).entry('Wir fahren im Mai in Urlaub.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Vorzeitigkeit'];
        entries.push(new Builder().id('4cff3a4d-0a32-4a51-811d-f6ee419cf10a').thema(thema).entry('Komm bitte vor 10 Uhr.').get());
        entries.push(new Builder().id('b5d754c1-5745-4643-bdd0-3b47f388b6b9').thema(thema).entry('Wir sind (zu) früh .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Nachzeitigkeit'];
        entries.push(new Builder().id('9ea3f416-f092-4c86-b415-c2de3bf5cd58').thema(thema).entry('Bitte nach 23 Uhr nicht mehr anrufen.').get());
        entries.push(new Builder().id('52122611-1e51-4a8a-98b9-7a7a9a2aa7d3').thema(thema).entry('Wir sind leider zu spät .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zukunftsbezug'];
        entries.push(new Builder().id('209b9c06-388b-4462-a6ad-49a3ba82d4e2').thema(thema).entry('Morgen muss ich arbeiten.').get());
        entries.push(new Builder().id('57bd0bae-e4aa-4966-8285-cf56a750c62b').thema(thema).entry('Wir machen das bald/später .').get());
        entries.push(new Builder().id('a5f33626-3cf0-4359-899b-a51d0af16c36').thema(thema).entry('Heute Abend rufe ich dich an.').get());
        entries.push(new Builder().id('064c6fa6-5128-411e-810b-c6dfa0ff4ec1').thema(thema).entry('Am Montag gehen wir ins Kino.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Gegenwartsbezug'];
        entries.push(new Builder().id('d7a874ee-db25-4398-bb00-28fd0d42e862').thema(thema).entry('Wir essen jetzt .').get());
        entries.push(new Builder().id('548d4368-137e-4359-8505-8fb7c06309df').thema(thema).entry('Ich bin schon da.').get());
        entries.push(new Builder().id('694e99d5-4b65-41d7-9330-e2cb1c5d03cb').thema(thema).entry('Er ist heute in Mainz.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Vergangenheitsbezug'];
        entries.push(new Builder().id('52e865ef-83b4-4fa8-9d84-ccc9f52ab966').thema(thema).entry('Gestern/vor zwei Tagen habe ich die Prüfung gemacht.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Verspätung/Frühzeitigkeit'];
        entries.push(new Builder().id('ae5533b4-2a30-4a8a-88cd-1faa94ed4751').thema(thema).entry('Es ist schon spät .').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Dauer'];
        entries.push(new Builder().id('84424875-add6-4661-9f3e-9d22581b49a4').thema(thema).entry(['Wie lange bleibt ihr in Berlin?', '– Drei Wochen.', '– (Nicht) Lange.', '– Bis Montag.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Beginn'];
        entries.push(new Builder().id('f9de84c5-bbc7-43aa-93e3-cd9133cee725').thema(thema).entry(['Wann beginnt der Film?', '– Um 20 Uhr fängt er an .']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Ende'];
        entries.push(new Builder().id('f265545e-3683-46cf-bcdc-07460e123eda').thema(thema).entry(['Bis wann arbeitest du?', '– Heute bis 18 Uhr.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Häufigkeit'];
        entries.push(new Builder().id('da5a5eb5-23b3-4f87-a083-ed99a1fa07b6').thema(thema).entry(['Wie oft geht sie ins Kino?', '– Zweimal im Monat.', '– Nie!', '– Oft.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Zahlen/Mengenangaben'];
        entries.push(new Builder().id('41941a44-bb2d-4330-b5a9-f4c6e83ffc2b').thema(thema).entry(['Was/Wie viel kostet die Zeitung?', '– Vier Euro.']).get());
        entries.push(new Builder().id('cb4d2aaf-98a3-4a7f-b4f2-32a03ce21bed').thema(thema).entry(['Was darf‘s denn sein?', '– Ein Pfund Tomaten, bitte.', '– Ein Glas Milch, bitte.', '– Eine Flasche Wein, bitte.', '– Eine Tasse Tee, bitte.', '– 1,5 Liter, bitte.']).get());
        entries.push(new Builder().id('7bf02814-ffd8-4313-a3ad-93b68a5bae18').thema(thema).entry(['Wie viel möchten Sie?', '– (Nicht) Alles.', '– Viel.', '– Ein bisschen, bitte.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Grad'];
        entries.push(new Builder().id('352ebb06-cdf2-4691-9da6-02c45cfee1b3').thema(thema).entry('Das ist sehr/zu gefährlich.').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Dimension/Maßangabe'];
        entries.push(new Builder().id('ffd7295e-58e9-4c50-b77b-a6bb641b1306').thema(thema).entry(['Wie lang/groß ...?', '– 1,5 Meter.']).get());
        entries.push(new Builder().id('a09246e3-248a-4fc9-aede-f101ea3c952a').thema(thema).entry(['Wie schwer ...?', '– 500 Gramm.', '– 2 Kilo(gramm).']).get());
        entries.push(new Builder().id('8e4fc4bb-909e-4393-91df-0450715ddf8e').thema(thema).entry(['Wie warm ...?', '– 20 Grad.', '– Sehr warm.', '– Nicht kalt.']).get());
        entries.push(new Builder().id('113c9843-822b-41bc-9988-7373e175a5cd').thema(thema).entry(['Wie viel ...?', '– Einen Liter.']).get());
        entries.push(new Builder().id('3dacbb00-d34c-4d9b-8b91-25937a123100').thema(thema).entry(['Wie schnell ...?', '– Nur maximal 60 km/h.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'physisch'];
        entries.push(new Builder().id('e7e3e9c3-5062-48ee-a556-ec1d89a6cf30').thema(thema).entry(['Wie schmeckt das Essen?', 'Wie riecht das Essen?', '– Wirklich gut.', '– Wirklich nicht gut.']).get());
        entries.push(new Builder().id('2c4e672b-59a9-4a39-b7c8-2867c3a1aa42').thema(thema).entry(['Welche Farbe hat das Auto?', '– Es ist rot.', '– Es ist blau.', '– Es ist grün.', '– Es ist gelb.', '– Es ist schwarz.', '– Es ist weiß.', '– Es ist braun.']).get());
        entries.push(new Builder().id('e9a35f28-c8d0-4838-bb44-ec743cd5b74f').thema(thema).entry(['Die Tür ist offen.', 'Die Tür ist geschlossen.']).get());
        entries.push(new Builder().id('f3b8f37d-a025-4503-ad72-77316f5bbc64').thema(thema).entry(['Wie alt ist Dieter?', '– Nicht sehr alt.', '– Schon 60.', '– Erst 50.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'Wertung'];
        entries.push(new Builder().id('920f206b-434d-4a5d-99e6-8d6dc0ddc97f').thema(thema).entry(['(Wert/Preis?)', '– (nicht) teuer/billig']).get());
        entries.push(new Builder().id('46c7369b-46e7-4457-8b06-fe607c940574').thema(thema).entry(['(Qualität?)', '– (nicht) (sehr) gut']).get());
        entries.push(new Builder().id('f796ea02-0777-467c-be1a-52eec68d642d').thema(thema).entry(['(akzeptabel?)', '(adäquat?)', '– (nicht) in Ordnung', '– (nicht) in Ordnung, genug']).get());
        entries.push(new Builder().id('6b200c3e-5922-4195-b113-bfde26f3cc64').thema(thema).entry(['(richtig?)', '– (nicht) richtig']).get());
        entries.push(new Builder().id('55e3b19e-dbbd-4c52-b30b-da9228d62880').thema(thema).entry(['(Fähigkeit?)', '– (nicht) können']).get());
        entries.push(new Builder().id('cab900a1-4c65-49c5-91ef-f81e0ab531c2').thema(thema).entry(['(Wichtigkeit?)', '– (nicht) wichtig', 'wie wichtig?']).get());
        entries.push(new Builder().id('69ddcb61-63b2-47c8-8e4b-46c795a2426e').thema(thema).entry(['(Normalität?)', '– (nicht) normal']).get());
        entries.push(new Builder().id('02db56c6-0026-4f51-83be-e6491c50d9f9').thema(thema).entry(['(Schwierigkeit?)', '– (nicht) leicht']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'Vergleich'];
        entries.push(new Builder().id('a93bf30f-ee1c-44c0-9252-541e1b9d7595').thema(thema).entry(['Spielst du Fußball?', '– Ja, wie meine Schwester.']).get());
        entries.push(new Builder().id('977bb41c-27f5-4158-8afb-bee0e9749b1d').thema(thema).entry(['Sie ist so alt wie ich.', 'Wir sind gleich alt.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Grund'];
        entries.push(new Builder().id('f493c962-a899-4e4d-8838-a76f131bb374').thema(thema).entry(['Warum kommt er nicht mit zur Party?', '– Er kann nicht. Er arbeitet heute lange.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Bedingung'];
        entries.push(new Builder().id('87e78823-7d20-4311-acc0-6bda2ce1aa49').thema(thema).entry(['Kann ich das Auto haben?', '– Ja, aber nur für eine Stunde.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Aufzählung/Alternative'];
        entries.push(new Builder().id('0625d50e-be98-418a-8cee-a6d6f68abb2c').thema(thema).entry('Er isst und trinkt gern.').get());
        entries.push(new Builder().id('ab49a78b-a21c-46bf-b046-710f30d47099').thema(thema).entry('Möchtest du Wasser oder Wein?').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Fähigkeit'];
        entries.push(new Builder().id('ef8760ae-3e1c-4006-9ec7-3e9d06ce1c27').thema(thema).entry(['Können Sie Russisch (sprechen)?', '– Ja klar.', '– Sicher.']).get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Möglichkeit'];
        entries.push(new Builder().id('2b35b4e9-2d15-44f4-ad78-5375dfef5406').thema(thema).entry('Können Sie morgen kommen?').get());

        thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Notwendigkeit/Verpflichtung'];
        entries.push(new Builder().id('a2d07e96-9fcb-40e4-83e7-6ae146b1bdc0').thema(thema).entry('Mein Sohn muss um 8 Uhr zu Hause sein.').get());
        return entries;
    }

    createNotionsWordEntries(Builder) {
        let entries = [];
        let thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Wortschatz'];
        entries.push(new Builder().id('417bb4a4-8549-4d50-ab03-3a2717bb4c58').thema(thema).entry('Existenz von Personen und Dingen, Besitz').get());
        entries.push(new Builder().id('097b0ee8-5f7c-411f-93d2-e76864d52276').thema(thema).entry('Zugehörigkeit ausdrücken').translate("exprimer l'appartenance").get());
        entries.push(new Builder().id('db83018f-e871-4cb1-a1b7-fda21dadb802').thema(thema).entry('(nicht) sein').get());
        entries.push(new Builder().id('7fe580c1-dfd5-40d3-b782-e8e89764e721').thema(thema).entry('anwesend sein').translate('être présent').get());
        entries.push(new Builder().id('93f15e88-e3c7-4528-86c6-167bf8dc29d4').thema(thema).entry('abwesend sein').translate('être absent').get());
        entries.push(new Builder().id('e1fd1ae3-d708-4592-8be1-453ac67e57cc').thema(thema).entry('(nicht) verfügbar sein').translate('(ne pas) être disponible').get());
        entries.push(new Builder().id('13f6909c-1eee-4c91-a65c-9afa07f5bc4a').thema(thema).entry('(nicht) vorkommen').translate('(ne pas) se passer').get());
        entries.push(new Builder().id('096f38ef-a27a-4785-bf72-da4d04979794').thema(thema).entry('Inklusion').get());
        entries.push(new Builder().id('a1695eb1-fdeb-41dc-9382-fc9aa5d38787').thema(thema).entry('Exklusion').get());
        entries.push(new Builder().id('735695e6-8663-4ea7-9ff1-512f64a98cdd').thema(thema).entry('Zugehörigkeit').translate('appartenance').get());
        entries.push(new Builder().id('c0c659ab-49f3-4e56-9da2-ddf336908b23').thema(thema).entry('Besitz').translate('possession').get());
        entries.push(new Builder().id('a972f650-50b1-43f1-a41a-37b32c2d6183').thema(thema).entry('ausdrücken').translate('exprimer qc.').get());
        entries.push(new Builder().id('b3b71c87-b2ea-4a18-9272-404c9d11e97c').thema(thema).entry('Raum definieren').get());
        entries.push(new Builder().id('e10f61e9-e13e-4a9d-9ca9-b6e09b044641').thema(thema).entry('Ort').translate(['lieu', 'endroit', 'place']).get());
        entries.push(new Builder().id('e76a10ef-6878-49c3-a424-0a3cc266a80a').thema(thema).entry('Herkunft').get());
        entries.push(new Builder().id('820d8f5f-63b3-4653-b1f3-c04f909d9135').thema(thema).entry('Richtung').get());
        entries.push(new Builder().id('751c1b0c-9826-4fe7-805d-dbdcae215e9d').thema(thema).entry('Distanz').get());
        entries.push(new Builder().id('5fbefed9-20f1-422d-9893-ea243dfee703').thema(thema).entry('Zeit angeben').translate("citer l'heure").get());
        entries.push(new Builder().id('c3e65cb3-39b8-45aa-968a-fde13bc140f2').thema(thema).entry('Zeitpunkt').translate(['temps', 'moment', 'instant']).get());
        entries.push(new Builder().id('c3e40543-7ffe-45f0-8832-232ff2fba37a').thema(thema).entry('Zeitangaben').translate('horaire').get());
        entries.push(new Builder().id('fc4d02c5-5a0e-4fe3-9336-6ea893e51f79').thema(thema).entry('Dauer').translate('durée').get());
        entries.push(new Builder().id('f805c7d3-6873-4319-8069-49b39e3877c1').thema(thema).entry('Häufigkeit').translate('fréquence').get());
        entries.push(new Builder().id('06cf66cb-1c24-498c-bef8-ebf2eff7e8df').thema(thema).entry('Quantität angeben').get());
        entries.push(new Builder().id('2ac41ac5-417b-4a56-aa27-ca4547747e68').thema(thema).entry('Zahlen').get());
        entries.push(new Builder().id('3d14da3b-e890-455e-922b-da4fa727b2cf').thema(thema).entry('Mengenangaben').translate('donnée de quantité').get());
        entries.push(new Builder().id('adf84a7b-3f0f-4e5c-9b5c-97797725528b').thema(thema).entry('Menge').translate(['quantité', 'volume', 'masse', 'nombre']).get());
        entries.push(new Builder().id('7825a254-57be-4153-b911-04c31c42d39f').thema(thema).entry('Grad').translate(['degré', 'grade']).get());
        entries.push(new Builder().id('9f55abc1-c552-407c-882f-e7d370d691b3').thema(thema).entry('Dimension').get());
        entries.push(new Builder().id('c68beba6-85f3-4df0-b5b6-68e8fc9d6554').thema(thema).entry('Maßangabe').get());
        entries.push(new Builder().id('6ee15b97-1d00-457d-8404-d2ad763abdfc').thema(thema).entry('Art und Weise angeben').get());
        entries.push(new Builder().id('df952e29-a8ff-4db7-95f0-80a2e3d3a3ab').thema(thema).entry('physisch').get());
        entries.push(new Builder().id('d9d8f4d6-3882-48d3-b39c-18443b2a3bb5').thema(thema).entry('Wertung').translate('évaluation').get());
        entries.push(new Builder().id('dfa36229-0b42-43f3-9d17-05a1274d2598').thema(thema).entry('Vergleich').translate('comparaison').get());
        entries.push(new Builder().id('a12d807b-45b1-4717-af36-599af0849253').thema(thema).entry('Logische Verknüpfung herstellen').translate('établir un lien logique').get());
        entries.push(new Builder().id('4c27f9c3-0fb2-403d-a94b-b4da2a17037e').thema(thema).entry('Verknüpfung').translate('lien').get());
        entries.push(new Builder().id('a0cfea93-f9a4-478d-8a67-7fe88a025bf7').thema(thema).entry('herstellen').translate(['établir qc.', 'créer qc.']).get());
        entries.push(new Builder().id('506e4bfa-7017-4750-a340-ff4ea2025a8a').thema(thema).entry('Grund').translate(['cause', 'raison']).get());
        entries.push(new Builder().id('2529b6b0-1862-4eb6-bcef-4baea86ff21e').thema(thema).entry('Bedingung').translate('condition').get());
        entries.push(new Builder().id('13a6b9c5-746f-4366-ae3e-a103bde6e4b0').thema(thema).entry('Aufzählung').translate(['dénombrement', 'énumération']).get());
        entries.push(new Builder().id('d4a505e5-fecf-40a6-abe7-6b0a44337f0f').thema(thema).entry('Alternative').get());
        entries.push(new Builder().id('e5dcbaf3-f2ae-42f0-873c-be9e137ce997').thema(thema).entry('Modales ausdrücken').get());
        entries.push(new Builder().id('eaf19a42-c1bf-4460-82f0-9d4ac8868396').thema(thema).entry('Fähigkeit').translate(['aptitude', 'capacité']).get());
        entries.push(new Builder().id('ef2ceb84-a949-460f-9f3d-5bef4f5ca6f8').thema(thema).entry('Möglichkeit').translate(['occasion', 'possibilité']).get());
        entries.push(new Builder().id('c5207c56-0c48-419b-b433-3923b15f24d7').thema(thema).entry('Notwendigkeit').translate(['besoin', 'nécessité']).get());
        entries.push(new Builder().id('6b5fa972-29d7-4677-b5e7-939ac75b2b27').thema(thema).entry('Verpflichtung').translate(['obligation', 'engagement']).get());
        entries.push(new Builder().id('3bd7bd82-1e2d-4551-8571-dd39cc577a0d').thema(thema).entry('Vorzeitigkeit').translate('antériorité').get());
        entries.push(new Builder().id('6efca814-8b1a-4b76-901b-28112e877aad').thema(thema).entry('Nachzeitigkeit').translate('postériorité').get());
        entries.push(new Builder().id('a5f1bf45-dd10-4ef6-b5fd-df4cafab1d9d').thema(thema).entry('Zukunftsbezug').translate('référence future').get());
        entries.push(new Builder().id('f3302f3c-ac26-4e15-9176-d6aae3237d90').thema(thema).entry('Gegenwartsbezug').translate('référence présent').get());
        entries.push(new Builder().id('191a5c63-e9cb-45b9-99d7-3ccf7865b366').thema(thema).entry('Vergangenheitsbezug').translate('référence passé').get());
        entries.push(new Builder().id('6ab8a26b-2532-45be-bae7-0f5f06b8fdb5').thema(thema).entry('Verspätung').translate('retard').get());
        entries.push(new Builder().id('8bed217f-f32d-440c-bdc0-fbd67a7f32e1').thema(thema).entry('Frühzeitigkeit').translate('précocité').get());
        entries.push(new Builder().id('7d9462dd-b5b0-4e39-b06c-24042827fd3a').thema(thema).entry('Beginn').translate(['début', 'commencement']).get());
        entries.push(new Builder().id('d8ea8184-4fd3-4405-b23c-f1b3f9023ca7').thema(thema).entry('Ende').get());
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