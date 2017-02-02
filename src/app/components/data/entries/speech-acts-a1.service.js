class SpeechActsA1Service {

    /*@ngInject*/
    constructor(SpeechActBuilder, VocabularyBuilder) {
        this.entries = [];
        this.createEntries(SpeechActBuilder);
        this.createThemaAsWordEntries(VocabularyBuilder);
    }

    createEntries(Builder) {
        this.addEntries(this.createInformationsaustauschEntries(Builder));
        this.addEntries(this.createBewertungKommentarEntries(Builder));
        this.addEntries(this.createGefuehlsausdruckEntries(Builder));
        this.addEntries(this.createHandlungsregulierungEntries(Builder));
        this.addEntries(this.createSozialeKonventionenEntries(Builder));
    }

    createThemaAsWordEntries(Builder) {
        let entries = [];
        let thema = 'Sprachhandlungen';
        entries.push(new Builder().id('c2941274-8685-45b6-89db-9607fb844973').thema(thema).entry('Sprachhandlungen').get());
        entries.push(new Builder().id('bfe86459-9246-4663-b432-7a8562e9d0c5').thema(thema).entry('Informationsaustausch').get());
        entries.push(new Builder().id('15430452-fa42-41c7-8add-bce027209637').thema(thema).entry('benennen').get());
        entries.push(new Builder().id('6602d946-7525-48ae-b11a-5e6ab8fdddb8').thema(thema).entry('definieren').get());
        entries.push(new Builder().id('9b6220e9-f912-497f-a9e9-c2ddb016c0dc').thema(thema).entry('identifizieren').get());
        entries.push(new Builder().id('1642258c-0779-409e-952b-7a953cc3a920').thema(thema).entry('beschreiben').get());
        entries.push(new Builder().id('317d48aa-1ef1-4b86-94d9-8e444c816f24').thema(thema).entry('erklären').get());
        entries.push(new Builder().id('4cfc2e8a-7dce-486a-9594-bcb6ef4dc030').thema(thema).entry('berichten').get());
        entries.push(new Builder().id('63f8f7c9-6299-4013-ad3f-62eb4fef005c').thema(thema).entry('Mitteilung').get());
        entries.push(new Builder().id('471c25f2-69e5-445c-8b18-d2733ed1f69f').thema(thema).entry('Ankündigung').get());
        entries.push(new Builder().id('3ab4631b-34d5-4351-b017-1cfbf27dbd50').thema(thema).entry('Zweck angeben').get());
        entries.push(new Builder().id('b3173eba-3f60-4653-ba42-4f52d19ea080').thema(thema).entry('Bestimmung angeben').get());
        entries.push(new Builder().id('db117add-e12f-468c-87f4-2a96590c1d9c').thema(thema).entry('Wissen').get());
        entries.push(new Builder().id('9de7c64a-ce80-4736-ba7d-7e0287513ff9').thema(thema).entry('Unwissen').get());
        entries.push(new Builder().id('086d70aa-4765-4a82-af90-86a9a527a1b2').thema(thema).entry('Bewertung').get());
        entries.push(new Builder().id('1d9922c2-1cb6-451f-aac4-5a5b0f332215').thema(thema).entry('Kommentar').get());
        entries.push(new Builder().id('a1312880-6fc7-40d0-8034-b596889b90fd').thema(thema).entry('Zufriedenheit').get());
        entries.push(new Builder().id('963ecd7d-ea13-4cbf-8c6e-5adf4f838770').thema(thema).entry('Unzufriedenheit').get());
        entries.push(new Builder().id('95bf5e32-7b4e-450e-8bbf-7dd670f1d775').thema(thema).entry('Gefallen').get());
        entries.push(new Builder().id('1a475117-fc9a-46ab-b509-bc548e2618d6').thema(thema).entry('Missfallen').get());
        entries.push(new Builder().id('78b8ed3a-e370-442b-b2cf-9b22482f1d1d').thema(thema).entry('Interesse').get());
        entries.push(new Builder().id('76fdcac7-54ac-4d91-8169-a6220bde8df5').thema(thema).entry('Desinteresse').get());
        entries.push(new Builder().id('19fc33f8-8f10-4e38-930b-530909ef946e').thema(thema).entry('Billigung').get());
        entries.push(new Builder().id('fbde8281-96b9-466b-98e6-1aaa741df5a9').thema(thema).entry('Missbilligung').get());
        entries.push(new Builder().id('e46bc1e3-0890-492f-abeb-0baaaf7fe839').thema(thema).entry('Zustimmung').get());
        entries.push(new Builder().id('9a4f1158-6950-43fa-81b4-4d3329dcd05b').thema(thema).entry('Ablehnung').get());
        entries.push(new Builder().id('1d9b001e-974f-4b36-a33f-5feda37f925a').thema(thema).entry('Wunsch').get());
        entries.push(new Builder().id('692009a1-e0ce-40d7-bdde-9fa9c3ab6dcc').thema(thema).entry('Vorlieben').get());
        entries.push(new Builder().id('38ab04e5-38c0-4789-93e7-f0dacc75899c').thema(thema).entry('Wichtigkeit').get());
        entries.push(new Builder().id('be21220c-436b-4a97-97c3-291c04134146').thema(thema).entry('verneinen').get());
        entries.push(new Builder().id('7c862f5d-e9e0-440c-8f78-9e9ab097b291').thema(thema).entry('Widerspruch').get());
        entries.push(new Builder().id('830a39d4-e062-4bc4-abc8-c2347b66c0b2').thema(thema).entry('Beschwerde').get());
        entries.push(new Builder().id('2d9ff58f-cc83-4e6e-ba65-e93f73282166').thema(thema).entry('Rechtfertigung').get());
        entries.push(new Builder().id('5f8fef39-026a-470e-98bb-a4e96ec59ef0').thema(thema).entry('Begründung').get());
        entries.push(new Builder().id('cc9029a5-db09-432b-878e-19b5afa06bb1').thema(thema).entry('Freude').get());
        entries.push(new Builder().id('87be95f2-9d44-4844-99be-c2c440077e9c').thema(thema).entry('Bedauern').get());
        entries.push(new Builder().id('91b91a38-71dc-419d-89b0-1abbce29a592').thema(thema).entry('Gefühlsausdruck').get());
        entries.push(new Builder().id('194b662a-b568-4cd9-90f3-fb384fb7be82').thema(thema).entry('Neigung').get());
        entries.push(new Builder().id('6bb2634a-3b44-4338-ba49-5b3946f9ca46').thema(thema).entry('Abneigung').get());
        entries.push(new Builder().id('02fbd261-2721-449f-aa1f-f60a3fe6091d').thema(thema).entry('Gelassenheit').get());
        entries.push(new Builder().id('c28adfb2-4655-4788-8a72-63010ded1a47').thema(thema).entry('Gleichgültigkeit').get());
        entries.push(new Builder().id('0c7924c9-1ebc-4d94-94c9-380ee83fb819').thema(thema).entry('Mitleid').get());
        entries.push(new Builder().id('4d666b24-185d-4c78-ac0f-0dc9aac9a28a').thema(thema).entry('Erstaunen').get());
        entries.push(new Builder().id('64965ceb-6c6f-40bb-810d-0e5362110076').thema(thema).entry('Überraschung').get());
        entries.push(new Builder().id('8f6ee307-cb9d-4623-95ff-b9e3bdb141df').thema(thema).entry('Hoffnung').get());
        entries.push(new Builder().id('ca7bebbb-170f-4b13-a7b3-d399a107b8e0').thema(thema).entry('Sorge').get());
        entries.push(new Builder().id('1aa6bb06-faad-47f7-9aa3-973a28c6fb36').thema(thema).entry('Befürchtung').get());
        entries.push(new Builder().id('c31c50ee-5481-49f0-b8d0-f1577c88d54c').thema(thema).entry('Enttäuschung').get());
        entries.push(new Builder().id('eab0a9f4-10b2-4570-b645-d9f399674299').thema(thema).entry('Handlungsregulierung').get());
        entries.push(new Builder().id('9b93430f-a8c3-4977-b9f8-803db85df02b').thema(thema).entry('Bitte').get());
        entries.push(new Builder().id('9270d45b-9242-4a89-be4c-33cf5feff7fe').thema(thema).entry('Bestätigung').get());
        entries.push(new Builder().id('cd33dbb5-5985-429f-acf6-f25dafa6f654').thema(thema).entry('Hilfe anbieten').get());
        entries.push(new Builder().id('4e22e0bb-3ff7-4b9f-9d1b-f55b586f474c').thema(thema).entry('Hilfe annehmen').get());
        entries.push(new Builder().id('0d672742-5031-46bb-977b-9b17fef051ab').thema(thema).entry('Hilfe ablehnen').get());
        entries.push(new Builder().id('f259c5ef-b29b-4a73-ab41-5fd22a4d1793').thema(thema).entry('Bestellung').get());
        entries.push(new Builder().id('333562f0-0c3d-4b55-9503-2b0a33d484ac').thema(thema).entry('Wunsch').get());
        entries.push(new Builder().id('39079227-173a-476f-a508-13ef0e0d48a4').thema(thema).entry('Rat').get());
        entries.push(new Builder().id('785dedfc-2daa-4b79-8fd9-b12751cb72bf').thema(thema).entry('Empfehlung').get());
        entries.push(new Builder().id('f64584b6-4ddc-4d94-8c69-aad2edabc555').thema(thema).entry('Warnung').get());
        entries.push(new Builder().id('9f0ba5d8-fed8-4ebd-bacb-ac2b2d09ff97').thema(thema).entry('Erlaubnis').get());
        entries.push(new Builder().id('da9d7fa6-696d-4f70-9aee-44a02c1ef15b').thema(thema).entry('Genehmigung').get());
        entries.push(new Builder().id('6f0ec975-900a-4f2f-a43f-acdb3dcda780').thema(thema).entry('Vorschlag').get());
        entries.push(new Builder().id('aa072ce0-21df-48a3-8ffa-1bc7ae831913').thema(thema).entry('Versprechung').get());
        entries.push(new Builder().id('509e6e8a-d755-4254-bef4-340dd7aa3e84').thema(thema).entry('Verabredung').get());
        entries.push(new Builder().id('d2f1c952-b366-46db-8db6-fefd56edfab3').thema(thema).entry('Einladung').get());
        entries.push(new Builder().id('b0be4b5d-55b9-4de8-aaed-1bee9b85011c').thema(thema).entry('Soziale Konventionen').get());
        entries.push(new Builder().id('6103de06-19e1-48f7-9428-e86a6ab39dcb').thema(thema).entry('Kontaktaufnahme: jemanden ansprechen').get());
        entries.push(new Builder().id('40def51a-eb2b-414e-8f54-2652e538086a').thema(thema).entry('grüßen').get());
        entries.push(new Builder().id('07880339-3900-4b37-a72c-d1629073faf1').thema(thema).entry('sich/jemanden vorstellen').get());
        entries.push(new Builder().id('7496da78-9006-4f81-818c-a17f3154eaa9').thema(thema).entry('über das Befinden sprechen').get());
        entries.push(new Builder().id('48aa636d-f709-439c-a171-088e4c345c21').thema(thema).entry('gute Wünsche').get());
        entries.push(new Builder().id('09de2344-69f1-4c51-90d8-127f7da7c094').thema(thema).entry('Gratulation').get());
        entries.push(new Builder().id('9ddd9e58-2a23-4b34-91d9-c1c99c558bed').thema(thema).entry('eine Anerkennung aussprechen').get());
        entries.push(new Builder().id('7ac5322b-044d-4385-95c7-4668341a477e').thema(thema).entry('ein Kompliment machen').get());
        entries.push(new Builder().id('1f82a551-efbc-4017-8f13-0eed10296a66').thema(thema).entry('Dank').get());
        entries.push(new Builder().id('4a1b534f-181f-476f-9151-974e82c7386a').thema(thema).entry('Entschuldigung').get());
        entries.push(new Builder().id('fe9ba8b6-4f95-4304-929d-6738ad2daf9d').thema(thema).entry('Verabschiedung').get());
        this.addEntries(entries);
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
        let thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Zufriedenheit', 'Unzufriedenheit']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie waren eure Ferien?', '- (Sehr) Schön.', '- Prima.', '- (Ganz) Gut.', '- (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Der Film war sehr gut.').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Gefallen', 'Missfallen']];
        entries.push(new Builder().id('').thema(thema).entry(['Was denkst du? Gefällt es dir hier?', '- Ja (sehr).', '- (Es ist) Super!', '- (Es ist) Toll!', '- (Es ist) Klasse!', '- Nein, leider nicht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Gefällt es Ihnen?', '- Ich finde es toll', '- Ich finde es (sehr) schön', '- Ich finde es gut',
            '- Ich finde es prima.', '- Ich bin zufrieden.', '- Das finde ich nicht gut', '- Das finde ich hässlich', '- Das finde ich langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Hotel gefällt mir nicht.', 'Ich finde es hier langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Restaurant sieht gut', 'Das Restaurant sieht nett', 'Das Restaurant sieht schrecklich aus.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Ich liebe diese Stadt.', 'Ich mag diese Stadt nicht.']).get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Interesse', 'Desinteresse']];
        entries.push(new Builder().id('').thema(thema).entry(['Gefallen dir die Geschenke?', '- Ja klar.', '- Na ja, es geht.', '- Nicht so.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Was sind deine Hobbys?').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Billigung', 'Missbilligung']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie findest du das?', '- Gut.', '- (Un-) Interessant.', '- Es geht.', '- Langweilig.', '- (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wie finden Sie das Lehrbuch?', '- Es ist (sehr) interessant', '- Es ist zu langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry('So geht das nicht.').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Zustimmung', 'Ablehnung']];
        entries.push(new Builder().id('').thema(thema).entry('Das stimmt (nicht).').get());
        entries.push(new Builder().id('').thema(thema).entry(['Das ist richtig', 'Das ist falsch.']).get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', 'Wunsch'];
        entries.push(new Builder().id('').thema(thema).entry('Was wollen wir heute Abend machen?').get());
        entries.push(new Builder().id('').thema(thema).entry('Willst du auf das Fest gehen?').get());
        entries.push(new Builder().id('').thema(thema).entry('Möchten Sie noch etwas Milch?').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich möchte einen Kaffee.').get());
        entries.push(new Builder().id('').thema(thema).entry('Peter will ein Eis.').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich möchte den Film sehen.').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich brauche jetzt eine Pause.').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', 'Vorlieben'];
        entries.push(new Builder().id('').thema(thema).entry(['Tee oder Kaffee?', '- Kaffee, bitte.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Magst du Tee oder Kaffee?', '- Ich trinke lieber Tee.', '- Nichts, danke.']).get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Wichtigkeit']];
        entries.push(new Builder().id('').thema(thema).entry(['Ist das (wirklich) wichtig?', '- Das ist (schon/sehr) wichtig.', '- Nicht so wichtig.']).get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['verneinen', 'Widerspruch']];
        entries.push(new Builder().id('').thema(thema).entry('Nein!').get());
        entries.push(new Builder().id('').thema(thema).entry('Doch!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das stimmt nicht.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist falsch.').get());
        entries.push(new Builder().id('').thema(thema).entry('Unsinn!').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', 'Beschwerde'];
        entries.push(new Builder().id('').thema(thema).entry('Es ist zu warm hier!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist zu teuer!').get());
        entries.push(new Builder().id('').thema(thema).entry('Entschuldigen Sie, die Heizung funktioniert nicht.').get());

        thema = ['Sprachhandlungen', 'Bewertung, Kommentar', ['Rechtfertigung', 'Begründung']];
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

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['Kontaktaufnahme: jemanden ansprechen', 'Telefon']];
        entries.push(new Builder().id('dfecd253-9e52-4444-96df-e0d9648abf58').thema(thema).entry(['(Hier) Heine.', 'Guten Tag, Frau Heine.']).get());
        entries.push(new Builder().id('9e0b184a-f246-4a03-a402-0afec98f61ef').thema(thema).entry('Hier ist Josefa Karosz.').get());
        entries.push(new Builder().id('e8101477-1613-4b84-a344-41e4fd3cdc65').thema(thema).entry('Hallo, ist Julia da?').get());
        entries.push(new Builder().id('9b8aae23-fc50-4989-a0c6-242109c8ce37').thema(thema).entry(['Guten Tag. Frau Heuer bitte!', '- Ja, Moment bitte.', '- Tut mir leid, sie ist nicht da.', '- Nein, hier ist ...']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['Kontaktaufnahme: jemanden ansprechen', 'Brief']];
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

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['Verabschiedung', 'Telefon']];
        entries.push(new Builder().id('65313ed7-830a-4401-88a7-b3ba0d53c14e').thema(thema).entry('(Auf) Wiederhören!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['Verabschiedung', 'Brief']];
        entries.push(new Builder().id('28123bbc-a83b-497d-b3cc-7e46e25bb3ef').thema(thema).entry(['Liebe Grüße', 'Herzliche Grüße']).get());
        entries.push(new Builder().id('debc19da-c966-472f-857d-882fcbce3e35').thema(thema).entry('Mit freundlichen Grüßen').get());
        return entries;
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

export default SpeechActsA1Service;