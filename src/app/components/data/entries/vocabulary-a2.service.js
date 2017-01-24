class VocabularyA2Service {

    /*@ngInject*/
    constructor(VocabularyBuilder) {
        this.createEntries(VocabularyBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createAbkuerzungenEntries(Builder));
        this.addEntries(this.createAnglizismenEntries(Builder));
        this.addEntries(this.createAnweisungsspracheZurPruefungEntries(Builder));
        this.addEntries(this.createBerufeEntries(Builder));
        this.addEntries(this.createFamilienmitgliederEntries(Builder));
        this.addEntries(this.createFamilienstandEntries(Builder));
        this.addEntries(this.createFarbenEntries(Builder));
        this.addEntries(this.createHimmelsrichtungenEntries(Builder));
        this.addEntries(this.createLaenderUndNationalitaetenEntries(Builder));
        this.addEntries(this.createZahlenEntries(Builder));
        this.addEntries(this.createSchuleEntries(Builder));
        this.addEntries(this.createWaehrungenEntries(Builder));
        this.addEntries(this.createDatumEntries(Builder));
        this.addEntries(this.createFeiertageEntries(Builder));
        this.addEntries(this.createJahreszeitenEntries(Builder));
        this.addEntries(this.createMonatsnamenEntries(Builder));
        this.addEntries(this.createTageszeitenEntries(Builder));
        this.addEntries(this.createUhrzeitEntries(Builder));
        this.addEntries(this.createWochentageEntries(Builder));
        this.addEntries(this.createZeitangabenEntries(Builder));
        this.addEntries(this.createAEntries(Builder));
        this.addEntries(this.createBEntries(Builder));
        this.addEntries(this.createCEntries(Builder));
        this.addEntries(this.createDEntries(Builder));
        this.addEntries(this.createEEntries(Builder));
        this.addEntries(this.createFEntries(Builder));
        this.addEntries(this.createGEntries(Builder));
        this.addEntries(this.createHEntries(Builder));
        this.addEntries(this.createIEntries(Builder));
        this.addEntries(this.createJEntries(Builder));
        this.addEntries(this.createKEntries(Builder));
        this.addEntries(this.createLEntries(Builder));
        this.addEntries(this.createMEntries(Builder));
        this.addEntries(this.createNEntries(Builder));
        this.addEntries(this.createOEntries(Builder));
        this.addEntries(this.createPEntries(Builder));
        this.addEntries(this.createREntries(Builder));
        this.addEntries(this.createSEntries(Builder));
        this.addEntries(this.createTEntries(Builder));
        this.addEntries(this.createUEntries(Builder));
        this.addEntries(this.createVEntries(Builder));
        this.addEntries(this.createWEntries(Builder));
        this.addEntries(this.createZEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createAbkuerzungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Abkürzungen'];
		entries.push(new Builder().id('').thema(thema).entry('Abkürzungen').get());
		entries.push(new Builder().id('').thema(thema).entry('ca.').alternative('circa/zirka').get());
		entries.push(new Builder().id('').thema(thema).entry('d. h.').alternative('das heißt').get());
		entries.push(new Builder().id('').thema(thema).entry('der ICE').alternative('der Inter City Express').get());
		entries.push(new Builder().id('').thema(thema).entry('der PC, -s').alternative('der Personal Computer').get());
		entries.push(new Builder().id('').thema(thema).entry('die SMS').alternative('die Textnachricht').get());
		entries.push(new Builder().id('').thema(thema).entry('usw.').alternative('und so weiter').get());
		entries.push(new Builder().id('').thema(thema).entry('das WC, -s').alternative('die Toilette (water closet)').get());
		entries.push(new Builder().id('').thema(thema).entry('z. B.').alternative('zum Beispiel').get());
        return entries;
    }

    createAnglizismenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Anglizismen'];
		entries.push(new Builder().id('').thema(thema).entry('Anglizismen').get());
		entries.push(new Builder().id('').thema(thema).entry('r Babysitter, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Band, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r Blog, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('bloggen').get());
		entries.push(new Builder().id('').thema(thema).entry('e CD, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r CD-Player, -').get());
		entries.push(new Builder().id('').thema(thema).entry('chatten, r Chat(room), -s').get());
		entries.push(new Builder().id('').thema(thema).entry('e Cola, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r Comic, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r Computer, -').get());
		entries.push(new Builder().id('').thema(thema).entry('cool').get());
		entries.push(new Builder().id('').thema(thema).entry('e DVD, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('faxen, s Fax, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('s Festival, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('global').get());
		entries.push(new Builder().id('').thema(thema).entry('googeln').get());
		entries.push(new Builder().id('').thema(thema).entry('e Homepage, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('s Internet').get());
		entries.push(new Builder().id('').thema(thema).entry('r Laptop, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r Link, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('mailen').get());
		entries.push(new Builder().id('').thema(thema).entry('e Mail, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('e Mailbox, -en').get());
		entries.push(new Builder().id('').thema(thema).entry('online').get());
		entries.push(new Builder().id('').thema(thema).entry('s Poster, -').get());
		entries.push(new Builder().id('').thema(thema).entry('s Smartphone, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('surfen').get());
		entries.push(new Builder().id('').thema(thema).entry('s T-shirt,-s').get());
        return entries;
    }

    createAnweisungsspracheZurPruefungEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Anweisungssprache zur Prüfung'];
        /*
        Anweisungssprache zur Prüfung
r Antwortbogen, -
e Anzeige,-n
e Aufgabe, -n
ankreuzen, s Kreuz, -e
s Beispiel, -e
e Beschreibung, -en
falsch
formulieren
e Lösung, -en
markieren
r Partner, -, e Partnerin, -nen
reagieren
richtig
r Teil, -e, r Prüfungsteil, -e,
r Test, -s
r Text, -e
s Wörterbuch, ü, -er
e Zeitschrift, -en
        */
        return entries;
    }

    createBerufeEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Berufe'];
        /*
        Berufe
r Architekt, - en (e Architektin, -nen)
r Handwerker,- (die Handwerkerin, -nen)
r Hausmann, - männer (e Hausfrau, -en)
r Techniker, - (e Technikerin, -nen)
r Angestellte, -n (e Angestellte, -n)
r Lehrer, - (e Lehrerin, -nen)
r Künstler, - (e Künstlerin, nen)
r Ingenieur, -e (Ingenieurin, - nen)
r Arzt, Ärzte (Ärztin, -nen)
r Kaufmann, -männer (e Kauffrau, -en)
r Arzt, Ärzte (e Ärztin, -nen)
r Schauspieler, - (e Schauspielerin, -nen)
r Sekretär, -e (e Sekretärin, -nen)
r Schriftsteller, - (e Schriftstellerin, - nen)
r Kaufmann, Kaufmänner (e Kauffrau, -en)
r Beamte, n (e Beamtin, -nen)
r Arbeiter, - (e Arbeiterin, -nen)
r Bankkaufman, Bankkaufmänner (e Bankkauffrau, -en)
r Bäcker, - (e Bäckerin, -en)
r Friseur, -e (e Friseurin, -nen)
r Rentner, - (e Rentnerin, -nen)
r Journalist, -en (e Journalistin, -en)
r Krankenpfleger, - (e Krankenschwester, -n)
r Automechaniker, - (e Automechanikerin, -nen)
r Verkäufer, - (e Verkäuferin, -nen)
r Beruf der Eltern
        */
        return entries;
    }

    createFamilienmitgliederEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienmitglieder'];
        /*
        Familienmitglieder
Eltern (Pl.)
r Vater, ä, -
e Mutter, ü, -
s Kind, -er
r Sohn, ö, -e
e Tochter, ö, -
Geschwister (Pl.)
r Bruder, ü, -
e Schwester, -n
r Onkel, -
e Tante, -n
r Enkel,-
e Enkelin, -nen
Großeltern (Pl.)
r Großvater, ä, -
e Großmutter, ü, -
r Cousin, -s
e Cousine, -n
r/e Verwandte, -n
        */
        return entries;
    }

    createFamilienstandEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienstand'];
/*
Familienstand
ledig
verheiratet
getrennt/geschieden
r Witwer / e Witwe, -n
        */
        return entries;
    }

    createFarbenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Farben'];
/*
Farben
schwarz
weiß
gelb
grün
braun
blond
grau
rot
blau
orange
lila

        */
        return entries;
    }

    createHimmelsrichtungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Himmelsrichtungen'];
        /*
        Himmelsrichtungen
        r Norden
        r Süden
        r Westen
        r Osten
        */
        return entries;
    }

    createLaenderUndNationalitaetenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Länder und Nationalitäten'];
        /*
        Länder und Nationalitäten
Deutschland
der/die Deutsche, -n
deutsch
auf Deutsch
Europa
der Europäer/die Europäer
europäisch
        */
        return entries;
    }

    createZahlenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zahlen'];
/*
Zahlen
1 = eins
2 = zwei
3 = drei
4 = vier
5 = fünf
6 = sechs
7 = sieben
8 = acht
9 = neun
10 = zehn
11 = elf
12 = zwölf
13 = dreizehn
14 = vierzehn
15 = fünfzehn
16 = sechzehn
17 = siebzehn
18 = achtzehn
19 = neunzehn
20 = zwanzig
21 = einundzwanzig
30 = dreißig
40 = vierzig
50 = fünfzig
60 = sechzig
70 = siebzig
80 = achtzig
90 = neunzig
100 = (ein)hundert
101 = hunderteins
200 = zweihundert
1000 = (ein)tausend
2001 = zweitausendeins
1 000 000 = eine Million
1. erstens
2. zweitens
3. drittens
4. viertens
der/die erste
der/die zweite
der/die dritte
der/die vierte
einmal
zweimal
dreimal
viermal
        */
        return entries;
    }

    createSchuleEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Schule / Schulfächer'];
        /*
Schule
Schulfächer
e Grundschule/Hauptschule/
Realschule
e Gesamtschule
s Gymnasium
e Sprachschule/ s Goethe-Institut
r Lehrer, -, e Lehrerin, -nen
r Schüler, -, e Schülerin, -nen
e Prüfung, -en, r Prüfer, -
e Prüferin, -nen
Deutsch/Mathematik/Englisch/
Geografie/ Kunst(erziehung)/
Sozialkunde/Sport/
Physik/Chemie/Biologie/
Geschichte/Latein/
Philosophie/Religion/Musik
        */
        return entries;
    }

    createWaehrungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Währungen und Maße'];
/*
Währungen und Maße
1 Euro = 100 Cent
1 Dollar = 100 Cent
1 m = ein Meter
1,50 m = ein Meter fünfzig
1 km = ein Kilometer
1 l = ein Liter
1 g = ein Gramm /
1 kg = ein Kilogramm
1 % = ein Prozent
*/
        return entries;
    }

    createDatumEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Datum'];
/*
Datum
Heute ist der 20.2.2012 'der zwanzigste zweite (Februar) zweitausendzwölf'
1848    achtzehnhundertachtundvierzig
Berlin, 14.3.2013   'vierzehnter dritter zweitausenddreizehn'
        */
        return entries;
    }

    createFeiertageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Feiertage'];
        /*
        Feiertage
        Karneval/Ostern
        Weihnachten
        */
        return entries;
    }

    createJahreszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Jahreszeiten'];
        /*
        Jahreszeiten
        r Frühling/ s Frühjahr
        r Sommer
        r Herbst
        r Winter
        */
        return entries;
    }

    createMonatsnamenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Monatsnamen'];
        /*
        Monatsnamen
        r Januar
        r Februar
        r März
        r April
        r Mai
        r Juni r Juli
        r August
        r September
        r Oktober
        r November
        r Dezember
        */
        return entries;
    }

    createTageszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Tageszeiten'];
        /*
        Tageszeiten
        r Tag, -e
        r Morgen, -
        r Vormittag, -e
        r Mittag, -e
        r Nachmittag, -e
        r Abend, -e
        e Nacht,“ –e
        e Mitternacht
        täglich, tagsüber
        morgens, am Morgen
        vormittags, am Vormittag
        mittags, am Mittag
        nachmittags, am Nachmittag
        abends, am Abend
        nachts, in der Nacht
        um Mitternacht
        */
        return entries;
    }

    createUhrzeitEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Uhrzeit'];
        /*
        Uhrzeit
        07.03   sieben Uhr drei
        3.15    drei Uhr fünfzehn
        15.30   fünfzehn Uhr dreißig / halb vier
        24.00   vierundzwanzig Uhr
        13.00   dreizehn Uhr / ein Uhr
        11.30   halb zwölf
        14.05   vierzehn Uhr fünf / fünf nach zwei
        14.55   vierzehn Uhr fünfundfünfzig / fünf vor drei
        10.15   viertel nach zehn
        6.45    viertel vor sieben
        20.40   zwanzig Uhr vierzig / zwanzig vor neun
        */
        return entries;
    }

    createWochentageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Wochentage'];
        /*
        Wochentage
        r Montag
        r Dienstag
        r Mittwoch
        r Donnerstag
        r Freitag
        r Samstag / Sonnabend
        r Sonntag
        s Wochenende
        r Arbeitstag
        r Feiertag
        montags, am Montag
        dienstags, am Dienstag
        mittwochs, am Mittwoch
        donnerstags, am Donnerstag
        freitags, am Freitag
        samstags, am Samstag
        sonntags, am Sonntag
        am Wochenende
        */
        return entries;
    }

    createZeitangabenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Zeitangaben'];
        /*
        Zeitangaben
        e Sekunde, -n
        e Minute,- n
        e Stunde,- n
        e halbe Stunde, -n
        e Viertelstunde, -n
        r Tag, -e
        e Woche, -n
        r Monat, -e
        s Jahr, -e
        */
        return entries;
    }

    createAEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'A'];
        /*
		entries.push(new Builder().id(' ').thema(thema).entry('').example('').get());
Ab
aber
abfahren
r Abfall, ä, -e
abgeben
abholen
s Abitur (Sg.)
e Achtung (Sg.)
e Adresse, -n
e Ahnung, -en
aktiv
alle
allein
als
also
alt
s Alter (Sg.)
e Ampel, -n
an
anbieten
ander-
anders
r Anfang, ä, -e
anfangen
e Angst, Ä, -e
ankommen
anmachen
anmelden (sich)
anrufen
r Anruf
e Ansage, -n
e Anzeige, -n
anziehen
r Anzug, ü, -e


Ab morgen muss ich wieder arbeiten.
Der Film ist traurig, aber auch sehr schön./Heute geht es nicht, aber morgen.
Der Zug fährt pünktlich ab.
Bitte lasst keinen Abfall auf dem Parkplatz liegen!
Wo kann ich das Buch hier abgeben?
Ich hole dich am Bahnhof ab.
['Nächstes Jahr mache ich Abitur.', 'Dann will ich studieren.']
Achtung, da kommt ein Auto!
Weißt du seine neue Adresse? Ja, er wohnt in...
Weißt du, wo wir uns treffen wollen?/Nein, ich habe keine Ahnung.
Er ist im Sport sehr aktiv.
Sind alle Schüler da?/Hast du alles?
Er arbeitet lieber allein./Ich gehe nicht gern allein ins Kino.
Mein Bruder ist älter als ich./Sie arbeitet als Ärztin.
Wir haben viel Platz, du kannst also bei uns schlafen./Also, die Sache ist so: ...
Wie alt bist du?/Unser Haus ist sehr alt./Fährt das alte Auto immer noch?
Alter: 15 Jahre.
Fahren Sie an der Ampel links./Die Ampel ist rot, bleib stehen!
Ich komme am Sonntag/am Morgen./Wir sind am Meer/am Fenster./Wir gehen an den Strand./Ich arbeite gern am Computer.
Er hat mir einen Job angeboten./Kann ich dir etwas anbieten? Tee oder Kaffee?
'Ich nehme lieber den anderen Pullover. Der gefällt mir besser.'
In Deutschland ist das Leben anders./Ich würde das anders machen./Er ist anders als du.
Am Anfang ist das Buch langweilig, am Ende lustig./Wir machen Anfang August Ferien.
Bitte fang jetzt an!/Der Unterricht fängt gleich an.
Ich habe keine Angst vor der Prüfung.
Wann kommt ihr in Berlin an?
Es ist dunkel. Mach bitte das Licht an!
Du musst dich für die Prüfung anmelden.
Ich rufe dich morgen an.
Gut, ich warte dann auf deinen Anruf.
Folgt den Ansagen am Telefon.
Lies mal die Anzeige in der Zeitung.
Was ziehe ich heute an? Eine Hose oder ein Kleid?
Für die Geburtstagsfeier von Oma brauchst du einen Anzug.
		*/
        return entries;
    }

    createBEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'B'];
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'C'];
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'D'];
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'E'];
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'F'];
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'G'];
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'H'];
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'I'];
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'J'];
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'K'];
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'L'];
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'M'];
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'N'];
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'O'];
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'P'];
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'R'];
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'S'];
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'T'];
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'U'];
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'V'];
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'W'];
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Z'];
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA2Service;