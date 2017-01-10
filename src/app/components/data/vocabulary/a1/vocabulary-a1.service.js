class VocabularyA1Service {

    /*@ngInject*/
    constructor() {
        this.createEntries();
    }

    createEntries() {
        this.entries = [];
        this.addEntries(this.createZahlenEntries());
        this.addEntries(this.createDatumEntries());
        this.addEntries(this.createUhrzeitEntries());
        this.addEntries(this.createZeitmasseEntries());
        this.addEntries(this.createWocheEntries());
        this.addEntries(this.createTagEntries());
        this.addEntries(this.createMonatEntries());
        this.addEntries(this.createJahrEntries());
        this.addEntries(this.createWaehrungenEntries());
        this.addEntries(this.createMasseUndGewichteEntries());
        this.addEntries(this.createLaenderEntries());
        this.addEntries(this.createFarbenEntries());
        this.addEntries(this.createHimmelsrichtungenEntries());
        this.addEntries(this.createAEntries());
        this.addEntries(this.createBEntries());
        this.addEntries(this.createCEntries());
        this.addEntries(this.createDEntries());
        this.addEntries(this.createEEntries());
        this.addEntries(this.createFEntries());
        this.addEntries(this.createGEntries());
        this.addEntries(this.createHEntries());
        this.addEntries(this.createIEntries());
        this.addEntries(this.createJEntries());
        this.addEntries(this.createKEntries());
        this.addEntries(this.createLEntries());
        this.addEntries(this.createMEntries());
        this.addEntries(this.createNEntries());
        this.addEntries(this.createOEntries());
        this.addEntries(this.createPEntries());
        this.addEntries(this.createREntries());
        this.addEntries(this.createSEntries());
        this.addEntries(this.createTEntries());
        this.addEntries(this.createUEntries());
        this.addEntries(this.createVEntries());
        this.addEntries(this.createWEntries());
        this.addEntries(this.createZEntries());
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createZahlenEntries() {
        let entries = [];
        let thema = 'Zahlen';
        entries.push(this.createEntry(thema, 'Zahl'));
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

    createDatumEntries() {
        let entries = [];
        let thema = 'Datum';
        entries.push(this.createEntry(thema, 'Datum'));
        entries.push(this.createEntry(thema, 'ein halb; halb', '1/2'));
        entries.push(this.createEntry(thema, 'ein Vertiel; Viertel ...', '1/4'));
        entries.push(this.createEntry(thema, 'neunzehnhundertneunundneunzig', '1999'));
        entries.push(this.createEntry(thema, 'zweitausendvierzehn', '2014'));
        entries.push(this.createEntry(thema, 'heute ist der erste März/der erste Dritte', 'heute ist der 1. März'));
        entries.push(this.createEntry(thema, 'Berlin, zwölfter Vierter zweitausendzwei', 'Berlin, 12. April 2002'));
        return entries;
    }

    createUhrzeitEntries() {
        let entries = [];
        let thema = 'Uhrzeit';
        entries.push(this.createEntry(thema, 'Uhrzeit'));
        entries.push(this.createEntry(thema, '0.03 Uhr', 'null Uhr drei'));
        entries.push(this.createEntry(thema, '7.15 Uhr', 'sieben Uhr fünfzehn'));
        entries.push(this.createEntry(thema, '13.17 Uhr', 'dreizehn Uhr siebzehn'));
        entries.push(this.createEntry(thema, '24.00 Uhr', 'vierundzwanzig Uhr'));
        entries.push(this.createEntry(thema, 'ein Uhr'));
        entries.push(this.createEntry(thema, 'fünf Minuten vor/nach eins (ein Uhr)'));
        entries.push(this.createEntry(thema, 'Viertel vor/nach zwei (zwei Uhr)'));
        entries.push(this.createEntry(thema, 'halb drei'));
        return entries;
    }

    createZeitmasseEntries() {
        let entries = [];
        let thema = 'Zeitmaße, Zeitangaben';
        entries.push(this.createEntry(thema, 'Zeitmaß'));
        entries.push(this.createEntry(thema, 'Zeitangabe'));
        entries.push(this.createEntry(thema, 'die Sekunde, -n'));
        entries.push(this.createEntry(thema, 'die Minute, -n'));
        entries.push(this.createEntry(thema, 'die Stunde, -n'));
        entries.push(this.createEntry(thema, 'der Tag, -e'));
        entries.push(this.createEntry(thema, 'die Woche, -e'));
        entries.push(this.createEntry(thema, 'das Jahr, -e'));
        return entries;
    }

    createWocheEntries() {
        let entries = [];
        let thema = 'Woche/Wochentage';
        entries.push(this.createEntry(thema, 'Woche'));
        entries.push(this.createEntry(thema, 'der Wochentag, -e'));
        entries.push(this.createEntry(thema, 'der Sonntag'));
        entries.push(this.createEntry(thema, 'der Montag'));
        entries.push(this.createEntry(thema, 'der Dienstag'));
        entries.push(this.createEntry(thema, 'der Mittwoch'));
        entries.push(this.createEntry(thema, 'der Donnerstag'));
        entries.push(this.createEntry(thema, 'der Freitag'));
        entries.push(this.createEntry(thema, 'der Samstag/Sonnabend'));
        entries.push(this.createEntry(thema, 'das Wochenende'));
        entries.push(this.createEntry(thema, 'am Wochenende'));
        return entries;
    }

    createTagEntries() {
        let entries = [];
        let thema = 'Tag/Tageszeiten';
        entries.push(this.createEntry(thema, 'Tag'));
        entries.push(this.createEntry(thema, 'Tageszeit'));
        entries.push(this.createEntry(thema, 'der Tag'));
        entries.push(this.createEntry(thema, 'der Morgen'));
        entries.push(this.createEntry(thema, 'der Vormittag,-e'));
        entries.push(this.createEntry(thema, 'der Mittag'));
        entries.push(this.createEntry(thema, 'der Nachmittag,-e'));
        entries.push(this.createEntry(thema, 'der Abend,-e'));
        entries.push(this.createEntry(thema, 'die Nacht, ̈-e'));
        return entries;
    }

    createMonatEntries() {
        let entries = [];
        let thema = 'Monat/Monatsnamen';
        entries.push(this.createEntry(thema, 'Monat'));
        entries.push(this.createEntry(thema, 'Monatsname'));
        entries.push(this.createEntry(thema, 'der Januar'));
        entries.push(this.createEntry(thema, 'der Februar'));
        entries.push(this.createEntry(thema, 'der März'));
        entries.push(this.createEntry(thema, 'der April'));
        entries.push(this.createEntry(thema, 'der Mai'));
        entries.push(this.createEntry(thema, 'der Juni'));
        entries.push(this.createEntry(thema, 'der Juli'));
        entries.push(this.createEntry(thema, 'der August'));
        entries.push(this.createEntry(thema, 'der September'));
        entries.push(this.createEntry(thema, 'der Oktober'));
        entries.push(this.createEntry(thema, 'der November'));
        entries.push(this.createEntry(thema, 'der Dezember'));
        return entries;
    }

    createJahrEntries() {
        let entries = [];
        let thema = 'Jahr/Jahreszeiten';
        entries.push(this.createEntry(thema, 'Jahr'));
            entries.push(this.createEntry(thema, 'Jahreszeit'));
        entries.push(this.createEntry(thema, 'der Frühling/das Frühjahr'));
        entries.push(this.createEntry(thema, 'der Sommer'));
        entries.push(this.createEntry(thema, 'der Herbst'));
        entries.push(this.createEntry(thema, 'der Winter'));
        return entries;
    }

    createWaehrungenEntries() {
        let entries = [];
        let thema = 'Währungen';
        entries.push(this.createEntry(thema, 'Währung'));
        entries.push(this.createEntry(thema, '1 Euro'));
        entries.push(this.createEntry(thema, '100 Cent'));
        return entries;
    }

    createMasseUndGewichteEntries() {
        let entries = [];
        let thema = 'Maße und Gewichte';
        entries.push(this.createEntry(thema, 'Maße'));
        entries.push(this.createEntry(thema, 'Gewicht'));
        entries.push(this.createEntry(thema, 'ein Meter', '1 m'));
        entries.push(this.createEntry(thema, 'ein Zentimeter', '1 cm'));
        entries.push(this.createEntry(thema, 'ein Meter fünfzehn', '1,15 m'));
        entries.push(this.createEntry(thema, 'zweihundert Kilometer', '200 km'));
        entries.push(this.createEntry(thema, 'ein Quadratmeter', '1 m2'));
        entries.push(this.createEntry(thema, 'ein Grad unter Null/minus ein Grad', '– 1°'));
        entries.push(this.createEntry(thema, 'vier Grad über Null/plus vier Grad', '+ 4°'));
        entries.push(this.createEntry(thema, 'ein Prozent', '1 %'));
        entries.push(this.createEntry(thema, 'ein Liter', '1 l'));
        entries.push(this.createEntry(thema, 'ein Gramm', '1 g'));
        entries.push(this.createEntry(thema, 'ein Pfund', '500 g'));
        entries.push(this.createEntry(thema, 'ein Kilo(gramm)', '1 kg'));
        return entries;
    }

    createLaenderEntries() {
        let entries = [];
        let thema = 'Länder/Ländernamen/Nationalitäten';
        entries.push(this.createEntry(thema, 'Land'));
        entries.push(this.createEntry(thema, 'Ländername'));
        entries.push(this.createEntry(thema, 'Nationalität'));
        entries.push(this.createEntry(thema, 'Deutschland'));
        entries.push(this.createEntry(thema, 'der/die Deutsche, -n'));
        entries.push(this.createEntry(thema, 'ein Deutscher, eine Deutsche, Deutsche'));
        entries.push(this.createEntry(thema, 'deutsch'));
        entries.push(this.createEntry(thema, 'Europa'));
        entries.push(this.createEntry(thema, 'Europäer'));
        entries.push(this.createEntry(thema, 'europäisch'));
        entries.push(this.createEntry(thema, 'Herkunft'));
        entries.push(this.createEntry(thema, 'Bewohner'));
        entries.push(this.createEntry(thema, 'die Schweiz'));
        entries.push(this.createEntry(thema, 'der Schweizer, die Schweizerin'));
        return entries;
    }

    createFarbenEntries() {
        let entries = [];
        let thema = 'Farben';
        entries.push(this.createEntry(thema, 'Farbe'));
        entries.push(this.createEntry(thema, 'schwarz'));
        entries.push(this.createEntry(thema, 'grau'));
        entries.push(this.createEntry(thema, 'blau'));
        entries.push(this.createEntry(thema, 'grün'));
        entries.push(this.createEntry(thema, 'weiß'));
        entries.push(this.createEntry(thema, 'rot'));
        entries.push(this.createEntry(thema, 'gelb'));
        entries.push(this.createEntry(thema, 'braun'));
        return entries;
    }

    createHimmelsrichtungenEntries() {
        let entries = [];
        let thema = 'Himmelsrichtungen';
        entries.push(this.createEntry(thema, 'Himmelsrichtung'));
        entries.push(this.createEntry(thema, 'der Norden'));
        entries.push(this.createEntry(thema, 'der Süden'));
        entries.push(this.createEntry(thema, 'der Westen'));
        entries.push(this.createEntry(thema, 'der Westen'));
        return entries;
    }

    createAEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'A'];
        entries.push(this.createEntry(thema, 'ab', null, 'Ab morgen muss ich arbeiten.'));
        entries.push(this.createEntry(thema, 'aber', null, 'Ich bin oft im Büro, aber nur für wenige Stunden.'));
        entries.push(this.createEntry(thema, 'abfahren', null, 'Wir fahren um zwölf Uhr ab.'));
        entries.push(this.createEntry(thema, 'die Abfahrt', null, 'Vor der Abfahrt rufe ich an.'));
        entries.push(this.createEntry(thema, 'abgeben', null, 'Ich muss meine Schlüssel abgeben.'));
        entries.push(this.createEntry(thema, 'abholen', null, ['Wann kann ich den Schrank bei dir abholen?', 'Wir müssen noch meinen Bruder abholen.']));
        entries.push(this.createEntry(thema, 'der Absender', null, 'Da ist ein Brief für dich ohne Absender.'));
        entries.push(this.createEntry(thema, 'Achtung', null, 'Achtung! Das dürfen Sie nicht tun.'));
        entries.push(this.createEntry(thema, 'die Adresse,-en', null, 'Können Sie mir seine Adresse sagen?'));
        entries.push(this.createEntry(thema, 'all-', null, ['Alles Gute!', 'Das ist alles.', 'Sind alle da?', 'Alle Freunde kommen.', 'Hast du alles?']));
        entries.push(this.createEntry(thema, 'allein', null, 'Er kommt allein.'));
        entries.push(this.createEntry(thema, 'also', null, ['Also, es ist so: ...', 'Er hat Zeit, also muss er uns helfen.']));
        entries.push(this.createEntry(thema, 'alt', null, ['Wie alt sind Sie?', 'Sie sehen aber nicht so alt aus.', 'Mein Auto ist schon sehr alt.', 'Wir wohnen in einem sehr alten Haus.', 'Köln ist eine alte Stadt.']));
        entries.push(this.createEntry(thema, 'das Alter', null, 'Alter: 26 Jahre.'));
        entries.push(this.createEntry(thema, 'an', null, ['Fahren Sie an der nächsten Straße nach rechts.', 'Wir treffen uns am Bahnhof.', 'Am nächsten Montag geht es leider nicht.']));
        entries.push(this.createEntry(thema, 'anbieten', null, 'Was darf ich dir anbieten?'));
        entries.push(this.createEntry(thema, 'das Angebot, -e', null, 'Heute sind Sportschuhe im Angebot.'));
        entries.push(this.createEntry(thema, 'ander-', null, ['WiIlst du diese Jacke?\n– Nein, ich möchte die andere.']));
        entries.push(this.createEntry(thema, 'anfangen', null, ['Hier fängt die Bahnhofstraße an.', 'Der Unterricht fängt gleich an.']));
        entries.push(this.createEntry(thema, 'der Anfang', null, ['Sie wohnt am Anfang der Straße.', 'Wir machen Anfang Juli Urlaub.']));
        entries.push(this.createEntry(thema, 'anklicken', null, 'Da musst du dieses Wort anklicken.'));
        entries.push(this.createEntry(thema, 'ankommen', null, 'Wann kommt dieser Zug in Hamburg an?'));
        entries.push(this.createEntry(thema, 'die Ankunft', null, 'Auf diesem Plan steht nur die Ankunft(-szeit) der Züge.'));
        entries.push(this.createEntry(thema, 'ankreuzen', null, 'Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen.'));
        entries.push(this.createEntry(thema, 'anmachen', null, 'Mach bitte das Licht an!'));
        entries.push(this.createEntry(thema, '(sich) anmelden', null, 'Wo kann ich mich anmelden?'));
        entries.push(this.createEntry(thema, 'die Anmeldung', null, 'Eine Anmeldung für diesen Kurs ist nicht mehr möglich.'));
        entries.push(this.createEntry(thema, 'die Anrede', null, 'Schreiben Sie auch eine Anrede und einen Gruß.'));
        entries.push(this.createEntry(thema, 'anrufen', null, ['Kann man Sie anrufen?', 'Peter ruft kurz seine Freundin an.']));
        entries.push(this.createEntry(thema, 'der Anruf, -e', null, 'Sie bekommt viele Anrufe auf ihrem Handy.'));
        entries.push(this.createEntry(thema, 'der Anrufbeantworter', null, 'Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.'));
        entries.push(this.createEntry(thema, 'die Ansage, -n', null, 'Hören Sie die Ansagen.'));
        entries.push(this.createEntry(thema, 'der Anschluss', null, ['In Mannheim haben Sie Anschluss nach Saarbrücken.', 'Ist das die Anmeldung für einen Telefonanschluss?']));
        entries.push(this.createEntry(thema, 'an sein', null, 'Heute Nacht war das Licht an.'));
        entries.push(this.createEntry(thema, 'antworten', null, 'Er antwortet nicht.'));
        entries.push(this.createEntry(thema, 'die Antwort, -en', null, 'Er gibt leider keine Antwort.'));
        entries.push(this.createEntry(thema, 'die Anzeige, -n', null, 'Ich habe Ihre Anzeige in der Zeitung gelesen.'));
        entries.push(this.createEntry(thema, '(sich) anziehen', null, 'Ich muss mich noch anziehen.'));
        entries.push(this.createEntry(thema, 'das Apartment, -s', null, 'Wir haben ein Apartment gemietet.'));
        entries.push(this.createEntry(thema, 'der Apfel, -Ä', null, 'Ein Pfund Äpfel bitte.'));
        entries.push(this.createEntry(thema, 'der Appetit', null, 'Guten Appetit!'));
        entries.push(this.createEntry(thema, 'arbeiten', null, 'Wo arbeiten Sie?'));
        entries.push(this.createEntry(thema, 'die Arbeit, -en', null, 'Mein Bruder sucht Arbeit.'));
        entries.push(this.createEntry(thema, 'arbeitslos', null, 'Es gibt bei uns viele Leute, die schon lange arbeitslos sind.'));
        entries.push(this.createEntry(thema, 'der Arbeitsplatz, -ä, e', null, 'An meinem Arbeitsplatz fehlt ein Drucker.'));
        entries.push(this.createEntry(thema, 'der Arm, -e', null, 'Mein Arm tut weh.'));
        entries.push(this.createEntry(thema, 'der Arzt, -Ä, e', null, 'Morgen habe ich einen Termin bei meiner Ärztin.'));
        entries.push(this.createEntry(thema, 'auch', null, 'Ich bin auch Spanier.'));
        entries.push(this.createEntry(thema, 'auf', null, ['Die Kinder spielen auf der Straße.', 'Auf Wiedersehen.', 'Wie heißt das auf Deutsch?']));
        entries.push(this.createEntry(thema, 'die Aufgabe, -n', null, 'Das ist eine schwere Aufgabe.'));
        entries.push(this.createEntry(thema, 'aufhören', null, ['Der Kurs hört in einer Woche auf.', 'Hier hört die Bahnhofstraße auf.']));
        entries.push(this.createEntry(thema, 'auf sein', null, 'Du brauchst den Schlüssel nicht. Die Wohnung ist auf.'));
        entries.push(this.createEntry(thema, 'aufstehen', null, ['Ich muss immer um vier Uhr aufstehen.', 'Soll ich aufstehen?']));
        entries.push(this.createEntry(thema, 'der Aufzug, -ü, e', null, 'In diesem Haus gibt es keinen Aufzug.'));
        entries.push(this.createEntry(thema, 'das Auge, -n', null, 'Er hat blaue Augen.'));
        entries.push(this.createEntry(thema, 'aus', null, 'Er kommt aus Brasilien.'));
        entries.push(this.createEntry(thema, 'der Ausflug', null, 'Morgen machen wir einen Ausflug nach Heidelberg.'));
        entries.push(this.createEntry(thema, 'ausfüllen', null, 'Füllen Sie bitte dieses Formular aus.'));
        entries.push(this.createEntry(thema, 'der Ausgang', null, 'Wo ist der Ausgang?'));
        entries.push(this.createEntry(thema, 'die Auskunft, -ü, e', null, 'Können Sie mir eine Auskunft geben?'));
        entries.push(this.createEntry(thema, 'das Ausland', null, 'Fahren Sie ins Ausland?'));
        entries.push(this.createEntry(thema, 'der Ausländer, -', null, 'Sind Sie Ausländerin?'));
        entries.push(this.createEntry(thema, 'ausländisch', null, 'Leider habe ich nur ausländisches Geld.'));
        entries.push(this.createEntry(thema, 'ausmachen', null, 'Mach bitte das Licht aus!'));
        entries.push(this.createEntry(thema, 'die Aussage, -n', null, 'Ist die Aussage richtig oder falsch?'));
        entries.push(this.createEntry(thema, 'aussehen', null, 'Das sieht schön aus.'));
        entries.push(this.createEntry(thema, 'aus sein', null, ['Das Licht ist aus.', 'Die Schule ist aus.']));
        entries.push(this.createEntry(thema, 'aussteigen', null, 'Wo muss ich aussteigen?'));
        entries.push(this.createEntry(thema, 'der Ausweis', null, 'Hier ist mein Ausweis.'));
        entries.push(this.createEntry(thema, '(sich) ausziehen', null, 'Zieh die Schuhe aus, bitte!'));
        entries.push(this.createEntry(thema, 'das Auto, -s', null, 'Er kommt mit dem Auto.'));
        entries.push(this.createEntry(thema, 'die Autobahn, -en', null, 'Wo geht‘s hier bitte zur Autobahn?'));
        entries.push(this.createEntry(thema, 'der Automat', null, 'Die Fahrkarten gibt es nur am Automaten.'));
        entries.push(this.createEntry(thema, 'automatisch', null, 'Du musst nichts machen. Das geht automatisch.'));
        return entries;
    }

    createBEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'B'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createCEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'C'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createDEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'D'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createEEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'E'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createFEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'F'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createGEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'G'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createHEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'H'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createIEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'I'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createJEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'J'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createKEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'K'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createLEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'L'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createMEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'M'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createNEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'N'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createOEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'O'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createPEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'P'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createREntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'R'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createSEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'S'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createTEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'T'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createUEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'U'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createVEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'V'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createWEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'W'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createZEntries() {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'Z'];
//        entries.push(this.createEntry(thema, '', null, ''));
        return entries;
    }

    createEntry(thema, entry, alternative, examples) {
        let result = {
            type: 'vocabulary',
            level: 'a1',
            source: ['Goethe Institut', 'GOETHE-ZERTIFIKAT A1 START DEUTSCH 1', 'PRÜFUNGSZIELE TESTBESCHREIBUNG', 'ISBN 978-3-939670-76-6']
        };
        if (!!thema) {
            result.thema = thema;
        }
        if (!!entry) {
            result.entry = entry;
        }
        if (!!alternative) {
            result.alternative = alternative;
        }
        if (!!examples) {
            result.examples = examples;
        }
        return result;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA1Service;