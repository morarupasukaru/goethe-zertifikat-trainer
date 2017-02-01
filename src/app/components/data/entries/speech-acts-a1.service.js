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
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry(['Wer ist das?', '-Das ist Wolfgang', '-Das ist Frau Schuster', '-Das ist meine Kollegin.']).get());
        entries.push(new Builder().id('12534c9b-9623-47dc-9a92-33d6d323d403').thema(thema).entry(['Was ist das?', '-Das ist eine Blume.']).get());
        entries.push(new Builder().id('f99c0778-671e-4e60-82e1-7a0cdb1c4cb9').thema(thema).entry(['Ist das eine Orange?', '-Nein, eine Zitrone.']).get());
        entries.push(new Builder().id('3602d2d6-a8b3-4aeb-a0b2-cf0027b5d7ae').thema(thema).entry('Wie heißt das auf Deutsch? Erklären Sie mal.').get());
        entries.push(new Builder().id('').thema(thema).entry('Der Film heißt „Abgeschminkt“.').get());
        entries.push(new Builder().id('').thema(thema).entry('Diese CD gehört mir').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'beschreiben'];
        entries.push(new Builder().id('').thema(thema).entry(['Wie sieht die Tasche aus?', '-Sie ist braun.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'erklären'];
        entries.push(new Builder().id('').thema(thema).entry('Wie geht das?').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'berichten'];
        entries.push(new Builder().id('').thema(thema).entry(['Was ist passiert?', '-Ich hatte einen Unfall.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Mitteilung', 'Ankündigung']];
        entries.push(new Builder().id('').thema(thema).entry(['Was machst du heute Abend?', '-Ich besuche Freunde.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wann fährst du (wieder)?', '-Nächstes Jahr fahren wir nach Griechenland.']).get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'Zweck und Bestimmung angeben'];
        entries.push(new Builder().id('').thema(thema).entry('Was ist das?').get());

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Wissen', 'Unwissen']];
        entries.push(new Builder().id('').thema(thema).entry(['Weiß sie das?', '-Ja.', '-Nein.', '-Vielleicht.']).get());
        return entries;
    }

    createBewertungKommentarEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Zufriedenheit', 'Unzufriedenheit']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie waren eure Ferien?', '-(Sehr) Schön.', '-Prima.', '-(Ganz) Gut.', '-(Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Der Film war sehr gut.').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Gefallen', 'Missfallen']];
        entries.push(new Builder().id('').thema(thema).entry(['Was denkst du? Gefällt es dir hier?', '-Ja (sehr).', '-(Es ist) Super!', '-(Es ist) Toll!', '-(Es ist) Klasse!', '-Nein, leider nicht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Gefällt es Ihnen?', '-Ich finde es toll', '-Ich finde es (sehr) schön', '-Ich finde es gut',
            '-Ich finde es prima.', '-Ich bin zufrieden.', '-Das finde ich nicht gut', '-Das finde ich hässlich', '-Das finde ich langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Hotel gefällt mir nicht.', 'Ich finde es hier langweilig.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das Restaurant sieht gut', 'Das Restaurant sieht nett', 'Das Restaurant sieht schrecklich aus.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Ich liebe diese Stadt.', 'Ich mag diese Stadt nicht.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Interesse', 'Desinteresse']];
        entries.push(new Builder().id('').thema(thema).entry(['Gefallen dir die Geschenke?', '-Ja klar.', '-Na ja, es geht.', '-Nicht so.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Was sind deine Hobbys?').get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Billigung', 'Missbilligung']];
        entries.push(new Builder().id('').thema(thema).entry(['Wie findest du das?', '-Gut.', '-(Un-) Interessant.', '-Es geht.', '-Langweilig.', '-(Nicht) Schlecht.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Wie finden Sie das Lehrbuch?', '-Es ist (sehr) interessant', '-Es ist zu langweilig.']).get());
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
        entries.push(new Builder().id('').thema(thema).entry(['Tee oder Kaffee?', '-Kaffee, bitte.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Magst du Tee oder Kaffee?', '-Ich trinke lieber Tee.', '-Nichts, danke.']).get());

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Wichtigkeit']];
        entries.push(new Builder().id('').thema(thema).entry(['Ist das (wirklich) wichtig?', '-Das ist (schon/sehr) wichtig.', '-Nicht so wichtig.']).get());

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
        entries.push(new Builder().id('').thema(thema).entry(['Warum kommst du nicht?', '-Ich habe keine Zeit.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Seine Mutter ist krank. Deshalb kommt er heute nicht.').get());
        return entries;
    }

    createGefuehlsausdruckEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Freude', 'Bedauern']];
        entries.push(new Builder().id('').thema(thema).entry(['Ist das nicht toll!', '-Ja, super!', '-Finde ich auch.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Ich bin glücklich. Und du?', '-Sehr.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Glückwunsch!', '-Danke!']).get());
        entries.push(new Builder().id('').thema(thema).entry('Leider.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist schade!').get());
        entries.push(new Builder().id('').thema(thema).entry('Das tut mir leid.').get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Neigung', 'Abneigung']];
        entries.push(new Builder().id('').thema(thema).entry(['Schmeckt‘s dir nicht?', '-Doch, sehr gut.', '-Nein, ich mag eigentlich keinen Fisch.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Isst du gern Chinesisch?', '-Ja, gern(e).', '-Nein, nie.']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Gelassenheit', 'Gleichgültigkeit']];
        entries.push(new Builder().id('').thema(thema).entry(['Ich kann leider nicht kommen.', '-Egal.', '-Na und?', '-Das ist mir egal']).get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Mitleid'];
        entries.push(new Builder().id('').thema(thema).entry('(Es) Tut mir (wirklich) (sehr) leid.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das finde ich aber traurig.').get());

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Erstaunen', 'Überraschung']];
        entries.push(new Builder().id('').thema(thema).entry(['Komisch!', 'Das ist ja komisch!', 'Wie komisch!', '-Ja, sehr komisch.']).get());

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
        entries.push(new Builder().id('').thema(thema).entry('Kaufst du bitte Brot?').get());
        entries.push(new Builder().id('').thema(thema).entry('Kannst du Milch kaufen?').get());
        entries.push(new Builder().id('').thema(thema).entry('Haben Sie eine Briefmarke?').get());
        entries.push(new Builder().id('').thema(thema).entry(['Na klar.', 'Aber natürlich.', 'Ja, natürlich.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Gehen wir zusammen essen?', '-Gerne.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Eine Frage bitte: Wie spät ist es?', '-Es ist halb acht (Uhr).']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Bestätigung'];
        entries.push(new Builder().id('').thema(thema).entry('Stimmt das?').get());
        entries.push(new Builder().id('').thema(thema).entry('Richtig?').get());
        entries.push(new Builder().id('').thema(thema).entry('Ja.').get());
        entries.push(new Builder().id('').thema(thema).entry('Doch.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist richtig.').get());
        entries.push(new Builder().id('').thema(thema).entry('Stimmt.').get());
        entries.push(new Builder().id('').thema(thema).entry('Genau (so).').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Hilfe anbieten/annehmen und ablehnen'];
        entries.push(new Builder().id('').thema(thema).entry(['Kann ich Ihnen helfen?', '-Ja, danke.', '-Gerne.', '-Sehr nett, danke.', '-Nein, danke.']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Bestellung', 'Wunsch']];
        entries.push(new Builder().id('').thema(thema).entry('Ich möchte ein Zimmer reservieren.').get());
        entries.push(new Builder().id('').thema(thema).entry('Ich nehme die Tomatensuppe und den Salat.').get());
        entries.push(new Builder().id('').thema(thema).entry('Einen Moment.').get());
        entries.push(new Builder().id('').thema(thema).entry('Sofort.').get());
        entries.push(new Builder().id('').thema(thema).entry('Gleich.').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Rat', 'Empfehlung', 'Warnung']];
        entries.push(new Builder().id('').thema(thema).entry('Das ist zu gefährlich/heiß/kalt/...').get());
        entries.push(new Builder().id('').thema(thema).entry('Vorsicht!').get());
        entries.push(new Builder().id('').thema(thema).entry('Achtung!').get());
        entries.push(new Builder().id('').thema(thema).entry('Halt!').get());
        entries.push(new Builder().id('').thema(thema).entry('Hilfe!').get());
        entries.push(new Builder().id('').thema(thema).entry('Stopp!').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Erlaubnis', 'Genehmigung']];
        entries.push(new Builder().id('').thema(thema).entry(['Kann man hier rauchen?', '-Gerne.', '-Natürlich.', '-Ja natürlich.', '-Bitte nicht.', '-Nein, tut mir leid.', '-Das ist hier verboten.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Kann ich mal telefonieren?').get());
        entries.push(new Builder().id('').thema(thema).entry(['Kann man hier parken?', '-Nein, hier ist Parken verboten.']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Vorschlag'];
        entries.push(new Builder().id('').thema(thema).entry(['Gehen wir heute ins Kino?', '-Ja, gerne.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Kommst du mit zu Claudia?', '-Gute Idee.', '-Ja, warum nicht.', '-Gut.', '-Nein, leider nicht.', '-Zeit.', '-Keine Lust']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Versprechung'];
        entries.push(new Builder().id('').thema(thema).entry(['Morgen bekommst du das Geld.', '-Gut.', '-Danke.', '-Hoffentlich!', '-Versprochen?', '-Wirklich?', '-Ich mache es morgen.', '-Das mache ich!']).get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Verabredung'];
        entries.push(new Builder().id('').thema(thema).entry(['Kannst du morgen Abend?', 'Hast du am Mittwoch Zeit?', '-Ja, wann?', '-Ja, das ist gut.', '-Vielleicht.', '-Nein, (morgen kann ich/geht es) leider nicht.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Wann hast du (mal/denn) Zeit?').get());

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Einladung'];
        entries.push(new Builder().id('').thema(thema).entry(['Möchten Sie (noch) etwas trinken?', 'Orangensaft?', '-Nein, danke.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Was möchten Sie bitte?', '-Nichts, danke.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Setz dich!').get());
        entries.push(new Builder().id('').thema(thema).entry('Setzen Sie sich doch!').get());
        return entries;
    }

    createSozialeKonventionenEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen'];
        entries.push(new Builder().id('').thema(thema).entry('Hallo!').get());
        entries.push(new Builder().id('').thema(thema).entry(['Roman Jaremkow.', 'Marija Kosik.', 'Helmut!', 'Frau Klein!']).get());
        entries.push(new Builder().id('').thema(thema).entry('Ja, bitte?').get());
        entries.push(new Builder().id('').thema(thema).entry('Wie bitte?').get());
        entries.push(new Builder().id('').thema(thema).entry(['Sind Sie nicht Frau Yilmaz?', '-Ja (das stimmt).', '-Ja, warum?', '-Nein, ich bin ...', '-Nein, ich heiße ...', '-Nein, mein Name ist ...']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Telefon'];
        entries.push(new Builder().id('').thema(thema).entry(['(Hier) Heine.', 'Guten Tag, Frau Heine.']).get());
        entries.push(new Builder().id('').thema(thema).entry('Hier ist Josefa Karosz.').get());
        entries.push(new Builder().id('').thema(thema).entry('Hallo, ist Julia da?').get());
        entries.push(new Builder().id('').thema(thema).entry(['Guten Tag. Frau Heuer bitte!', '-Ja, Moment bitte.', '-Tut mir leid, sie ist nicht da.', '-Nein, hier ist ...']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Brief'];
        entries.push(new Builder().id('').thema(thema).entry('Liebe Renate/Frau Haushofer,').get());
        entries.push(new Builder().id('').thema(thema).entry('Sehr geehrter Herr Liebermann,').get());
        entries.push(new Builder().id('').thema(thema).entry('Sehr geehrte Damen und Herren,').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'grüßen'];
        entries.push(new Builder().id('').thema(thema).entry(['(Guten) Tag/Hallo, Ulrike!', '-(Guten) Tag/Hallo, Karina.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Guten Morgen, Frau Schneider.', '-Guten Morgen, Frau Kowalski.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Guten Tag, Frau Schneider.', '-Guten Tag, Frau Kowalski.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Guten Abend, Frau Schneider.', '-Guten Abend, Frau Kowalski.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Gute Nacht, Christian.', '-Gute Nacht, Bea.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Hallo, wie geht’s?/wie geht es dir?', '-Danke, gut.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Grüß Gott! (süddeutsch)', '-Grüß Gott!']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'sich/jemanden vorstellen'];
        entries.push(new Builder().id('').thema(thema).entry(['(Hallo) Mein Name ist/Ich heiße Vera.', '-Hallo, Vera. Ich heiße Mario.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['(Guten Tag) Ich bin Petra Holl.', '-Guten Tag. Ich bin Ulrike Meyer.']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Das ist Ulrich Pfeiffer.', '-Ah ja. Ich heiße Johanna Hauser.', '-Ah ja. Ich bin Johanna Hauser.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'über das Befinden sprechen'];
        entries.push(new Builder().id('').thema(thema).entry(["Wie geht’s/geht es dir (heute)?", '-Danke, gut. Und dir?', '-Danke, es geht gut. Und dir?', '-Danke, es geht nicht gut. Und dir?']).get());
        entries.push(new Builder().id('').thema(thema).entry(['Geht es Ihnen gut?', '-Ja, super.', '-Na ja, es geht!', '-Ach, nicht so gut.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'gute Wünsche'];
        entries.push(new Builder().id('').thema(thema).entry('Alles Gute.').get());
        entries.push(new Builder().id('').thema(thema).entry('Schöne Ferien!').get());
        entries.push(new Builder().id('').thema(thema).entry('Gut gemacht!').get());
        entries.push(new Builder().id('').thema(thema).entry('Prost!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Gratulation'];
        entries.push(new Builder().id('').thema(thema).entry(['Herzlichen Glückwunsch', '-Danke (schön)!', '-Herzlichen', '-Vielen Dank.', '-Ihnen auch.', '-Danke, ebenfalls.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['eine Anerkennung aussprechen', 'ein Kompliment machen']];
        entries.push(new Builder().id('').thema(thema).entry('Sie sprechen (sehr) gut Deutsch.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das ist toll/(sehr) schön/gut.').get());
        entries.push(new Builder().id('').thema(thema).entry('Das schmeckt gut.').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank'];
        entries.push(new Builder().id('').thema(thema).entry(['Danke (schön)!', 'Herzlichen', 'Vielen Dank.', '-Ihnen auch.', '-Danke, ebenfalls.', '-(Aber) Bitte.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank', 'Brief'];
        entries.push(new Builder().id('').thema(thema).entry('Vielen Dank.').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Entschuldigung'];
        entries.push(new Builder().id('').thema(thema).entry(['Entschuldigung', 'Entschuldigen Sie bitte!', '-Bitte!', '-Schon gut.', '-Kein Problem.']).get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung'];
        entries.push(new Builder().id('').thema(thema).entry('(Auf) Wiedersehen!').get());
        entries.push(new Builder().id('').thema(thema).entry('Tschüss!').get());
        entries.push(new Builder().id('').thema(thema).entry('Bis bald.').get());
        entries.push(new Builder().id('').thema(thema).entry('Bis später.').get());
        entries.push(new Builder().id('').thema(thema).entry('Gute Nacht!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Telefon'];
        entries.push(new Builder().id('').thema(thema).entry('(Auf) Wiederhören!').get());

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Brief'];
        entries.push(new Builder().id('').thema(thema).entry(['Liebe Grüße', 'Herzliche Grüße']).get());
        entries.push(new Builder().id('').thema(thema).entry('Mit freundlichen Grüßen').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;