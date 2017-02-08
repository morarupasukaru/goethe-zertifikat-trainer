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
		entries.push(new Builder().id('').thema(thema).entry('e Grundschule').translate('école primaire').get());
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
		entries.push(new Builder().id('').thema(thema).entry('Ab').example('Ab morgen muss ich wieder arbeiten.').get());
		entries.push(new Builder().id('').thema(thema).entry('aber').example(['Der Film ist traurig, aber auch sehr schön.', 'Heute geht es nicht, aber morgen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('abfahren').example('Der Zug fährt pünktlich ab.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Abfall, ä, -e').example('Bitte lasst keinen Abfall auf dem Parkplatz liegen!').get());
		entries.push(new Builder().id('').thema(thema).entry('abgeben').example('Wo kann ich das Buch hier abgeben?').get());
		entries.push(new Builder().id('').thema(thema).entry('abholen').example('Ich hole dich am Bahnhof ab.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Abitur (Sg.)').example(['Nächstes Jahr mache ich Abitur.', 'Dann will ich studieren.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Achtung (Sg.)').example('Achtung, da kommt ein Auto!').get());
		entries.push(new Builder().id('').thema(thema).entry('e Adresse, -n').example('Weißt du seine neue Adresse? Ja, er wohnt in...').get());
		entries.push(new Builder().id('').thema(thema).entry('e Ahnung, -en').example('Weißt du, wo wir uns treffen wollen? - Nein, ich habe keine Ahnung.').get());
		entries.push(new Builder().id('').thema(thema).entry('aktiv').example('Er ist im Sport sehr aktiv.').get());
		entries.push(new Builder().id('').thema(thema).entry('alle').example(['Sind alle Schüler da?', 'Hast du alles?']).get());
		entries.push(new Builder().id('').thema(thema).entry('allein').example(['Er arbeitet lieber allein.', 'Ich gehe nicht gern allein ins Kino.']).get());
		entries.push(new Builder().id('').thema(thema).entry('als').example(['Mein Bruder ist älter als ich.', 'Sie arbeitet als Ärztin.']).get());
		entries.push(new Builder().id('').thema(thema).entry('also').example(['Wir haben viel Platz, du kannst also bei uns schlafen.', 'Also, die Sache ist so: ...']).get());
		entries.push(new Builder().id('').thema(thema).entry('alt').example(['Wie alt bist du?', 'Unser Haus ist sehr alt.', 'Fährt das alte Auto immer noch?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Alter (Sg.)').example('Alter: 15 Jahre.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Ampel, -n').example(['Fahren Sie an der Ampel links.', 'Die Ampel ist rot, bleib stehen!']).get());
		entries.push(new Builder().id('').thema(thema).entry('an').example(['Ich komme am Sonntag', 'am Morgen.', 'Wir sind am Meer', 'am Fenster.', 'Wir gehen an den Strand.', 'Ich arbeite gern am Computer.']).get());
		entries.push(new Builder().id('').thema(thema).entry('anbieten').example(['Er hat mir einen Job angeboten.', 'Kann ich dir etwas anbieten? Tee oder Kaffee?']).get());
		entries.push(new Builder().id('').thema(thema).entry('ander-').example('Ich nehme lieber den anderen Pullover. Der gefällt mir besser.').get());
		entries.push(new Builder().id('').thema(thema).entry('anders').example(['In Deutschland ist das Leben anders.', 'Ich würde das anders machen.', 'Er ist anders als du.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Anfang, ä, -e').example(['Am Anfang ist das Buch langweilig, am Ende lustig.', 'Wir machen Anfang August Ferien.']).get());
		entries.push(new Builder().id('').thema(thema).entry('anfangen').example(['Bitte fang jetzt an!', 'Der Unterricht fängt gleich an.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Angst, Ä, -e').example('Ich habe keine Angst vor der Prüfung.').get());
		entries.push(new Builder().id('').thema(thema).entry('ankommen').example('Wann kommt ihr in Berlin an?').get());
		entries.push(new Builder().id('').thema(thema).entry('anmachen').example('Es ist dunkel. Mach bitte das Licht an!').get());
		entries.push(new Builder().id('').thema(thema).entry('anmelden (sich)').example('Du musst dich für die Prüfung anmelden.').get());
		entries.push(new Builder().id('').thema(thema).entry('anrufen').example('Ich rufe dich morgen an.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Anruf').example('Gut, ich warte dann auf deinen Anruf.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Ansage, -n').example('Folgt den Ansagen am Telefon.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Anzeige, -n').example('Lies mal die Anzeige in der Zeitung.').get());
		entries.push(new Builder().id('').thema(thema).entry('anziehen').example('Was ziehe ich heute an? Eine Hose oder ein Kleid?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Anzug, ü, -e').example('Für die Geburtstagsfeier von Oma brauchst du einen Anzug.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Apfel, ä, -e').example('Die Äpfel aus Omas Garten schmecken sehr gut.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Apotheke, -n').example('Aspirin bekommen Sie nur in der Apotheke.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Appetit (Sg.)').example(['Guten Appetit!', 'Ich habe Appetit auf eine Banane.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Arbeit, -en').example(['Mein Bruder sucht Arbeit.', 'Ich gehe zu Fuß zur Arbeit.', 'War die Physikarbeit schwer?']).get());
		entries.push(new Builder().id('').thema(thema).entry('arbeiten').example('Meine Mutter arbeitet im Krankenhaus.').get());
		entries.push(new Builder().id('').thema(thema).entry('arbeitslos').example('Mein Vater hat keine Arbeit. Er ist arbeitslos.').get());
		entries.push(new Builder().id('').thema(thema).entry('ärgern (sich)').example(['Die Schüler ärgern den Lehrer.', 'Ich habe mich sehr über meinen Bruder geärgert.']).get());
		entries.push(new Builder().id('').thema(thema).entry('arm').example('Hans ist sehr arm. Er hat wenig Geld.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arm, -e').example('Sie ist am Arm verletzt. Jetzt kann sie nicht mehr Basketball spielen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Artikel, -').example('Der Artikel in der Zeitung ist interessant.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Arzt, Ä, -e/e Ärztin, -nen').example('Er ist krank und muss heute zum Arzt.').get());
		entries.push(new Builder().id('').thema(thema).entry('auch').example(['Ich möchte auch mitspielen.', 'Sie kommen aus München? Ich auch.']).get());
		entries.push(new Builder().id('').thema(thema).entry('auf').example(['Die Zeitung ist auf dem Tisch.', 'Auf dem Foto bin ich mit meiner Schwester.', 'Wie heißt das auf Deutsch?']).get());
		entries.push(new Builder().id('').thema(thema).entry('aufhören').example(['Bitte, hör jetzt auf!', 'Hier hört die Bahnhofsstraße auf.', 'In einer Woche hört der Kurs auf.']).get());
		entries.push(new Builder().id('').thema(thema).entry('auf jeden/keinen Fall').example('Du kannst auf jeden/keinen Fall mit ihm sprechen.').get());
		entries.push(new Builder().id('').thema(thema).entry('aufmachen').example('Kannst du bitte das Fenster aufmachen?').get());
		entries.push(new Builder().id('').thema(thema).entry('aufpassen').example(['Pass auf, ein Auto!', 'Er passt im Unterricht nicht richtig auf.', 'Kannst du auf deine Schwester aufpassen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('aufräumen').example('Bitte räum dein Zimmer auf.').get());
		entries.push(new Builder().id('').thema(thema).entry('aufregend').example(['Ich finde den Film aufregend.', 'Es ist aufregend bei diesem Wettbewerb zu sein.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Aufsatz, ä, -e').example('Ich muss noch einen Aufsatz über die Römer schreiben.').get());
		entries.push(new Builder().id('').thema(thema).entry('aufstehen').example('Um acht Uhr stehen wir auf.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Auge, -n').example('Er hat grüne Augen.').get());
		entries.push(new Builder().id('').thema(thema).entry('aus').example(['Wann kommt ihr aus der Schule?', 'Der Tisch ist aus Holz.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Ausflug, ü, -e').example('Wir machen mit der Schule einen Ausflug nach Heidelberg.').get());
		entries.push(new Builder().id('').thema(thema).entry('ausfüllen').example('Bitte füllen Sie das Formular aus.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ausgang, ä, -e').example('Wo ist der Ausgang? Ich möchte hinaus.').get());
		entries.push(new Builder().id('').thema(thema).entry('ausgehen').example('Am Wochenende gehe ich gern mit meinen Freunden aus.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Ausland (Sg.)').example('Ich wohne in Berlin, aber in den Ferien reise ich oft ins Ausland.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ausländer, -').example('In unserem Haus wohnen viele Ausländer.').get());
		entries.push(new Builder().id('').thema(thema).entry('ausmachen').example('Die Musik ist zu laut. Kannst du das Radio ausmachen?').get());
		entries.push(new Builder().id('').thema(thema).entry('auspacken').example('Hast du schon deinen Koffer ausgepackt?').get());
		entries.push(new Builder().id('').thema(thema).entry('aussehen').example(['Sie sieht aus wie ihre Mutter.', 'Wie sieht er aus? Er ist groß und blond.']).get());
		entries.push(new Builder().id('').thema(thema).entry('aus sein').example(['Plötzlich war das Licht aus.', 'Um ein Uhr ist die Schule aus.']).get());
		entries.push(new Builder().id('').thema(thema).entry('außer').example('Außer mir gehen alle Schüler zu der Party.').get());
		entries.push(new Builder().id('').thema(thema).entry('außerdem').example('Möchten Sie außerdem noch etwas?').get());
		entries.push(new Builder().id('').thema(thema).entry('aussprechen').example('Wie spricht man dieses Wort aus?').get());
		entries.push(new Builder().id('').thema(thema).entry('aussteigen').example('Du musst an der Haltestelle am Marktplatz aussteigen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ausweis, -e').example('Kannst du mir bitte deinen Ausweis zeigen?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Auto, -s').example('Er kommt mit dem Auto. Das Auto fährt sehr schnell.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Autobahn, -en').example('Die Autobahn verbindet Köln und Bonn.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Automat, -en').example('Die Fahrkarte kannst du am Automaten kaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Autor, -en/e Autorin, -nen').example('Der Autor von diesem Buch heißt Stefan Zweig.').get());
        return entries;
    }

    createBEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'B'];
		entries.push(new Builder().id('').thema(thema).entry('s Baby, -s').example('Meine Schwester ist noch ein Baby.').get());
		entries.push(new Builder().id('').thema(thema).entry('backen').example('Ich habe dir einen Kuchen gebacken.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bäckerei, -en').example('Gibt es hier eine Bäckerei?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Bad, ä, -er').example('Wo ist das Bad? Ich will meine Haare waschen.').get());
		entries.push(new Builder().id('').thema(thema).entry('baden').example(['Ich will morgens nicht baden. Ich dusche lieber.', 'Komm, baden im See!']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Bahnhof, ö, -e').example('Wir gehen jetzt zum Bahnhof. Der Zug fährt in 10 Minuten.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Bahnsteig, -e').example('Der Zug kommt auf Bahnsteig 7 an.').get());
		entries.push(new Builder().id('').thema(thema).entry('bald').example('Bis bald!/Er kommt bald wieder.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Balkon, -e').example(['Wir können auf dem Balkon frühstücken.', 'Die Wohnung hat keinen Garten, aber einen Balkon.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Ball, ä, -e').example('Wir wollen Fußball spielen. Bringst du deinen Ball mit?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Banane, -n').example('Sie isst gern Bananen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bank, -en,').example('Ich muss noch Geld bei der Bank holen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bank, ä, -e').example('Auf diese Bank können wir uns setzen!').get());
		entries.push(new Builder().id('').thema(thema).entry('bar').example().get('Zahlen Sie bar oder mit Karte?'));
		entries.push(new Builder().id('').thema(thema).entry('r Basketball, ä, -e').example('Meine Hobbys sind Basketball und Musik.').get());
		entries.push(new Builder().id('').thema(thema).entry('basteln').example(['Basteln ist mein Hobby.', 'Er bastelt eine Geburtstagskarte für seine Großmutter.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Bauch, ä, -e').example('Das Essen war nicht gut. Jetzt tut mein Bauch weh.').get());
		entries.push(new Builder().id('').thema(thema).entry('bauen').example().get('Meine Eltern bauen gerade ein Haus.'));
		entries.push(new Builder().id('').thema(thema).entry('r Baum, ä, -e').example('Wir haben viele alte Bäume im Garten.').get());
		entries.push(new Builder().id('').thema(thema).entry('beantworten').example('Bitte beantworte die Frage mit drei Sätzen.').get());
		entries.push(new Builder().id('').thema(thema).entry('bedeuten').example('Was bedeutet dieses Wort?').get());
		entries.push(new Builder().id('').thema(thema).entry('beeilen (sich)').example('Bitte, beeil dich, wir kommen zu spät!').get());
		entries.push(new Builder().id('').thema(thema).entry('bei').example(['Er wohnt bei seinen Freunden.', 'Das liegt bei Hamburg.', 'Sie arbeitet bei der Firma Müller.']).get());
		entries.push(new Builder().id('').thema(thema).entry('beide').example(['Ich habe zwei Brüder, beide arbeiten schon.', 'Wir kommen beide.']).get());
		entries.push(new Builder().id('').thema(thema).entry('bekannt').example('Sie ist ein bekannter Filmstar.').get());
		entries.push(new Builder().id('').thema(thema).entry('bekommen').example(['Was bekommst du zum Geburtstag?', 'Hast du meinen Brief bekommen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('beliebt').example(['Diese Diskothek ist bei Jugendlichen sehr beliebt.', 'Sie ist in der Klasse sehr beliebt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('benutzen').example('Ich habe deinen Computer nicht benutzt.').get());
		entries.push(new Builder().id('').thema(thema).entry('bequem').example(['Sitzen Sie bequem?', 'Ich brauche noch eine bequeme Hose zum Radfahren.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Berg, -e').example('In den Alpen sind die Berge sehr hoch.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Beruf, -e').example('Was sind Sie von Beruf? Ich bin Lehrer.').get());
		entries.push(new Builder().id('').thema(thema).entry('berühmt').example('Er ist ein berühmter Schauspieler.').get());
		entries.push(new Builder().id('').thema(thema).entry('Bescheid sagen').example('Ich sage dir noch genauer Bescheid.').get());
		entries.push(new Builder().id('').thema(thema).entry('bekommen').example('Deine Eltern bekommen von der Schule Bescheid.').get());
		entries.push(new Builder().id('').thema(thema).entry('beschreiben').example('Kannst ihn beschreiben? -Ja, er ist blond und groß.').get());
		entries.push(new Builder().id('').thema(thema).entry('besetzt').example('Ist dieser Platz frei? -Nein, er ist besetzt.').get());
		entries.push(new Builder().id('').thema(thema).entry('besichtigen').example('Am Sonntag haben wir ein Schloss besichtigt.').get());
		entries.push(new Builder().id('').thema(thema).entry('besonders').example(['Das finde ich besonders interessant.', 'Das Essen hier ist besonders gut.']).get());
		entries.push(new Builder().id('').thema(thema).entry('besser').example(['Hoffentlich geht es dir bald besser.', 'Der Film ist besser als das Buch.']).get());
		entries.push(new Builder().id('').thema(thema).entry('best-').example(['Ich bin der beste Schüler in meiner Klasse.', 'Susi ist meine beste Freundin.', 'Am besten treffen wir uns vor dem Kino.']).get());
		entries.push(new Builder().id('').thema(thema).entry('bestellen').example(['Herr Ober, wir möchten bestellen!', 'Dieses Buch haben wir nicht. Soll ich es für dich bestellen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('bestimmt').example(['Ich schreibe dir bestimmt!', 'Das hat er bestimmt nicht so gemeint.']).get());
		entries.push(new Builder().id('').thema(thema).entry('besuchen').example('Im Sommer besuche ich meine Großeltern.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Bett, -en').example(['Wann gehst du ins Bett?', 'Ich bin krank und muss deshalb im Bett bleiben.']).get());
		entries.push(new Builder().id('').thema(thema).entry('bezahlen').example('Wo muss ich die Fahrkarten bezahlen?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bibliothek, -en').example('Das Buch findest du in der Bibliothek.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Bier, -e').example('Darfst du schon Bier trinken? -Nein, ich bin noch nicht sechzehn Jahre alt.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Bild, -er').example(['Ich habe viele Bilder in meinem Zimmer.', 'Hast du ein Bild von deiner Schwester auf dem Smartphone?']).get());
		entries.push(new Builder().id('').thema(thema).entry('billig').example('In diesem Geschäft kann man billig einkaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('bis').example(['Wir haben bis ein Uhr Unterricht.', 'Bis später!', 'Ich warte bis morgen.', 'Fahren Sie bis zur Ampel.']).get());
		entries.push(new Builder().id('').thema(thema).entry('(ein) bisschen').example(['Ich helfe dir ein bisschen.', 'Möchtest du noch Eis? Ja, ein bisschen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('bitte').example(['Können Sie mir bitte helfen?', 'Bitte, komm schnell!', '(Wie) bitte?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Blatt, ä, -er').example(['Die Blätter fallen von den Bäumen.', 'Hast du bitte ein Blatt Papier für mich?']).get());
		entries.push(new Builder().id('').thema(thema).entry('bleiben').example(['Wir bleiben zu Hause.', 'Ich bleibe nur bis morgen. Dann muss ich weiter.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Bleistift, -e').example('Schreibe in der Prüfung nicht mit dem Bleistift, sondern mit dem Kugelschreiber.').get());
		entries.push(new Builder().id('').thema(thema).entry('blöd').example('Ich finde Mathematik blöd.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Blume, -n').example('Die Blumen sind aus dem Garten meiner Tante.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bluse, -n').example('Ich möchte eine rote Bluse und einen grünen Pullover.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bratwurst, ü, -e').example('Ich möchte eine Bratwurst mit Ketchup.').get());
		entries.push(new Builder().id('').thema(thema).entry('brauchen').example('Brauchst du die Zeitung noch oder kann ich sie haben?').get());
		entries.push(new Builder().id('').thema(thema).entry('breit').example('Der Schrank ist zwei Meter hoch und einen Meter breit.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Brief, -e').example('Sie schreibt gern Briefe an ihre Freundin.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Briefmarke, -n').example('Für diesen Brief brauche ich zwei Briefmarken zu 58 Cent.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Brille, -n').example('Ohne Brille kann ich nicht lesen. Mit dieser Brille kann ich nichts sehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('bringen').example(['Ich bringe dir die Bücher morgen.', 'Soll ich dich mit dem Auto nach Hause bringen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Brot, -e').example(['Wir backen unser Brot selbst.', 'Bitte ein Wurstbrot.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Brötchen, -').example('Ich hole schnell Brötchen für das Frühstück.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Brücke, -n').example('Die Brücke über den Rhein ist 600 Meter lang.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Buch, ü, -er').example('Ich brauche ein Buch über die Geschichte Berlins.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Bücherei, -en').example('Du bekommst dieses Buch in der Bücherei.').get());
		entries.push(new Builder().id('').thema(thema).entry('buchstabieren').example('Können Sie Ihren Namen bitte buchstabieren? -Ja, M-Ü-L-L-E-R.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Büro, -s').example('Das Büro ist am Nachmittag geschlossen..').get());
		entries.push(new Builder().id('').thema(thema).entry('r Bus, -se').example('Sie fährt mit dem Bus zur Schule.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Butter (Sg.)').example('Ein Brot mit Butter und Marmelade.').get());
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'C'];
		entries.push(new Builder().id('').thema(thema).entry('s Café, -s').example('Ich möchte etwas trinken. -Gut, wir gehen ins Café.').get());
		entries.push(new Builder().id('').thema(thema).entry('e CD, -s').example('Er hört gern Musik, wir können ihm eine CD schenken.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Chaos (Sg.)').example('Das Chaos in deinem Zimmer ist furchtbar. Bitte räum auf!').get());
		entries.push(new Builder().id('').thema(thema).entry('r Chef, -s / e Chefin, -nen').example('Er/Sie ist hier der Chef/die Chefin!').get());
		entries.push(new Builder().id('').thema(thema).entry('circa (ca.)').example('Es sind noch circa 50 km.').get());
		entries.push(new Builder().id('').thema(thema).entry('s/e Cola (Sg.)').example('Ich nehme einen Hamburger und eine Cola.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Comic, -s').example('Liest du gern Comics?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Computer, -').example('Mein Computer ist schon alt.').get());
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'D'];
		entries.push(new Builder().id('').thema(thema).entry('da').example('Die Zeitung liegt da drüben auf dem Tisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Dach, ä, -er').example(['Die Katze sitzt auf dem Dach.', 'Ich habe mein Zimmer unter dem Dach.']).get());
		entries.push(new Builder().id('').thema(thema).entry('dafür/dagegen sein').example('Sport? Ich bin dagegen. – Ich bin dafür.').get());
		entries.push(new Builder().id('').thema(thema).entry('damals').example('Vor 20 Jahren? Wo habt ihr damals gewohnt?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Dame, -n').example('Sehr geehrte Damen und Herren!').get());
		entries.push(new Builder().id('').thema(thema).entry('r Dank (Sg.)').example(['Vielen Dank für die Einladung.', 'Herzlichen Dank!']).get());
		entries.push(new Builder().id('').thema(thema).entry('danke').example('Soll ich helfen? -Nein, danke.').get());
		entries.push(new Builder().id('').thema(thema).entry('danken').example('Die CD ist toll, ich danke dir.').get());
		entries.push(new Builder().id('').thema(thema).entry('dann').example('Ich spreche erst mit Jan, dann sage ich dir Bescheid.').get());
		entries.push(new Builder().id('').thema(thema).entry('darum').example('Ich habe den Film schon gesehen, darum komme ich nicht mit.').get());
		entries.push(new Builder().id('').thema(thema).entry('da sein').example('Sind alle Schüler da?').get());
		entries.push(new Builder().id('').thema(thema).entry('dass').example('Er glaubt, dass er recht hat.').get());
		entries.push(new Builder().id('').thema(thema).entry('dauern').example('Die Ferien dauern 6 Wochen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Decke, -n').example(['Auf dem Bett liegt eine rote Decke.', 'Das Licht an der Decke ist kaputt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('dein, e').example(['Hier ist dein Platz.', 'Ist das deine Tasche?']).get());
		entries.push(new Builder().id('').thema(thema).entry('denken').example(['Ich denke, dass die Hausaufgaben sehr einfach sind.', 'Ich denke oft an meine Eltern.', 'Was denkst du?']).get());
		entries.push(new Builder().id('').thema(thema).entry('denn').example(['Warum kommst du denn nicht?', 'Ich möchte nicht in Deutschland leben, denn dort ist es so kalt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('der, die, das').example('Möchtest du das da?').get());
		entries.push(new Builder().id('').thema(thema).entry('deshalb').example('Ich muss lernen, deshalb bleibe ich zu Hause.').get());
		entries.push(new Builder().id('').thema(thema).entry('deutlich').example('Schreibt bitte deutlich, damit ich es lesen kann.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Dichter, -').example('Goethe war ein berühmter Dichter.').get());
		entries.push(new Builder().id('').thema(thema).entry('dick').example(['Ich bin leider sehr dick.', 'Die Wand ist zwei Meter dick.']).get());
		entries.push(new Builder().id('').thema(thema).entry('dieser, e, s').example('Bitte, nicht wieder diese CD, die ist ja furchtbar.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Diktat, -e').example('Wir schreiben heute in der Schule ein Diktat.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Ding, -e').example('Bitte, nimm nur wichtige Dinge mit!').get());
		entries.push(new Builder().id('').thema(thema).entry('direkt').example(['Mit der U-Bahn kommen Sie direkt zum Rathaus.', 'Das Dorf liegt direkt an der Autobahn.']).get());
		entries.push(new Builder().id('').thema(thema).entry('doch').example('Magst du das nicht?', '– Doch, es schmeckt gut.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Dorf, ö, -er').example('Kellinghusen ist ein kleines Dorf in Schleswig-Holstein.').get());
		entries.push(new Builder().id('').thema(thema).entry('dort').example('Du gehst in die Stadt? Und was machst du dort?').get());
		entries.push(new Builder().id('').thema(thema).entry('draußen').example('Die Kinder sind draußen im Garten.').get());
		entries.push(new Builder().id('').thema(thema).entry('dringend').example('Ich muss dringend mit dir sprechen. Es ist sehr wichtig.').get());
		entries.push(new Builder().id('').thema(thema).entry('drinnen').example('Draußen ist es kalt, ich bleibe lieber drinnen.').get());
		entries.push(new Builder().id('').thema(thema).entry('drüben').example('Das hier ist die Goethestraße und da drüben wohne ich.').get());
		entries.push(new Builder().id('').thema(thema).entry('du').example('Wie heißt du? (vgl. Grammatik)').get());
		entries.push(new Builder().id('').thema(thema).entry('dumm').example('Das finde ich dumm.').get());
		entries.push(new Builder().id('').thema(thema).entry('dunkel').example(['Um sechs wird es schon dunkel.', 'Sie hat dunkles Haar.']).get());
		entries.push(new Builder().id('').thema(thema).entry('dünn').example(['Mein Sohn ist sehr dünn. Er isst so wenig.', 'Heute ist es warm. Ich ziehe eine dünne Jacke an.']).get());
		entries.push(new Builder().id('').thema(thema).entry('durch').example('Wir fahren durch Deutschland.').get());
		entries.push(new Builder().id('').thema(thema).entry('dürfen').example(['Darf ich heute mitkommen?', 'Hier darf man nicht baden.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Durst (Sg.)').example('Hast du Durst? Ich habe Mineralwasser, Tee, Saft ...').get());
		entries.push(new Builder().id('').thema(thema).entry('duschen').example('Ich bade nicht so gern, ich dusche lieber.').get());
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'E'];
		entries.push(new Builder().id('').thema(thema).entry('echt').example(['Ist das Bild ein echter Picasso?', 'Dieser Film ist echt gut!']).get());
		entries.push(new Builder().id('').thema(thema).entry('egal').example('Das ist mir doch egal! Es interessiert mich nicht.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Ei, -er').example('Möchtest du ein Ei zum Frühstück?').get());
		entries.push(new Builder().id('').thema(thema).entry('eigentlich').example(['Eigentlich hast du recht.', 'Hast du den Brief eigentlich gelesen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Eile (Sg.)').example(['Wir sind in Eile. Wir haben keine Zeit.', 'Das hat keine Eile. Es kann warten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('eilig').example(['Die Sache ist sehr eilig.', 'Ich habe es eilig.']).get());
		entries.push(new Builder().id('').thema(thema).entry('ein, e').example('Haben Sie ein Buch von Michael Ende?').get());
		entries.push(new Builder().id('').thema(thema).entry('einfach').example('Du kannst ihn einfach fragen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Eingang, ä, -e').example(['Wo ist der Eingang zu Kino 3?', 'Gehen Sie bitte hier links.']).get());
		entries.push(new Builder().id('').thema(thema).entry('einige').example('Ich habe noch einige Fragen.').get());
		entries.push(new Builder().id('').thema(thema).entry('einkaufen').example('Ich muss noch einkaufen: Kartoffeln, Eier und Brot.').get());
		entries.push(new Builder().id('').thema(thema).entry('einladen').example('Ich lade dich zu meinem Geburtstag ein.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Einladung, -en').example('Das ist eine Einladung zur Geburtstagsparty.').get());
		entries.push(new Builder().id('').thema(thema).entry('einmal').example(['Kannst du mir das bitte noch einmal erklären?', 'Ich war nur einmal in Frankreich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('einpacken').example(['Hast du alle Kleider eingepackt?', 'Ich muss das Geschenk noch einpacken.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Eins, -er').example(['Wie war der Englischtest?', '-Toll, ich habe eine Eins!']).get());
		entries.push(new Builder().id('').thema(thema).entry('einsteigen').example('Bitte einsteigen! Der Zug fährt ab.').get());
		entries.push(new Builder().id('').thema(thema).entry('einverstanden sein').example(['Bist du damit einverstanden?', 'Ich bin mit dem Ergebnis nicht einverstanden.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Einwohner, -').example('Die Stadt hat 2 Millionen Einwohner.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Eis (Sg.)').example('Ich möchte ein großes Eis.').get());
		entries.push(new Builder().id('').thema(thema).entry('e E-Mail, -s').example('Ich habe deine E-Mail bekommen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Ende (Sg.)').example('Das Ende des Films war sehr traurig.').get());
		entries.push(new Builder().id('').thema(thema).entry('endlich').example('Wann antwortest du endlich?').get());
		entries.push(new Builder().id('').thema(thema).entry('eng').example(['Die Häuser sind klein, die Straßen eng.', 'Die Hose ist mir zu eng. Ich brauche sie eine Nummer größer.']).get());
		entries.push(new Builder().id('').thema(thema).entry('entschuldigen').example('Bitte entschuldigen Sie!').get());
		entries.push(new Builder().id('').thema(thema).entry('e Entschuldigung, -en ').example('Entschuldigung, ich habe Sie nicht gesehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('er').example('Was macht er jetzt?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Erfahrung, -en').example(['Der Sprachkurs war eine gute Erfahrung.', 'Ich habe mit diesem Computerprogramm keine Erfahrung.']).get());
		entries.push(new Builder().id('').thema(thema).entry('erinnern (sich)').example(['Wie ist die Nummer?', '– Ich kann mich nicht erinnern.', 'Ich kann mich nicht mehr an die Aufgabe erinnern.']).get());
		entries.push(new Builder().id('').thema(thema).entry('erkältet sein').example('Im Winter ist sie oft erkältet.').get());
		entries.push(new Builder().id('').thema(thema).entry('erklären').example(['Können Sie das bitte erklären?', '– Ich habe es nicht verstanden.']).get());
		entries.push(new Builder().id('').thema(thema).entry('erlauben').example('Ich möchte gern in die Disco, aber meine Eltern erlauben es nicht. Sie haben es verboten.').get());
		entries.push(new Builder().id('').thema(thema).entry('erreichen').example(['Du hast leider das Ziel nicht erreicht.', 'Ich möchte den Zug um 17.00 Uhr noch erreichen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('erst').example(['Du musst (zu)erst die Instruktionen lesen.', 'Das Wörterbuch kann ich dir erst morgen geben, ich brauche es heute noch.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r, e Erwachsene, -n').example(['Wir brauchen drei Fahrkarten: zwei Erwachsene, ein Kind.', 'Ariane kann schneller rechnen als die meisten Erwachsenen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('erzählen').example(['Kannst du uns die Geschichte erzählen?', 'Er erzählt gern von seinen Reisen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('es').example(['Heute ist es sehr warm', 'Hier gibt es auch ein altes Schloss.', 'Wie geht es dir/Ihnen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('essen').example(['Was wollt ihr essen?', '– Ich esse gern Bananen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Essen, -').example('Das Essen ist hier sehr gut.').get());
		entries.push(new Builder().id('').thema(thema).entry('etwas').example(['Ich bringe dir etwas.', 'Da ist etwas zum Schreiben.']).get());
		entries.push(new Builder().id('').thema(thema).entry('euer').example('Ist das euer Hund?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Experiment, -e').example('Wir machen heute in Physik ein interessantes Experiment.').get());
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'F'];
		entries.push(new Builder().id('').thema(thema).entry('s Fach, ä, -er').example(['Welche Fächer findest du interessant?', '– Chemie und Physik.']).get());
		entries.push(new Builder().id('').thema(thema).entry('fahren').example('Wohin fahrt ihr? In den Ferien fahren wir nach Spanien.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Fahrkarte, -n').example('Für den Bus braucht ihr noch eine Fahrkarte.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fahrplan, ä, -e').example('Wo finde ich den Fahrplan?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Fahrrad, ä, -er').example('Wir kommen mit dem Fahrrad.').get());
		entries.push(new Builder().id('').thema(thema).entry('fallen').example(['Die Blätter fallen von den Bäumen.', 'Das Glas ist auf den Boden gefallen. Jetzt ist es kaputt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Familie, -en').example('Kannst du etwas von deiner Familie erzählen?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Familienname, -n').example(['Wie ist dein Familienname?', '– Schmidt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('fantastisch').example(['Er kann fantastisch kochen.', 'Das sind fantastische Nachrichten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Farbe, -n').example('Welche Farbe magst du lieber? Rot oder grün?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Farbstift, -e').example('Gibst du mir deine Farbstifte?').get());
		entries.push(new Builder().id('').thema(thema).entry('fast').example('Ich habe fast alles verstanden.').get());
		entries.push(new Builder().id('').thema(thema).entry('faul').example('Gestern waren wir faul. Wir waren den ganzen Tag zu Hause.').get());
		entries.push(new Builder().id('').thema(thema).entry('fehlen').example(['Hier fehlt ein Buchstabe.', 'Du fehlst mir.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Fehler, -').example('Ich hatte vier Fehler im Englischtest.').get());
		entries.push(new Builder().id('').thema(thema).entry('feiern').example('Am Sonntag habe ich meinen Geburtstag gefeiert.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Fenster, -').example('Mach bitte das Fenster zu. Es ist kalt.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Ferien (Pl.)').example(['Was macht ihr in den Ferien?', 'Im August beginnen die Ferien.']).get());
		entries.push(new Builder().id('').thema(thema).entry('fernsehen').example('Ich war zu Hause und habe ferngesehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Fernsehen (Sg.)').example('Was gibt es heute Abend im Fernsehen?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fernseher, -').example('Ich habe einen Fernseher in meinem Zimmer.').get());
		entries.push(new Builder().id('').thema(thema).entry('fertig sein').example('Ich bin mit meinen Hausaufgaben schon fertig.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Fest, -e').example(['An meinem 18. Geburtstag feiern wir ein großes Fest.', 'Frohes Fest!']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Feuer, -').example(['Haben Sie Feuer?', 'Wir haben ein Feuer gemacht und Würstchen gegrillt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Fieber (Sg.)').example(['Bist du krank?', '– Ja, ich glaube, ich habe Fieber.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Film, -e').example('Kommst du mit ins Kino? Es läuft ein neuer Film.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Filmstar, -s').example('Sie ist ein großer Filmstar und eine tolle Sängerin.').get());
		entries.push(new Builder().id('').thema(thema).entry('finden').example(['Wo ist die Zeitung? Ich kann sie nicht finden.', 'Ich finde deinen Pullover schön.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Firma, -en').example('Er arbeitet in einer großen Firma in Berlin.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fisch, -e').example('Fleisch mag ich lieber als Fisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('fit sein').example('Sie macht viel Sport. Sie ist sehr fit.').get());
		entries.push(new Builder().id('').thema(thema).entry('flach').example(['Das Wasser ist hier ganz flach.', 'Das Haus hat ein flaches Dach.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Flasche, -n').example('Ich möchte eine Flasche Mineralwasser.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Fleisch (Sg.)').example('Am Freitag essen wir kein Fleisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('fleißig').example('Hast du fleißig gelernt?').get());
		entries.push(new Builder().id('').thema(thema).entry('fliegen').example(['Wir fliegen in den Ferien in die USA.', 'Wir fliegen nach Athen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Flohmarkt, ä, -e').example('Wollen wir auf den Flohmarkt gehen? Da kann man alte CDs kaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Flughafen, ä, -').example('Wir müssen um sieben am Flughafen sein.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Flugzeug, -e').example('Das Flugzeug kommt um 13.30 Uhr an.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fluss, ü, -e').example('Der Rhein ist ein großer Fluss.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Foto, -s').example('Auf dem Foto bin ich mit meinem Hund.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fotoapparat, -e').example('Sie hat einen teuren Fotoapparat.').get());
		entries.push(new Builder().id('').thema(thema).entry('fotografieren').example(['Fotografierst du viel?', '– Ja, das ist mein Hobby.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Frage, -n').example(['Wiederholen Sie bitte die Frage.', 'Kann ich eine Frage stellen?', 'Ich habe eine Frage.']).get());
		entries.push(new Builder().id('').thema(thema).entry('fragen').example('Ich möchte etwas fragen. Was bedeutet „ausgehen“?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Frau, -en').example('Siehst du die Frau dort? Das ist Frau Bergner.').get());
		entries.push(new Builder().id('').thema(thema).entry('frech').example(['Unsere Katze ist wirklich sehr frech.', 'Meine kleine Schwester ist frech. Sie ärgert mich immer.']).get());
		entries.push(new Builder().id('').thema(thema).entry('frei').example(['Ist der Platz frei?', 'Heute Nachmittag habe ich frei. Ich muss nicht arbeiten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Freizeit (Sg.)').example('Was machst du in deiner Freizeit? Ich spiele Fußball.').get());
		entries.push(new Builder().id('').thema(thema).entry('fremd').example('Ich weiß es nicht. Ich bin in dieser Stadt auch fremd.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Fremdsprache, -n').example('Meine Mutter kann zwei Fremdsprachen, Französisch und Englisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('freuen (sich)').example(['Wir freuen uns sehr über deinen Besuch.', 'Ich freue mich auf den Urlaub.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Freund, -e').example('Ich habe viele Freunde in meiner Klasse.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Freundin, -nen').example('Ich habe viele Freundinnen in meiner Klasse.').get());
		entries.push(new Builder().id('').thema(thema).entry('freundlich').example(['Der Schuldirektor war sehr freundlich.', 'Er war sehr freundlich zu mir.']).get());
		entries.push(new Builder().id('').thema(thema).entry('frisch').example('Sind die Eier frisch?').get());
		entries.push(new Builder().id('').thema(thema).entry('froh').example(['Frohe Weihnachten!', 'Ich bin froh, alles ist in Ordnung.']).get());
		entries.push(new Builder().id('').thema(thema).entry('früh').example(['Wir stehen immer früh auf.', 'Sie muss früh am Morgen zur Arbeit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('früher').example('Meine Mutter war früher Lehrerin. Heute arbeitet sie nicht mehr.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Frühstück (Sg.)').example('Zum Frühstück trinke ich Milch und esse ein Brötchen.').get());
		entries.push(new Builder().id('').thema(thema).entry('frühstücken').example(['Wann möchtest du frühstücken?', '– Um neun Uhr.']).get());
		entries.push(new Builder().id('').thema(thema).entry('fühlen (sich)').example(['Wie fühlst du dich?', '– Ich fühle mich heute nicht so gut.']).get());
		entries.push(new Builder().id('').thema(thema).entry('für').example(['Ich kaufe ein Comic-Heft für meine Schwester.', 'Für wen ist der Salat?']).get());
		entries.push(new Builder().id('').thema(thema).entry('furchtbar').example('Er hat furchtbare Schmerzen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Fuß, ü, -e').example(['Mein Fuß tut weh.', 'Wir gehen zu Fuß.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Fußball, ä, -e').example('Am Nachmittag spielen wir Fußball im Garten.').get());
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'G'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'H'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'I'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'J'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'K'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'L'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'M'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'N'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'O'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'P'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'R'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'S'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'T'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'U'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'V'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'W'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Z'];
/*
		entries.push(new Builder().id('').thema(thema).entry('').example('').get());
        */
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA2Service;