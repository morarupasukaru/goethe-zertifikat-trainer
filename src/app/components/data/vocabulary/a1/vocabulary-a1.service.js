class VocabularyA1Service {

    /*@ngInject*/
    constructor(GoetheA1VocabularyBuilder) {
        this.createEntries(GoetheA1VocabularyBuilder);
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
        let thema = 'Zahlen';
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
        let thema = 'Datum';
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
        let thema = 'Uhrzeit';
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
        let thema = 'Zeitmaße, Zeitangaben';
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
        let thema = 'Woche/Wochentage';
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
        let thema = 'Tag/Tageszeiten';
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
        let thema = 'Monat/Monatsnamen';
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
        let thema = 'Jahr/Jahreszeiten';
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
        let thema = 'Währungen';
        entries.push(new Builder().thema(thema).entry('Währung').get());
        entries.push(new Builder().thema(thema).entry('1 Euro').get());
        entries.push(new Builder().thema(thema).entry('100 Cent').get());
        return entries;
    }

    createMasseUndGewichteEntries(Builder) {
        let entries = [];
        let thema = 'Maße und Gewichte';
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
        let thema = 'Länder/Ländernamen/Nationalitäten';
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
        let thema = 'Farben';
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
        let thema = 'Himmelsrichtungen';
        entries.push(new Builder().thema(thema).entry('Himmelsrichtung').get());
        entries.push(new Builder().thema(thema).entry('der Norden').get());
        entries.push(new Builder().thema(thema).entry('der Süden').get());
        entries.push(new Builder().thema(thema).entry('der Westen').get());
        entries.push(new Builder().thema(thema).entry('der Westen').get());
        return entries;
    }

    createAEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'A'];
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
        let thema = ['Alphabetische Wortliste', 'B'];
        entries.push(new Builder().thema(thema).entry('das Baby, -s').example('Mein Kind ist noch ein Baby.').get());
        entries.push(new Builder().thema(thema).entry('die Bäckerei').example('Ich geh mal schnell zur Bäckerei.').get());
        // TODO
        entries.push(new Builder().thema(thema).entry('das Bad').example('').get());
        entries.push(new Builder().thema(thema).entry('baden').example('').get());
        entries.push(new Builder().thema(thema).entry('die Bahn').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bahnhof').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bahnsteig').example('').get());
        entries.push(new Builder().thema(thema).entry('bald').example('').get());
        entries.push(new Builder().thema(thema).entry('der Balkon').example('').get());
        entries.push(new Builder().thema(thema).entry('die Banane, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('die Bank').example('').get());
        entries.push(new Builder().thema(thema).entry('bar').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bauch').example('').get());
        entries.push(new Builder().thema(thema).entry('der Baum, -ä, e').example('').get());
        entries.push(new Builder().thema(thema).entry('der Beamte, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('bedeuten').example('').get());
        entries.push(new Builder().thema(thema).entry('beginnen').example('').get());
        entries.push(new Builder().thema(thema).entry('bei').example('').get());
        entries.push(new Builder().thema(thema).entry('beide').example('').get());
        entries.push(new Builder().thema(thema).entry('das Bein, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('das Beispiel, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('zum Beispiel/z. B.').example('').get());
        entries.push(new Builder().thema(thema).entry('bekannt').example('').get());
        entries.push(new Builder().thema(thema).entry('der/die Bekannte, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('bekommen').example('').get());
        entries.push(new Builder().thema(thema).entry('benutzen').example('').get());
        entries.push(new Builder().thema(thema).entry('der Beruf, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('besetzt').example('').get());
        entries.push(new Builder().thema(thema).entry('besichtigen').example('').get());
        entries.push(new Builder().thema(thema).entry('besser').example('').get());
        entries.push(new Builder().thema(thema).entry('best-').example('').get());
        entries.push(new Builder().thema(thema).entry('bestellen').example('').get());
        entries.push(new Builder().thema(thema).entry('besuchen').example('').get());
        entries.push(new Builder().thema(thema).entry('das Bett, -en').example('').get());
        entries.push(new Builder().thema(thema).entry('bezahlen').example('').get());
        entries.push(new Builder().thema(thema).entry('das Bier').example('').get());
        entries.push(new Builder().thema(thema).entry('das Bild, -er').example('').get());
        entries.push(new Builder().thema(thema).entry('billig').example('Die Jacke kostet nur 10 Euro! Die ist aber billig!').get());
        entries.push(new Builder().thema(thema).entry('die Birne, -n').example('Ein Kilo Birnen, bitte!').get());
        entries.push(new Builder().thema(thema).entry('bis').example('').get());
        entries.push(new Builder().thema(thema).entry('bisschen').example('').get());
        entries.push(new Builder().thema(thema).entry('bitte').example('').get());
        entries.push(new Builder().thema(thema).entry('die Bitte, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('bitten').example('').get());
        entries.push(new Builder().thema(thema).entry('bitter').example('').get());
        entries.push(new Builder().thema(thema).entry('bleiben').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bleistift, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('der Blick').example('').get());
        entries.push(new Builder().thema(thema).entry('die Blume, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bogen').example('').get());
        entries.push(new Builder().thema(thema).entry('böse').example('').get());
        entries.push(new Builder().thema(thema).entry('brauchen').example('').get());
        entries.push(new Builder().thema(thema).entry('breit').example('').get());
        entries.push(new Builder().thema(thema).entry('der Brief, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('die Briefmarke, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('bringen').example('').get());
        entries.push(new Builder().thema(thema).entry('das Brot, -e').example('').get());
        entries.push(new Builder().thema(thema).entry('das Brötchen, –').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bruder, -ü').example('').get());
        entries.push(new Builder().thema(thema).entry('das Buch, -ü, er').example('').get());
        entries.push(new Builder().thema(thema).entry('der Buchstabe, -n').example('').get());
        entries.push(new Builder().thema(thema).entry('buchstabieren').example('').get());
        entries.push(new Builder().thema(thema).entry('der Bus, -se').example('').get());
        entries.push(new Builder().thema(thema).entry('die Butter').example('').get());
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'C'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'D'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'E'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'F'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'G'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'H'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'I'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'J'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'K'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'L'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'M'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'N'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'O'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'P'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'R'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'S'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'T'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'U'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'V'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'W'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Alphabetische Wortliste', 'Z'];
//        entries.push(new Builder().thema(thema).entry('').example('').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA1Service;