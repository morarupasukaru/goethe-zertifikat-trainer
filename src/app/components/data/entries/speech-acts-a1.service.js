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
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry('Wer ist das?').get());
        entries.push(new Builder().id('cf27cc2b-d3ee-4a83-b89e-cba21646f0e5').thema(thema).entry('Das ist Wolfgang/Frau Schuster/meine Kollegin.').get());
        entries.push(new Builder().id('12534c9b-9623-47dc-9a92-33d6d323d403').thema(thema).entry('Was ist das?').get());
        entries.push(new Builder().id('fe27f111-4a2f-417b-a60b-c5f74a893c85').thema(thema).entry('Das ist eine Blume.').get());
        entries.push(new Builder().id('f99c0778-671e-4e60-82e1-7a0cdb1c4cb9').thema(thema).entry('Ist das eine Orange?').get());
        entries.push(new Builder().id('b6aa1d11-c892-458b-9688-efe6ffefff17').thema(thema).entry('Nein, eine Zitrone.').get());
        entries.push(new Builder().id('3602d2d6-a8b3-4aeb-a0b2-cf0027b5d7ae').thema(thema).entry('Wie heißt das auf Deutsch?').get());
        entries.push(new Builder().id('cd9cc7fb-bb19-44c9-9789-8c5c1fe86416').thema(thema).entry('Erklären Sie mal.').get());
/*
Der Film heißt „Abgeschminkt“.
Diese CD gehört mir.
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'beschreiben'];
/*
Wie sieht die Tasche aus?
Sie ist braun.
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'erklären'];
/*
Wie geht das?
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'berichten'];
/*
Was ist passiert?
Ich hatte einen Unfall.
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Mitteilung', 'Ankündigung']];
/*
Was machst du heute Abend?
Ich besuche Freunde.
Wann fährst du (wieder)?
Nächstes Jahr fahren wir nach
Griechenland.
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', 'Zweck und Bestimmung angeben'];
/*
Was ist das?
*/

        thema = ['Sprachhandlungen', 'Informationsaustausch', ['Wissen', 'Unwissen']];
/*
Weiß sie das?
Ja./Nein./Vielleicht.
*/

        return entries;
    }

    createBewertungKommentarEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Meinung', 'Ansicht']];
/*
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Zufriedenheit', 'Unzufriedenheit']];
/*
Wie waren eure Ferien?
(Sehr) Schön./Prima./(Ganz) Gut./
(Nicht) Schlecht.
Der Film war sehr gut.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Gefallen', 'Missfallen']];
/*
Was denkst du? Gefällt es dir hier?
Ja (sehr)./(Es ist) Super!/Toll!/Klasse!
Nein, leider nicht.
Gefällt es Ihnen?
Ich finde es toll/(sehr) schön/
gut/prima.
Ich bin zufrieden./Das finde ich nicht
gut/hässlich/langweilig.
Das Hotel gefällt mir nicht./
Ich finde es hier langweilig.
Das Restaurant sieht gut/nett/
schrecklich aus.
Ich liebe diese Stadt./Ich mag diese
Stadt nicht.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Interesse', 'Desinteresse']];
/*
Gefallen dir die Geschenke?
Ja klar./Na ja, es geht./Nicht so.
Was sind deine Hobbys?
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Billigung', 'Missbilligung']];
/*
Wie findest du das?
Gut./(Un-) Interessant./Es geht./
Langweilig./(Nicht) Schlecht.
Wie finden Sie das Lehrbuch?
Es ist (sehr) interessant/zu lang-
weilig.
So geht das nicht.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Zustimmung', 'Ablehnung']];
/*
Das stimmt (nicht).
Das ist richtig/falsch.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Wunsch']];
/*
Was wollen wir heute Abend
machen?
Willst du auf das Fest gehen?
Möchten Sie noch etwas Milch?
Ich möchte einen Kaffee./Peter will
ein Eis.
Ich möchte den Film sehen.
Ich brauche jetzt eine Pause.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Vorlieben']];
/*
Tee oder Kaffee?
Kaffee, bitte.
Magst du Tee oder Kaffee?
Ich trinke lieber Tee.
Nichts, danke.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Wichtigkeit']];
/*
Ist das (wirklich) wichtig?
Das ist (schon/sehr) wichtig.
Nicht so wichtig.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['verneinen', 'Widerspruch']];
/*
Nein!/Doch!/Das stimmt
nicht./Das ist falsch./Unsinn!
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Beschwerde']];
/*
Es ist zu warm hier!/Das ist zu teuer!
Entschuldigen Sie, die Heizung funk-
tioniert nicht.
*/

        thema = ['Sprachhandlungen', ['Bewertung', 'Kommentar'], ['Rechtfertigung', 'Begründung']];
/*
Warum kommst du nicht?
Ich habe keine Zeit.
Seine Mutter ist krank. Deshalb
kommt er heute nicht.
*/

        return entries;
    }

    createGefuehlsausdruckEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Freude', 'Bedauern']];
/*
Ist das nicht toll!
Ja, super!/Finde ich auch.
Ich bin glücklich. Und du?
Sehr.
Glückwunsch!
Danke!
Leider./Das ist schade!/Das tut mir
leid.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Neigung', 'Abneigung']];
/*
Schmeckt‘s dir nicht?
Doch, sehr gut.
Nein, ich mag eigentlich keinen
Fisch.
Isst du gern Chinesisch?
Ja, gern(e)./Nein, nie.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Gelassenheit', 'Gleichgültigkeit']];
/*
Ich kann leider nicht kommen.
Egal./Na und?
Das ist mir egal
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Mitleid'];
/*
(Es) Tut mir (wirklich) (sehr) leid.
Das finde ich aber traurig.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Erstaunen', 'Überraschung']];
/*
Komisch!/Das ist ja komisch!/Wie
komisch!
Ja, sehr komisch.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Hoffnung'];
/*
Hoffentlich regnet es nicht.
Hoffentlich kommt bald der Bus.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', ['Sorge', 'Befürchtung']];
/*
Ich habe Angst.
Schon 10 Uhr, und er ist immer noch
nicht da.
*/

        thema = ['Sprachhandlungen', 'Gefühlsausdruck', 'Enttäuschung'];
/*
Was? Du bleibst zu Hause? Schade!
*/

        return entries;
    }

    createHandlungsregulierungEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Bitte', 'Aufforderung']];
/*
Kaufst du bitte Brot?
Kannst du Milch kaufen?
Haben Sie eine Briefmarke?
Na klar./Aber natürlich./Ja, natürlich.
Gehen wir zusammen essen?
Gerne.
Eine Frage bitte: Wie spät ist es?
Es ist halb acht (Uhr).
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Bestätigung'];
/*
Stimmt das?/Richtig?
Ja./Doch./Das ist richtig./Stimmt./
Genau (so).
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Hilfe anbieten/annehmen und ablehnen'];
/*
Kann ich Ihnen helfen?
Ja, danke./Gerne./Sehr nett,
danke.
Nein, danke.
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Bestellung', 'Wunsch']];
/*
Ich möchte ein Zimmer reservieren.
Ich nehme die Tomatensuppe und
den Salat.
Einen Moment./Sofort./Gleich.
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Rat', 'Empfehlung', 'Warnung']];
/*
Das ist zu gefährlich/heiß/kalt/...
Vorsicht!/Achtung!/Halt!/Hilfe!/
Stopp!
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', ['Erlaubnis', 'Genehmigung']];
/*
Kann man hier rauchen?/
Gerne./Natürlich./Ja natürlich.
Bitte nicht./Nein, tut mir leid./Das ist
hier verboten.
Kann ich mal telefonieren?
Kann man hier parken?
Nein, hier ist Parken verboten.
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Vorschlag'];
/*
Gehen wir heute ins Kino?
Ja, gerne.
Kommst du mit zu Claudia?
Gute Idee./Ja, warum nicht./Gut.
Nein, leider nicht./Keine Lust/Zeit.
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Versprechung'];
/*
Morgen bekommst du das Geld.
Gut./Danke.
Hoffentlich!
Wirklich?/Versprochen?
Ich mache es morgen.
Das mache ich!
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Verabredung'];
/*
Kannst du morgen Abend?/Hast du
am Mittwoch Zeit?
Ja, wann?/Ja, das ist gut.
Vielleicht.
Nein, (morgen kann ich/geht es)
leider nicht.
Wann hast du (mal/denn) Zeit?
*/

        thema = ['Sprachhandlungen', 'Handlungsregulierung', 'Einladung'];
/*
Möchten Sie (noch) etwas trinken/
Orangensaft?
Nein, danke.
Was möchten Sie bitte?
Nichts, danke.
Setz dich!/Setzen Sie sich doch!
*/
        return entries;
    }

    createSozialeKonventionenEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen'];
/*
Hallo!
Roman Jaremkow.
Marija Kosik.
Helmut!/Frau Klein! 1
Ja, bitte?
Wie bitte?
Sind Sie nicht Frau Yilmaz?
Ja (das stimmt)./Ja, warum?
Nein, ich bin .../ich heiße .../mein
Name ist ...
*/
        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Telefon'];
/*
(Hier) Heine.
Guten Tag, Frau Heine.
Hier ist Josefa Karosz.
Hallo, ist Julia da?
Guten Tag. Frau Heuer bitte!
Ja, Moment bitte.
Tut mir leid, sie ist nicht da.
Nein, hier ist ...
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen', 'Brief'];
/*
Liebe Renate/Frau Haushofer,
Sehr geehrter Herr Liebermann,
Sehr geehrte Damen und Herren,
*/


        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'grüßen'];
/*
(Guten) Tag/Hallo, Ulrike!
(Guten) Tag/Hallo, Karina.
Guten Morgen/Tag/Abend, Frau
Schneider.
Guten Morgen/Tag/Abend, Frau
Kowalski.
Gute Nacht, Christian.
Gute Nacht, Bea.
Hallo, wie geht’s?/wie geht es dir?
Danke, gut.
Grüß Gott! (süddeutsch)
Grüß Gott!
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'sich/jemanden vorstellen'];
/*
(Hallo) Mein Name ist/Ich heiße
Vera.
Hallo, Vera. Ich heiße Mario.
(Guten Tag) Ich bin Petra Holl.
Guten Tag. Ich bin Ulrike Meyer.
Das ist Ulrich Pfeiffer.
Ah ja. Ich heiße/Ich bin Johanna
Hauser.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'über das Befinden sprechen'];
/*
Wie geht’s/geht es dir (heute)?
Danke, gut/es geht/nicht gut. Und
dir?
Geht es Ihnen gut?
Ja, super./Na ja, es geht!/Ach, nicht
so gut.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'gute Wünsche'];
/*
Alles Gute./Schöne Ferien!
Gut gemacht!
Prost!
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Gratulation'];
/*
Herzlichen Glückwunsch
Danke (schön)!/Herzlichen/Vielen
Dank.
Ihnen auch./Danke, ebenfalls.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', ['eine Anerkennung aussprechen', 'ein Kompliment machen']];
/*
Sie sprechen (sehr) gut Deutsch.
Das ist toll/(sehr) schön/gut.
Das schmeckt gut.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank'];
/*
Danke (schön)!/Herzlichen/
Vielen Dank.
Ihnen auch./Danke, ebenfalls.
(Aber) Bitte.
*/
        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Dank', 'Brief'];
/*
Vielen Dank.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Entschuldigung'];
/*
Entschuldigung./Entschuldigen Sie
bitte!
Bitte!/Schon gut./Kein Problem.
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung'];
/*
(Auf) Wiedersehen!
Tschüss!
Bis bald/später.
Gute Nacht!
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Telefon'];
/*
(Auf) Wiederhören!
*/

        thema = ['Sprachhandlungen', 'Soziale Konventionen', 'Verabschiedung', 'Brief'];
/*
Liebe/Herzliche Grüße
Mit freundlichen Grüßen
*/


        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;