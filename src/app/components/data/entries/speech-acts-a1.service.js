class SpeechActsA1Service {

    /*@ngInject*/
    constructor(SpeechActBuilder) {
        this.createEntries(SpeechActBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createInformationsaustauschEntries(Builder));
        this.addEntries(this.createBewertungKommentarEntries(Builder));
        this.addEntries(this.createGefuehlsausdruckEntries(Builder));

        this.addEntries(this.createHandlungsregulierungEntries(Builder));
        this.addEntries(this.createSozialeKonventionenEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createInformationsaustauschEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Informationsaustausch', ['benennen', 'definieren', 'identifizieren']];
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry(['Wer ist das?', '- Das ist Wolfgang', '- Das ist Frau Schuster', '- Das ist meine Kollegin.']).get());
        entries.push(new Builder().id('12534c9b-9623-47dc-9a92-33d6d323d403').thema(thema).entry(['Was ist das?', '- Das ist eine Blume.']).get());
        entries.push(new Builder().id('f99c0778-671e-4e60-82e1-7a0cdb1c4cb9').thema(thema).entry(['Ist das eine Orange?', '- Nein, eine Zitrone.']).get());
        entries.push(new Builder().id('3602d2d6-a8b3-4aeb-a0b2-cf0027b5d7ae').thema(thema).entry('Wie heißt das auf Deutsch? Erklären Sie mal.').get());
        entries.push(new Builder().id('').thema(thema).entry('Der Film heißt „Abgeschminkt“.').get());
        entries.push(new Builder().id('').thema(thema).entry('Diese CD gehört mir').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'beschreiben'];
        entries.push(new Builder().id('').thema(thema).entry(['Wie sieht die Tasche aus?', '- Sie ist braun.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'erklären'];
        entries.push(new Builder().id('').thema(thema).entry('Wie geht das?').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'berichten'];
        entries.push(new Builder().id('').thema(thema).entry(['Was ist passiert?', '- Ich hatte einen Unfall.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Mitteilung', 'Ankündigung']];
        entries.push(new Builder().id('').thema(thema).entry(['Was machst du heute Abend?', '- Ich besuche Freunde.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wann fährst du (wieder)?', '- Nächstes Jahr fahren wir nach Griechenland.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'Zweck und Bestimmung angeben'];
        entries.push(new Builder().id('').thema(thema).entry('Was ist das?').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Wissen', 'Unwissen']];
        entries.push(new Builder().id('').thema(thema).entry(['Weiß sie das?', '- Ja.', '- Nein.', '- Vielleicht.']).get());
        return entries;
    }

    createBewertungKommentarEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Zufriedenheit', 'Unzufriedenheit']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie waren eure Ferien?', '- (Sehr) Schön.', '- Prima.', '- (Ganz) Gut.', '- (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Der Film war sehr gut.').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Gefallen', 'Missfallen']];
        entries.push(new Builder().id('').thema(thema).entry(['Was denkst du? Gefällt es dir hier?', '- Ja (sehr).', '- (Es ist) Super!', '- (Es ist) Toll!', '- (Es ist) Klasse!', '- Nein, leider nicht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Gefällt es Ihnen?', '- Ich finde es toll', '- Ich finde es (sehr) schön', '- Ich finde es gut',
            '- Ich finde es prima.', '- Ich bin zufrieden.', '- Das finde ich nicht gut', '- Das finde ich hässlich', '- Das finde ich langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Hotel gefällt mir nicht.', 'Ich finde es hier langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Restaurant sieht gut', 'Das Restaurant sieht nett', 'Das Restaurant sieht schrecklich aus.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Ich liebe diese Stadt.', 'Ich mag diese Stadt nicht.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Interesse', 'Desinteresse']];
        entries.push(new Builder().id('').thema(thema).entry(['Gefallen dir die Geschenke?', '- Ja klar.', '- Na ja, es geht.', '- Nicht so.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Was sind deine Hobbys?').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Billigung', 'Missbilligung']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie findest du das?', '- Gut.', '- (Un-) Interessant.', '- Es geht.', '- Langweilig.', '- (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wie finden Sie das Lehrbuch?', '- Es ist (sehr) interessant', '- Es ist zu langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry('So geht das nicht.').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Zustimmung', 'Ablehnung']];
        entries.push(new Builder().id('').thema(thema).entry('Das stimmt (nicht).').get());
        entries.push(new Builder().id('').thema(thema).entry(['Das ist richtig', 'Das ist falsch.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Wunsch']];
        entries.push(new Builder().id('').thema(thema).entry('Was wollen wir heute Abend machen?').get());
        entries.push(new Builder().id('').thema(thema).entry('Willst du auf das Fest gehen?').get());
        entries.push(new Builder().id('').thema(thema).entry('Möchten Sie noch etwas Milch?').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich möchte einen Kaffee.').get());
        entries.push(new Builder().id('').thema(thema).entry('Peter will ein Eis.').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich möchte den Film sehen.').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich brauche jetzt eine Pause.').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Vorlieben']];
        entries.push(new Builder().id('').thema(thema).entry(['Tee oder Kaffee?', '- Kaffee, bitte.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Magst du Tee oder Kaffee?', '- Ich trinke lieber Tee.', '- Nichts, danke.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Wichtigkeit']];
        entries.push(new Builder().id('').thema(thema).entry(['Ist das (wirklich) wichtig?', '- Das ist (schon/sehr) wichtig.', '- Nicht so wichtig.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['verneinen', 'Widerspruch']];
        entries.push(new Builder().id('').thema(thema).entry('Nein!').get());
        entries.push(new Builder().id('').thema(thema).entry('Doch!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das stimmt nicht.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist falsch.').get());
        entries.push(new Builder().id('').thema(thema).entry('Unsinn!').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Beschwerde']];
        entries.push(new Builder().id('').thema(thema).entry('Es ist zu warm hier!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist zu teuer!').get());
        entries.push(new Builder().id('').thema(thema).entry('Entschuldigen Sie, die Heizung funktioniert nicht.').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Rechtfertigung', 'Begründung']];
        entries.push(new Builder().id('').thema(thema).entry(['Warum kommst du nicht?', '- Ich habe keine Zeit.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Seine Mutter ist krank. Deshalb kommt er heute nicht.').get());
        return entries;
    }

    createGefuehlsausdruckEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Freude', 'Bedauern']];
        entries.push(new Builder().id('').thema(thema).entry(['Ist das nicht toll!', '- Ja, super!', '- Finde ich auch.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Ich bin glücklich. Und du?', '- Sehr.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Glückwunsch!', '- Danke!']).get());
        entries.push(new Builder().id('').thema(thema).entry('Leider.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist schade!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das tut mir leid.').get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Neigung', 'Abneigung']];
        entries.push(new Builder().id('').thema(thema).entry(['Schmeckt‘s dir nicht?', '- Doch, sehr gut.', '- Nein, ich mag eigentlich keinen Fisch.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Isst du gern Chinesisch?', '- Ja, gern(e).', '- Nein, nie.']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Gelassenheit', 'Gleichgültigkeit']];
        entries.push(new Builder().id('').thema(thema).entry(['Ich kann leider nicht kommen.', '- Egal.', '- Na und?', '- Das ist mir egal']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Mitleid'];
        entries.push(new Builder().id('').thema(thema).entry('(Es) Tut mir (wirklich) (sehr) leid.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das finde ich aber traurig.').get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Erstaunen', 'Überraschung']];
        entries.push(new Builder().id('').thema(thema).entry(['Komisch!', 'Das ist ja komisch!', 'Wie komisch!', '- Ja, sehr komisch.']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Hoffnung'];
        entries.push(new Builder().id('').thema(thema).entry('Hoffentlich regnet es nicht.').get());
        entries.push(new Builder().id('').thema(thema).entry('Hoffentlich kommt bald der Bus.').get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Sorge', 'Befürchtung']];
        entries.push(new Builder().id('').thema(thema).entry(['Ich habe Angst.', 'Schon 10 Uhr, und er ist immer noch nicht da.']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Enttäuschung'];
        entries.push(new Builder().id('').thema(thema).entry('Was? Du bleibst zu Hause? Schade!').get());
        return entries;
    }

    createHandlungsregulierungEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Bitte', 'Aufforderung']];
        entries.push(new Builder().id('bf040206-7553-4394-9169-16e8a74c45a3').thema(thema).entry('Kaufst du bitte Brot?').get());
        entries.push(new Builder().id('43abd82b-b63f-471d-96e8-def0bc8ef683').thema(thema).entry('Kannst du Milch kaufen?').get());
        entries.push(new Builder().id('ef27fd72-269f-4fb6-a2a0-955eb86daa00').thema(thema).entry('Haben Sie eine Briefmarke?').get());
        entries.push(new Builder().id('eb8f2fe8-e227-48e0-aeda-955ba0ee63b3').thema(thema).entry(['Na klar.', 'Aber natürlich.', 'Ja, natürlich.']).get());
        entries.push(new Builder().id('b02635ba-19c1-401b-b533-df8d1dbbb0cc').thema(thema).entry(['Gehen wir zusammen essen?', '- Gerne.']).get());
        entries.push(new Builder().id('f9dd9874-ac20-4210-8968-3a7f6fa7e500').thema(thema).entry(['Eine Frage bitte: Wie spät ist es?', '- Es ist halb acht (Uhr).']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Bestätigung'];
        entries.push(new Builder().id('7b6cac00-5bae-450c-9022-cf19e577c44e').thema(thema).entry('Stimmt das?').get());
        entries.push(new Builder().id('252779d4-076b-4f65-b5af-076be013fb99').thema(thema).entry('Richtig?').get());
        entries.push(new Builder().id('7968ee20-e627-406b-87d0-134bb8f54226').thema(thema).entry('Ja.').get());
        entries.push(new Builder().id('d0482282-748c-4d00-8c0b-1ace87434e80').thema(thema).entry('Doch.').get());
        entries.push(new Builder().id('9be964d0-2b8c-43e3-8058-d4874e5927f2').thema(thema).entry('Das ist richtig.').get());
        entries.push(new Builder().id('8aef0da2-9d28-4ecc-8f80-55f9bb19accc').thema(thema).entry('Stimmt.').get());
        entries.push(new Builder().id('7ee613da-21fa-43cd-805d-2ab1298958f9').thema(thema).entry('Genau (so).').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Hilfe anbieten/annehmen und ablehnen'];
        entries.push(new Builder().id('f814dff1-ee22-456f-a8e6-53a7555d6e0a').thema(thema).entry(['Kann ich Ihnen helfen?', '- Ja, danke.', '- Gerne.', '- Sehr nett, danke.', '- Nein, danke.']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Bestellung', 'Wunsch']];
        entries.push(new Builder().id('4e0d36af-557e-4f95-bb7b-2cbb228cf979').thema(thema).entry('Ich möchte ein Zimmer reservieren.').get());
        entries.push(new Builder().id('bfb936b8-4fbb-42b0-a20e-f7339e43186e').thema(thema).entry('Ich nehme die Tomatensuppe und den Salat.').get());
        entries.push(new Builder().id('497cf1c8-2e69-4412-ba77-ad87c39be0e4').thema(thema).entry('Einen Moment.').get());
        entries.push(new Builder().id('a0d6977a-b3ae-4504-a4bb-0aca2b529ac8').thema(thema).entry('Sofort.').get());
        entries.push(new Builder().id('ab6b092c-8925-4916-9074-8cadc42534bd').thema(thema).entry('Gleich.').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Rat', 'Empfehlung', 'Warnung']];
        entries.push(new Builder().id('e68c7919-32cf-4beb-b4db-a78bcf92125c').thema(thema).entry('Das ist zu gefährlich/heiß/kalt/...').get());
        entries.push(new Builder().id('8205b27a-fc7b-4811-ac19-412413af286e').thema(thema).entry('Vorsicht!').get());
        entries.push(new Builder().id('fe4dada3-75c0-4b08-8cb9-3561207182e3').thema(thema).entry('Achtung!').get());
        entries.push(new Builder().id('2be55d69-18f3-42ca-bc05-1e94f7a6d910').thema(thema).entry('Halt!').get());
        entries.push(new Builder().id('aa6582dc-b6b3-458f-b110-1521a63e7839').thema(thema).entry('Hilfe!').get());
        entries.push(new Builder().id('b9450720-a3e0-4fe1-a8f9-d093ea7ac1cb').thema(thema).entry('Stopp!').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Erlaubnis', 'Genehmigung']];
        entries.push(new Builder().id('ff0bbdf6-0a17-4342-9708-4a9c47ff9351').thema(thema).entry(['Kann man hier rauchen?', '- Gerne.', '- Natürlich.', '- Ja natürlich.', '- Bitte nicht.', '- Nein, tut mir leid.', '- Das ist hier verboten.']).get());
        entries.push(new Builder().id('13f404c3-f125-4f9c-b430-dac34867c025').thema(thema).entry('Kann ich mal telefonieren?').get());
        entries.push(new Builder().id('88e781a6-6fe8-4c85-9cc4-e3ee81a2e592').thema(thema).entry(['Kann man hier parken?', '- Nein, hier ist Parken verboten.']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Vorschlag'];
        entries.push(new Builder().id('6eefbf43-45f0-4f91-af9a-3519c5bd6c0e').thema(thema).entry(['Gehen wir heute ins Kino?', '- Ja, gerne.']).get());
        entries.push(new Builder().id('330ddfe8-ed76-4ec8-9494-a4064eec8746').thema(thema).entry(['Kommst du mit zu Claudia?', '- Gute Idee.', '- Ja, warum nicht.', '- Gut.', '- Nein, leider nicht.', '- Zeit.', '- Keine Lust']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Versprechung'];
        entries.push(new Builder().id('0955d546-d817-427d-adae-13fe86bb44df').thema(thema).entry(['Morgen bekommst du das Geld.', '- Gut.', '- Danke.', '- Hoffentlich!', '- Versprochen?', '- Wirklich?', '- Ich mache es morgen.', '- Das mache ich!']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Verabredung'];
        entries.push(new Builder().id('ef11140b-e3bb-45f7-ba88-ad2fa9cdf638').thema(thema).entry(['Kannst du morgen Abend?', 'Hast du am Mittwoch Zeit?', '- Ja, wann?', '- Ja, das ist gut.', '- Vielleicht.', '- Nein, (morgen kann ich/geht es) leider nicht.']).get());
        entries.push(new Builder().id('e1f70027-0fbf-480c-918d-1f94e36689c7').thema(thema).entry('Wann hast du (mal/denn) Zeit?').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Einladung'];
        entries.push(new Builder().id('89c12867-492e-41c2-a8b1-8c4f7ea9edcd').thema(thema).entry(['Möchten Sie (noch) etwas trinken?', 'Orangensaft?', '- Nein, danke.']).get());
        entries.push(new Builder().id('04704e75-c44e-433e-a65a-acf9513a0438').thema(thema).entry(['Was möchten Sie bitte?', '- Nichts, danke.']).get());
        entries.push(new Builder().id('d816e242-fce1-4833-a309-c37d8869771a').thema(thema).entry('Setz dich!').get());
        entries.push(new Builder().id('f52f5db5-74a8-41de-b6d6-e02eb787eccb').thema(thema).entry('Setzen Sie sich doch!').get());
        return entries;
    }

    createSozialeKonventionenEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen'];
        entries.push(new Builder().id('284cce58-597b-4d65-889b-6be9de4ecbbe').thema(thema).entry('Hallo!').get());
        entries.push(new Builder().id('50e4afc6-fef0-45df-a74d-a7494ebc92eb').thema(thema).entry(['Roman Jaremkow.', 'Marija Kosik.', 'Helmut!', 'Frau Klein!']).get());
        entries.push(new Builder().id('d85395d9-a4a1-446d-a098-234b0daf4475').thema(thema).entry('Ja, bitte?').get());
        entries.push(new Builder().id('da661874-1bdd-4105-a437-445afb6d01c1').thema(thema).entry('Wie bitte?').get());
        entries.push(new Builder().id('928c9831-7b36-4bf3-a940-b3004052c958').thema(thema).entry(['Sind Sie nicht Frau Yilmaz?', '- Ja (das stimmt).', '- Ja, warum?', '- Nein, ich bin ...', '- Nein, ich heiße ...', '- Nein, mein Name ist ...']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Telefon'];
        entries.push(new Builder().id('dfecd253-9e52-4444-96df-e0d9648abf58').thema(thema).entry(['(Hier) Heine.', 'Guten Tag, Frau Heine.']).get());
        entries.push(new Builder().id('9e0b184a-f246-4a03-a402-0afec98f61ef').thema(thema).entry('Hier ist Josefa Karosz.').get());
        entries.push(new Builder().id('e8101477-1613-4b84-a344-41e4fd3cdc65').thema(thema).entry('Hallo, ist Julia da?').get());
        entries.push(new Builder().id('9b8aae23-fc50-4989-a0c6-242109c8ce37').thema(thema).entry(['Guten Tag. Frau Heuer bitte!', '- Ja, Moment bitte.', '- Tut mir leid, sie ist nicht da.', '- Nein, hier ist ...']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Brief'];
        entries.push(new Builder().id('388ee7a6-5ae1-4c22-8ae7-3a4f38f9c1af').thema(thema).entry('Liebe Renate/Frau Haushofer,').get());
        entries.push(new Builder().id('3141dede-8a04-480f-9995-e1c17f7b265d').thema(thema).entry('Sehr geehrter Herr Liebermann,').get());
        entries.push(new Builder().id('1e368098-9488-4795-ac93-4288bfe3c4fb').thema(thema).entry('Sehr geehrte Damen und Herren,').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'grüßen'];
        entries.push(new Builder().id('9641e5ef-fa1b-4e36-834d-78e2b236905c').thema(thema).entry(['(Guten) Tag/Hallo, Ulrike!', '- (Guten) Tag/Hallo, Karina.']).get());
        entries.push(new Builder().id('9c85f5a8-3536-4d39-a747-5705f18fe429').thema(thema).entry(['Guten Morgen, Frau Schneider.', '- Guten Morgen, Frau Kowalski.']).get());
        entries.push(new Builder().id('3dc74883-3b33-4381-83bb-b759880e9ea5').thema(thema).entry(['Guten Tag, Frau Schneider.', '- Guten Tag, Frau Kowalski.']).get());
        entries.push(new Builder().id('47bbc845-c4ab-4614-b392-31f36820e20a').thema(thema).entry(['Guten Abend, Frau Schneider.', '- Guten Abend, Frau Kowalski.']).get());
        entries.push(new Builder().id('585b9506-92a5-4a13-a5dd-02cf2d7b88ec').thema(thema).entry(['Gute Nacht, Christian.', '- Gute Nacht, Bea.']).get());
        entries.push(new Builder().id('f396c6f3-f261-44aa-9a21-ab500fe421a4').thema(thema).entry(['Hallo, wie geht’s?/wie geht es dir?', '- Danke, gut.']).get());
        entries.push(new Builder().id('5ff10e14-c789-4ccb-89b2-044b0e313316').thema(thema).entry(['Grüß Gott! (süddeutsch)', '- Grüß Gott!']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'sich/jemanden vorstellen'];
        entries.push(new Builder().id('bf43ae14-ce70-4ce6-b9ac-47775f84550d').thema(thema).entry(['(Hallo) Mein Name ist/Ich heiße Vera.', '- Hallo, Vera. Ich heiße Mario.']).get());
        entries.push(new Builder().id('4a8ac2ee-23c0-419e-96dd-f5f6f07d2226').thema(thema).entry(['(Guten Tag) Ich bin Petra Holl.', '- Guten Tag. Ich bin Ulrike Meyer.']).get());
        entries.push(new Builder().id('ee96a88b-461e-4929-bf73-00f1313b1ac3').thema(thema).entry(['Das ist Ulrich Pfeiffer.', '- Ah ja. Ich heiße Johanna Hauser.', '- Ah ja. Ich bin Johanna Hauser.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'über das Befinden sprechen'];
        entries.push(new Builder().id('9bcf21c4-e109-4ee1-87e8-6e5be05d4f45').thema(thema).entry(["Wie geht’s/geht es dir (heute)?", '- Danke, gut. Und dir?', '- Danke, es geht gut. Und dir?', '- Danke, es geht nicht gut. Und dir?']).get());
        entries.push(new Builder().id('9d244000-5b0a-41b7-a6d9-7e731ac769f1').thema(thema).entry(['Geht es Ihnen gut?', '- Ja, super.', '- Na ja, es geht!', '- Ach, nicht so gut.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'gute Wünsche'];
        entries.push(new Builder().id('ec31bb30-3eca-4519-a58a-cda426f76f41').thema(thema).entry('Alles Gute.').get());
        entries.push(new Builder().id('665a376c-ffb0-45d7-8a5b-77a02bb26800').thema(thema).entry('Schöne Ferien!').get());
        entries.push(new Builder().id('d5fb4405-9280-4c90-92c8-539ffd3dfcd2').thema(thema).entry('Gut gemacht!').get());
        entries.push(new Builder().id('71fb9dd6-cd72-4ea5-ab28-969eb310270d').thema(thema).entry('Prost!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Gratulation'];
        entries.push(new Builder().id('6bf39333-5e0b-442a-b041-07c2590a9c4f').thema(thema).entry(['Herzlichen Glückwunsch', '- Danke (schön)!', '- Herzlichen', '- Vielen Dank.', '- Ihnen auch.', '- Danke, ebenfalls.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['eine Anerkennung aussprechen', 'ein Kompliment machen']];
        entries.push(new Builder().id('4f09dba2-c0a5-4215-8565-4822235c68b7').thema(thema).entry('Sie sprechen (sehr) gut Deutsch.').get());
        entries.push(new Builder().id('cd8fb1d9-3a27-42b2-8bf0-dfcdf09d4a45').thema(thema).entry('Das ist toll/(sehr) schön/gut.').get());
        entries.push(new Builder().id('7530c370-b3ce-489c-8002-022761df3894').thema(thema).entry('Das schmeckt gut.').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank'];
        entries.push(new Builder().id('65f1cdbf-ffd7-435c-bae5-ad7bd1df4125').thema(thema).entry(['Danke (schön)!', 'Herzlichen', 'Vielen Dank.', '- Ihnen auch.', '- Danke, ebenfalls.', '- (Aber) Bitte.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank', 'Brief'];
        entries.push(new Builder().id('80fbe548-bab1-4492-ad9c-aaff7150acc8').thema(thema).entry('Vielen Dank.').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Entschuldigung'];
        entries.push(new Builder().id('9079ef28-7a23-4b61-a979-8583db94f4ab').thema(thema).entry(['Entschuldigung', 'Entschuldigen Sie bitte!', '- Bitte!', '- Schon gut.', '- Kein Problem.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung'];
        entries.push(new Builder().id('f0a6f68a-a533-4b53-b896-e6d3b0488a91').thema(thema).entry('(Auf) Wiedersehen!').get());
        entries.push(new Builder().id('de30ade5-f01d-4b43-a4cf-c86aa544cc48').thema(thema).entry('Tschüss!').get());
        entries.push(new Builder().id('c0ad5a09-26c3-4263-976e-66d7061b1a06').thema(thema).entry('Bis bald.').get());
        entries.push(new Builder().id('1b48c2f7-d1e9-403d-99c6-8731d2bef6f7').thema(thema).entry('Bis später.').get());
        entries.push(new Builder().id('eed44aa0-a4e1-4f7c-aef7-192dd877dcc2').thema(thema).entry('Gute Nacht!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Telefon'];
        entries.push(new Builder().id('65313ed7-830a-4401-88a7-b3ba0d53c14e').thema(thema).entry('(Auf) Wiederhören!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Brief'];
        entries.push(new Builder().id('28123bbc-a83b-497d-b3cc-7e46e25bb3ef').thema(thema).entry(['Liebe Grüße', 'Herzliche Grüße']).get());
        entries.push(new Builder().id('debc19da-c966-472f-857d-882fcbce3e35').thema(thema).entry('Mit freundlichen Grüßen').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;