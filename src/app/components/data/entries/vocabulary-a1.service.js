class VocabularyA1Service {

    /*@ngInject*/
    constructor(VocabularyBuilder) {
        this.createEntries(VocabularyBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createZahlenEntries(Builder));
        this.addEntries(this.createDatumEntries(Builder));
        this.addEntries(this.createUhrzeitEntries(Builder));
        this.addEntries(this.createZeitmasseEntries(Builder));
        this.addEntries(this.createWocheEntries(Builder));
        this.addEntries(this.createTagEntries(Builder));
        this.addEntries(this.createMonatEntries(Builder));
        this.addEntries(this.createJahrEntries(Builder));
        this.addEntries(this.createWaehrungenEntries(Builder));
        this.addEntries(this.createMasseUndGewichteEntries(Builder));
        this.addEntries(this.createLaenderEntries(Builder));
        this.addEntries(this.createFarbenEntries(Builder));
        this.addEntries(this.createHimmelsrichtungenEntries(Builder));
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

    createZahlenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Zahlen'];
        entries.push(new Builder().thema(thema).entry('Zahl').get());
        entries.push(new Builder().thema(thema).entry('eins').alternative('1').get());
        entries.push(new Builder().thema(thema).entry('zwei').alternative('2').get());
        entries.push(new Builder().thema(thema).entry('drei').alternative('3').get());
        entries.push(new Builder().thema(thema).entry('vier').alternative('4').get());
        entries.push(new Builder().thema(thema).entry('fünf').alternative('5').get());
        entries.push(new Builder().thema(thema).entry('sechs').alternative('6').get());
        entries.push(new Builder().thema(thema).entry('sieben').alternative('7').get());
        entries.push(new Builder().thema(thema).entry('acht').alternative('8').get());
        entries.push(new Builder().thema(thema).entry('neun').alternative('9').get());
        entries.push(new Builder().thema(thema).entry('zehn').alternative('10').get());
        entries.push(new Builder().thema(thema).entry('elf').alternative('11').get());
        entries.push(new Builder().thema(thema).entry('zwölf').alternative('12').get());
        entries.push(new Builder().thema(thema).entry('dreizehn').alternative('13').get());
        entries.push(new Builder().thema(thema).entry('vierzehn').alternative('14').get());
        entries.push(new Builder().thema(thema).entry('fünfzehn').alternative('15').get());
        entries.push(new Builder().thema(thema).entry('sechzehn').alternative('16').get());
        entries.push(new Builder().thema(thema).entry('siebzehn').alternative('17').get());
        entries.push(new Builder().thema(thema).entry('achtzehn').alternative('18').get());
        entries.push(new Builder().thema(thema).entry('neunzehn').alternative('19').get());
        entries.push(new Builder().thema(thema).entry('zwanzig').alternative('20').get());
        entries.push(new Builder().thema(thema).entry('einundzwanzig').alternative('21').get());
        entries.push(new Builder().thema(thema).entry('dreißig').alternative('30').get());
        entries.push(new Builder().thema(thema).entry('vierzig').alternative('40').get());
        entries.push(new Builder().thema(thema).entry('fünfzig').alternative('50').get());
        entries.push(new Builder().thema(thema).entry('sechzig').alternative('60').get());
        entries.push(new Builder().thema(thema).entry('siebzig').alternative('70').get());
        entries.push(new Builder().thema(thema).entry('achtzig').alternative('80').get());
        entries.push(new Builder().thema(thema).entry('neunzig').alternative('90').get());
        entries.push(new Builder().thema(thema).entry('(ein)hundert').alternative('100').get());
        entries.push(new Builder().thema(thema).entry('hunderteins').alternative('101').get());
        entries.push(new Builder().thema(thema).entry('zweihundert').alternative('200').get());
        entries.push(new Builder().thema(thema).entry('(ein)tausend').alternative('1000').get());
        entries.push(new Builder().thema(thema).entry('eine Million, en').alternative("1'000'000").get());
        entries.push(new Builder().thema(thema).entry('eine Milliarde, en').alternative("1'000'000'000").get());
        entries.push(new Builder().thema(thema).entry('das/der/die erste').get());
        entries.push(new Builder().thema(thema).entry('zweite').get());
        entries.push(new Builder().thema(thema).entry('dritte').get());
        entries.push(new Builder().thema(thema).entry('vierte').get());
        entries.push(new Builder().thema(thema).entry('usw.').get());
        return entries;
    }

    createDatumEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Datum'];
        entries.push(new Builder().thema(thema).entry('Datum').get());
        entries.push(new Builder().thema(thema).entry('ein halb; halb').alternative('1/2').get());
        entries.push(new Builder().thema(thema).entry('ein Vertiel; Viertel ...').alternative('1/4').get());
        entries.push(new Builder().thema(thema).entry('neunzehnhundertneunundneunzig').alternative('1999').get());
        entries.push(new Builder().thema(thema).entry('zweitausendvierzehn').alternative('2014').get());
        entries.push(new Builder().thema(thema).entry('heute ist der erste März/der erste Dritte').alternative('heute ist der 1. März').get());
        entries.push(new Builder().thema(thema).entry('Berlin, zwölfter Vierter zweitausendzwei').alternative('Berlin, 12. April 2002').get());
        return entries;
    }

    createUhrzeitEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Uhrzeit'];
        entries.push(new Builder().thema(thema).entry('Uhrzeit').get());
        entries.push(new Builder().thema(thema).entry('0.03 Uhr').alternative('null Uhr drei').get());
        entries.push(new Builder().thema(thema).entry('7.15 Uhr').alternative('sieben Uhr fünfzehn').get());
        entries.push(new Builder().thema(thema).entry('13.17 Uhr').alternative('dreizehn Uhr siebzehn').get());
        entries.push(new Builder().thema(thema).entry('24.00 Uhr').alternative('vierundzwanzig Uhr').get());
        entries.push(new Builder().thema(thema).entry('ein Uhr').get());
        entries.push(new Builder().thema(thema).entry('fünf Minuten vor/nach eins (ein Uhr)').get());
        entries.push(new Builder().thema(thema).entry('Viertel vor/nach zwei (zwei Uhr)').get());
        entries.push(new Builder().thema(thema).entry('halb drei').get());
        return entries;
    }

    createZeitmasseEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Zeitmaße, Zeitangaben'];
        entries.push(new Builder().thema(thema).entry('Zeitmaß').get());
        entries.push(new Builder().thema(thema).entry('Zeitangabe').get());
        entries.push(new Builder().thema(thema).entry('die Sekunde, -n').get());
        entries.push(new Builder().thema(thema).entry('die Minute, -n').get());
        entries.push(new Builder().thema(thema).entry('die Stunde, -n').get());
        entries.push(new Builder().thema(thema).entry('der Tag, -e').get());
        entries.push(new Builder().thema(thema).entry('die Woche, -e').get());
        entries.push(new Builder().thema(thema).entry('das Jahr, -e').get());
        return entries;
    }

    createWocheEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Woche/Wochentage'];
        entries.push(new Builder().thema(thema).entry('Woche').get());
        entries.push(new Builder().thema(thema).entry('der Wochentag, -e').get());
        entries.push(new Builder().thema(thema).entry('der Sonntag').get());
        entries.push(new Builder().thema(thema).entry('der Montag').get());
        entries.push(new Builder().thema(thema).entry('der Dienstag').get());
        entries.push(new Builder().thema(thema).entry('der Mittwoch').get());
        entries.push(new Builder().thema(thema).entry('der Donnerstag').get());
        entries.push(new Builder().thema(thema).entry('der Freitag').get());
        entries.push(new Builder().thema(thema).entry('der Samstag/Sonnabend').get());
        entries.push(new Builder().thema(thema).entry('das Wochenende').get());
        entries.push(new Builder().thema(thema).entry('am Wochenende').get());
        return entries;
    }

    createTagEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Tag/Tageszeiten'];
        entries.push(new Builder().thema(thema).entry('Tag').get());
        entries.push(new Builder().thema(thema).entry('Tageszeit').get());
        entries.push(new Builder().thema(thema).entry('der Tag').get());
        entries.push(new Builder().thema(thema).entry('der Morgen').get());
        entries.push(new Builder().thema(thema).entry('der Vormittag,-e').get());
        entries.push(new Builder().thema(thema).entry('der Mittag').get());
        entries.push(new Builder().thema(thema).entry('der Nachmittag,-e').get());
        entries.push(new Builder().thema(thema).entry('der Abend,-e').get());
        entries.push(new Builder().thema(thema).entry('die Nacht, ̈-e').get());
        return entries;
    }

    createMonatEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Monat/Monatsnamen'];
        entries.push(new Builder().thema(thema).entry('Monat').get());
        entries.push(new Builder().thema(thema).entry('Monatsname').get());
        entries.push(new Builder().thema(thema).entry('der Januar').get());
        entries.push(new Builder().thema(thema).entry('der Februar').get());
        entries.push(new Builder().thema(thema).entry('der März').get());
        entries.push(new Builder().thema(thema).entry('der April').get());
        entries.push(new Builder().thema(thema).entry('der Mai').get());
        entries.push(new Builder().thema(thema).entry('der Juni').get());
        entries.push(new Builder().thema(thema).entry('der Juli').get());
        entries.push(new Builder().thema(thema).entry('der August').get());
        entries.push(new Builder().thema(thema).entry('der September').get());
        entries.push(new Builder().thema(thema).entry('der Oktober').get());
        entries.push(new Builder().thema(thema).entry('der November').get());
        entries.push(new Builder().thema(thema).entry('der Dezember').get());
        return entries;
    }

    createJahrEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Jahr/Jahreszeiten'];
        entries.push(new Builder().thema(thema).entry('Jahr').get());
            entries.push(new Builder().thema(thema).entry('Jahreszeit').get());
        entries.push(new Builder().thema(thema).entry('der Frühling/das Frühjahr').get());
        entries.push(new Builder().thema(thema).entry('der Sommer').get());
        entries.push(new Builder().thema(thema).entry('der Herbst').get());
        entries.push(new Builder().thema(thema).entry('der Winter').get());
        return entries;
    }

    createWaehrungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Währungen'];
        entries.push(new Builder().thema(thema).entry('Währung').get());
        entries.push(new Builder().thema(thema).entry('1 Euro').get());
        entries.push(new Builder().thema(thema).entry('100 Cent').get());
        return entries;
    }

    createMasseUndGewichteEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Maße und Gewichte'];
        entries.push(new Builder().thema(thema).entry('Maße').get());
        entries.push(new Builder().thema(thema).entry('Gewicht').get());
        entries.push(new Builder().thema(thema).entry('ein Meter').alternative('1 m').get());
        entries.push(new Builder().thema(thema).entry('ein Zentimeter').alternative('1 cm').get());
        entries.push(new Builder().thema(thema).entry('ein Meter fünfzehn').alternative('1,15 m').get());
        entries.push(new Builder().thema(thema).entry('zweihundert Kilometer').alternative('200 km').get());
        entries.push(new Builder().thema(thema).entry('ein Quadratmeter').alternative('1 m2').get());
        entries.push(new Builder().thema(thema).entry('ein Grad unter Null/minus ein Grad').alternative('– 1°').get());
        entries.push(new Builder().thema(thema).entry('vier Grad über Null/plus vier Grad').alternative('+ 4°').get());
        entries.push(new Builder().thema(thema).entry('ein Prozent').alternative('1 %').get());
        entries.push(new Builder().thema(thema).entry('ein Liter').alternative('1 l').get());
        entries.push(new Builder().thema(thema).entry('ein Gramm').alternative('1 g').get());
        entries.push(new Builder().thema(thema).entry('ein Pfund').alternative('500 g').get());
        entries.push(new Builder().thema(thema).entry('ein Kilo(gramm)').alternative('1 kg').get());
        return entries;
    }

    createLaenderEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Länder/Ländernamen/Nationalitäten'];
        entries.push(new Builder().thema(thema).entry('Land').get());
        entries.push(new Builder().thema(thema).entry('Ländername').get());
        entries.push(new Builder().thema(thema).entry('Nationalität').get());
        entries.push(new Builder().thema(thema).entry('Deutschland').get());
        entries.push(new Builder().thema(thema).entry('der/die Deutsche, -n').get());
        entries.push(new Builder().thema(thema).entry('ein Deutscher, eine Deutsche, Deutsche').get());
        entries.push(new Builder().thema(thema).entry('deutsch').get());
        entries.push(new Builder().thema(thema).entry('Europa').get());
        entries.push(new Builder().thema(thema).entry('Europäer').get());
        entries.push(new Builder().thema(thema).entry('europäisch').get());
        entries.push(new Builder().thema(thema).entry('Herkunft').get());
        entries.push(new Builder().thema(thema).entry('Bewohner').get());
        entries.push(new Builder().thema(thema).entry('die Schweiz').get());
        entries.push(new Builder().thema(thema).entry('der Schweizer, die Schweizerin').get());
        return entries;
    }

    createFarbenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Farben'];
        entries.push(new Builder().thema(thema).entry('Farbe').get());
        entries.push(new Builder().thema(thema).entry('schwarz').get());
        entries.push(new Builder().thema(thema).entry('grau').get());
        entries.push(new Builder().thema(thema).entry('blau').get());
        entries.push(new Builder().thema(thema).entry('grün').get());
        entries.push(new Builder().thema(thema).entry('weiß').get());
        entries.push(new Builder().thema(thema).entry('rot').get());
        entries.push(new Builder().thema(thema).entry('gelb').get());
        entries.push(new Builder().thema(thema).entry('braun').get());
        return entries;
    }

    createHimmelsrichtungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Himmelsrichtungen'];
        entries.push(new Builder().thema(thema).entry('Himmelsrichtung').get());
        entries.push(new Builder().thema(thema).entry('der Norden').get());
        entries.push(new Builder().thema(thema).entry('der Süden').get());
        entries.push(new Builder().thema(thema).entry('der Westen').get());
        entries.push(new Builder().thema(thema).entry('der Westen').get());
        return entries;
    }

    createAEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'A'];
        entries.push(new Builder().thema(thema).entry('ab').example('Ab morgen muss ich arbeiten.').get());
        entries.push(new Builder().thema(thema).entry('aber').example('Ich bin oft im Büro, aber nur für wenige Stunden.').get());
        entries.push(new Builder().thema(thema).entry('abfahren').example('Wir fahren um zwölf Uhr ab.').get());
        entries.push(new Builder().thema(thema).entry('die Abfahrt').example('Vor der Abfahrt rufe ich an.').get());
        entries.push(new Builder().thema(thema).entry('abgeben').example('Ich muss meine Schlüssel abgeben.').get());
        entries.push(new Builder().thema(thema).entry('abholen').example(['Wann kann ich den Schrank bei dir abholen?', 'Wir müssen noch meinen Bruder abholen.']).get());
        entries.push(new Builder().thema(thema).entry('der Absender').example('Da ist ein Brief für dich ohne Absender.').get());
        entries.push(new Builder().thema(thema).entry('Achtung').example('Achtung! Das dürfen Sie nicht tun.').get());
        entries.push(new Builder().thema(thema).entry('die Adresse,-en').example('Können Sie mir seine Adresse sagen?').get());
        entries.push(new Builder().thema(thema).entry('all-').example(['Alles Gute!', 'Das ist alles.', 'Sind alle da?', 'Alle Freunde kommen.', 'Hast du alles?']).get());
        entries.push(new Builder().thema(thema).entry('allein').example('Er kommt allein.').get());
        entries.push(new Builder().thema(thema).entry('also').example(['Also, es ist so: ...', 'Er hat Zeit, also muss er uns helfen.']).get());
        entries.push(new Builder().thema(thema).entry('alt').example(['Wie alt sind Sie?', 'Sie sehen aber nicht so alt aus.', 'Mein Auto ist schon sehr alt.', 'Wir wohnen in einem sehr alten Haus.', 'Köln ist eine alte Stadt.']).get());
        entries.push(new Builder().thema(thema).entry('das Alter').example('Alter: 26 Jahre.').get());
        entries.push(new Builder().thema(thema).entry('an').example(['Fahren Sie an der nächsten Straße nach rechts.', 'Wir treffen uns am Bahnhof.', 'Am nächsten Montag geht es leider nicht.']).get());
        entries.push(new Builder().thema(thema).entry('anbieten').example('Was darf ich dir anbieten?').get());
        entries.push(new Builder().thema(thema).entry('das Angebot, -e').example('Heute sind Sportschuhe im Angebot.').get());
        entries.push(new Builder().thema(thema).entry('ander-').example(['WiIlst du diese Jacke?\n– Nein, ich möchte die andere.']).get());
        entries.push(new Builder().thema(thema).entry('anfangen').example(['Hier fängt die Bahnhofstraße an.', 'Der Unterricht fängt gleich an.']).get());
        entries.push(new Builder().thema(thema).entry('der Anfang').example(['Sie wohnt am Anfang der Straße.', 'Wir machen Anfang Juli Urlaub.']).get());
        entries.push(new Builder().thema(thema).entry('anklicken').example('Da musst du dieses Wort anklicken.').get());
        entries.push(new Builder().thema(thema).entry('ankommen').example('Wann kommt dieser Zug in Hamburg an?').get());
        entries.push(new Builder().thema(thema).entry('die Ankunft').example('Auf diesem Plan steht nur die Ankunft(-szeit) der Züge.').get());
        entries.push(new Builder().thema(thema).entry('ankreuzen').example('Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen.').get());
        entries.push(new Builder().thema(thema).entry('anmachen').example('Mach bitte das Licht an!').get());
        entries.push(new Builder().thema(thema).entry('(sich) anmelden').example('Wo kann ich mich anmelden?').get());
        entries.push(new Builder().thema(thema).entry('die Anmeldung').example('Eine Anmeldung für diesen Kurs ist nicht mehr möglich.').get());
        entries.push(new Builder().thema(thema).entry('die Anrede').example('Schreiben Sie auch eine Anrede und einen Gruß.').get());
        entries.push(new Builder().thema(thema).entry('anrufen').example(['Kann man Sie anrufen?', 'Peter ruft kurz seine Freundin an.']).get());
        entries.push(new Builder().thema(thema).entry('der Anruf, -e').example('Sie bekommt viele Anrufe auf ihrem Handy.').get());
        entries.push(new Builder().thema(thema).entry('der Anrufbeantworter').example('Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.').get());
        entries.push(new Builder().thema(thema).entry('die Ansage, -n').example('Hören Sie die Ansagen.').get());
        entries.push(new Builder().thema(thema).entry('der Anschluss').example(['In Mannheim haben Sie Anschluss nach Saarbrücken.', 'Ist das die Anmeldung für einen Telefonanschluss?']).get());
        entries.push(new Builder().thema(thema).entry('an sein').example('Heute Nacht war das Licht an.').get());
        entries.push(new Builder().thema(thema).entry('antworten').example('Er antwortet nicht.').get());
        entries.push(new Builder().thema(thema).entry('die Antwort, -en').example('Er gibt leider keine Antwort.').get());
        entries.push(new Builder().thema(thema).entry('die Anzeige, -n').example('Ich habe Ihre Anzeige in der Zeitung gelesen.').get());
        entries.push(new Builder().thema(thema).entry('(sich) anziehen').example('Ich muss mich noch anziehen.').get());
        entries.push(new Builder().thema(thema).entry('das Apartment, -s').example('Wir haben ein Apartment gemietet.').get());
        entries.push(new Builder().thema(thema).entry('der Apfel, -Ä').example('Ein Pfund Äpfel bitte.').get());
        entries.push(new Builder().thema(thema).entry('der Appetit').example('Guten Appetit!').get());
        entries.push(new Builder().thema(thema).entry('arbeiten').example('Wo arbeiten Sie?').get());
        entries.push(new Builder().thema(thema).entry('die Arbeit, -en').example('Mein Bruder sucht Arbeit.').get());
        entries.push(new Builder().thema(thema).entry('arbeitslos').example('Es gibt bei uns viele Leute, die schon lange arbeitslos sind.').get());
        entries.push(new Builder().thema(thema).entry('der Arbeitsplatz, -ä, e').example('An meinem Arbeitsplatz fehlt ein Drucker.').get());
        entries.push(new Builder().thema(thema).entry('der Arm, -e').example('Mein Arm tut weh.').get());
        entries.push(new Builder().thema(thema).entry('der Arzt, -Ä, e').example('Morgen habe ich einen Termin bei meiner Ärztin.').get());
        entries.push(new Builder().thema(thema).entry('auch').example('Ich bin auch Spanier.').get());
        entries.push(new Builder().thema(thema).entry('auf').example(['Die Kinder spielen auf der Straße.', 'Auf Wiedersehen.', 'Wie heißt das auf Deutsch?']).get());
        entries.push(new Builder().thema(thema).entry('die Aufgabe, -n').example('Das ist eine schwere Aufgabe.').get());
        entries.push(new Builder().thema(thema).entry('aufhören').example(['Der Kurs hört in einer Woche auf.', 'Hier hört die Bahnhofstraße auf.']).get());
        entries.push(new Builder().thema(thema).entry('auf sein').example('Du brauchst den Schlüssel nicht. Die Wohnung ist auf.').get());
        entries.push(new Builder().thema(thema).entry('aufstehen').example(['Ich muss immer um vier Uhr aufstehen.', 'Soll ich aufstehen?']).get());
        entries.push(new Builder().thema(thema).entry('der Aufzug, -ü, e').example('In diesem Haus gibt es keinen Aufzug.').get());
        entries.push(new Builder().thema(thema).entry('das Auge, -n').example('Er hat blaue Augen.').get());
        entries.push(new Builder().thema(thema).entry('aus').example('Er kommt aus Brasilien.').get());
        entries.push(new Builder().thema(thema).entry('der Ausflug').example('Morgen machen wir einen Ausflug nach Heidelberg.').get());
        entries.push(new Builder().thema(thema).entry('ausfüllen').example('Füllen Sie bitte dieses Formular aus.').get());
        entries.push(new Builder().thema(thema).entry('der Ausgang').example('Wo ist der Ausgang?').get());
        entries.push(new Builder().thema(thema).entry('die Auskunft, -ü, e').example('Können Sie mir eine Auskunft geben?').get());
        entries.push(new Builder().thema(thema).entry('das Ausland').example('Fahren Sie ins Ausland?').get());
        entries.push(new Builder().thema(thema).entry('der Ausländer, -').example('Sind Sie Ausländerin?').get());
        entries.push(new Builder().thema(thema).entry('ausländisch').example('Leider habe ich nur ausländisches Geld.').get());
        entries.push(new Builder().thema(thema).entry('ausmachen').example('Mach bitte das Licht aus!').get());
        entries.push(new Builder().thema(thema).entry('die Aussage, -n').example('Ist die Aussage richtig oder falsch?').get());
        entries.push(new Builder().thema(thema).entry('aussehen').example('Das sieht schön aus.').get());
        entries.push(new Builder().thema(thema).entry('aus sein').example(['Das Licht ist aus.', 'Die Schule ist aus.']).get());
        entries.push(new Builder().thema(thema).entry('aussteigen').example('Wo muss ich aussteigen?').get());
        entries.push(new Builder().thema(thema).entry('der Ausweis').example('Hier ist mein Ausweis.').get());
        entries.push(new Builder().thema(thema).entry('(sich) ausziehen').example('Zieh die Schuhe aus, bitte!').get());
        entries.push(new Builder().thema(thema).entry('das Auto, -s').example('Er kommt mit dem Auto.').get());
        entries.push(new Builder().thema(thema).entry('die Autobahn, -en').example('Wo geht‘s hier bitte zur Autobahn?').get());
        entries.push(new Builder().thema(thema).entry('der Automat').example('Die Fahrkarten gibt es nur am Automaten.').get());
        entries.push(new Builder().thema(thema).entry('automatisch').example('Du musst nichts machen. Das geht automatisch.').get());
        return entries;
    }

    createBEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'B'];
        entries.push(new Builder().thema(thema).entry('das Baby, -s').example('Mein Kind ist noch ein Baby.').get());
        entries.push(new Builder().thema(thema).entry('die Bäckerei').example('Ich geh mal schnell zur Bäckerei.').get());
        entries.push(new Builder().thema(thema).entry('das Bad').example('Wir haben kein großes Bad.').get());
        entries.push(new Builder().thema(thema).entry('baden').example('Ich bade nicht so gern, ich dusche lieber.').get());
        entries.push(new Builder().thema(thema).entry('die Bahn').example(['Wir fahren lieber mit der Bahn.', 'Ich nehme die nächste Bahn.']).get());
        entries.push(new Builder().thema(thema).entry('der Bahnhof').example('Komme ich hier zum Bahnhof?').get());
        entries.push(new Builder().thema(thema).entry('der Bahnsteig').example('Auf welchem Bahnsteig fährt der Zug?').get());
        entries.push(new Builder().thema(thema).entry('bald').example('Ich komme bald.').get());
        entries.push(new Builder().thema(thema).entry('der Balkon').example('Die Wohnung hat auch einen kleinen Balkon.').get());
        entries.push(new Builder().thema(thema).entry('die Banane, -n').example('Drei Bananen, bitte!').get());
        entries.push(new Builder().thema(thema).entry('die Bank').example(['Die Bank schließt schon um vier Uhr.', 'Er sitzt im Park auf einer Bank und liest.']).get());
        entries.push(new Builder().thema(thema).entry('bar').example('Muss ich bar zahlen oder geht‘s auch mit Karte?').get());
        entries.push(new Builder().thema(thema).entry('der Bauch').example('Seit gestern tut mir der Bauch weh.').get());
        entries.push(new Builder().thema(thema).entry('der Baum, -ä, e').example('Vorsicht, fahr nicht an den Baum!').get());
        entries.push(new Builder().thema(thema).entry('der Beamte, -n').example('Fragen Sie die Beamtin an Schalter acht!').get());
        entries.push(new Builder().thema(thema).entry('bedeuten').example('Was bedeutet das Wort?').get());
        entries.push(new Builder().thema(thema).entry('beginnen').example('Das Spiel beginnt um 15.30 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('bei').example(['Offenbach liegt bei Frankfurt.', 'Ich wohne bei meinen Eltern.', 'Bei uns regnet es heute.', 'Er arbeitet bei der Polizei.']).get());
        entries.push(new Builder().thema(thema).entry('beide').example(['Beide Eltern arbeiten.', 'Wir kommen beide.']).get());
        entries.push(new Builder().thema(thema).entry('das Bein, -e').example('Mein rechtes Bein tut weh.').get());
        entries.push(new Builder().thema(thema).entry('das Beispiel, -e').example('Kannst du mir ein Beispiel sagen?').get());
        entries.push(new Builder().thema(thema).entry('zum Beispiel/z. B.').example('Viele meiner Verwandten, z. B. meine beiden Brüder, arbeiten auch hier.').get());
        entries.push(new Builder().thema(thema).entry('bekannt').example('Picasso ist sehr bekannt.').get());
        entries.push(new Builder().thema(thema).entry('der/die Bekannte, -n').example('Ein Bekannter von mir heißt Klaus.').get());
        entries.push(new Builder().thema(thema).entry('bekommen').example(['Haben Sie meinen Brief bekommen?', 'Was bekommen Sie?', 'Dieses Medikament bekommen Sie in der Apotheke.']).get());
        entries.push(new Builder().thema(thema).entry('benutzen').example('Die Aufzüge bitte nicht benutzen!').get());
        entries.push(new Builder().thema(thema).entry('der Beruf, -e').example(['Was sind Sie von Beruf?', 'Was ist Ihr Beruf?']).get());
        entries.push(new Builder().thema(thema).entry('besetzt').example(['Die Nummer ist immer besetzt.', 'Der Platz ist besetzt.']).get());
        entries.push(new Builder().thema(thema).entry('besichtigen').example('Ich möchte gern den Dom besichtigen.').get());
        entries.push(new Builder().thema(thema).entry('besser').example('Es geht mir schon besser.').get());
        entries.push(new Builder().thema(thema).entry('best-').example('Am besten treffen wir uns morgen.').get());
        entries.push(new Builder().thema(thema).entry('bestellen').example(['Wir möchten bestellen, bitte.', 'Dieses Buch haben wir nicht – sollen wir es für Sie bestellen?']).get());
        entries.push(new Builder().thema(thema).entry('besuchen').example('Darf ich dich besuchen?').get());
        entries.push(new Builder().thema(thema).entry('das Bett, -en').example('Wir brauchen noch ein Kinderbett.').get());
        entries.push(new Builder().thema(thema).entry('bezahlen').example('Wo muss ich bezahlen?').get());
        entries.push(new Builder().thema(thema).entry('das Bier').example('Noch ein Bier bitte.').get());
        entries.push(new Builder().thema(thema).entry('das Bild, -er').example('Hast du ein Bild von deinem Sohn?').get());
        entries.push(new Builder().thema(thema).entry('billig').example('Die Jacke kostet nur 10 Euro! Die ist aber billig!').get());
        entries.push(new Builder().thema(thema).entry('die Birne, -n').example('Ein Kilo Birnen, bitte!').get());
        entries.push(new Builder().thema(thema).entry('bis').example(['Ich fahre nur bis Stuttgart.', 'Ich warte bis morgen.']).get());
        entries.push(new Builder().thema(thema).entry('bisschen').example('Ich spreche Englisch, Französisch und ein bisschen Deutsch.').get());
        entries.push(new Builder().thema(thema).entry('bitte').example(['Eine Tasse Kaffee, bitte!', 'Sprechen Sie bitte leise!']).get());
        entries.push(new Builder().thema(thema).entry('die Bitte, -n').example('Ich habe noch eine Bitte.').get());
        entries.push(new Builder().thema(thema).entry('bitten').example('Darf ich Sie um etwas bitten?').get());
        entries.push(new Builder().thema(thema).entry('bitter').example('Der Kaffee schmeckt bitter.').get());
        entries.push(new Builder().thema(thema).entry('bleiben').example(['Ich bleibe heute zu Hause.', 'Wir bleiben nur bis morgen.']).get());
        entries.push(new Builder().thema(thema).entry('der Bleistift, -e').example('Hast du einen Bleistift?').get());
        entries.push(new Builder().thema(thema).entry('der Blick').example('Von diesem Hotel hat man einen guten Blick auf den Rhein.').get());
        entries.push(new Builder().thema(thema).entry('die Blume, -n').example('Gefallen dir die Blumen?').get());
        entries.push(new Builder().thema(thema).entry('der Bogen').example('Schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.').get());
        entries.push(new Builder().thema(thema).entry('böse').example('Sie ist böse auf mich.').get());
        entries.push(new Builder().thema(thema).entry('brauchen').example('Brauchst du die Zeitung noch?').get());
        entries.push(new Builder().thema(thema).entry('breit').example('Wie breit ist der Schrank?').get());
        entries.push(new Builder().thema(thema).entry('der Brief, -e').example('Haben Sie einen Brief für mich?').get());
        entries.push(new Builder().thema(thema).entry('die Briefmarke, -n').example('Kaufst du bitte Briefmarken bei der Post.').get());
        entries.push(new Builder().thema(thema).entry('bringen').example(['Bringen Sie mir bitte noch einen Kaffee!', 'Wir müssen ihn zum Arzt bringen.']).get());
        entries.push(new Builder().thema(thema).entry('das Brot, -e').example(['Haben Sie auch Weißbrot?', 'Nimm noch ein paar Brote für die Fahrt mit.']).get());
        entries.push(new Builder().thema(thema).entry('das Brötchen, –').example('Möchtest du Brötchen zum Frühstück?').get());
        entries.push(new Builder().thema(thema).entry('der Bruder, -ü').example('Sein Bruder arbeitet auch hier.').get());
        entries.push(new Builder().thema(thema).entry('das Buch, -ü, er').example(['Gute Bücher sind oft sehr teuer.', 'In diesem Wörterbuch finden Sie mehr als 20.000 Wörter.']).get());
        entries.push(new Builder().thema(thema).entry('der Buchstabe, -n').example('Diesen Buchstaben gibt es in meiner Sprache nicht.').get());
        entries.push(new Builder().thema(thema).entry('buchstabieren').example('Bitte buchstabieren Sie Ihren Namen.').get());
        entries.push(new Builder().thema(thema).entry('der Bus, -se').example('Wann kommt der nächste Bus?').get());
        entries.push(new Builder().thema(thema).entry('die Butter').example('Für mich bitte ein Brötchen mit Butter und Käse.').get());
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'C'];
        entries.push(new Builder().thema(thema).entry('das Café, -s').example('Sollen wir uns im Café treffen?').get());
        entries.push(new Builder().thema(thema).entry('die CD, -s').example('Bring bitte deine Lieblings-CD mit.').get());
        entries.push(new Builder().thema(thema).entry('der Chef').example('Wir haben eine neue Chefin.').get());
        entries.push(new Builder().thema(thema).entry('circa/ca.').example('Von Mainz nach Frankfurt sind es circa fünfzig Kilometer.').get());
        entries.push(new Builder().thema(thema).entry('der Computer, –').example('Wann bekommst du deinen neuen Computer?').get());
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'D'];
        entries.push(new Builder().thema(thema).entry('da').example(['Da hinten ist er ja.', 'Wir sprechen gerade über Paul. Da kommt er ja gerade.', 'Ich nehme das da.', 'Ist Herr Klein schon da?']).get());
            entries.push(new Builder().thema(thema).entry('die Dame, -n').example(['Damen (an der Toilette)', 'Sehr geehrte Damen und Herren!']).get());
        entries.push(new Builder().thema(thema).entry('daneben').example('Du kennst doch die Post. Daneben ist die Bank.').get());
        entries.push(new Builder().thema(thema).entry('danken').example('Ich danke Ihnen für die Einladung.').get());
        entries.push(new Builder().thema(thema).entry('der Dank').example(['Vielen Dank!', 'Herzlichen Dank!']).get());
        entries.push(new Builder().thema(thema).entry('danke').example('Soll ich Ihnen helfen? - Nein, danke!').get());
        entries.push(new Builder().thema(thema).entry('dann').example('Ich muss noch schnell zur Post, dann komme ich.').get());
        entries.push(new Builder().thema(thema).entry('das Datum').example('Bitte schreiben Sie noch das Datum auf das Formular.').get());
        entries.push(new Builder().thema(thema).entry('dauern').example('Wie lange dauert der Film?').get());
        entries.push(new Builder().thema(thema).entry('dein-').example(['Ist das dein Auto?', 'Ist das deins?']).get());
        entries.push(new Builder().thema(thema).entry('denn').example('Ich kann nicht kommen, denn ich bin krank.').get());
        entries.push(new Builder().thema(thema).entry('der, die, das').example(['Ich nehme das da.', 'Hier ist der Brief, den du suchst.', 'Die Fahrkarte bekommst du am Bahnhof.']).get());
        entries.push(new Builder().thema(thema).entry('dich').example('Die Blumen sind für dich.').get());
        entries.push(new Builder().thema(thema).entry('dies-').example('Ich nehme lieber diesen Kuchen.').get());
        entries.push(new Builder().thema(thema).entry('dir').example('Gefallen dir die Blumen?').get());
        entries.push(new Builder().thema(thema).entry('die Disco').example('Heute abend gehen wir in die Disco tanzen.').get());
        entries.push(new Builder().thema(thema).entry('der Doktor').example('Meine Tochter ist krank. Wir gehen zum Doktor.').get());
        entries.push(new Builder().thema(thema).entry('das Doppelzimmer').example('Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?').get());
        entries.push(new Builder().thema(thema).entry('das Dorf, -ö, er').example('Meine Familie lebt in einem Dorf.').get());
        entries.push(new Builder().thema(thema).entry('dort, -her, -hin').example(['Deine Tasche kannst du dorthin stellen.', 'Dort ist unser Haus.']).get());
        entries.push(new Builder().thema(thema).entry('draußen').example('Wollen wir draußen sitzen?').get());
        entries.push(new Builder().thema(thema).entry('drucken').example('Bitte drucke das Formular für mich.').get());
        entries.push(new Builder().thema(thema).entry('der Drucker, –').example('Mein Drucker ist kaputt.').get());
        entries.push(new Builder().thema(thema).entry('drücken').example('Drück hier, dann geht der Computer an.').get());
        entries.push(new Builder().thema(thema).entry('durch').example('Am besten gehen Sie durch die Breite Straße.').get());
        entries.push(new Builder().thema(thema).entry('die Durchsage, -n').example('Ich habe die Durchsage nicht verstanden.').get());
        entries.push(new Builder().thema(thema).entry('dürfen').example(['Sie dürfen hier nicht rauchen.', 'Darf ich Sie zu einem Kaffee einladen?', 'Es darf nicht mehr als 15 Euro kosten.']).get());
        entries.push(new Builder().thema(thema).entry('der Durst').example('Hast du etwas zu trinken? Ich habe großen Durst.').get());
        entries.push(new Builder().thema(thema).entry('(sich) duschen').example('Ich bade nicht so gern, ich dusche lieber.').get());
        entries.push(new Builder().thema(thema).entry('die Dusche').example('Unsere Wohnung hat nur eine Dusche.').get());
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'E'];
        entries.push(new Builder().thema(thema).entry('die Ecke, -n').example('An der nächsten Ecke links.').get());
        entries.push(new Builder().thema(thema).entry('die Ehefrau, -en/der Ehemann, ä, er').example('Das ist mein (Ehe-) Mann/meine (Ehe-) Frau.').get());
        entries.push(new Builder().thema(thema).entry('das Ei, -er').example('Möchtest du ein Ei zum Frühstück?').get());
        entries.push(new Builder().thema(thema).entry('eilig').example('Hast du es eilig?').get());
        entries.push(new Builder().thema(thema).entry('ein-').example(['Ich nehme ein Bier. Willst du auch eins?', 'Ist hier einer, der das kann?']).get());
        entries.push(new Builder().thema(thema).entry('einfach').example(['Die Prüfung ist ganz einfach.', 'Hin und zurück? – Nein, bitte nur einfach.', 'Ich brauche nur ein einfaches Zimmer.']).get());
        entries.push(new Builder().thema(thema).entry('der Eingang').example('Der Eingang ist um die Ecke.').get());
        entries.push(new Builder().thema(thema).entry('einkaufen').example('Ich muss noch für morgen einkaufen.').get());
        entries.push(new Builder().thema(thema).entry('einladen').example('Darf ich Sie zu einem Kaffee einladen?').get());
        entries.push(new Builder().thema(thema).entry('die Einladung').example('Danke für die Einladung!').get());
        entries.push(new Builder().thema(thema).entry('einmal').example('Diese Prüfung mache ich nicht noch einmal.').get());
        entries.push(new Builder().thema(thema).entry('einsteigen').example('Schnell, steig ein, der Zug fährt gleich.').get());
        entries.push(new Builder().thema(thema).entry('der Eintritt').example('Der Preis für den Eintritt ist 5 Euro.').get());
        entries.push(new Builder().thema(thema).entry('das Einzelzimmer').example('Haben Sie noch ein Einzelzimmer?').get());
        entries.push(new Builder().thema(thema).entry('die Eltern (pl.)').example('Meine Eltern leben in Spanien.').get());
        entries.push(new Builder().thema(thema).entry('die E-Mail, -s').example('Ich habe Ihre E-Mail nicht bekommen.').get());
        entries.push(new Builder().thema(thema).entry('der Empfänger, –').example('Auf dem Brief steht dein Name, also bist du der Empfänger.').get());
        entries.push(new Builder().thema(thema).entry('empfehlen').example('Welchen Wein können Sie mir empfehlen?').get());
        entries.push(new Builder().thema(thema).entry('enden').example('Die Straße endet hier.').get());
        entries.push(new Builder().thema(thema).entry('das Ende').example(['Sie wohnt am Ende der Straße.', 'Er bekommt sein Geld am Ende des Monats.']).get());
        entries.push(new Builder().thema(thema).entry('entschuldigen').example('Entschuldigen Sie bitte!').get());
        entries.push(new Builder().thema(thema).entry('die Entschuldigung').example('Entschuldigung! – Bitte.').get());
        entries.push(new Builder().thema(thema).entry('er').example('Er heißt Ali.').get());
        entries.push(new Builder().thema(thema).entry('das Ergebnis, -se').example('Das Ergebnis des Tests bekommen Sie in zwei Wochen.').get());
        entries.push(new Builder().thema(thema).entry('erklären').example('Kannst du mir das erklären?').get());
        entries.push(new Builder().thema(thema).entry('erlauben').example('Rauchen ist hier nicht erlaubt.').get());
        entries.push(new Builder().thema(thema).entry('der Erwachsene, -n').example('Dieser Film ist nur für Erwachsene.').get());
        entries.push(new Builder().thema(thema).entry('erzählen').example('Wir müssen euch etwas erzählen!').get());
        entries.push(new Builder().thema(thema).entry('es').example('Es regnet.').get());
        entries.push(new Builder().thema(thema).entry('essen').example('Was gibt es zu essen?').get());
        entries.push(new Builder().thema(thema).entry('das Essen').example('Das Essen ist heute sehr gut.').get());
        entries.push(new Builder().thema(thema).entry('euer').example('Euer Kurs beginnt heute.').get());
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'F'];
        entries.push(new Builder().thema(thema).entry('fahren').example('Ich fahre mit dem Auto zur Arbeit.').get());
        entries.push(new Builder().thema(thema).entry('der Fahrer').example('Bitte nicht mit dem Fahrer sprechen!').get());
        entries.push(new Builder().thema(thema).entry('die Fahrkarte, -n').example('Hast du schon eine Fahrkarte?').get());
        entries.push(new Builder().thema(thema).entry('das Fahrrad, -ä, er').example('Fährst du mit dem Fahrrad oder mit dem Auto?').get());
        entries.push(new Builder().thema(thema).entry('falsch').example('Das ist falsch.').get());
        entries.push(new Builder().thema(thema).entry('die Familie, -n').example('Meine Familie lebt in Spanien.').get());
        entries.push(new Builder().thema(thema).entry('der Familienname').example('Meine Familiennamen sind García González.').get());
        entries.push(new Builder().thema(thema).entry('der Familienstand').example('Bei „Familienstand“ musst du „ledig“ ankreuzen.').get());
        entries.push(new Builder().thema(thema).entry('die Farbe, -n').example('Die Farbe gefällt mir gut.').get());
        entries.push(new Builder().thema(thema).entry('das Fax, -e').example('Schicken Sie uns einfach ein Fax!').get());
        entries.push(new Builder().thema(thema).entry('Feier-').example(['z. B. Feierabend, Feiertag', 'Am Montag ist Feiertag.']).get());
        entries.push(new Builder().thema(thema).entry('feiern').example('Wir feiern heute meinen Geburtstag.').get());
        entries.push(new Builder().thema(thema).entry('fehlen').example(['Herr Müller ist nicht da, er fehlt schon seit drei Tagen.', 'Was fehlt Ihnen?']).get());
        entries.push(new Builder().thema(thema).entry('der Fehler, –').example('Diesen Fehler mache ich immer.').get());
        entries.push(new Builder().thema(thema).entry('fernsehen').example('Wollen wir heute Abend mal fernsehen?').get());
        entries.push(new Builder().thema(thema).entry('fertig').example(['Bist du fertig?', 'Ist mein Auto schon fertig?']).get());
        entries.push(new Builder().thema(thema).entry('das Feuer').example('Haben Sie Feuer?').get());
        entries.push(new Builder().thema(thema).entry('das Fieber').example('Mein Mann hat noch immer Fieber.').get());
        entries.push(new Builder().thema(thema).entry('der Film, -e').example('Ich möchte gern diesen Film sehen.').get());
        entries.push(new Builder().thema(thema).entry('finden').example('Wir müssen den Schlüssel finden.').get());
        entries.push(new Builder().thema(thema).entry('die Firma').example('Er arbeitet jetzt bei einer anderen Firma.').get());
        entries.push(new Builder().thema(thema).entry('der Fisch, -e').example('Ich esse gern Fisch. Fleisch mag ich nicht.').get());
        entries.push(new Builder().thema(thema).entry('die Flasche, -n').example('Eine Flasche Bier, bitte.').get());
        entries.push(new Builder().thema(thema).entry('das Fleisch').example('Fleisch mag ich nicht.').get());
        entries.push(new Builder().thema(thema).entry('fliegen').example('Ich fliege nicht gern. Deshalb fahre ich mit dem Zug.').get());
        entries.push(new Builder().thema(thema).entry('abfliegen').example('Wann fliegst du ab?').get());
        entries.push(new Builder().thema(thema).entry('der Abflug').example('Der Abflug ist um 11.20 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('der Flughafen').example('Kannst du mich zum Flughafen bringen?').get());
        entries.push(new Builder().thema(thema).entry('das Flugzeug').example('Das Flugzeug aus Berlin kommt heute später an.').get());
        entries.push(new Builder().thema(thema).entry('das Formular, -e').example('Sie müssen dieses Formular ausfüllen.').get());
        entries.push(new Builder().thema(thema).entry('das Foto, -s').example('Darf ich ein Foto machen?').get());
        entries.push(new Builder().thema(thema).entry('fragen').example('Er möchte Sie etwas fragen. Wann kommen Sie?').get());
        entries.push(new Builder().thema(thema).entry('die Frage, -n').example('Ich habe eine Frage.').get());
        entries.push(new Builder().thema(thema).entry('die Frau, -en').example(['Das ist Frau Becker.', 'Guten Tag, Frau Schmitt!', 'Hier arbeiten mehr Frauen als Männer.']).get());
        entries.push(new Builder().thema(thema).entry('frei').example('Ist der Platz noch frei?').get());
        entries.push(new Builder().thema(thema).entry('die Freizeit').example('In meiner Freizeit spiele ich oft Fußball.').get());
        entries.push(new Builder().thema(thema).entry('fremd').example('Das weiß ich nicht; ich bin fremd hier.').get());
        entries.push(new Builder().thema(thema).entry('(sich) freuen').example('Ich freue mich auf den Urlaub.').get());
        entries.push(new Builder().thema(thema).entry('der Freund, -e').example(['Das ist ein Freund von mir.', 'Das ist meine Freundin.']).get());
        entries.push(new Builder().thema(thema).entry('früher').example('Früher waren wir oft zusammen im Kino.').get());
        entries.push(new Builder().thema(thema).entry('frühstücken').example('Am Sonntag frühstücke ich gern im Bett.').get());
        entries.push(new Builder().thema(thema).entry('das Frühstück').example('Möchtest du ein Ei zum Frühstück?').get());
        entries.push(new Builder().thema(thema).entry('die Führung').example('Die Führung durch das Haus beginnt in 3 Minuten.').get());
        entries.push(new Builder().thema(thema).entry('für').example(['Das ist für Sie.', 'Das ist der Schlüssel für die Haustür.', 'Das ist das Brot für morgen.']).get());
        entries.push(new Builder().thema(thema).entry('der Fuß, -ü, e').example('Der linke Fuß tut mir weh.').get());
        entries.push(new Builder().thema(thema).entry('der Fußball').example('Spielt ihr gerne Fußball?').get());
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'G'];
        entries.push(new Builder().thema(thema).entry('der Garten').example('Wir haben leider keinen Garten.').get());
        entries.push(new Builder().thema(thema).entry('der Gast, -ä, e').example('Am Wochenende haben wir mehrere Gäste.').get());
        entries.push(new Builder().thema(thema).entry('geben').example(['Kannst du mir bitte deinen Kugelschreiber geben?', 'Es gibt keine Karten mehr.']).get());
        entries.push(new Builder().thema(thema).entry('geboren').example('Ich bin in Zagreb geboren.').get());
        entries.push(new Builder().thema(thema).entry('das Geburtsjahr').example('Das Geburtsjahr Ihres Sohnes, bitte?').get());
        entries.push(new Builder().thema(thema).entry('der Geburtsort').example('Bitte schreiben Sie Ihren Geburtsort auf das Formular.').get());
        entries.push(new Builder().thema(thema).entry('der Geburtstag').example('Herzlichen Glückwunsch zum Geburtstag!').get());
        entries.push(new Builder().thema(thema).entry('gefallen').example('Das gefällt mir.').get());
        entries.push(new Builder().thema(thema).entry('gegen').example(['Fahr nicht gegen den Baum!', 'Ich bin gegen diese Lösung.', 'Wer spielt gegen wen?']).get());
        entries.push(new Builder().thema(thema).entry('gehen').example(['Ich weiß nicht, wie das geht.', 'Wie geht‘s?', 'Jetzt muss ich (aber) leider gehen.', 'Ich muss zum Arzt gehen.', 'Das geht nicht!']).get());
        entries.push(new Builder().thema(thema).entry('gehören').example('Wem gehört das?').get());
        entries.push(new Builder().thema(thema).entry('das Geld').example('Hast du noch Geld?').get());
        entries.push(new Builder().thema(thema).entry('das Gemüse').example('Gemüse brauchen wir auch noch.').get());
        entries.push(new Builder().thema(thema).entry('das Gepäck').example('Wollen Sie Ihr Gepäck mitnehmen?').get());
        entries.push(new Builder().thema(thema).entry('gerade').example('Da kommt er ja gerade.').get());
        entries.push(new Builder().thema(thema).entry('geradeaus').example('Gehen Sie immer geradeaus!').get());
        entries.push(new Builder().thema(thema).entry('gern(e)').example('Ich gehe gerne einkaufen.').get());
        entries.push(new Builder().thema(thema).entry('das Geschäft, -e').example('Die Geschäfte schließen um 18.30 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('das Geschenk, -e').example('Danke für das schöne Geschenk.').get());
        entries.push(new Builder().thema(thema).entry('die Geschwister (pl.)').example('Ich habe leider keine Geschwister.').get());
        entries.push(new Builder().thema(thema).entry('das Gespräch, -e').example('Das Gespräch mit Frau Kunz ist um 14 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('gestern').example('Gestern war ich krank.').get());
        entries.push(new Builder().thema(thema).entry('gestorben').example('Meine Frau ist gestern gestorben.').get());
        entries.push(new Builder().thema(thema).entry('das Getränk, -e').example('Mein Lieblingsgetränk ist Tomatensaft.').get());
        entries.push(new Builder().thema(thema).entry('das Gewicht').example('Bei „Gewicht“ schreibst du: 62 Kilo.').get());
        entries.push(new Builder().thema(thema).entry('gewinnen').example('Wer gewinnt das Spiel?').get());
        entries.push(new Builder().thema(thema).entry('das Glas, -ä, er').example(['Bitte noch ein Glas Wein!', 'Wir brauchen noch drei Gläser.']).get());
        entries.push(new Builder().thema(thema).entry('glauben').example(['Sie können mir glauben, es ist so.', 'Ich glaube, er kommt gleich.']).get());
        entries.push(new Builder().thema(thema).entry('gleich').example(['Das ist mir gleich.', 'Das ist der gleiche Preis.', 'Ich komme gleich.']).get());
        entries.push(new Builder().thema(thema).entry('das Gleis, -e').example('Der ICE nach Berlin hält heute an Gleis 12.').get());
        entries.push(new Builder().thema(thema).entry('das Glück').example('Viel Glück!').get());
        entries.push(new Builder().thema(thema).entry('glücklich').example('Meine Kinder sind glücklich verheiratet.').get());
        entries.push(new Builder().thema(thema).entry('der Glückwunsch').example('Herzlichen Glückwunsch zum Geburtstag.').get());
        entries.push(new Builder().thema(thema).entry('Grad (Celsius)').example('Heute haben wir dreißig Grad.').get());
        entries.push(new Builder().thema(thema).entry('gratulieren').example('Ich gratuliere dir!').get());
        entries.push(new Builder().thema(thema).entry('grillen').example('Heute grillen wir im Garten.').get());
        entries.push(new Builder().thema(thema).entry('groß').example(['Mein Bruder und ich sind gleich groß.', 'Frankfurt ist eine große Stadt.']).get());
        entries.push(new Builder().thema(thema).entry('die Größe').example('Haben Sie das auch in Größe 40?').get());
        entries.push(new Builder().thema(thema).entry('die Großeltern (pl.)').example('Meine Großeltern leben in Japan.').get());
        entries.push(new Builder().thema(thema).entry('die Großmutter').example('Meine Großmutter heißt Eva.').get());
        entries.push(new Builder().thema(thema).entry('der Großvater').example('Mein Großvater ist schon 80.').get());
        entries.push(new Builder().thema(thema).entry('die Gruppe, -n').example('Die erste Gruppe beginnt um 16 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('der Gruß, -ü, e').example(['Viele Grüße an Ihre Frau.', 'Mit freundlichen Grüßen']).get());
        entries.push(new Builder().thema(thema).entry('gültig').example('Der Pass ist nicht mehr gültig.').get());
        entries.push(new Builder().thema(thema).entry('günstig').example('Dort gibt es günstige Angebote.').get());
        entries.push(new Builder().thema(thema).entry('gut').example(['Das finde ich gut.', 'Ich komme um 13 Uhr. – Gut!', 'Guten Morgen!', 'Ein gutes neues Jahr!', 'Guten Appetit!']).get());
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'H'];
        entries.push(new Builder().thema(thema).entry('das Haar, -e').example('Sie hat lange Haare.').get());
        entries.push(new Builder().thema(thema).entry('haben').example('Ich habe ein neues Auto.').get());
        entries.push(new Builder().thema(thema).entry('das Hähnchen, -').example('Ein Hähnchen mit Pommes bitte!').get());
        entries.push(new Builder().thema(thema).entry('die Halbpension').example('Möchten Sie Vollpension oder Halbpension?').get());
        entries.push(new Builder().thema(thema).entry('die Halle').example('Wir treffen uns in Halle B').get());
        entries.push(new Builder().thema(thema).entry('hallo').example('Hallo Inge! Wie geht’s?').get());
        entries.push(new Builder().thema(thema).entry('halten').example('Dieser Zug hält nicht in Rüdesheim.').get());
        entries.push(new Builder().thema(thema).entry('die Haltestelle').example('An der nächsten Haltestelle müssen Sie aussteigen.').get());
        entries.push(new Builder().thema(thema).entry('die Hand, -ä, e').example('Er gibt mir die Hand.').get());
        entries.push(new Builder().thema(thema).entry('das Handy, -s').example('In der Schule bitte die Handys ausmachen!').get());
        entries.push(new Builder().thema(thema).entry('das Haus, -ä, er').example(['In welchem Haus wohnst du?', 'Ich gehe jetzt nach Hause.', 'Paul ist nicht zu Hause.']).get());
        entries.push(new Builder().thema(thema).entry('die Hausaufgabe,-n').example('Kannst du mir bei den Hausaufgaben helfen?').get());
        entries.push(new Builder().thema(thema).entry('die Hausfrau, -en/der Hausmann').example('Die Hausfrau/der Hausmann wäscht, kocht und kauft ein.').get());
        entries.push(new Builder().thema(thema).entry('die Heimat').example('Ich komme aus der Schweiz. Das ist meine Heimat.').get());
        entries.push(new Builder().thema(thema).entry('heiraten').example('Meine Schwester heiratet einen Japaner.').get());
        entries.push(new Builder().thema(thema).entry('heißen').example(['Ich heiße Charlotte Meier.', 'Wie heißt das auf Deutsch?']).get());
        entries.push(new Builder().thema(thema).entry('helfen').example('Können Sie mir helfen, bitte?').get());
        entries.push(new Builder().thema(thema).entry('hell').example('Im Sommer ist es bis 21 Uhr hell.').get());
        entries.push(new Builder().thema(thema).entry('der Herd').example('In der neuen Küche fehlt noch der Herd.').get());
        entries.push(new Builder().thema(thema).entry('der Herr, -en').example('Guten Tag, Herr Sommer!').get());
        entries.push(new Builder().thema(thema).entry('herzlich').example('Herzlichen Glückwunsch!').get());
        entries.push(new Builder().thema(thema).entry('heute').example('Heute ist ein schöner Tag.').get());
        entries.push(new Builder().thema(thema).entry('hier').example(['Hier ist 06131-553221, Pamela Linke.', 'Hier wohne ich.']).get());
        entries.push(new Builder().thema(thema).entry('die Hilfe').example(['Hilfe! Bitte helfen Sie mir!', 'Brauchen Sie meine Hilfe?']).get());
        entries.push(new Builder().thema(thema).entry('hinten').example('Die Tür zum Aussteigen ist hinten.').get());
        entries.push(new Builder().thema(thema).entry('das Hobby, -s').example('Meine Hobbys sind Wandern und Schwimmen.').get());
        entries.push(new Builder().thema(thema).entry('hoch').example('Der Mount Everest ist 8.880 Meter hoch.').get());
        entries.push(new Builder().thema(thema).entry('die Hochzeit').example('Zur dieser Hochzeit kommen mehr als fünfzig Gäste.').get());
        entries.push(new Builder().thema(thema).entry('holen').example('Ich hole zwei Flaschen Wasser aus der Küche.').get());
        entries.push(new Builder().thema(thema).entry('hören').example(['Hör mal! Was ist das?', 'Ich habe das Lied schon mal gehört.']).get());
        entries.push(new Builder().thema(thema).entry('das Hotel, -s').example('Im Urlaub sind wir in einem Hotel am Meer.').get());
        entries.push(new Builder().thema(thema).entry('der Hund, -e').example('Der Hund ist noch jung.').get());
        entries.push(new Builder().thema(thema).entry('der Hunger').example('Ich habe Hunger! Wann ist das Essen fertig?').get());
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'I'];
        entries.push(new Builder().thema(thema).entry('ich').example('Ich heiße Veronika.').get());
        entries.push(new Builder().thema(thema).entry('ihr/ihm/ihn').example(['Gib ihr/ihm bitte das Buch.', 'Ruf ihn bitte an.']).get());
        entries.push(new Builder().thema(thema).entry('immer').example('Frau Bast kommt immer zu spät.').get());
        entries.push(new Builder().thema(thema).entry('in').example(['Ich wohne in Wiesbaden.', 'Der Zug kommt in fünf Minuten.', 'Frau Rausch arbeitet in einem Geschäft.', 'Komm, wir gehen ins Kino.']).get());
        entries.push(new Builder().thema(thema).entry('die Information, -en').example(['Wenn Sie Fragen haben, gehen Sie zur Information.', 'Wir haben hier wichtige Informationen für Sie.']).get());
        entries.push(new Builder().thema(thema).entry('international').example('Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China ...').get());
        entries.push(new Builder().thema(thema).entry('das Internet').example('Das findest du im Internet.').get());
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'J'];
        entries.push(new Builder().thema(thema).entry('ja').example('Sind Sie Herr Watanabe? – Ja.').get());
        entries.push(new Builder().thema(thema).entry('die Jacke, -n').example('Zieh dir eine Jacke an. Es ist kalt.').get());
        entries.push(new Builder().thema(thema).entry('jed-').example('Blumen kannst du in jedem Bahnhof kaufen.').get());
        entries.push(new Builder().thema(thema).entry('jetzt').example('Jetzt machen wir eine Pause.').get());
        entries.push(new Builder().thema(thema).entry('der Job, -s').example('Jenny hat einen neuen Job bei der Post.').get());
        entries.push(new Builder().thema(thema).entry('der Jugendliche, -n ').example('Viele Jugendliche kaufen gern ein.').get());
        entries.push(new Builder().thema(thema).entry('jung').example('Claudia ist 21. – Was? Noch so jung?').get());
        entries.push(new Builder().thema(thema).entry('der Junge, -n ').example('Ich habe zwei Kinder. Einen Jungen und ein Mädchen.').get());
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'K'];
        entries.push(new Builder().thema(thema).entry('der Kaffee').example('Zum Frühstück trinke ich immer Kaffee.').get());
        entries.push(new Builder().thema(thema).entry('kaputt').example('Das Glas war teuer. Es geht sehr leicht kaputt.').get());
        entries.push(new Builder().thema(thema).entry('die Karte, -n').example(['Ich schreibe meinen Bekannten eine Karte aus dem Urlaub.', 'Wollen wir Karten spielen?', 'Ich möchte auch etwas essen. Bringen Sie mir die Karte, bitte.']).get());
        entries.push(new Builder().thema(thema).entry('(Kredit)-Karte, -n').example('Kann ich auch mit Karte (be-) zahlen?').get());
        entries.push(new Builder().thema(thema).entry('die Kartoffel, -n').example('Für Pommes frites braucht man Kartoffeln.').get());
        entries.push(new Builder().thema(thema).entry('die Kasse').example('Zahlen Sie bitte an der Kasse.').get());
        entries.push(new Builder().thema(thema).entry('kaufen').example('Tim kauft sich ein neues Auto.').get());
        entries.push(new Builder().thema(thema).entry('kein').example('Es gibt keine Eintrittskarten mehr.').get());
        entries.push(new Builder().thema(thema).entry('kennen').example('Kennen Sie diese Frau? – Nein, leider nicht.').get());
        entries.push(new Builder().thema(thema).entry('kennenlernen').example('Wir sind neu hier. Wir möchten Sie kennenlernen.').get());
        entries.push(new Builder().thema(thema).entry('das Kind, -er').example('Wie viele Kinder haben Sie?').get());
        entries.push(new Builder().thema(thema).entry('der Kindergarten').example('Die kleine Laura geht schon in den Kindergarten.').get());
        entries.push(new Builder().thema(thema).entry('das Kino, -s').example('Wir sehen heute Abend im Kino einen schönen Film.').get());
        entries.push(new Builder().thema(thema).entry('der Kiosk').example('Am Kiosk bekommen Sie Getränke, Zigaretten und Zeitungen.').get());
        entries.push(new Builder().thema(thema).entry('klar').example('Kommst du mit? – Klar!').get());
        entries.push(new Builder().thema(thema).entry('die Klasse').example(['In unserer Klasse sind fünfundzwanzig Schüler.', 'Im Zug fahre ich immer 2. Klasse.']).get());
        entries.push(new Builder().thema(thema).entry('die Kleidung').example('Wo finde ich Kleidung? – Jacken im ersten, Jeans im zweiten Stock.').get());
        entries.push(new Builder().thema(thema).entry('klein').example('Eltville ist eine kleine Stadt am Rhein.').get());
        entries.push(new Builder().thema(thema).entry('kochen').example('Herr Georgi kann gut kochen.').get());
        entries.push(new Builder().thema(thema).entry('der Koffer, –').example('Ist das Ihr Koffer?').get());
        entries.push(new Builder().thema(thema).entry('der Kollege, -n').example('Wie heißt die neue Kollegin?').get());
        entries.push(new Builder().thema(thema).entry('kommen').example(['Woher kommen Sie? – Aus Frankreich.', 'Kommst du mit ins Schwimmbad?']).get());
        entries.push(new Builder().thema(thema).entry('können').example(['Ich kann Deutsch und Russisch.', 'Können Sie mir helfen?']).get());
        entries.push(new Builder().thema(thema).entry('das Konto').example('Das Geld überweisen wir am ersten März auf Ihr Konto.').get());
        entries.push(new Builder().thema(thema).entry('der Kopf').example('Mein Kopf tut weh!').get());
        entries.push(new Builder().thema(thema).entry('kosten').example('Wie viel kostet das? – 10 Euro.').get());
        entries.push(new Builder().thema(thema).entry('krank').example('Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett.').get());
        entries.push(new Builder().thema(thema).entry('kriegen').example('Ich kriege 15 Euro in der Stunde für meine Arbeit.').get());
        entries.push(new Builder().thema(thema).entry('die Küche').example('Der neue Herd kommt in die Küche.').get());
        entries.push(new Builder().thema(thema).entry('der Kuchen').example('Ich nehme ein Stück Kuchen.').get());
        entries.push(new Builder().thema(thema).entry('der Kugelschreiber').example('Hast du einen Kugelschreiber für mich?').get());
        entries.push(new Builder().thema(thema).entry('der Kühlschrank').example('Haben wir noch Milch? – Ja, im Kühlschrank.').get());
        entries.push(new Builder().thema(thema).entry('kulturell').example('Ich bin kulturell interessiert. Ich gehe oft ins Museum.').get());
        entries.push(new Builder().thema(thema).entry('sich kümmern').example('Jede Mutter kümmert sich um ihre kleinen Kinder.').get());
        entries.push(new Builder().thema(thema).entry('der Kunde, -n').example('Einen Moment, bitte. Ich habe eine Kundin.').get());
        entries.push(new Builder().thema(thema).entry('der Kurs, -e').example('Der Deutschkurs geht bis zum Sommer.').get());
        entries.push(new Builder().thema(thema).entry('kurz').example('Ricardo hat kurzes Haar.').get());
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'L'];
        entries.push(new Builder().thema(thema).entry('lachen').example('Die Kinder lachen viel.').get());
        entries.push(new Builder().thema(thema).entry('der Laden, -ä').example('Im Buchladen können Sie Bücher kaufen.').get());
        entries.push(new Builder().thema(thema).entry('das Land, -ä, er').example('Italien ist ein schönes Land.').get());
        entries.push(new Builder().thema(thema).entry('lang').example('Die Jeans ist zu lang.').get());
        entries.push(new Builder().thema(thema).entry('lange').example('Wie lange fährt der Zug von Hamburg nach Berlin?').get());
        entries.push(new Builder().thema(thema).entry('langsam').example('Könnten Sie bitte etwas langsamer sprechen?').get());
        entries.push(new Builder().thema(thema).entry('laufen').example('Ich möchte nicht Auto fahren, ich möchte laufen.').get());
        entries.push(new Builder().thema(thema).entry('laut').example('Nicht so laut! Das Baby schläft.').get());
        entries.push(new Builder().thema(thema).entry('leben').example(['Sie lebt bei ihrer Schwester.', 'Ihre Eltern leben nicht mehr.']).get());
        entries.push(new Builder().thema(thema).entry('das Leben').example('Das Leben in diesem Land ist teuer.').get());
        entries.push(new Builder().thema(thema).entry('die Lebensmittel (pl.)').example('Lebensmittel bekommen Sie im Supermarkt.').get());
        entries.push(new Builder().thema(thema).entry('ledig').example('Sind Sie verheiratet? – Nein. Ledig.').get());
        entries.push(new Builder().thema(thema).entry('legen').example('Legen Sie das Buch auf den Tisch.').get());
        entries.push(new Builder().thema(thema).entry('der Lehrer, –').example('Unsere Deutschlehrerin heißt Frau Müller.').get());
        entries.push(new Builder().thema(thema).entry('leicht').example(['Der Koffer ist leicht.', 'Deutsch ist nicht leicht.']).get());
        entries.push(new Builder().thema(thema).entry('leider').example('Leider kann ich nicht kommen. Ich muss zum Arzt.').get());
        entries.push(new Builder().thema(thema).entry('leise').example('Seid leise. Die anderen schlafen schon.').get());
        entries.push(new Builder().thema(thema).entry('lernen').example('Wie lange lernen Sie schon Deutsch?').get());
        entries.push(new Builder().thema(thema).entry('lesen').example('Ich lese ein Buch von García Márquez.').get());
        entries.push(new Builder().thema(thema).entry('letzt-').example('Morgen ist der letzte Kurstag.').get());
        entries.push(new Builder().thema(thema).entry('die Leute (pl.)').example('In der Disko sind viele Leute.').get());
        entries.push(new Builder().thema(thema).entry('das Licht').example('Wo macht man hier das Licht an?').get());
        entries.push(new Builder().thema(thema).entry('lieb-').example('Liebe Susanne, lieber Hans,').get());
        entries.push(new Builder().thema(thema).entry('lieben').example('Ich liebe dich!').get());
        entries.push(new Builder().thema(thema).entry('lieber').example('Sie fährt lieber mit der Bahn.').get());
        entries.push(new Builder().thema(thema).entry('Lieblings-').example('Mein Lieblingsfilm ist „Schwarze Augen“.').get());
        entries.push(new Builder().thema(thema).entry('das Lied, -er').example('Welches ist dein Lieblingslied?').get());
        entries.push(new Builder().thema(thema).entry('liegen').example(['Um neun Uhr liegt Judith noch im Bett.', 'Frankfurt liegt am Main.']).get());
        entries.push(new Builder().thema(thema).entry('links').example('Gehen Sie die nächste Straße links.').get());
        entries.push(new Builder().thema(thema).entry('der Lkw, -s').example('Dieser Lastkraftwagen ist sehr groß.').get());
        entries.push(new Builder().thema(thema).entry('das Lokal').example('In unserer Straße gibt es ein neues Lokal.').get());
        entries.push(new Builder().thema(thema).entry('die Lösung, -en').example('Die Lösung ist ganz einfach.').get());
        entries.push(new Builder().thema(thema).entry('lustig').example('Frau Mertens ist lustig. Sie lacht immer.').get());
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'M'];
        entries.push(new Builder().thema(thema).entry('machen').example(['Was machst du heute Abend?', 'Ich muss jetzt das Essen machen.', 'Das macht 5 Euro 95.', 'Das macht nichts.']).get());
        entries.push(new Builder().thema(thema).entry('das Mädchen, –').example('Familie Kurz bekommt ein Baby. – Junge oder Mädchen?').get());
        entries.push(new Builder().thema(thema).entry('man').example('Hier darf man nicht rauchen.').get());
        entries.push(new Builder().thema(thema).entry('der Mann, -ä, er').example('Mein Mann arbeitet bei der Polizei.').get());
        entries.push(new Builder().thema(thema).entry('männlich').example('Kreuzen Sie bitte an: „weiblich“ oder „männlich“.').get());
        entries.push(new Builder().thema(thema).entry('die Maschine, -n').example('Die Waschmaschine ist günstig.').get());
        entries.push(new Builder().thema(thema).entry('das Meer').example('Wir machen Urlaub am Meer.').get());
        entries.push(new Builder().thema(thema).entry('mehr').example('Dieses Auto kostet 1.000 Euro mehr als das andere.').get());
        entries.push(new Builder().thema(thema).entry('mein').example('Mein Vater ist Arzt.').get());
        entries.push(new Builder().thema(thema).entry('meist-').example('Die meisten Norddeutschen sind sehr groß.').get());
        entries.push(new Builder().thema(thema).entry('der Mensch, -en').example('Die Menschen sind hier anders als bei uns.').get());
        entries.push(new Builder().thema(thema).entry('mieten').example('Ich möchte ein Auto mieten.').get());
        entries.push(new Builder().thema(thema).entry('die Miete').example('Die Miete für diese Wohnung ist 600 Euro.').get());
        entries.push(new Builder().thema(thema).entry('die Milch').example('Die Milch steht im Kühlschrank.').get());
        entries.push(new Builder().thema(thema).entry('mit').example('Trinken Sie den Kaffee mit Milch?').get());
        entries.push(new Builder().thema(thema).entry('mitbringen').example('Ich gehe einkaufen. Soll ich dir was mitbringen?').get());
        entries.push(new Builder().thema(thema).entry('mitkommen').example('Ich gehe ins Kino. Kommst du mit?').get());
        entries.push(new Builder().thema(thema).entry('mitmachen').example('Warum macht ihr nicht mit?').get());
        entries.push(new Builder().thema(thema).entry('mitnehmen').example('Nehmen wir meine Schwester ins Kino mit?').get());
        entries.push(new Builder().thema(thema).entry('die Mitte').example('Der Lehrer steht in der Mitte des Klassenzimmers.').get());
        entries.push(new Builder().thema(thema).entry('die Möbel (pl.)').example('Sind die Möbel neu?').get());
        entries.push(new Builder().thema(thema).entry('möchten').example('Was möchten Sie trinken?').get());
        entries.push(new Builder().thema(thema).entry('mögen').example('Magst du Kaffee oder Tee?').get());
        entries.push(new Builder().thema(thema).entry('möglich').example('Mit dieser Fahrkarte ist die Fahrt ab 9 Uhr möglich.').get());
        entries.push(new Builder().thema(thema).entry('der Moment').example(['Moment mal bitte!', 'Einen Moment bitte.']).get());
        entries.push(new Builder().thema(thema).entry('morgen').example('Morgen beginnt die Schule um 10 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('müde').example('Ich bin müde. Ich gehe schlafen.').get());
        entries.push(new Builder().thema(thema).entry('der Mund').example('Öffnen Sie den Mund.').get());
        entries.push(new Builder().thema(thema).entry('müssen').example('Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten.').get());
        entries.push(new Builder().thema(thema).entry('die Mutter, -ü').example('Frau Berghäuser ist die Mutter von Michaela.').get());
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'N'];
        entries.push(new Builder().thema(thema).entry('nach').example(['Ich gehe jetzt nach Hause.', 'Ich fliege nach München.', 'Es ist schon 5 nach 12.']).get());
        entries.push(new Builder().thema(thema).entry('nächst-').example('Sehen wir uns nächste Woche?').get());
        entries.push(new Builder().thema(thema).entry('der Name, -n').example(['Mein Name ist Thomas Schmidt.', 'Mein Vorname ist Thomas; Schmidt ist der Familienname.']).get());
        entries.push(new Builder().thema(thema).entry('nehmen').example(['Heute gibt es Hähnchen. Das nehme ich.', 'Ich nehme den Bus.']).get());
        entries.push(new Builder().thema(thema).entry('nein').example('Fährst du auch nach München? – Nein, ich habe keine Zeit.').get());
        entries.push(new Builder().thema(thema).entry('neu').example(['Ich bin der neue Kollege.', 'Wir haben eine neue Wohnung.']).get());
        entries.push(new Builder().thema(thema).entry('nicht').example(['Das stimmt nicht.', 'Das ist doch schön, nicht?']).get());
        entries.push(new Builder().thema(thema).entry('nichts').example(['Das macht nichts.', 'Hier kaufe ich nichts. Der Laden gefällt mir nicht.']).get());
        entries.push(new Builder().thema(thema).entry('nie').example('Er kommt nie pünktlich.').get());
        entries.push(new Builder().thema(thema).entry('noch').example(['Vielleicht kommt er noch.', 'Wir warten noch fünf Minuten.', 'Ich habe noch 20 Euro.']).get());
        entries.push(new Builder().thema(thema).entry('normal').example('75 kg. Sein Gewicht ist normal.').get());
        entries.push(new Builder().thema(thema).entry('die Nummer, -n').example(['Sie haben Zimmer Nummer zwölf.', 'Welche Hausnummer haben Sie?', 'Können Sie mir Ihre Nummer geben?']).get());
        entries.push(new Builder().thema(thema).entry('nur').example('Ich möchte nur ein Glas Wasser.').get());
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'O'];
        entries.push(new Builder().thema(thema).entry('oben').example('Ich wohne oben.').get());
        entries.push(new Builder().thema(thema).entry('das Obst').example('Im Sommer ist das Obst billig.').get());
        entries.push(new Builder().thema(thema).entry('oder').example('Wann können Sie kommen – heute oder morgen?').get());
        entries.push(new Builder().thema(thema).entry('öffnen').example('Ich öffne die Tür.').get());
        entries.push(new Builder().thema(thema).entry('geöffnet').example('Der Laden ist samstags bis 16.00 Uhr geöffnet.').get());
        entries.push(new Builder().thema(thema).entry('oft').example('Petra treffe ich oft.').get());
        entries.push(new Builder().thema(thema).entry('ohne').example('Ohne Geld kann er nichts kaufen.').get());
        entries.push(new Builder().thema(thema).entry('das Öl').example('Den Salat machen wir ohne Öl.').get());
        entries.push(new Builder().thema(thema).entry('die Oma, -s').example('Meine Oma ist schon tot.').get());
        entries.push(new Builder().thema(thema).entry('der Opa, -s').example('Mein Opa heißt Hans.').get());
        entries.push(new Builder().thema(thema).entry('die Ordnung').example('Das ist in Ordnung.').get());
        entries.push(new Builder().thema(thema).entry('der Ort, -e').example('Der Ort liegt am Meer.').get());
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'P'];
        entries.push(new Builder().thema(thema).entry('das Papier').example('Hier sind Papier und Bleistift.').get());
        entries.push(new Builder().thema(thema).entry('die Papiere (pl.)').example('Haben Sie Ihre Papiere dabei?').get());
        entries.push(new Builder().thema(thema).entry('der Partner, -/die Partnerin, -nen').example('Sie ist meine Partnerin.').get());
        entries.push(new Builder().thema(thema).entry('die Party').example('Heute Abend machen wir eine Party.').get());
        entries.push(new Builder().thema(thema).entry('der Pass, -ä, e').example('Im Hotel brauchst du deinen Pass.').get());
        entries.push(new Builder().thema(thema).entry('die Pause, -n').example('Von 12.00 bis 12.30 Uhr haben wir Mittagspause.').get());
        entries.push(new Builder().thema(thema).entry('der Plan, -ä, e').example('Ich kaufe mir einen Stadtplan.').get());
        entries.push(new Builder().thema(thema).entry('der Platz, -ä, e').example(['Tut mir leid, der Platz ist besetzt.', 'Bitte nehmen Sie Platz!', 'Ich wohne Messeplatz 5.']).get());
        entries.push(new Builder().thema(thema).entry('die Polizei').example('Holen Sie die Polizei!').get());
        entries.push(new Builder().thema(thema).entry('die Pommes frites (pl.)').example('Die Kinder essen Hähnchen mit Pommes frites.').get());
        entries.push(new Builder().thema(thema).entry('die Post').example(['Wo ist die Post, bitte?' , 'Ist Post da?']).get());
        entries.push(new Builder().thema(thema).entry('die Postleitzahl').example('Wie ist Ihre Postleitzahl?').get());
        entries.push(new Builder().thema(thema).entry('das Praktikum').example('Ich mache ein Praktikum bei Siemens.').get());
        entries.push(new Builder().thema(thema).entry('die Praxis').example('Die Praxis ist ab acht Uhr geöffnet.').get());
        entries.push(new Builder().thema(thema).entry('der Preis, -e').example('Die Preise sind hoch.').get());
        entries.push(new Builder().thema(thema).entry('das Problem, -e').example('Mein Problem ist die Sprache.').get());
        entries.push(new Builder().thema(thema).entry('der Prospekt, -e').example('Bitte schicken Sie mir einen Prospekt von Ihrem Hotel.').get());
        entries.push(new Builder().thema(thema).entry('die Prüfung').example('Die Prüfung ist am Montag um 8.00 Uhr.').get());
        entries.push(new Builder().thema(thema).entry('pünktlich').example(['Der Bus fährt pünktlich um acht Uhr.', 'Herr Müller ist immer pünktlich.']).get());
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'R'];
        entries.push(new Builder().thema(thema).entry('Rad fahren').example('Das Kind kann schon Rad fahren.').get());
        entries.push(new Builder().thema(thema).entry('rauchen').example('Ich rauche nicht.').get());
        entries.push(new Builder().thema(thema).entry('der Raum, -ä, e').example('Der Unterricht ist in Raum 332.').get());
        entries.push(new Builder().thema(thema).entry('die Rechnung, -en').example('Die Rechnung, bitte.').get());
        entries.push(new Builder().thema(thema).entry('rechts').example('Die Schillerstraße ist hier rechts.').get());
        entries.push(new Builder().thema(thema).entry('regnen').example('Heute regnet es.').get());
        entries.push(new Builder().thema(thema).entry('der Regen').example('Bei diesem Regen gehe ich nicht raus.').get());
        entries.push(new Builder().thema(thema).entry('der Reis').example('Ich esse gern Reis.').get());
        entries.push(new Builder().thema(thema).entry('reisen').example('Ich reise gern.').get());
        entries.push(new Builder().thema(thema).entry('die Reise').example('Wir machen eine Reise nach Österreich.').get());
        entries.push(new Builder().thema(thema).entry('das Reisebüro, -s').example('Mein Mann arbeitet im Reisebüro.').get());
        entries.push(new Builder().thema(thema).entry('der Reiseführer').example(['Ich kaufe mir einen Reiseführer von Berlin.', 'Unser Reiseführer heißt Peter.']).get());
        entries.push(new Builder().thema(thema).entry('reparieren').example('Er hat das Fahrrad repariert.').get());
        entries.push(new Builder().thema(thema).entry('die Reparatur').example('Die Reparatur ist sehr teuer.').get());
        entries.push(new Builder().thema(thema).entry('das Restaurant, -s').example('Wir essen heute in einem Restaurant.').get());
        entries.push(new Builder().thema(thema).entry('die Rezeption').example('Fragen Sie bitte im Hotel an der Rezeption.').get());
        entries.push(new Builder().thema(thema).entry('richtig').example(['Habe ich das richtig verstanden?', 'Das ist richtig.']).get());
        entries.push(new Builder().thema(thema).entry('riechen').example('Dieser Wein riecht gut.').get());
        entries.push(new Builder().thema(thema).entry('ruhig').example('Ich möchte ein ruhiges Zimmer.').get());
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'S'];
        entries.push(new Builder().thema(thema).entry('der Saft').example('Möchtest du einen Apfelsaft?').get());
        entries.push(new Builder().thema(thema).entry('sagen').example('Sag mal, wie geht es dir denn?').get());
        entries.push(new Builder().thema(thema).entry('der Salat').example('Wie schmeckt dir der Salat?').get());
        entries.push(new Builder().thema(thema).entry('das Salz').example('Herr Ober, kann ich bitte Salz haben?').get());
        entries.push(new Builder().thema(thema).entry('Satz, -ä, e').example('Dieser Satz ist sehr einfach.').get());
        entries.push(new Builder().thema(thema).entry('die S-Bahn').example('Ich nehme lieber die S-Bahn.').get());
        entries.push(new Builder().thema(thema).entry('der Schalter').example('Gehen Sie bitte zum Schalter drei!').get());
        entries.push(new Builder().thema(thema).entry('scheinen').example('Die Sonne scheint.').get());
        entries.push(new Builder().thema(thema).entry('schicken').example('Bitte schicken Sie mir eine E-Mail.').get());
        entries.push(new Builder().thema(thema).entry('das Schild, -er ').example('Haben Sie nicht das Schild gesehen?').get());
        entries.push(new Builder().thema(thema).entry('der Schinken, –').example('Ich möchte gern ein Schinkenbrot.').get());
        entries.push(new Builder().thema(thema).entry('schlafen').example('Ich schlafe meistens acht Stunden.').get());
        entries.push(new Builder().thema(thema).entry('schlecht').example(['Mir ist schlecht!', 'Sie sehen schlecht aus.', 'Wir haben schlechtes Wetter.']).get());
        entries.push(new Builder().thema(thema).entry('schließen').example('Bitte, schließen Sie die Tür.').get());
        entries.push(new Builder().thema(thema).entry('geschlossen').example('Die Bank hat am Samstag geschlossen.').get());
        entries.push(new Builder().thema(thema).entry('der Schluss').example(['Ich muss jetzt Schluss machen.', 'Zum Schluss gibt er uns allen die Hand.']).get());
        entries.push(new Builder().thema(thema).entry('der Schlüssel, –').example('Ich gebe Ihnen noch den Zimmerschlüssel.').get());
        entries.push(new Builder().thema(thema).entry('schmecken').example('Schmeckt das gut?').get());
        entries.push(new Builder().thema(thema).entry('schnell').example('Er fährt schnell.').get());
        entries.push(new Builder().thema(thema).entry('schon').example('Ist das Essen schon fertig?').get());
        entries.push(new Builder().thema(thema).entry('schön').example(['Schönen Urlaub!', 'Das ist sehr schön.']).get());
        entries.push(new Builder().thema(thema).entry('der Schrank, -ä, e').example('Die Gläser stehen im Schrank.').get());
        entries.push(new Builder().thema(thema).entry('schreiben').example('Er schreibt jeden Tag fünfzig E-Mails.').get());
        entries.push(new Builder().thema(thema).entry('der Schuh, -e').example('Zieh die Schuhe aus!').get());
        entries.push(new Builder().thema(thema).entry('die Schule').example(['Meine Tochter geht schon in die Schule.', 'Die Schule ist gleich hier um die Ecke.']).get());
        entries.push(new Builder().thema(thema).entry('der Schüler, –').example('In meinem Kurs sind acht Schülerinnen und fünf Schüler.').get());
        entries.push(new Builder().thema(thema).entry('schwer').example(['Ist Ihr Gepäck sehr schwer?', 'Das ist eine schwere Arbeit.']).get());
        entries.push(new Builder().thema(thema).entry('die Schwester, -n').example('Meine Schwester kommt am Dienstag.').get());
        entries.push(new Builder().thema(thema).entry('schwimmen').example('Ich schwimme jeden Tag einen Kilometer.').get());
        entries.push(new Builder().thema(thema).entry('das Schwimmbad').example('Kommst du mit ins Schwimmbad?').get());
        entries.push(new Builder().thema(thema).entry('der See').example('Komm, wir fahren zum Starnberger See.').get());
        entries.push(new Builder().thema(thema).entry('sehen').example(['Ich kann dich nicht sehen.', 'Ich habe diesen Jungen schon einmal gesehen.']).get());
        entries.push(new Builder().thema(thema).entry('die Sehenswürdigkeit, -en').example('Welche Sehenswürdigkeiten gibt es in Frankfurt?').get());
        entries.push(new Builder().thema(thema).entry('sehr').example(['Danke sehr!', 'Das ist sehr schwer.']).get());
        entries.push(new Builder().thema(thema).entry('sein').example(['Herr Müller ist in seinem Zimmer.', 'Mir ist kalt.', 'Ich bin dreiundzwanzig.']).get());
        entries.push(new Builder().thema(thema).entry('an sein').example('Das Licht ist noch an.').get());
        entries.push(new Builder().thema(thema).entry('auf sein').example('Das Fenster ist noch auf.').get());
        entries.push(new Builder().thema(thema).entry('weg sein').example('Herr Meier ist schon weg.').get());
        entries.push(new Builder().thema(thema).entry('zu sein').example('Die Tür ist zu.').get());
        entries.push(new Builder().thema(thema).entry('seit').example('Ich wohne seit drei Jahren in Köln.').get());
        entries.push(new Builder().thema(thema).entry('selbstständig').example('Er ist selbstständig.').get());
        entries.push(new Builder().thema(thema).entry('sich').example('Sie müssen sich erst anmelden.').get());
        entries.push(new Builder().thema(thema).entry('sie').example('Wie heißt sie?').get());
        entries.push(new Builder().thema(thema).entry('Sie').example('Wie heißen Sie, bitte?').get());
        entries.push(new Builder().thema(thema).entry('sitzen').example('Wo sitzen Sie?').get());
        entries.push(new Builder().thema(thema).entry('so').example(['Sie müssen das so machen!', 'Fahren Sie bitte nicht so schnell!', 'Meine Frau ist so groß wie ich.', 'So, das war‘s/wär‘s!']).get());
        entries.push(new Builder().thema(thema).entry('das Sofa').example('Das Sofa ist neu.').get());
        entries.push(new Builder().thema(thema).entry('sofort').example('Bitte antworten Sie sofort.').get());
        entries.push(new Builder().thema(thema).entry('der Sohn, -ö, e').example('Das ist Hans, mein Sohn.').get());
        entries.push(new Builder().thema(thema).entry('sollen').example(['Soll ich kommen?', 'Was soll ich mitbringen?']).get());
        entries.push(new Builder().thema(thema).entry('die Sonne').example('Die Sonne scheint.').get());
        entries.push(new Builder().thema(thema).entry('spät').example('Es ist schon spät, ich muss gehen.').get());
        entries.push(new Builder().thema(thema).entry('später').example('Das können wir später machen.').get());
        entries.push(new Builder().thema(thema).entry('die Speisekarte').example('Bringen Sie mir die Speisekarte, bitte.').get());
        entries.push(new Builder().thema(thema).entry('spielen').example(['Die Kinder spielen draußen.', 'Spielen Sie Karten?']).get());
        entries.push(new Builder().thema(thema).entry('der Sport').example('Ich mache viel Sport.').get());
        entries.push(new Builder().thema(thema).entry('die Sprache, -n').example('Welche Sprachen sprichst du?').get());
        entries.push(new Builder().thema(thema).entry('sprechen').example('Kann ich (mit) Herrn Klein sprechen?').get());
        entries.push(new Builder().thema(thema).entry('die Stadt, -ä, e').example('Heidelberg ist eine alte Stadt.').get());
        entries.push(new Builder().thema(thema).entry('stehen').example(['Ich glaube es nicht, aber es steht in der Zeitung.', 'Der Bus steht schon an der Haltestelle.']).get());
        entries.push(new Builder().thema(thema).entry('die Stelle, -n').example('Ich habe eine neue Stelle.').get());
        entries.push(new Builder().thema(thema).entry('stellen').example('Stell die Tasche rechts in die Ecke!').get());
        entries.push(new Builder().thema(thema).entry('der Stock').example('Unsere Wohnung liegt im ersten Stock.').get());
        entries.push(new Builder().thema(thema).entry('die Straße, -n').example('In welcher Straße wohnen Sie?').get());
        entries.push(new Builder().thema(thema).entry('die Straßenbahn').example('Wo fährt die Straßenbahn ab?').get());
        entries.push(new Builder().thema(thema).entry('studieren').example('Ich studiere in Mainz.').get());
        entries.push(new Builder().thema(thema).entry('das Studium').example('Das Studium beginnt im Oktober.').get());
        entries.push(new Builder().thema(thema).entry('der Student, -en').example('Ich bin Studentin.').get());
        entries.push(new Builder().thema(thema).entry('die Stunde, -n').example('Ich bin in einer Stunde zurück.').get());
        entries.push(new Builder().thema(thema).entry('suchen').example('Suchst du etwas?').get());
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'T'];
        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'U'];
        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'V'];
        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'W'];
        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'Z'];
        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA1Service;