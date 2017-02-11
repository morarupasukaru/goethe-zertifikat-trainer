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
        this.addEntries(this.createQEntries(Builder));
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
		entries.push(new Builder().id('').thema(thema).entry('bald').example(['Bis bald!', 'Er kommt bald wieder.']).get());
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
		entries.push(new Builder().id('').thema(thema).entry('geboren').example('Wann bist du geboren? Am 15. Februar 1998.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Geburtstag, -e').example('Herzlichen Glückwunsch zum Geburtstag.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Gedicht, -e').example('Sie liest gern Gedichte.', 'Goethe hat viele Gedichte geschrieben.').get());
		entries.push(new Builder().id('').thema(thema).entry('gefährlich').example(['Das ist zu gefährlich.', 'Krebs ist eine gefährliche Krankheit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gefallen').example(['Gefällt dir meine neue Hose?', '– Ja, sie sieht toll aus.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gegen').example(['Martin spielt gegen Sabine.', 'Ich brauche eine Tablette gegen Kopfschmerzen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Gegenteil, -e').example(['Wie heißt das Gegenteil von „neu”?', '– Alt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gehen').example(['Wohin wollt ihr gehen?', 'Wie geht es dir?', 'Der Fernseher geht nicht mehr. Er ist kaputt.', 'Wie geht diese Aufgabe?']).get());
		entries.push(new Builder().id('').thema(thema).entry('gehören').example('Das Auto gehört mir nicht. Es gehört meinem Vater.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Geld (Sg.)').example('Ich brauche noch Geld für den Einkauf.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Gemüse (Sg.)').example('Ich esse sehr gern Gemüse. Am liebsten Karotten.').get());
		entries.push(new Builder().id('').thema(thema).entry('gemütlich').example('Dein Zimmer ist sehr gemütlich.').get());
		entries.push(new Builder().id('').thema(thema).entry('genau').example(['Das musst du mir genau erklären.', 'Hast du die genaue Zeit? Ja, wir treffen uns um 14.20 Uhr.']).get());
		entries.push(new Builder().id('').thema(thema).entry('genug').example(['Das ist genug.', 'Ich verdiene nicht genug. Ich brauche mehr Geld.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Gepäck (Sg.)').example('Das ist nicht mein Gepäck. Wo sind meine Koffer?').get());
		entries.push(new Builder().id('').thema(thema).entry('gerade').example(['Was machst du gerade?', '– Ich mache gerade meine Hausaufgaben.', 'Ich bin gerade erst gekommen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('geradeaus').example('Gehen Sie immer geradeaus, dann kommen Sie zum Museum.').get());
		entries.push(new Builder().id('').thema(thema).entry('gern, lieber, am liebsten').example(['Wir sehen gern Krimis.', 'Ich gehe lieber ins Theater.', 'Ich möchte am liebsten tanzen gehen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Geschäft, -e').example('Ich muss noch einkaufen. Wann schließen die Geschäfte?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Geschenk, -e').example('Ich muss noch ein Geschenk für meine Freundin kaufen. Sie hat Geburtstag.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Geschichte, -n').example(['Mein Onkel erzählt immer Geschichten.', 'In Geschichte hat er eine Eins.']).get());
		entries.push(new Builder().id('').thema(thema).entry('geschlossen sein').example('Am Montag ist die Bücherei geschlossen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Gesicht, -er').example('Sein Gesicht war müde und traurig.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Gespräch, -e').example('Ich verstehe das Gespräch nicht.').get());
		entries.push(new Builder().id('').thema(thema).entry('gestern').example('Gestern war Sonntag. Heute ist Montag.').get());
		entries.push(new Builder().id('').thema(thema).entry('gesund').example('Ich war lang krank. Jetzt bin ich wieder gesund.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Getränk, -e').example(['Hier, die Getränke-Karte.', '– Ein Glas Wasser, bitte.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gewinnen').example('Man kann bei dem Quiz eine Reise gewinnen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Gitarre, -n').example('Er spielt Gitarre in einer Band.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Glas, ä, -er').example('Kann ich ein Glas Saft haben?').get());
		entries.push(new Builder().id('').thema(thema).entry('glauben').example(['Ich glaube, Karin spricht sehr gut Englisch.', 'Er glaubt an Gott.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gleich').example(['Er kommt gleich.', 'Das ist mir gleich.', 'Die beiden Mädchen sind gleich groß.']).get());
		entries.push(new Builder().id('').thema(thema).entry('gleichfalls').example(['Guten Appetit!', '– Danke gleichfalls!']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Gleis, -e').example('Der Zug kommt auf Gleis vier an.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Glück (Sg.)').example(['Viel Glück!', '– Hoffentlich hast du Glück.']).get());
		entries.push(new Builder().id('').thema(thema).entry('glücklich').example(['Heute bin ich sehr glücklich.', 'Meine Eltern sind glücklich verheiratet.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Glückwunsch, ü, -e').example('Herzlichen Glückwunsch zum Geburtstag!').get());
		entries.push(new Builder().id('').thema(thema).entry('gratulieren').example('Ich gratuliere dir herzlich zum Geburtstag.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Grenze, -n').example('Duderstadt lag früher an der Grenze zwischen West- und Ostdeutschland. Jetzt ist es mitten in Deutschland.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Grippe (Sg.)').example('Sie ist krank; sie hat Grippe.').get());
		entries.push(new Builder().id('').thema(thema).entry('groß').example(['Unser Haus ist groß.', 'Er ist fast zwei Meter groß.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Größe, -n').example(['Ich möchte den Pullover in Größe 38.', 'Größe: 1,70 Meter.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Gruppe, -n').example(['Am Nachmittag besuche ich die Foto-Gruppe.', 'In jeder Gruppe sind fünf Schüler.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Gruß, ü, -e').example('Viele Grüße von Angelika.').get());
		entries.push(new Builder().id('').thema(thema).entry('gut, besser, am besten').example(['Guten Tag!', 'Das Essen ist hier immer sehr gut.', 'Ich finde deine Idee nicht so gut.', 'Meine Mutter kann das besser.', 'Frau Müller kann das am besten erklären.']).get());
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'H'];
		entries.push(new Builder().id('').thema(thema).entry('s Haar, -e').example('Sie hat lange, braune Haare.').get());
		entries.push(new Builder().id('').thema(thema).entry('haben').example(['Wir haben einen Hund und zwei Katzen.', 'Ich habe leider keine Zeit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Hähnchen').example('Ich nehme Hähnchen mit Salat.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Halle, -n').example('Wir spielen lieber in der Halle Fußball.').get());
		entries.push(new Builder().id('').thema(thema).entry('hallo').example('Hallo! Bist du Michael Schmidt?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Hals, ä, -e').example('Ich bin krank. Mein Hals tut so weh!').get());
		entries.push(new Builder().id('').thema(thema).entry('halten').example(['Alle Busse halten hier.', 'Können wir hier halten?']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Haltestelle, -n').example('Da ist die Haltestelle für den Bus M 27.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Hamburger, -').example('Ich nehme einen Hamburger und eine Cola.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Hand, ä, -e').example(['Er hatte ein paar Blumen in der Hand.', 'Wasch dir die Hände.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Handy, -s').example('Dein Handy klingelt!').get());
		entries.push(new Builder().id('').thema(thema).entry('hängen').example('An der Wand hängt eine Deutschlandkarte.').get());
		entries.push(new Builder().id('').thema(thema).entry('hässlich').example('Die Stadt gefällt mir nicht. Ich finde sie ziemlich hässlich.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Hauptstadt, ä, -e').example('Berlin ist die deutsche Hauptstadt.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Haus, ä, -er').example(['Das ist unser Haus.', 'Ich bin zu Hause.', 'Ich gehe nach Hause.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Hausaufgabe, -n').example('Wir machen unsere Hausaufgaben nach dem Essen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Heft, -e').example('Schreibt die Übung in euer Heft.').get());
		entries.push(new Builder().id('').thema(thema).entry('heiraten').example('Nächste Woche heiratet meine Schwester.').get());
		entries.push(new Builder().id('').thema(thema).entry('heiß').example('Im Sommer kann es sehr heiß sein.').get());
		entries.push(new Builder().id('').thema(thema).entry('heißen').example(['Wie heißt du?', '– Ich heiße Markus Müller.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Heizung, -en').example('Die Heizung ist kaputt. Es ist kalt hier.').get());
		entries.push(new Builder().id('').thema(thema).entry('helfen').example(['Hilf mir bitte!', 'Kann ich dir helfen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Hemd, -en').example('Ich trage nicht gern Hemden, ich mag lieber T-Shirts.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Herr, -en').example(['Sind Sie Herr Braunmüller?', 'Siehst du den Herrn dort?']).get());
		entries.push(new Builder().id('').thema(thema).entry('herrlich').example(['Im Park kann man herrlich spazieren gehen.', 'Das Wetter ist heute herrlich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('herzlich').example(['Herzliche Grüße von Michael.', '– Herzlichen Glückwunsch!']).get());
		entries.push(new Builder().id('').thema(thema).entry('heute').example('Heute ist Montag. Gestern war Sonntag.').get());
		entries.push(new Builder().id('').thema(thema).entry('hier').example(['Wir wohnen hier.', 'Hier gibt es gutes Brot.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Hilfe (Sg.)').example('Ich brauche deine Hilfe bei dieser Aufgabe.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Himmel (Sg.)').example('Die Sonne steht hoch am Himmel.').get());
		entries.push(new Builder().id('').thema(thema).entry('hinten').example('Ich sitze vorne in der Klasse. Hinten ist es zu laut.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Hobby, -s').example('Meine Hobbys sind Lesen und Tanzen.').get());
		entries.push(new Builder().id('').thema(thema).entry('hoch').example('Der Berg ist fast 3000 Meter hoch.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Hochzeit, -en').example('Die Hochzeit meiner Schwester war sehr langweilig.').get());
		entries.push(new Builder().id('').thema(thema).entry('hoffen').example(['Ich hoffe, du antwortest bald.', 'Ich hoffe, es geht dir gut.']).get());
		entries.push(new Builder().id('').thema(thema).entry('hoffentlich').example(['Hoffentlich kommt er morgen mit.', 'Hoffentlich geht alles gut!']).get());
		entries.push(new Builder().id('').thema(thema).entry('höflich').example('Er hat mir einen Platz angeboten. Er war sehr höflich.').get());
		entries.push(new Builder().id('').thema(thema).entry('holen').example(['Ich hole dir einen Tee.', 'Holst du die Tassen aus der Küche?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Holz, ö, -er').example('Der Tisch ist aus dickem Holz.').get());
		entries.push(new Builder().id('').thema(thema).entry('hören').example('Hörst du gern Musik?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Hose, -n').example('Sie trägt immer Hosen und Pullover.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Hotel, -s').example('Wir haben im Urlaub im Hotel gewohnt.').get());
		entries.push(new Builder().id('').thema(thema).entry('hübsch').example('Toms neue Freundin ist sehr hübsch.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Hund, -e').example('Magst du Hunde lieber als Katzen?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Hunger (Sg.)').example('Wir haben Hunger. Wann ist das Essen fertig?').get());
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'I'];
		entries.push(new Builder().id('').thema(thema).entry('ich').example('Ich wohne in Berlin.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Idee, -n').example('Was machen wir heute? Hast du eine Idee?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Idiot, -en').example('Du bist ein Idiot!').get());
		entries.push(new Builder().id('').thema(thema).entry('ihr, ihm, Ihr, -e').example(['Wo seid ihr?', 'Ich möchte ihr helfen.', 'Kannst du ihm das erklären? Ist das Ihr Hund?']).get());
		entries.push(new Builder().id('').thema(thema).entry('immer').example(['Mathe ist immer so langweilig.', 'Er kommt immer zu spät.']).get());
		entries.push(new Builder().id('').thema(thema).entry('in').example(['Er lebt in Italien', 'Er lebt in der Stadt.', 'Wir gehen ins Schwimmbad.', 'Der Bus kommt in fünf Minuten.', 'In den Ferien', 'Im Sommer', 'In zwei Jahren mache ich Abitur.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Information, -en').example(['Sie haben eine Frage? Dann gehen Sie zur Information.', 'Hier gibt es Informationen zu unserem Programm.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Insel, -n').example('Rügen ist eine Insel.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Instrument, -e').example(['Spielst du ein Instrument?', '– Ja, Klavier.']).get());
		entries.push(new Builder().id('').thema(thema).entry('intelligent').example(['Das ist eine sehr intelligente Frage.', 'Er ist ein intelligenter Schüler.']).get());
		entries.push(new Builder().id('').thema(thema).entry('interessant').example('Das Buch über die Römer ist interessant.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Interesse (Sg.)').example('Die Leute haben viel Interesse an der Ausstellung gezeigt.').get());
		entries.push(new Builder().id('').thema(thema).entry('interessieren').example(['Interessiert dich das Problem?', 'Ich interessiere mich für Biologie.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Internet (Sg.)').example('Du kannst die Information im Internet finden.').get());
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'J'];
		entries.push(new Builder().id('').thema(thema).entry('ja').example(['Kommst du mit?', '– Ja, gern.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Jacke, -n').example('Du brauchst eine Jacke, es ist kalt.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Jeans (Pl.)').example('Er trägt heute Jeans und ein Hemd.').get());
		entries.push(new Builder().id('').thema(thema).entry('jeder, -e, -s').example('Wir fahren jeden Sommer nach München.').get());
		entries.push(new Builder().id('').thema(thema).entry('jemand').example('Kann das jemand lesen?').get());
		entries.push(new Builder().id('').thema(thema).entry('jetzt').example('Das ist jetzt nicht mehr wichtig.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Job, -s').example('Ich suche einen Ferienjob. Ich will Geld verdienen.').get());
		entries.push(new Builder().id('').thema(thema).entry('joggen').example('Mein Bruder ist er sportlich. Er joggt jeden Tag.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Joghurt, -s').example('Am Morgen esse ich Müsli und Joghurt.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Jugendherberge, -n').example('Wir schlafen in der Jugendherberge. Sie ist billiger als das Hotel.').get());
		entries.push(new Builder().id('').thema(thema).entry('r/e Jugendliche, -n').example('Viele Jugendliche finden diese Musik toll.').get());
		entries.push(new Builder().id('').thema(thema).entry('jung').example(['Meine Eltern sind noch jung.', 'Du bist noch zu jung, vielleicht in zwei Jahren.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Junge, -n').example('Der Junge ist neu in unserer Klasse.').get());
		entries.push(new Builder().id('').thema(thema).entry('junge Leute (Pl.)').example('Viele junge Leute besuchen Sprachkurse im Ausland.').get());
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'K'];
		entries.push(new Builder().id('').thema(thema).entry('r Kaffee, -s').example('Möchtest du eine Tasse Kaffee?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kakao (Sg.)').example('Ich trinke lieber Kakao. (Siehe auch Schokolade.)').get());
		entries.push(new Builder().id('').thema(thema).entry('kalt').example(['Im Winter ist es hier sehr kalt.', 'Mir ist kalt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Kamera, -s').example('Meine Kamera ist neu. Deshalb mache ich viele Fotos.').get());
		entries.push(new Builder().id('').thema(thema).entry('kaputt').example('Der Automat ist kaputt.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Karte, -n').example(['Schreibst du mir eine Karte aus den Ferien?', 'Wollen wir Karten spielen?', 'Holst du die Karten für das Theater?', 'Ich brauche noch eine Fahrkarte für den Bus.', 'Kann ich hier mit der Karte zahlen?', 'Hast du eine Straßenkarte von Bayern?']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Kartoffel, -n').example('Aus Kartoffeln macht man Pommes frites.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Käse (Sg.)').example('Abends esse ich gern ein Brot mit Käse.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Kasse, -n').example('Die Kasse ist neben dem Eingang. Dort kannst du bezahlen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Katze, -n').example(['Hast du ein Haustier?', '– Ja, eine Katze.']).get());
		entries.push(new Builder().id('').thema(thema).entry('kaufen').example('Ich möchte einen Pullover kaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('kein, e').example(['Ich habe keine Lust.', 'Ich habe keine Zeit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Keller, -').example('Räum die alten Sachen in den Keller.').get());
		entries.push(new Builder().id('').thema(thema).entry('kennen').example(['Kennst du Frau Braunmüller?', '– Nein, leider nicht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('kennenlernen').example(['Möchtest du meine Freunde kennenlernen?', 'Im Urlaub lernt man viele neue Leute kennen']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Kind, -er').example(['Die Kinder sind in der Schule.', 'Sie haben vier Kinder, zwei Jungs und zwei Mädchen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Kindergarten, ä, -').example('Meine kleine Schwester geht in den Kindergarten.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Kino, -s').example('Kommt ihr mit ins Kino? Es läuft ein interessanter Film.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kiosk , -e').example('Das kannst du am Kiosk kaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Kirche, -n').example('Die Kirche ist am Marienplatz.').get());
		entries.push(new Builder().id('').thema(thema).entry('klappen').example('Ich wollte Herrn Meyer treffen. Es hat aber nicht geklappt.').get());
		entries.push(new Builder().id('').thema(thema).entry('klar').example(['Ist alles klar?', 'Machst du das?', '– Na, klar!', 'Das Wasser in diesem Fluss ist klar.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Klasse, -n').example('In unserer Klasse sind 25 Schüler.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Klavier, -e').example(['Spielst du ein Instrument?', '– Ja, Klavier.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Kleid, -er').example('Das Kleid ziehe ich zur Hochzeit an.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Kleidung (Sg.)').example('Ich interessiere mich für Kleidung und Mode.').get());
		entries.push(new Builder().id('').thema(thema).entry('klein').example(['Mein Bruder ist noch klein.', 'Mein Zimmer ist klein.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Klima').example('Das Klima in Afrika ist heiß und trocken.').get());
		entries.push(new Builder().id('').thema(thema).entry('klingeln').example(['Du kannst bei Hausnummer 5 klingeln.', 'Das Telefon klingelt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Klub, -s').example('Wollen wir in einen Klub zum Tanzen gehen?').get());
		entries.push(new Builder().id('').thema(thema).entry('klug').example(['Eine kluge Antwort.', 'Sie ist ein kluges Mädchen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('kochen').example(['Wer kocht bei euch?', 'Meistens kocht mein Vater das Abendessen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Koffer, -').example('Ich muss meinen Koffer noch packen. Ich fliege morgen nach Istanbul.').get());
		entries.push(new Builder().id('').thema(thema).entry('komisch').example(['Er hat ganz komisch reagiert.', 'Der Film ist sehr komisch. Ich habe viel gelacht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('kommen').example(['Ich komme aus München.', 'Kommt Markus auch zur Feier?']).get());
		entries.push(new Builder().id('').thema(thema).entry('kompliziert').example('Die Übung ist ziemlich kompliziert. Kann mir jemand helfen?').get());
		entries.push(new Builder().id('').thema(thema).entry('können').example(['Er kann gut kochen.', 'Kannst du Spanisch?', 'Wann kannst du das machen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Konzert, -e').example('Wir gehen heute Abend ins Konzert.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kopf, ö, -e').example('Mein Kopf tut weh. Ich brauche eine Tablette.').get());
		entries.push(new Builder().id('').thema(thema).entry('korrigieren').example('Die Lehrerin hat den Aufsatz korrigiert.').get());
		entries.push(new Builder().id('').thema(thema).entry('kosten').example('Das Buch kostet 20 Euro.').get());
		entries.push(new Builder().id('').thema(thema).entry('kostenlos').example('Das Programm kannst du kostenlos bekommen. Du musst es nicht bezahlen.').get());
		entries.push(new Builder().id('').thema(thema).entry('krank').example('Ich bin krank. Ich muss zum Arzt.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Krankenhaus, ä, -er').example('Meine Freundin ist im Krankenhaus. Sie ist sehr krank.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Kreuzung, -en').example('An der Kreuzung musst du rechts fahren.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Krimi, -s').example('Ich lese gerne Krimis.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kriminalfilm, -e').example('Im Fernsehen gibt es oft Kriminalfilme.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kuchen, -').example('Zum Geburtstag backe ich dir einen Kuchen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Küche, -n').example('Die Tassen sind in der Küche.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kugelschreiber, -').example('Schreibe in der Prüfung mit dem Kugelschreiber?').get());
		entries.push(new Builder().id('').thema(thema).entry('kühl').example('Es ist heute ziemlich kühl. Nimm eine Jacke mit.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kühlschrank, ä, -e').example('Die Milch ist im Kühlschrank.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Kurs, -e').example('In den Ferien mache ich einen Deutschkurs.').get());
		entries.push(new Builder().id('').thema(thema).entry('kurz').example(['Sie hat kurze Haare.', 'Die Hose ist zu kurz.']).get());
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'L'];
		entries.push(new Builder().id('').thema(thema).entry('lachen').example(['Onkel Fritz lacht viel. Er ist lustig.', 'Sie hat über mich gelacht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Lampe, -n').example('Es ist so dunkel. Ich brauche eine Lampe.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Land, ä, -er').example('Deutschland ist ein schönes Land.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Landkarte, -n').example('Das ist eine Landkarte von Europa.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Landschaft, -en').example('Mir gefällt die Landschaft am Rhein.').get());
		entries.push(new Builder().id('').thema(thema).entry('lang').example(['Der Weg ist zu lang. Du kannst nicht zu Fuß gehen.', 'Das Auto ist drei Meter lang.']).get());
		entries.push(new Builder().id('').thema(thema).entry('lange').example(['Wartest du schon lange?', 'Ich bin schon lange hier.']).get());
		entries.push(new Builder().id('').thema(thema).entry('langsam').example('Sprich bitte langsamer, ich verstehe dich nicht.').get());
		entries.push(new Builder().id('').thema(thema).entry('langweilig').example(['Physik ist langweilig. Es interessiert mich nicht.', 'Der Film war langweilig.']).get());
		entries.push(new Builder().id('').thema(thema).entry('lassen').example(['Ihr könnt die Bücher zu Hause lassen.', 'Lass mich in Ruhe!']).get());
		entries.push(new Builder().id('').thema(thema).entry('laufen').example('Wir laufen nach Hause. Ich will nicht mit dem Auto fahren.').get());
		entries.push(new Builder().id('').thema(thema).entry('laut').example('Die Musik ist zu laut. Ich verstehe kein Wort.').get());
		entries.push(new Builder().id('').thema(thema).entry('leben').example(['Er lebt in Berlin.', 'Sie lebt bei ihren Eltern.', 'Meine Großmutter lebt nicht mehr.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Lebensmittel (Pl.)').example('Lebensmittel bekommst du im Supermarkt.').get());
		entries.push(new Builder().id('').thema(thema).entry('leer').example('Mein Glas ist leer. Kann ich noch ein Mineralwasser haben?').get());
		entries.push(new Builder().id('').thema(thema).entry('legen').example('Leg bitte das Buch auf den Tisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('leicht').example(['Die Hausaufgaben sind leicht.', 'Mein Rucksack ist leicht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('leid').example('Es tut mir leid.').get());
		entries.push(new Builder().id('').thema(thema).entry('leider').example('Ich kann leider nicht kommen. Ich muss noch arbeiten.').get());
		entries.push(new Builder().id('').thema(thema).entry('leihen').example('Kannst du mir dein Buch leihen? Ich bringe es morgen zurück.').get());
		entries.push(new Builder().id('').thema(thema).entry('leise').example('Mach die Musik bitte leiser!').get());
		entries.push(new Builder().id('').thema(thema).entry('e Leistung, -en').example('Deine Leistungen in Mathematik sind nicht gut genug.').get());
		entries.push(new Builder().id('').thema(thema).entry('lernen').example(['Karin lernt Tennis spielen.', 'Ich muss noch für die Schule lernen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('lesen').example('In meiner Freizeit lese ich gern Krimis.').get());
		entries.push(new Builder().id('').thema(thema).entry('letzte').example('Im letzten Jahr hat sie Abitur gemacht. Jetzt ist sie Studentin.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Leute (Pl.)').example('In unserem Haus wohnen viele Leute.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Licht, -er').example('Mach bitte das Licht an. Ich sehe nichts.').get());
		entries.push(new Builder().id('').thema(thema).entry('lieb').example(['Lieber Franz!', 'Meine Katze ist sehr lieb.']).get());
		entries.push(new Builder().id('').thema(thema).entry('lieben').example(['Sie liebt ihren Beruf.', 'Er liebt sie.']).get());
		entries.push(new Builder().id('').thema(thema).entry('lieber').example('Tee oder Kaffee? Ich möchte lieber Tee.').get());
		entries.push(new Builder().id('').thema(thema).entry('lieb haben').example(['Hast du mich lieb?', 'Ich habe meine Eltern lieb.']).get());
		entries.push(new Builder().id('').thema(thema).entry('Lieblings-').example('Meine Lieblingsfarbe ist Blau.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Lied, -er').example('Wir singen gern Lieder.').get());
		entries.push(new Builder().id('').thema(thema).entry('liegen').example(['Da liegt ja meine Zeitung.', 'Bonn liegt am Rhein.']).get());
		entries.push(new Builder().id('').thema(thema).entry('links').example('Das Rathaus ist links neben dem Museum.').get());
		entries.push(new Builder().id('').thema(thema).entry('lockig').example('Sie hat kurze, lockige Haare.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Löffel, -').example('Ich brauche einen Löffel für die Suppe.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Lust (Sg.)').example('Ich habe jetzt keine Lust.').get());
		entries.push(new Builder().id('').thema(thema).entry('lustig').example('Erzähl eine lustige Geschichte!').get());
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'M'];
		entries.push(new Builder().id('').thema(thema).entry('machen').example(['Am Samstag machen wir einen Ausflug.', 'Das macht nichts!', 'Das macht € 5,70.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Mädchen, -').example(['Die Mädchen spielen auch Fußball.', 'In der Klasse sind 15 Mädchen und 12 Jungs.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Mal, -e').example(['Ich war zwei Mal in England.', 'Bis zum nächsten Mal!']).get());
		entries.push(new Builder().id('').thema(thema).entry('mal').example(['Kannst du bitte mal aufpassen?', 'Komm mal her!', 'Sag mal, wie findest du meine neue Hose?']).get());
		entries.push(new Builder().id('').thema(thema).entry('man').example('Hier darf man nicht laut sprechen.').get());
		entries.push(new Builder().id('').thema(thema).entry('manchmal').example('Ich bin manchmal sehr traurig, aber nicht immer.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Mann, ä, -er').example(['Ein Mann geht mit seinem Hund spazieren.', 'Mein Mann ist Arzt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Mantel, ä, -').example('Es ist kalt. Zieh einen Mantel an.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Markt, ä, -e').example(['Heute ist hier Markt.', 'Auf dem Markt gibt es Obst und Gemüse.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Marktplatz, ä, -e').example('Der Bus fährt bis zum Marktplatz.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Marmelade, -n').example(['Was möchtest du zum Frühstück?', 'Brot mit Marmelade.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Maschine, -n').example(['Ist die Maschine kaputt?', 'Er fliegt morgen mit der ersten Maschine nach Paris.', 'Die Harley Davidson ist eine tolle Maschine.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Maus, ä, -e').example(['Ich glaube, im Keller ist eine Maus.', 'An meinem Computer ist die Maus kaputt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Meer, -e').example('In den Ferien fahren wir ans Meer.').get());
		entries.push(new Builder().id('').thema(thema).entry('mehr').example(['Ich habe kein Geld mehr.', 'Ich brauche mehr Taschengeld.', 'Du musst mir noch mehr von deiner Reise erzählen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('mein, -e').example('Meine Freundin heißt Gaby.').get());
		entries.push(new Builder().id('').thema(thema).entry('meinen').example('Ich meine, das ist zu teuer.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Meinung, -en').example(['Sag mir bitte deine Meinung zu diesem Thema.','Meiner Meinung nach ist das eine gute Idee']).get());
		entries.push(new Builder().id('').thema(thema).entry('e meisten').example('Die meisten Touristen wollen den Kölner Dom besichtigen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Mensch, -en').example(['Wie viele Menschen leben in Berlin?', 'Ich glaube, die Stadt hat 3 Millionen Menschen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Messer, -').example('Ich habe nur eine Gabel. Kann ich noch ein Messer haben?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Milch (Sg.)').example(['Ich trinke den Kaffee immer mit Milch.', 'Holst du die Milch aus dem Kühlschrank?']).get());
		entries.push(new Builder().id('').thema(thema).entry('mindestens').example(['Ich habe mindestens 30 Minuten gewartet.', 'Du brauchst mindestens 40 Punkte.', 'Schreibe mindestens 50 Wörter.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Mineralwasser, ä').example(['Was möchtest du trinken?', 'Ein Mineralwasser.']).get());
		entries.push(new Builder().id('').thema(thema).entry('minus').example('Sechs minus zwei ist vier.').get());
		entries.push(new Builder().id('').thema(thema).entry('mit').example(['Ich spiele mit Andrea.', 'Er fährt mit dem Bus.']).get());
		entries.push(new Builder().id('').thema(thema).entry('mitbringen').example('Was bringst du zur Party mit?').get());
		entries.push(new Builder().id('').thema(thema).entry('mitgehen').example('Wir gehen alle mit ins Kino.').get());
		entries.push(new Builder().id('').thema(thema).entry('mitkommen').example('Ich gehe ins Kino. Kommst du mit?').get());
		entries.push(new Builder().id('').thema(thema).entry('mitmachen').example('Komm, mach mit! Das Spiel ist lustig.').get());
		entries.push(new Builder().id('').thema(thema).entry('mitnehmen').example('Könnt ihr mich im Auto mitnehmen? Ich will nicht zu Fuß nach Hause gehen.').get());
		entries.push(new Builder().id('').thema(thema).entry(['r Mitschüler, -', 'e Mitschülerin, -nen']).example('Meine Mitschüler ärgern mich immer.').get());
		entries.push(new Builder().id('').thema(thema).entry('mitspielen').example(['Ich möchte auch mitspielen!', 'Das geht nicht, wir sind schon vier Mitspieler.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Mittagessen, -').example(['Zum Mittagessen sind immer alle zu Hause', 'Zum Mittagessen gibt es Nudeln.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Mitte, -n').example(['In der Mitte steht ein Tisch.', 'Mitte August fahre ich in den Urlaub.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Mitteilung, -en').example('Du hörst drei Mitteilungen für Jugendliche im Radio.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Mode (Sg.)').example(['Meine Freundin interessiert sich für Mode.', 'Das ist die neue Mode: blaue T-Shirts und grüne Hosen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Modenschau, -en').example('Die Modenschau war toll. Es gab so viele schöne Kleider.').get());
		entries.push(new Builder().id('').thema(thema).entry('modern').example(['Gelbe Pullover sind nicht mehr modern.', 'Diese Möbel sind jetzt modern.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Möbel (Pl.)').example('Sie kaufen neue Möbel: einen Tisch, zwei Stühle und ein Bett.').get());
		entries.push(new Builder().id('').thema(thema).entry('mögen').example(['Ich mag gern Spaghetti.', 'Ich mag keine Milch.']).get());
		entries.push(new Builder().id('').thema(thema).entry('möglich').example('Ich kann nicht kommen, es ist leider nicht möglich.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Moment, -e').example(['Warte bitte einen Moment!', 'In diesem Moment fängt das Spiel an.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Mond, -e').example('Der Mond war ganz hell.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Moped, -s').example('Er hat ein Moped bekommen. Damit fährt er nun in die Schule.').get());
		entries.push(new Builder().id('').thema(thema).entry('morgen').example('Heute ist Montag. Morgen ist Dienstag.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Motor, -en').example('Der Motor ist kaputt. Mein Auto fährt nicht.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Motorrad, ä, -er').example('Ich fahre mit dem Motorrad zur Arbeit.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Motorroller, -').example('Ich möchte an meinem 16. Geburtstag einen Motorroller kaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('müde').example('Ich bin müde. Ich gehe heute früh ins Bett.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Müll (Sg.)').example(['Bringst du bitte den Müll weg/raus?', 'Lassen Sie keinen Müll im Park liegen!']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Müsli, -s').example('Ich esse jeden Morgen ein Müsli mit Joghurt.').get());
		entries.push(new Builder().id('').thema(thema).entry('müssen').example(['Mein Zimmer muss ich allein aufräumen.', 'Meine Mutter muss von acht bis fünf arbeiten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Museum, Museen').example('Wir gehen am Sonntag ins Museum und sehen uns die Bilder von Picasso an.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Musik, -en').example(['Ich höre gern Musik.', 'Ich mache gern Musik mit meiner Band.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Musiker, -, e Musikerin, -nen').example('Ich lerne Klavier spielen. Ich möchte Musiker werden.').get());
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'N'];
		entries.push(new Builder().id('').thema(thema).entry('nach').example(['Wohin fährst du?', '– Nach Berlin.', 'Nach der Schule mache ich meine Hausaufgaben.', 'Es ist schon fünf nach eins.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Nachbar, -n, e Nachbarin, -nen').example('Die Nachbarn hier im Haus sind sehr nett.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Nachricht').example(['Das ist eine gute Nachricht.', 'Jetzt kommen im Radio die Nachrichten für Schüler.', 'Du hörst die Nachricht noch einmal.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Nähe (Sg.)').example('Elmshorn liegt in der Nähe von Hamburg.').get());
		entries.push(new Builder().id('').thema(thema).entry('nächste').example(['Wann kommst du wieder?', '– In der nächsten Woche.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Name, -n').example('Mein Name ist Peter Niemöller.').get());
		entries.push(new Builder().id('').thema(thema).entry('nämlich').example('Ich habe es nicht gekauft, es war nämlich sehr teuer.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Nase, -n').example('Er hat blaue Augen und eine große Nase.').get());
		entries.push(new Builder().id('').thema(thema).entry('nass').example('Die Straßen sind vom Regen ganz nass.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Natur, -en').example('Er ist am liebsten draußen in der freien Natur.').get());
		entries.push(new Builder().id('').thema(thema).entry('natürlich').example(['Kann ich hier schlafen?', '– Ja, natürlich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('neben').example(['Petra sitzt neben mir.', 'Die Bäckerei ist direkt neben dem Supermarkt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('negativ').example('Sieh das nicht so negativ!').get());
		entries.push(new Builder().id('').thema(thema).entry('nehmen').example(['Nehmen Sie den Bus zum Marktplatz!', 'Nimm noch ein Stück Kuchen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nein').example(['Kommst du mit?', '– Nein, leider nicht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nennen').example('Ich heiße Elisabeth, aber alle nennen mich Betty.').get());
		entries.push(new Builder().id('').thema(thema).entry('nervös').example('In Prüfungen bin ich immer so nervös.').get());
		entries.push(new Builder().id('').thema(thema).entry('nett').example(['Wie findest du Maria?', '– Sie ist sehr nett.']).get());
		entries.push(new Builder().id('').thema(thema).entry('neu').example(['Ist der Computer neu?', 'Mein Auto ist noch neu.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nicht').example(['Ist das gut?', '– Nein, es gefällt mir nicht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nichts').example('Ich möchte nichts essen.').get());
		entries.push(new Builder().id('').thema(thema).entry('nie').example('Ich war noch nie in Frankreich.').get());
		entries.push(new Builder().id('').thema(thema).entry('niemand').example('Kann mir niemand helfen?').get());
		entries.push(new Builder().id('').thema(thema).entry('noch').example(['Jetzt muss ich noch Hausaufgaben machen.', 'Vielleicht kommt er noch.']).get());
		entries.push(new Builder().id('').thema(thema).entry('normal').example(['Ich fühle mich schlecht.', '– Das ist normal. Du bist krank.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Note, -n').example(['Hast du gute Noten in der Schule?', 'Die Noten liegen auf dem Klavier.']).get());
		entries.push(new Builder().id('').thema(thema).entry('notieren').example(['Habt ihr alles notiert?', 'Notiert euch den Termin.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nötig').example('Das brauchen wir nicht, das ist nicht nötig.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Nudel, n').example('Heute gibt es Nudeln.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Nummer, n').example(['Bitte, sag mir deine Telefonnummer.', 'Können Sie mir Ihre Nummer geben?', 'Sie haben Zimmer Nummer 14.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nur').example(['Ich möchte nur ein Glas Wasser.', 'Er ist nur heute in der Stadt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('nützlich').example('Du musst Sprachen lernen, das ist immer nützlich.').get());
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'O'];
		entries.push(new Builder().id('').thema(thema).entry('oben').example('Oben auf dem Berg ist ein Restaurant.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Obst (Sg.)').example('Wir essen immer viel Obst: Äpfel, Bananen ...').get());
		entries.push(new Builder().id('').thema(thema).entry('oder').example('Trinkst du Tee oder Kaffee?').get());
		entries.push(new Builder().id('').thema(thema).entry('offen').example(['Das Fenster ist offen, kannst du es bitte schließen?', 'Die Geschäfte sind bis 20.00 Uhr offen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('öffnen').example('Kannst du bitte die Tür öffnen? Die Geschäfte sind am Sonntag geöffnet.').get());
		entries.push(new Builder().id('').thema(thema).entry('oft').example('Wir gehen im Sommer oft im Park spazieren.').get());
		entries.push(new Builder().id('').thema(thema).entry('ohne').example(['Ein Sonntag ohne meine Freunde ist langweilig.', 'Ich trinke meinen Kaffee ohne Zucker.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Ohr, -en').example('Er hat große Ohren und eine kleine Nase.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ohrring, -e').example('Sie trägt einen kleinen Ohrring.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Oper, -n').example(['Heute Abend gehen wir in die Oper.', 'Dies ist eine Oper von Mozart.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Operation, -en').example('Ich muss ins Krankenhaus: Die Operation ist nötig.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Orange, -n').example('Ich kaufe drei Kilo Orangen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Ordnung, -en').example(['Das ist in Ordnung, kein Problem.', 'Kannst du hier nicht Ordnung machen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('organisieren').example('Ich organisiere das Fest. Ich habe also viel zu tun.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ort, -e').example(['Dieser Ort hat 3000 Einwohner.', 'Dieser Ort liegt in den Bergen.']).get());
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'P'];
		entries.push(new Builder().id('').thema(thema).entry('s Paar, -e').example(['Karla und Uwe sind ein Liebespaar.', 'Ich brauche ein Paar Schuhe.']).get());
		entries.push(new Builder().id('').thema(thema).entry('ein paar').example('Wir waren ein paar Tage am Meer.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Päckchen, -').example('Ist das Päckchen von Tante Claudia endlich angekommen?').get());
		entries.push(new Builder().id('').thema(thema).entry('packen').example('Hast du den Koffer schon gepackt?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Paket, -e').example('Ich muss das Paket zur Post bringen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Papier, -e').example('Kann ich ein Blatt Papier haben. Ich will einen Brief schreiben.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Park, -s').example('Wir gehen gern im Park spazieren.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Party, -s').example('Die Party war toll.').get());
		entries.push(new Builder().id('').thema(thema).entry('passen').example('Das Kleid passt mir nicht mehr. Es ist zu klein.').get());
		entries.push(new Builder().id('').thema(thema).entry('passieren').example(['Was passiert in der Geschichte?', 'Ist dir etwas passiert?']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Pause, -n').example(['Du arbeitest zu viel. Mach doch eine Pause.', 'Von 12.00 bis 12.30 Uhr machen wir Mittagspause.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Pech (Sg.)').example(['Das war wirklich Pech!', 'Ich habe Pech gehabt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Person, -en').example('Es kostet drei Euro pro Person.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Pferd, -e').example('Ich möchte so gern ein Pferd haben! Ich reite sehr gern.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Pflanze, -n').example('In unserem Garten sind viele Pflanzen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Pizza, -en').example('Heute gibt es bei uns Pizza mit Tomaten und Käse.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Plakat, -e').example('Was steht auf dem Plakat?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Plan, ä, -e').example(['Wie findest du meinen Plan?', 'Hast du einen Stadtplan von Berlin?', 'Ich brauche noch einen Fahrplan für den Bus.']).get());
		entries.push(new Builder().id('').thema(thema).entry('planen').example('Wir planen gerade unsere Ferien.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Platz, ä, -e').example(['Das ist mein Platz.', 'In meiner Wohnung ist wenig Platz.', 'Ist der Platz noch frei?']).get());
		entries.push(new Builder().id('').thema(thema).entry('plötzlich').example('Plötzlich war das Licht aus.').get());
		entries.push(new Builder().id('').thema(thema).entry('plus').example('Sieben plus drei ist zehn.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Pommes frites (Pl.)').example(['Wie willst du die Pommes frites?', '– Mit Ketchup.']).get());
		entries.push(new Builder().id('').thema(thema).entry('positiv').example(['Alles wird gut. Denk positiv!', 'Das ist ein sehr positives Ergebnis.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Post (Sg.)').example('Ich bringe die Briefe zur Post.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Poster, -').example(['Was sind das für Poster?', '– Ich bin Fan vom FC Bayern.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Postkarte, -n').example('Ich schreibe dir aus dem Urlaub eine Postkarte.').get());
		entries.push(new Builder().id('').thema(thema).entry('praktisch').example('Diese Maschine ist sehr praktisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Preis, -e').example(['Die Preise für Autos sind ziemlich hoch.', 'Der erste Preis im Quiz ist eine Reise nach Paris.']).get());
		entries.push(new Builder().id('').thema(thema).entry('prima').example(['Ich finde deine Idee prima!', 'Was können wir tun? Hast du eine Idee?']).get());
		entries.push(new Builder().id('').thema(thema).entry('pro').example('Das macht 20 Euro pro Person.').get());
		entries.push(new Builder().id('').thema(thema).entry('probieren').example(['Kann ich das Kleid probieren?', 'Möchtest du den Kuchen probieren?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Problem, -e').example(['Hast du Probleme mit deinen Eltern?', 'Ich habe ein Problem mit der Grammatik.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Programm, -e').example(['Wir machen gerade ein Programm für die Klassen-reise.', 'Das Programm im Radio ist schlecht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Projekt, -e').example('Wir arbeiten in der Schule an einem Projekt über die Umwelt.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Prospekt, -e').example('Schicken Sie mir bitte einen Prospekt von Ihrem Hotel ...').get());
		entries.push(new Builder().id('').thema(thema).entry('r Pullover, -').example('Du brauchst keinen Pullover, es ist warm.').get());
		entries.push(new Builder().id('').thema(thema).entry('pünktlich').example('Kommt bitte pünktlich um 18.00 Uhr nach Hause!').get());
		entries.push(new Builder().id('').thema(thema).entry('putzen').example('Ich muss noch das Bad putzen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Puzzle, -s').example('Das ist ein Puzzle mit 5000 Teilen.').get());
        return entries;
    }

    createQEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Q'];
		entries.push(new Builder().id('').thema(thema).entry('r Quatsch (Sg.)').example('Ich finde, das ist nur Quatsch!').get());
		entries.push(new Builder().id('').thema(thema).entry('quer').example('Im Sommer reisen wir quer durch Deutschland.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Quiz (Sg.)').example('Das ist ein Quiz für Kinder.').get());
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'R'];
		entries.push(new Builder().id('').thema(thema).entry('s Rad (s Fahrrad), ä, -er').example('Ich fahre mit dem Rad in die Schule.').get());
		entries.push(new Builder().id('').thema(thema).entry('Rad fahren').example(['Kannst du Rad fahren?', '– Ja, aber ich habe kein Fahrrad.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Radiergummi, -s').example('Gibst du mir deinen Radiergummi? Ich muss meine Antwort korrigieren.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Radio, -s').example('Im Radio spielen sie gute Musik.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Radtour, -en').example('Im Sommer machen wir eine Radtour nach Potsdam.').get());
		entries.push(new Builder().id('').thema(thema).entry('raten').example(['Das ist ein Quiz, man muss die Städte raten.', 'Ich weiß die Antwort nicht. Ich muss raten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Rathaus, ä, -er').example('Im Rathaus bekommst du Prospekte über die Stadt.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Rätsel, -').example('Ich finde das Rätsel zu schwierig.').get());
		entries.push(new Builder().id('').thema(thema).entry('rauchen').example('Stört es Sie, wenn ich rauche?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Rathaus,ä,-er').example('Der Raum hat zwei Fenster.').get());
		entries.push(new Builder().id('').thema(thema).entry('rechnen').example('Ich rechne das mit dem Taschenrechner.').get());
		entries.push(new Builder().id('').thema(thema).entry('recht haben').example('Du hast recht. Meine Antwort ist falsch.').get());
		entries.push(new Builder().id('').thema(thema).entry('rechts').example('Hier rechts ist unsere Schule, links der Supermarkt.').get());
		entries.push(new Builder().id('').thema(thema).entry('reden').example('Sie reden immer so viel./ Er redet immer nur von Autos.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Regen (Sg.)').example('Morgen soll es Regen geben.').get());
		entries.push(new Builder().id('').thema(thema).entry('regnen').example('Wenn es regnet, bleibe ich zu Hause.').get());
		entries.push(new Builder().id('').thema(thema).entry('reich').example('Die Menschen sind hier nicht reich. Sie sind arm.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Reihe, en').example(['Ich sitze in der ersten Reihe.', 'Dies ist Reihe fünf.', 'Jetzt bin ich an der Reihe.']).get());
		entries.push(new Builder().id('').thema(thema).entry('reinkommen').example(['Darf ich reinkommen?', '– Ja bitte, kommen Sie rein.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Reis (Sg.)').example('Wir essen heute Hühnchen mit Reis.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Reise, -n').example('Wir machen eine Reise nach Australien.').get());
		entries.push(new Builder().id('').thema(thema).entry('reiten').example('Ich habe ein Pferd. Reiten ist mein Hobby.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Reparatur, -en').example('Der Motor ist kaputt. Die Reparatur ist sehr teuer.').get());
		entries.push(new Builder().id('').thema(thema).entry('reparieren').example('Mein Rad ist kaputt, aber mein Vater kann es reparieren.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Rest, -e').example(['Es ist noch ein Rest von dem Kuchen da.', 'Den Rest der Arbeit kannst du morgen machen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Restaurant, -s').example('Wir essen heute im Restaurant').get());
		entries.push(new Builder().id('').thema(thema).entry('r Ring, -e').example('Sie trägt viele Ringe.').get());
		entries.push(new Builder().id('').thema(thema).entry('romantisch').example('Der Liebesfilm ist sehr romantisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Rücken, -').example(['Was tut dir weh?', '– Ich habe Schmerzen im Rücken.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Rucksack, ä, -e').example(['Hast du deinen Koffer gepackt?', '– Nein, ich brauche nur einen Rucksack.']).get());
		entries.push(new Builder().id('').thema(thema).entry('rufen').example(['Meine Mutter hat mich gerufen, darum bin ich nach Hause gegangen.', 'Ein Unfall! Wir müssen einen Arzt rufen!']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Ruhe (Sg.)').example(['Er ist krank, er braucht viel Ruhe.', 'Ich brauche Ruhe. Ich muss lernen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('ruhig').example(['Seid mal bitte ruhig! Ich muss telefonieren.', 'Ich suche eine ruhige Wohnung.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Rundfahrt, -en').example('Wir machen eine Rundfahrt durch die Stadt.').get());
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'S'];
/*
		entries.push(new Builder().id('').thema(thema).entry('e Sache, -n').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Saft, ä, -e').example().get());
		entries.push(new Builder().id('').thema(thema).entry('sagen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Salat, -e').example().get());
		entries.push(new Builder().id('').thema(thema).entry('s Salz, -e').example().get());
		entries.push(new Builder().id('').thema(thema).entry('sauber').example().get());
		entries.push(new Builder().id('').thema(thema).entry('sauer').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schade').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schädlich').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schaffen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Schalter, -').example().get());
		entries.push(new Builder().id('').thema(thema).entry('scheinen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schenken').example().get());
		entries.push(new Builder().id('').thema(thema).entry('e Schere, -n').example().get());
		entries.push(new Builder().id('').thema(thema).entry('scheußlich').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schicken').example().get());
		entries.push(new Builder().id('').thema(thema).entry('s Schiff, -e').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schimpfen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schlafen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('s Schlafzimmer, -').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schlecht').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schließen').example().get());
		entries.push(new Builder().id('').thema(thema).entry('s Schloss, ö, -er').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Schluss, ü, -sse').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Schlüssel, -').example().get());

Wo sind meine Schulsachen?/
Das ist eine tolle Sache./Pack deine Sachen und
komm mit!
Möchtest du Wasser oder Saft?/Einen Apfelsaft, bitte.
Eva sagt, sie kommt heute nicht./Sag mal, wie geht es
dir denn?
Ich esse abends gern Salat.
In der Suppe fehlt Salz.
Dein Zimmer ist sehr sauber und ordentlich.
Die Milch ist sauer./Der Apfel ist mir zu sauer.
Tut mir leid, ich kann nicht kommen./Das ist schade!
Zigaretten sind sehr schädlich.
Du kannst es bestimmt schaffen!/Soll ich dir helfen?/
Nein, ich schaffe es allein.
Briefmarken bekommen Sie am Schalter./
Wo ist der Lichtschalter?
Die Sonne scheint.
Was kann ich Anna zum Geburtstag schenken?
Hast du eine Schere? Ich muss dieses Bild
ausschneiden.
Das Essen hier ist scheußlich!/
Das Wetter ist scheußlich!
Ich schicke dir aus dem Urlaub eine Karte.
Sie können mit dem Schiff nach Capri fahren.
Der Lehrer hat mit mir geschimpft.
Ich bin sehr müde. Heute schlafe ich sicher gut.
In seinem Schlafzimmer steht ein neues Bett.
Mir ist so schlecht./Das Essen hier ist nicht schlecht.
Schließ bitte das Fenster./
Das Geschäft ist schon geschlossen.
Wir haben das Schloss Neuschwanstein besichtigt.
Der Schluss der Geschichte ist sehr traurig./
Zum Schluss gibt es noch ein Eis.
Ich habe meinen Schlüssel verloren. Wie komme ich
jetzt ins Haus?

------

TODO
		entries.push(new Builder().id('').thema(thema).entry('schmecken').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Schmerz, -en').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schmutzig').example().get());
		entries.push(new Builder().id('').thema(thema).entry('r Schnee (Sg.)').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schnell').example().get());
		entries.push(new Builder().id('').thema(thema).entry('schneiden').example().get());
		entries.push(new Builder().id('').thema(thema).entry('e Schokolade (Sg.)').example().get());

Wie schmeckt dir das Essen?
Ich habe Schmerzen. Ich muss zum Arzt.
Die Küche ist schmutzig. Wer macht sie sauber?
Im Winter gibt es hier viel Schnee.
Antworte schnell!/Das Auto fährt schnell.
Sie schneidet den Apfel mit dem Messer.
Schokolade macht glücklich./
Ich esse gern Schokolade./Ich trinke im Winter gern
eine heiße Schokolade.
-----

		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schon
Ich habe schon sechs Computerspiele./
Ist das Essen schon fertig?
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schön
Dein Zimmer ist sehr schön und gemütlich./
Das Bild ist schön. Es gefällt mir sehr gut.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Schrank, ä, -e
Die Kleider sind im Schrank
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schrecklich
Ich bin schrecklich nervös.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Schreibblock, ö, -e
Ich brauche einen neuen Schreibblock für die Schule.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schreiben
Erika schreibt mir jeden Tag einen Brief.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Schuh, -e
Ich habe neue Schuhe gekauft./Zieh die Schuhe aus,
wenn du ins Haus gehst.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schwach
Deine Leistungen sind sehr schwach./
Für diese Arbeit bin ich zu schwach.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schwer
Meine Tasche ist so schwer.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schwierig
Ich finde die Hausaufgaben sehr schwierig.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
s Schwimmbad, ä, -er Im Sommer gehen wir oft ins Schwimmbad.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
schwimmen
Ich kann gut schwimmen./Ich schwimme gern im See.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Schwimmsachen (Pl.) Wir fahren an den See. – Vergesst nicht die
Schwimmsachen mitzunehmen.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r See, -n
Der See ist sehr groß./Wir wohnen am See./
Wir fahren zum Ammersee.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sehen
Siehst du das große Haus?/Ja, wohnst du da?
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sehr
Ich liebe ihn sehr./Das ist sehr wichtig.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sein
Ich bin 13 Jahre alt./Das ist mein Bruder./
Er ist Student./Die Kinder sind im Garten.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sein, -e
Er liebt nur seinen Computer.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Seite, -n
Das steht auf Seite 23.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
selbst
Den Kuchen habe ich selbst gebacken.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Sendung, -en
Um 18 Uhr kommt meine Lieblingssendung
im Fernsehen.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
setzen (sich)
Setz dich!/Du kannst dich neben Carola setzen.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sicher
Du bist sicher gut in der Schule./
Ich bin sicher, es ist richtig.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sie
Ich glaube, sie findet dich interessant.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
Sie
Sind Sie der neue Lehrer?/Wie geht es Ihnen?
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
singen
Wir singen in einer Band.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Sinn (Sg.)
Die Geschichte hat keinen Sinn./Das hat keinen Sinn.
e Situation
In dieser Situation kann man nichts machen.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sitzen
Er sitzt neben mir.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Ski, auch -er
Ich habe neue Ski bekommen./
Im Winter fahre ich oft Ski.
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
so
Ich mache das nicht so./Das schmeckt so scheußlich./
Sie ist so alt wie ich.

----

		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sofort
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sogar
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sollen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Sonne, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sonst
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Sorge, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Soße, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
spannend
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sparen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Spaß (Sg.)
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
spät
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
später
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
spazieren gehen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Spaziergang, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
s Spiel, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Spielplatz, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
s Spielzeug, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Sport (Sg.)
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sportlich
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Sprache, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sprechen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Stadt, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Stadtplan, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stark
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stattfinden
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stehen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
steigen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stellen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stimmen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stören
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Strand, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Straße, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Straßenbahn, -en
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
streiten (sich)
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
Streit haben


Antworte bitte sofort!/Komm nach der Schule sofort
nach Hause.
Er hat mir sogar einen Brief geschrieben.
Was soll ich machen?/Wie kann ich dir helfen?
Die Sonne scheint.
Brauchen Sie sonst noch etwas?
Ich mache mir Sorgen. Er ruft nicht an.
Zum Braten gibt es Kartoffeln und Soße.
Der Krimi ist sehr spannend.
Sie hat viel Geld gespart. Jetzt kann sie ein Auto
kaufen.
Wir haben immer viel Spaß zusammen./Viel Spaß!
Mach schnell, es ist spät!/Ich komme zu spät./
Wie spät ist es?
Ich mache die Hausaufgaben später. Jetzt habe ich
keine Lust.
Wollen wir mit dem Hund spazieren gehen?
Wir machen einen Spaziergang im Park.
spielen
Ich kenne ein neues Spiel. Ich möchte Karten spielen./
Ball spielen./Klavier spielen./Tennis spielen./
Wir brauchen mehr Spielplätze für Kinder.
Die Kinder haben zu viel Spielzeug.
Ich mache viel Sport: Fußball, Basketball und
Volleyball.
Sie trägt sportliche Kleidung./Sie ist sehr sportlich.
Er spricht vier Sprachen: Deutsch, Englisch,
Französisch und Italienisch.
Sie spricht mit dem Lehrer./Kann ich mit Frau Müller
sprechen?
Unsere Stadt ist nicht so groß. Sie hat nur 40000
Einwohner.
Ich möchte einen Stadtplan von München kaufen.
Ich hatte starke Schmerzen.
Das Konzert findet auf dem Marktplatz statt.
Was steht in der Zeitung?/
Die Suppe steht auf dem Tisch.
Das kleine Haus hat immer hier gestanden.
Wir steigen auf den Berg./Bitte steigen Sie jetzt
in das Auto.
Stell bitte die Tassen auf den Tisch.
Das stimmt nicht. Das ist falsch.
Mein kleiner Bruder stört uns immer./
Störe ich dich bei der Arbeit?
Im Urlaub war ich nur am Strand.
Wir wohnen in der Goethe-Straße.
Ich fahre mit der Straßenbahn in die Schule.
Wir streiten leider sehr oft./Ich streite mich oft mit
meinem Bruder.
Habt ihr schon wieder Streit?/Ich habe Streit mit
meiner Schwester.

------

		entries.push(new Builder().id('').thema(thema).entry('').example().get());
streng
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Stress (Sg.)
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
stressig
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
s Stück, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Student, -en
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Studentin, -nen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
studieren
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Stuhl, ü, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Stundenplan, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
suchen
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
super
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
r Supermarkt, ä, -e
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Suppe, -n
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
süß
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
e Süßigkeiten (Pl.)
		entries.push(new Builder().id('').thema(thema).entry('').example().get());
sympathisch

Der Lehrer ist streng./Meine Eltern sind sehr streng.
Sie erlauben uns einfach nichts.
Der Stress in der Schule ist groß.
Ich finde diese Situation stressig. Ich habe zu viel
zu tun.
Willst du noch ein Stück Kuchen?/Ich nehme zwei
Stück Zucker in den Kaffee.
Mein Nachbar ist Student.
Ich bin Studentin. Ich studiere Fremdsprachen an der
Universität in Berlin.
Er studiert Chemie an der Universität in Leipzig.
Der Stuhl ist sehr unbequem./Da ist noch ein Stuhl
frei. Setz dich!
Für dieses Jahr haben wir noch keinen Stundenplan.
Ich suche meinen Kugelschreiber. Weißt du, wo er ist?
Ich finde Thomas wirklich super!/Die Idee ist super!
Wir kaufen immer im Supermarkt ein.
Suppe isst man mit dem Löffel.
Der Kuchen ist zu süß./Der neue Mathelehrer ist
wirklich süß!
Ich esse so gern Süßigkeiten, leider sind sie
nicht gesund.
Ich finde Maria nett. Sie ist sehr sympathisch.

		–
        */
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'T'];
		entries.push(new Builder().id('').thema(thema).entry('tanzen').example('Ich tanze gern in der Disco.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tasche, -n').example('Die Tasche ist sehr schwer.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Taschengeld (Sg.)').example(['Wie viel Taschengeld bekommt ihr im Monat?', '– 15 Euro.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Taschenrechner, -').example('Ich rechne das mit dem Taschenrechner.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tasse, -n').example('Ich möchte eine Tasse Tee.').get());
		entries.push(new Builder().id('').thema(thema).entry('tatsächlich').example('Willst du das tatsächlich machen?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Taxi, -s').example(['Wie kommst du zum Flughafen?', '– Ich nehme ein Taxi.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Tee, -s').example('Im Winter trinken wir viel Tee.').get());
		entries.push(new Builder().id('').thema(thema).entry('teilen').example('Wir teilen den Kuchen in 10 Stücke.').get());
		entries.push(new Builder().id('').thema(thema).entry('teilnehmen').example('Willst du auch am Wettbewerb teilnehmen?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Telefon, -e').example('Das Telefon klingelt.').get());
		entries.push(new Builder().id('').thema(thema).entry('telefonieren').example('Ich telefoniere oft mit meinen Großeltern in Frankfurt.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Teller, -').example('Ich möchte bitte einen Teller Suppe.').get());
		entries.push(new Builder().id('').thema(thema).entry('Tennis spielen').example('Mein Hobby ist Tennis spielen.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Teppich, -e').example('In meinem Zimmer ist ein roter Teppich.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Termin, -e').example('Mach bitte einen Termin mit der Zahnärztin.').get());
		entries.push(new Builder().id('').thema(thema).entry('teuer').example(['Willst du den Computer kaufen?', '– Nein, er ist zu teuer.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Theater, -').example('Gestern waren wir im Theater, es gab ein Stück von Shakespeare.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Thema, -en').example(['Welches Thema hast du gewählt?', '– Ich schreibe über „meine beste Freundin“.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Tier, -e').example('Ich möchte ein Tier haben: eine Katze oder einen Hund.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Tisch, -e').example(['Das Buch liegt auf dem Tisch.', 'Ich kaufe noch einen Tisch und vier Stühle.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Titel, -').example('Finde einen Titel für den Text.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Toilette, -n').example('Wo ist die Toilette?').get());
		entries.push(new Builder().id('').thema(thema).entry('toll').example('In den Ferien war es toll.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tomate, -n').example('Die Tomate ist noch grün. Ich mag nur rote Tomaten.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Torte, -n').example('Zum Geburtstag gibt es immer eine große Torte.').get());
		entries.push(new Builder().id('').thema(thema).entry('tot').example('Meine Katze ist tot. Deshalb bin ich traurig.').get());
		entries.push(new Builder().id('').thema(thema).entry('total').example(['Ist das Buch spannend?', '– Nein, es ist total langweilig.']).get());
		entries.push(new Builder().id('').thema(thema).entry(['r Tourist, -en', 'e Touristin, -nen']).example('Viele ausländische Touristen kommen nach Bayern.').get());
		entries.push(new Builder().id('').thema(thema).entry('tragen').example(['Er trägt kurze Hosen.', 'Soll ich deinen Koffer tragen?']).get());
		entries.push(new Builder().id('').thema(thema).entry('trainieren').example(['Machst du viel Sport?', '– Ja, ich muss jeden Tag trainieren.']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Training (Sg.)').example('Wir gehen zum Fußball-Training.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Traum, ä, -e').example('Heute Nacht hatte ich einen schönen Traum.').get());
		entries.push(new Builder().id('').thema(thema).entry('traurig').example('Ich bin sehr traurig. Meine Katze ist weg.').get());
		entries.push(new Builder().id('').thema(thema).entry('treffen (sich)').example(['Am Nachmittag treffe ich meine Freunde.', 'Wir treffen uns vor dem Café.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Treppe, -n').example('Hier ist die Treppe zum Keller.').get());
		entries.push(new Builder().id('').thema(thema).entry('trinken').example(['Wir trinken gern Saft.', 'Kann ich etwas zu trinken haben?']).get());
		entries.push(new Builder().id('').thema(thema).entry('trocken').example('Ich habe mein Kleid gewaschen. Ist es jetzt schon trocken?').get());
		entries.push(new Builder().id('').thema(thema).entry('trotzdem').example('Der Film ist traurig, aber ich finde ihn trotzdem schön.').get());
		entries.push(new Builder().id('').thema(thema).entry('trösten').example('Ich war traurig, aber meine Mutter hat mich getröstet.').get());
		entries.push(new Builder().id('').thema(thema).entry('s T-Shirt, -s').example('Wie findest du mein T-Shirt? Es ist neu und passt gut zu meiner Hose.').get());
		entries.push(new Builder().id('').thema(thema).entry('tschüss!').example('Also bis bald, tschüss!').get());
		entries.push(new Builder().id('').thema(thema).entry('tun').example('Was soll ich denn tun?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Tür, -en').example(['Mach bitte die Tür zu.', 'Es klingelt an der Tür.']).get());
		entries.push(new Builder().id('').thema(thema).entry('typisch').example('Ich glaube, das ist typisch deutsch!').get());
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'U'];
		entries.push(new Builder().id('').thema(thema).entry('e U-Bahn, -en').example(['Wie komme ich zum Bahnhof?', 'Du kannst die U-Bahn nehmen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('üben').example('Ich muss jeden Tag Klavier üben.').get());
		entries.push(new Builder().id('').thema(thema).entry('über').example(['Jetzt gehen wir über die Straße.', 'Das Bild hängt über dem Bett.']).get());
		entries.push(new Builder().id('').thema(thema).entry('überall').example(['Hast du das Buch gefunden?', '– Nein, ich habe schon überall gesucht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('übermorgen').example('Heute ist Montag, übermorgen ist Mittwoch.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Überschrift, -en').example('Finden Sie eine Überschrift für den Text.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Uhr, -en').example(['Hast du keine Uhr?', '– Es ist sechs Uhr.']).get());
		entries.push(new Builder().id('').thema(thema).entry('um').example('Um 7.30 Uhr kommt der Zug.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Umwelt (Sg.)').example('Diese Fabrik ist schädlich für die Umwelt.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Umweltschutz (Sg.)').example('Ich finde Umweltschutz sehr wichtig.').get());
		entries.push(new Builder().id('').thema(thema).entry('unbedingt').example('Das musst du unbedingt lesen.').get());
		entries.push(new Builder().id('').thema(thema).entry('und').example('Karl und Susanne kommen auch.').get());
		entries.push(new Builder().id('').thema(thema).entry('und so weiter').example('u.s.w.').get());
		entries.push(new Builder().id('').thema(thema).entry('unerträglich').example(['Wie war die Party?', '– Sehr laut, die Musik war unerträglich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Unfall, ä, -e').example(['Heute war ein schlimmer Unfall in der Gartenstraße. Drei Autos sind kaputt.', 'Ich hatte einen Unfall mit dem Motorrad.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Universität, -en').example('Mein Bruder studiert an der Universität Mathematik.').get());
		entries.push(new Builder().id('').thema(thema).entry('unser, -e').example('Das ist unser neues Auto.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Unsinn (Sg.)').example('Wir machen immer viel Unsinn und ärgern unsere Mutter.').get());
		entries.push(new Builder().id('').thema(thema).entry('unten').example('Wir wohnen ganz unten im Haus.').get());
		entries.push(new Builder().id('').thema(thema).entry('unter').example('Der Hund liegt unter dem Tisch.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Unterricht (Sg.)').example('Der Unterricht dauert bis 13 Uhr.').get());
		entries.push(new Builder().id('').thema(thema).entry('unterschreiben').example('Bitte unterschreiben Sie hier auf dem Formular.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Unterschrift, -en').example('Auf dem Formular fehlt noch die Unterschrift.').get());
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'V'];
		entries.push(new Builder().id('').thema(thema).entry('verabredet sein').example('Ich bin um 15 Uhr mit meiner Freundin verabredet. Wir treffen uns im Park.').get());
		entries.push(new Builder().id('').thema(thema).entry('verbieten').example(['Kommst du heute Abend mit?', '– Nein, mein Vater hat es mir verboten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('verboten sein').example('Hier ist das Rauchen verboten.').get());
		entries.push(new Builder().id('').thema(thema).entry('verdienen').example('In den Ferien will ich arbeiten und Geld verdienen.').get());
		entries.push(new Builder().id('').thema(thema).entry('vergessen').example('Ich vergesse oft die Vokabeln.').get());
		entries.push(new Builder().id('').thema(thema).entry('vergleichen').example(['Wir haben die Ergebnisse verglichen.', 'Vergleichen Sie die Preise.']).get());
		entries.push(new Builder().id('').thema(thema).entry('verkaufen').example('Er will seine alten Sachen auf dem Flohmarkt verkaufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('verkleiden (sich)').example('Im Karneval verkleidet sie sich gern.').get());
		entries.push(new Builder().id('').thema(thema).entry('verletzen (sich)').example('Hast du dich bei dem Unfall schwer verletzt?').get());
		entries.push(new Builder().id('').thema(thema).entry('verletzt sein').example('Bist du verletzt?').get());
		entries.push(new Builder().id('').thema(thema).entry('verliebt sein').example('Ich bin total in ihn/sie verliebt.').get());
		entries.push(new Builder().id('').thema(thema).entry('verlieren').example(['Ich habe mein Geld verloren.', 'Mein Vater hat seine Arbeit verloren.']).get());
		entries.push(new Builder().id('').thema(thema).entry('verreisen').example('Herr Müller ist verreist. Er kommt am 15. August wieder.').get());
		entries.push(new Builder().id('').thema(thema).entry('verrückt').example(['Ich finde die Idee verrückt.', 'Sie trägt so verrückte Kleider.']).get());
		entries.push(new Builder().id('').thema(thema).entry('verschieden').example(['Meine Schwester und ich, wir sind verschieden.', 'Ich habe verschiedene Hobbys.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Verspätung, -en').example('Hat der Zug aus Dresden Verspätung? Ja, 10 Minuten.').get());
		entries.push(new Builder().id('').thema(thema).entry('versprechen').example('Ich komme sicher, das verspreche ich.').get());
		entries.push(new Builder().id('').thema(thema).entry('verstehen').example('Ich verstehe dich nicht. Kannst du bitte langsamer sprechen?').get());
		entries.push(new Builder().id('').thema(thema).entry('versuchen').example('Du kannst es noch einmal versuchen.').get());
		entries.push(new Builder().id('').thema(thema).entry('viel, -e').example(['Hast du viele Freunde?', 'Es regnet viel.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vielleicht').example(['Kannst du mir vielleicht helfen?', 'Vielleicht kommt er.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Vogel, ö, -').example('Morgens singen die Vögel im Garten.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Volleyball, ä, -e').example('Wir haben Volleyball gespielt.').get());
		entries.push(new Builder().id('').thema(thema).entry('von').example(['Der Computer ist ein Geschenk von meinem Onkel.', 'Sie arbeitet von sieben bis neun.', 'Er kommt von der Arbeit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vor').example(['Ich treffe Peter vor dem Kino.', 'Vor dem Frühstück dusche ich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vor allem').example('Ich möchte vor allem das Museum sehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('vorbei').example(['Fahr geradeaus, dann kommst du an der Kirche vorbei.', 'Leider sind die Ferien jetzt vorbei.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vorbereiten').example(['Hast du alles für die Party vorbereitet?', 'Ich muss mich noch auf die Prüfung vorbereiten.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vorgestern').example('Wo warst du vorgestern?').get());
		entries.push(new Builder().id('').thema(thema).entry('vorher').example('Um sieben Uhr fahren wir weg, aber vorher muss ich telefonieren.').get());
		entries.push(new Builder().id('').thema(thema).entry('vorn').example('Das Auto ist vorn ein bisschen kaputt.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Vorname, -n').example('Wie ist dein Vorname?').get());
		entries.push(new Builder().id('').thema(thema).entry('r Vorschlag, ä, -e').example('Mach doch einen Vorschlag fürs Wochenende!').get());
		entries.push(new Builder().id('').thema(thema).entry('vorschlagen').example(['Darf ich etwas vorschlagen?', 'Ich schlage vor, wir machen eine Pause.']).get());
		entries.push(new Builder().id('').thema(thema).entry('vorsichtig').example('Seid vorsichtig auf der Straße! Es liegt viel Schnee!').get());
		entries.push(new Builder().id('').thema(thema).entry('vorstellen (sich)').example('Stell dich bitte mit vier Sätzen vor: Name, Alter, Wohnort, Schule.').get());
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'W'];
		entries.push(new Builder().id('').thema(thema).entry('wach').example('Ich war schon um sechs Uhr wach.').get());
		entries.push(new Builder().id('').thema(thema).entry('wählen').example(['Wählen Sie eine Nummer.', 'Haben Sie schon ein Getränk gewählt?']).get());
		entries.push(new Builder().id('').thema(thema).entry('wahr').example(['Die Geschichte ist sicher nicht wahr.', 'Das schmeckt gut, nicht wahr?']).get());
		entries.push(new Builder().id('').thema(thema).entry('wahrscheinlich').example(['Wo ist Konrad?', '– Er ist wahrscheinlich noch im Büro.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Wald, ä, -er').example(['Gehst du gern im Wald spazieren?', '– Ja, die Bäume gefallen mir.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wandern').example('Am Wochenende wandern wir in den Bergen.').get());
		entries.push(new Builder().id('').thema(thema).entry('wann').example('Wann hast du Geburtstag?').get());
		entries.push(new Builder().id('').thema(thema).entry('warm').example('Im Sommer ist es hier sehr warm.').get());
		entries.push(new Builder().id('').thema(thema).entry('warten').example(['Ich warte auf meine Eltern.', 'Kannst du kurz warten? Ich bin gleich fertig.']).get());
		entries.push(new Builder().id('').thema(thema).entry('warum').example('Warum antwortest du nicht?').get());
		entries.push(new Builder().id('').thema(thema).entry('was').example('Was ist das?').get());
		entries.push(new Builder().id('').thema(thema).entry('waschen').example(['Ich will meine Haare waschen.', 'Ich muss meine Kleider noch waschen.']).get());
		entries.push(new Builder().id('').thema(thema).entry('was für ein, e').example('Was für eine Bluse möchten Sie?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wasser (Sg.)').example(['Das Wasser im See ist so kalt.', 'Gib mir bitte ein Glas Mineralwasser.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wechseln').example(['Ich möchte Dollar in Euro wechseln.', 'Können wir das Thema wechseln?']).get());
		entries.push(new Builder().id('').thema(thema).entry('wecken').example('Meine Mutter weckt mich um 7.30 Uhr.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Weg, -e').example('Können Sie mir den Weg zum Bahnhof zeigen?').get());
		entries.push(new Builder().id('').thema(thema).entry('wegbringen').example('Kannst du bitte die Post wegbringen?').get());
		entries.push(new Builder().id('').thema(thema).entry('wegfahren').example('Leider muss ich jetzt wegfahren.').get());
		entries.push(new Builder().id('').thema(thema).entry('weggehen').example('Am Abend möchte ich noch mit meinen Freunden weggehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('wehtun').example('Mein Kopf tut so weh.').get());
		entries.push(new Builder().id('').thema(thema).entry('weil').example('Er kommt heute nicht, weil er lernen muss.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Wein, -e').example('Möchtest du ein Glas Wein?').get());
		entries.push(new Builder().id('').thema(thema).entry('weinen').example('Ich habe geweint, weil ich sehr traurig bin.').get());
		entries.push(new Builder().id('').thema(thema).entry('weit').example('Wir fahren zum See, das ist nicht weit von hier.').get());
		entries.push(new Builder().id('').thema(thema).entry('weiter').example('Lies bitte weiter!').get());
		entries.push(new Builder().id('').thema(thema).entry('weitermachen').example('Können wir jetzt weitermachen?').get());
		entries.push(new Builder().id('').thema(thema).entry('weiterspielen').example('Spielt doch weiter!').get());
		entries.push(new Builder().id('').thema(thema).entry('welcher, e, s').example('Welche CD möchtest du?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Welt, -en').example(['Er ist in der ganzen Welt bekannt.', 'Es gibt viele Probleme auf der Welt.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wenig, -e').example('Ich habe heute wenig Zeit.').get());
		entries.push(new Builder().id('').thema(thema).entry('wenigstens').example('Du musst aber wenigstens anrufen.').get());
		entries.push(new Builder().id('').thema(thema).entry('wenn').example('Ich rufe dich an, wenn ich Zeit habe.').get());
		entries.push(new Builder().id('').thema(thema).entry('wer (wen, wem)').example(['Wer kommt mit?', 'Wen möchtest du einladen?', 'Wem gehört die Tasche?']).get());
		entries.push(new Builder().id('').thema(thema).entry('werden').example('Ich möchte Arzt werden.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Wettbewerb, -e').example('Das ist ein Wettbewerb: Man muss eine Frage richtig beantworten, dann kann man eine Reise gewinnen.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wetter (Sg.)').example('Das Wetter war schlecht. Es hat nur geregnet.').get());
		entries.push(new Builder().id('').thema(thema).entry('wichtig').example(['Ich glaube, die Frage ist wichtig.', 'Das ist wichtig für mich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wie (vgl. Grammatik)').example(['Wie heißt das auf Deutsch?', 'Er schreibt wie ein Kind.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wieder').example(['Ich möchte wieder nach Deutschland fahren.', 'Sie ist jetzt wieder gesund.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wiederholen').example('Ich verstehe es nicht. Können Sie das bitte wiederholen?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wiedersehen, -').example('Auf Wiedersehen.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Wiese, -n').example(['Keinen Müll auf der Wiese lassen!', 'Wir spielen auf der Wiese Fußball.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wie viel, -e').example('Wie viel kostet das?').get());
		entries.push(new Builder().id('').thema(thema).entry('willkommen').example('Willkommen bei uns!').get());
		entries.push(new Builder().id('').thema(thema).entry('r Wind, -e').example('Hier gibt es immer viel Wind, meistens kommt er von Westen.').get());
		entries.push(new Builder().id('').thema(thema).entry('wir').example('Wir haben eine neue Lehrerin.').get());
		entries.push(new Builder().id('').thema(thema).entry('wirklich').example(['Willst du das wirklich kaufen?', 'Es ist wirklich so.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wissen').example(['Weißt du die Antwort?', '– Ich weiß sie nicht.']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Witz, -e').example('Er erzählt gern Witze. Wir müssen immer lachen.').get());
		entries.push(new Builder().id('').thema(thema).entry('witzig').example('Das Buch ist so witzig! Ich musste oft lachen.').get());
		entries.push(new Builder().id('').thema(thema).entry('wo').example(['Wo wohnt ihr?', '– In Berlin.']).get());
		entries.push(new Builder().id('').thema(thema).entry('woher').example(['Woher kommst du?', '– Aus Frankreich.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wohin').example(['Wohin fährt der Bus?', '– Nach Leipzig.']).get());
		entries.push(new Builder().id('').thema(thema).entry('wohnen').example('Wo wohnst du? Ich wohne in der Gartenstraße.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Wohnung, -en').example('Unsere Wohnung hat drei Zimmer.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wohnzimmer, -').example('Ich sehe im Wohnzimmer fern.').get());
		entries.push(new Builder().id('').thema(thema).entry('wollen').example('Willst du meine Freunde kennenlernen?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Wolke, -n').example('Am Himmel sind viele Wolken. Es regnet bald.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Wort, -e, ö, -er').example(['Ich kenne das Wort nicht.', 'Wie viele Wörter hat dein Brief?']).get());
		entries.push(new Builder().id('').thema(thema).entry('wunderbar').example('Das Essen ist wunderbar.').get());
		entries.push(new Builder().id('').thema(thema).entry('wünschen').example(['Ich wünsche dir schöne Ferien.', 'Ich wünsche dir viel Glück!']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Wurst, ü, -e').example(['Morgens esse ich keine Wurst.', 'Kann ich ein Wurstbrot haben?']).get());
		entries.push(new Builder().id('').thema(thema).entry('s Würstchen, -').example('Ich möchte zwei Würstchen mit Brot.').get());
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Z'];
		entries.push(new Builder().id('').thema(thema).entry('r Zahn, ä, -e').example('Mein Zahn tut weh.').get());
		entries.push(new Builder().id('').thema(thema).entry('e Zahnspange, -n').example('Sie trägt eine Zahnspange.').get());
		entries.push(new Builder().id('').thema(thema).entry('zeichnen').example('Wir haben ein Bild gezeichnet.').get());
		entries.push(new Builder().id('').thema(thema).entry('zeigen').example('Können Sie mir den Weg zeigen?').get());
		entries.push(new Builder().id('').thema(thema).entry('e Zeit, -en').example(['Wann hast du Zeit für mich?', 'Ich kann nicht kommen. Ich habe keine Zeit.']).get());
		entries.push(new Builder().id('').thema(thema).entry('e Zeitung, -en').example('Meine Mutter liest am Morgen die Zeitung.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Zelt, -e').example('Früher haben wir im Zelt Ferien gemacht.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Zentrum, -en').example('Im Zentrum ist heute eine Fußgängerzone.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Zettel, -').example('Wer hat diesen Zettel geschrieben?').get());
		entries.push(new Builder().id('').thema(thema).entry('s Zeugnis, -se').example('Mein Zeugnis war ziemlich gut.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Ziel, -e').example('Ich war als Erster am Ziel.').get());
		entries.push(new Builder().id('').thema(thema).entry('s Zimmer, -').example('Wie groß ist die Wohnung? Es sind drei Zimmer.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Zirkus, -se').example('Der Zirkus ist heute in der Stadt.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Zoo (Sg.)').example('Ich liebe Tiere, ich gehe gern in den Zoo.').get());
		entries.push(new Builder().id('').thema(thema).entry('zu').example(['zu groß', 'zum Frühstück', 'zum Zahnarzt', 'zur Post', 'zum Geburtstag', 'zu Hause']).get());
		entries.push(new Builder().id('').thema(thema).entry('r Zucker (Sg.)').example('Ich trinke meinen Kaffee mit Zucker.').get());
		entries.push(new Builder().id('').thema(thema).entry('zuerst').example('Sagen Sie bitte zuerst den Vornamen.').get());
		entries.push(new Builder().id('').thema(thema).entry('zufrieden').example('Ich bin mit meiner Note zufrieden.').get());
		entries.push(new Builder().id('').thema(thema).entry('r Zug, ü, -e').example('Wir fahren mit dem Zug zu meiner Tante.').get());
		entries.push(new Builder().id('').thema(thema).entry('zuhören').example('Hör jetzt zu! Das ist wichtig!').get());
		entries.push(new Builder().id('').thema(thema).entry('zuletzt').example('Wann hast du ihn zuletzt gesehen? Im letzten Sommer.').get());
		entries.push(new Builder().id('').thema(thema).entry('zumachen').example('Mach die Tür bitte zu!').get());
		entries.push(new Builder().id('').thema(thema).entry('zum Beispiel').example('z. B.').get());
		entries.push(new Builder().id('').thema(thema).entry('zurück').example('Wir fahren mit dem Zug, zurück nehmen wir den Bus.').get());
		entries.push(new Builder().id('').thema(thema).entry('zurückkommen').example('Ich bin gestern aus dem Urlaub zurückgekommen.').get());
		entries.push(new Builder().id('').thema(thema).entry('zusammen').example('Wir machen zusammen Hausaufgaben.').get());
		entries.push(new Builder().id('').thema(thema).entry('zu sein').example('Die Bücherei ist in den Ferien zu.').get());
		entries.push(new Builder().id('').thema(thema).entry('zwischen').example(['Der Supermarkt ist zwischen dem Rathaus und der Post.', 'Zwischen zwölf und zwei Uhr bin ich nicht da.']).get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA2Service;