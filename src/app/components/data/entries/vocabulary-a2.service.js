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
		entries.push(new Builder().id('').thema(thema).entry('Anweisungssprache').get());
		entries.push(new Builder().id('').thema(thema).entry('r Antwortbogen, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Anzeige,-n').get());
		entries.push(new Builder().id('').thema(thema).entry('e Aufgabe, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('ankreuzen').get());
		entries.push(new Builder().id('').thema(thema).entry('s Kreuz, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('s Beispiel, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('e Beschreibung, -en').get());
		entries.push(new Builder().id('').thema(thema).entry('falsch').get());
		entries.push(new Builder().id('').thema(thema).entry('formulieren').get());
		entries.push(new Builder().id('').thema(thema).entry('e Lösung, -en').get());
		entries.push(new Builder().id('').thema(thema).entry('markieren').get());
		entries.push(new Builder().id('').thema(thema).entry('r Partner, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Partnerin, -nen').get());
		entries.push(new Builder().id('').thema(thema).entry('reagieren').get());
		entries.push(new Builder().id('').thema(thema).entry('richtig').get());
		entries.push(new Builder().id('').thema(thema).entry('r Teil, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Prüfungsteil, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Test, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('r Text, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wörterbuch, ü, -er').get());
		entries.push(new Builder().id('').thema(thema).entry('e Zeitschrift, -en').get());
        return entries;
    }

    createBerufeEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Berufe'];
		entries.push(new Builder().id('').thema(thema).entry('Beruf').get());
		entries.push(new Builder().id('').thema(thema).entry('r Architekt, - en (e Architektin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Handwerker,- (die Handwerkerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Hausmann, - männer (e Hausfrau, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Techniker, - (e Technikerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Angestellte, -n (e Angestellte, -n)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Lehrer, - (e Lehrerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Künstler, - (e Künstlerin, nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ingenieur, -e (Ingenieurin, - nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arzt, Ärzte (Ärztin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kaufmann, -männer (e Kauffrau, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arzt, Ärzte (e Ärztin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Schauspieler, - (e Schauspielerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Sekretär, -e (e Sekretärin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Schriftsteller, - (e Schriftstellerin, - nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kaufmann, Kaufmänner (e Kauffrau, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Beamte, n (e Beamtin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arbeiter, - (e Arbeiterin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Bankkaufman, Bankkaufmänner (e Bankkauffrau, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Bäcker, - (e Bäckerin, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Friseur, -e (e Friseurin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Rentner, - (e Rentnerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Journalist, -en (e Journalistin, -en)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Krankenpfleger, - (e Krankenschwester, -n)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Automechaniker, - (e Automechanikerin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Verkäufer, - (e Verkäuferin, -nen)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Beruf der Eltern').get());
        return entries;
    }

    createFamilienmitgliederEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienmitglieder'];
		entries.push(new Builder().id('').thema(thema).entry('Familienmitglieder').get());
		entries.push(new Builder().id('').thema(thema).entry('Eltern (Pl.)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Vater, ä, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Mutter, ü, -').get());
		entries.push(new Builder().id('').thema(thema).entry('s Kind, -er').get());
		entries.push(new Builder().id('').thema(thema).entry('r Sohn, ö, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tochter, ö, -').get());
		entries.push(new Builder().id('').thema(thema).entry('Geschwister (Pl.)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Bruder, ü, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Schwester, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('r Onkel, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tante, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('r Enkel,-').get());
		entries.push(new Builder().id('').thema(thema).entry('e Enkelin, -nen').get());
		entries.push(new Builder().id('').thema(thema).entry('Großeltern (Pl.)').get());
		entries.push(new Builder().id('').thema(thema).entry('r Großvater, ä, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Großmutter, ü, -').get());
		entries.push(new Builder().id('').thema(thema).entry('r Cousin, -s').get());
		entries.push(new Builder().id('').thema(thema).entry('e Cousine, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('r/e Verwandte, -n').get());
        return entries;
    }

    createFamilienstandEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienstand'];
		entries.push(new Builder().id('').thema(thema).entry('Familienstand').get());
		entries.push(new Builder().id('').thema(thema).entry('ledig').get());
		entries.push(new Builder().id('').thema(thema).entry('verheiratet').get());
		entries.push(new Builder().id('').thema(thema).entry('getrennt/geschieden').get());
		entries.push(new Builder().id('').thema(thema).entry('r Witwer / e Witwe, -n').get());
        return entries;
    }

    createFarbenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Farben'];
		entries.push(new Builder().id('').thema(thema).entry('Farben').get());
		entries.push(new Builder().id('').thema(thema).entry('schwarz').get());
		entries.push(new Builder().id('').thema(thema).entry('weiß').get());
		entries.push(new Builder().id('').thema(thema).entry('gelb').get());
		entries.push(new Builder().id('').thema(thema).entry('grün').get());
		entries.push(new Builder().id('').thema(thema).entry('braun').get());
		entries.push(new Builder().id('').thema(thema).entry('blond').get());
		entries.push(new Builder().id('').thema(thema).entry('grau').get());
		entries.push(new Builder().id('').thema(thema).entry('rot').get());
		entries.push(new Builder().id('').thema(thema).entry('blau').get());
		entries.push(new Builder().id('').thema(thema).entry('orange').get());
		entries.push(new Builder().id('').thema(thema).entry('lila').get());
        return entries;
    }

    createHimmelsrichtungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Himmelsrichtungen'];
		entries.push(new Builder().id('').thema(thema).entry('Himmelsrichtungen').get());
		entries.push(new Builder().id('').thema(thema).entry('r Norden').get());
		entries.push(new Builder().id('').thema(thema).entry('r Süden').get());
		entries.push(new Builder().id('').thema(thema).entry('r Westen').get());
		entries.push(new Builder().id('').thema(thema).entry('r Osten').get());
        return entries;
    }

    createLaenderUndNationalitaetenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Länder und Nationalitäten'];
		entries.push(new Builder().id('').thema(thema).entry('Nationalitäten').get());
		entries.push(new Builder().id('').thema(thema).entry('Land').get());
		entries.push(new Builder().id('').thema(thema).entry('Deutschland').get());
		entries.push(new Builder().id('').thema(thema).entry('der/die Deutsche, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('deutsch').get());
		entries.push(new Builder().id('').thema(thema).entry('auf Deutsch').get());
		entries.push(new Builder().id('').thema(thema).entry('Europa').get());
		entries.push(new Builder().id('').thema(thema).entry('der Europäer/die Europäer').get());
		entries.push(new Builder().id('').thema(thema).entry('europäisch').get());
        return entries;
    }

    createZahlenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zahlen'];
		entries.push(new Builder().id('').thema(thema).entry('Zahlen').get());
		entries.push(new Builder().id('').thema(thema).entry('eins').alternative('1').get());
		entries.push(new Builder().id('').thema(thema).entry('zwei').alternative('2').get());
		entries.push(new Builder().id('').thema(thema).entry('drei').alternative('3').get());
		entries.push(new Builder().id('').thema(thema).entry('vier').alternative('4').get());
		entries.push(new Builder().id('').thema(thema).entry('fünf').alternative('5').get());
		entries.push(new Builder().id('').thema(thema).entry('sechs').alternative('6').get());
		entries.push(new Builder().id('').thema(thema).entry('sieben').alternative('7').get());
		entries.push(new Builder().id('').thema(thema).entry('acht').alternative('8').get());
		entries.push(new Builder().id('').thema(thema).entry('neun').alternative('9').get());
		entries.push(new Builder().id('').thema(thema).entry('zehn').alternative('10').get());
		entries.push(new Builder().id('').thema(thema).entry('elf').alternative('11').get());
		entries.push(new Builder().id('').thema(thema).entry('zwölf').alternative('12').get());
		entries.push(new Builder().id('').thema(thema).entry('dreizehn').alternative('13').get());
		entries.push(new Builder().id('').thema(thema).entry('vierzehn').alternative('14').get());
		entries.push(new Builder().id('').thema(thema).entry('fünfzehn').alternative('15').get());
		entries.push(new Builder().id('').thema(thema).entry('sechzehn').alternative('16').get());
		entries.push(new Builder().id('').thema(thema).entry('siebzehn').alternative('17').get());
		entries.push(new Builder().id('').thema(thema).entry('achtzehn').alternative('18').get());
		entries.push(new Builder().id('').thema(thema).entry('neunzehn').alternative('19').get());
		entries.push(new Builder().id('').thema(thema).entry('zwanzig').alternative('20').get());
		entries.push(new Builder().id('').thema(thema).entry('einundzwanzig').alternative('21').get());
		entries.push(new Builder().id('').thema(thema).entry('dreißig').alternative('30').get());
		entries.push(new Builder().id('').thema(thema).entry('vierzig').alternative('40').get());
		entries.push(new Builder().id('').thema(thema).entry('fünfzig').alternative('50').get());
		entries.push(new Builder().id('').thema(thema).entry('sechzig').alternative('60').get());
		entries.push(new Builder().id('').thema(thema).entry('siebzig').alternative('70').get());
		entries.push(new Builder().id('').thema(thema).entry('achtzig').alternative('80').get());
		entries.push(new Builder().id('').thema(thema).entry('neunzig').alternative('90').get());
		entries.push(new Builder().id('').thema(thema).entry('(ein)hundert').alternative('100').get());
		entries.push(new Builder().id('').thema(thema).entry('hunderteins').alternative('101').get());
		entries.push(new Builder().id('').thema(thema).entry('zweihundert').alternative('200').get());
		entries.push(new Builder().id('').thema(thema).entry('(ein)tausend').alternative('1000').get());
		entries.push(new Builder().id('').thema(thema).entry('zweitausendeins').alternative('2001').get());
		entries.push(new Builder().id('').thema(thema).entry('eine Million').alternative('1 000 000').get());
		entries.push(new Builder().id('').thema(thema).entry('erstens').alternative('1.').get());
		entries.push(new Builder().id('').thema(thema).entry('zweitens').alternative('2.').get());
		entries.push(new Builder().id('').thema(thema).entry('drittens').alternative('3,').get());
		entries.push(new Builder().id('').thema(thema).entry('viertens').alternative('4.').get());
		entries.push(new Builder().id('').thema(thema).entry('der/die erste').get());
		entries.push(new Builder().id('').thema(thema).entry('der/die zweite').get());
		entries.push(new Builder().id('').thema(thema).entry('der/die dritte').get());
		entries.push(new Builder().id('').thema(thema).entry('der/die vierte').get());
		entries.push(new Builder().id('').thema(thema).entry('einmal').get());
		entries.push(new Builder().id('').thema(thema).entry('zweimal').get());
		entries.push(new Builder().id('').thema(thema).entry('dreimal').get());
		entries.push(new Builder().id('').thema(thema).entry('viermal').get());
        return entries;
    }

    createSchuleEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Schule / Schulfächer'];
		entries.push(new Builder().id('').thema(thema).entry('Schule').get());
		entries.push(new Builder().id('').thema(thema).entry('Schulfächer').get());
		entries.push(new Builder().id('').thema(thema).entry('e Grundschule').get());
		entries.push(new Builder().id('').thema(thema).entry('Hauptschule').get());
		entries.push(new Builder().id('').thema(thema).entry('Realschule').get());
		entries.push(new Builder().id('').thema(thema).entry('e Gesamtschule').get());
		entries.push(new Builder().id('').thema(thema).entry('s Gymnasium').get());
		entries.push(new Builder().id('').thema(thema).entry('e Sprachschule').get());
		entries.push(new Builder().id('').thema(thema).entry('s Goethe-Institut').get());
		entries.push(new Builder().id('').thema(thema).entry('r Lehrer, -, e Lehrerin, -nen').get());
		entries.push(new Builder().id('').thema(thema).entry('r Schüler, -, e Schülerin, -nen').get());
		entries.push(new Builder().id('').thema(thema).entry('e Prüfung, -en, r Prüfer, -').get());
		entries.push(new Builder().id('').thema(thema).entry('e Prüferin, -nen').get());
		entries.push(new Builder().id('').thema(thema).entry('Deutsch').get());
		entries.push(new Builder().id('').thema(thema).entry('Mathematik').get());
		entries.push(new Builder().id('').thema(thema).entry('Englisch').get());
		entries.push(new Builder().id('').thema(thema).entry('Geografie').get());
		entries.push(new Builder().id('').thema(thema).entry('Kunst(erziehung)').get());
		entries.push(new Builder().id('').thema(thema).entry('Sozialkunde').get());
		entries.push(new Builder().id('').thema(thema).entry('Sport').get());
		entries.push(new Builder().id('').thema(thema).entry('Physik').get());
		entries.push(new Builder().id('').thema(thema).entry('Chemie').get());
		entries.push(new Builder().id('').thema(thema).entry('Biologie').get());
		entries.push(new Builder().id('').thema(thema).entry('Geschichte').get());
		entries.push(new Builder().id('').thema(thema).entry('Latein').get());
		entries.push(new Builder().id('').thema(thema).entry('Philosophie').get());
		entries.push(new Builder().id('').thema(thema).entry('Religion').get());
		entries.push(new Builder().id('').thema(thema).entry('Musik').get());
        return entries;
    }

    createWaehrungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Währungen und Maße'];
		entries.push(new Builder().id('').thema(thema).entry('Währungen').get());
		entries.push(new Builder().id('').thema(thema).entry('Maße').get());
		entries.push(new Builder().id('').thema(thema).entry('1 Euro').alternative('100 Cent').get());
		entries.push(new Builder().id('').thema(thema).entry('1 Dollar').alternative('100 Cent').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Meter').alternative('1 m').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Meter fünfzig').alternative('1,50 m').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Kilometer').alternative('1 km').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Liter').alternative('1 l').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Gramm').alternative('1 g').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Kilogramm').alternative('1 kg').get());
		entries.push(new Builder().id('').thema(thema).entry('ein Prozent').alternative('1 %').get());
        return entries;
    }

    createDatumEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Datum'];
		entries.push(new Builder().id('').thema(thema).entry('Datum').get());
		entries.push(new Builder().id('').thema(thema).entry('der zwanzigste zweite (Februar) zweitausendzwölf').alternative('Heute ist der 20.2.2012').get());
		entries.push(new Builder().id('').thema(thema).entry('achtzehnhundertachtundvierzig').alternative('1848').get());
		entries.push(new Builder().id('').thema(thema).entry('vierzehnter dritter zweitausenddreizehn').alternative('Berlin, 14.3.2013').get());
        return entries;
    }

    createFeiertageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Feiertage'];
		entries.push(new Builder().id('').thema(thema).entry('Feiertage').get());
		entries.push(new Builder().id('').thema(thema).entry('Karneval').get());
		entries.push(new Builder().id('').thema(thema).entry('Ostern').get());
		entries.push(new Builder().id('').thema(thema).entry('Weihnachten').get());
        return entries;
    }

    createJahreszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Jahreszeiten'];
		entries.push(new Builder().id('').thema(thema).entry('Jahreszeiten').get());
		entries.push(new Builder().id('').thema(thema).entry('r Frühling').get());
		entries.push(new Builder().id('').thema(thema).entry('s Frühjahr').get());
		entries.push(new Builder().id('').thema(thema).entry('r Sommer').get());
		entries.push(new Builder().id('').thema(thema).entry('r Herbst').get());
		entries.push(new Builder().id('').thema(thema).entry('r Winter').get());
        return entries;
    }

    createMonatsnamenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Monatsnamen'];
		entries.push(new Builder().id('').thema(thema).entry('Monatsnamen').get());
		entries.push(new Builder().id('').thema(thema).entry('r Januar').get());
		entries.push(new Builder().id('').thema(thema).entry('r Februar').get());
		entries.push(new Builder().id('').thema(thema).entry('r März').get());
		entries.push(new Builder().id('').thema(thema).entry('r April').get());
		entries.push(new Builder().id('').thema(thema).entry('r Mai').get());
		entries.push(new Builder().id('').thema(thema).entry('r Juni').get());
		entries.push(new Builder().id('').thema(thema).entry('r Juli').get());
		entries.push(new Builder().id('').thema(thema).entry('r August').get());
		entries.push(new Builder().id('').thema(thema).entry('r September').get());
		entries.push(new Builder().id('').thema(thema).entry('r Oktober').get());
		entries.push(new Builder().id('').thema(thema).entry('r November').get());
		entries.push(new Builder().id('').thema(thema).entry('r Dezember').get());
        return entries;
    }

    createTageszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Tageszeiten'];
		entries.push(new Builder().id('').thema(thema).entry('Tageszeiten').get());
		entries.push(new Builder().id('').thema(thema).entry('r Tag, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Morgen, -').get());
		entries.push(new Builder().id('').thema(thema).entry('r Vormittag, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Mittag, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Nachmittag, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('r Abend, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('e Nacht,“ –e').get());
		entries.push(new Builder().id('').thema(thema).entry('e Mitternacht').get());
		entries.push(new Builder().id('').thema(thema).entry('täglich').get());
		entries.push(new Builder().id('').thema(thema).entry('tagsüber').get());
		entries.push(new Builder().id('').thema(thema).entry('morgens').get());
		entries.push(new Builder().id('').thema(thema).entry('am Morgen').get());
		entries.push(new Builder().id('').thema(thema).entry('vormittags').get());
		entries.push(new Builder().id('').thema(thema).entry('am Vormittag').get());
		entries.push(new Builder().id('').thema(thema).entry('mittags').get());
		entries.push(new Builder().id('').thema(thema).entry('am Mittag').get());
		entries.push(new Builder().id('').thema(thema).entry('nachmittags').get());
		entries.push(new Builder().id('').thema(thema).entry('am Nachmittag').get());
		entries.push(new Builder().id('').thema(thema).entry('abends').get());
		entries.push(new Builder().id('').thema(thema).entry('am Abend').get());
		entries.push(new Builder().id('').thema(thema).entry('nachts').get());
		entries.push(new Builder().id('').thema(thema).entry('in der Nacht').get());
		entries.push(new Builder().id('').thema(thema).entry('um Mitternacht').get());
        return entries;
    }

    createUhrzeitEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Uhrzeit'];
		entries.push(new Builder().id('').thema(thema).entry('Uhrzeit').get());
		entries.push(new Builder().id('').thema(thema).entry('sieben Uhr drei').alternative('07.03').get());
		entries.push(new Builder().id('').thema(thema).entry('drei Uhr fünfzehn').alternative('3.15').get());
		entries.push(new Builder().id('').thema(thema).entry('fünfzehn Uhr dreißig / halb vier').alternative('15.30').get());
		entries.push(new Builder().id('').thema(thema).entry('vierundzwanzig Uhr').alternative('24.00').get());
		entries.push(new Builder().id('').thema(thema).entry('dreizehn Uhr / ein Uhr').alternative('13.00').get());
		entries.push(new Builder().id('').thema(thema).entry('halb zwölf').alternative('11.30').get());
		entries.push(new Builder().id('').thema(thema).entry('vierzehn Uhr fünf / fünf nach zwei').alternative('14.05').get());
		entries.push(new Builder().id('').thema(thema).entry('vierzehn Uhr fünfundfünfzig / fünf vor drei').alternative('14.55').get());
		entries.push(new Builder().id('').thema(thema).entry('viertel nach zehn').alternative('10.15').get());
		entries.push(new Builder().id('').thema(thema).entry('viertel vor sieben').alternative('6.45').get());
		entries.push(new Builder().id('').thema(thema).entry('zwanzig Uhr vierzig / zwanzig vor neun').alternative('20.40').get());
        return entries;
    }

    createWochentageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Wochentage'];
		entries.push(new Builder().id('').thema(thema).entry('Wochentage').get());
		entries.push(new Builder().id('').thema(thema).entry('r Montag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Dienstag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Mittwoch').get());
		entries.push(new Builder().id('').thema(thema).entry('r Donnerstag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Freitag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Samstag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Sonnabend').get());
		entries.push(new Builder().id('').thema(thema).entry('r Sonntag').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wochenende').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arbeitstag').get());
		entries.push(new Builder().id('').thema(thema).entry('r Feiertag').get());
        entries.push(new Builder().id('').thema(thema).entry('montags').get());
		entries.push(new Builder().id('').thema(thema).entry('am Montag').get());
        entries.push(new Builder().id('').thema(thema).entry('dienstags').get());
        entries.push(new Builder().id('').thema(thema).entry('am Dienstag').get());
        entries.push(new Builder().id('').thema(thema).entry('mittwochs').get());
        entries.push(new Builder().id('').thema(thema).entry('am Mittwoch').get());
        entries.push(new Builder().id('').thema(thema).entry('donnerstags').get());
        entries.push(new Builder().id('').thema(thema).entry('am Donnerstag').get());
        entries.push(new Builder().id('').thema(thema).entry('freitags').get());
        entries.push(new Builder().id('').thema(thema).entry('am Freitag').get());
        entries.push(new Builder().id('').thema(thema).entry('samstags').get());
        entries.push(new Builder().id('').thema(thema).entry('am Samstag').get());
        entries.push(new Builder().id('').thema(thema).entry('sonntags').get());
        entries.push(new Builder().id('').thema(thema).entry('am Sonntag').get());
        entries.push(new Builder().id('').thema(thema).entry('am Wochenende').get());
        return entries;
    }

    createZeitangabenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Zeitangaben'];
		entries.push(new Builder().id('').thema(thema).entry('Zeitangaben').get());
		entries.push(new Builder().id('').thema(thema).entry('e Sekunde, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('e Minute,- n').get());
		entries.push(new Builder().id('').thema(thema).entry('e Stunde,- n').get());
		entries.push(new Builder().id('').thema(thema).entry('e halbe Stunde, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('e Viertelstunde, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('r Tag, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('e Woche, -n').get());
		entries.push(new Builder().id('').thema(thema).entry('r Monat, -e').get());
		entries.push(new Builder().id('').thema(thema).entry('s Jahr, -e').get());
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