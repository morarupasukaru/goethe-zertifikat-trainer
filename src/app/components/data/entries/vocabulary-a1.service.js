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
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry('Zahl').get());
        entries.push(new Builder().id('5bf6a357-242b-46b7-8a0e-7c66c0669dda').thema(thema).entry('eins').alternative('1').get());
        entries.push(new Builder().id('e90d5dc4-c6a4-4a4c-b8ce-2e9bee153829').thema(thema).entry('zwei').alternative('2').get());
        entries.push(new Builder().id('a197814b-5ee1-4f16-9395-57c8cb777591').thema(thema).entry('drei').alternative('3').get());
        entries.push(new Builder().id('34306518-3707-418e-9211-474bfc39d362').thema(thema).entry('vier').alternative('4').get());
        entries.push(new Builder().id('62bd4c52-e48c-46e0-84e9-c95ecad656cf').thema(thema).entry('fünf').alternative('5').get());
        entries.push(new Builder().id('33a413a6-0089-482b-aedc-c889da7516d1').thema(thema).entry('sechs').alternative('6').get());
        entries.push(new Builder().id('09f4f3da-6848-404d-8276-22b2079a815a').thema(thema).entry('sieben').alternative('7').get());
        entries.push(new Builder().id('f56eeeaf-0e5b-49be-a04d-0a98f61c6875').thema(thema).entry('acht').alternative('8').get());
        entries.push(new Builder().id('b3634442-cbd6-4381-a7f5-dd43dc8823ba').thema(thema).entry('neun').alternative('9').get());
        entries.push(new Builder().id('f0aa1d7f-b6b6-4310-ba8d-ab4e41c9fb9b').thema(thema).entry('zehn').alternative('10').get());
        entries.push(new Builder().id('28d70b8e-6815-4c63-a0f9-cd13e2371063').thema(thema).entry('elf').alternative('11').get());
        entries.push(new Builder().id('eafe7b9b-abed-4ea2-84e2-152fe61fdfb4').thema(thema).entry('zwölf').alternative('12').get());
        entries.push(new Builder().id('3cd0c12b-9e1f-4aff-909d-20ffd3236685').thema(thema).entry('dreizehn').alternative('13').get());
        entries.push(new Builder().id('177b4a0e-bf0e-403f-b6c5-11ef82d97919').thema(thema).entry('vierzehn').alternative('14').get());
        entries.push(new Builder().id('aa8c796d-5050-4d5c-8308-83d92be40948').thema(thema).entry('fünfzehn').alternative('15').get());
        entries.push(new Builder().id('4cf1a752-49f1-43f9-99ec-c76a2430c1a9').thema(thema).entry('sechzehn').alternative('16').get());
        entries.push(new Builder().id('7cca6fa6-b816-4208-bd3f-4a74b0513253').thema(thema).entry('siebzehn').alternative('17').get());
        entries.push(new Builder().id('b77cbc54-d06b-48c1-a56a-5e16ad62ec67').thema(thema).entry('achtzehn').alternative('18').get());
        entries.push(new Builder().id('2d9f4a13-c185-4649-b85b-8cd69b846778').thema(thema).entry('neunzehn').alternative('19').get());
        entries.push(new Builder().id('2b6ac0b9-1f4c-4449-8d12-741837c5c782').thema(thema).entry('zwanzig').alternative('20').get());
        entries.push(new Builder().id('5a94b5f5-1f24-42f2-9a0f-b346b315b2eb').thema(thema).entry('einundzwanzig').alternative('21').get());
        entries.push(new Builder().id('b8861ea0-2fcd-4f71-a530-cdca19fc76df').thema(thema).entry('dreißig').alternative('30').get());
        entries.push(new Builder().id('c1335ed0-ec29-4a2e-b8b7-b08183239ecb').thema(thema).entry('vierzig').alternative('40').get());
        entries.push(new Builder().id('cebdb768-0955-4c3f-acb9-c92896a29232').thema(thema).entry('fünfzig').alternative('50').get());
        entries.push(new Builder().id('8176a0e1-4625-4052-b6c4-a179cceac7a2').thema(thema).entry('sechzig').alternative('60').get());
        entries.push(new Builder().id('760f822c-31c6-4e38-b520-a025d417beb6').thema(thema).entry('siebzig').alternative('70').get());
        entries.push(new Builder().id('12736972-c1d2-4b61-8b42-1f8d073ff3a8').thema(thema).entry('achtzig').alternative('80').get());
        entries.push(new Builder().id('2b62351f-704c-4584-a0df-427edef277c5').thema(thema).entry('neunzig').alternative('90').get());
        entries.push(new Builder().id('d48a709d-f128-4972-8d45-d8e969d567ab').thema(thema).entry('(ein)hundert').alternative('100').get());
        entries.push(new Builder().id('cdcbef4a-69da-471d-aa51-8298f6cca231').thema(thema).entry('hunderteins').alternative('101').get());
        entries.push(new Builder().id('37c0dc05-4838-4bcd-9dfe-acd02387cdf3').thema(thema).entry('zweihundert').alternative('200').get());
        entries.push(new Builder().id('2b1d5c95-fb5a-4428-b2a5-22fbb2d69b6e').thema(thema).entry('(ein)tausend').alternative('1000').get());
        entries.push(new Builder().id('baa8b5d8-8fb7-4870-ac19-7570de3d1154').thema(thema).entry('eine Million, en').alternative("1'000'000").get());
        entries.push(new Builder().id('78e9fbd0-1c94-4e2a-954a-0f6f63c662b3').thema(thema).entry('eine Milliarde, en').alternative("1'000'000'000").get());
        entries.push(new Builder().id('169ed0eb-37bc-4072-a6c8-d441cc3bdba9').thema(thema).entry('das/der/die erste').get());
        entries.push(new Builder().id('b325d6ad-19ae-44c9-b2e1-92f706527a28').thema(thema).entry('zweite').get());
        entries.push(new Builder().id('ea424c12-d3a7-40bd-8708-e0145d650d69').thema(thema).entry('dritte').get());
        entries.push(new Builder().id('3e3e5149-95f3-4eae-bfb2-6d4b0059eb3f').thema(thema).entry('vierte').get());
        entries.push(new Builder().id('2639629e-b3d6-4f22-b5b8-9fa23a8173ef').thema(thema).entry('usw.').get());
        return entries;
    }

    createDatumEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Datum'];
        entries.push(new Builder().id('4b49807e-625b-4339-bf4d-ab4fda27cbbf').thema(thema).entry('Datum').get());
        entries.push(new Builder().id('155e7251-c663-4699-ad9c-d7d59b25989f').thema(thema).entry('ein halb; halb').alternative('1/2').get());
        entries.push(new Builder().id('102e14fe-89eb-423e-99b5-5791bb967747').thema(thema).entry('ein Vertiel; Viertel ...').alternative('1/4').get());
        entries.push(new Builder().id('c286892c-3595-4b35-a110-ce36b485f406').thema(thema).entry('neunzehnhundertneunundneunzig').alternative('1999').get());
        entries.push(new Builder().id('261bec94-db27-4c3f-a59b-1b4ee8e3cbc4').thema(thema).entry('zweitausendvierzehn').alternative('2014').get());
        entries.push(new Builder().id('258fb3cd-9b3e-49d0-a1aa-dc34c1efbec1').thema(thema).entry('heute ist der erste März/der erste Dritte').alternative('heute ist der 1. März').get());
        entries.push(new Builder().id('dde3aee0-42d0-4191-91c8-54ec097f605f').thema(thema).entry('Berlin, zwölfter Vierter zweitausendzwei').alternative('Berlin, 12. April 2002').get());
        return entries;
    }

    createUhrzeitEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Uhrzeit'];
        entries.push(new Builder().id('bc1db69f-13b1-4040-b02b-fca5bc8804af').thema(thema).entry('Uhrzeit').get());
        entries.push(new Builder().id('b866a346-0417-4145-9d9b-3824bbc34fc2').thema(thema).entry('0.03 Uhr').alternative('null Uhr drei').get());
        entries.push(new Builder().id('8cf09d42-daa8-4b66-b43a-7b3ce538a722').thema(thema).entry('7.15 Uhr').alternative('sieben Uhr fünfzehn').get());
        entries.push(new Builder().id('2eddd640-816b-44db-a872-c9ccfd74a871').thema(thema).entry('13.17 Uhr').alternative('dreizehn Uhr siebzehn').get());
        entries.push(new Builder().id('708a0806-fa82-4c5c-8eb1-aa604cd3874e').thema(thema).entry('24.00 Uhr').alternative('vierundzwanzig Uhr').get());
        entries.push(new Builder().id('68378d14-540e-4a4d-ad3d-b8c026833b12').thema(thema).entry('ein Uhr').get());
        entries.push(new Builder().id('56f22419-b826-4870-b872-2d1b000bb80a').thema(thema).entry('fünf Minuten vor/nach eins (ein Uhr)').get());
        entries.push(new Builder().id('c67fbbe2-2cc3-4a27-847d-fa3c9ac26011').thema(thema).entry('Viertel vor/nach zwei (zwei Uhr)').get());
        entries.push(new Builder().id('2d22157f-bffa-4bfb-9415-ebbb957e71ec').thema(thema).entry('halb drei').get());
        return entries;
    }

    createZeitmasseEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Zeitmaße, Zeitangaben'];
        entries.push(new Builder().id('d8449482-2c2c-42fa-b957-7f4f6aee9263').thema(thema).entry('Zeitmaß').translate('mesure').get());
        entries.push(new Builder().id('a0a83979-7273-4eb0-8d8d-39ad6ff07a49').thema(thema).entry('Zeitangabe').translate('horaire').get());
        entries.push(new Builder().id('855e7ffa-5f40-4272-8609-d44f3218fcfd').thema(thema).entry('die Sekunde, -n').get());
        entries.push(new Builder().id('a63988f4-e29e-406a-867d-26efe4c217e1').thema(thema).entry('die Minute, -n').get());
        entries.push(new Builder().id('c9440b2a-13a2-42fa-8b29-0371471b02ea').thema(thema).entry('die Stunde, -n').get());
        entries.push(new Builder().id('b79b883c-c7bf-483f-8f92-cf24857f90e3').thema(thema).entry('der Tag, -e').get());
        entries.push(new Builder().id('48637174-4333-4af0-a257-e6e3cdad927f').thema(thema).entry('die Woche, -e').get());
        entries.push(new Builder().id('f033e13e-6578-453e-bc95-f20e466a4aa4').thema(thema).entry('das Jahr, -e').get());
        return entries;
    }

    createWocheEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Woche/Wochentage'];
        entries.push(new Builder().id('fc2397a9-3948-466f-adb2-778dd826a81d').thema(thema).entry('Woche').get());
        entries.push(new Builder().id('df9c948b-b7a7-4a90-91ca-3028ade747f2').thema(thema).entry('der Wochentag, -e').get());
        entries.push(new Builder().id('c68e70cb-28a1-4fb2-92ba-326ab62bd053').thema(thema).entry('der Sonntag').get());
        entries.push(new Builder().id('33902868-bf13-4106-8231-609a50f13e25').thema(thema).entry('der Montag').get());
        entries.push(new Builder().id('558aec35-fd7c-4386-95db-86213faa6dd8').thema(thema).entry('der Dienstag').get());
        entries.push(new Builder().id('8b3b8d2e-04cf-4e02-b041-8de9a1c5a80f').thema(thema).entry('der Mittwoch').get());
        entries.push(new Builder().id('c0be5afb-bcce-4ebb-8194-e080e94af7c5').thema(thema).entry('der Donnerstag').get());
        entries.push(new Builder().id('f5db3d62-040d-4809-a2e9-d0940e8253c9').thema(thema).entry('der Freitag').get());
        entries.push(new Builder().id('9e430777-cf83-464f-87d7-59226d55946f').thema(thema).entry('der Samstag/Sonnabend').get());
        entries.push(new Builder().id('5f66e223-4c46-4dfb-96cd-ed8f979a7657').thema(thema).entry('das Wochenende').get());
        entries.push(new Builder().id('9e9417eb-2d07-45b3-a4b1-d837ac7d2f82').thema(thema).entry('am Wochenende').get());
        return entries;
    }

    createTagEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Tag/Tageszeiten'];
        entries.push(new Builder().id('a97f2c69-93a9-4c73-82d8-95e389bb8c09').thema(thema).entry('Tag').get());
		entries.push(new Builder().id('a0c4bfe6-3095-424c-a138-4316999e54c9').thema(thema).entry('Tageszeit').translate('heure du jour').get());
		entries.push(new Builder().id('0be7c9a7-4748-4a75-ae18-434c8736f80d').thema(thema).entry('der Tag').get());
		entries.push(new Builder().id('9e1fd706-f1b5-40f6-bd75-58bb80f32f50').thema(thema).entry('der Morgen').get());
		entries.push(new Builder().id('9c525326-4d41-4fb2-8b27-0c6f60d52072').thema(thema).entry('der Vormittag,-e').get());
		entries.push(new Builder().id('62defed9-6bc5-4613-826f-ae02281e8e75').thema(thema).entry('der Mittag').get());
		entries.push(new Builder().id('b4783936-0e7f-4aab-baa4-ea5613e78f25').thema(thema).entry('der Nachmittag,-e').get());
		entries.push(new Builder().id('09de5061-4ff0-46b7-a73f-ecfaf734e6dc').thema(thema).entry('der Abend,-e').get());
		entries.push(new Builder().id('c1d329bb-163d-456a-89a6-13e4b4d97f9c').thema(thema).entry('die Nacht, ̈-e').get());
        return entries;
    }

    createMonatEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Monat/Monatsnamen'];
		entries.push(new Builder().id('cdf4d716-25ed-45e3-b9ea-5ce5dd3c1c52').thema(thema).entry('Monat').get());
		entries.push(new Builder().id('8da335aa-02b5-4bab-b83a-91accb6560b9').thema(thema).entry('Monatsname').get());
		entries.push(new Builder().id('645fb930-c485-4e0d-ab54-b56b55e07d4f').thema(thema).entry('der Januar').get());
		entries.push(new Builder().id('c9c26a99-ce22-4155-8ff0-0df9f1c4a970').thema(thema).entry('der Februar').get());
		entries.push(new Builder().id('ddf43e0c-7f1f-458f-8237-e8c6289119bb').thema(thema).entry('der März').get());
		entries.push(new Builder().id('7757d640-9a06-4e2c-a234-f5c276cf97ba').thema(thema).entry('der April').get());
		entries.push(new Builder().id('97093811-1599-4515-99ff-3cde5efbbdc1').thema(thema).entry('der Mai').get());
		entries.push(new Builder().id('790eccef-7613-4e9a-ac6e-8e4bd48a41f6').thema(thema).entry('der Juni').get());
		entries.push(new Builder().id('0c46ed36-4191-4ba5-9291-c71502b719d1').thema(thema).entry('der Juli').get());
		entries.push(new Builder().id('44ffd38b-128f-4440-b92f-29da21b29ad5').thema(thema).entry('der August').get());
		entries.push(new Builder().id('a4a7d319-def4-411b-8ecc-bd72be5dbef7').thema(thema).entry('der September').get());
		entries.push(new Builder().id('a1d28685-81cb-4c6c-b93c-1bdbf5353c22').thema(thema).entry('der Oktober').get());
		entries.push(new Builder().id('e56a31cb-ff1c-4653-a853-974022eb57f9').thema(thema).entry('der November').get());
		entries.push(new Builder().id('d6d4b747-a23f-4f03-b153-cef6f057841c').thema(thema).entry('der Dezember').get());
        return entries;
    }

    createJahrEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Jahr/Jahreszeiten'];
		entries.push(new Builder().id('3f3e04d3-abfc-4c1a-9f6d-9ac11330faed').thema(thema).entry('Jahr').get());
		entries.push(new Builder().id('eea71e27-758d-4c51-8957-6ee8b508ca9e').thema(thema).entry('Jahreszeit').translate('saison').get());
		entries.push(new Builder().id('63f4f5c6-a371-45be-9314-e8e6e12b3939').thema(thema).entry('der Frühling/das Frühjahr').get());
		entries.push(new Builder().id('1d11e0fa-ef02-4877-8cac-25afeb86d6d4').thema(thema).entry('der Sommer').get());
		entries.push(new Builder().id('62ad9bcd-cc2e-4967-8e15-149ef1f40159').thema(thema).entry('der Herbst').get());
		entries.push(new Builder().id('5c8eadea-9bbf-44fd-ba5c-4b95cf531d39').thema(thema).entry('der Winter').get());
        return entries;
    }

    createWaehrungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Währungen'];
		entries.push(new Builder().id('88caf01b-f1fe-48f5-85ed-78771baed0b3').thema(thema).entry('Währung').translate('monnaie').get());
		entries.push(new Builder().id('1f6c7efb-a092-447e-baa5-d6735c425d5e').thema(thema).entry('1 Euro').get());
		entries.push(new Builder().id('0d433e60-cc56-417b-b138-f9d58c9fa107').thema(thema).entry('100 Cent').get());
        return entries;
    }

    createMasseUndGewichteEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Maße und Gewichte'];
		entries.push(new Builder().id('7c6187c3-78aa-4d0f-920a-129bb379f0c2').thema(thema).entry('Maße').translate('dimension').get());
		entries.push(new Builder().id('fe46c389-a6f0-439d-97a1-58b4e60eea66').thema(thema).entry('Gewicht').translate('poid').get());
		entries.push(new Builder().id('71b67639-5e6d-4429-9210-7fe37a97a639').thema(thema).entry('ein Meter').alternative('1 m').get());
		entries.push(new Builder().id('aa16a335-27df-471d-acb7-99422d776c8c').thema(thema).entry('ein Zentimeter').alternative('1 cm').get());
		entries.push(new Builder().id('2a4e610e-f9ad-4570-8285-e67dcb0523b4').thema(thema).entry('ein Meter fünfzehn').alternative('1,15 m').get());
		entries.push(new Builder().id('f0ecb9c4-41ae-4b49-bca3-90dfef1ebd56').thema(thema).entry('zweihundert Kilometer').alternative('200 km').get());
		entries.push(new Builder().id('e37d4472-e4f5-4727-a4d9-d9fa0ef3bfe3').thema(thema).entry('ein Quadratmeter').alternative('1 m2').get());
		entries.push(new Builder().id('f21acfb5-06c9-4c16-96dc-c9b16deb321f').thema(thema).entry('ein Grad unter Null/minus ein Grad').alternative('– 1°').get());
		entries.push(new Builder().id('242e9723-2600-4fc5-85c4-7f47ea4b2eff').thema(thema).entry('vier Grad über Null/plus vier Grad').alternative('+ 4°').get());
		entries.push(new Builder().id('996db08a-5eda-4299-802a-7e3884c2fd91').thema(thema).entry('ein Prozent').alternative('1 %').get());
		entries.push(new Builder().id('f01801c6-8ba9-4046-8a81-f90023fd8ae9').thema(thema).entry('ein Liter').alternative('1 l').get());
		entries.push(new Builder().id('47c47aa0-0d35-45c8-a7ed-062383510cdb').thema(thema).entry('ein Gramm').alternative('1 g').get());
		entries.push(new Builder().id('0daa56e3-2c89-44e8-bb4c-f3752e452e25').thema(thema).entry('ein Pfund').alternative('500 g').translate('demi-kilo').get());
		entries.push(new Builder().id('e126211e-c4e5-43b1-a9ac-4ad48a3691f9').thema(thema).entry('ein Kilo(gramm)').alternative('1 kg').get());
        return entries;
    }

    createLaenderEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Länder/Ländernamen/Nationalitäten'];
		entries.push(new Builder().id('d2b8559c-fd60-40c2-be4f-b095d9e5a580').thema(thema).entry('Land').get());
		entries.push(new Builder().id('023b6cee-b8db-435e-b59d-ac39116fdeb6').thema(thema).entry('Ländername').get());
		entries.push(new Builder().id('93765f89-3a36-45a6-8987-7677ea3147e6').thema(thema).entry('Nationalität').get());
		entries.push(new Builder().id('fd0ebdb5-efa7-4382-a92c-65bf50db58df').thema(thema).entry('Deutschland').get());
		entries.push(new Builder().id('5a8544e8-c949-4ba0-b74a-d65a6fa9021c').thema(thema).entry('der/die Deutsche, -n').get());
		entries.push(new Builder().id('8fad46b9-1da1-41d2-9615-443523fe36e4').thema(thema).entry('ein Deutscher, eine Deutsche, Deutsche').get());
		entries.push(new Builder().id('67feb1cd-215b-4ad4-ab2c-f461e573d292').thema(thema).entry('deutsch').get());
		entries.push(new Builder().id('bdbbb0f0-186c-4b34-983f-6d511f9e05a7').thema(thema).entry('Europa').get());
		entries.push(new Builder().id('4d222459-2faf-4083-a1e4-87963e9f62ef').thema(thema).entry('Europäer').get());
		entries.push(new Builder().id('4b2ccfdc-1547-49e5-a94c-b64786332c7c').thema(thema).entry('europäisch').get());
		entries.push(new Builder().id('e46bf7ca-28f0-42e9-b0c5-e3ac5dce4cf5').thema(thema).entry('Herkunft').get());
		entries.push(new Builder().id('fd3f9268-08c9-4961-af0c-e9f0c0a890e3').thema(thema).entry('Bewohner').translate('habitant').get());
		entries.push(new Builder().id('1d41f25e-0388-415b-b4cb-025ca17de32b').thema(thema).entry('die Schweiz').get());
		entries.push(new Builder().id('fc8d33f7-e886-4f9e-94fa-d84629a4c052').thema(thema).entry('der Schweizer, die Schweizerin').get());
        return entries;
    }

    createFarbenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Farben'];
		entries.push(new Builder().id('b33914b5-bb0d-4c0c-b615-151e2f3566b8').thema(thema).entry('Farbe').get());
		entries.push(new Builder().id('6aa63676-8144-4ab3-91b5-13fb69a50f7d').thema(thema).entry('schwarz').get());
		entries.push(new Builder().id('feaacc28-385f-4609-a2b9-1a8baaee80af').thema(thema).entry('grau').get());
		entries.push(new Builder().id('ca2cd194-01fc-4545-8b27-cb2ffa0f4c1c').thema(thema).entry('blau').get());
		entries.push(new Builder().id('ab56f7b6-0f5c-46c3-93a7-500392444fbb').thema(thema).entry('grün').get());
		entries.push(new Builder().id('ac2ae439-b4e7-4863-ab8c-e5b1b57e2f7e').thema(thema).entry('weiß').get());
		entries.push(new Builder().id('3eb17299-eb77-49db-a7f1-f512dfa7167c').thema(thema).entry('rot').get());
		entries.push(new Builder().id('8971cafd-74fe-441a-9620-88b56efcedc1').thema(thema).entry('gelb').get());
		entries.push(new Builder().id('1c004088-6e9b-4136-9711-f30823b50e5d').thema(thema).entry('braun').get());
        return entries;
    }

    createHimmelsrichtungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Himmelsrichtungen'];
		entries.push(new Builder().id('d9e9ef1c-f303-4bb6-9af4-b39c42fc5cb1').thema(thema).entry('Himmelsrichtung').translate('point cardinal').get());
		entries.push(new Builder().id('b6ca2565-9c0b-409c-bb4b-f97e00dd246a').thema(thema).entry('der Norden').translate('Le Nord').get());
		entries.push(new Builder().id('bec81413-7a05-4fa0-8292-7d628bc88be6').thema(thema).entry('der Süden').translate('Le Sud').get());
		entries.push(new Builder().id('a9866e59-5d1b-431b-a362-7df6549d7cfe').thema(thema).entry('der Westen').translate("L'Ouest").get());
		entries.push(new Builder().id('2927d10e-92b9-4c9f-b3b3-37fc8334a3ec').thema(thema).entry('der Osten').translate("L'Est").get());
        return entries;
    }

    createAEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'A'];
		entries.push(new Builder().id('403865ed-1f23-463c-b79e-293a46a5065a').thema(thema).entry('ab').example('Ab morgen muss ich arbeiten.').translate('à partir de').get());
		entries.push(new Builder().id('08a8dd64-3439-4678-a5e1-4a39933480f5').thema(thema).entry('aber').example('Ich bin oft im Büro, aber nur für wenige Stunden.').get());
		entries.push(new Builder().id('e0b9a701-0170-45ce-9e91-b8089373060c').thema(thema).entry('abfahren').example('Wir fahren um zwölf Uhr ab.').translate('partir (se mettre en route en véhicule)').get());
		entries.push(new Builder().id('cee19d81-c514-49c2-bef8-a8c37a11cdfd').thema(thema).entry('die Abfahrt').example('Vor der Abfahrt rufe ich an.').translate('départ').get());
		entries.push(new Builder().id('88fe2d8d-6249-47fc-8852-025f8396d222').thema(thema).entry('abgeben').example('Ich muss meine Schlüssel abgeben.').translate('transmettre').get());
		entries.push(new Builder().id('b959bed2-b82c-4c7d-b8cb-76f7e13b668f').thema(thema).entry('abholen').example(['Wann kann ich den Schrank bei dir abholen?', 'Wir müssen noch meinen Bruder abholen.']).translate(['enlever qc.', 'passer prendre qn.']).get());
		entries.push(new Builder().id('0165db48-723e-4b99-93b2-4b5d17b2af32').thema(thema).entry('der Absender').example('Da ist ein Brief für dich ohne Absender.').translate('expéditeur').get());
		entries.push(new Builder().id('a3c3a22e-1f74-4197-b739-46ef78982992').thema(thema).entry('Achtung').example('Achtung! Das dürfen Sie nicht tun.').get());
		entries.push(new Builder().id('b07c5972-af8c-42e2-b9d8-f04507db4f9f').thema(thema).entry('die Adresse,-en').example('Können Sie mir seine Adresse sagen?').get());
		entries.push(new Builder().id('f2c51968-61a3-4307-a716-6ad366f8fa28').thema(thema).entry('all-').example(['Alles Gute!', 'Das ist alles.', 'Sind alle da?', 'Alle Freunde kommen.', 'Hast du alles?']).get());
		entries.push(new Builder().id('828adaac-7b21-4028-9d1b-58d35623f992').thema(thema).entry('allein').example('Er kommt allein.').get());
		entries.push(new Builder().id('43418e6a-42d2-4892-80f0-b66e79c505a0').thema(thema).entry('also').example(['Also, es ist so: ...', 'Er hat Zeit, also muss er uns helfen.']).translate(['ainsi', 'par conséquent']).get());
		entries.push(new Builder().id('4d7daae3-4855-4a58-9b1a-a4979d751de7').thema(thema).entry('alt').example(['Wie alt sind Sie?', 'Sie sehen aber nicht so alt aus.', 'Mein Auto ist schon sehr alt.', 'Wir wohnen in einem sehr alten Haus.', 'Köln ist eine alte Stadt.']).get());
		entries.push(new Builder().id('1bd603b5-137c-4287-bc08-5edcb9de4fa1').thema(thema).entry('das Alter').example('Alter: 26 Jahre.').get());
		entries.push(new Builder().id('3687c156-36c7-49cd-ba3a-caf130b41712').thema(thema).entry('an').example(['Fahren Sie an der nächsten Straße nach rechts.', 'Wir treffen uns am Bahnhof.', 'Am nächsten Montag geht es leider nicht.']).translate('contre, à, au').get());
		entries.push(new Builder().id('1896fe7a-0f8e-485b-8b69-5eabff2f6ce0').thema(thema).entry('anbieten').example('Was darf ich dir anbieten?').translate('offrir qc. à qn.').get());
		entries.push(new Builder().id('b88be1b0-4a7f-419f-b8de-dc012480d9b5').thema(thema).entry('das Angebot, -e').example('Heute sind Sportschuhe im Angebot.').translate('offre').get());
		entries.push(new Builder().id('85430ac6-372a-4852-b362-073fd0fc2ef0').thema(thema).entry('ander-').example(['WiIlst du diese Jacke?\n– Nein, ich möchte die andere.']).get());
		entries.push(new Builder().id('4fa70c13-58f9-4781-95da-11d2c450ca68').thema(thema).entry('anfangen').example(['Hier fängt die Bahnhofstraße an.', 'Der Unterricht fängt gleich an.']).get());
		entries.push(new Builder().id('2dcc4f9e-aac3-48a1-b1ce-4a7ced0b0f38').thema(thema).entry('der Anfang').example(['Sie wohnt am Anfang der Straße.', 'Wir machen Anfang Juli Urlaub.']).get());
		entries.push(new Builder().id('3d5fda61-8818-4de5-91ec-c5a032c8e1f1').thema(thema).entry('anklicken').example('Da musst du dieses Wort anklicken.').translate('cliquer sur qc. [inform.]').get());
		entries.push(new Builder().id('dc8539ff-3ae3-42ea-a86b-d8944315532e').thema(thema).entry('ankommen').example('Wann kommt dieser Zug in Hamburg an?').translate('arriver (à un endroit)').get());
		entries.push(new Builder().id('d11a8479-6041-4f95-b3a9-0771aa279236').thema(thema).entry('die Ankunft').example('Auf diesem Plan steht nur die Ankunft(-szeit) der Züge.').translate('arrivée').get());
		entries.push(new Builder().id('928d91fc-b7da-4385-83c9-e5d8497cefc9').thema(thema).entry('ankreuzen').example('Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen.').translate('cocher qc.').get());
		entries.push(new Builder().id('673a9d78-9f7d-4f74-b23b-b472ec0b929d').thema(thema).entry('anmachen').example('Mach bitte das Licht an!').translate('allumer qc.').get());
		entries.push(new Builder().id('6a4d80fc-9640-49b0-b98d-e9b5f796ac53').thema(thema).entry('(sich) anmelden').example('Wo kann ich mich anmelden?').translate(['se connecter [inform.]', "s'inscrire à qc."]).get());
		entries.push(new Builder().id('03192112-fcc0-46b3-ba8d-5189f57b6cbd').thema(thema).entry('die Anmeldung').example('Eine Anmeldung für diesen Kurs ist nicht mehr möglich.').translate('inscription').get());
		entries.push(new Builder().id('1df9099c-4285-45ce-bf0f-e1b6320bc704').thema(thema).entry('die Anrede').example('Schreiben Sie auch eine Anrede und einen Gruß.').translate(["formule d'appel", 'titre']).get());
		entries.push(new Builder().id('5586fc72-f740-45c2-8c41-2f165c39365c').thema(thema).entry('anrufen').example(['Kann man Sie anrufen?', 'Peter ruft kurz seine Freundin an.']).get());
		entries.push(new Builder().id('27e48296-11f9-4da0-a535-6b736089232b').thema(thema).entry('der Anruf, -e').example('Sie bekommt viele Anrufe auf ihrem Handy.').get());
		entries.push(new Builder().id('c7c6d8bb-469c-4a65-95af-22aecd2883da').thema(thema).entry('der Anrufbeantworter').example('Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.').get());
		entries.push(new Builder().id('6b0cc80e-a660-416e-b4c1-1fc45034ee98').thema(thema).entry('die Ansage, -n').example('Hören Sie die Ansagen.').translate('annonce enregistrée [techn.]').get());
		entries.push(new Builder().id('19a89f2c-be44-4210-b3db-0bb078bdf196').thema(thema).entry('der Anschluss').example(['In Mannheim haben Sie Anschluss nach Saarbrücken.', 'Ist das die Anmeldung für einen Telefonanschluss?']).translate(['correspondance (pour)', 'raccordement']).get());
		entries.push(new Builder().id('f5098a31-0b81-4d09-9cf2-3d4763a5b21e').thema(thema).entry('an sein').example('Heute Nacht war das Licht an.').translate('être allumé(e)').get());
		entries.push(new Builder().id('38477797-bd99-4c14-8812-8e052bd3d935').thema(thema).entry('antworten').example('Er antwortet nicht.').get());
		entries.push(new Builder().id('46798412-3f16-4017-8fb6-b73641faa9bc').thema(thema).entry('die Antwort, -en').example('Er gibt leider keine Antwort.').get());
		entries.push(new Builder().id('406207cf-0e3a-4e85-900f-239b51881080').thema(thema).entry('die Anzeige, -n').example('Ich habe Ihre Anzeige in der Zeitung gelesen.').translate('annonce').get());
		entries.push(new Builder().id('805b6745-f06a-46f9-b66d-79fee5f3e0a5').thema(thema).entry('(sich) anziehen').example('Ich muss mich noch anziehen.').translate("s'habiller").get());
		entries.push(new Builder().id('d9c1b020-e1f8-41c1-be31-065417332368').thema(thema).entry('das Apartment, -s').example('Wir haben ein Apartment gemietet.').get());
		entries.push(new Builder().id('0ed8d197-63bf-4089-9734-e2ccd0ca7880').thema(thema).entry('der Apfel, -Ä').example('Ein Pfund Äpfel bitte.').get());
		entries.push(new Builder().id('f6cb4746-e6e5-4b19-9b9e-6db39528f642').thema(thema).entry('der Appetit').example('Guten Appetit!').get());
		entries.push(new Builder().id('31e65209-0eb1-47bd-9b51-f519f9787763').thema(thema).entry('arbeiten').example('Wo arbeiten Sie?').get());
		entries.push(new Builder().id('81064741-c04d-4b72-85f7-af6d92a19f5f').thema(thema).entry('die Arbeit, -en').example('Mein Bruder sucht Arbeit.').get());
		entries.push(new Builder().id('b9901e37-cd2c-475a-ae5a-efbca0040fa2').thema(thema).entry('arbeitslos').example('Es gibt bei uns viele Leute, die schon lange arbeitslos sind.').get());
		entries.push(new Builder().id('8e6ca750-1569-4628-85bd-7a80962be93d').thema(thema).entry('der Arbeitsplatz, -ä, e').example('An meinem Arbeitsplatz fehlt ein Drucker.').get());
		entries.push(new Builder().id('cfe6512f-8e4c-427b-aff4-322c449225a1').thema(thema).entry('der Arm, -e').example('Mein Arm tut weh.').get());
		entries.push(new Builder().id('e32513bf-bbba-4343-8fd0-caad91ccbe32').thema(thema).entry('der Arzt, -Ä, e').example('Morgen habe ich einen Termin bei meiner Ärztin.').get());
		entries.push(new Builder().id('898e6065-ec3d-4330-bb99-f256000dc97e').thema(thema).entry('auch').example('Ich bin auch Spanier.').get());
		entries.push(new Builder().id('426ff939-6643-4bb9-a336-de2c849ec502').thema(thema).entry('auf').example(['Die Kinder spielen auf der Straße.', 'Auf Wiedersehen.', 'Wie heißt das auf Deutsch?']).translate(['sur qn./qc. (prép)', 'dans (prép)', 'en (prép. indication de langue / en allemand)']).get());
		entries.push(new Builder().id('008ae107-3475-4bf4-bc18-1e9b80139773').thema(thema).entry('die Aufgabe, -n').example('Das ist eine schwere Aufgabe.').get());
		entries.push(new Builder().id('d3f921d7-f475-4663-a088-01c5b4378e41').thema(thema).entry('aufhören').example(['Der Kurs hört in einer Woche auf.', 'Hier hört die Bahnhofstraße auf.']).translate(['cesser', "s'arrêter"]).get());
		entries.push(new Builder().id('1aac1dae-1c6c-40f1-b05d-d7ca07c70c96').thema(thema).entry('auf sein').example('Du brauchst den Schlüssel nicht. Die Wohnung ist auf.').get());
		entries.push(new Builder().id('12bebaf3-9e95-4a57-a969-531d260155aa').thema(thema).entry('aufstehen').example(['Ich muss immer um vier Uhr aufstehen.', 'Soll ich aufstehen?']).translate('se lever').get());
		entries.push(new Builder().id('5f06d863-85c1-4f9a-a15c-c501ad51c4c6').thema(thema).entry('der Aufzug, -ü, e').example('In diesem Haus gibt es keinen Aufzug.').translate('ascenseur').get());
		entries.push(new Builder().id('c3184dbf-0955-4a5f-8133-30b2605cbe70').thema(thema).entry('das Auge, -n').example('Er hat blaue Augen.').get());
		entries.push(new Builder().id('2628fdb7-6b46-4f19-ab14-1f386b26e898').thema(thema).entry('aus').example('Er kommt aus Brasilien.').translate(['de (prép. provenance)']).get());
		entries.push(new Builder().id('fec683a9-86be-40e7-9686-1e7fc2f20cf2').thema(thema).entry('der Ausflug').example('Morgen machen wir einen Ausflug nach Heidelberg.').translate(['excursion', 'escapade', 'randonnée']).get());
		entries.push(new Builder().id('1f37e3d9-35ab-49fb-be71-663a0a679aac').thema(thema).entry('ausfüllen').example('Füllen Sie bitte dieses Formular aus.').translate('remplir qc. (formulaire)').get());
		entries.push(new Builder().id('2d099649-4732-42ca-b9ee-d3fc670c6fbe').thema(thema).entry('der Ausgang').example('Wo ist der Ausgang?').translate('sortie').get());
		entries.push(new Builder().id('ad1ae53e-1bf2-4605-9b8c-568deed5b03e').thema(thema).entry('die Auskunft, -ü, e').example('Können Sie mir eine Auskunft geben?').translate(['renseignement', 'information', 'précisions']).get());
		entries.push(new Builder().id('962ba1fd-36ed-478e-abf9-58afea919468').thema(thema).entry('das Ausland').example('Fahren Sie ins Ausland?').translate('étranger').get());
		entries.push(new Builder().id('c863f239-d562-44c6-ba43-0830d0dec6b6').thema(thema).entry('der Ausländer, -').example('Sind Sie Ausländerin?').get());
		entries.push(new Builder().id('a32ef679-9b09-4779-a12a-ce6e3fa1cd9f').thema(thema).entry('ausländisch').example('Leider habe ich nur ausländisches Geld.').get());
		entries.push(new Builder().id('f725003a-f5ec-4131-a762-671a57341efa').thema(thema).entry('ausmachen').example('Mach bitte das Licht aus!').translate('éteindre qc.').get());
		entries.push(new Builder().id('4c1ce995-f950-4696-b316-9dc681f0872a').thema(thema).entry('die Aussage, -n').example('Ist die Aussage richtig oder falsch?').translate(['énoncé', 'dire', 'déclaration']).get());
		entries.push(new Builder().id('840249b5-8104-411d-92aa-9aa08343f6f4').thema(thema).entry('aussehen').example('Das sieht schön aus.').translate("avoir l'air + adj").get());
		entries.push(new Builder().id('93d68d0c-c075-46d6-a5fb-47c064656708').thema(thema).entry('aus sein').example(['Das Licht ist aus.', 'Die Schule ist aus.']).translate(['finir', 'prendre fin']).get());
		entries.push(new Builder().id('27feacfc-5994-4da5-b5a1-85969d2adb22').thema(thema).entry('aussteigen').example('Wo muss ich aussteigen?').translate(['débarquer', "descendre (d'un véhicule ou d'un ascenseur"]).get());
		entries.push(new Builder().id('9f5117e9-5304-46df-bc67-05ccc414777a').thema(thema).entry('der Ausweis').example('Hier ist mein Ausweis.').translate(["pièce d'identité", "carte (moyen d'identification)", 'badge']).get());
		entries.push(new Builder().id('4b6b8b9e-e38e-465d-80ce-a85a1d70b081').thema(thema).entry('(sich) ausziehen').example('Zieh die Schuhe aus, bitte!').translate('déchausser ses chaussures').get());
		entries.push(new Builder().id('9eac5df2-d70c-4035-8b7a-024fef6b99ae').thema(thema).entry('das Auto, -s').example('Er kommt mit dem Auto.').get());
		entries.push(new Builder().id('82d65c91-891a-4b4b-878c-a3be0a8b5910').thema(thema).entry('die Autobahn, -en').example('Wo geht‘s hier bitte zur Autobahn?').get());
		entries.push(new Builder().id('2eb7ba3d-7ada-450f-96ad-111b2593cd45').thema(thema).entry('der Automat').example('Die Fahrkarten gibt es nur am Automaten.').translate('distributeur (automatique)').get());
		entries.push(new Builder().id('8816e867-538e-46a3-a475-0bfcdf1e0305').thema(thema).entry('automatisch').example('Du musst nichts machen. Das geht automatisch.').get());
        return entries;
    }

    createBEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'B'];
		entries.push(new Builder().id('4cacc392-6b76-437e-ae8a-b71f4238cef5').thema(thema).entry('das Baby, -s').example('Mein Kind ist noch ein Baby.').get());
		entries.push(new Builder().id('b5a0b570-f6c9-4efa-ba2b-6472d560d86c').thema(thema).entry('die Bäckerei').example('Ich geh mal schnell zur Bäckerei.').get());
		entries.push(new Builder().id('8505d973-b17d-4cf3-a390-283d5e674744').thema(thema).entry('das Bad').example('Wir haben kein großes Bad.').translate(['bain', 'salle de bain']).get());
		entries.push(new Builder().id('9a27f199-c902-4e06-85ec-a090a932d857').thema(thema).entry('baden').example('Ich bade nicht so gern, ich dusche lieber.').translate('se baigner').get());
		entries.push(new Builder().id('b3c416f2-e23a-4f4d-b6c8-42075949805a').thema(thema).entry('die Bahn').example(['Wir fahren lieber mit der Bahn.', 'Ich nehme die nächste Bahn.']).translate(['train', 'société de chemin de fer']).get());
		entries.push(new Builder().id('5f16008a-7a15-4ad1-9105-6aa3ac178a9d').thema(thema).entry('der Bahnhof').example('Komme ich hier zum Bahnhof?').get());
		entries.push(new Builder().id('fbdefecc-47ab-4b4f-8a8a-5af0035ae10d').thema(thema).entry('der Bahnsteig').example('Auf welchem Bahnsteig fährt der Zug?').translate('quai').get());
		entries.push(new Builder().id('d0681916-02a1-4f60-8619-619a330fff84').thema(thema).entry('bald').example('Ich komme bald.').translate(['bientôt (adv)', 'tantôt (adv)', "d'ici peu", 'tôt (adv)']).get());
		entries.push(new Builder().id('302cf43c-85af-4219-b412-f3093381c22e').thema(thema).entry('der Balkon').example('Die Wohnung hat auch einen kleinen Balkon.').get());
		entries.push(new Builder().id('cac00001-f12e-4cac-b739-bd42f4a02a23').thema(thema).entry('die Banane, -n').example('Drei Bananen, bitte!').get());
		entries.push(new Builder().id('51aea63a-819d-4e3f-83a2-b1f9ada6c5cb').thema(thema).entry('die Bank').example(['Die Bank schließt schon um vier Uhr.', 'Er sitzt im Park auf einer Bank und liest.']).translate(['banque (établissement)', 'banc (siège)']).get());
		entries.push(new Builder().id('a86a7140-e120-45b8-aa8d-a64633f52383').thema(thema).entry('bar').example('Muss ich bar zahlen oder geht‘s auch mit Karte?').translate('comptant (argent)').get());
		entries.push(new Builder().id('3b033db8-bfcb-4193-ad96-254eba42b725').thema(thema).entry('der Bauch').example('Seit gestern tut mir der Bauch weh.').translate('ventre').get());
		entries.push(new Builder().id('0307138c-fd63-4b15-adc9-e94ceba6efe1').thema(thema).entry('der Baum, -ä, e').example('Vorsicht, fahr nicht an den Baum!').get());
		entries.push(new Builder().id('d5211377-dcdd-486d-a01e-9686512e0e1e').thema(thema).entry('der Beamte, -n').example('Fragen Sie die Beamtin an Schalter acht!').translate('fonctionnaire').get());
		entries.push(new Builder().id('ebaedbb3-6f7d-4ebc-a9e5-b7cfaa0c6974').thema(thema).entry('bedeuten').example('Was bedeutet das Wort?').get());
		entries.push(new Builder().id('50cafe0a-1b20-4a09-aea8-715b4acca618').thema(thema).entry('beginnen').example('Das Spiel beginnt um 15.30 Uhr.').get());
		entries.push(new Builder().id('7884918a-fa8a-4c4d-b735-cc7f533dc59c').thema(thema).entry('bei').example(['Offenbach liegt bei Frankfurt.', 'Ich wohne bei meinen Eltern.', 'Bei uns regnet es heute.', 'Er arbeitet bei der Polizei.']).translate(['dans (prép)', 'pour (prép, finalité)', 'près de (prép, spatial)']).get());
		entries.push(new Builder().id('50f4bd64-94fd-4e4f-a4ed-8ee7dd3af822').thema(thema).entry('beide').example(['Beide Eltern arbeiten.', 'Wir kommen beide.']).get());
		entries.push(new Builder().id('ce78184d-8db2-46b0-9aeb-3c33d9739a9d').thema(thema).entry('das Bein, -e').example('Mein rechtes Bein tut weh.').translate('jambe').get());
		entries.push(new Builder().id('bd64a316-54e8-4817-8039-50f376f6ad25').thema(thema).entry('das Beispiel, -e').example('Kannst du mir ein Beispiel sagen?').get());
		entries.push(new Builder().id('8c3ee7fa-5952-4d98-909c-aa2640fc5d84').thema(thema).entry('zum Beispiel/z. B.').example('Viele meiner Verwandten, z. B. meine beiden Brüder, arbeiten auch hier.').get());
		entries.push(new Builder().id('c165b410-d775-42f8-8336-3ce07bbeb318').thema(thema).entry('bekannt').example('Picasso ist sehr bekannt.').get());
		entries.push(new Builder().id('57530167-5623-44c4-b366-a8ee4809929c').thema(thema).entry('der/die Bekannte, -n').example('Ein Bekannter von mir heißt Klaus.').translate('connaissance').get());
		entries.push(new Builder().id('4bc9b5d6-f583-4b38-8ae8-1c50703eb467').thema(thema).entry('bekommen').example(['Haben Sie meinen Brief bekommen?', 'Was bekommen Sie?', 'Dieses Medikament bekommen Sie in der Apotheke.']).get());
		entries.push(new Builder().id('cb59e869-5a8c-4604-bc06-5a0fc1280dd2').thema(thema).entry('benutzen').example('Die Aufzüge bitte nicht benutzen!').get());
		entries.push(new Builder().id('7f633d14-2b40-4555-b985-6fc69624bc2c').thema(thema).entry('der Beruf, -e').example(['Was sind Sie von Beruf?', 'Was ist Ihr Beruf?']).get());
		entries.push(new Builder().id('375749b8-f15c-40b1-8ef1-b5999ec0eeba').thema(thema).entry('besetzt').example(['Die Nummer ist immer besetzt.', 'Der Platz ist besetzt.']).get());
		entries.push(new Builder().id('c402149b-d198-46a7-afb7-422a07510f62').thema(thema).entry('besichtigen').example('Ich möchte gern den Dom besichtigen.').translate('visiter qc.').get());
		entries.push(new Builder().id('f733c081-d339-4978-a9c9-818f79830389').thema(thema).entry('besser').example('Es geht mir schon besser.').get());
		entries.push(new Builder().id('1345efdc-7967-47b4-b1c4-9bf96b0299c7').thema(thema).entry('best-').example('Am besten treffen wir uns morgen.').get());
		entries.push(new Builder().id('0b83fafa-7b19-44dd-929f-c2c4364436ed').thema(thema).entry('bestellen').example(['Wir möchten bestellen, bitte.', 'Dieses Buch haben wir nicht – sollen wir es für Sie bestellen?']).get());
		entries.push(new Builder().id('c898f6a7-e8ec-431a-b8bd-789925e435f8').thema(thema).entry('besuchen').example('Darf ich dich besuchen?').translate('(aller) voir qn., rendre visite').get());
		entries.push(new Builder().id('5ae8e428-5fbf-436b-a01c-c35c908e2b08').thema(thema).entry('das Bett, -en').example('Wir brauchen noch ein Kinderbett.').get());
		entries.push(new Builder().id('b8011704-81f3-4322-93bf-bb69935c2207').thema(thema).entry('bezahlen').example('Wo muss ich bezahlen?').translate('payer (pour qc.)').get());
		entries.push(new Builder().id('7f03b544-984f-4e21-a8da-790c3b6e69be').thema(thema).entry('das Bier').example('Noch ein Bier bitte.').get());
		entries.push(new Builder().id('67c33bc7-e5c4-4eb3-be77-d4eb3d1424c6').thema(thema).entry('das Bild, -er').example('Hast du ein Bild von deinem Sohn?').translate(['image', 'photo', 'tableau', 'dessin']).get());
		entries.push(new Builder().id('c0b2b38b-554e-4682-9229-507084edb563').thema(thema).entry('billig').example('Die Jacke kostet nur 10 Euro! Die ist aber billig!').get());
		entries.push(new Builder().id('71d0e49e-ad27-4f11-bbc6-b655c72941b0').thema(thema).entry('die Birne, -n').example('Ein Kilo Birnen, bitte!').translate('poire').get());
		entries.push(new Builder().id('72168994-7f13-4128-a6b0-f76f416ab1ca').thema(thema).entry('bis').example(['Ich fahre nur bis Stuttgart.', 'Ich warte bis morgen.']).translate(['jusque (prép)', 'à (prép)']).get());
		entries.push(new Builder().id('090265ea-d714-49e6-b973-3c5556c3b52b').thema(thema).entry('bisschen').example('Ich spreche Englisch, Französisch und ein bisschen Deutsch.').translate(['quelque peu', 'légèrement (adv)']).get());
		entries.push(new Builder().id('83cb2f8f-d97a-45b1-9427-38f1ecd83ad7').thema(thema).entry('bitte').example(['Eine Tasse Kaffee, bitte!', 'Sprechen Sie bitte leise!']).get());
		entries.push(new Builder().id('688af42a-e519-49af-8ada-0867615b0d5c').thema(thema).entry('die Bitte, -n').example('Ich habe noch eine Bitte.').translate(['demande', 'sollicitation']).get());
		entries.push(new Builder().id('ce65ddaa-27ea-4513-9b99-07f017d012d0').thema(thema).entry('bitten').example('Darf ich Sie um etwas bitten?').translate('quémander qc. (demander)').get());
		entries.push(new Builder().id('43151efa-20bb-4f5a-b5e0-1a4d4f95e52e').thema(thema).entry('bitter').example('Der Kaffee schmeckt bitter.').translate('amer, amère').get());
		entries.push(new Builder().id('112fd964-3823-4181-8cc9-60a1c87e9b5c').thema(thema).entry('bleiben').example(['Ich bleibe heute zu Hause.', 'Wir bleiben nur bis morgen.']).get());
		entries.push(new Builder().id('0b106f1e-3553-4fd8-862f-2c6a3191bc76').thema(thema).entry('der Bleistift, -e').example('Hast du einen Bleistift?').translate('crayon à papier').get());
		entries.push(new Builder().id('b611a022-39b0-47fe-b320-adc293f76a44').thema(thema).entry('der Blick').example('Von diesem Hotel hat man einen guten Blick auf den Rhein.').translate(['perspective', 'vue', 'regard']).get());
		entries.push(new Builder().id('ed54d09f-cc92-45bb-a7e9-37a965ad8ade').thema(thema).entry('die Blume, -n').example('Gefallen dir die Blumen?').translate(['fleur', 'bouquet']).get());
		entries.push(new Builder().id('d13f588f-9222-4d26-ad02-ec7623da0be5').thema(thema).entry('der Bogen').example('Schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.').translate('feuille').get());
		entries.push(new Builder().id('471aafe6-f3dd-4512-acf0-979928f122f5').thema(thema).entry('böse').example('Sie ist böse auf mich.').translate(['méchant, méchante', 'énervé, énervée', 'fâché, fâchée', 'vilain, vilaine', 'malfaisant, malfaisante']).get());
		entries.push(new Builder().id('714d0920-aa27-4ee8-87eb-d03b85f4989f').thema(thema).entry('brauchen').example('Brauchst du die Zeitung noch?').get());
		entries.push(new Builder().id('13c1e545-7904-4c86-b320-8b70a68f707a').thema(thema).entry('breit').example('Wie breit ist der Schrank?').translate(['large', 'fort, forte (corpulent, taille, hanches)']).get());
		entries.push(new Builder().id('0faf5ebb-858c-48a4-b639-1112e9c5270e').thema(thema).entry('der Brief, -e').example('Haben Sie einen Brief für mich?').get());
		entries.push(new Builder().id('61619dac-f5dc-45e6-afba-bf3b3fe10f18').thema(thema).entry('die Briefmarke, -n').example('Kaufst du bitte Briefmarken bei der Post.').get());
		entries.push(new Builder().id('4620343c-f161-468f-9f5c-ebc36c9602dd').thema(thema).entry('bringen').example(['Bringen Sie mir bitte noch einen Kaffee!', 'Wir müssen ihn zum Arzt bringen.']).get());
		entries.push(new Builder().id('17a1c824-dcda-49cf-a866-39c17ac740c1').thema(thema).entry('das Brot, -e').example(['Haben Sie auch Weißbrot?', 'Nimm noch ein paar Brote für die Fahrt mit.']).get());
		entries.push(new Builder().id('b76f6acf-d5d7-430f-a91a-b4b06be59ed8').thema(thema).entry('das Brötchen, –').example('Möchtest du Brötchen zum Frühstück?').get());
		entries.push(new Builder().id('56fa1056-4cf2-4855-a58d-7033df1030b5').thema(thema).entry('der Bruder, -ü').example('Sein Bruder arbeitet auch hier.').get());
		entries.push(new Builder().id('440f54bb-8e2a-4696-97c9-ca29812c5cef').thema(thema).entry('das Buch, -ü, er').example(['Gute Bücher sind oft sehr teuer.', 'In diesem Wörterbuch finden Sie mehr als 20.000 Wörter.']).get());
		entries.push(new Builder().id('87034ea8-5c69-4a26-9af5-ddac066de4ff').thema(thema).entry('der Buchstabe, -n').example('Diesen Buchstaben gibt es in meiner Sprache nicht.').translate('lettre').get());
		entries.push(new Builder().id('9b8066bc-321c-468f-bcab-ca77028cbabb').thema(thema).entry('buchstabieren').example('Bitte buchstabieren Sie Ihren Namen.').get());
		entries.push(new Builder().id('923aadb9-7a28-4d86-89da-b84fe95eed41').thema(thema).entry('der Bus, -se').example('Wann kommt der nächste Bus?').get());
		entries.push(new Builder().id('6693a186-493d-4abc-b3d2-640266ff5cb7').thema(thema).entry('die Butter').example('Für mich bitte ein Brötchen mit Butter und Käse.').get());
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'C'];
		entries.push(new Builder().id('49c0c572-fc64-4022-a196-571093216d79').thema(thema).entry('das Café, -s').example('Sollen wir uns im Café treffen?').translate(['café (lieu)̈́', 'salon de thé']).get());
		entries.push(new Builder().id('764751e6-bf19-43a9-abfb-a86315f58ce2').thema(thema).entry('die CD, -s').example('Bring bitte deine Lieblings-CD mit.').get());
		entries.push(new Builder().id('8561d593-0816-4f05-b3ed-2351d1b33b2c').thema(thema).entry('der Chef').example('Wir haben eine neue Chefin.').get());
		entries.push(new Builder().id('b3c4aa92-7522-4006-94f6-49b74f2b36fb').thema(thema).entry('circa/ca.').example('Von Mainz nach Frankfurt sind es circa fünfzig Kilometer.').translate('environ').get());
		entries.push(new Builder().id('ff275b29-1bbe-44f9-968e-23e3c291e20b').thema(thema).entry('der Computer, –').example('Wann bekommst du deinen neuen Computer?').get());
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'D'];
		entries.push(new Builder().id('83668d46-dae5-4325-993c-7004250dfbd3').thema(thema).entry('da').example(['Da hinten ist er ja.', 'Wir sprechen gerade über Paul. Da kommt er ja gerade.', 'Ich nehme das da.', 'Ist Herr Klein schon da?']).translate(['y (adv)', 'voilà (adv)', 'là (au sens de: ici)', 'alors (adv)']).get());
		entries.push(new Builder().id('0212e3ed-ba33-47b3-9be1-fb16379f33f7').thema(thema).entry('die Dame, -n').example(['Damen (an der Toilette)', 'Sehr geehrte Damen und Herren!']).get());
		entries.push(new Builder().id('3c4e2255-e2b9-4369-a43f-c0514e4a0d62').thema(thema).entry('daneben').example('Du kennst doch die Post. Daneben ist die Bank.').translate('à côté').get());
		entries.push(new Builder().id('dcf87cc0-bf47-4794-8613-b4fba1e014e4').thema(thema).entry('danken').example('Ich danke Ihnen für die Einladung.').get());
		entries.push(new Builder().id('8f1f92e6-917e-49e6-8d27-c7e0c3923027').thema(thema).entry('der Dank').example(['Vielen Dank!', 'Herzlichen Dank!']).get());
		entries.push(new Builder().id('8c4998e7-8b94-4090-b2bf-51b41cb91902').thema(thema).entry('danke').example('Soll ich Ihnen helfen? - Nein, danke!').get());
		entries.push(new Builder().id('00508aab-9ad9-4760-a256-94e1920ae40e').thema(thema).entry('dann').example('Ich muss noch schnell zur Post, dann komme ich.').translate(['puis (adv)', 'ensuite (adv)', 'après (adv)', 'dans ce cas']).get());
		entries.push(new Builder().id('ac35580e-c18c-4787-b39a-11a1976ec6b6').thema(thema).entry('das Datum').example('Bitte schreiben Sie noch das Datum auf das Formular.').get());
		entries.push(new Builder().id('0a977ba5-1f5a-4811-9478-6caa5bede84d').thema(thema).entry('dauern').example('Wie lange dauert der Film?').get());
		entries.push(new Builder().id('c68bff33-cea8-44c3-9356-61793fc69a55').thema(thema).entry('dein-').example(['Ist das dein Auto?', 'Ist das deins?']).get());
		entries.push(new Builder().id('cd63f15d-f24f-46ff-804f-97804bd09a66').thema(thema).entry('denn').example('Ich kann nicht kommen, denn ich bin krank.').translate(["c'est que", 'en effet']).get());
		entries.push(new Builder().id('99a24c6c-40f0-4594-954f-7ccf6cce7e19').thema(thema).entry('der, die, das').example(['Ich nehme das da.', 'Hier ist der Brief, den du suchst.', 'Die Fahrkarte bekommst du am Bahnhof.']).get());
		entries.push(new Builder().id('10872b30-13de-4437-ba62-8c9bc0e58295').thema(thema).entry('dich').example('Die Blumen sind für dich.').get());
		entries.push(new Builder().id('fcb783f2-d5bb-4743-9340-96329965bc6c').thema(thema).entry('dies-').example('Ich nehme lieber diesen Kuchen.').get());
		entries.push(new Builder().id('30b042e6-d131-4504-a649-66d7b2051bf0').thema(thema).entry('dir').example('Gefallen dir die Blumen?').get());
		entries.push(new Builder().id('7e7e1eab-dedb-4f59-84c8-2b286c80905b').thema(thema).entry('die Disco').example('Heute abend gehen wir in die Disco tanzen.').get());
		entries.push(new Builder().id('3b3f31ea-94b9-404e-99a8-7fbd020001af').thema(thema).entry('der Doktor').example('Meine Tochter ist krank. Wir gehen zum Doktor.').get());
		entries.push(new Builder().id('90a1db4f-00f9-4c30-ae34-956bf148db2c').thema(thema).entry('das Doppelzimmer').example('Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?').translate('chambre double').get());
		entries.push(new Builder().id('06d2c2fb-dc05-40fb-bfb7-6f2d6edeed08').thema(thema).entry('das Dorf, -ö, er').example('Meine Familie lebt in einem Dorf.').translate('village').get());
		entries.push(new Builder().id('41c9f763-6221-4bd2-8fd3-27036e0371ef').thema(thema).entry('dort, -her, -hin').example(['Deine Tasche kannst du dorthin stellen.', 'Dort ist unser Haus.']).translate(['là (adv)', 'y (adv)', 'par là', 'là-bas']).get());
		entries.push(new Builder().id('e07499e8-f3f8-4f02-9aae-c7163a010ea4').thema(thema).entry('draußen').example('Wollen wir draußen sitzen?').translate(["à l'extérieur", 'dehors', 'en extérieur', 'au-dehors']).get());
		entries.push(new Builder().id('bb8296b0-9489-4636-a4ed-3abe70ece163').thema(thema).entry('drucken').example('Bitte drucke das Formular für mich.').translate('imprimer qc.').get());
		entries.push(new Builder().id('0ca79264-2aa8-4ce6-8239-902f9046e711').thema(thema).entry('der Drucker, –').example('Mein Drucker ist kaputt.').get());
		entries.push(new Builder().id('9648bcb4-1a6b-40e4-88f6-b2caf756bff0').thema(thema).entry('drücken').example('Drück hier, dann geht der Computer an.').translate('presser qc.').get());
		entries.push(new Builder().id('e3fb53d1-3622-4e7f-94f0-89bfdea596e4').thema(thema).entry('durch').example('Am besten gehen Sie durch die Breite Straße.').translate('par (prép)').get());
		entries.push(new Builder().id('b3c9d3d7-76cf-4428-8971-950460f7e3a5').thema(thema).entry('die Durchsage, -n').example('Ich habe die Durchsage nicht verstanden.').translate(['énoncé', 'message']).get());
		entries.push(new Builder().id('8b4fe139-bada-49a3-9b78-491f526ea3a5').thema(thema).entry('dürfen').example(['Sie dürfen hier nicht rauchen.', 'Darf ich Sie zu einem Kaffee einladen?', 'Es darf nicht mehr als 15 Euro kosten.']).translate(['pouvoir', 'avoir le droit de', 'falloir (verbe impersonnel)']).get());
		entries.push(new Builder().id('7d070219-ce98-4bc7-a45b-0614a6b42e82').thema(thema).entry('der Durst').example('Hast du etwas zu trinken? Ich habe großen Durst.').get());
		entries.push(new Builder().id('3221deaf-1074-45e9-b4c9-47b9825add0c').thema(thema).entry('(sich) duschen').example('Ich bade nicht so gern, ich dusche lieber.').get());
		entries.push(new Builder().id('5caa35fa-bd84-4377-bb02-b74b226d6d75').thema(thema).entry('die Dusche').example('Unsere Wohnung hat nur eine Dusche.').get());
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'E'];
		entries.push(new Builder().id('4a00c5e4-aa5e-4ff5-bb73-c2eda869ac7f').thema(thema).entry('die Ecke, -n').example('An der nächsten Ecke links.').translate(['coin', 'angle']).get());
		entries.push(new Builder().id('d4d376f9-0a64-4a80-99b1-9e5608d283fe').thema(thema).entry('die Ehefrau, -en/der Ehemann, ä, er').example('Das ist mein (Ehe-) Mann/meine (Ehe-) Frau.').translate(['épouse', 'époux']).get());
		entries.push(new Builder().id('7f4e6daf-c868-47a8-9166-653366928395').thema(thema).entry('das Ei, -er').example('Möchtest du ein Ei zum Frühstück?').get());
		entries.push(new Builder().id('463410d8-c3f6-44c9-9c66-ee96e0484c73').thema(thema).entry('eilig').example('Hast du es eilig?').translate(['pressant, pressante (adj)', 'pressé, préssée (adj)', 'hâtivement (adv)']).get());
		entries.push(new Builder().id('84805721-f0d0-4194-a473-72874f7d5815').thema(thema).entry('ein-').example(['Ich nehme ein Bier. Willst du auch eins?', 'Ist hier einer, der das kann?']).get());
		entries.push(new Builder().id('792391c5-0e03-4d4d-9f2e-c95718ca7808').thema(thema).entry('einfach').example(['Die Prüfung ist ganz einfach.', 'Hin und zurück? – Nein, bitte nur einfach.', 'Ich brauche nur ein einfaches Zimmer.']).get());
		entries.push(new Builder().id('3ea82aec-6366-4be5-871f-4b1ae2399b84').thema(thema).entry('der Eingang').example('Der Eingang ist um die Ecke.').get());
		entries.push(new Builder().id('cfd4e4b8-673d-4511-9967-054de6afade0').thema(thema).entry('einkaufen').example('Ich muss noch für morgen einkaufen.').translate('faire les commissions').get());
		entries.push(new Builder().id('4f1b3e08-04ba-4a2c-ad08-a2e147d076b9').thema(thema).entry('einladen').example('Darf ich Sie zu einem Kaffee einladen?').translate('inviter qn. à qc.').get());
		entries.push(new Builder().id('fc16fd47-3f0d-4824-847e-f74274dd9bcc').thema(thema).entry('die Einladung').example('Danke für die Einladung!').get());
		entries.push(new Builder().id('aec6839a-ed30-46da-aa2e-9db8289b247f').thema(thema).entry('einmal').example('Diese Prüfung mache ich nicht noch einmal.').get());
		entries.push(new Builder().id('9e537705-6aca-407c-8009-f01507c68b74').thema(thema).entry('einsteigen').example('Schnell, steig ein, der Zug fährt gleich.').translate('monter (dans un véhicule)').get());
		entries.push(new Builder().id('215d2769-7041-412c-9ff9-b1c2264bc611').thema(thema).entry('der Eintritt').example('Der Preis für den Eintritt ist 5 Euro.').translate(["billet d'entrée", 'entrée (montant à payer pour entrer)']).get());
		entries.push(new Builder().id('23a14180-9fa1-4c60-b0b2-1f3c2d663e1e').thema(thema).entry('das Einzelzimmer').example('Haben Sie noch ein Einzelzimmer?').translate('chambre individuelle').get());
		entries.push(new Builder().id('0a32a971-bd21-4792-8843-73c936d5d870').thema(thema).entry('die Eltern (pl.)').example('Meine Eltern leben in Spanien.').get());
		entries.push(new Builder().id('700fbe1d-538f-4fee-9b56-fda460dab28b').thema(thema).entry('die E-Mail, -s').example('Ich habe Ihre E-Mail nicht bekommen.').get());
		entries.push(new Builder().id('6ec10241-fb15-41a1-9594-29232abf5c34').thema(thema).entry('der Empfänger, –').example('Auf dem Brief steht dein Name, also bist du der Empfänger.').translate(['bénéficiaire', 'destinataire']).get());
		entries.push(new Builder().id('7486947f-344d-428d-97e9-e484939eae72').thema(thema).entry('empfehlen').example('Welchen Wein können Sie mir empfehlen?').translate(['préconiser qc.', 'conseiller qc. à qn.']).get());
		entries.push(new Builder().id('e8dfae62-6d39-45fa-ba4b-bc0a71ffbb47').thema(thema).entry('enden').example('Die Straße endet hier.').get());
		entries.push(new Builder().id('cd2c57ba-351d-4aaf-b475-307f112a9a11').thema(thema).entry('das Ende').example(['Sie wohnt am Ende der Straße.', 'Er bekommt sein Geld am Ende des Monats.']).get());
		entries.push(new Builder().id('46c3864e-d88f-4a1f-8f03-225f63643877').thema(thema).entry('entschuldigen').example('Entschuldigen Sie bitte!').translate("s'excuser").get());
		entries.push(new Builder().id('3e59344d-0432-4e1c-adbe-146958431d2d').thema(thema).entry('die Entschuldigung').example('Entschuldigung! – Bitte.').translate('excuse').get());
		entries.push(new Builder().id('20c1900b-cc3a-4481-b041-14c92c880bd6').thema(thema).entry('er').example('Er heißt Ali.').get());
		entries.push(new Builder().id('d07f1139-f212-49b5-9358-9eee5184b9ba').thema(thema).entry('das Ergebnis, -se').example('Das Ergebnis des Tests bekommen Sie in zwei Wochen.').translate('résultat').get());
		entries.push(new Builder().id('b7a3ade8-7b64-470d-a894-9192c822740f').thema(thema).entry('erklären').example('Kannst du mir das erklären?').get());
		entries.push(new Builder().id('247b7488-f31c-413d-944c-bae745f7f4ba').thema(thema).entry('erlauben').example('Rauchen ist hier nicht erlaubt.').translate('autoriser qc.').get());
		entries.push(new Builder().id('bdeabb73-a125-4b7f-9ee9-a9e4d1bece63').thema(thema).entry('der Erwachsene, -n').example('Dieser Film ist nur für Erwachsene.').get());
		entries.push(new Builder().id('6e4a97a8-d596-4a40-bc4a-15fea517dfbd').thema(thema).entry('erzählen').example('Wir müssen euch etwas erzählen!').get());
		entries.push(new Builder().id('2f14f28b-5180-4349-817f-51c27089da34').thema(thema).entry('es').example('Es regnet.').get());
		entries.push(new Builder().id('e39c1491-7297-42d0-8467-20df40780bab').thema(thema).entry('essen').example('Was gibt es zu essen?').get());
		entries.push(new Builder().id('60964919-aabb-4372-929f-9d54a897fd30').thema(thema).entry('das Essen').example('Das Essen ist heute sehr gut.').translate('repas').get());
		entries.push(new Builder().id('90cc4fb5-5276-493b-97a3-99bb8f64707b').thema(thema).entry('euer').example('Euer Kurs beginnt heute.').translate(['votre', 'vos']).get());
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'F'];
		entries.push(new Builder().id('c32f8ebe-5b3c-4084-bdf7-6556c862ce48').thema(thema).entry('fahren').example('Ich fahre mit dem Auto zur Arbeit.').get());
		entries.push(new Builder().id('a4723c7f-6485-4e5d-bf25-f7434a6c9d52').thema(thema).entry('der Fahrer').example('Bitte nicht mit dem Fahrer sprechen!').get());
		entries.push(new Builder().id('ea45ec2b-6fac-4dcd-966f-83f052cc9714').thema(thema).entry('die Fahrkarte, -n').example('Hast du schon eine Fahrkarte?').translate('billet de transport').get());
		entries.push(new Builder().id('9460a495-aa1f-40b1-abc8-e9efdd0dcc33').thema(thema).entry('das Fahrrad, -ä, er').example('Fährst du mit dem Fahrrad oder mit dem Auto?').get());
		entries.push(new Builder().id('fc4d34e1-8fb4-49dc-867f-11cae3b99c54').thema(thema).entry('falsch').example('Das ist falsch.').get());
		entries.push(new Builder().id('2db7330c-4007-4915-ba6a-904eb45b5798').thema(thema).entry('die Familie, -n').example('Meine Familie lebt in Spanien.').get());
		entries.push(new Builder().id('2024ef41-6b43-4fcf-8d7a-e08218299f72').thema(thema).entry('der Familienname').example('Meine Familiennamen sind García González.').get());
		entries.push(new Builder().id('7e17939b-e80c-42c6-847d-698cde169c88').thema(thema).entry('der Familienstand').example('Bei „Familienstand“ musst du „ledig“ ankreuzen.').translate('état civil').get());
		entries.push(new Builder().id('6a324c5b-199b-4661-a79c-b55c1e4210a6').thema(thema).entry('die Farbe, -n').example('Die Farbe gefällt mir gut.').get());
		entries.push(new Builder().id('0fd9e458-28b5-47f9-80ff-4b4f12eb8d9a').thema(thema).entry('das Fax, -e').example('Schicken Sie uns einfach ein Fax!').get());
		entries.push(new Builder().id('c63b11ac-7cc9-4e68-a69c-b87b2b8c9c55').thema(thema).entry('Feier-').example(['z. B. Feierabend, Feiertag', 'Am Montag ist Feiertag.']).translate('fête').get());
		entries.push(new Builder().id('f97035c3-bcb8-45e2-bde4-4045674c4939').thema(thema).entry('feiern').example('Wir feiern heute meinen Geburtstag.').get());
		entries.push(new Builder().id('4cc06604-799d-4744-b2d5-e12a09ad7323').thema(thema).entry('fehlen').example(['Herr Müller ist nicht da, er fehlt schon seit drei Tagen.', 'Was fehlt Ihnen?']).translate('manquer').get());
		entries.push(new Builder().id('b0008457-d387-48e0-82c8-41af86a394f4').thema(thema).entry('der Fehler, –').example('Diesen Fehler mache ich immer.').get());
		entries.push(new Builder().id('b04d4e3c-386c-490e-ad80-eace9b8948dc').thema(thema).entry('fernsehen').example('Wollen wir heute Abend mal fernsehen?').get());
		entries.push(new Builder().id('077aa9bd-3063-4c47-9f82-a5f3b1023e4c').thema(thema).entry('fertig').example(['Bist du fertig?', 'Ist mein Auto schon fertig?']).get());
		entries.push(new Builder().id('18d0b4a2-78a3-4836-91f7-cf916540757b').thema(thema).entry('das Feuer').example('Haben Sie Feuer?').get());
		entries.push(new Builder().id('49b16f9e-c4e8-4ac5-85b4-cd497322cc4b').thema(thema).entry('das Fieber').example('Mein Mann hat noch immer Fieber.').get());
		entries.push(new Builder().id('393e7786-25b2-42a8-81fd-9805ec28fde9').thema(thema).entry('der Film, -e').example('Ich möchte gern diesen Film sehen.').get());
		entries.push(new Builder().id('92d830df-3b9c-43ef-b891-debe41925ac6').thema(thema).entry('finden').example('Wir müssen den Schlüssel finden.').translate('trouver qc.').get());
		entries.push(new Builder().id('6bf914dc-660a-49d2-8fa7-6e8fe055b750').thema(thema).entry('die Firma').example('Er arbeitet jetzt bei einer anderen Firma.').get());
		entries.push(new Builder().id('d7672a9b-407f-40e6-b9bc-8493af447809').thema(thema).entry('der Fisch, -e').example('Ich esse gern Fisch. Fleisch mag ich nicht.').get());
		entries.push(new Builder().id('d1d9a141-8243-463c-b34b-5e54ff874834').thema(thema).entry('die Flasche, -n').example('Eine Flasche Bier, bitte.').get());
		entries.push(new Builder().id('d6f960ba-f1cc-4db6-81e9-fbeab541c70a').thema(thema).entry('das Fleisch').example('Fleisch mag ich nicht.').get());
		entries.push(new Builder().id('576a05e1-110b-487e-b45f-9a86b2e2ae07').thema(thema).entry('fliegen').example('Ich fliege nicht gern. Deshalb fahre ich mit dem Zug.').translate('voler').get());
		entries.push(new Builder().id('3800b932-260a-4416-8f1c-48c023e36f9e').thema(thema).entry('abfliegen').example('Wann fliegst du ab?').translate('décoller').get());
		entries.push(new Builder().id('2924dddd-4fe2-4d2e-80fe-7e9e8c8e8637').thema(thema).entry('der Abflug').example('Der Abflug ist um 11.20 Uhr.').translate('décollage').get());
		entries.push(new Builder().id('278cbc77-dc9b-4e48-8b4f-77cd8a705aa9').thema(thema).entry('der Flughafen').example('Kannst du mich zum Flughafen bringen?').get());
		entries.push(new Builder().id('d009e9b7-2c4b-4699-bca2-45feb7aeb87d').thema(thema).entry('das Flugzeug').example('Das Flugzeug aus Berlin kommt heute später an.').translate('avion').get());
		entries.push(new Builder().id('bf3b97db-1747-4aa7-b401-17cb4c514ece').thema(thema).entry('das Formular, -e').example('Sie müssen dieses Formular ausfüllen.').get());
		entries.push(new Builder().id('fc776ffd-ad18-40ca-91f6-dc183e343dad').thema(thema).entry('das Foto, -s').example('Darf ich ein Foto machen?').get());
		entries.push(new Builder().id('d89cc850-8331-41da-85af-45b2f50ca015').thema(thema).entry('fragen').example('Er möchte Sie etwas fragen. Wann kommen Sie?').get());
		entries.push(new Builder().id('29f9b0ec-c17c-4a9d-af99-b61507985c51').thema(thema).entry('die Frage, -n').example('Ich habe eine Frage.').get());
		entries.push(new Builder().id('e93a715a-8f96-49b4-9d74-4aa1a698b6b3').thema(thema).entry('die Frau, -en').example(['Das ist Frau Becker.', 'Guten Tag, Frau Schmitt!', 'Hier arbeiten mehr Frauen als Männer.']).get());
		entries.push(new Builder().id('2a92487e-29bc-4244-a1fe-656e7c88b929').thema(thema).entry('frei').example('Ist der Platz noch frei?').get());
		entries.push(new Builder().id('0529e785-a5d5-43d5-a962-c84877103b1f').thema(thema).entry('die Freizeit').example('In meiner Freizeit spiele ich oft Fußball.').get());
		entries.push(new Builder().id('55827877-7340-4a28-9a59-35d71853683d').thema(thema).entry('fremd').example('Das weiß ich nicht; ich bin fremd hier.').translate('étranger, étrangère').get());
		entries.push(new Builder().id('172f0327-5294-49ab-aa17-78e01353a02f').thema(thema).entry('(sich) freuen').example('Ich freue mich auf den Urlaub.').get());
		entries.push(new Builder().id('cf28f9a9-2985-457a-aed8-538e21b255f7').thema(thema).entry('der Freund, -e').example(['Das ist ein Freund von mir.', 'Das ist meine Freundin.']).get());
		entries.push(new Builder().id('ff0a0857-eabd-4397-a732-dda30dd2c750').thema(thema).entry('früher').example('Früher waren wir oft zusammen im Kino.').get());
		entries.push(new Builder().id('ee14ab2e-8619-44d7-8da9-0c219c6a0a82').thema(thema).entry('frühstücken').example('Am Sonntag frühstücke ich gern im Bett.').get());
		entries.push(new Builder().id('f498fddc-80a3-4d95-a52c-e687b1748e45').thema(thema).entry('das Frühstück').example('Möchtest du ein Ei zum Frühstück?').get());
		entries.push(new Builder().id('0a35c425-f05d-477e-a41d-4e011a285835').thema(thema).entry('die Führung').example('Die Führung durch das Haus beginnt in 3 Minuten.').translate('visite guidée').get());
		entries.push(new Builder().id('213a2cf4-5ff4-4acc-a2db-b4f61a39be1e').thema(thema).entry('für').example(['Das ist für Sie.', 'Das ist der Schlüssel für die Haustür.', 'Das ist das Brot für morgen.']).get());
		entries.push(new Builder().id('faf0e45b-7e41-4677-a30a-2093337a24d5').thema(thema).entry('der Fuß, -ü, e').example('Der linke Fuß tut mir weh.').get());
		entries.push(new Builder().id('56d4c6f4-20bd-4195-9d5b-e8f5913dba2d').thema(thema).entry('der Fußball').example('Spielt ihr gerne Fußball?').get());
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'G'];
		entries.push(new Builder().id('4352e9ab-208a-4ff2-809f-11637534a30a').thema(thema).entry('der Garten').example('Wir haben leider keinen Garten.').get());
		entries.push(new Builder().id('a607b7d8-49b9-4d4e-a4b3-d644a3bcde11').thema(thema).entry('der Gast, -ä, e').example('Am Wochenende haben wir mehrere Gäste.').translate(['hôte', 'invité']).get());
		entries.push(new Builder().id('cbb996a6-b857-4c67-ad8e-0c96e6560fcf').thema(thema).entry('geben').example(['Kannst du mir bitte deinen Kugelschreiber geben?', 'Es gibt keine Karten mehr.']).translate(['donner qc. (à qn.)', 'il y a (es gibt)']).get());
		entries.push(new Builder().id('9e001e93-ac03-4a23-84cd-48781560363a').thema(thema).entry('geboren').example('Ich bin in Zagreb geboren.').translate('né, née (adj)').get());
		entries.push(new Builder().id('49d74ef6-155a-4d5b-bee6-31b77e7bab5a').thema(thema).entry('das Geburtsjahr').example('Das Geburtsjahr Ihres Sohnes, bitte?').translate('année de naissance').get());
		entries.push(new Builder().id('89404b94-7386-46a9-9d77-b51c262f882a').thema(thema).entry('der Geburtsort').example('Bitte schreiben Sie Ihren Geburtsort auf das Formular.').translate('lieu de naissance').get());
		entries.push(new Builder().id('86362540-30b8-4045-8e31-b06ffaf75b44').thema(thema).entry('der Geburtstag').example('Herzlichen Glückwunsch zum Geburtstag!').get());
		entries.push(new Builder().id('9212f2b6-cc03-493c-bc50-ff6c6be16d29').thema(thema).entry('gefallen').example('Das gefällt mir.').translate('plaire à qn.').get());
		entries.push(new Builder().id('d2cfa40b-9263-4c13-a5ab-7b7e271d472d').thema(thema).entry('gegen').example(['Fahr nicht gegen den Baum!', 'Ich bin gegen diese Lösung.', 'Wer spielt gegen wen?']).get());
		entries.push(new Builder().id('f4da1113-e1af-445e-82db-fe76229f94aa').thema(thema).entry('gehen').example(['Ich weiß nicht, wie das geht.', 'Wie geht‘s?', 'Jetzt muss ich (aber) leider gehen.', 'Ich muss zum Arzt gehen.', 'Das geht nicht!']).get());
		entries.push(new Builder().id('4ed3eb29-9e25-426d-9e2b-c507e873bb40').thema(thema).entry('gehören').example('Wem gehört das?').translate('appartenir à qn.').get());
		entries.push(new Builder().id('d10c7ca5-cf45-423b-8e0f-8f8ab8f09c67').thema(thema).entry('das Geld').example('Hast du noch Geld?').get());
		entries.push(new Builder().id('8297803c-8b20-4e74-9c7e-4af2c6126e47').thema(thema).entry('das Gemüse').example('Gemüse brauchen wir auch noch.').get());
		entries.push(new Builder().id('07fbc94d-ce00-403d-af3f-3a41bfdfb647').thema(thema).entry('das Gepäck').example('Wollen Sie Ihr Gepäck mitnehmen?').translate('bagages').get());
		entries.push(new Builder().id('cf048668-80c2-475a-b205-b6a353a8aa1e').thema(thema).entry('gerade').example('Da kommt er ja gerade.').translate("tout à l'heure (il y a peu de temps)").get());
		entries.push(new Builder().id('f3be5f5f-d2b7-4782-bd4e-cfae35d78f62').thema(thema).entry('geradeaus').example('Gehen Sie immer geradeaus!').translate('tout droit').get());
		entries.push(new Builder().id('8501db33-6aca-4e2a-bf98-494e4b3b2744').thema(thema).entry('gern(e)').example('Ich gehe gerne einkaufen.').translate('volontiers').get());
		entries.push(new Builder().id('dea36b68-1d19-42a3-aa23-fe453f2af9e3').thema(thema).entry('das Geschäft, -e').example('Die Geschäfte schließen um 18.30 Uhr.').translate('magasin').get());
		entries.push(new Builder().id('386b4394-49cb-4c31-8bac-5664842120f4').thema(thema).entry('das Geschenk, -e').example('Danke für das schöne Geschenk.').get());
		entries.push(new Builder().id('1fe233d8-289f-4b49-9855-f52f8546e228').thema(thema).entry('die Geschwister (pl.)').example('Ich habe leider keine Geschwister.').translate('frère et soeur').get());
		entries.push(new Builder().id('8b8a9041-7c6b-483c-a123-b5b3291a1661').thema(thema).entry('das Gespräch, -e').example('Das Gespräch mit Frau Kunz ist um 14 Uhr.').translate(['entretien', 'conversation']).get());
		entries.push(new Builder().id('682eb900-6ce8-49c2-8603-a5e7e02548b7').thema(thema).entry('gestern').example('Gestern war ich krank.').get());
		entries.push(new Builder().id('2041921f-3ba1-47a3-b47e-4cdd5eb376d0').thema(thema).entry('gestorben').example('Meine Frau ist gestern gestorben.').get());
		entries.push(new Builder().id('bad30088-4db9-43f0-9c49-3a44b5b4167e').thema(thema).entry('das Getränk, -e').example('Mein Lieblingsgetränk ist Tomatensaft.').get());
		entries.push(new Builder().id('9c6e700f-944c-45b9-b573-626876483228').thema(thema).entry('das Gewicht').example('Bei „Gewicht“ schreibst du: 62 Kilo.').translate('poids').get());
		entries.push(new Builder().id('2fd03d4c-dc3c-4ab5-8653-dd5223d2f2c6').thema(thema).entry('gewinnen').example('Wer gewinnt das Spiel?').translate('gagner qc.').get());
		entries.push(new Builder().id('946f65ce-3074-4be2-bed9-02189733ea88').thema(thema).entry('das Glas, -ä, er').example(['Bitte noch ein Glas Wein!', 'Wir brauchen noch drei Gläser.']).get());
		entries.push(new Builder().id('22dbae71-f0b4-48c5-a78c-89800c4d52f4').thema(thema).entry('glauben').example(['Sie können mir glauben, es ist so.', 'Ich glaube, er kommt gleich.']).get());
		entries.push(new Builder().id('cbd8653e-5f28-4b18-869e-00c3d6559af1').thema(thema).entry('gleich').example(['Das ist mir gleich.', 'Das ist der gleiche Preis.', 'Ich komme gleich.']).translate(['égal, égale (adj)', 'même (adv)', 'pareil, pareille (adj)', "tout à l'heure (dans peu de temps)"]).get());
		entries.push(new Builder().id('b3b3daeb-6d91-4f32-b31f-e9e95140167c').thema(thema).entry('das Gleis, -e').example('Der ICE nach Berlin hält heute an Gleis 12.').get());
		entries.push(new Builder().id('0e292060-e663-4fd3-bec3-e4c4171829cb').thema(thema).entry('das Glück').example('Viel Glück!').translate(['bonheur', 'chance']).get());
		entries.push(new Builder().id('cac1961d-6885-432f-947a-0c8912dd0444').thema(thema).entry('glücklich').example('Meine Kinder sind glücklich verheiratet.').translate(['chanceux, chanceuse (adj)', 'heureux, heureuse (adj)']).get());
		entries.push(new Builder().id('3b7d2425-2098-4308-ada4-adbd5e2c06ab').thema(thema).entry('der Glückwunsch').example('Herzlichen Glückwunsch zum Geburtstag.').translate('félicitations').get());
		entries.push(new Builder().id('0475ca9b-4103-47af-9ade-81eedd0b4662').thema(thema).entry('Grad (Celsius)').example('Heute haben wir dreißig Grad.').get());
		entries.push(new Builder().id('67333484-7cf2-4ad4-bdd9-64f9c02a4e7f').thema(thema).entry('gratulieren').example('Ich gratuliere dir!').translate('adresser ses félicitations à qn.').get());
		entries.push(new Builder().id('021792d2-4330-4613-b4d3-ce93a268d652').thema(thema).entry('grillen').example('Heute grillen wir im Garten.').get());
		entries.push(new Builder().id('ba26d705-a05d-4c8f-a45e-ddfbbdec84c8').thema(thema).entry('groß').example(['Mein Bruder und ich sind gleich groß.', 'Frankfurt ist eine große Stadt.']).translate('grand, grande').get());
		entries.push(new Builder().id('a7bffe25-5fb5-41d5-bf1f-e49db73a3982').thema(thema).entry('die Größe').example('Haben Sie das auch in Größe 40?').translate(['taille', 'pointure']).get());
		entries.push(new Builder().id('e4c7a5e9-2de5-4e20-bd16-f6bc772e973b').thema(thema).entry('die Großeltern (pl.)').example('Meine Großeltern leben in Japan.').get());
		entries.push(new Builder().id('3948ed5b-0496-4548-ae19-198f5fcd70e5').thema(thema).entry('die Großmutter').example('Meine Großmutter heißt Eva.').get());
		entries.push(new Builder().id('84eb7c4b-6117-4676-aedc-46fd89e006a5').thema(thema).entry('der Großvater').example('Mein Großvater ist schon 80.').get());
		entries.push(new Builder().id('54e538f9-87f7-41fd-b520-6e3315290b0f').thema(thema).entry('die Gruppe, -n').example('Die erste Gruppe beginnt um 16 Uhr.').get());
		entries.push(new Builder().id('25c9489f-0f40-4fd3-9d8c-4bffb447659c').thema(thema).entry('der Gruß, -ü, e').example(['Viele Grüße an Ihre Frau.', 'Mit freundlichen Grüßen']).translate(['salut', 'salutation']).get());
		entries.push(new Builder().id('dc1c6c92-fc8b-4402-91d2-ab9168f96d22').thema(thema).entry('gültig').example('Der Pass ist nicht mehr gültig.').get());
		entries.push(new Builder().id('5301332c-5946-4f50-a03a-aec08ff92d06').thema(thema).entry('günstig').example('Dort gibt es günstige Angebote.').translate('avantageux, avantageuse (adj)').get());
		entries.push(new Builder().id('7770e7c2-5578-4f92-94ac-e29abd699981').thema(thema).entry('gut').example(['Das finde ich gut.', 'Ich komme um 13 Uhr. – Gut!', 'Guten Morgen!', 'Ein gutes neues Jahr!', 'Guten Appetit!']).get());
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'H'];
		entries.push(new Builder().id('0b3d8848-1ab9-4f6f-93b2-d69fd2adcea7').thema(thema).entry('das Haar, -e').example('Sie hat lange Haare.').get());
		entries.push(new Builder().id('3c23647d-20f9-4dae-a466-fcedadc45ae9').thema(thema).entry('haben').example('Ich habe ein neues Auto.').get());
		entries.push(new Builder().id('1257e658-5e96-413a-955f-660ac7baff12').thema(thema).entry('das Hähnchen, -').example('Ein Hähnchen mit Pommes bitte!').translate('poulet (cuisine)').get());
		entries.push(new Builder().id('49ef4b30-8d26-40da-8b75-7e79278b3d8b').thema(thema).entry('die Halbpension').example('Möchten Sie Vollpension oder Halbpension?').get());
		entries.push(new Builder().id('43261c57-36be-4384-9cde-0d0bed5066ff').thema(thema).entry('die Halle').example('Wir treffen uns in Halle B').get());
		entries.push(new Builder().id('9dfefb0a-a21e-441d-a56f-65850344d20b').thema(thema).entry('hallo').example('Hallo Inge! Wie geht’s?').get());
		entries.push(new Builder().id('58707e65-03b7-4fb5-a8b3-451d5a732e75').thema(thema).entry('halten').example('Dieser Zug hält nicht in Rüdesheim.').translate("s'arrêter").get());
		entries.push(new Builder().id('4b358e00-4aac-4c01-8260-57b6abdcdcf8').thema(thema).entry('die Haltestelle').example('An der nächsten Haltestelle müssen Sie aussteigen.').translate(['arrêt (de train, de bus, de métro)', 'station']).get());
		entries.push(new Builder().id('5931b5b0-5589-4660-bd55-c837d42272a4').thema(thema).entry('die Hand, -ä, e').example('Er gibt mir die Hand.').get());
		entries.push(new Builder().id('91ccfb7b-59ef-40f2-9bee-645a1e3d8536').thema(thema).entry('das Handy, -s').example('In der Schule bitte die Handys ausmachen!').get());
		entries.push(new Builder().id('5b2b068e-8a34-4ac4-909c-8c58ac1157f2').thema(thema).entry('das Haus, -ä, er').example(['In welchem Haus wohnst du?', 'Ich gehe jetzt nach Hause.', 'Paul ist nicht zu Hause.']).get());
		entries.push(new Builder().id('9444f77c-bda7-43e9-af18-351fcd718680').thema(thema).entry('die Hausaufgabe,-n').example('Kannst du mir bei den Hausaufgaben helfen?').get());
		entries.push(new Builder().id('01cf3a78-1822-4dac-93c9-04a8a71b2c14').thema(thema).entry('die Hausfrau, -en/der Hausmann').example('Die Hausfrau/der Hausmann wäscht, kocht und kauft ein.').translate('femme, homme au foyer').get());
		entries.push(new Builder().id('c73e71b2-b665-4277-ad74-dfef3873672a').thema(thema).entry('die Heimat').example('Ich komme aus der Schweiz. Das ist meine Heimat.').translate(["pays d'origine", 'patrie', 'berceau']).get());
		entries.push(new Builder().id('73843d7e-d489-409e-9dfd-1a88fc72d24b').thema(thema).entry('heiraten').example('Meine Schwester heiratet einen Japaner.').get());
		entries.push(new Builder().id('bbc94bbf-7b74-4178-be94-cfc99b9bb6bd').thema(thema).entry('heißen').example(['Ich heiße Charlotte Meier.', 'Wie heißt das auf Deutsch?']).get());
		entries.push(new Builder().id('40c0d444-c075-4015-8556-fbbe9f040db1').thema(thema).entry('helfen').example('Können Sie mir helfen, bitte?').get());
		entries.push(new Builder().id('0ccb7209-1c16-4e39-93b4-613697cccf3c').thema(thema).entry('hell').example('Im Sommer ist es bis 21 Uhr hell.').translate(['clair, claire', 'lumineux, lumineuse', 'blond, blonde']).get());
		entries.push(new Builder().id('9ac95f9c-b78f-43d3-a1b0-ef60858a6e04').thema(thema).entry('der Herd').example('In der neuen Küche fehlt noch der Herd.').translate('cuisinière (appareil ménager)').get());
		entries.push(new Builder().id('88b90f2b-3365-4cfc-861c-68f97030ac3d').thema(thema).entry('der Herr, -en').example('Guten Tag, Herr Sommer!').get());
		entries.push(new Builder().id('38d83747-4ba5-4b73-badc-0ab1b75c0562').thema(thema).entry('herzlich').example('Herzlichen Glückwunsch!').translate(['affectueux, affectueuse (adj)', 'cordial, cordiale (adj)']).get());
		entries.push(new Builder().id('d14103c2-0ce7-4035-b45b-3231a6cb0753').thema(thema).entry('heute').example('Heute ist ein schöner Tag.').get());
		entries.push(new Builder().id('768a84c0-22b5-42f4-b9e5-4172980c418a').thema(thema).entry('hier').example(['Hier ist 06131-553221, Pamela Linke.', 'Hier wohne ich.']).get());
		entries.push(new Builder().id('51d16d5b-ce2c-4c81-988d-baad55154020').thema(thema).entry('die Hilfe').example(['Hilfe! Bitte helfen Sie mir!', 'Brauchen Sie meine Hilfe?']).get());
		entries.push(new Builder().id('ea5b6523-3ed4-4e14-a423-13d9d5944d86').thema(thema).entry('hinten').example('Die Tür zum Aussteigen ist hinten.').translate(['arrière (adv)', 'derrière (adv)', 'en arrière']).get());
		entries.push(new Builder().id('7d2b6c7b-fd66-449a-b2f0-8572515bfe3e').thema(thema).entry('das Hobby, -s').example('Meine Hobbys sind Wandern und Schwimmen.').get());
		entries.push(new Builder().id('e31ba7d3-903e-4473-a8fe-15fb3a24dea2').thema(thema).entry('hoch').example('Der Mount Everest ist 8.880 Meter hoch.').translate('haut, haute (adj)').get());
		entries.push(new Builder().id('5aaff8c8-1428-4200-a8ed-6f4fad8c4def').thema(thema).entry('die Hochzeit').example('Zur dieser Hochzeit kommen mehr als fünfzig Gäste.').translate('mariage').get());
		entries.push(new Builder().id('7d326178-68b5-4fcb-94ee-060025cd0e9a').thema(thema).entry('holen').example('Ich hole zwei Flaschen Wasser aus der Küche.').translate('prendre qc. (aller chercher)').get());
		entries.push(new Builder().id('1ca4b952-d060-4cfb-a6ca-479514b48a52').thema(thema).entry('hören').example(['Hör mal! Was ist das?', 'Ich habe das Lied schon mal gehört.']).get());
		entries.push(new Builder().id('bb89f9fd-13bd-4241-a518-8c3e7e442711').thema(thema).entry('das Hotel, -s').example('Im Urlaub sind wir in einem Hotel am Meer.').get());
		entries.push(new Builder().id('74ab6e81-0533-435d-8aa5-a3dce3940242').thema(thema).entry('der Hund, -e').example('Der Hund ist noch jung.').get());
		entries.push(new Builder().id('19f2df1f-e936-446a-b469-b0597a1d0e47').thema(thema).entry('der Hunger').example('Ich habe Hunger! Wann ist das Essen fertig?').translate('faim').get());
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'I'];
		entries.push(new Builder().id('783875bf-1344-4d1f-b31d-a498bca069bd').thema(thema).entry('ich').example('Ich heiße Veronika.').get());
		entries.push(new Builder().id('9d2b9c94-f1ac-4ef6-8d3e-70628d0a1ce3').thema(thema).entry('ihr/ihm/ihn').example(['Gib ihr/ihm bitte das Buch.', 'Ruf ihn bitte an.']).get());
		entries.push(new Builder().id('407e27fa-bb31-41ed-9476-ced456bccb97').thema(thema).entry('immer').example('Frau Bast kommt immer zu spät.').get());
		entries.push(new Builder().id('71739c33-d064-45f9-af5e-c1a4d77de550').thema(thema).entry('in').example(['Ich wohne in Wiesbaden.', 'Der Zug kommt in fünf Minuten.', 'Frau Rausch arbeitet in einem Geschäft.', 'Komm, wir gehen ins Kino.']).get());
		entries.push(new Builder().id('f4776656-8243-45ce-8db6-00d95886b6b4').thema(thema).entry('die Information, -en').example(['Wenn Sie Fragen haben, gehen Sie zur Information.', 'Wir haben hier wichtige Informationen für Sie.']).get());
		entries.push(new Builder().id('3a5a8c64-8e45-41f7-91be-dca5c41e41ec').thema(thema).entry('international').example('Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China ...').get());
		entries.push(new Builder().id('3fdc6720-31a1-4add-b1fb-b36767e5ca24').thema(thema).entry('das Internet').example('Das findest du im Internet.').get());
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'J'];
		entries.push(new Builder().id('2f66e0e7-4c3a-42b4-a99f-ccee56664249').thema(thema).entry('ja').example('Sind Sie Herr Watanabe? – Ja.').get());
		entries.push(new Builder().id('8d63e586-bcd1-40b1-b65d-ce2abc468dfc').thema(thema).entry('die Jacke, -n').example('Zieh dir eine Jacke an. Es ist kalt.').get());
		entries.push(new Builder().id('be96d14d-7632-446e-a3f4-adff7f147962').thema(thema).entry('jed-').example('Blumen kannst du in jedem Bahnhof kaufen.').get());
		entries.push(new Builder().id('ffb75f29-93f9-47c0-8c06-e7a4d9130783').thema(thema).entry('jetzt').example('Jetzt machen wir eine Pause.').get());
		entries.push(new Builder().id('60194032-7b1e-47a5-bc6d-559ed5e4a2b2').thema(thema).entry('der Job, -s').example('Jenny hat einen neuen Job bei der Post.').get());
		entries.push(new Builder().id('2a81087c-03da-4dfc-9798-8e5650e6454f').thema(thema).entry('der Jugendliche, -n ').example('Viele Jugendliche kaufen gern ein.').translate(['adolescent, adolescente', 'jeune', 'mineur, mineure']).get());
		entries.push(new Builder().id('bb394efd-86d7-4df9-ae2d-7eab8954726e').thema(thema).entry('jung').example('Claudia ist 21. – Was? Noch so jung?').translate('jeune').get());
		entries.push(new Builder().id('239ee04a-9112-4e48-91c2-f517498763a1').thema(thema).entry('der Junge, -n ').example('Ich habe zwei Kinder. Einen Jungen und ein Mädchen.').translate(['garçon', 'fils']).get());
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'K'];
		entries.push(new Builder().id('4361a7bd-4e63-47dd-9fe2-14322660ed18').thema(thema).entry('der Kaffee').example('Zum Frühstück trinke ich immer Kaffee.').translate('café (cuisine)').get());
		entries.push(new Builder().id('35da0a8d-f89f-49e8-b55e-2e2bfffde2b7').thema(thema).entry('kaputt').example('Das Glas war teuer. Es geht sehr leicht kaputt.').get());
		entries.push(new Builder().id('d1da1226-7149-43b1-b30c-2906b017bdbe').thema(thema).entry('die Karte, -n').example(['Ich schreibe meinen Bekannten eine Karte aus dem Urlaub.', 'Wollen wir Karten spielen?', 'Ich möchte auch etwas essen. Bringen Sie mir die Karte, bitte.']).get());
		entries.push(new Builder().id('9490e403-5267-487e-92c4-6e859d5b92c7').thema(thema).entry('(Kredit)-Karte, -n').example('Kann ich auch mit Karte (be-) zahlen?').get());
		entries.push(new Builder().id('3b2324f6-c996-406b-95a1-24c73ef0776a').thema(thema).entry('die Kartoffel, -n').example('Für Pommes frites braucht man Kartoffeln.').get());
		entries.push(new Builder().id('a61b56bf-3b15-49cb-9baa-a216a6456f39').thema(thema).entry('die Kasse').example('Zahlen Sie bitte an der Kasse.').get());
		entries.push(new Builder().id('fbb59101-81af-4da8-ba84-72fb35b3220a').thema(thema).entry('kaufen').example('Tim kauft sich ein neues Auto.').get());
		entries.push(new Builder().id('f67986ce-85d4-40cb-9e08-4f30b8de8def').thema(thema).entry('kein').example('Es gibt keine Eintrittskarten mehr.').get());
		entries.push(new Builder().id('fc9b0c18-8c81-48a1-a605-da1614e66bf6').thema(thema).entry('kennen').example('Kennen Sie diese Frau? – Nein, leider nicht.').translate('connaître qn./qc.').get());
		entries.push(new Builder().id('c6c9bd55-c1b6-4b87-85c0-cf6e75c2d43c').thema(thema).entry('kennenlernen').example('Wir sind neu hier. Wir möchten Sie kennenlernen.').translate('faire la connaissance de qn.').get());
		entries.push(new Builder().id('b9318738-3e0f-4d7a-95a2-9da65a939d18').thema(thema).entry('das Kind, -er').example('Wie viele Kinder haben Sie?').get());
		entries.push(new Builder().id('a5aec7cf-6af5-4f68-97d5-357e813d5ce7').thema(thema).entry('der Kindergarten').example('Die kleine Laura geht schon in den Kindergarten.').get());
		entries.push(new Builder().id('8e053da0-b051-440b-99f3-8788b1bea839').thema(thema).entry('das Kino, -s').example('Wir sehen heute Abend im Kino einen schönen Film.').get());
		entries.push(new Builder().id('43c2a5e3-127f-4828-98b0-b6e167be99a4').thema(thema).entry('der Kiosk').example('Am Kiosk bekommen Sie Getränke, Zigaretten und Zeitungen.').get());
		entries.push(new Builder().id('bd14d93c-21c6-452c-a325-5e6e0ebc884b').thema(thema).entry('klar').example('Kommst du mit? – Klar!').translate(['bien sûr', 'clair, claire (adj)']).get());
		entries.push(new Builder().id('cd91a087-050d-49ab-9c62-312db6540c8c').thema(thema).entry('die Klasse').example(['In unserer Klasse sind fünfundzwanzig Schüler.', 'Im Zug fahre ich immer 2. Klasse.']).get());
		entries.push(new Builder().id('4a326152-0f50-47eb-bbc0-1e4dcc22133d').thema(thema).entry('die Kleidung').example('Wo finde ich Kleidung? – Jacken im ersten, Jeans im zweiten Stock.').get());
		entries.push(new Builder().id('b11e47df-2d02-48f9-b645-08647f0a984b').thema(thema).entry('klein').example('Eltville ist eine kleine Stadt am Rhein.').get());
		entries.push(new Builder().id('631db3ad-13f9-4b55-92e0-508e859d095b').thema(thema).entry('kochen').example('Herr Georgi kann gut kochen.').get());
		entries.push(new Builder().id('3f4b9dac-1c52-4d98-9d20-ca1fc02c6b22').thema(thema).entry('der Koffer, –').example('Ist das Ihr Koffer?').translate(['valise', 'coffre']).get());
		entries.push(new Builder().id('c38671a6-f69d-4edb-86f2-33c74166565f').thema(thema).entry('der Kollege, -n').example('Wie heißt die neue Kollegin?').get());
		entries.push(new Builder().id('7e1ca702-4b3f-4f1c-81dd-b6c0cbb3996b').thema(thema).entry('kommen').example(['Woher kommen Sie? – Aus Frankreich.', 'Kommst du mit ins Schwimmbad?']).get());
		entries.push(new Builder().id('cbb14a81-cec4-425d-832b-849c98974b65').thema(thema).entry('können').example(['Ich kann Deutsch und Russisch.', 'Können Sie mir helfen?']).translate(['pouvoir', 'savoir qc.']).get());
		entries.push(new Builder().id('e80a3622-72ae-43ca-8dc0-8a1a447a2714').thema(thema).entry('das Konto').example('Das Geld überweisen wir am ersten März auf Ihr Konto.').get());
		entries.push(new Builder().id('891776a6-30b7-4ecb-a6fc-615a68e5bc51').thema(thema).entry('der Kopf').example('Mein Kopf tut weh!').get());
		entries.push(new Builder().id('39ee3059-6bf6-4ec4-951e-be4fad4fd7b5').thema(thema).entry('kosten').example('Wie viel kostet das? – 10 Euro.').get());
		entries.push(new Builder().id('f1814f0c-e5ce-4af7-9d2c-62a58c9fb031').thema(thema).entry('krank').example('Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett.').get());
		entries.push(new Builder().id('4e5952b6-c8c9-4fbb-8752-43c153822209').thema(thema).entry('kriegen').example('Ich kriege 15 Euro in der Stunde für meine Arbeit.').translate('recevoir qc. (de qn.)').get());
		entries.push(new Builder().id('3680d9b5-b862-413d-99a2-da4ab672b172').thema(thema).entry('die Küche').example('Der neue Herd kommt in die Küche.').get());
		entries.push(new Builder().id('a08164b0-e21a-4089-9a8a-2a066bbd82a8').thema(thema).entry('der Kuchen').example('Ich nehme ein Stück Kuchen.').translate(['gâteau', 'tarte']).get());
		entries.push(new Builder().id('03f1331f-0e01-44e8-9373-69901ff10dec').thema(thema).entry('der Kugelschreiber').example('Hast du einen Kugelschreiber für mich?').translate('stylo à bille').get());
		entries.push(new Builder().id('0b604171-7482-4b8a-a7a8-61694ca9e6e6').thema(thema).entry('der Kühlschrank').example('Haben wir noch Milch? – Ja, im Kühlschrank.').translate(['frigo', 'réfrigérateur']).get());
		entries.push(new Builder().id('88ef9933-47ca-486f-ac66-b8ee47ebb7a4').thema(thema).entry('kulturell').example('Ich bin kulturell interessiert. Ich gehe oft ins Museum.').translate('culturel, culturelle (adj)').get());
		entries.push(new Builder().id('d78bba6a-3944-4758-931f-cd80b0ed24e1').thema(thema).entry('sich kümmern').example('Jede Mutter kümmert sich um ihre kleinen Kinder.').translate(['prendre soin de qn./qc.', 'se soucier']).get());
		entries.push(new Builder().id('a172e3d0-62e9-4d0d-879a-477b7d6552a7').thema(thema).entry('der Kunde, -n').example('Einen Moment, bitte. Ich habe eine Kundin.').get());
		entries.push(new Builder().id('56220c37-5d08-40a7-9421-8a1652007078').thema(thema).entry('der Kurs, -e').example('Der Deutschkurs geht bis zum Sommer.').get());
		entries.push(new Builder().id('c84e4555-8122-4a5c-a870-0245df3a2224').thema(thema).entry('kurz').example('Ricardo hat kurzes Haar.').get());
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'L'];
		entries.push(new Builder().id('51d93e09-39f0-409e-a508-2372d0466167').thema(thema).entry('lachen').example('Die Kinder lachen viel.').get());
		entries.push(new Builder().id('6f2a489c-1fb5-40ca-8850-324e307c4604').thema(thema).entry('der Laden, -ä').example('Im Buchladen können Sie Bücher kaufen.').translate(['magasin', 'boutique']).get());
		entries.push(new Builder().id('ac7b1738-4568-4a87-8e71-10e3ef44d311').thema(thema).entry('das Land, -ä, er').example('Italien ist ein schönes Land.').get());
		entries.push(new Builder().id('7095ee28-8b10-452c-a475-fa03a54f3133').thema(thema).entry('lang').example('Die Jeans ist zu lang.').translate('long, longue (adj)').get());
		entries.push(new Builder().id('62d2bf47-5a0e-47eb-852e-d69606f668bb').thema(thema).entry('lange').example('Wie lange fährt der Zug von Hamburg nach Berlin?').translate('longtemps (adv)').get());
		entries.push(new Builder().id('14ef337c-2eb5-437a-838f-d77f9ce441a0').thema(thema).entry('langsam').example('Könnten Sie bitte etwas langsamer sprechen?').get());
		entries.push(new Builder().id('ce5db131-d1ac-43a5-badc-354cb562ac23').thema(thema).entry('laufen').example('Ich möchte nicht Auto fahren, ich möchte laufen.').translate(['aller', 'courir', 'marcher']).get());
		entries.push(new Builder().id('987a8cd4-64fe-4df7-8de0-1fa533942e8d').thema(thema).entry('laut').example('Nicht so laut! Das Baby schläft.').translate(['fort (adv, parler)', 'bruyant, bruyante (adj)']).get());
		entries.push(new Builder().id('30f6a9f1-db21-410f-b2c5-0345a407261a').thema(thema).entry('leben').example(['Sie lebt bei ihrer Schwester.', 'Ihre Eltern leben nicht mehr.']).get());
		entries.push(new Builder().id('36610179-6707-4f34-9631-eff61452f469').thema(thema).entry('das Leben').example('Das Leben in diesem Land ist teuer.').get());
		entries.push(new Builder().id('a36f5e15-faa5-4b31-af91-05e944f81a0f').thema(thema).entry('die Lebensmittel (pl.)').example('Lebensmittel bekommen Sie im Supermarkt.').translate('denrées alimentaires').get());
		entries.push(new Builder().id('c8d68f60-e959-4a35-b142-4fa108abbf4c').thema(thema).entry('ledig').example('Sind Sie verheiratet? – Nein. Ledig.').get());
		entries.push(new Builder().id('535f83a1-104e-40b1-9c23-0cd636f7cce2').thema(thema).entry('legen').example('Legen Sie das Buch auf den Tisch.').translate('poser qc.').get());
		entries.push(new Builder().id('c6108f1a-d26f-4e7e-8cc2-a5b29ec8565a').thema(thema).entry('der Lehrer, –').example('Unsere Deutschlehrerin heißt Frau Müller.').get());
		entries.push(new Builder().id('66a4b671-b69a-4893-8e4c-82ea57987cbc').thema(thema).entry('leicht').example(['Der Koffer ist leicht.', 'Deutsch ist nicht leicht.']).translate(['facile (adj)', 'facilement (adv)', 'léger, légère (adj)']).get());
		entries.push(new Builder().id('dbc70dbc-d2fe-4a97-b5ab-50ca970a60a1').thema(thema).entry('leider').example('Leider kann ich nicht kommen. Ich muss zum Arzt.').get());
		entries.push(new Builder().id('74f9bc4c-4a97-4ebc-94a8-cd001524c335').thema(thema).entry('leise').example('Seid leise. Die anderen schlafen schon.').translate(['doucement (adv)', 'faible (adj, bruit)']).get());
		entries.push(new Builder().id('2f257062-79c8-417f-91d3-ac398de2f9c4').thema(thema).entry('lernen').example('Wie lange lernen Sie schon Deutsch?').get());
		entries.push(new Builder().id('13449657-9073-4d79-a9cc-06c2f081bb68').thema(thema).entry('lesen').example('Ich lese ein Buch von García Márquez.').get());
		entries.push(new Builder().id('036acb6c-f913-47fc-90f7-7f181465c218').thema(thema).entry('letzt-').example('Morgen ist der letzte Kurstag.').get());
		entries.push(new Builder().id('1d6d357e-b15f-4777-a08c-46f6754b4e75').thema(thema).entry('die Leute (pl.)').example('In der Disko sind viele Leute.').get());
		entries.push(new Builder().id('17b3ec3c-9c2f-4411-b00c-01160e01067b').thema(thema).entry('das Licht').example('Wo macht man hier das Licht an?').get());
		entries.push(new Builder().id('e36f9139-d2c2-4046-a782-ea5261561847').thema(thema).entry('lieb-').example('Liebe Susanne, lieber Hans,').get());
		entries.push(new Builder().id('ba8bd0e7-31aa-4e35-895a-68999e13e64e').thema(thema).entry('lieben').example('Ich liebe dich!').translate('aimer qn./qc.').get());
		entries.push(new Builder().id('b30680e8-ce0e-453c-ba00-d803f17f0d10').thema(thema).entry('lieber').example('Sie fährt lieber mit der Bahn.').translate('plutôt (adv, de préférence)').get());
		entries.push(new Builder().id('db7697db-0492-4404-a222-0d2e034c1e77').thema(thema).entry('Lieblings-').example('Mein Lieblingsfilm ist „Schwarze Augen“.').translate('favori').get());
		entries.push(new Builder().id('afff57cb-a648-467d-96fe-2d0f5f082aa0').thema(thema).entry('das Lied, -er').example('Welches ist dein Lieblingslied?').translate(['chanson', 'chant']).get());
		entries.push(new Builder().id('07921aa4-47db-4a17-a97d-d668703d0550').thema(thema).entry('liegen').example(['Um neun Uhr liegt Judith noch im Bett.', 'Frankfurt liegt am Main.']).translate(['être allongé(e)', 'être couché', 'se situer (chose)']).get());
		entries.push(new Builder().id('a7100224-a898-4189-bffe-0d5a9673c06e').thema(thema).entry('links').example('Gehen Sie die nächste Straße links.').translate('à gauche').get());
		entries.push(new Builder().id('53ff607c-a9d7-4d62-b0b2-6d6ec744fb8c').thema(thema).entry('der Lkw, -s').example('Dieser Lastkraftwagen ist sehr groß.').translate(['camion', 'poids lourd']).get());
		entries.push(new Builder().id('e2f2da03-719b-46f2-9258-b0570d707220').thema(thema).entry('das Lokal').example('In unserer Straße gibt es ein neues Lokal.').translate(['café (lieux)', 'restaurant', 'local']).get());
		entries.push(new Builder().id('f1248f8b-c950-4c0a-8030-2781ef00492b').thema(thema).entry('die Lösung, -en').example('Die Lösung ist ganz einfach.').get());
		entries.push(new Builder().id('2d4e2e63-4910-401e-9de5-26327e01c27a').thema(thema).entry('lustig').example('Frau Mertens ist lustig. Sie lacht immer.').translate(['amusant, amusante (adj)', 'drôle (adj)']).get());
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'M'];
		entries.push(new Builder().id('751484d7-ef63-4e10-bb39-33941055c711').thema(thema).entry('machen').example(['Was machst du heute Abend?', 'Ich muss jetzt das Essen machen.', 'Das macht 5 Euro 95.', 'Das macht nichts.']).get());
		entries.push(new Builder().id('7e066356-d7a2-49b7-8ce4-e34d6baa9346').thema(thema).entry('das Mädchen, –').example('Familie Kurz bekommt ein Baby. – Junge oder Mädchen?').translate(['fille', 'jeune fille']).get());
		entries.push(new Builder().id('36949b64-99b6-407c-92e4-4b7205e67741').thema(thema).entry('man').example('Hier darf man nicht rauchen.').get());
		entries.push(new Builder().id('1a67c16c-48b1-4686-8e61-bc8cd6c737c1').thema(thema).entry('der Mann, -ä, er').example('Mein Mann arbeitet bei der Polizei.').get());
		entries.push(new Builder().id('3960fdd8-8a5a-4066-ab25-e5486504f9ad').thema(thema).entry('männlich').example('Kreuzen Sie bitte an: „weiblich“ oder „männlich“.').translate('masculin, masculine (adj)').get());
		entries.push(new Builder().id('722be9cb-c874-46c5-994f-aefdb01bfd7a').thema(thema).entry('die Maschine, -n').example('Die Waschmaschine ist günstig.').get());
		entries.push(new Builder().id('9c51dc56-218f-43ec-8a15-42045f713ae7').thema(thema).entry('das Meer').example('Wir machen Urlaub am Meer.').get());
		entries.push(new Builder().id('1799ab76-d180-4aa3-9f99-884b6200d9b7').thema(thema).entry('mehr').example('Dieses Auto kostet 1.000 Euro mehr als das andere.').get());
		entries.push(new Builder().id('a43f9fbe-3771-421f-b43a-63be11e1fe3c').thema(thema).entry('mein').example('Mein Vater ist Arzt.').get());
		entries.push(new Builder().id('a7c9f552-06b5-470e-8a05-ecaec2ffb148').thema(thema).entry('meist-').example('Die meisten Norddeutschen sind sehr groß.').translate(['le plus souvent', "la plupart du temps (exige l'article), adv"]).get());
		entries.push(new Builder().id('0bea5e9e-5c4b-4496-97b3-5a8502e139b6').thema(thema).entry('der Mensch, -en').example('Die Menschen sind hier anders als bei uns.').translate(['homme', 'être humain', 'personne']).get());
		entries.push(new Builder().id('4948d16b-2b44-4354-b96c-8824cfc53ec9').thema(thema).entry('mieten').example('Ich möchte ein Auto mieten.').translate('louer qc.').get());
		entries.push(new Builder().id('c1a73a39-171b-447a-8b93-f48930298310').thema(thema).entry('die Miete').example('Die Miete für diese Wohnung ist 600 Euro.').translate(['loyer', 'bail']).get());
		entries.push(new Builder().id('b40ed8f8-14b8-4038-9152-3389f8d47f90').thema(thema).entry('die Milch').example('Die Milch steht im Kühlschrank.').get());
		entries.push(new Builder().id('629a084e-9286-445b-bb55-1d66aafdddff').thema(thema).entry('mit').example('Trinken Sie den Kaffee mit Milch?').get());
		entries.push(new Builder().id('4cdb3213-4127-45bd-b7c1-cdce9fa56f88').thema(thema).entry('mitbringen').example('Ich gehe einkaufen. Soll ich dir was mitbringen?').translate('rapporter qc.').get());
		entries.push(new Builder().id('f1f07a76-a8b3-4243-87af-e20ec4f44695').thema(thema).entry('mitkommen').example('Ich gehe ins Kino. Kommst du mit?').translate('accompagner qn.').get());
		entries.push(new Builder().id('ae04dd6f-3cb5-446f-b60a-b9132b638d6f').thema(thema).entry('mitmachen').example('Warum macht ihr nicht mit?').translate(['répondre présent', 'être de la partie']).get());
		entries.push(new Builder().id('58e9b39f-27ee-4628-8053-6e31b17d39a4').thema(thema).entry('mitnehmen').example('Nehmen wir meine Schwester ins Kino mit?').translate('emmener qn./qc.').get());
		entries.push(new Builder().id('59c28291-ac13-4256-a28a-bf180800a383').thema(thema).entry('die Mitte').example('Der Lehrer steht in der Mitte des Klassenzimmers.').get());
		entries.push(new Builder().id('a1c53bba-a68f-4833-a238-c0283ee51787').thema(thema).entry('die Möbel (pl.)').example('Sind die Möbel neu?').get());
		entries.push(new Builder().id('80b0a2ee-3155-4e1c-af64-c03d88601cee').thema(thema).entry('möchten').example('Was möchten Sie trinken?').translate('désirer qn./qc.').get());
		entries.push(new Builder().id('1e4aa1b3-68e2-4fcd-9399-82e89a3ca3b8').thema(thema).entry('mögen').example('Magst du Kaffee oder Tee?').translate('aimer qn./qc.').get());
		entries.push(new Builder().id('38d312e7-3c92-43d7-aaa0-5a654dc6bc55').thema(thema).entry('möglich').example('Mit dieser Fahrkarte ist die Fahrt ab 9 Uhr möglich.').translate('possible (adj)').get());
		entries.push(new Builder().id('ab7fa114-4c91-4051-b8ef-343b9044e601').thema(thema).entry('der Moment').example(['Moment mal bitte!', 'Einen Moment bitte.']).translate(['instant', 'moment']).get());
		entries.push(new Builder().id('97aeba31-bbb7-4290-a2a1-72f19a2ce080').thema(thema).entry('morgen').example('Morgen beginnt die Schule um 10 Uhr.').get());
		entries.push(new Builder().id('be3cfc62-0327-4aa0-a116-08f65634e26d').thema(thema).entry('müde').example('Ich bin müde. Ich gehe schlafen.').translate(['fatigué, fatiguée', 'las, lasse']).get());
		entries.push(new Builder().id('28f8a388-d964-46d6-a44e-41b004f20399').thema(thema).entry('der Mund').example('Öffnen Sie den Mund.').translate('bouche').get());
		entries.push(new Builder().id('f496a759-5c8b-421b-84c2-9c05c18a892c').thema(thema).entry('müssen').example('Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten.').translate(['devoir', 'falloir']).get());
		entries.push(new Builder().id('71838a51-34d5-491b-b640-57b9a050c3fc').thema(thema).entry('die Mutter, -ü').example('Frau Berghäuser ist die Mutter von Michaela.').get());
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'N'];
		entries.push(new Builder().id('3606980e-3f63-41a5-90c7-ed63c4ad04e4').thema(thema).entry('nach').example(['Ich gehe jetzt nach Hause.', 'Ich fliege nach München.', 'Es ist schon 5 nach 12.']).translate(['à destination de', 'à (prép, indication de ville avec un verbe de direction, aller à Paris)', 'après (adv)']).get());
		entries.push(new Builder().id('78d710fd-068a-4e90-bd25-42dbd7f3db4b').thema(thema).entry('nächst-').example('Sehen wir uns nächste Woche?').get());
		entries.push(new Builder().id('5e9c77f7-1f9f-4ae9-969e-ac17656a9c1b').thema(thema).entry('der Name, -n').example(['Mein Name ist Thomas Schmidt.', 'Mein Vorname ist Thomas; Schmidt ist der Familienname.']).get());
		entries.push(new Builder().id('4c7c9cc9-3868-4d28-8ed2-e4e4650c0912').thema(thema).entry('nehmen').example(['Heute gibt es Hähnchen. Das nehme ich.', 'Ich nehme den Bus.']).get());
		entries.push(new Builder().id('31cd5120-69d2-4d26-ac69-932259afee45').thema(thema).entry('nein').example('Fährst du auch nach München? – Nein, ich habe keine Zeit.').get());
		entries.push(new Builder().id('be0e94fd-0922-4efe-bf3a-565d712065c8').thema(thema).entry('neu').example(['Ich bin der neue Kollege.', 'Wir haben eine neue Wohnung.']).get());
		entries.push(new Builder().id('8ca0ed1d-e8d1-4c35-b358-f1ff34a0730b').thema(thema).entry('nicht').example(['Das stimmt nicht.', 'Das ist doch schön, nicht?']).translate(['pas (adv)', 'ne ... pas (négation)', 'non (adv)']).get());
		entries.push(new Builder().id('22477469-6a96-464e-b07a-5073b62ad91b').thema(thema).entry('nichts').example(['Das macht nichts.', 'Hier kaufe ich nichts. Der Laden gefällt mir nicht.']).translate('rien (pron)').get());
		entries.push(new Builder().id('b0e14219-ec2c-426f-bad8-712c85615d15').thema(thema).entry('nie').example('Er kommt nie pünktlich.').get());
		entries.push(new Builder().id('e94d6469-091f-45a1-9727-ab536387c501').thema(thema).entry('noch').example(['Vielleicht kommt er noch.', 'Wir warten noch fünf Minuten.', 'Ich habe noch 20 Euro.']).translate('encore (adv)').get());
		entries.push(new Builder().id('8e41181e-9767-4e29-b7b2-95bcd24ffa47').thema(thema).entry('normal').example('75 kg. Sein Gewicht ist normal.').get());
		entries.push(new Builder().id('d444bf3b-f2c4-404c-8afe-919bd15c4eb9').thema(thema).entry('die Nummer, -n').example(['Sie haben Zimmer Nummer zwölf.', 'Welche Hausnummer haben Sie?', 'Können Sie mir Ihre Nummer geben?']).get());
		entries.push(new Builder().id('eb68514d-67e6-4b1a-b742-cde98ffa76d6').thema(thema).entry('nur').example('Ich möchte nur ein Glas Wasser.').get());
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'O'];
		entries.push(new Builder().id('6d854743-9bb0-4236-bbc0-c48ea04f898e').thema(thema).entry('oben').example('Ich wohne oben.').translate(['au-dessus (adv)', 'en haut']).get());
		entries.push(new Builder().id('cb3a5dd1-b2ce-4c63-8de1-2311f8e4e883').thema(thema).entry('das Obst').example('Im Sommer ist das Obst billig.').translate('fruits').get());
		entries.push(new Builder().id('7300ee2c-2abd-4b33-9f81-9b0c0b805ce6').thema(thema).entry('oder').example('Wann können Sie kommen – heute oder morgen?').get());
		entries.push(new Builder().id('798d0d50-0bb3-465a-a2bb-673dc9f69eee').thema(thema).entry('öffnen').example('Ich öffne die Tür.').get());
		entries.push(new Builder().id('6d288750-c24f-431b-9748-e32cd9a3d8c1').thema(thema).entry('geöffnet').example('Der Laden ist samstags bis 16.00 Uhr geöffnet.').get());
		entries.push(new Builder().id('2d23d251-f4b8-42ed-bf21-1dea761a1c91').thema(thema).entry('oft').example('Petra treffe ich oft.').get());
		entries.push(new Builder().id('1cafe19c-b54c-4aaa-9d29-dc8807295858').thema(thema).entry('ohne').example('Ohne Geld kann er nichts kaufen.').get());
		entries.push(new Builder().id('f0442815-38fd-4bb9-8f6a-a2ccd22406c7').thema(thema).entry('das Öl').example('Den Salat machen wir ohne Öl.').get());
		entries.push(new Builder().id('8a9a1511-ca5f-4678-be46-4fb63ac6eaec').thema(thema).entry('die Oma, -s').example('Meine Oma ist schon tot.').translate(['mamie', 'grand-maman']).get());
		entries.push(new Builder().id('417abaf2-b53c-4798-bd93-7b452f81b752').thema(thema).entry('der Opa, -s').example('Mein Opa heißt Hans.').translate(['papi', 'grand-papa']).get());
		entries.push(new Builder().id('921bbddb-7ff1-456b-9873-a9494780d518').thema(thema).entry('die Ordnung').example('Das ist in Ordnung.').get());
		entries.push(new Builder().id('ab9f6b43-1e74-4a40-8284-084d6955e1f3').thema(thema).entry('der Ort, -e').example('Der Ort liegt am Meer.').translate(['endroit', 'lieu', 'place']).get());
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'P'];
		entries.push(new Builder().id('b3a834aa-d082-4d44-a5d3-a75dc78c5f97').thema(thema).entry('das Papier').example('Hier sind Papier und Bleistift.').get());
		entries.push(new Builder().id('d76ed497-b626-4c16-b198-63210049a153').thema(thema).entry('die Papiere (pl.)').example('Haben Sie Ihre Papiere dabei?').translate('papiers (documents identités)').get());
		entries.push(new Builder().id('4c52568f-d286-406d-9a4d-4a094fc4dd0d').thema(thema).entry('der Partner, -/die Partnerin, -nen').example('Sie ist meine Partnerin.').translate('partenaire').get());
		entries.push(new Builder().id('e64f2c92-1180-42b9-8d39-7c809f6a31f7').thema(thema).entry('die Party').example('Heute Abend machen wir eine Party.').get());
		entries.push(new Builder().id('ca78a106-5360-43cb-b69a-4627ea4e6fcc').thema(thema).entry('der Pass, -ä, e').example('Im Hotel brauchst du deinen Pass.').translate('passeport').get());
		entries.push(new Builder().id('64d888b2-c6f0-439d-85e3-9c290eaf0ce9').thema(thema).entry('die Pause, -n').example('Von 12.00 bis 12.30 Uhr haben wir Mittagspause.').get());
		entries.push(new Builder().id('c481fc29-5f46-4285-877f-493ce438c5c8').thema(thema).entry('der Plan, -ä, e').example('Ich kaufe mir einen Stadtplan.').translate(['plan, carte', 'projet']).get());
		entries.push(new Builder().id('ffce7465-be8c-4476-9a40-0f76a1499f21').thema(thema).entry('der Platz, -ä, e').example(['Tut mir leid, der Platz ist besetzt.', 'Bitte nehmen Sie Platz!', 'Ich wohne Messeplatz 5.']).translate(['emplacement', 'place', 'endroit', 'lieu', 'espace']).get());
		entries.push(new Builder().id('2954985e-2cb8-4a84-9740-bcdc757ed76a').thema(thema).entry('die Polizei').example('Holen Sie die Polizei!').get());
		entries.push(new Builder().id('4ee7faa8-9e11-4264-a5c1-8e36b8fd8b1b').thema(thema).entry('die Pommes frites (pl.)').example('Die Kinder essen Hähnchen mit Pommes frites.').translate('frites').get());
		entries.push(new Builder().id('0250cfed-520c-4c7e-ab46-8bcc934d6c8e').thema(thema).entry('die Post').example(['Wo ist die Post, bitte?' , 'Ist Post da?']).translate('poste').get());
		entries.push(new Builder().id('748e0908-c49e-4cc0-a338-408b8950e2d6').thema(thema).entry('die Postleitzahl').example('Wie ist Ihre Postleitzahl?').translate('code postal').get());
		entries.push(new Builder().id('67ba7e90-387f-480c-9f40-4e5584c1ce99').thema(thema).entry('das Praktikum').example('Ich mache ein Praktikum bei Siemens.').translate('stage').get());
		entries.push(new Builder().id('6f9f8ac3-1d53-4b33-848d-baa6f5c1a57d').thema(thema).entry('die Praxis').example('Die Praxis ist ab acht Uhr geöffnet.').translate('cabinet (médical)').get());
		entries.push(new Builder().id('9f29a657-8530-4964-b92c-42138a39c742').thema(thema).entry('der Preis, -e').example('Die Preise sind hoch.').get());
		entries.push(new Builder().id('336bb38c-85af-487b-9919-64b4cb7142af').thema(thema).entry('das Problem, -e').example('Mein Problem ist die Sprache.').get());
		entries.push(new Builder().id('ca907a1c-140a-49c7-b1e3-96baa7c6bfb1').thema(thema).entry('der Prospekt, -e').example('Bitte schicken Sie mir einen Prospekt von Ihrem Hotel.').translate(['dépliant', 'prospectus', 'brochure']).get());
		entries.push(new Builder().id('fdad90a7-9df8-4100-b800-c4d09375b891').thema(thema).entry('die Prüfung').example('Die Prüfung ist am Montag um 8.00 Uhr.').get());
		entries.push(new Builder().id('c5ace6d8-caf6-4e60-a85e-3a2089333c6b').thema(thema).entry('pünktlich').example(['Der Bus fährt pünktlich um acht Uhr.', 'Herr Müller ist immer pünktlich.']).get());
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'R'];
		entries.push(new Builder().id('eb5fe986-0f57-44fc-8dfd-0b9325ca76a5').thema(thema).entry('Rad fahren').example('Das Kind kann schon Rad fahren.').translate('aller à bicyclette').get());
		entries.push(new Builder().id('25fd1513-9ec9-4c9b-a300-0b767dbcd088').thema(thema).entry('rauchen').example('Ich rauche nicht.').get());
		entries.push(new Builder().id('2a66e317-f4be-41f5-868b-31126a73a1c2').thema(thema).entry('der Raum, -ä, e').example('Der Unterricht ist in Raum 332.').translate(['salle', 'pièce', 'local']).get());
		entries.push(new Builder().id('35ccb02f-f25a-4c32-981d-9c1c3bec53be').thema(thema).entry('die Rechnung, -en').example('Die Rechnung, bitte.').translate(['addition', 'note', 'facture', 'calcul']).get());
		entries.push(new Builder().id('498fa870-3680-4da5-8413-ea20aa90a1f0').thema(thema).entry('rechts').example('Die Schillerstraße ist hier rechts.').translate('à droite').get());
		entries.push(new Builder().id('b1b6948d-0829-4844-94c9-97e260c6a26c').thema(thema).entry('regnen').example('Heute regnet es.').get());
		entries.push(new Builder().id('d62de59b-6345-4ae5-a003-672d6762cd07').thema(thema).entry('der Regen').example('Bei diesem Regen gehe ich nicht raus.').translate('pluie').get());
		entries.push(new Builder().id('e1614104-4a2a-41e2-90ce-5ff13b2568ec').thema(thema).entry('der Reis').example('Ich esse gern Reis.').get());
		entries.push(new Builder().id('58b57806-439d-425f-ad6d-044dd05bd7e3').thema(thema).entry('reisen').example('Ich reise gern.').translate(['voyager', 'se déplacer', 'aller']).get());
		entries.push(new Builder().id('49c0c08a-c1d9-40cd-b31a-b9946641b3f2').thema(thema).entry('die Reise').example('Wir machen eine Reise nach Österreich.').translate(['déplacement', 'voyage']).get());
		entries.push(new Builder().id('f4d1ce1c-d272-4151-a07b-feaf7b661745').thema(thema).entry('das Reisebüro, -s').example('Mein Mann arbeitet im Reisebüro.').translate(['agence de voyages', 'bureau de voyages']).get());
		entries.push(new Builder().id('ab91e9ad-77b5-4e54-bd63-49f207c55b8a').thema(thema).entry('der Reiseführer').example(['Ich kaufe mir einen Reiseführer von Berlin.', 'Unser Reiseführer heißt Peter.']).translate('guide (livre ou personne)').get());
		entries.push(new Builder().id('7b08aea6-b265-485b-8dfb-b4e63b14461e').thema(thema).entry('reparieren').example('Er hat das Fahrrad repariert.').get());
		entries.push(new Builder().id('f740eeec-6b69-43e0-96cd-76ccf338786a').thema(thema).entry('die Reparatur').example('Die Reparatur ist sehr teuer.').get());
		entries.push(new Builder().id('2972ddf4-2c25-4765-a48d-23a699b1ac50').thema(thema).entry('das Restaurant, -s').example('Wir essen heute in einem Restaurant.').get());
		entries.push(new Builder().id('9c5e5cee-af33-4b69-b844-69f8a8d7a372').thema(thema).entry('die Rezeption').example('Fragen Sie bitte im Hotel an der Rezeption.').get());
		entries.push(new Builder().id('f2b400da-73d8-4f95-a91c-7edb6bd1a2bc').thema(thema).entry('richtig').example(['Habe ich das richtig verstanden?', 'Das ist richtig.']).get());
		entries.push(new Builder().id('dadf7799-ce02-4380-89ee-11b0c4762ad9').thema(thema).entry('riechen').example('Dieser Wein riecht gut.').translate('sentir qc').get());
		entries.push(new Builder().id('57ef66bf-9a2e-41c3-8366-8149f202b3b8').thema(thema).entry('ruhig').example('Ich möchte ein ruhiges Zimmer.').get());
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'S'];
		entries.push(new Builder().id('48d7fa4c-c097-47ee-9232-a84a7dda2fb8').thema(thema).entry('der Saft').example('Möchtest du einen Apfelsaft?').translate(['jus', 'jus de fruit']).get());
		entries.push(new Builder().id('635f4fe5-8143-49c2-ae3a-2bd9df09ea84').thema(thema).entry('sagen').example('Sag mal, wie geht es dir denn?').translate('dire qc.').get());
		entries.push(new Builder().id('1c12ac5e-8e15-4d49-aab8-3dee37225f02').thema(thema).entry('der Salat').example('Wie schmeckt dir der Salat?').get());
		entries.push(new Builder().id('581a4b07-ae71-46b0-8630-8558a6330b70').thema(thema).entry('das Salz').example('Herr Ober, kann ich bitte Salz haben?').get());
		entries.push(new Builder().id('cd2bf9e1-c208-4965-a354-0e30d863f529').thema(thema).entry('Satz, -ä, e').example('Dieser Satz ist sehr einfach.').get());
		entries.push(new Builder().id('bac80be2-3675-40d6-9277-4e270842cbba').thema(thema).entry('die S-Bahn').example('Ich nehme lieber die S-Bahn.').translate(['train de banlieue', 'RER (réseau express régional)']).get());
		entries.push(new Builder().id('0d46db8b-d108-47aa-b426-915018ac7449').thema(thema).entry('der Schalter').example('Gehen Sie bitte zum Schalter drei!').translate(['guichet', 'interrupteur', 'bouton']).get());
		entries.push(new Builder().id('afb3e80c-c177-4900-9a22-969d7d9aa51e').thema(thema).entry('scheinen').example('Die Sonne scheint.').translate('briller').get());
		entries.push(new Builder().id('a71415fe-867f-4af4-97ff-197358e3c4c1').thema(thema).entry('schicken').example('Bitte schicken Sie mir eine E-Mail.').translate('envoyer qc. à qn.').get());
		entries.push(new Builder().id('7557eb88-49b2-443a-9467-637d84b15fd3').thema(thema).entry('das Schild, -er ').example('Haben Sie nicht das Schild gesehen?').translate(['panneau', 'plaque signalétique', 'pancarte', 'enseigne']).get());
		entries.push(new Builder().id('45289259-5f38-4d57-8249-4eec6b9b95c2').thema(thema).entry('der Schinken, –').example('Ich möchte gern ein Schinkenbrot.').translate('jambon (cuisine)').get());
		entries.push(new Builder().id('4cf22e44-439f-420f-bc61-326db6362554').thema(thema).entry('schlafen').example('Ich schlafe meistens acht Stunden.').get());
		entries.push(new Builder().id('8b0132fb-8795-4b6e-a808-12c0655b3eab').thema(thema).entry('schlecht').example(['Mir ist schlecht!', 'Sie sehen schlecht aus.', 'Wir haben schlechtes Wetter.']).translate(['avoir mal au coeur (mir ist schlecht)', 'vous avez mauvaise mine (Sie sehen schlecht aus)', 'mauvais, mauvais(e)']).get());
		entries.push(new Builder().id('217db9f1-50d9-4986-b959-faafcf270716').thema(thema).entry('schließen').example('Bitte, schließen Sie die Tür.').translate(['fermer', 'clore qc.']).get());
		entries.push(new Builder().id('05c9b015-55d0-4abe-a54e-81002dd92103').thema(thema).entry('geschlossen').example('Die Bank hat am Samstag geschlossen.').get());
		entries.push(new Builder().id('b5f2c82d-454b-4fbd-9886-fbcb47ebe1c5').thema(thema).entry('der Schluss').example(['Ich muss jetzt Schluss machen.', 'Zum Schluss gibt er uns allen die Hand.']).translate(['conclusion', 'fin']).get());
		entries.push(new Builder().id('dea964ad-3d60-4b57-a155-73abc79fba2d').thema(thema).entry('der Schlüssel, –').example('Ich gebe Ihnen noch den Zimmerschlüssel.').get());
		entries.push(new Builder().id('78d74ad8-87c6-4f20-8125-504eb22f67f2').thema(thema).entry('schmecken').example('Schmeckt das gut?').translate('avoir un goût').get());
		entries.push(new Builder().id('5d5f640c-ebfe-4bf4-92ec-61db30704cfd').thema(thema).entry('schnell').example('Er fährt schnell.').get());
		entries.push(new Builder().id('ac295196-3965-4b7b-9fc9-dd1c111bab03').thema(thema).entry('schon').example('Ist das Essen schon fertig?').translate('déjà (adv)').get());
		entries.push(new Builder().id('5d9a92bf-cc26-4f71-bbc9-68e8db69842f').thema(thema).entry('schön').example(['Schönen Urlaub!', 'Das ist sehr schön.']).translate(['beau, belle (adj)', 'joli, jolie (adj)']).get());
		entries.push(new Builder().id('827b8aa5-53c5-409c-a537-f7a7de271f67').thema(thema).entry('der Schrank, -ä, e').example('Die Gläser stehen im Schrank.').translate(['armoire', 'placard']).get());
		entries.push(new Builder().id('772b2087-4bd0-47be-9ca4-257008af122e').thema(thema).entry('schreiben').example('Er schreibt jeden Tag fünfzig E-Mails.').get());
		entries.push(new Builder().id('e78ffa9e-8464-42e9-aad3-9db03f3814a7').thema(thema).entry('der Schuh, -e').example('Zieh die Schuhe aus!').get());
		entries.push(new Builder().id('5ecd97a9-c8fe-4610-97c6-0d460fa58361').thema(thema).entry('die Schule').example(['Meine Tochter geht schon in die Schule.', 'Die Schule ist gleich hier um die Ecke.']).get());
		entries.push(new Builder().id('90a4a0cd-fe3c-4268-9a58-a0087ff29ec5').thema(thema).entry('der Schüler, –').example('In meinem Kurs sind acht Schülerinnen und fünf Schüler.').translate(['écolier', 'élève']).get());
		entries.push(new Builder().id('05b35834-8edf-4707-b5c4-582c893da7c8').thema(thema).entry('schwer').example(['Ist Ihr Gepäck sehr schwer?', 'Das ist eine schwere Arbeit.']).translate(['difficile', 'lourd, lourde']).get());
		entries.push(new Builder().id('89715b0c-dfa6-4651-943f-87875e59cda4').thema(thema).entry('die Schwester, -n').example('Meine Schwester kommt am Dienstag.').get());
		entries.push(new Builder().id('d300c757-32df-476d-b27d-5177f6d7df68').thema(thema).entry('schwimmen').example('Ich schwimme jeden Tag einen Kilometer.').get());
		entries.push(new Builder().id('b26737c0-72ff-494e-9ecd-a22ebe1f4a80').thema(thema).entry('das Schwimmbad').example('Kommst du mit ins Schwimmbad?').translate('piscine').get());
		entries.push(new Builder().id('6aae2aa6-7d53-4596-a4fc-a8839585638e').thema(thema).entry('der See').example('Komm, wir fahren zum Starnberger See.').translate('lac').get());
		entries.push(new Builder().id('9c4cf653-1268-4064-bf66-98e6297b8723').thema(thema).entry('sehen').example(['Ich kann dich nicht sehen.', 'Ich habe diesen Jungen schon einmal gesehen.']).get());
		entries.push(new Builder().id('69c45555-97e4-4bc8-b744-904e9e6c05a4').thema(thema).entry('die Sehenswürdigkeit, -en').example('Welche Sehenswürdigkeiten gibt es in Frankfurt?').translate(['site touristique', 'monument', 'curiosité (ville, région)']).get());
		entries.push(new Builder().id('e32be5d1-6bd9-4010-8aeb-bc4b75bb1cb4').thema(thema).entry('sehr').example(['Danke sehr!', 'Das ist sehr schwer.']).translate(['beaucoup', 'très']).get());
		entries.push(new Builder().id('209ca6a2-afdf-41da-b509-9dd455ae3160').thema(thema).entry('sein').example(['Herr Müller ist in seinem Zimmer.', 'Mir ist kalt.', 'Ich bin dreiundzwanzig.']).get());
		entries.push(new Builder().id('0dc05a74-2c27-4a62-a4b3-9c1101a93d81').thema(thema).entry('an sein').example('Das Licht ist noch an.').translate('être allumé(e)').get());
		entries.push(new Builder().id('1ed3eff7-1bf5-4a89-a4b7-bfa4666c6f73').thema(thema).entry('auf sein').example('Das Fenster ist noch auf.').translate('être ouvert').get());
		entries.push(new Builder().id('9e036177-2e38-4b50-a813-7575381419a5').thema(thema).entry('weg sein').example('Herr Meier ist schon weg.').translate('être parti(e)').get());
		entries.push(new Builder().id('f90bc5a5-aa80-4ff7-b0e6-2caeec186796').thema(thema).entry('zu sein').example('Die Tür ist zu.').translate('être fermé').get());
		entries.push(new Builder().id('4a698023-f846-4f37-b41b-4423c9a91dc4').thema(thema).entry('seit').example('Ich wohne seit drei Jahren in Köln.').translate(['depuis', 'dès']).get());
		entries.push(new Builder().id('ad3b4bd3-0ae4-4172-aa0e-e2f41f700745').thema(thema).entry('selbstständig').example('Er ist selbstständig.').translate('indépendant, indépendante').get());
		entries.push(new Builder().id('2cf6b5e4-7d56-4e4b-a26e-9153a850e9bb').thema(thema).entry('sich').example('Sie müssen sich erst anmelden.').translate('se').get());
		entries.push(new Builder().id('6a6697b1-58e2-4ad3-bd51-43a220c37dcf').thema(thema).entry('sie').example('Wie heißt sie?').get());
		entries.push(new Builder().id('97678b21-0242-4357-9fd9-703f6506930d').thema(thema).entry('Sie').example('Wie heißen Sie, bitte?').get());
		entries.push(new Builder().id('a2c74059-f02f-4a7b-9736-8d2d6dfbc2bc').thema(thema).entry('sitzen').example('Wo sitzen Sie?').translate('être assis(e) (sur qc.)').get());
		entries.push(new Builder().id('fe4da5c6-42bb-46e5-8442-383b7acfb1bd').thema(thema).entry('so').example(['Sie müssen das so machen!', 'Fahren Sie bitte nicht so schnell!', 'Meine Frau ist so groß wie ich.', 'So, das war‘s/wär‘s!']).translate(['comme celà', 'de la sorte', 'ainsi', 'tant', 'comme ca']).get());
		entries.push(new Builder().id('d1e45c65-8242-4a86-b994-53ad27fe116a').thema(thema).entry('das Sofa').example('Das Sofa ist neu.').translate(['canapé', 'sofa']).get());
		entries.push(new Builder().id('bf3df91b-4509-4364-a0f6-f7a5d5b2efd6').thema(thema).entry('sofort').example('Bitte antworten Sie sofort.').translate(['aussitôt', 'tout de suite']).get());
		entries.push(new Builder().id('0bb50ab6-66b2-48ca-9ac7-81d6b6ad7a8f').thema(thema).entry('der Sohn, -ö, e').example('Das ist Hans, mein Sohn.').get());
		entries.push(new Builder().id('8f904fb3-1f92-4177-bfaa-ade8170c8f51').thema(thema).entry('sollen').example(['Soll ich kommen?', 'Was soll ich mitbringen?']).translate(['devoir', 'falloir']).get());
		entries.push(new Builder().id('750a5e32-58e0-4e24-adb2-a040174ab2aa').thema(thema).entry('die Sonne').example('Die Sonne scheint.').get());
		entries.push(new Builder().id('8cd12ade-51e8-4c79-ab5c-628b54cdbe85').thema(thema).entry('spät').example('Es ist schon spät, ich muss gehen.').translate('tard').get());
		entries.push(new Builder().id('9b310c9e-6ae5-4ca5-b224-db89e5657f53').thema(thema).entry('später').example('Das können wir später machen.').translate('plus tard').get());
		entries.push(new Builder().id('6f295410-24ea-4ed3-ae40-bae68290cb16').thema(thema).entry('die Speisekarte').example('Bringen Sie mir die Speisekarte, bitte.').translate(['carte', 'menu']).get());
		entries.push(new Builder().id('1fc88331-26cb-4b52-ac89-beb65ee11b03').thema(thema).entry('spielen').example(['Die Kinder spielen draußen.', 'Spielen Sie Karten?']).get());
		entries.push(new Builder().id('eec51a6d-c923-4645-a6d8-d3f461ca8022').thema(thema).entry('der Sport').example('Ich mache viel Sport.').get());
		entries.push(new Builder().id('dce1d2b9-d9df-4119-a50b-899351bb9299').thema(thema).entry('die Sprache, -n').example('Welche Sprachen sprichst du?').get());
		entries.push(new Builder().id('0e5becb0-f7f3-47b8-85b6-d1ba33a69d8d').thema(thema).entry('sprechen').example('Kann ich (mit) Herrn Klein sprechen?').translate(['parler', 'causer']).get());
		entries.push(new Builder().id('484e0bbb-0708-416f-beab-3796096041fb').thema(thema).entry('die Stadt, -ä, e').example('Heidelberg ist eine alte Stadt.').get());
		entries.push(new Builder().id('420b77cd-e725-425f-9475-f611ff5d56f5').thema(thema).entry('stehen').example(['Ich glaube es nicht, aber es steht in der Zeitung.', 'Der Bus steht schon an der Haltestelle.']).translate(['être debout', 'figurer']).get());
		entries.push(new Builder().id('41d5feb8-250d-43a4-8b1e-7b1663fbc3af').thema(thema).entry('die Stelle, -n').example('Ich habe eine neue Stelle.').translate(['place', 'poste', 'emploi', 'emplacement']).get());
		entries.push(new Builder().id('e31eba4c-b71e-46c9-81b8-1138db1ca957').thema(thema).entry('stellen').example('Stell die Tasche rechts in die Ecke!').translate('mettre qc.').get());
		entries.push(new Builder().id('5a9bd98b-da5d-423f-8554-d5b4fb13f460').thema(thema).entry('der Stock').example('Unsere Wohnung liegt im ersten Stock.').translate('étage').get());
		entries.push(new Builder().id('38937cd4-8208-46e4-818e-5a54df1e7e32').thema(thema).entry('die Straße, -n').example('In welcher Straße wohnen Sie?').get());
		entries.push(new Builder().id('5f654db8-ff80-4812-bb45-5d5d2729d839').thema(thema).entry('die Straßenbahn').example('Wo fährt die Straßenbahn ab?').translate('tram').get());
		entries.push(new Builder().id('38bbd9d5-47bb-4cb1-9299-6e7fae53e3d0').thema(thema).entry('studieren').example('Ich studiere in Mainz.').translate('étudier (qc.)').get());
		entries.push(new Builder().id('c51e6593-17b4-4ce1-a563-46e6358afe73').thema(thema).entry('das Studium').example('Das Studium beginnt im Oktober.').translate('études').get());
		entries.push(new Builder().id('97e6f788-61cc-4583-aee7-bcbea7d2af6c').thema(thema).entry('der Student, -en').example('Ich bin Studentin.').translate('étudiant, étudiante').get());
		entries.push(new Builder().id('d8bb8d4a-55bc-4513-ae5d-6c171a98af4d').thema(thema).entry('die Stunde, -n').example('Ich bin in einer Stunde zurück.').get());
		entries.push(new Builder().id('8db92fe8-6b29-4d93-9830-a537d1ec63cf').thema(thema).entry('suchen').example('Suchst du etwas?').get());
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'T'];
		entries.push(new Builder().id('8265ab7e-97e7-4369-af3c-077493369e74').thema(thema).entry('tanzen').example('Tanzen Sie gern?').get());
		entries.push(new Builder().id('2cf98a37-cee5-47bd-8063-8d1f7fbb2864').thema(thema).entry('die Tasche, -n').example('Ich habe die Schlüssel in der Tasche.').get());
		entries.push(new Builder().id('3b8c9fca-34b3-4936-97c1-d675c362352f').thema(thema).entry('das Taxi, -s').example('Es gibt heute keinen Bus mehr. Er fährt mit dem Taxi.').get());
		entries.push(new Builder().id('ac5e35db-7d2f-47b3-b226-745a1b7b060e').thema(thema).entry('der Tee').example('Ich trinke morgens immer Tee.').get());
		entries.push(new Builder().id('1ee7e990-a27d-43d8-b358-f3ce6056ee7e').thema(thema).entry('der Teil, -e').example('Lies bitte auch den zweiten Teil.').translate(['partie', 'part', 'portion']).get());
		entries.push(new Builder().id('11ffd30f-eaa9-45a3-9644-ccf43466eff2').thema(thema).entry('telefonieren').example('Darf ich mal telefonieren?').get());
		entries.push(new Builder().id('4e5f2e45-e806-4f5a-8c32-248cef25c89b').thema(thema).entry('das Telefon').example('Haben Sie Telefon?').get());
		entries.push(new Builder().id('17fd34fd-fa6f-42ee-a6ac-5016193bfbd7').thema(thema).entry('der Termin, -e').example('Am besten machen wir sofort einen Termin.').translate('rendez-vous').get());
		entries.push(new Builder().id('4c77f6ee-3290-4e7d-84b5-5f31b16e8a9a').thema(thema).entry('der Test').example('Der Test war einfach.').get());
		entries.push(new Builder().id('4f7bc685-535f-4bfc-9f0c-510373871d99').thema(thema).entry('teuer').example('Das ist mir zu teuer.').get());
		entries.push(new Builder().id('7fe7cf38-7389-43ea-9703-132d0c7b4955').thema(thema).entry('der Text, -e').example('Lesen Sie bitte diesen Text.').get());
		entries.push(new Builder().id('d2c7af0e-eb49-4e96-b872-060f2e8145ff').thema(thema).entry('das Thema').example('Wir sprechen heute über das Thema „Essen und Trinken“.').get());
		entries.push(new Builder().id('3d77889b-09a5-49ad-9bbb-5f59d76a61e4').thema(thema).entry('das Ticket, -s').example('Wie viel kostet das Ticket?').get());
		entries.push(new Builder().id('ba463af0-827d-4319-93cf-c41fd1a01e80').thema(thema).entry('der Tisch, -e').example('Die Fotos liegen auf dem Tisch.').get());
		entries.push(new Builder().id('b0663979-c55a-4994-8991-7e122165255a').thema(thema).entry('die Tochter, -ö').example('Das ist meine Tochter Katharina.').get());
		entries.push(new Builder().id('54640775-6bb3-4a9e-addc-eb5e535ce286').thema(thema).entry('die Toilette, -en').example('Wo ist die Toilette, bitte?').get());
		entries.push(new Builder().id('88dc8f09-b208-4053-b710-659371fcc4b0').thema(thema).entry('die Tomate, -n').example('Die Tomate ist noch grün.').get());
		entries.push(new Builder().id('d1578a11-98ad-45d7-b40c-bdaf6d1092fa').thema(thema).entry('tot').example('Sein Vater ist schon lange tot.').translate('mort, morte').get());
		entries.push(new Builder().id('e19ca9ec-ddf8-4f7d-9deb-b7656c1a96fa').thema(thema).entry('(sich) treffen').example(['Ich treffe in der Stadt einen Kollegen.', 'Wir treffen uns immer freitags.']).translate(['avoir rendez-vous avec qn.', 'se réunir']).get());
		entries.push(new Builder().id('e831c2ee-9f1d-4491-b2d5-9b5501c9b299').thema(thema).entry('die Treppe, -n').example('Die Toilette? Die Treppe hoch und dann links.').translate('escalier').get());
		entries.push(new Builder().id('25b6c168-634c-409e-bd88-7283fb7ead7b').thema(thema).entry('trinken').example('Möchtest du etwas trinken?').get());
		entries.push(new Builder().id('4f66524f-00b6-476b-95eb-0b3c96547185').thema(thema).entry('tschüss').example('Junge Leute sagen meistens „tschüss!“ und nicht „auf Wiedersehen“.').translate('Salut').get());
		entries.push(new Builder().id('04d5b1f3-6b2b-4776-8e4d-e65ada518eef').thema(thema).entry('tun').example(['Ich habe noch etwas zu tun.', 'Was tut Ihr Mann?']).translate('faire').get());
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'U'];
		entries.push(new Builder().id('39db38b2-a6d5-4596-ac42-8b223ed818be').thema(thema).entry('über').example(['Gehen Sie hier über die Straße.', 'Er wohnt im zweiten Stock über Familie Meier.', 'Sind Sie über 18?']).translate(['à travers', 'au-dessus de qc.']).get());
		entries.push(new Builder().id('ef2c525f-225a-4b9a-9ea6-ee3b2c7b0210').thema(thema).entry('übernachten').example('Du kannst bei mir übernachten.').translate('coucher').get());
		entries.push(new Builder().id('c1f7de82-4c98-4d5a-a0ce-2aeb40381a4a').thema(thema).entry('überweisen').example('Sie können das Geld auch überweisen.').translate("virer qc. (faire un virement d'argent)").get());
		entries.push(new Builder().id('944bc68e-1082-46ca-90d5-c34c4ff2f403').thema(thema).entry('die Uhr').example('Es ist vier Uhr.').translate(['heure', 'montre']).get());
		entries.push(new Builder().id('f61dd0c6-3acf-4c96-92bc-492e24166de4').thema(thema).entry('um').example(['Er kommt um sieben Uhr.', 'Da kommt er gerade um die Ecke.']).translate(['à (indication horaire)', 'dans les ...']).get());
		entries.push(new Builder().id('3f2024a8-df57-4c14-a72b-cb830561f518').thema(thema).entry('umziehen').example('Nächsten Monat ziehen wir um.').translate('déménager').get());
		entries.push(new Builder().id('750856eb-4862-48af-8937-55e955b0bf46').thema(thema).entry('und').example('Peter und Helmut sind meine Söhne.').get());
		entries.push(new Builder().id('3b0fc549-160e-42d3-a8e7-1922620d3d5e').thema(thema).entry('unser-').example('Das ist unsere Lehrerin.').get());
		entries.push(new Builder().id('7396cd3b-4187-4b22-86e7-dbb30e4c845e').thema(thema).entry('unten').example('Er wohnt ganz unten im Haus.').translate(['en bas', 'au-dessous']).get());
		entries.push(new Builder().id('4608c0d5-1b0f-4743-92a8-e321658db95c').thema(thema).entry('unter').example('Unter uns wohnt eine Familie mit drei Kindern.').translate('sous qc.').get());
		entries.push(new Builder().id('c4e16d15-ea99-4005-acd0-111e8d20dc80').thema(thema).entry('der Unterricht').example('Wir haben Unterricht von 8.00 bis 12.00 Uhr.').translate('cours').get());
		entries.push(new Builder().id('bc425496-2c17-4d3b-9ec7-0dc70e0522a3').thema(thema).entry('unterschreiben').example('Wo muss ich unterschreiben?').translate('signer qc.').get());
		entries.push(new Builder().id('c8344ada-ec7f-40a4-ac79-3483af24c2fa').thema(thema).entry('die Unterschrift').example('Hier fehlt noch Ihre Unterschrift.').translate('signature').get());
		entries.push(new Builder().id('63255dfc-7a03-45ac-83d2-1ee7c54ae5d2').thema(thema).entry('der Urlaub').example('Ich nehme im September Urlaub.').get());
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'V'];
		entries.push(new Builder().id('2f2314d1-dc7c-4903-be84-2bab96d81555').thema(thema).entry('der Vater, -ä').example('Mein Vater ist Arbeiter.').get());
		entries.push(new Builder().id('71580ec0-5ec3-41be-8dae-b254844356b1').thema(thema).entry('verboten').example('Hier ist Rauchen verboten.').get());
		entries.push(new Builder().id('6b147409-e533-4976-addf-5d496fd9126b').thema(thema).entry('verdienen').example('Ich verdiene 1.500 Euro im Monat.').get());
		entries.push(new Builder().id('55d3fca3-0ba1-4a8d-9932-95cad67a07d8').thema(thema).entry('der Verein').example('Es gibt einen neuen Sportverein in der Stadt.').translate(['association', 'club', 'amicale']).get());
		entries.push(new Builder().id('d573acc9-413c-4e69-845f-e55abfbe4244').thema(thema).entry('verheiratet').example('Ich bin verheiratet und habe drei Kinder.').translate('marié, mariée').get());
		entries.push(new Builder().id('63e83c34-5058-4a2e-b87e-f97635be90b8').thema(thema).entry('verkaufen').example('Er verkauft sein altes Auto.').translate('vendre').get());
		entries.push(new Builder().id('7e644785-b504-40a3-8d94-f90635e59a82').thema(thema).entry('der Verkäufer, –').example('Meine Mutter ist Verkäuferin im Kaufhaus.').translate('vendeur, vendeuse').get());
		entries.push(new Builder().id('db3fba27-cc73-4ba8-b709-5954ee65d637').thema(thema).entry('vermieten').example('Die Wohnung ist schon vermietet.').translate('louer qc.').get());
		entries.push(new Builder().id('ede4cb5f-6193-459f-86ed-d57f85ea00d9').thema(thema).entry('der Vermieter').example('Unser Vermieter heißt Huber. Er wohnt auch hier.').translate(['logeur, logeuse', 'propriétaire']).get());
		entries.push(new Builder().id('3a61b55c-18fb-48a3-b6cc-ddebea8c8d9a').thema(thema).entry('verstehen').example('Können Sie mich verstehen?').get());
		entries.push(new Builder().id('c08f686d-afa1-4f80-a589-91cda2c4250c').thema(thema).entry('der Verwandte, -n').example('Peter besucht seine Verwandten in Polen.').translate('parent').get());
		entries.push(new Builder().id('4f8bdc17-e59f-4919-b8c1-edc04c8649e0').thema(thema).entry('viel').example('Hier regnet es viel.').get());
		entries.push(new Builder().id('df409e46-3d52-45c6-8f38-aaa824eaa1ef').thema(thema).entry('vielleicht').example('Ich komme vielleicht mit dem Bus.').get());
		entries.push(new Builder().id('e6d77036-fc6f-4241-9e21-27994d0d1ec4').thema(thema).entry('von').example(['Das Auto von Felix ist kaputt.', 'Er kommt gerade von Köln/von zu Hause.']).get());
		entries.push(new Builder().id('ca9108fd-d181-4fdd-92a8-d373994fb4fe').thema(thema).entry('vor').example(['Der Termin war vor einer Stunde.', 'Das Auto steht vor der Tür.']).translate(['il y a', 'devant', 'avant']).get());
		entries.push(new Builder().id('d193240f-104c-444c-9f20-b3fe69f48a70').thema(thema).entry('der Vorname, -n').example('Ich heiße Müller, mein Vorname ist Eva.').get());
		entries.push(new Builder().id('d9392ca4-684f-4e60-8d72-9352836caea8').thema(thema).entry('die Vorsicht').example('Vorsicht! Da kommt ein Auto.').translate(['prudence', 'précaution']).get());
		entries.push(new Builder().id('23ceccff-16dc-4f05-af58-7832bbd991bf').thema(thema).entry('(sich) vorstellen').example('Wir wollen uns kennenlernen. Können Sie sich bitte vorstellen?').translate('se présenter (à qn.)').get());
		entries.push(new Builder().id('a171a0e3-11bc-4139-a70c-008253372029').thema(thema).entry('die Vorwahl').example('Wie ist die Vorwahl von München?').translate('indicatif (téléphonique)').get());
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'W'];
		entries.push(new Builder().id('c3956c93-e26f-4356-a99d-543fa384aec5').thema(thema).entry('wandern').example('Wir wandern um den Chiemsee.').translate('faire de la marche, randonnée').get());
		entries.push(new Builder().id('c342b900-93a0-44a1-8c50-f4df815ad345').thema(thema).entry('wann').example(['Wann bist du fertig?', 'Wann kann ich Sie anrufen?', 'Wann sind Sie geboren?']).get());
		entries.push(new Builder().id('0442792d-c7bf-4843-b5ae-3c5eabaeb926').thema(thema).entry('warten').example(['Können Sie ein paar Minuten warten?', 'Auf wen warten Sie?']).get());
		entries.push(new Builder().id('0e903d09-058e-4c31-961a-363e84e4f48e').thema(thema).entry('warum').example('Warum kommt er nicht?').get());
		entries.push(new Builder().id('6457c062-39be-4a32-a81a-bc2085879ab2').thema(thema).entry('was').example(['Was ist das?', 'Was möchten Sie?']).get());
		entries.push(new Builder().id('06fe2128-0be2-46f6-b4ae-c8b3ec1e4318').thema(thema).entry('was für ein').example('Was für eine Farbe möchten Sie?').translate('quel ?').get());
		entries.push(new Builder().id('e2353e8b-c925-4c9b-b71d-c35d8c5dce17').thema(thema).entry('(sich) waschen').example(['Wo kann ich mir die Hände waschen?', 'Ich muss morgen waschen.']).translate('se laver').get());
		entries.push(new Builder().id('54e8dee2-703d-42b5-a5b5-7dfe3e931553').thema(thema).entry('das Wasser').example('Ein Glas Wasser, bitte.').get());
		entries.push(new Builder().id('2bd8dce5-c48f-405f-baaf-c7fad6c67392').thema(thema).entry('weh tun').example('Ich muss zum Arzt. Mein Bein tut weh.').translate('faire mal (à qn)').get());
		entries.push(new Builder().id('10d7f529-b807-4bba-bddd-6927de1c37fe').thema(thema).entry('weiblich').example('Kreuzen Sie bitte an: „weiblich“ oder „männlich“.').translate(['féminin. féminine', 'femelle']).get());
		entries.push(new Builder().id('b9962fac-3c16-43f2-bdf9-bccdb6a6c194').thema(thema).entry('der Wein').example('Nein danke, ich möchte keinen Wein.').get());
		entries.push(new Builder().id('e5793aad-8d95-426e-a4a3-b0ea3b8b3244').thema(thema).entry('weit').example('Zum Bahnhof ist es nicht weit.').translate(['loin', 'ample']).get());
		entries.push(new Builder().id('044a40a8-bdb5-4a2d-9d26-359367cd5f1a').thema(thema).entry('weiter').example('Der Bus fährt nicht weiter.').translate(['plus avant', 'autre']).get());
		entries.push(new Builder().id('81a834ce-fe5d-4c01-a92c-46ba689dacdc').thema(thema).entry('welch-').example('Welches Buch möchtest du?').translate('lequel, laquelle, lesquels').get());
		entries.push(new Builder().id('b4920d58-7526-406b-ab3e-b061674e5c2c').thema(thema).entry('die Welt').example('Es gibt viele Probleme auf der Welt.').translate(['monde', 'terre', 'univers']).get());
		entries.push(new Builder().id('fd1b3306-3fc2-4d69-b3cf-5eed0287d337').thema(thema).entry('wenig').example(['Ich habe leider nur wenig verstanden.', 'Er verdient wenig.']).translate(['peu', 'ne ... guère']).get());
		entries.push(new Builder().id('48c985a2-4ef0-42c3-9cad-f37b2a41e0ec').thema(thema).entry('wer').example('Wer ist das?').get());
		entries.push(new Builder().id('b6fa2e71-17fa-45ca-9e37-821ae66dff20').thema(thema).entry('werden').example('Mein Sohn will Arzt werden.').translate(['devenir', 'aller (+inf)', 'être', 'naître']).get());
		entries.push(new Builder().id('35f5159b-ae20-4d41-9ad1-a15ffd6c60d5').thema(thema).entry('das Wetter').example('Wir hatten schlechtes Wetter.').get());
		entries.push(new Builder().id('3b4dee4c-135e-42c1-a503-cff0ed5ee073').thema(thema).entry('wichtig').example('Dieses Formular ist sehr wichtig.').get());
		entries.push(new Builder().id('549d4b68-3a28-4786-a924-fc74d685b3ba').thema(thema).entry('wie').example(['Wie heißt du?', 'Er schreibt wie ein Kind.', 'Meine Frau ist so groß wie ich.', 'Wie soll ich das machen?', 'Wie groß ist die Wohnung?', 'Wie bitte?', 'Wie lange bist du schon hier?']).get());
		entries.push(new Builder().id('8477f163-8374-4f6a-b0ac-7b50b732b2bd').thema(thema).entry('wiederholen').example('Können Sie das bitte wiederholen?').get());
		entries.push(new Builder().id('92f9c6b9-1fa0-49ba-80e6-56fbeac55f72').thema(thema).entry('das Wiederhören').example('Wir müssen jetzt Schluss machen. Also auf Wiederhören!').get());
		entries.push(new Builder().id('df738234-c669-4689-b68e-19876acb10f6').thema(thema).entry('das Wiedersehen').example('Auf Wiedersehen!').get());
		entries.push(new Builder().id('2c095c53-4d56-4534-b41a-1cd4a4adbbbb').thema(thema).entry('wie viel').example('Wie viel Milch nehmen Sie?').get());
		entries.push(new Builder().id('752ad153-ceb9-46de-9ae9-c967f535d445').thema(thema).entry('willkommen').example('Herzlich willkommen!').get());
		entries.push(new Builder().id('ab85d870-27b2-4779-865c-9eabb1ebbe8a').thema(thema).entry('der Wind').example('Der Wind kommt aus Osten.').get());
		entries.push(new Builder().id('fae63821-9e75-419d-839b-bd25811671fe').thema(thema).entry('wir').example('Wir lernen Deutsch.').get());
		entries.push(new Builder().id('e6cac134-2efc-45f0-baaa-cf7b4eecda16').thema(thema).entry('wissen').example('Weißt du, wie er heißt?').get());
		entries.push(new Builder().id('c5f9096c-6126-4ba8-9a93-9e3cb8495586').thema(thema).entry('wo').example(['Wo waren Sie im Urlaub?', 'Wo ist die Post?', 'Wo sind Sie geboren?']).get());
		entries.push(new Builder().id('87a34ad0-d031-4c76-b061-0051bd68a05a').thema(thema).entry('woher').example('Woher kommen Sie?').get());
		entries.push(new Builder().id('40cce9c3-894e-4ff1-a2bf-0ea0dc4a647e').thema(thema).entry('wohin').example(['Wohin fährt dieser Bus?', 'Wohin wollen Sie am Wochenende?']).get());
		entries.push(new Builder().id('06df8033-a214-4fa9-bfd7-eef4e617f149').thema(thema).entry('wohnen').example('Ich wohne in München.').get());
		entries.push(new Builder().id('cfc0341b-80e6-46d2-aab8-901579634a9e').thema(thema).entry('die Wohnung, -en').example('Seit wann haben Sie diese Wohnung?').get());
		entries.push(new Builder().id('8f9ea016-3c3e-4030-947f-03aad96a985b').thema(thema).entry('wollen').example('Wollen Sie einen Kaffee trinken?').get());
		entries.push(new Builder().id('3d3b06d2-781f-48c3-a668-a2e788147892').thema(thema).entry('das Wort, -ö, er/-e').example('Ich kenne das Wort nicht.').get());
		entries.push(new Builder().id('a6d0c7e7-46b0-48df-890c-cdd57f1849f8').thema(thema).entry('wunderbar').example('Das Essen schmeckt wunderbar.').get());
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A1', 'Alphabetische Wortliste', 'Z'];
		entries.push(new Builder().id('19c72146-7326-420e-baff-44f947db41fa').thema(thema).entry('zahlen').example('Zahlen, bitte!').get());
		entries.push(new Builder().id('f443dd28-003e-477f-aaed-23ed4588b710').thema(thema).entry('die Zeit').example('Ich habe heute keine Zeit.').get());
		entries.push(new Builder().id('dcb7432c-e78d-419d-a77a-e59a5c842b7c').thema(thema).entry('zurzeit').example('Zurzeit habe ich sehr viel zu tun.').get());
		entries.push(new Builder().id('aa0da3cc-57c3-417e-94a2-0bf7dd59dd93').thema(thema).entry('die Zeitung, -en').example('Ich lese gern Zeitung.').get());
		entries.push(new Builder().id('166500e3-59ca-4499-bd3c-89a483111d66').thema(thema).entry('die Zigarette, -n').example('Wie teuer sind die Zigaretten?').get());
		entries.push(new Builder().id('ef1a6359-acd7-411f-af89-a9a999280f8b').thema(thema).entry('das Zimmer, –').example(['Das Zimmer ist groß.', 'Öffne im Schlafzimmer das Fenster, bitte!', 'Die Wohnung hat drei Zimmer.', 'Ich habe ein Zimmer bestellt.']).get());
		entries.push(new Builder().id('63260dcb-56e7-4529-9007-71546c6131cf').thema(thema).entry('der Zoll').example('Wir müssen noch durch den Zoll.').get());
		entries.push(new Builder().id('d38dd997-8499-4570-83dd-f981515e0f94').thema(thema).entry('zu').example(['Der Bus fährt zum Bahnhof.', 'Ich gehe zu Fuß.', 'Ich bin zu Hause.']).get());
		entries.push(new Builder().id('8a8085a4-cf23-4a57-be24-e14ac3c92dca').thema(thema).entry('zufrieden').example('Ich bin mit der Wohnung zufrieden.').get());
		entries.push(new Builder().id('044a9d2f-c31d-41b3-a3ad-852696a5d97e').thema(thema).entry('der Zug, -ü, e').example('Ich fahre gern mit dem Zug.').get());
		entries.push(new Builder().id('23cfb24d-0710-46c0-93b6-f780d60ed94e').thema(thema).entry('zurück').example(['Einmal Frankfurt und zurück.', 'Wann kommst du zurück?']).get());
		entries.push(new Builder().id('987ab5b4-ac1b-4a49-bab3-172b5cdaf40d').thema(thema).entry('zusammen').example(['Sollen wir zusammen essen gehen?', 'Das macht zusammen 2 Euro 80.']).get());
		entries.push(new Builder().id('8f303371-0019-410c-908a-8b3c6c16f030').thema(thema).entry('zwischen').example(['Heidelberg liegt zwischen Frankfurt und Stuttgart.', 'Zwischen 8 und 10 Uhr bin ich zu Hause.']).get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA1Service;