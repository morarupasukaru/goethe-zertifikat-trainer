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
        /*
        entries.push(new Builder().id('9ada7b7d-a17e-4df6-aa0e-7dbe9bda4ac5').thema(thema).entry('die Abkürzung, -en').translate('abréviation').get());
        entries.push(new Builder().id('0553103f-f450-4843-8e3d-5b41e570d280').thema(thema).entry('ca.').alternative('circa/zirka').translate('environ').get());
        entries.push(new Builder().id('8cd66aa3-4a0b-4a7a-adb2-1f561e443c7e').thema(thema).entry('d. h.').alternative('das heißt').translate(['soit', 'à savoir']).get());
        entries.push(new Builder().id('a73706e4-3cef-457d-a9cc-7a2f8bfff7f7').thema(thema).entry('der ICE').alternative('der Inter City Express').translate('train à grande vitesse allemand').get());
        entries.push(new Builder().id('06d02f48-14bb-48bc-91e8-8b9fa4370384').thema(thema).entry('der PC, -s').alternative('der Personal Computer').translate('ordinateur individuel').get());
        entries.push(new Builder().id('cfddcfaf-c331-4dd5-8328-67d5c49e1338').thema(thema).entry('die SMS').alternative('die Textnachricht').translate('SMS').get());
        entries.push(new Builder().id('0d2eeabf-2781-474c-9bd4-71574b6ca441').thema(thema).entry('usw.').alternative('und so weiter').translate(['etc.', 'et cætera', 'et cetera']).get());
        entries.push(new Builder().id('3b345347-1b6c-446c-b9ab-51e04c8acc2d').thema(thema).entry('das WC, -s').alternative('die Toilette (water closet)').translate('WC').get());
        entries.push(new Builder().id('47acee10-1eea-418e-8de0-de5f715b835b').thema(thema).entry('z. B.').alternative('zum Beispiel').translate(['p. ex.', 'par exemple']).get());
        */
        return entries;
    }

    createAnglizismenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Anglizismen'];
        entries.push(new Builder().id('030ace74-996d-4228-ba17-d4c8c62508d9').thema(thema).entry('e Band, -s').translate('orchestre (musique)').get());
        entries.push(new Builder().id('81877a0b-eb4c-45e8-92d3-4d94f37ac0e6').thema(thema).entry('googeln').translate('googler (qc.)').get());
/*
        entries.push(new Builder().id('71dd9cb6-8650-417e-9777-bbb8f4419bfa').thema(thema).entry('Anglizismen').translate('anglicisme').get());
        entries.push(new Builder().id('1e35e229-dded-4879-8d90-2ee24619a99b').thema(thema).entry('r Babysitter, -').get());
        entries.push(new Builder().id('4cd8b773-9598-4514-adde-ad0bf31f2ab1').thema(thema).entry('r Blog, -s').get());
        entries.push(new Builder().id('d2d55e36-3923-4302-bd49-6456e26f140e').thema(thema).entry('bloggen').get());
        entries.push(new Builder().id('84de3792-790a-440f-87d2-5ed185049915').thema(thema).entry('e CD, -s').get());
        entries.push(new Builder().id('e776e331-0b81-40ca-930d-93311595e712').thema(thema).entry('r CD-Player, -').get());
        entries.push(new Builder().id('f7cf3786-77c2-4aee-bede-466140850ea8').thema(thema).entry('chatten').get());
        entries.push(new Builder().id('5ea26d7d-c74c-498a-84cc-a3d70bcdefb3').thema(thema).entry('r Chat(room), -s').get());
        entries.push(new Builder().id('0672b7d7-3704-4844-9f07-93779c39ee9b').thema(thema).entry('e Cola, -s').get());
        entries.push(new Builder().id('82d2375b-f640-40ee-932f-f61b9e1c7917').thema(thema).entry('r Comic, -s').translate('bande dessinée').get());
        entries.push(new Builder().id('8de015c9-3ebc-49f1-ba7c-c598fc5d7ea8').thema(thema).entry('r Computer, -').get());
        entries.push(new Builder().id('0cf92997-c63c-4bc9-89d2-3f61c78a9994').thema(thema).entry('cool').get());
        entries.push(new Builder().id('faa200af-6859-4a51-add4-b178b0488b16').thema(thema).entry('e DVD, -s').get());
        entries.push(new Builder().id('e979c586-9950-48aa-8e5c-2bdecf607268').thema(thema).entry('faxen').get());
        entries.push(new Builder().id('411f1a36-0cd7-4945-9cf3-c146c4a6acf9').thema(thema).entry('s Fax, -e').get());
        entries.push(new Builder().id('f2aee822-0101-492c-84c4-a316e85e5f18').thema(thema).entry('s Festival, -s').get());
        entries.push(new Builder().id('021e0e2a-af5a-49ea-a607-c6ac8b391c93').thema(thema).entry('global').translate(['global', 'planétaire']).get());
        entries.push(new Builder().id('a1613194-1d66-4758-9669-f4f2064df572').thema(thema).entry('e Homepage, -s').get());
        entries.push(new Builder().id('1010843b-a85e-44f8-83d1-744a76bf709c').thema(thema).entry('s Internet').get());
        entries.push(new Builder().id('aa90f3fe-b54d-43a7-8c95-379ef87e481e').thema(thema).entry('r Laptop, -s').get());
        entries.push(new Builder().id('47277cbe-caa8-4349-a077-e7bb1244518e').thema(thema).entry('r Link, -s').translate('lien (hypertexte)').get());
        entries.push(new Builder().id('6094be1b-063b-49da-b739-a909c342a7e2').thema(thema).entry('mailen').get());
        entries.push(new Builder().id('d917db13-3994-4c8f-a2d0-8e8b6e914e01').thema(thema).entry('e Mail, -s').get());
        entries.push(new Builder().id('441b29fc-7f9a-4ca0-8c93-86fc874f18bb').thema(thema).entry('e Mailbox, -en').get());
        entries.push(new Builder().id('9a4bb7d1-6233-47e6-84ec-e921de20d048').thema(thema).entry('online').get());
        entries.push(new Builder().id('4eea9824-84b4-4055-a8de-9086b47d7ce5').thema(thema).entry('s Poster, -').get());
        entries.push(new Builder().id('08ee3d9c-910d-41db-80ce-2692043ede39').thema(thema).entry('s Smartphone, -s').get());
        entries.push(new Builder().id('1249aeb0-2f52-46b7-9305-fa5a14c1cf1c').thema(thema).entry('surfen').get());
        entries.push(new Builder().id('77264087-96a7-48e4-a1b3-499fa3880751').thema(thema).entry('s T-shirt,-s').get());
        */
        return entries;
    }

    createAnweisungsspracheZurPruefungEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Anweisungssprache zur Prüfung'];
        entries.push(new Builder().id('917d768b-9ecb-44bb-ad50-ba27d1ad048c').thema(thema).entry('Anweisungssprache').translate("language d'instruction (de l'examen)").get());
        entries.push(new Builder().id('e4797636-ff1c-4259-851f-4885bd550350').thema(thema).entry('r Antwortbogen, -').translate('feuille de réponses').get());
        entries.push(new Builder().id('6348549a-4f6b-4ce4-b4a1-f564934496d0').thema(thema).entry('e Anzeige,-n').translate('annonce').get());
        entries.push(new Builder().id('fc3b7c94-1838-4b83-b9c1-b5df831854bb').thema(thema).entry('s Wörterbuch, ü, -er').translate('dictionnaire').get());
        entries.push(new Builder().id('801da3bb-02a1-4c67-91ac-e8f17b545ec3').thema(thema).entry('e Zeitschrift, -en').translate(['revue', 'magazine', 'périodique']).get());
        /*
        entries.push(new Builder().id('a963ad1c-2ad3-4d01-8f94-a3f18113102c').thema(thema).entry('e Aufgabe, -n').get());
        entries.push(new Builder().id('308121dc-ce78-4d69-b5f2-324f6d64aec1').thema(thema).entry('ankreuzen').get());
        entries.push(new Builder().id('ff529d6a-15e8-4076-a719-ccb3a071de15').thema(thema).entry('s Kreuz, -e').get());
        entries.push(new Builder().id('658b94b4-9eb7-47e7-bfd1-0cd15d4562e0').thema(thema).entry('s Beispiel, -e').get());
        entries.push(new Builder().id('24deb56e-17ce-4181-9373-ab21dbe24e29').thema(thema).entry('e Beschreibung, -en').get());
        entries.push(new Builder().id('549a52d3-d066-4307-9147-0f096f078307').thema(thema).entry('falsch').get());
        entries.push(new Builder().id('c0969dd1-155a-4aa7-b343-75fb4a493846').thema(thema).entry('formulieren').get());
        entries.push(new Builder().id('e9949c92-74d6-410e-9a47-dc7e712f3f80').thema(thema).entry('e Lösung, -en').get());
        entries.push(new Builder().id('3e9b9776-a6ec-4f6a-9410-d452f1920f0e').thema(thema).entry('markieren').get());
        entries.push(new Builder().id('21523a18-1784-4e28-99f2-ea7d9c6ac676').thema(thema).entry('r Partner, -').get());
        entries.push(new Builder().id('c4e97a3a-7fdd-4871-a82e-83fc220efafc').thema(thema).entry('e Partnerin, -nen').get());
        entries.push(new Builder().id('cc465e3d-4dff-4339-96aa-ae113af7e6e4').thema(thema).entry('reagieren').get());
        entries.push(new Builder().id('343acfb7-df10-41b9-afb2-e8ae5b0f816e').thema(thema).entry('richtig').get());
        entries.push(new Builder().id('1c34e759-18f3-4806-b674-4bc6cdc9837c').thema(thema).entry('r Teil, -e').get());
        entries.push(new Builder().id('c0ec804d-837b-4e86-bdb7-144bdba3c1a6').thema(thema).entry('r Prüfungsteil, -e').get());
        entries.push(new Builder().id('b920dd75-acbb-4542-85b6-63cba13b31c7').thema(thema).entry('r Test, -s').get());
        entries.push(new Builder().id('197d7be8-358e-4503-935e-728d5e0f2a54').thema(thema).entry('r Text, -e').get());
        */
        return entries;
    }

    createBerufeEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Berufe'];
        entries.push(new Builder().id('da5d26a2-7495-4a04-961d-70369ad13d93').thema(thema).entry('Beruf').translate(['profession', 'métier']).get());
        entries.push(new Builder().id('61ab67fb-609e-44ad-a752-716a1d85b356').thema(thema).entry('r Angestellte, -n (e Angestellte, -n)').translate(['employé(e)', 'salarié(e)']).get());
        entries.push(new Builder().id('eeebef3c-77b2-46ab-8015-bf661d2d3ab3').thema(thema).entry('r Handwerker,- (die Handwerkerin, -nen)').translate('artisan(e)').get());
        entries.push(new Builder().id('bc23aa2b-396b-4b03-81fe-55fd7d1ce4b9').thema(thema).entry('r Kaufmann, Kaufmänner (e Kauffrau, -en)').translate(['marchand(e)', 'commerçant(e)']).get());
        entries.push(new Builder().id('8d462ff2-dc38-4924-89c2-70176d395c64').thema(thema).entry('r Friseur, -e (e Friseurin, -nen)').translate(['coiffeur', 'coiffeuse']).get());
        entries.push(new Builder().id('6dfd19f9-8108-4fc6-8bbb-f2f14bb9c28f').thema(thema).entry('r Krankenpfleger, - (e Krankenschwester, -n)').translate(['infirmier', 'infirmière']).get());
        entries.push(new Builder().id('eaa4d234-8390-4f03-a1d1-cc2683ab5d8d').thema(thema).entry('r Verkäufer, - (e Verkäuferin, -nen)').translate(['vendeur', 'vendeuse']).get());
/*
        entries.push(new Builder().id('57d3b64b-448d-486c-a561-0012f8cc86f9').thema(thema).entry('r Architekt, - en (e Architektin, -nen)').get());
        entries.push(new Builder().id('f7ac5819-f285-4951-994a-da38c289f44f').thema(thema).entry('r Hausmann, - männer (e Hausfrau, -en)').get());
        entries.push(new Builder().id('f9e184fa-ffbe-4a0f-b60b-6ffc00d0b97f').thema(thema).entry('r Techniker, - (e Technikerin, -nen)').get());
        entries.push(new Builder().id('9e098fdc-3c54-41c7-a3ba-ff73e5ad4b3d').thema(thema).entry('r Lehrer, - (e Lehrerin, -nen)').get());
        entries.push(new Builder().id('eaf22b14-1c2f-470b-b73a-ee8c438c2b02').thema(thema).entry('r Künstler, - (e Künstlerin, nen)').get());
        entries.push(new Builder().id('ffdc97e8-ca2d-4203-a1bb-dfd9e6ef516d').thema(thema).entry('r Ingenieur, -e (Ingenieurin, - nen)').get());
        entries.push(new Builder().id('6a9736ca-aa01-4f33-878e-6aea49baacd7').thema(thema).entry('r Arzt, Ärzte (Ärztin, -nen)').get());
        entries.push(new Builder().id('3a2ec47b-e2d6-4f76-a739-3fe3438c7c31').thema(thema).entry('r Schauspieler, - (e Schauspielerin, -nen)').get());
        entries.push(new Builder().id('702a79de-5246-424a-a897-6bf03ce92bd6').thema(thema).entry('r Sekretär, -e (e Sekretärin, -nen)').get());
        entries.push(new Builder().id('e1fa773a-7d7a-4dea-aa2b-614ee66e23c1').thema(thema).entry('r Schriftsteller, - (e Schriftstellerin, - nen)').get());
        entries.push(new Builder().id('bb9eea8f-ea6c-4eb5-913b-696a79c0042f').thema(thema).entry('r Beamte, n (e Beamtin, -nen)').get());
        entries.push(new Builder().id('98cdd01d-9d19-4e3a-ac34-3f97ac6652ce').thema(thema).entry('r Arbeiter, - (e Arbeiterin, -nen)').get());
        entries.push(new Builder().id('318f633b-d45d-43de-85a9-8b5184716417').thema(thema).entry('r Bankkaufman, Bankkaufmänner (e Bankkauffrau, -en)').get());
        entries.push(new Builder().id('93e2ac28-e603-4d8e-97bb-b261b41b61e7').thema(thema).entry('r Bäcker, - (e Bäckerin, -en)').get());
        entries.push(new Builder().id('e08e3cdc-67a8-4461-a13e-8e40ec9638ea').thema(thema).entry('r Rentner, - (e Rentnerin, -nen)').get());
        entries.push(new Builder().id('d4ec2f89-e04b-4b76-8413-63ba500f29ba').thema(thema).entry('r Journalist, -en (e Journalistin, -en)').get());
        entries.push(new Builder().id('244bdbd5-33a1-403c-b897-753d59199d00').thema(thema).entry('r Automechaniker, - (e Automechanikerin, -nen)').get());
        entries.push(new Builder().id('311a26e2-1157-4b1a-8898-a159734c130f').thema(thema).entry('r Beruf der Eltern').get());
        */
        return entries;
    }

    createFamilienmitgliederEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienmitglieder'];
        /*
        entries.push(new Builder().id('a7229d4b-d8d9-47ee-971d-0422a8ea0516').thema(thema).entry('Familienmitglieder').get());
        entries.push(new Builder().id('3be0f453-c978-48db-933f-c072fafa34bb').thema(thema).entry('Eltern (Pl.)').get());
        entries.push(new Builder().id('c23652da-2328-4e18-944e-5b561880a730').thema(thema).entry('r Vater, ä, -').get());
        entries.push(new Builder().id('a72c0928-b643-474b-b349-1e2cd339adf1').thema(thema).entry('e Mutter, ü, -').get());
        entries.push(new Builder().id('b4c3dc50-e673-4a1a-ad3c-86ec4131683c').thema(thema).entry('s Kind, -er').get());
        entries.push(new Builder().id('95a68bac-0333-471a-8001-e121b48bbf9d').thema(thema).entry('r Sohn, ö, -e').get());
        entries.push(new Builder().id('8ec0216f-ce6f-4de8-8599-301cccdfb738').thema(thema).entry('e Tochter, ö, -').get());
        entries.push(new Builder().id('a7c9435e-a27d-4c7e-889f-d5ca009fa747').thema(thema).entry('Geschwister (Pl.)').get());
        entries.push(new Builder().id('15cc6107-45b6-4667-94a5-ba505dc34c78').thema(thema).entry('r Bruder, ü, -').get());
        entries.push(new Builder().id('9be93e75-590d-4cc1-a67d-58f29c25c09a').thema(thema).entry('e Schwester, -n').get());
        entries.push(new Builder().id('941b5dba-8e31-4b62-8b13-ed9ef3ed6309').thema(thema).entry('r Onkel, -').get());
        entries.push(new Builder().id('922e91f6-0c32-4bb2-b74f-61909a6f253e').thema(thema).entry('e Tante, -n').get());
        entries.push(new Builder().id('f03da359-c42a-4e2c-84e6-fedb74194146').thema(thema).entry('r Enkel,-').get());
        entries.push(new Builder().id('7577e38d-9162-4676-82e0-4f9efac87292').thema(thema).entry('e Enkelin, -nen').get());
        entries.push(new Builder().id('729b31fb-d5e3-4d7d-8ca5-10148a7ad8d7').thema(thema).entry('Großeltern (Pl.)').get());
        entries.push(new Builder().id('70f37de4-d4de-4009-bace-c6a0b53a8533').thema(thema).entry('r Großvater, ä, -').get());
        entries.push(new Builder().id('221d8206-fa4a-4f19-850c-c9ccb0853566').thema(thema).entry('e Großmutter, ü, -').get());
        entries.push(new Builder().id('ad3ddf5e-feda-4ecf-8b28-3a34b57c6086').thema(thema).entry('r Cousin, -s').get());
        entries.push(new Builder().id('ba4cca76-9e86-4eb7-9898-c066fbba4a4b').thema(thema).entry('e Cousine, -n').get());
        entries.push(new Builder().id('31194077-c226-4399-a28e-1e958c67127b').thema(thema).entry('r/e Verwandte, -n').get());
        */
        return entries;
    }

    createFamilienstandEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Familienstand'];
        /*
        entries.push(new Builder().id('486dbc23-1421-4130-8d66-99602a23a4b9').thema(thema).entry('Familienstand').get());
        entries.push(new Builder().id('8dfd8c66-7959-4053-85e4-31fdb37dc76f').thema(thema).entry('ledig').get());
        entries.push(new Builder().id('257a5264-484d-494e-a993-2b1d46b312ef').thema(thema).entry('verheiratet').get());
        */
        entries.push(new Builder().id('9f8109cc-594a-4d82-886e-01cf0dcd14a0').thema(thema).entry('getrennt').translate('séparé(e)').get());
        entries.push(new Builder().id('faed7d70-0b11-4d66-9765-0d7b1759f277').thema(thema).entry('geschieden').translate('divorcé(e)').get());
        entries.push(new Builder().id('729a3c28-d33f-4feb-9df6-4f667db2effd').thema(thema).entry('r Witwer / e Witwe, -n').translate(['veuf', 'veuve']).get());
        return entries;
    }

    createFarbenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Farben'];
        /*
        entries.push(new Builder().id('2ce05c7e-6867-406f-9b90-ad55966fbc92').thema(thema).entry('Farben').get());
        entries.push(new Builder().id('a2e8c9fe-348a-4bdb-9a1c-5d3844490ce4').thema(thema).entry('schwarz').get());
        entries.push(new Builder().id('9f0d290a-4a0f-430e-8329-acfa50ac39fc').thema(thema).entry('weiß').get());
        entries.push(new Builder().id('331e44e0-8d57-453c-ab24-c363b12cd6cf').thema(thema).entry('gelb').get());
        entries.push(new Builder().id('77f0ec6e-3342-4948-bcc2-288a862bfe88').thema(thema).entry('grün').get());
        entries.push(new Builder().id('667c1a1f-95c5-45de-9383-11eda5ef9a38').thema(thema).entry('braun').get());
        entries.push(new Builder().id('29259c49-f30d-493c-8fdf-cfae4522424b').thema(thema).entry('blond').get());
        entries.push(new Builder().id('cfa1b8d0-102c-4be7-84fd-6ad24932ffd2').thema(thema).entry('grau').get());
        entries.push(new Builder().id('e9d26161-9c24-4f95-b52f-0238c23ccee0').thema(thema).entry('rot').get());
        entries.push(new Builder().id('5e3a9db4-3203-43cf-ba3e-ddea5956a51a').thema(thema).entry('blau').get());
        entries.push(new Builder().id('a4cc36ef-6ed4-44fa-a3cf-6920cb162f1e').thema(thema).entry('orange').get());
        */
        entries.push(new Builder().id('4636878a-1637-4c39-8d60-af0e0a0e946f').thema(thema).entry('lila').translate('lilas').get());
        entries.push(new Builder().id('02978592-c859-483d-be41-1c981fd6fbc5').thema(thema).entry('violett').translate('violet').get());
        return entries;
    }

    createHimmelsrichtungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Himmelsrichtungen'];
        entries.push(new Builder().id('5720c707-ea87-4b8b-aa80-107a486cc9bf').thema(thema).entry('Himmelsrichtung').translate('point cardinal').get());
        /*
        entries.push(new Builder().id('c15aba58-d2d1-4e76-bdbb-adf5d9d7b937').thema(thema).entry('r Norden').get());
        entries.push(new Builder().id('94c48500-98d6-47c2-85f8-fc05301c55c0').thema(thema).entry('r Süden').get());
        entries.push(new Builder().id('366e690a-b06a-4c3e-a353-45bd0bdd225d').thema(thema).entry('r Westen').get());
        entries.push(new Builder().id('25bb7959-64ad-4f11-ba23-08e6c3b7a649').thema(thema).entry('r Osten').get());
        */
        return entries;
    }

    createLaenderUndNationalitaetenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Länder und Nationalitäten'];
        /*
        entries.push(new Builder().id('2e9ca0be-3a2d-4854-9fa8-b244dcd7dbec').thema(thema).entry('Nationalitäten').get());
        entries.push(new Builder().id('8b509bcc-2110-42fe-bfbc-165d2476a147').thema(thema).entry('Land').get());
        entries.push(new Builder().id('1c4889ab-258d-4b7a-9556-428e7c983dd4').thema(thema).entry('Deutschland').get());
        entries.push(new Builder().id('13994442-7444-4845-a9f5-564e184a635a').thema(thema).entry('der/die Deutsche, -n').get());
        entries.push(new Builder().id('b1f02f65-4ac4-46a0-bca7-bf946a0db16f').thema(thema).entry('deutsch').get());
        entries.push(new Builder().id('f09bf5d5-5b86-433e-ba5d-922b060a5349').thema(thema).entry('auf Deutsch').get());
        entries.push(new Builder().id('32b6d448-5086-4cc6-9e3a-c39e26819ac8').thema(thema).entry('Europa').get());
        entries.push(new Builder().id('4e9b6c43-4014-4fdd-ae1e-5e1403e0a2cf').thema(thema).entry('der Europäer/die Europäer').get());
        entries.push(new Builder().id('80627c2d-fa9f-484d-8c3d-0dfbfa033b36').thema(thema).entry('europäisch').get());
        */
        return entries;
    }

    createZahlenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zahlen'];
        /*
        entries.push(new Builder().id('012dc39b-aa90-451b-ae51-038a785df4fd').thema(thema).entry('Zahlen').get());
        entries.push(new Builder().id('6e8ed0b4-1a37-4042-b12a-0652aea508b3').thema(thema).entry('eins').alternative('1').get());
        entries.push(new Builder().id('d301f7cb-528a-4d88-860f-117225a031d1').thema(thema).entry('zwei').alternative('2').get());
        entries.push(new Builder().id('5dba3ce2-4748-45ec-a0bb-f3720becaa31').thema(thema).entry('drei').alternative('3').get());
        entries.push(new Builder().id('d000ad9f-7b98-4f8c-81eb-1ada2420fe00').thema(thema).entry('vier').alternative('4').get());
        entries.push(new Builder().id('ef9395da-7748-415e-857b-a29643eaf01f').thema(thema).entry('fünf').alternative('5').get());
        entries.push(new Builder().id('517cf058-e981-4478-b2c3-e5b36924427f').thema(thema).entry('sechs').alternative('6').get());
        entries.push(new Builder().id('06ec8026-95ae-4529-8dcf-ece1900caacc').thema(thema).entry('sieben').alternative('7').get());
        entries.push(new Builder().id('d5ea4629-ebb8-4bfa-b5ec-8f4550f48ac7').thema(thema).entry('acht').alternative('8').get());
        entries.push(new Builder().id('2eeb87e2-810d-410e-a818-7f6334139db4').thema(thema).entry('neun').alternative('9').get());
        entries.push(new Builder().id('8eb422d2-c80e-49e3-ac85-cfe42f5309eb').thema(thema).entry('zehn').alternative('10').get());
        entries.push(new Builder().id('abd24f28-34ff-4194-ab55-fb1a76290e7a').thema(thema).entry('elf').alternative('11').get());
        entries.push(new Builder().id('a32a9459-4ede-4a4b-8605-696cad265d84').thema(thema).entry('zwölf').alternative('12').get());
        entries.push(new Builder().id('9b76b97c-0268-46af-8c5b-e7316cef6349').thema(thema).entry('dreizehn').alternative('13').get());
        entries.push(new Builder().id('440f0654-fff8-4548-8532-75bad4ee9b4e').thema(thema).entry('vierzehn').alternative('14').get());
        entries.push(new Builder().id('6fa87424-3086-4853-9718-605a98cebac9').thema(thema).entry('fünfzehn').alternative('15').get());
        entries.push(new Builder().id('e037f1eb-f83f-4c30-8a16-9f432e1a3181').thema(thema).entry('sechzehn').alternative('16').get());
        entries.push(new Builder().id('cfe50285-cffc-4a98-8252-163800a3f94c').thema(thema).entry('siebzehn').alternative('17').get());
        entries.push(new Builder().id('02920b9f-8850-4c57-8718-24ded0bdbcac').thema(thema).entry('achtzehn').alternative('18').get());
        entries.push(new Builder().id('431b7c3a-f4ec-403b-a0fa-baf90034e897').thema(thema).entry('neunzehn').alternative('19').get());
        entries.push(new Builder().id('fb890bd1-dd49-44c1-86b0-958843fe00a5').thema(thema).entry('zwanzig').alternative('20').get());
        entries.push(new Builder().id('fc126c64-70d7-4761-a762-107613227772').thema(thema).entry('einundzwanzig').alternative('21').get());
        entries.push(new Builder().id('ff59dc02-d7f6-4be6-9ef0-065a972f077e').thema(thema).entry('dreißig').alternative('30').get());
        entries.push(new Builder().id('e60c2294-97c1-4121-bf4f-c44373903f25').thema(thema).entry('vierzig').alternative('40').get());
        entries.push(new Builder().id('a0482416-c992-461e-8121-ac727ef95ab3').thema(thema).entry('fünfzig').alternative('50').get());
        entries.push(new Builder().id('235e6c6d-0da0-47dc-9b51-8a3bf2bb7576').thema(thema).entry('sechzig').alternative('60').get());
        entries.push(new Builder().id('d4a569c9-d8d6-4c02-955b-87947aa7701d').thema(thema).entry('siebzig').alternative('70').get());
        entries.push(new Builder().id('824d2ca0-a060-4a1a-8031-850a8e18ba6b').thema(thema).entry('achtzig').alternative('80').get());
        entries.push(new Builder().id('4a9b6083-1bc9-4354-b2fa-d72776ce2011').thema(thema).entry('neunzig').alternative('90').get());
        entries.push(new Builder().id('b68ff79c-3f93-43e9-af69-615db92a3c17').thema(thema).entry('(ein)hundert').alternative('100').get());
        entries.push(new Builder().id('28f1c2ab-aa19-4cc1-b755-577e181fce4a').thema(thema).entry('hunderteins').alternative('101').get());
        entries.push(new Builder().id('604845af-7393-462d-8505-2b60c8161719').thema(thema).entry('zweihundert').alternative('200').get());
        entries.push(new Builder().id('d337be61-4a0e-4664-a792-08eda4276166').thema(thema).entry('(ein)tausend').alternative('1000').get());
        entries.push(new Builder().id('f9070964-3c24-4fa7-8feb-522b678ca781').thema(thema).entry('zweitausendeins').alternative('2001').get());
        entries.push(new Builder().id('4a9b0e5a-d100-4e8d-b860-34a5e11a8d48').thema(thema).entry('eine Million').alternative('1 000 000').get());
        entries.push(new Builder().id('590cb4b7-6c76-4077-948f-3b757ee9daaa').thema(thema).entry('erstens').alternative('1.').get());
        entries.push(new Builder().id('999aacf6-04c4-40ab-b0eb-380db54c388b').thema(thema).entry('zweitens').alternative('2.').get());
        entries.push(new Builder().id('27184bb9-692b-41fe-92d2-8e2ead3c3654').thema(thema).entry('drittens').alternative('3,').get());
        entries.push(new Builder().id('a667353b-e132-4911-8a95-7e3de982a410').thema(thema).entry('viertens').alternative('4.').get());
        entries.push(new Builder().id('5c265edc-b4ab-4216-83f6-bd5fcc6974d9').thema(thema).entry('der/die erste').get());
        entries.push(new Builder().id('8aa51052-6458-4bfc-bb09-6e560e362d86').thema(thema).entry('der/die zweite').get());
        entries.push(new Builder().id('37243cb2-d59e-4b35-ae62-5ef4300a273e').thema(thema).entry('der/die dritte').get());
        entries.push(new Builder().id('ad563144-5351-4891-9bed-5cc6885b61aa').thema(thema).entry('der/die vierte').get());
        entries.push(new Builder().id('415ee7dc-132b-480e-8423-b8ab943cfe81').thema(thema).entry('einmal').get());
        entries.push(new Builder().id('a46565a3-cea8-47d6-b326-d2219e8d1c47').thema(thema).entry('zweimal').get());
        entries.push(new Builder().id('8c1f437b-0f30-4bf4-9240-bf986882716b').thema(thema).entry('dreimal').get());
        entries.push(new Builder().id('eac96ef6-bd2d-4c40-89ac-aac4b43c9908').thema(thema).entry('viermal').get());
        */
        return entries;
    }

    createSchuleEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Schule / Schulfächer'];
        entries.push(new Builder().id('064fbb2c-845a-40ee-bca1-62b28a46d66c').thema(thema).entry('die Schulfach, "er').translate(['matière', 'discipline']).get());
        entries.push(new Builder().id('8ad1a450-31a9-458f-b5a9-fa3c86d7003c').thema(thema).entry('Realschule').translate('collège').get());
        entries.push(new Builder().id('e75910bf-51fd-4d5a-89bf-ed2f0f28110f').thema(thema).entry('e Gesamtschule').translate("établissement d'enseignement secondaire").get());
        entries.push(new Builder().id('254eccf8-5c4e-4b14-9efa-ed304a3c1a90').thema(thema).entry('Kunsterziehung').translate('éducation artistique').get());
        entries.push(new Builder().id('6d2c740a-e67a-4859-8549-2b353153212f').thema(thema).entry('Sozialkunde').translate('éducation civique').get());
        /*
        entries.push(new Builder().id('ddd605a9-0c38-4a6d-97ed-332c28bfb6d3').thema(thema).entry('Schule').get());
        entries.push(new Builder().id('49579098-5ac6-4c4a-b108-ee7db6d5f4bc').thema(thema).entry('e Grundschule').translate('école primaire').get());
        entries.push(new Builder().id('bb1ac139-e952-41b5-85a0-dc176a1eb6c5').thema(thema).entry('Hauptschule').get());
        entries.push(new Builder().id('af5cdeb0-56ac-4811-a873-1d6d58cc0f76').thema(thema).entry('s Gymnasium').get());
        entries.push(new Builder().id('93632a36-ab86-4877-9dfe-924e39c95fd1').thema(thema).entry('e Sprachschule').get());
        entries.push(new Builder().id('c5338bea-07fd-4c0d-9d5a-9b51bc70cb78').thema(thema).entry('s Goethe-Institut').get());
        entries.push(new Builder().id('9142d132-271b-41f8-bb01-079e3e6444c4').thema(thema).entry('r Lehrer, -, e Lehrerin, -nen').get());
        entries.push(new Builder().id('542d9650-fc59-4b3c-8117-1f1090f7d1b6').thema(thema).entry('r Schüler, -, e Schülerin, -nen').get());
        entries.push(new Builder().id('248be2cb-5054-4115-967f-39ce67e2ec0e').thema(thema).entry('e Prüfung, -en, r Prüfer, -').get());
        entries.push(new Builder().id('73ff1e2f-d7f4-4090-995c-9232ec0d8b53').thema(thema).entry('e Prüferin, -nen').get());
        entries.push(new Builder().id('28f218e5-73be-4b94-9ce5-0fdd88bdeef3').thema(thema).entry('Deutsch').get());
        entries.push(new Builder().id('fe601da5-80e7-46c0-b5c9-039bf63c5f4d').thema(thema).entry('Mathematik').get());
        entries.push(new Builder().id('fa83861f-7fc1-4733-92ba-28b6f510f6c5').thema(thema).entry('Englisch').get());
        entries.push(new Builder().id('84fa06d8-1af8-4e9a-951f-c63efc83bab3').thema(thema).entry('Geografie').get());
        entries.push(new Builder().id('cfe9b555-5ae3-4a2d-9a24-aa39c3e3a600').thema(thema).entry('Sport').get());
        entries.push(new Builder().id('7dbe0b16-fd82-4e0d-8316-06d9dfd8ec89').thema(thema).entry('Physik').get());
        entries.push(new Builder().id('6f707d36-358d-4922-a2cd-95ce3b37b7eb').thema(thema).entry('Chemie').get());
        entries.push(new Builder().id('e9f26b1f-fc8f-4fef-a5b1-005f42615279').thema(thema).entry('Biologie').get());
        entries.push(new Builder().id('dbc76b7d-90df-416a-aae2-b49b1cb5a754').thema(thema).entry('Geschichte').get());
        entries.push(new Builder().id('20ff31b6-f546-4536-866c-ddfaf2b83ac5').thema(thema).entry('Latein').get());
        entries.push(new Builder().id('b566be55-4b30-424c-8ff0-1a2c535d10b9').thema(thema).entry('Philosophie').get());
        entries.push(new Builder().id('f476baca-ebb5-4e3f-9237-d322fc2967f3').thema(thema).entry('Religion').get());
        entries.push(new Builder().id('25e5510c-b887-40e2-9161-d86558e77446').thema(thema).entry('Musik').get());
        */
        return entries;
    }

    createWaehrungenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Währungen und Maße'];
        entries.push(new Builder().id('0b7e82ee-710b-43b8-80e1-aae26a6acfe0').thema(thema).entry('das Maß, e').translate(['mesure', 'dimension']).get());
        /*
        entries.push(new Builder().id('bcec8f90-7cf8-4ba0-8ed2-d187bdca7f41').thema(thema).entry('Währungen').get());
        entries.push(new Builder().id('e5700779-c785-4a80-a1ba-b943ff789831').thema(thema).entry('1 Euro').alternative('100 Cent').get());
        entries.push(new Builder().id('934a6ac2-65fd-4774-9188-23f11dd4ba30').thema(thema).entry('1 Dollar').alternative('100 Cent').get());
        entries.push(new Builder().id('e298cea5-72b1-423e-9078-7c4f970f5f9c').thema(thema).entry('ein Meter').alternative('1 m').get());
        entries.push(new Builder().id('b5b72f9f-f1d5-41c9-8a90-59a3859e7f8b').thema(thema).entry('ein Meter fünfzig').alternative('1,50 m').get());
        entries.push(new Builder().id('71c803c6-a0a4-4f80-ad3d-b867d1de2b6b').thema(thema).entry('ein Kilometer').alternative('1 km').get());
        entries.push(new Builder().id('96e1ebef-1a59-4bb2-b33d-c5d07448962a').thema(thema).entry('ein Liter').alternative('1 l').get());
        entries.push(new Builder().id('417c30f2-44c6-48dd-b4cd-094602bb12e3').thema(thema).entry('ein Gramm').alternative('1 g').get());
        entries.push(new Builder().id('aff2efbc-f909-488b-b072-c385b795b98a').thema(thema).entry('ein Kilogramm').alternative('1 kg').get());
        entries.push(new Builder().id('1ce14177-f491-4267-bbd6-d6b56501e2d4').thema(thema).entry('ein Prozent').alternative('1 %').get());
        */
        return entries;
    }

    createDatumEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Datum'];
        /*
        entries.push(new Builder().id('a249c167-341a-46f5-80a4-05a7ed86aeb9').thema(thema).entry('Datum').get());
        entries.push(new Builder().id('d0ff75ed-99f6-4815-bfed-f0fdcb21ad85').thema(thema).entry('der zwanzigste zweite (Februar) zweitausendzwölf').alternative('Heute ist der 20.2.2012').get());
        entries.push(new Builder().id('582e2057-cd0f-4a1d-92f1-9830e5bb35a8').thema(thema).entry('achtzehnhundertachtundvierzig').alternative('1848').get());
        entries.push(new Builder().id('0c91ad57-6183-4fd0-9e58-ed7811d91414').thema(thema).entry('vierzehnter dritter zweitausenddreizehn').alternative('Berlin, 14.3.2013').get());
        */
        return entries;
    }

    createFeiertageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Feiertage'];
        /*
        entries.push(new Builder().id('fdd65baa-48b0-4bf9-9b1b-5c912d3e287e').thema(thema).entry('Feiertage').get());
        entries.push(new Builder().id('e2422ffd-c76c-4c42-9594-fc0681767991').thema(thema).entry('Karneval').get());
        entries.push(new Builder().id('bd6e9380-f5f7-48b9-8feb-a65b29a74db5').thema(thema).entry('Weihnachten').get());
        entries.push(new Builder().id('b48270d4-4b59-4419-af59-f98c5d8775eb').thema(thema).entry('Ostern').get());
        */
        return entries;
    }

    createJahreszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Jahreszeiten'];
        /*
        entries.push(new Builder().id('bbdbc957-da81-44c0-a336-ea9131106e97').thema(thema).entry('Jahreszeiten').get());
        entries.push(new Builder().id('0d84588d-4614-43b2-ad62-f1eda70fa790').thema(thema).entry('r Frühling').get());
        entries.push(new Builder().id('a2944322-8714-49a4-8b09-f074224102ef').thema(thema).entry('s Frühjahr').get());
        entries.push(new Builder().id('fda249cd-81a3-4de0-a7d2-dd6710471233').thema(thema).entry('r Sommer').get());
        entries.push(new Builder().id('1fd81849-44e8-4ece-88db-b668be6abb1c').thema(thema).entry('r Herbst').get());
        entries.push(new Builder().id('ec807a97-936d-4bed-9f36-2ac477b11f8a').thema(thema).entry('r Winter').get());
        */
        return entries;
    }

    createMonatsnamenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Monatsnamen'];
        /*
        entries.push(new Builder().id('b7b598c3-4921-4f50-8db8-1fc7bb59ea29').thema(thema).entry('Monatsnamen').get());
        entries.push(new Builder().id('6c13904b-cacb-4d1b-9381-02d922e0b5a1').thema(thema).entry('r Januar').get());
        entries.push(new Builder().id('fcfcc382-10f3-43ae-861c-9da39c3448eb').thema(thema).entry('r Februar').get());
        entries.push(new Builder().id('6f42ab58-737d-4b1d-bc31-b43f7a116c41').thema(thema).entry('r März').get());
        entries.push(new Builder().id('90f072bd-ba27-4dc8-863e-03512d93279b').thema(thema).entry('r April').get());
        entries.push(new Builder().id('2a828699-c503-4aa6-b128-e88d03bc802e').thema(thema).entry('r Mai').get());
        entries.push(new Builder().id('e977e43a-0fca-42df-950e-433ee3ec9032').thema(thema).entry('r Juni').get());
        entries.push(new Builder().id('dd34c3ba-291f-43f0-b72d-43fde858b5b3').thema(thema).entry('r Juli').get());
        entries.push(new Builder().id('de5630f1-c7ef-4a61-9272-4aff1c60a8fd').thema(thema).entry('r August').get());
        entries.push(new Builder().id('d946809f-93aa-47b5-aa0f-1b0a31be5f7a').thema(thema).entry('r September').get());
        entries.push(new Builder().id('107b81b7-879a-4428-8b41-95085d29dcdd').thema(thema).entry('r Oktober').get());
        entries.push(new Builder().id('edc2df54-c2a5-4f39-a99f-6aeeb13d9aac').thema(thema).entry('r November').get());
        entries.push(new Builder().id('c31db62f-077e-4bf0-9aa4-d545b8ffd475').thema(thema).entry('r Dezember').get());
        */
        return entries;
    }

    createTageszeitenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Tageszeiten'];
        entries.push(new Builder().id('d41f6050-9c97-42ed-9f8b-75322b1cad03').thema(thema).entry('tagsüber').translate('pendant la journée').get());
        entries.push(new Builder().id('bdbabf41-3cb0-4a62-affe-c483acf6e225').thema(thema).entry('um Mitternacht').translate('à minuit').get());
/*
        entries.push(new Builder().id('cdc5a543-53af-4a4e-8f07-2109ddb036e8').thema(thema).entry('Tageszeiten').get());
        entries.push(new Builder().id('5a9f5692-9525-4736-9d5b-65cae9f7df69').thema(thema).entry('r Tag, -e').get());
        entries.push(new Builder().id('8df278a1-4c12-4c9d-8497-c286d109641f').thema(thema).entry('r Morgen, -').get());
        entries.push(new Builder().id('9b155692-eba0-4d5f-b26a-49e4b1081263').thema(thema).entry('r Vormittag, -e').get());
        entries.push(new Builder().id('eaa0af0c-11d4-4869-a553-525d327a7417').thema(thema).entry('r Mittag, -e').get());
        entries.push(new Builder().id('52e5f832-e20d-40c6-9559-6753e8648765').thema(thema).entry('r Nachmittag, -e').get());
        entries.push(new Builder().id('af110e9d-60d3-4310-9b35-3ea4cc59955a').thema(thema).entry('r Abend, -e').get());
        entries.push(new Builder().id('5164bdfc-17c4-4b7e-b37d-ba5c4041d3cc').thema(thema).entry('e Nacht,“ –e').get());
        entries.push(new Builder().id('213c5796-1dea-48ba-b4e5-8243f6f70ec9').thema(thema).entry('e Mitternacht').get());
        entries.push(new Builder().id('f214254c-1d07-42c5-a43a-7cb7b1adf74a').thema(thema).entry('täglich').get());
        entries.push(new Builder().id('a4362c5e-be1f-474d-b053-8bbe5741629b').thema(thema).entry('morgens').get());
        entries.push(new Builder().id('9ce3f4e4-21ee-447f-830d-c21b1bb38318').thema(thema).entry('am Morgen').get());
        entries.push(new Builder().id('306fb16d-2a0f-498b-859c-2a577f423307').thema(thema).entry('vormittags').get());
        entries.push(new Builder().id('720de88f-0f7f-4bbd-8feb-52941d0a668d').thema(thema).entry('am Vormittag').get());
        entries.push(new Builder().id('0dfdacba-a05c-4a1b-98cd-85cd98dc1bdb').thema(thema).entry('mittags').get());
        entries.push(new Builder().id('7568c2c0-f883-4534-9f0a-8c61bd66a427').thema(thema).entry('am Mittag').get());
        entries.push(new Builder().id('adb73a78-d880-4053-91e1-ab218bf7ba2f').thema(thema).entry('nachmittags').get());
        entries.push(new Builder().id('506b21f0-e11f-4306-9ed8-f581e26a51ba').thema(thema).entry('am Nachmittag').get());
        entries.push(new Builder().id('90278abf-66ca-4187-ade3-93af23feb8a9').thema(thema).entry('abends').get());
        entries.push(new Builder().id('e2025c67-fffe-4c53-a871-8b2ad6c7a848').thema(thema).entry('am Abend').get());
        entries.push(new Builder().id('f8bd4b96-03bf-4fb0-a9af-cf2718b44136').thema(thema).entry('nachts').get());
        entries.push(new Builder().id('285ab336-1508-468a-86d7-c245b2a6bab3').thema(thema).entry('in der Nacht').get());
        */
        return entries;
    }

    createUhrzeitEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Uhrzeit'];
        /*
        entries.push(new Builder().id('4cafa294-f1ba-4a63-88cf-22af143764d3').thema(thema).entry('Uhrzeit').get());
        entries.push(new Builder().id('a2591041-1440-4d3c-8f1d-270e00471637').thema(thema).entry('sieben Uhr drei').alternative('07.03').get());
        entries.push(new Builder().id('fd3f2970-b7aa-4a0e-8841-26fe95812a8b').thema(thema).entry('drei Uhr fünfzehn').alternative('3.15').get());
        entries.push(new Builder().id('04b80123-eb06-468b-8669-ee63e9473912').thema(thema).entry('fünfzehn Uhr dreißig / halb vier').alternative('15.30').get());
        entries.push(new Builder().id('b0e7b37f-e7c5-47a9-98b4-a50c80367dae').thema(thema).entry('vierundzwanzig Uhr').alternative('24.00').get());
        entries.push(new Builder().id('ab94ff8c-4f98-46e5-8b02-3a5df40f0d23').thema(thema).entry('dreizehn Uhr / ein Uhr').alternative('13.00').get());
        entries.push(new Builder().id('e29440b1-e83d-4461-92ca-1251c47215f6').thema(thema).entry('halb zwölf').alternative('11.30').get());
        entries.push(new Builder().id('03462833-4707-4de5-a4ec-6c77816d2704').thema(thema).entry('vierzehn Uhr fünf / fünf nach zwei').alternative('14.05').get());
        entries.push(new Builder().id('adf381d8-d12a-4dee-8881-4f8a6dbf4e17').thema(thema).entry('vierzehn Uhr fünfundfünfzig / fünf vor drei').alternative('14.55').get());
        entries.push(new Builder().id('741fada2-3942-4791-92eb-f5e32b593963').thema(thema).entry('viertel nach zehn').alternative('10.15').get());
        entries.push(new Builder().id('ca6dd113-fbf2-4f38-be4f-55baa904310f').thema(thema).entry('viertel vor sieben').alternative('6.45').get());
        entries.push(new Builder().id('51199b1a-decd-4cca-988c-6bf991d77522').thema(thema).entry('zwanzig Uhr vierzig / zwanzig vor neun').alternative('20.40').get());
        */
        return entries;
    }

    createWochentageEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Wochentage'];
        /*
        entries.push(new Builder().id('ff48cd2d-7231-4047-a7c1-889233d1bb6a').thema(thema).entry('Wochentage').get());
        entries.push(new Builder().id('02d3b05d-1163-4546-8f2f-34a21f265e57').thema(thema).entry('r Montag').get());
        entries.push(new Builder().id('de139544-5179-4521-b98b-d4c45fa372b2').thema(thema).entry('r Dienstag').get());
        entries.push(new Builder().id('cb6d586a-3741-47d5-abb3-26f73d0b88ea').thema(thema).entry('r Mittwoch').get());
        entries.push(new Builder().id('58a00e49-1e8b-4acf-b9bc-ce5d1e40288e').thema(thema).entry('r Donnerstag').get());
        entries.push(new Builder().id('66c8203e-96eb-4f58-9b5f-57b775dce16c').thema(thema).entry('r Freitag').get());
        entries.push(new Builder().id('f3fcd4de-2375-419f-b7ad-81ce50bfcb57').thema(thema).entry('r Samstag').get());
        entries.push(new Builder().id('c0b3ae39-f726-449e-8f93-eab380e2fc74').thema(thema).entry('r Sonnabend').get());
        entries.push(new Builder().id('8fdf9690-2a39-4bad-abe2-a5427dfb8fc4').thema(thema).entry('r Sonntag').get());
        entries.push(new Builder().id('83cc1549-a02a-42df-ad1e-876d4262cafb').thema(thema).entry('s Wochenende').get());
        entries.push(new Builder().id('7ec27c39-0584-4b38-a83f-f7f0f2f39817').thema(thema).entry('r Arbeitstag').get());
        entries.push(new Builder().id('65402afa-1e8a-4aa4-98c3-afe74533f337').thema(thema).entry('r Feiertag').get());
        entries.push(new Builder().id('302b445e-3148-46f1-9051-5ef20abdfd40').thema(thema).entry('montags').get());
        entries.push(new Builder().id('df2afe6f-8ddc-4d93-8733-78fcb4ca30b6').thema(thema).entry('am Montag').get());
        entries.push(new Builder().id('5b96f2f9-6467-4969-8a2a-ad42adff7c60').thema(thema).entry('dienstags').get());
        entries.push(new Builder().id('d1464781-4459-4dd9-99e6-2d8870f9c9ee').thema(thema).entry('am Dienstag').get());
        entries.push(new Builder().id('09ab1e22-b62d-4f7e-875d-588dda990818').thema(thema).entry('mittwochs').get());
        entries.push(new Builder().id('9684a522-30d9-4b1e-b5c5-3e0ec970398a').thema(thema).entry('am Mittwoch').get());
        entries.push(new Builder().id('be501c3b-cf79-45d9-a208-20e3f86509a6').thema(thema).entry('donnerstags').get());
        entries.push(new Builder().id('6fb6386c-31f4-4f2c-aa35-6a71e3aca422').thema(thema).entry('am Donnerstag').get());
        entries.push(new Builder().id('d465b141-df93-4ab9-93fa-54aa057eb083').thema(thema).entry('freitags').get());
        entries.push(new Builder().id('59db086e-689d-4040-8562-56bb8be189ca').thema(thema).entry('am Freitag').get());
        entries.push(new Builder().id('47de7fe5-cef9-48d8-8848-9ec5fb4272a9').thema(thema).entry('samstags').get());
        entries.push(new Builder().id('e9bcd1ca-0d4c-4b5e-ab6b-7c51da30b9d9').thema(thema).entry('am Samstag').get());
        entries.push(new Builder().id('e26cf0de-9fe7-45f1-8950-4e33493fd2bd').thema(thema).entry('sonntags').get());
        entries.push(new Builder().id('34f2906f-0729-4460-b2fb-a6144898e3db').thema(thema).entry('am Sonntag').get());
        entries.push(new Builder().id('3c3028ab-3ae7-44af-92f8-29519c96b13a').thema(thema).entry('am Wochenende').get());
        */
        return entries;
    }

    createZeitangabenEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Zeit', 'Zeitangaben'];
        /*
        entries.push(new Builder().id('bdbdb55c-2e01-4689-9500-87689db5f73c').thema(thema).entry('Zeitangaben').get());
        entries.push(new Builder().id('d6854732-714e-4ad2-b126-68cd34bc575c').thema(thema).entry('e Sekunde, -n').get());
        entries.push(new Builder().id('f5a59849-e975-46fa-9033-31e9a61a0ef0').thema(thema).entry('e Minute,- n').get());
        entries.push(new Builder().id('6c0a15cd-446e-4280-ac2f-4e462a896ff8').thema(thema).entry('e Stunde,- n').get());
        entries.push(new Builder().id('492459b6-0c48-4907-b9ba-55e49826350c').thema(thema).entry('e halbe Stunde, -n').get());
        entries.push(new Builder().id('39a00f54-bbad-4e06-90c5-a58203e7118c').thema(thema).entry('e Viertelstunde, -n').get());
        entries.push(new Builder().id('24fd893a-cf2e-4426-ba3d-f1d12f7f0e86').thema(thema).entry('r Tag, -e').get());
        entries.push(new Builder().id('1d1454ad-b433-43d1-860b-a0eec839b3e9').thema(thema).entry('e Woche, -n').get());
        entries.push(new Builder().id('72ccb6f2-badf-4dc6-aa62-4f9d9347a70d').thema(thema).entry('r Monat, -e').get());
        entries.push(new Builder().id('dd9fd8ab-43ee-4c9e-ad09-567c4772c4ac').thema(thema).entry('s Jahr, -e').get());
        */
        return entries;
    }

    createAEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'A'];
        entries.push(new Builder().id('906671fe-154e-4631-92b9-80f198a7cdd0').thema(thema).entry('r Abfall, ä, -e').translate(['déchets', 'débris', 'détritus']).example('Bitte lasst keinen Abfall auf dem Parkplatz liegen!').get());
        entries.push(new Builder().id('1c1c3f49-e799-4d2c-b9a6-6875d23f5492').thema(thema).entry('s Abitur (Sg.)').translate('baccalauréat (bac)').example(['Nächstes Jahr mache ich Abitur.', 'Dann will ich studieren.']).get());
        entries.push(new Builder().id('b4f4c1b8-bdf8-4351-b1f6-fdd45171db9c').thema(thema).entry('e Ahnung, -en').translate(['pressentiment', 'intuition', 'présage']).example('Weißt du, wo wir uns treffen wollen? - Nein, ich habe keine Ahnung.').get());
        entries.push(new Builder().id('96bb66bb-8e37-486f-b528-f64d43cbcc3b').thema(thema).entry('als').translate(['alors que', 'lorsque', 'comme']).example(['Mein Bruder ist älter als ich.', 'Sie arbeitet als Ärztin.']).get());
        entries.push(new Builder().id('c55977d1-165b-4d85-ae6f-c7ddc895857a').thema(thema).entry('e Ampel, -n').translate('feu (de signalisation, circulation)').example(['Fahren Sie an der Ampel links.', 'Die Ampel ist rot, bleib stehen!']).get());
        entries.push(new Builder().id('11e11bee-4de2-4ca1-b3d0-97e7dd1274af').thema(thema).entry('r Anzug, ü, -e').translate(['costume', 'complet-veston', 'costard']).example('Für die Geburtstagsfeier von Oma brauchst du einen Anzug.').get());
        entries.push(new Builder().id('b00afc97-7a2e-4d8c-9d0e-0fbbb849c4ea').thema(thema).entry('arm').translate('pauvre').example('Hans ist sehr arm. Er hat wenig Geld.').get());
        entries.push(new Builder().id('5aa27b53-e0fd-42e8-9d50-a91d1bb35adb').thema(thema).entry('auf jeden/keinen Fall').translate(['de toute façon', 'en aucun cas']).example('Du kannst auf jeden/keinen Fall mit ihm sprechen.').get());
        entries.push(new Builder().id('7a6a4bc1-2c50-4c9c-975d-de82c722a6e6').thema(thema).entry('aufmachen').translate('ouvrir qc.').example('Kannst du bitte das Fenster aufmachen?').get());
        entries.push(new Builder().id('0a317553-1f4a-43a5-b8eb-49499eca0cd5').thema(thema).entry('aufpassen').translate(['se surveiller', 'monter la garde', 'faire le guet']).example(['Pass auf, ein Auto!', 'Er passt im Unterricht nicht richtig auf.', 'Kannst du auf deine Schwester aufpassen?']).get());
        entries.push(new Builder().id('06e7631c-c507-443c-825f-36eb87fe5c8c').thema(thema).entry('aufräumen').translate('faire du rangement').example('Bitte räum dein Zimmer auf.').get());
        entries.push(new Builder().id('1e786c14-ffe1-451a-9880-0e3722cccee2').thema(thema).entry('aufregend').translate(['excitant(e)', 'palpipant(e)', 'vibrant(e)']).example(['Ich finde den Film aufregend.', 'Es ist aufregend bei diesem Wettbewerb zu sein.']).get());
        entries.push(new Builder().id('a77a23bf-47e1-4980-b290-422abdccbf44').thema(thema).entry('r Aufsatz, ä, -e').translate('rédaction').example('Ich muss noch einen Aufsatz über die Römer schreiben.').get());
        entries.push(new Builder().id('436bc23c-d161-4cfa-b6b1-6c0747f17a68').thema(thema).entry('ausgehen').translate('sortir (weekend)').example('Am Wochenende gehe ich gern mit meinen Freunden aus.').get());
        entries.push(new Builder().id('705d6286-215d-49d1-a1dd-507d99cafd9a').thema(thema).entry('auspacken').translate(['dépaqueter qc.', 'déballer qc.']).example('Hast du schon deinen Koffer ausgepackt?').get());
        entries.push(new Builder().id('4accd1be-a15e-45ac-bb50-ada4ec2c0973').thema(thema).entry('außerdem').translate(['en plus', 'en outre']).example('Möchten Sie außerdem noch etwas?').get());
        entries.push(new Builder().id('c4a17cba-5d86-4f22-8b2e-479d3cf2ecf6').thema(thema).entry('aussprechen').translate(['prononcer qc.', 'formuler qc.']).example('Wie spricht man dieses Wort aus?').get());
/*
        entries.push(new Builder().id('d36546f7-4283-4f5b-b17b-fa9b1aef80ae').thema(thema).entry('aktiv').example('Er ist im Sport sehr aktiv.').get());
        entries.push(new Builder().id('84ab7063-e372-4cdb-818d-01b132617624').thema(thema).entry('alle').example(['Sind alle Schüler da?', 'Hast du alles?']).get());
        entries.push(new Builder().id('0e0c772d-fb0b-419e-a4cd-986c439a83b7').thema(thema).entry('anders').example(['In Deutschland ist das Leben anders.', 'Ich würde das anders machen.', 'Er ist anders als du.']).get());
        entries.push(new Builder().id('c8bd1f32-941e-4d1f-b4a8-cac8660171bf').thema(thema).entry('e Angst, Ä, -e').example('Ich habe keine Angst vor der Prüfung.').get());
        entries.push(new Builder().id('9c7c6112-2ca1-4051-a743-551f09a4ea8b').thema(thema).entry('e Apotheke, -n').example('Aspirin bekommen Sie nur in der Apotheke.').get());
        entries.push(new Builder().id('fb913c6d-31ea-4108-94d8-df5ace449b94').thema(thema).entry('ärgern (sich)').example(['Die Schüler ärgern den Lehrer.', 'Ich habe mich sehr über meinen Bruder geärgert.']).get());
        entries.push(new Builder().id('7920ea5c-a2ad-4e9a-a608-5200dd317294').thema(thema).entry('r Artikel, -').example('Der Artikel in der Zeitung ist interessant.').get());
        entries.push(new Builder().id('88d54d2a-32e3-4dca-b5f4-e1c79e99d617').thema(thema).entry('außer').example('Außer mir gehen alle Schüler zu der Party.').get());
        entries.push(new Builder().id('ff67d52d-881a-4aed-b93c-70ebaf340f09').thema(thema).entry('r Autor, -en/e Autorin, -nen').example('Der Autor von diesem Buch heißt Stefan Zweig.').get());
*/
// /* Double */        entries.push(new Builder().id('6acc4acb-ec3f-45c8-8e7e-2f20055af117').thema(thema).entry('ausfüllen').translate('compléter qc.').example('Bitte füllen Sie das Formular aus.').get());
// /* Double */        entries.push(new Builder().id('a52b3d13-a7a0-4a19-a683-7376fa2cc331').thema(thema).entry('Ab').example('Ab morgen muss ich wieder arbeiten.').get());
// /* Double */        entries.push(new Builder().id('f2226add-c3e4-4e78-8512-0570e43e7010').thema(thema).entry('aber').example(['Der Film ist traurig, aber auch sehr schön.', 'Heute geht es nicht, aber morgen.']).get());
// /* Double */        entries.push(new Builder().id('3dae69f7-6258-4ea5-82ae-42d3ff6f3142').thema(thema).entry('abfahren').example('Der Zug fährt pünktlich ab.').get());
// /* Double */        entries.push(new Builder().id('24858cdc-9182-4cda-9501-ab9406ad0ad4').thema(thema).entry('abgeben').example('Wo kann ich das Buch hier abgeben?').get());
// /* Double */        entries.push(new Builder().id('f7a71121-032a-40d1-9bbc-0ecb69a41887').thema(thema).entry('abholen').example('Ich hole dich am Bahnhof ab.').get());
// /* Double */        entries.push(new Builder().id('d3a0974c-9264-41dc-88c5-7a7726392e03').thema(thema).entry('e Achtung (Sg.)').example('Achtung, da kommt ein Auto!').get());
// /* Double */        entries.push(new Builder().id('d0f97d17-a1a7-45d5-a62c-9eb952c445a8').thema(thema).entry('e Adresse, -n').example('Weißt du seine neue Adresse? Ja, er wohnt in...').get());
// /* Double */        entries.push(new Builder().id('1ccd177e-ed0d-45f4-9063-6ae4361d0c3c').thema(thema).entry('allein').example(['Er arbeitet lieber allein.', 'Ich gehe nicht gern allein ins Kino.']).get());
// /* Double */        entries.push(new Builder().id('bc1fe72d-757f-49f4-95e0-9b7ff627b0c5').thema(thema).entry('also').example(['Wir haben viel Platz, du kannst also bei uns schlafen.', 'Also, die Sache ist so: ...']).get());
// /* Double */        entries.push(new Builder().id('0db052e6-7fc6-4cb5-8865-4ee749f356eb').thema(thema).entry('alt').example(['Wie alt bist du?', 'Unser Haus ist sehr alt.', 'Fährt das alte Auto immer noch?']).get());
// /* Double */        entries.push(new Builder().id('3154bb12-8330-4ede-ac39-fb62e9ff4650').thema(thema).entry('s Alter (Sg.)').example('Alter: 15 Jahre.').get());
// /* Double */        entries.push(new Builder().id('9b25a1c4-01f4-4500-a00b-acbcf864dcad').thema(thema).entry('an').example(['Ich komme am Sonntag', 'am Morgen.', 'Wir sind am Meer', 'am Fenster.', 'Wir gehen an den Strand.', 'Ich arbeite gern am Computer.']).get());
// /* Double */        entries.push(new Builder().id('be06f964-d3df-480f-96d4-3bc830fb2354').thema(thema).entry('anbieten').example(['Er hat mir einen Job angeboten.', 'Kann ich dir etwas anbieten? Tee oder Kaffee?']).get());
// /* Double */        entries.push(new Builder().id('524b302b-468b-4773-8cb6-a1d5f2d0d597').thema(thema).entry('ander-').example('Ich nehme lieber den anderen Pullover. Der gefällt mir besser.').get());
// /* Double */        entries.push(new Builder().id('04bb9bb4-7313-4c31-9165-c3372af19de2').thema(thema).entry('r Anfang, ä, -e').example(['Am Anfang ist das Buch langweilig, am Ende lustig.', 'Wir machen Anfang August Ferien.']).get());
// /* Double */        entries.push(new Builder().id('6ea3a657-c6f3-4f0b-9f0b-51d40af0b0f6').thema(thema).entry('anfangen').example(['Bitte fang jetzt an!', 'Der Unterricht fängt gleich an.']).get());
// /* Double */        entries.push(new Builder().id('3ba377be-f9df-49e3-8fd6-dfc6a7efcf62').thema(thema).entry('ankommen').example('Wann kommt ihr in Berlin an?').get());
// /* Double */        entries.push(new Builder().id('3242111b-ad42-4a4b-8203-2cf3ce4be3c5').thema(thema).entry('anmachen').example('Es ist dunkel. Mach bitte das Licht an!').get());
// /* Double */        entries.push(new Builder().id('c7e125f4-79c3-4188-b500-4cb3dfdf0a0f').thema(thema).entry('anmelden (sich)').example('Du musst dich für die Prüfung anmelden.').get());
// /* Double */        entries.push(new Builder().id('cabd73f4-6fd2-4610-b1bf-8d219e708de0').thema(thema).entry('anrufen').example('Ich rufe dich morgen an.').get());
// /* Double */        entries.push(new Builder().id('0a2f73bb-5a8a-45eb-89b2-f6ddf3aa741d').thema(thema).entry('r Anruf').example('Gut, ich warte dann auf deinen Anruf.').get());
// /* Double */        entries.push(new Builder().id('5491829e-540a-4dd3-99d3-4de1d52c4db6').thema(thema).entry('e Ansage, -n').example('Folgt den Ansagen am Telefon.').get());
// /* Double */        entries.push(new Builder().id('5ecd2906-2bb0-44cd-af06-eee470e59177').thema(thema).entry('e Anzeige, -n').example('Lies mal die Anzeige in der Zeitung.').get());
// /* Double */        entries.push(new Builder().id('aa108932-f5c1-4c98-878d-47650a018ec3').thema(thema).entry('anziehen').example('Was ziehe ich heute an? Eine Hose oder ein Kleid?').get());
// /* Double */        entries.push(new Builder().id('a9ba6609-0ac1-444e-91f6-b691eb0404f4').thema(thema).entry('r Apfel, ä, -e').example('Die Äpfel aus Omas Garten schmecken sehr gut.').get());
// /* Double */        entries.push(new Builder().id('2969425c-9608-4132-bbdb-a6d98b7db256').thema(thema).entry('r Appetit (Sg.)').example(['Guten Appetit!', 'Ich habe Appetit auf eine Banane.']).get());
// /* Double */        entries.push(new Builder().id('5da548ef-e7b1-485b-8d4e-9559530ad777').thema(thema).entry('e Arbeit, -en').example(['Mein Bruder sucht Arbeit.', 'Ich gehe zu Fuß zur Arbeit.', 'War die Physikarbeit schwer?']).get());
// /* Double */        entries.push(new Builder().id('f078483e-441e-4c01-8b4d-8c36a3fb8b81').thema(thema).entry('arbeiten').example('Meine Mutter arbeitet im Krankenhaus.').get());
// /* Double */        entries.push(new Builder().id('84479ae1-fe20-4203-a0de-cda99caf24e9').thema(thema).entry('arbeitslos').example('Mein Vater hat keine Arbeit. Er ist arbeitslos.').get());
// /* Double */        entries.push(new Builder().id('fc9958bf-c9aa-4953-87c1-6848ba4215c3').thema(thema).entry('r Arm, -e').example('Sie ist am Arm verletzt. Jetzt kann sie nicht mehr Basketball spielen.').get());
// /* Double */        entries.push(new Builder().id('fab9baa8-96bd-4776-8c4f-9da8d14fcc09').thema(thema).entry('r Arzt, Ä, -e/e Ärztin, -nen').example('Er ist krank und muss heute zum Arzt.').get());
// /* Double */        entries.push(new Builder().id('d01aa415-eb6d-4b32-9c1d-9df61765861c').thema(thema).entry('auch').example(['Ich möchte auch mitspielen.', 'Sie kommen aus München? Ich auch.']).get());
// /* Double */        entries.push(new Builder().id('65308d95-c4fb-4445-b7e8-686a023a5146').thema(thema).entry('auf').example(['Die Zeitung ist auf dem Tisch.', 'Auf dem Foto bin ich mit meiner Schwester.', 'Wie heißt das auf Deutsch?']).get());
// /* Double */        entries.push(new Builder().id('ff0a6cb6-9e66-4802-84f2-e883c26c932e').thema(thema).entry('aufhören').example(['Bitte, hör jetzt auf!', 'Hier hört die Bahnhofsstraße auf.', 'In einer Woche hört der Kurs auf.']).get());
// /* Double */        entries.push(new Builder().id('abc2e258-7a64-4e00-928e-5ecb9ef84c78').thema(thema).entry('aufstehen').example('Um acht Uhr stehen wir auf.').get());
// /* Double */        entries.push(new Builder().id('e2f88afd-7a33-4464-abe9-08c0ac4c1472').thema(thema).entry('s Auge, -n').example('Er hat grüne Augen.').get());
// /* Double */        entries.push(new Builder().id('472285a8-cbf9-48ec-94b5-469eabc44d7f').thema(thema).entry('aus').example(['Wann kommt ihr aus der Schule?', 'Der Tisch ist aus Holz.']).get());
// /* Double */        entries.push(new Builder().id('0a47222d-a74c-4886-ba8c-f08c02c8a9b6').thema(thema).entry('r Ausflug, ü, -e').example('Wir machen mit der Schule einen Ausflug nach Heidelberg.').get());
// /* Double */        entries.push(new Builder().id('49f56917-dca5-44a8-9de5-194b79e5f742').thema(thema).entry('r Ausgang, ä, -e').example('Wo ist der Ausgang? Ich möchte hinaus.').get());
// /* Double */        entries.push(new Builder().id('acc96fe3-c0f5-4c3e-a8ea-a872a20247d8').thema(thema).entry('s Ausland (Sg.)').example('Ich wohne in Berlin, aber in den Ferien reise ich oft ins Ausland.').get());
// /* Double */        entries.push(new Builder().id('e082a781-b2e6-47d0-9fe4-2fe8332c888e').thema(thema).entry('r Ausländer, -').example('In unserem Haus wohnen viele Ausländer.').get());
// /* Double */        entries.push(new Builder().id('85234916-b7ee-49f9-97d4-ea50d9b04a7d').thema(thema).entry('ausmachen').example('Die Musik ist zu laut. Kannst du das Radio ausmachen?').get());
// /* Double */        entries.push(new Builder().id('18dd5082-ffa9-45e0-a279-dabc742b9596').thema(thema).entry('aussehen').example(['Sie sieht aus wie ihre Mutter.', 'Wie sieht er aus? Er ist groß und blond.']).get());
// /* Double */        entries.push(new Builder().id('5a3cdaca-52a2-4c33-911e-ffafcc8c8719').thema(thema).entry('aus sein').example(['Plötzlich war das Licht aus.', 'Um ein Uhr ist die Schule aus.']).get());
// /* Double */        entries.push(new Builder().id('df7cfe12-cbd7-4986-a498-2977e2bb3976').thema(thema).entry('aussteigen').example('Du musst an der Haltestelle am Marktplatz aussteigen.').get());
// /* Double */        entries.push(new Builder().id('f86b8183-0adb-4edd-88fe-b278830940a1').thema(thema).entry('r Ausweis, -e').example('Kannst du mir bitte deinen Ausweis zeigen?').get());
// /* Double */        entries.push(new Builder().id('5ef2a02a-46af-42df-a668-84da880b4779').thema(thema).entry('s Auto, -s').example('Er kommt mit dem Auto. Das Auto fährt sehr schnell.').get());
// /* Double */        entries.push(new Builder().id('06a8e7cc-e419-4b16-82da-c0cd09670e78').thema(thema).entry('e Autobahn, -en').example('Die Autobahn verbindet Köln und Bonn.').get());
// /* Double */        entries.push(new Builder().id('40355b79-1f82-4a11-a810-f84f16d9bd13').thema(thema).entry('r Automat, -en').example('Die Fahrkarte kannst du am Automaten kaufen.').get());
        return entries;
    }

    createBEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'B'];
        entries.push(new Builder().id('a718045f-5f7c-4745-b873-742a3c01df1b').thema(thema).entry('backen').translate('faire de la pâtisserie').example('Ich habe dir einen Kuchen gebacken.').get());
        entries.push(new Builder().id('1b96e413-6c25-4233-8325-47efa4154e66').thema(thema).entry('basteln').translate('bricoler qc.').example(['Basteln ist mein Hobby.', 'Er bastelt eine Geburtstagskarte für seine Großmutter.']).get());
        entries.push(new Builder().id('0ef6ec76-9541-4c39-a7b3-6b9c6f4099d2').thema(thema).entry('beantworten').translate('répondre à qc.').example('Bitte beantworte die Frage mit drei Sätzen.').get());
        entries.push(new Builder().id('fa290308-2794-4e7a-9f46-a25cce46e18e').thema(thema).entry('beeilen (sich)').translate(['sé dépêcher', 'se précipiter', 'se hâter', 'se presser']).example('Bitte, beeil dich, wir kommen zu spät!').get());
        entries.push(new Builder().id('1627f0cc-c695-42fd-8c3d-165d0272b5e5').thema(thema).entry('beliebt').translate(['apprécié(e)', 'en vogue', 'populaire', 'aimé(e)']).example(['Diese Diskothek ist bei Jugendlichen sehr beliebt.', 'Sie ist in der Klasse sehr beliebt.']).get());
        entries.push(new Builder().id('604b4b28-de36-4136-877b-82d921f3e330').thema(thema).entry('bequem').translate(['confortable', 'commode']).example(['Sitzen Sie bequem?', 'Ich brauche noch eine bequeme Hose zum Radfahren.']).get());
        entries.push(new Builder().id('f3cd221c-a0d1-46e1-8b2a-248f49d921ba').thema(thema).entry('r Berg, -e').translate('montagne').example('In den Alpen sind die Berge sehr hoch.').get());
        entries.push(new Builder().id('339b18fc-4282-48a8-9985-3539917c9ebc').thema(thema).entry('Bescheid sagen').translate(['avertir qn.', 'mettre qn. au courant (de qc.)']).example('Ich sage dir noch genauer Bescheid.').get());
        entries.push(new Builder().id('f95efe85-22f8-4e68-9c91-d5ae1f38815b').thema(thema).entry('besonders').translate('particulièrement').example(['Das finde ich besonders interessant.', 'Das Essen hier ist besonders gut.']).get());
        entries.push(new Builder().id('4fbf1a22-2589-4721-97f7-21b1c18a6a83').thema(thema).entry('bestimmt').translate(['assurement', 'sûrement', 'certain(e)']).example(['Ich schreibe dir bestimmt!', 'Das hat er bestimmt nicht so gemeint.']).get());
        entries.push(new Builder().id('46ee4206-fd1e-4990-81a6-f4291962d526').thema(thema).entry('blöd').translate(['idiot(e)', 'stupide']).example('Ich finde Mathematik blöd.').get());
        entries.push(new Builder().id('8c2a5da1-68ca-482d-8210-74b476e52ac3').thema(thema).entry('e Brücke, -n').translate('pont').example('Die Brücke über den Rhein ist 600 Meter lang.').get());
        entries.push(new Builder().id('9877d9dc-86c3-4ff1-9f51-3157fc02e4a9').thema(thema).entry('e Bücherei, -en').translate('bibliothèque (lieu)').example('Du bekommst dieses Buch in der Bücherei.').get());
/*
        entries.push(new Builder().id('15f4ae8a-a1db-4711-b170-3f9282551492').thema(thema).entry('r Ball, ä, -e').example('Wir wollen Fußball spielen. Bringst du deinen Ball mit?').get());
        entries.push(new Builder().id('3841ce09-79f2-4903-81e4-2a7784e7ee7d').thema(thema).entry('e Bank, ä, -e').example('Auf diese Bank können wir uns setzen!').get());
        entries.push(new Builder().id('e5dd389c-1dff-4cc8-b904-544a4c044246').thema(thema).entry('r Basketball, ä, -e').example('Meine Hobbys sind Basketball und Musik.').get());
        entries.push(new Builder().id('bd8313b0-2c82-42b4-ac64-190cc1cfd8fc').thema(thema).entry('bauen').example().get('Meine Eltern bauen gerade ein Haus.'));
        entries.push(new Builder().id('3f4ebfb7-9a99-4cdb-86c2-3abae0582d3e').thema(thema).entry('berühmt').example('Er ist ein berühmter Schauspieler.').get());
        entries.push(new Builder().id('b4cd802f-087d-4f0d-9a42-aefdac493268').thema(thema).entry('beschreiben').example('Kannst ihn beschreiben? -Ja, er ist blond und groß.').get());
        entries.push(new Builder().id('780a08c1-f4dd-4e6c-90fd-24c7dd88f014').thema(thema).entry('e Bibliothek, -en').example('Das Buch findest du in der Bibliothek.').get());
        entries.push(new Builder().id('2e7cf208-45ba-4b3b-9779-013bc64ed249').thema(thema).entry('s Blatt, ä, -er').example(['Die Blätter fallen von den Bäumen.', 'Hast du bitte ein Blatt Papier für mich?']).get());
        entries.push(new Builder().id('4aec711c-9d85-491f-9ec4-fa9211a6e9bf').thema(thema).entry('bleiben').example(['Wir bleiben zu Hause.', 'Ich bleibe nur bis morgen. Dann muss ich weiter.']).get());
        entries.push(new Builder().id('e8464e40-7ab5-4fec-b5d1-615cec861540').thema(thema).entry('e Bluse, -n').example('Ich möchte eine rote Bluse und einen grünen Pullover.').get());
        entries.push(new Builder().id('8fbf7a60-49c9-4245-b7c6-2e6cff4ba5f2').thema(thema).entry('e Bratwurst, ü, -e').example('Ich möchte eine Bratwurst mit Ketchup.').get());
        entries.push(new Builder().id('88dd6190-2d93-40c3-9cef-592026af2078').thema(thema).entry('e Brille, -n').example('Ohne Brille kann ich nicht lesen. Mit dieser Brille kann ich nichts sehen.').get());
        entries.push(new Builder().id('c7221310-de15-477b-82d3-030135051956').thema(thema).entry('s Büro, -s').example('Das Büro ist am Nachmittag geschlossen..').get());
*/
// /* Double */        entries.push(new Builder().id('9fa6b3fa-05a9-4530-9f10-aa074e5d4ee4').thema(thema).entry('s Baby, -s').example('Meine Schwester ist noch ein Baby.').get());
// /* Double */        entries.push(new Builder().id('0b4da76d-c47c-44c4-bf62-2ad0aafd67f9').thema(thema).entry('e Bäckerei, -en').example('Gibt es hier eine Bäckerei?').get());
// /* Double */        entries.push(new Builder().id('fbcc0aa0-b1d7-41dc-bcc1-648a979d5f07').thema(thema).entry('s Bad, ä, -er').example('Wo ist das Bad? Ich will meine Haare waschen.').get());
// /* Double */        entries.push(new Builder().id('cb22b3e4-2ef4-4a83-85cd-b9b4172149f7').thema(thema).entry('baden').example(['Ich will morgens nicht baden. Ich dusche lieber.', 'Komm, baden im See!']).get());
// /* Double */        entries.push(new Builder().id('7b292878-f497-4919-83de-1088ae44da6f').thema(thema).entry('r Bahnhof, ö, -e').example('Wir gehen jetzt zum Bahnhof. Der Zug fährt in 10 Minuten.').get());
// /* Double */        entries.push(new Builder().id('f822d44d-6ab9-4676-955b-8b5998bbcf6b').thema(thema).entry('r Bahnsteig, -e').example('Der Zug kommt auf Bahnsteig 7 an.').get());
// /* Double */        entries.push(new Builder().id('23738d6f-f06e-47a4-8e36-53546123c898').thema(thema).entry('bald').example(['Bis bald!', 'Er kommt bald wieder.']).get());
// /* Double */        entries.push(new Builder().id('a70681bd-ad19-48af-bdaf-9cf59d769607').thema(thema).entry('r Balkon, -e').example(['Wir können auf dem Balkon frühstücken.', 'Die Wohnung hat keinen Garten, aber einen Balkon.']).get());
// /* Double */        entries.push(new Builder().id('aee90c00-52df-4413-864a-4efc9bebe156').thema(thema).entry('e Banane, -n').example('Sie isst gern Bananen.').get());
// /* Double */        entries.push(new Builder().id('9331aa3d-9b86-4926-a9db-4d93fbf82e6d').thema(thema).entry('e Bank, -en,').example('Ich muss noch Geld bei der Bank holen.').get());
// /* Double */        entries.push(new Builder().id('1b14cdcd-c0ec-4868-b8d2-215ee215fa25').thema(thema).entry('bar').example().get('Zahlen Sie bar oder mit Karte?'));
// /* Double */        entries.push(new Builder().id('07672f4b-9efa-4b47-a926-15dcc67046ab').thema(thema).entry('r Bauch, ä, -e').example('Das Essen war nicht gut. Jetzt tut mein Bauch weh.').get());
// /* Double */        entries.push(new Builder().id('d8115778-9d1f-4015-a94c-b59ff9d3d5af').thema(thema).entry('r Baum, ä, -e').example('Wir haben viele alte Bäume im Garten.').get());
// /* Double */        entries.push(new Builder().id('92916f4e-288f-4b39-937f-ea6e23b492ce').thema(thema).entry('bedeuten').example('Was bedeutet dieses Wort?').get());
// /* Double */        entries.push(new Builder().id('86f3e738-d7de-4ef5-acd3-ad680fac611c').thema(thema).entry('bei').example(['Er wohnt bei seinen Freunden.', 'Das liegt bei Hamburg.', 'Sie arbeitet bei der Firma Müller.']).get());
// /* Double */        entries.push(new Builder().id('24031bc2-19a8-40d5-a68a-9d1703f622cc').thema(thema).entry('beide').example(['Ich habe zwei Brüder, beide arbeiten schon.', 'Wir kommen beide.']).get());
// /* Double */        entries.push(new Builder().id('b78ed5c5-6ad6-4dec-aad6-d9d2db902f46').thema(thema).entry('bekannt').example('Sie ist ein bekannter Filmstar.').get());
// /* Double */        entries.push(new Builder().id('dd887fc7-a254-49b0-8b74-1c6320751a18').thema(thema).entry('bekommen').example(['Was bekommst du zum Geburtstag?', 'Hast du meinen Brief bekommen?']).get());
// /* Double */        entries.push(new Builder().id('e83a3fe2-7360-42d4-ae6b-67e8b55674da').thema(thema).entry('benutzen').example('Ich habe deinen Computer nicht benutzt.').get());
// /* Double */        entries.push(new Builder().id('485c6957-384c-41ca-8e98-058a18107e18').thema(thema).entry('r Beruf, -e').example('Was sind Sie von Beruf? Ich bin Lehrer.').get());
// /* Double */        entries.push(new Builder().id('7196676b-007d-413e-9e4c-cc514335b8b3').thema(thema).entry('bekommen').example('Deine Eltern bekommen von der Schule Bescheid.').get());
// /* Double */        entries.push(new Builder().id('28370855-7208-4eee-a647-006ca0cbc92c').thema(thema).entry('besetzt').example('Ist dieser Platz frei? -Nein, er ist besetzt.').get());
// /* Double */        entries.push(new Builder().id('85a617eb-594c-4db0-a5fe-98be9e5ae4e8').thema(thema).entry('besichtigen').example('Am Sonntag haben wir ein Schloss besichtigt.').get());
// /* Double */        entries.push(new Builder().id('bda755f4-db9e-423a-8c1b-821d1f649f10').thema(thema).entry('besser').example(['Hoffentlich geht es dir bald besser.', 'Der Film ist besser als das Buch.']).get());
// /* Double */        entries.push(new Builder().id('f018e674-c8b0-429c-90a6-346e3cb5ce5a').thema(thema).entry('best-').example(['Ich bin der beste Schüler in meiner Klasse.', 'Susi ist meine beste Freundin.', 'Am besten treffen wir uns vor dem Kino.']).get());
// /* Double */        entries.push(new Builder().id('ed7370fb-0a75-48f2-8928-00af93b0d77d').thema(thema).entry('bestellen').example(['Herr Ober, wir möchten bestellen!', 'Dieses Buch haben wir nicht. Soll ich es für dich bestellen?']).get());
// /* Double */        entries.push(new Builder().id('3877e741-591b-4882-887e-6853ff962f2b').thema(thema).entry('besuchen').example('Im Sommer besuche ich meine Großeltern.').get());
// /* Double */        entries.push(new Builder().id('02f458ae-6a07-4684-9487-fd3406c0e01f').thema(thema).entry('s Bett, -en').example(['Wann gehst du ins Bett?', 'Ich bin krank und muss deshalb im Bett bleiben.']).get());
// /* Double */        entries.push(new Builder().id('8e8002bb-8e4c-4f4c-b8dc-29028f2c7bbe').thema(thema).entry('bezahlen').example('Wo muss ich die Fahrkarten bezahlen?').get());
// /* Double */        entries.push(new Builder().id('314ed601-5bd7-492b-b842-6f8668e1c67e').thema(thema).entry('s Bier, -e').example('Darfst du schon Bier trinken? -Nein, ich bin noch nicht sechzehn Jahre alt.').get());
// /* Double */        entries.push(new Builder().id('ce5775f8-2619-463f-8c8c-2bc93893a9ec').thema(thema).entry('s Bild, -er').example(['Ich habe viele Bilder in meinem Zimmer.', 'Hast du ein Bild von deiner Schwester auf dem Smartphone?']).get());
// /* Double */        entries.push(new Builder().id('a2c2dca4-edb4-4472-a439-f31184796b85').thema(thema).entry('billig').example('In diesem Geschäft kann man billig einkaufen.').get());
// /* Double */        entries.push(new Builder().id('eec2001a-834d-4f05-9e6c-2c07e73c2055').thema(thema).entry('bis').example(['Wir haben bis ein Uhr Unterricht.', 'Bis später!', 'Ich warte bis morgen.', 'Fahren Sie bis zur Ampel.']).get());
// /* Double */        entries.push(new Builder().id('fb4b6b67-5a1c-438a-b07a-4c931219f32d').thema(thema).entry('(ein) bisschen').example(['Ich helfe dir ein bisschen.', 'Möchtest du noch Eis? Ja, ein bisschen.']).get());
// /* Double */        entries.push(new Builder().id('4dfbc685-03db-4f55-bd3d-ab2a51bc6e1d').thema(thema).entry('bitte').example(['Können Sie mir bitte helfen?', 'Bitte, komm schnell!', '(Wie) bitte?']).get());
// /* Double */        entries.push(new Builder().id('3d4f4662-fc14-4507-a162-5d361ca0a757').thema(thema).entry('r Bleistift, -e').example('Schreibe in der Prüfung nicht mit dem Bleistift, sondern mit dem Kugelschreiber.').get());
// /* Double */        entries.push(new Builder().id('87efeb99-64f1-416e-ab57-faedad06d1e7').thema(thema).entry('e Blume, -n').example('Die Blumen sind aus dem Garten meiner Tante.').get());
// /* Double */        entries.push(new Builder().id('643a7153-c642-4641-9491-bdb28bbb38f3').thema(thema).entry('brauchen').example('Brauchst du die Zeitung noch oder kann ich sie haben?').get());
// /* Double */        entries.push(new Builder().id('f6766a85-c97e-4123-b8e1-a7891d4694c2').thema(thema).entry('breit').example('Der Schrank ist zwei Meter hoch und einen Meter breit.').get());
// /* Double */        entries.push(new Builder().id('c02b91bd-08e0-4961-8fae-78ca9c44f945').thema(thema).entry('r Brief, -e').example('Sie schreibt gern Briefe an ihre Freundin.').get());
// /* Double */        entries.push(new Builder().id('b7deda1d-688e-4bcc-8627-2f62ad81be41').thema(thema).entry('e Briefmarke, -n').example('Für diesen Brief brauche ich zwei Briefmarken zu 58 Cent.').get());
// /* Double */        entries.push(new Builder().id('c4e71c09-6694-4ad7-bf72-cdcfe6fd5ac0').thema(thema).entry('bringen').example(['Ich bringe dir die Bücher morgen.', 'Soll ich dich mit dem Auto nach Hause bringen?']).get());
// /* Double */        entries.push(new Builder().id('d5c0306d-450a-4cdd-b42e-2f558135f34a').thema(thema).entry('s Brot, -e').example(['Wir backen unser Brot selbst.', 'Bitte ein Wurstbrot.']).get());
// /* Double */        entries.push(new Builder().id('23d6b3d3-d83f-4a54-aba8-295a8b21d9c5').thema(thema).entry('s Brötchen, -').example('Ich hole schnell Brötchen für das Frühstück.').get());
// /* Double */        entries.push(new Builder().id('f9f69e0f-276f-426d-816c-54023f36d241').thema(thema).entry('s Buch, ü, -er').example('Ich brauche ein Buch über die Geschichte Berlins.').get());
// /* Double */        entries.push(new Builder().id('3cefe967-498c-4792-a477-6bd5f7d76645').thema(thema).entry('buchstabieren').example('Können Sie Ihren Namen bitte buchstabieren? -Ja, M-Ü-L-L-E-R.').get());
// /* Double */        entries.push(new Builder().id('3958559e-065d-4e0e-aa15-7994f7b49d24').thema(thema).entry('r Bus, -se').example('Sie fährt mit dem Bus zur Schule.').get());
// /* Double */        entries.push(new Builder().id('64423eb2-301a-4f92-8f03-900d6cf4a235').thema(thema).entry('e Butter (Sg.)').example('Ein Brot mit Butter und Marmelade.').get());
        return entries;
    }

    createCEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'C'];
        entries.push(new Builder().id('774ccdf1-0a96-4a43-9d84-aa7d71238a4a').thema(thema).entry('s Chaos (Sg.)').translate('chaos').example('Das Chaos in deinem Zimmer ist furchtbar. Bitte räum auf!').get());
        entries.push(new Builder().id('7fcb8b14-ef87-4f88-9692-289d3c422dde').thema(thema).entry('s/e Cola (Sg.)').translate('coca-cola').example('Ich nehme einen Hamburger und eine Cola.').get());
        entries.push(new Builder().id('14a8c159-bfda-42c0-b141-bf81154a6daf').thema(thema).entry('r Comic, -s').translate('bande dessinée, bd').example('Liest du gern Comics?').get());
// /* Double */        entries.push(new Builder().id('41fab81e-be01-40ad-a4c8-d489db773194').thema(thema).entry('s Café, -s').example('Ich möchte etwas trinken. -Gut, wir gehen ins Café.').get());
// /* Double */        entries.push(new Builder().id('07df7fb2-81a3-4ced-aea8-7db74ab2f008').thema(thema).entry('e CD, -s').example('Er hört gern Musik, wir können ihm eine CD schenken.').get());
// /* Double */        entries.push(new Builder().id('316252fe-1b21-4290-97d9-fb77c832507b').thema(thema).entry('r Chef, -s / e Chefin, -nen').example('Er/Sie ist hier der Chef/die Chefin!').get());
// /* Double */        entries.push(new Builder().id('bfa416f2-f6a8-406e-9851-9586dd5b4e98').thema(thema).entry('circa (ca.)').example('Es sind noch circa 50 km.').get());
// /* Double */        entries.push(new Builder().id('bfd16fb8-d7e8-4b47-af8f-924a27279fa5').thema(thema).entry('r Computer, -').example('Mein Computer ist schon alt.').get());
        return entries;
    }

    createDEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'D'];
        entries.push(new Builder().id('93b8d088-316f-43a2-b67a-d718db8cd093').thema(thema).entry('s Dach, ä, -er').translate('toit').example(['Die Katze sitzt auf dem Dach.', 'Ich habe mein Zimmer unter dem Dach.']).get());
        entries.push(new Builder().id('96b82527-cc48-4284-b36c-be158847f48d').thema(thema).entry('damals').translate('autrefois').example('Vor 20 Jahren? Wo habt ihr damals gewohnt?').get());
        entries.push(new Builder().id('f86cd6d8-2024-417d-ac70-ee493fc93fca').thema(thema).entry('darum').translate(['voilà pourquoi', 'du coup']).example('Ich habe den Film schon gesehen, darum komme ich nicht mit.').get());
        entries.push(new Builder().id('65b6a361-f8bc-4814-a321-767df6d62ba1').thema(thema).entry('da sein').translate(['être là', 'exister']).example('Sind alle Schüler da?').get());
        entries.push(new Builder().id('7bd4644b-9cba-4057-a07c-3e261dab0079').thema(thema).entry('e Decke, -n').translate(['couverture', 'plafond']).example(['Auf dem Bett liegt eine rote Decke.', 'Das Licht an der Decke ist kaputt.']).get());
        entries.push(new Builder().id('e1143f5a-5b13-4d7d-9a0b-b82acce8693c').thema(thema).entry('deshalb').translate("c'est pourquoi").example('Ich muss lernen, deshalb bleibe ich zu Hause.').get());
        entries.push(new Builder().id('01523955-bafe-446b-9ed2-0ad3ae386ced').thema(thema).entry('deutlich').translate(['clair(e)', 'net(te)']).example('Schreibt bitte deutlich, damit ich es lesen kann.').get());
        entries.push(new Builder().id('80a9ed51-1e3c-450b-b86d-2b5d7af7cca1').thema(thema).entry('r Dichter, -').translate('poète').example('Goethe war ein berühmter Dichter.').get());
        entries.push(new Builder().id('4f53f5f7-6d48-4f16-a42b-8fcd5e9fdb5a').thema(thema).entry('dick').translate(['épais(se)', 'gros(se)', "de 2m d'épaisseur"]).example(['Ich bin leider sehr dick.', 'Die Wand ist zwei Meter dick.']).get());
        entries.push(new Builder().id('c56f18be-1aba-40ff-a84f-25e9635cc2e0').thema(thema).entry('s Diktat, -e').translate('dictée').example('Wir schreiben heute in der Schule ein Diktat.').get());
        entries.push(new Builder().id('c671bd41-763f-4891-adcd-fe8b37d406dd').thema(thema).entry('doch').translate(['si', 'quand même']).example(['Magst du das nicht?', '– Doch, es schmeckt gut.']).get());
        entries.push(new Builder().id('806ef41d-8f79-4073-9e50-04250aa117d0').thema(thema).entry('dort').translate(['là-bas (un endroit plus ou moins éloigné)', 'là']).example('Du gehst in die Stadt? Und was machst du dort?').get());
        entries.push(new Builder().id('db126ddf-b67e-4641-a94a-c6cc0b9df980').thema(thema).entry('drinnen').translate(['dedans', 'au-dedans']).example('Draußen ist es kalt, ich bleibe lieber drinnen.').get());
        entries.push(new Builder().id('eeb49833-a6a2-4ad7-b1f1-8cb7bdb90e37').thema(thema).entry('drüben').translate("là-bas (de l'autre côté)").example('Das hier ist die Goethestraße und da drüben wohne ich.').get());
        entries.push(new Builder().id('bcc5cd34-2876-474b-bf61-3f82a77bfef0').thema(thema).entry('dumm').translate(['sot, sotte', 'bête', 'idiot, idiote', 'imbécile']).example('Das finde ich dumm.').get());
        entries.push(new Builder().id('adb705e0-c254-42f8-b38b-50dbce5357fe').thema(thema).entry('dünn').translate(['fin, finne', 'mince', 'léger, légère']).example(['Mein Sohn ist sehr dünn. Er isst so wenig.', 'Heute ist es warm. Ich ziehe eine dünne Jacke an.']).get());
/*
        entries.push(new Builder().id('b2b32f80-772f-41e9-89da-503d23200f33').thema(thema).entry('dafür/dagegen sein').example('Sport? Ich bin dagegen. – Ich bin dafür.').get());
        entries.push(new Builder().id('af678813-9391-4392-9c58-a3f25336ba61').thema(thema).entry('danken').example('Die CD ist toll, ich danke dir.').get());
        entries.push(new Builder().id('a2452cbd-5bed-45eb-b51e-a1054b2e77b0').thema(thema).entry('dass').example('Er glaubt, dass er recht hat.').get());
        entries.push(new Builder().id('351a2929-ea8e-4d07-9de8-1785ee835594').thema(thema).entry('denken').example(['Ich denke, dass die Hausaufgaben sehr einfach sind.', 'Ich denke oft an meine Eltern.', 'Was denkst du?']).get());
        entries.push(new Builder().id('dc1e84ce-3ffa-4188-8f31-dc0977af5dd9').thema(thema).entry('dieser, e, s').example('Bitte, nicht wieder diese CD, die ist ja furchtbar.').get());
        entries.push(new Builder().id('0b812ed3-0f6a-486a-8cf0-5bf07775367b').thema(thema).entry('s Ding, -e').example('Bitte, nimm nur wichtige Dinge mit!').get());
        entries.push(new Builder().id('cd211720-7cec-4527-8536-899f22fe29d1').thema(thema).entry('direkt').example(['Mit der U-Bahn kommen Sie direkt zum Rathaus.', 'Das Dorf liegt direkt an der Autobahn.']).get());
        entries.push(new Builder().id('bc7ad6e3-c76c-4eeb-a7f9-adfa070d094c').thema(thema).entry('dringend').example('Ich muss dringend mit dir sprechen. Es ist sehr wichtig.').get());
        entries.push(new Builder().id('5f1767fd-e133-4594-afe2-0a1d48aaf6c4').thema(thema).entry('du').example('Wie heißt du? (vgl. Grammatik)').get());
        entries.push(new Builder().id('c07241d1-a756-480c-8a51-c81e7d2a6762').thema(thema).entry('dunkel').example(['Um sechs wird es schon dunkel.', 'Sie hat dunkles Haar.']).get());
        */
// /* Double */        entries.push(new Builder().id('933c6117-ae29-4b10-b144-8ece5869c637').thema(thema).entry('da').example('Die Zeitung liegt da drüben auf dem Tisch.').get());
// /* Double */        entries.push(new Builder().id('06d00645-201a-4489-83f0-0425eb5c0581').thema(thema).entry('e Dame, -n').example('Sehr geehrte Damen und Herren!').get());
// /* Double */        entries.push(new Builder().id('bb02a342-b5b6-46ea-b1a3-d641dfa2929f').thema(thema).entry('r Dank (Sg.)').example(['Vielen Dank für die Einladung.', 'Herzlichen Dank!']).get());
// /* Double */        entries.push(new Builder().id('ae4eb2cc-469e-47f2-a3ae-36b1cb982d61').thema(thema).entry('danke').example('Soll ich helfen? -Nein, danke.').get());
// /* Double */        entries.push(new Builder().id('f4aaf42d-5371-462b-9aab-271adfb1dde9').thema(thema).entry('dann').example('Ich spreche erst mit Jan, dann sage ich dir Bescheid.').get());
// /* Double */        entries.push(new Builder().id('53ac60c1-c857-4934-9270-40be823f3799').thema(thema).entry('dauern').example('Die Ferien dauern 6 Wochen.').get());
// /* Double */        entries.push(new Builder().id('02287760-f8a7-4032-8f9e-25335cb46677').thema(thema).entry('dein, e').example(['Hier ist dein Platz.', 'Ist das deine Tasche?']).get());
// /* Double */        entries.push(new Builder().id('7109da18-8d28-47ec-96da-bb14b9c578e4').thema(thema).entry('denn').example(['Warum kommst du denn nicht?', 'Ich möchte nicht in Deutschland leben, denn dort ist es so kalt.']).get());
// /* Double */        entries.push(new Builder().id('ade676a7-6a1c-4aea-8723-a61fceb9f6d1').thema(thema).entry('der, die, das').example('Möchtest du das da?').get());
// /* Double */        entries.push(new Builder().id('eb033cce-b724-4c05-9023-53dfa61e9ee3').thema(thema).entry('s Dorf, ö, -er').example('Kellinghusen ist ein kleines Dorf in Schleswig-Holstein.').get());
// /* Double */        entries.push(new Builder().id('fe9ba263-16ab-4bac-89c2-4b999868035d').thema(thema).entry('draußen').example('Die Kinder sind draußen im Garten.').get());
// /* Double */        entries.push(new Builder().id('76e36a40-3303-439b-9057-e22ec83d7c70').thema(thema).entry('durch').example('Wir fahren durch Deutschland.').get());
// /* Double */        entries.push(new Builder().id('990e455e-a930-4917-bcb6-43a932d27d9c').thema(thema).entry('dürfen').example(['Darf ich heute mitkommen?', 'Hier darf man nicht baden.']).get());
// /* Double */        entries.push(new Builder().id('f7ead6fe-544e-498c-8da7-792c1c19bd53').thema(thema).entry('r Durst (Sg.)').example('Hast du Durst? Ich habe Mineralwasser, Tee, Saft ...').get());
// /* Double */        entries.push(new Builder().id('b7763b30-0365-4c92-bc9e-08895e015030').thema(thema).entry('duschen').example('Ich bade nicht so gern, ich dusche lieber.').get());
        return entries;
    }

    createEEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'E'];
        entries.push(new Builder().id('c6d9bd75-f678-4b2f-9104-3042c3e217ee').thema(thema).entry('echt').translate(['véritable', 'vrai(e)', 'original(e)']).example(['Ist das Bild ein echter Picasso?', 'Dieser Film ist echt gut!']).get());
        entries.push(new Builder().id('8d79756e-fc21-4c12-9943-1c2169efffff').thema(thema).entry('eigentlich').translate(['en fait', 'à vrai dire']).example(['Eigentlich hast du recht.', 'Hast du den Brief eigentlich gelesen?']).get());
        entries.push(new Builder().id('0e1cc91f-d146-465d-a31a-c4c550e4f37f').thema(thema).entry('e Eile (Sg.)').translate(['hâte', 'précipitation']).example(['Wir sind in Eile. Wir haben keine Zeit.', 'Das hat keine Eile. Es kann warten.']).get());
        entries.push(new Builder().id('07be645a-33b6-4f24-92ec-1997fc8557fb').thema(thema).entry('einige').translate(['quelques', 'certains', 'quelques-uns, quelques-unes']).example('Ich habe noch einige Fragen.').get());
        entries.push(new Builder().id('860a05e6-0ef7-434a-8b13-58f0158b65b0').thema(thema).entry('einpacken').translate(['mettre qc. dans une valise', 'emballer qc. dans qc.', 'empaqueter qc.', 'envelopper qc. dans qc.']).example(['Hast du alle Kleider eingepackt?', 'Ich muss das Geschenk noch einpacken.']).get());
        entries.push(new Builder().id('d005c925-c419-458b-8d40-cc6fd106b38e').thema(thema).entry('e Eins, -er').translate('un un').example(['Wie war der Englischtest?', '-Toll, ich habe eine Eins!']).get());
        entries.push(new Builder().id('46e33850-5eed-4cd3-85b5-8a3fe8fafd2b').thema(thema).entry('r Einwohner, -').translate('habitant(e)').example('Die Stadt hat 2 Millionen Einwohner.').get());
        entries.push(new Builder().id('da762bab-1839-4470-bd3a-5cf8c6401c1c').thema(thema).entry('eng').translate(['serré, serrée', 'étroit, étroite']).example(['Die Häuser sind klein, die Straßen eng.', 'Die Hose ist mir zu eng. Ich brauche sie eine Nummer größer.']).get());
        entries.push(new Builder().id('ab5ce994-18be-4f14-ae5a-bf98b1155dd3').thema(thema).entry('erreichen').translate(['atteindre qc.', 'arriver à qc.']).example(['Du hast leider das Ziel nicht erreicht.', 'Ich möchte den Zug um 17.00 Uhr noch erreichen.']).get());
        entries.push(new Builder().id('1d219c89-a355-4d36-911f-17b67053b744').thema(thema).entry('s Experiment, -e').translate('expérience (scientifique)').example('Wir machen heute in Physik ein interessantes Experiment.').get());
        /*
        entries.push(new Builder().id('5e4001ad-3c1f-4d7f-8a44-9c30e6892368').thema(thema).entry('egal').example('Das ist mir doch egal! Es interessiert mich nicht.').get());
        entries.push(new Builder().id('02544da1-7500-4aac-b767-d1b2e1f31bc8').thema(thema).entry('einverstanden sein').example(['Bist du damit einverstanden?', 'Ich bin mit dem Ergebnis nicht einverstanden.']).get());
        entries.push(new Builder().id('d729ca18-1403-4aa3-b4a2-fff64052b956').thema(thema).entry('s Eis (Sg.)').example('Ich möchte ein großes Eis.').get());
        entries.push(new Builder().id('b01a606f-c995-4644-b9fe-8b705ca3ccbf').thema(thema).entry('endlich').example('Wann antwortest du endlich?').get());
        entries.push(new Builder().id('582a790d-e4d8-4963-a344-69927785458f').thema(thema).entry('e Erfahrung, -en').example(['Der Sprachkurs war eine gute Erfahrung.', 'Ich habe mit diesem Computerprogramm keine Erfahrung.']).get());
        entries.push(new Builder().id('6214ea70-5bcf-4111-add2-b9c2f22763bf').thema(thema).entry('erinnern (sich)').example(['Wie ist die Nummer?', '– Ich kann mich nicht erinnern.', 'Ich kann mich nicht mehr an die Aufgabe erinnern.']).get());
        entries.push(new Builder().id('92f74563-79f2-492b-ad1e-2780c2c43edf').thema(thema).entry('erkältet sein').example('Im Winter ist sie oft erkältet.').get());
        entries.push(new Builder().id('2df833eb-4456-4b12-91de-2097859d4188').thema(thema).entry('erst').example(['Du musst (zu)erst die Instruktionen lesen.', 'Das Wörterbuch kann ich dir erst morgen geben, ich brauche es heute noch.']).get());
        entries.push(new Builder().id('32cc710b-413c-4f8c-a598-55a7552d9452').thema(thema).entry('etwas').example(['Ich bringe dir etwas.', 'Da ist etwas zum Schreiben.']).get());
        */
// /* Double */        entries.push(new Builder().id('03dda997-3fc4-4f29-9b02-69be70ec2708').thema(thema).entry('s Ei, -er').example('Möchtest du ein Ei zum Frühstück?').get());
// /* Double */        entries.push(new Builder().id('272a8c44-1b0e-4682-a444-86e74ee5e948').thema(thema).entry('eilig').example(['Die Sache ist sehr eilig.', 'Ich habe es eilig.']).get());
// /* Double */        entries.push(new Builder().id('f74534ba-0be7-43b0-bc43-ec33e427a476').thema(thema).entry('ein, e').example('Haben Sie ein Buch von Michael Ende?').get());
// /* Double */        entries.push(new Builder().id('573f550b-5038-4b44-a0fa-baeac6d8d989').thema(thema).entry('einfach').example('Du kannst ihn einfach fragen.').get());
// /* Double */        entries.push(new Builder().id('55bff999-e8ef-42a8-af58-b8db17f5c67c').thema(thema).entry('r Eingang, ä, -e').example(['Wo ist der Eingang zu Kino 3?', 'Gehen Sie bitte hier links.']).get());
// /* Double */        entries.push(new Builder().id('9ce3e1c2-53b3-44d3-b40c-e6df6ef817ef').thema(thema).entry('einkaufen').example('Ich muss noch einkaufen: Kartoffeln, Eier und Brot.').get());
// /* Double */        entries.push(new Builder().id('6d46af0b-7228-4b8c-9e2e-23c166cb10b5').thema(thema).entry('einladen').example('Ich lade dich zu meinem Geburtstag ein.').get());
// /* Double */        entries.push(new Builder().id('2033a48a-9537-4764-80f2-0cbcd4807b4a').thema(thema).entry('e Einladung, -en').example('Das ist eine Einladung zur Geburtstagsparty.').get());
// /* Double */        entries.push(new Builder().id('1549e4c5-b549-44ff-8f8b-5fbeda553c0a').thema(thema).entry('einmal').example(['Kannst du mir das bitte noch einmal erklären?', 'Ich war nur einmal in Frankreich.']).get());
// /* Double */        entries.push(new Builder().id('122dea0f-edf2-4b6b-9e9a-82e4fc2e47e7').thema(thema).entry('einsteigen').example('Bitte einsteigen! Der Zug fährt ab.').get());
// /* Double */        entries.push(new Builder().id('71aa1453-465b-4eb4-8a60-87075a63a1c8').thema(thema).entry('e E-Mail, -s').example('Ich habe deine E-Mail bekommen.').get());
// /* Double */        entries.push(new Builder().id('7d49131e-358e-46c9-a4b3-f8b1f471505d').thema(thema).entry('s Ende (Sg.)').example('Das Ende des Films war sehr traurig.').get());
// /* Double */        entries.push(new Builder().id('50353609-c326-4028-b42c-45af5bd1b203').thema(thema).entry('entschuldigen').example('Bitte entschuldigen Sie!').get());
// /* Double */        entries.push(new Builder().id('277cf7a5-2a3a-4846-a134-3940c467f0a8').thema(thema).entry('e Entschuldigung, -en ').example('Entschuldigung, ich habe Sie nicht gesehen.').get());
// /* Double */        entries.push(new Builder().id('cbfe4f31-e53b-4f2e-b895-33c6b7df854a').thema(thema).entry('er').example('Was macht er jetzt?').get());
// /* Double */        entries.push(new Builder().id('c2051e4a-3112-4069-9f5e-e49386415a71').thema(thema).entry('erklären').example(['Können Sie das bitte erklären?', '– Ich habe es nicht verstanden.']).get());
// /* Double */        entries.push(new Builder().id('fe117db8-fdd0-438c-8ad0-e8f45df69a6b').thema(thema).entry('erlauben').example('Ich möchte gern in die Disco, aber meine Eltern erlauben es nicht. Sie haben es verboten.').get());
// /* Double */        entries.push(new Builder().id('f6381338-0ac2-4664-a1f5-8d004f0b8457').thema(thema).entry('r, e Erwachsene, -n').example(['Wir brauchen drei Fahrkarten: zwei Erwachsene, ein Kind.', 'Ariane kann schneller rechnen als die meisten Erwachsenen.']).get());
// /* Double */        entries.push(new Builder().id('f1368d15-6fec-4c48-93a9-24eed015122b').thema(thema).entry('erzählen').example(['Kannst du uns die Geschichte erzählen?', 'Er erzählt gern von seinen Reisen.']).get());
// /* Double */        entries.push(new Builder().id('9c5d6e84-435f-474b-b4fe-1cac57b57120').thema(thema).entry('es').example(['Heute ist es sehr warm', 'Hier gibt es auch ein altes Schloss.', 'Wie geht es dir/Ihnen?']).get());
// /* Double */        entries.push(new Builder().id('1c3372b0-f90d-4b5f-9ac3-58ed0eda66c1').thema(thema).entry('essen').example(['Was wollt ihr essen?', '– Ich esse gern Bananen.']).get());
// /* Double */        entries.push(new Builder().id('d2e3185e-2e54-4256-bd6b-de9923e48a2d').thema(thema).entry('s Essen, -').example('Das Essen ist hier sehr gut.').get());
// /* Double */        entries.push(new Builder().id('d48c0661-1462-433e-9210-20725ff69032').thema(thema).entry('euer').example('Ist das euer Hund?').get());
        return entries;
    }

    createFEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'F']
        entries.push(new Builder().id('de682f98-ab52-40be-bd00-afcafbfb6569').thema(thema).entry('s Fach, ä, -er').translate(['matière', 'branche']).example(['Welche Fächer findest du interessant?', '– Chemie und Physik.']).get());
        entries.push(new Builder().id('9a0b7e5e-4d86-4de7-80cc-204fe6e2a7b1').thema(thema).entry('fallen').translate(['tomber', 'faire une chute']).example(['Die Blätter fallen von den Bäumen.', 'Das Glas ist auf den Boden gefallen. Jetzt ist es kaputt.']).get());
        entries.push(new Builder().id('6bb07cd0-5565-43c4-84fa-e43db8d14a7f').thema(thema).entry('r Farbstift, -e').translate('crayon de couleur').example('Gibst du mir deine Farbstifte?').get());
        entries.push(new Builder().id('be4bbf8e-8f0f-4d0f-857e-a89dc3ff9095').thema(thema).entry('faul').translate(['paresseux, paresseuse', 'fainéant, fainéante', 'flemmard, flemmarde']).example('Gestern waren wir faul. Wir waren den ganzen Tag zu Hause.').get());
        entries.push(new Builder().id('5af547d6-6431-49b7-9771-a5020e1c840c').thema(thema).entry('r Fernseher, -').translate('télévision').example('Ich habe einen Fernseher in meinem Zimmer.').get());
        entries.push(new Builder().id('f9e8809e-5b6b-43f5-a8b8-d471a5df2368').thema(thema).entry('fertig sein').translate('avoir fini avec qc.').example('Ich bin mit meinen Hausaufgaben schon fertig.').get());
        entries.push(new Builder().id('63449b69-e299-4bfe-993a-302a544e9663').thema(thema).entry('s Fest, -e').translate('fête').example(['An meinem 18. Geburtstag feiern wir ein großes Fest.', 'Frohes Fest!']).get());
        entries.push(new Builder().id('0d5fa18c-85ca-41f3-9e9e-23fcd4874c2c').thema(thema).entry('fit sein').translate(['en forme', "être d'attaque"]).example('Sie macht viel Sport. Sie ist sehr fit.').get());
        entries.push(new Builder().id('f9beec3a-b3af-43ef-b314-2d4debc5532f').thema(thema).entry('flach').translate('plat, plate').example(['Das Wasser ist hier ganz flach.', 'Das Haus hat ein flaches Dach.']).get());
        entries.push(new Builder().id('36d44fdf-abd6-4307-9178-6c616a4f5ba2').thema(thema).entry('fleißig').translate(['appliqué, appliquée', 'assidu, assidue', 'travailleur, travailleuse']).example('Hast du fleißig gelernt?').get());
        entries.push(new Builder().id('635f2a16-2e52-462d-92be-22771768f82c').thema(thema).entry('frech').translate(['effronté(e)', 'impertinent(e)', 'insolent(e)', 'culotté(e)']).example(['Unsere Katze ist wirklich sehr frech.', 'Meine kleine Schwester ist frech. Sie ärgert mich immer.']).get());
        entries.push(new Builder().id('17b179b2-6a2d-40ee-b82b-13a9d53561d7').thema(thema).entry('frisch').translate(['frais, fraîche', 'frisquet, frisquette']).example('Sind die Eier frisch?').get());
        entries.push(new Builder().id('9330cf2a-2032-401b-82f2-bf5e88afe4dd').thema(thema).entry('froh').translate(['content(te)', 'heureux, heureuse']).example(['Frohe Weihnachten!', 'Ich bin froh, alles ist in Ordnung.']).get());
        entries.push(new Builder().id('7d27fd97-9161-4198-bb4f-b35cdd0bb69d').thema(thema).entry('fühlen (sich)').translate('se sentir').example(['Wie fühlst du dich?', '– Ich fühle mich heute nicht so gut.']).get());
        entries.push(new Builder().id('3c9e78a8-fc80-46aa-a06d-dfd5d94f5824').thema(thema).entry('furchtbar').translate(['terrible', 'redoutable', 'affreux, affreuse']).example('Er hat furchtbare Schmerzen.').get());
/*
        entries.push(new Builder().id('5635ba0c-f858-493e-9966-da2407e49db7').thema(thema).entry('r Fahrplan, ä, -e').example('Wo finde ich den Fahrplan?').get());
        entries.push(new Builder().id('7cddf69b-5233-4e29-82b0-440c0695786b').thema(thema).entry('fantastisch').example(['Er kann fantastisch kochen.', 'Das sind fantastische Nachrichten.']).get());
        entries.push(new Builder().id('80c9c5ec-c263-4dff-a41e-d91a6d9f17c1').thema(thema).entry('fast').example('Ich habe fast alles verstanden.').get());
        entries.push(new Builder().id('7e49cf41-d0b1-4651-99d8-5d31706b47c7').thema(thema).entry('s Fenster, -').example('Mach bitte das Fenster zu. Es ist kalt.').get());
        entries.push(new Builder().id('aa919bb8-a1cb-4636-9296-fd9c8db7bd4c').thema(thema).entry('e Ferien (Pl.)').example(['Was macht ihr in den Ferien?', 'Im August beginnen die Ferien.']).get());
        entries.push(new Builder().id('6c701763-d4c9-4d44-9c7e-b08b95195672').thema(thema).entry('s Fernsehen (Sg.)').example('Was gibt es heute Abend im Fernsehen?').get());
        entries.push(new Builder().id('f768f493-471d-4e0d-a119-c5a2922d65d0').thema(thema).entry('r Filmstar, -s').example('Sie ist ein großer Filmstar und eine tolle Sängerin.').get());
        entries.push(new Builder().id('bf09d2d5-3daa-41d7-a60e-f3825e74fb87').thema(thema).entry('r Flohmarkt, ä, -e').example('Wollen wir auf den Flohmarkt gehen? Da kann man alte CDs kaufen.').get());
        entries.push(new Builder().id('9efb50e3-e5f6-466b-84d1-e6683f3d5f93').thema(thema).entry('r Fluss, ü, -e').example('Der Rhein ist ein großer Fluss.').get());
        entries.push(new Builder().id('e6666eb4-1ff9-4aac-9abd-da0032db8591').thema(thema).entry('r Fotoapparat, -e').example('Sie hat einen teuren Fotoapparat.').get());
        entries.push(new Builder().id('2dd5134c-ad95-40aa-9634-1095da7c13bb').thema(thema).entry('fotografieren').example(['Fotografierst du viel?', '– Ja, das ist mein Hobby.']).get());
        entries.push(new Builder().id('c23a6ad4-3c10-4c00-8cd8-05a9a419c1b6').thema(thema).entry('e Fremdsprache, -n').example('Meine Mutter kann zwei Fremdsprachen, Französisch und Englisch.').get());
        entries.push(new Builder().id('0ff403e2-e0d1-4736-8821-3b0327cfd326').thema(thema).entry('e Freundin, -nen').example('Ich habe viele Freundinnen in meiner Klasse.').get());
        entries.push(new Builder().id('cd8194c4-f4b4-4cce-a265-63ab5786d7fb').thema(thema).entry('freundlich').example(['Der Schuldirektor war sehr freundlich.', 'Er war sehr freundlich zu mir.']).get());
        entries.push(new Builder().id('63892eb7-8968-4bcf-b473-da79478604e0').thema(thema).entry('früh').example(['Wir stehen immer früh auf.', 'Sie muss früh am Morgen zur Arbeit.']).get());
        entries.push(new Builder().id('4ddd8e20-b752-4166-96bb-3c8f1565d069').thema(thema).entry('s Frühstück (Sg.)').example('Zum Frühstück trinke ich Milch und esse ein Brötchen.').get());
        */
// /* Double */        entries.push(new Builder().id('90d5f793-00ea-49d9-8812-7e4da34e520c').thema(thema).entry('fahren').example('Wohin fahrt ihr? In den Ferien fahren wir nach Spanien.').get());
// /* Double */        entries.push(new Builder().id('3727b011-b20c-467a-aeda-9b742e0ed8e8').thema(thema).entry('e Fahrkarte, -n').example('Für den Bus braucht ihr noch eine Fahrkarte.').get());
// /* Double */        entries.push(new Builder().id('1b6339ca-bf7e-4789-9a27-1d3ffac1be85').thema(thema).entry('s Fahrrad, ä, -er').example('Wir kommen mit dem Fahrrad.').get());
// /* Double */        entries.push(new Builder().id('3826e2b9-d437-46c0-82fc-819969e5523c').thema(thema).entry('e Familie, -en').example('Kannst du etwas von deiner Familie erzählen?').get());
// /* Double */        entries.push(new Builder().id('e8582ae9-efeb-4692-9d9a-1fcfc2c17c22').thema(thema).entry('r Familienname, -n').example(['Wie ist dein Familienname?', '– Schmidt.']).get());
// /* Double */        entries.push(new Builder().id('0bdd998c-6af5-47f4-b933-ee20be0f27b0').thema(thema).entry('e Farbe, -n').example('Welche Farbe magst du lieber? Rot oder grün?').get());
// /* Double */        entries.push(new Builder().id('849b221b-fd02-4e69-a1c0-5c4af262d6d4').thema(thema).entry('fehlen').example(['Hier fehlt ein Buchstabe.', 'Du fehlst mir.']).get());
// /* Double */        entries.push(new Builder().id('ba808bac-6f77-47c0-972f-a22a5bd8fee7').thema(thema).entry('r Fehler, -').example('Ich hatte vier Fehler im Englischtest.').get());
// /* Double */        entries.push(new Builder().id('d29a21a4-671b-4f93-b01d-a03ba77d0e38').thema(thema).entry('feiern').example('Am Sonntag habe ich meinen Geburtstag gefeiert.').get());
// /* Double */        entries.push(new Builder().id('fc0b969b-694b-47a2-9eb8-295e5a3feeb2').thema(thema).entry('fernsehen').example('Ich war zu Hause und habe ferngesehen.').get());
// /* Double */        entries.push(new Builder().id('ece903a2-a25f-41ad-8873-2f2ca024de9c').thema(thema).entry('s Feuer, -').example(['Haben Sie Feuer?', 'Wir haben ein Feuer gemacht und Würstchen gegrillt.']).get());
// /* Double */        entries.push(new Builder().id('d84ddb0f-0428-4a9a-a00d-c5b9a76b20dc').thema(thema).entry('s Fieber (Sg.)').example(['Bist du krank?', '– Ja, ich glaube, ich habe Fieber.']).get());
// /* Double */        entries.push(new Builder().id('0cd0cbc0-6e2f-4fc6-bc1d-045212324985').thema(thema).entry('r Film, -e').example('Kommst du mit ins Kino? Es läuft ein neuer Film.').get());
// /* Double */        entries.push(new Builder().id('03e1c319-23a7-4880-aa3f-9b36f7fff1be').thema(thema).entry('finden').example(['Wo ist die Zeitung? Ich kann sie nicht finden.', 'Ich finde deinen Pullover schön.']).get());
// /* Double */        entries.push(new Builder().id('ebe6b79b-e150-4030-ac99-2dedab070c36').thema(thema).entry('e Firma, -en').example('Er arbeitet in einer großen Firma in Berlin.').get());
// /* Double */        entries.push(new Builder().id('8f58d1bd-f616-41a8-a4cc-70ac4b391285').thema(thema).entry('r Fisch, -e').example('Fleisch mag ich lieber als Fisch.').get());
// /* Double */        entries.push(new Builder().id('d440379e-fd6b-49c2-b57a-694c46611438').thema(thema).entry('e Flasche, -n').example('Ich möchte eine Flasche Mineralwasser.').get());
// /* Double */        entries.push(new Builder().id('ea7a4127-e83c-42db-8473-5fc9ade6bf69').thema(thema).entry('s Fleisch (Sg.)').example('Am Freitag essen wir kein Fleisch.').get());
// /* Double */        entries.push(new Builder().id('6834c7cb-cd53-4699-ba59-b6ebc62296b4').thema(thema).entry('fliegen').example(['Wir fliegen in den Ferien in die USA.', 'Wir fliegen nach Athen.']).get());
// /* Double */        entries.push(new Builder().id('e64f01cf-d59b-458f-8c40-f6e1afe715f1').thema(thema).entry('r Flughafen, ä, -').example('Wir müssen um sieben am Flughafen sein.').get());
// /* Double */        entries.push(new Builder().id('7351448b-c85c-4ea8-99e4-466c1f6897fd').thema(thema).entry('s Flugzeug, -e').example('Das Flugzeug kommt um 13.30 Uhr an.').get());
// /* Double */        entries.push(new Builder().id('127e8c7a-487b-41f4-9ce4-0544df55dc04').thema(thema).entry('s Foto, -s').example('Auf dem Foto bin ich mit meinem Hund.').get());
// /* Double */        entries.push(new Builder().id('92d55e9d-6c32-40dd-8779-be97e0b7454b').thema(thema).entry('e Frage, -n').example(['Wiederholen Sie bitte die Frage.', 'Kann ich eine Frage stellen?', 'Ich habe eine Frage.']).get());
// /* Double */        entries.push(new Builder().id('a01e10aa-79d1-4625-8968-9f209d525987').thema(thema).entry('fragen').example('Ich möchte etwas fragen. Was bedeutet „ausgehen“?').get());
// /* Double */        entries.push(new Builder().id('e1b2c8f9-0e7a-45c8-80a6-bcfe3db8c3b0').thema(thema).entry('e Frau, -en').example('Siehst du die Frau dort? Das ist Frau Bergner.').get());
// /* Double */        entries.push(new Builder().id('defaba2f-0a0e-47d4-ab30-57d294ed3670').thema(thema).entry('frei').example(['Ist der Platz frei?', 'Heute Nachmittag habe ich frei. Ich muss nicht arbeiten.']).get());
// /* Double */        entries.push(new Builder().id('91ce325f-a1a5-4501-844f-49736cda6a6e').thema(thema).entry('e Freizeit (Sg.)').example('Was machst du in deiner Freizeit? Ich spiele Fußball.').get());
// /* Double */        entries.push(new Builder().id('aa4ca500-5a1d-401b-9b26-340c66c3791f').thema(thema).entry('fremd').example('Ich weiß es nicht. Ich bin in dieser Stadt auch fremd.').get());
// /* Double */        entries.push(new Builder().id('4078eeff-80e1-4b8d-89ea-a70a7806c9ad').thema(thema).entry('freuen (sich)').example(['Wir freuen uns sehr über deinen Besuch.', 'Ich freue mich auf den Urlaub.']).get());
// /* Double */        entries.push(new Builder().id('85d4be51-ea0b-4531-ae89-72bad83a9a8c').thema(thema).entry('r Freund, -e').example('Ich habe viele Freunde in meiner Klasse.').get());
// /* Double */        entries.push(new Builder().id('55ea11aa-cc05-46a0-86f2-22dee4e21484').thema(thema).entry('früher').example('Meine Mutter war früher Lehrerin. Heute arbeitet sie nicht mehr.').get());
// /* Double */        entries.push(new Builder().id('bfc8363b-74a6-46be-b5ee-e33b7c8b173a').thema(thema).entry('frühstücken').example(['Wann möchtest du frühstücken?', '– Um neun Uhr.']).get());
// /* Double */        entries.push(new Builder().id('80b474bd-decc-4069-8688-d4bd7ce9ba98').thema(thema).entry('für').example(['Ich kaufe ein Comic-Heft für meine Schwester.', 'Für wen ist der Salat?']).get());
// /* Double */        entries.push(new Builder().id('60a8835f-10b0-47ee-b14e-9fd15dc9a9b6').thema(thema).entry('r Fuß, ü, -e').example(['Mein Fuß tut weh.', 'Wir gehen zu Fuß.']).get());
// /* Double */        entries.push(new Builder().id('baac959c-470b-4129-89cf-4c829a9d76e2').thema(thema).entry('r Fußball, ä, -e').example('Am Nachmittag spielen wir Fußball im Garten.').get());
        return entries;
    }

    createGEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'G'];
        entries.push(new Builder().id('e43468f3-ae13-460e-b94e-9b6387e5b1bc').thema(thema).entry('s Gedicht, -e').translate('poème').example('Sie liest gern Gedichte.', 'Goethe hat viele Gedichte geschrieben.').get());
        entries.push(new Builder().id('a036af78-21b6-4ce2-b008-b1fc0c25bc38').thema(thema).entry('s Gegenteil, -e').translate(['contraire', 'inverse']).example(['Wie heißt das Gegenteil von „neu”?', '– Alt.']).get());
        entries.push(new Builder().id('26a87d2a-fc69-41a5-a8d4-d5c4ef4aefd2').thema(thema).entry('gemütlich').translate(['chaleureux, chaleureuse', 'douillet, douillette', 'convivial, convivialle', 'confortable']).example('Dein Zimmer ist sehr gemütlich.').get());
        entries.push(new Builder().id('b93a6d5f-6ec1-4b70-a800-f1e925f74254').thema(thema).entry('genau').translate(['exactement', 'précis(e)', 'exact(e)', 'juste']).example(['Das musst du mir genau erklären.', 'Hast du die genaue Zeit? Ja, wir treffen uns um 14.20 Uhr.']).get());
        entries.push(new Builder().id('0582e966-00e5-4961-b502-a8b78a623739').thema(thema).entry('geschlossen sein').translate('être fermé').example('Am Montag ist die Bücherei geschlossen.').get());
        entries.push(new Builder().id('0635ce1e-b769-42ab-a2c1-b934a2db6a02').thema(thema).entry('s Gesicht, -er').translate(['visage', 'figure (visage)']).example('Sein Gesicht war müde und traurig.').get());
        entries.push(new Builder().id('983223c5-8550-457b-b637-5e2229581f19').thema(thema).entry('gleichfalls').translate(['à vous pareillement', 'de même', 'idem']).example(['Guten Appetit!', '– Danke gleichfalls!']).get());
        /*
        entries.push(new Builder().id('110a6376-c5c1-4baf-90cc-f69fc6349ea0').thema(thema).entry('gefährlich').example(['Das ist zu gefährlich.', 'Krebs ist eine gefährliche Krankheit.']).get());
        entries.push(new Builder().id('17d5bdad-1aa7-4703-92f2-8241d8fadc85').thema(thema).entry('genug').example(['Das ist genug.', 'Ich verdiene nicht genug. Ich brauche mehr Geld.']).get());
        entries.push(new Builder().id('db3a906d-bdaf-4836-8255-9855c3b1f19c').thema(thema).entry('gern, lieber, am liebsten').example(['Wir sehen gern Krimis.', 'Ich gehe lieber ins Theater.', 'Ich möchte am liebsten tanzen gehen.']).get());
        entries.push(new Builder().id('21aae9e7-f20c-414f-b877-dab4e2596ab6').thema(thema).entry('e Geschichte, -n').example(['Mein Onkel erzählt immer Geschichten.', 'In Geschichte hat er eine Eins.']).get());
        entries.push(new Builder().id('1b1ec111-53d5-4c4d-9397-89e75287b75c').thema(thema).entry('gesund').example('Ich war lang krank. Jetzt bin ich wieder gesund.').get());
        entries.push(new Builder().id('140afa3b-3006-48d8-ad28-9d3c15c4e472').thema(thema).entry('e Gitarre, -n').example('Er spielt Gitarre in einer Band.').get());
        entries.push(new Builder().id('7bbd984f-5acf-4cff-82e2-053d56a1e004').thema(thema).entry('e Grenze, -n').example('Duderstadt lag früher an der Grenze zwischen West- und Ostdeutschland. Jetzt ist es mitten in Deutschland.').get());
        entries.push(new Builder().id('ab45960b-954f-46a1-b3a0-e78523247370').thema(thema).entry('e Grippe (Sg.)').example('Sie ist krank; sie hat Grippe.').get());
        entries.push(new Builder().id('4dc4408e-4d7d-4005-b6ec-b4622e2e9512').thema(thema).entry('gut, besser, am besten').example(['Guten Tag!', 'Das Essen ist hier immer sehr gut.', 'Ich finde deine Idee nicht so gut.', 'Meine Mutter kann das besser.', 'Frau Müller kann das am besten erklären.']).get());
        */
// /* Double */        entries.push(new Builder().id('cfc5eb17-6d93-4b88-84db-9eab892453fe').thema(thema).entry('geboren').example('Wann bist du geboren? Am 15. Februar 1998.').get());
// /* Double */        entries.push(new Builder().id('4c555468-406d-4651-8e8c-670bd5616781').thema(thema).entry('r Geburtstag, -e').example('Herzlichen Glückwunsch zum Geburtstag.').get());
// /* Double */        entries.push(new Builder().id('c0a215b3-ae60-41c1-9050-0f742a9b9f55').thema(thema).entry('gefallen').example(['Gefällt dir meine neue Hose?', '– Ja, sie sieht toll aus.']).get());
// /* Double */        entries.push(new Builder().id('1c9fc150-2be2-4e40-9c47-e3b3c93eb9a3').thema(thema).entry('gegen').example(['Martin spielt gegen Sabine.', 'Ich brauche eine Tablette gegen Kopfschmerzen.']).get());
// /* Double */        entries.push(new Builder().id('77cd4cf6-3499-4ca5-959a-c72f0f851367').thema(thema).entry('gehen').example(['Wohin wollt ihr gehen?', 'Wie geht es dir?', 'Der Fernseher geht nicht mehr. Er ist kaputt.', 'Wie geht diese Aufgabe?']).get());
// /* Double */        entries.push(new Builder().id('478ba59b-f008-4529-b132-86801ae4508e').thema(thema).entry('gehören').example('Das Auto gehört mir nicht. Es gehört meinem Vater.').get());
// /* Double */        entries.push(new Builder().id('1f7d90f7-fbad-4635-9b8e-9ca9f41626a8').thema(thema).entry('s Geld (Sg.)').example('Ich brauche noch Geld für den Einkauf.').get());
// /* Double */        entries.push(new Builder().id('35646ea2-86da-4041-800a-f45893eab678').thema(thema).entry('s Gemüse (Sg.)').example('Ich esse sehr gern Gemüse. Am liebsten Karotten.').get());
// /* Double */        entries.push(new Builder().id('cae69709-4d81-457f-881a-b726108602d2').thema(thema).entry('s Gepäck (Sg.)').example('Das ist nicht mein Gepäck. Wo sind meine Koffer?').get());
// /* Double */        entries.push(new Builder().id('d96bab83-15d2-4fd2-9ff3-d6a700957456').thema(thema).entry('gerade').example(['Was machst du gerade?', '– Ich mache gerade meine Hausaufgaben.', 'Ich bin gerade erst gekommen.']).get());
// /* Double */        entries.push(new Builder().id('741bf148-edb2-4c1e-9869-517661b07cee').thema(thema).entry('geradeaus').example('Gehen Sie immer geradeaus, dann kommen Sie zum Museum.').get());
// /* Double */        entries.push(new Builder().id('0e58a26b-2df9-4a94-83d5-03cb61d0996d').thema(thema).entry('s Geschäft, -e').example('Ich muss noch einkaufen. Wann schließen die Geschäfte?').get());
// /* Double */        entries.push(new Builder().id('11eacb27-57f7-433d-b0f5-197113269909').thema(thema).entry('s Geschenk, -e').example('Ich muss noch ein Geschenk für meine Freundin kaufen. Sie hat Geburtstag.').get());
// /* Double */        entries.push(new Builder().id('63b00e8a-4a1a-48b5-a25e-08d559611df1').thema(thema).entry('s Gespräch, -e').example('Ich verstehe das Gespräch nicht.').get());
// /* Double */        entries.push(new Builder().id('ca360cea-d815-4039-aae0-e298451e7356').thema(thema).entry('gestern').example('Gestern war Sonntag. Heute ist Montag.').get());
// /* Double */        entries.push(new Builder().id('f9df7289-2c7a-4c66-b158-c11f379ef7f6').thema(thema).entry('s Getränk, -e').example(['Hier, die Getränke-Karte.', '– Ein Glas Wasser, bitte.']).get());
// /* Double */        entries.push(new Builder().id('42eaa15d-3c18-4d6a-83bb-092b0b9a27de').thema(thema).entry('gewinnen').example('Man kann bei dem Quiz eine Reise gewinnen.').get());
// /* Double */        entries.push(new Builder().id('6de7f4e0-e9c6-4534-84e5-f58a4f32d00f').thema(thema).entry('s Glas, ä, -er').example('Kann ich ein Glas Saft haben?').get());
// /* Double */        entries.push(new Builder().id('6bb3ebf1-a3c7-44c3-b7e3-e0af40774ec4').thema(thema).entry('glauben').example(['Ich glaube, Karin spricht sehr gut Englisch.', 'Er glaubt an Gott.']).get());
// /* Double */        entries.push(new Builder().id('8095a6af-42a0-4d66-879b-374bd38982de').thema(thema).entry('gleich').example(['Er kommt gleich.', 'Das ist mir gleich.', 'Die beiden Mädchen sind gleich groß.']).get());
// /* Double */        entries.push(new Builder().id('287c19b1-e55c-4324-ac54-7dc67cfbae36').thema(thema).entry('s Gleis, -e').example('Der Zug kommt auf Gleis vier an.').get());
// /* Double */        entries.push(new Builder().id('f523622a-e08b-4ed3-8959-3d89d793b104').thema(thema).entry('s Glück (Sg.)').example(['Viel Glück!', '– Hoffentlich hast du Glück.']).get());
// /* Double */        entries.push(new Builder().id('f3b0888a-31e3-4889-9011-14e3ea651652').thema(thema).entry('glücklich').example(['Heute bin ich sehr glücklich.', 'Meine Eltern sind glücklich verheiratet.']).get());
// /* Double */        entries.push(new Builder().id('d114c184-fd33-4bc1-bb80-77d8c3214d87').thema(thema).entry('r Glückwunsch, ü, -e').example('Herzlichen Glückwunsch zum Geburtstag!').get());
// /* Double */        entries.push(new Builder().id('4cabfcce-3a4f-4b50-b621-bd037d5f7a7a').thema(thema).entry('gratulieren').example('Ich gratuliere dir herzlich zum Geburtstag.').get());
// /* Double */        entries.push(new Builder().id('aec91dde-f745-4d29-a301-9640d8fd0f93').thema(thema).entry('groß').example(['Unser Haus ist groß.', 'Er ist fast zwei Meter groß.']).get());
// /* Double */        entries.push(new Builder().id('64430521-10dd-46bc-a6f4-4ea51385369c').thema(thema).entry('e Größe, -n').example(['Ich möchte den Pullover in Größe 38.', 'Größe: 1,70 Meter.']).get());
// /* Double */        entries.push(new Builder().id('a06516bb-404d-481c-8af3-3183b31316c1').thema(thema).entry('e Gruppe, -n').example(['Am Nachmittag besuche ich die Foto-Gruppe.', 'In jeder Gruppe sind fünf Schüler.']).get());
// /* Double */        entries.push(new Builder().id('fa6cd88b-35bd-40e1-808d-e21145cefcc4').thema(thema).entry('r Gruß, ü, -e').example('Viele Grüße von Angelika.').get());
        return entries;
    }

    createHEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'H'];
        entries.push(new Builder().id('0b85b1f2-4919-4e9d-9a6c-61913b6ba257').thema(thema).entry('r Hals, ä, -e').translate(['cou', 'gorge']).example('Ich bin krank. Mein Hals tut so weh!').get());
        entries.push(new Builder().id('bcdd4cdb-d535-45b1-bd3b-2ab77ff2b08f').thema(thema).entry('hängen').translate('être accroché(e)').example('An der Wand hängt eine Deutschlandkarte.').get());
        entries.push(new Builder().id('d645f496-e2a5-4cf7-9980-ef90b5f90cba').thema(thema).entry('hässlich').translate(['laid, laide', 'moche']).example('Die Stadt gefällt mir nicht. Ich finde sie ziemlich hässlich.').get());
        entries.push(new Builder().id('a6363405-2230-4631-afd9-0b2cb2c61cf2').thema(thema).entry('s Heft, -e').translate(['cahier', 'carnet']).example('Schreibt die Übung in euer Heft.').get());
        entries.push(new Builder().id('a70eef77-68f6-4e6c-9b68-961fce9388a9').thema(thema).entry('heiß').translate(['chaud(e)', 'torride', 'brûlant(e)']).example('Im Sommer kann es sehr heiß sein.').get());
        entries.push(new Builder().id('aed424ef-266c-4236-88c6-63213e5853bc').thema(thema).entry('e Heizung, -en').translate('chauffage').example('Die Heizung ist kaputt. Es ist kalt hier.').get());
        entries.push(new Builder().id('3b20cf0f-23b7-4a4a-bbfb-fff4366b8a5a').thema(thema).entry('s Hemd, -en').translate('chemise').example('Ich trage nicht gern Hemden, ich mag lieber T-Shirts.').get());
        entries.push(new Builder().id('e89703fe-79dc-4a74-a5d1-ee41408990c6').thema(thema).entry('herrlich').translate('magnifique').example(['Im Park kann man herrlich spazieren gehen.', 'Das Wetter ist heute herrlich.']).get());
        entries.push(new Builder().id('8397c7c7-eff3-40ee-ba30-ea450f82fdbd').thema(thema).entry('hoffen').translate('espérer').example(['Ich hoffe, du antwortest bald.', 'Ich hoffe, es geht dir gut.']).get());
        entries.push(new Builder().id('350e5095-e402-4946-8325-1b159b2afcb0').thema(thema).entry('hoffentlich').translate(['espérons', 'pourvu que', 'vivement']).example(['Hoffentlich kommt er morgen mit.', 'Hoffentlich geht alles gut!']).get());
        entries.push(new Builder().id('2136e7d6-b230-41bf-926d-3f3656d75ac2').thema(thema).entry('höflich').translate(['poli(e)', 'courtois(e)', 'poliment']).example('Er hat mir einen Platz angeboten. Er war sehr höflich.').get());
        /*
        entries.push(new Builder().id('e7179963-0b4d-468e-baba-87f07acbab76').thema(thema).entry('r Hamburger, -').example('Ich nehme einen Hamburger und eine Cola.').get());
        entries.push(new Builder().id('a3dd0ab2-5b9a-43f0-bd16-d9043d6191c2').thema(thema).entry('e Hauptstadt, ä, -e').example('Berlin ist die deutsche Hauptstadt.').get());
        entries.push(new Builder().id('be85882a-d7c8-4755-9a30-0732081e55a1').thema(thema).entry('r Himmel (Sg.)').example('Die Sonne steht hoch am Himmel.').get());
        entries.push(new Builder().id('54ed0c33-101e-4d93-b92f-62a2de19e8ce').thema(thema).entry('s Holz, ö, -er').example('Der Tisch ist aus dickem Holz.').get());
        entries.push(new Builder().id('488ea7bc-854a-4157-8f64-b7cb54e1a732').thema(thema).entry('e Hose, -n').example('Sie trägt immer Hosen und Pullover.').get());
        entries.push(new Builder().id('a72d1e87-cbbc-4103-8e73-0d3dde733665').thema(thema).entry('hübsch').example('Toms neue Freundin ist sehr hübsch.').get());
        */
// /* Double */        entries.push(new Builder().id('bb4c776a-7fc7-4304-aedb-76a47460a244').thema(thema).entry('s Haar, -e').example('Sie hat lange, braune Haare.').get());
// /* Double */        entries.push(new Builder().id('43233994-bfdc-4031-b6a7-b211f996b4a0').thema(thema).entry('haben').example(['Wir haben einen Hund und zwei Katzen.', 'Ich habe leider keine Zeit.']).get());
// /* Double */        entries.push(new Builder().id('9b2381cf-1b60-44d7-9d1e-9a07eef70684').thema(thema).entry('s Hähnchen').example('Ich nehme Hähnchen mit Salat.').get());
// /* Double */        entries.push(new Builder().id('6b96ccc9-34cb-46f0-aed4-bb2574377ed3').thema(thema).entry('e Halle, -n').example('Wir spielen lieber in der Halle Fußball.').get());
// /* Double */        entries.push(new Builder().id('315b0d64-33ad-4f27-b6ff-6113757bdf72').thema(thema).entry('hallo').example('Hallo! Bist du Michael Schmidt?').get());
// /* Double */        entries.push(new Builder().id('3775dea0-9f85-4e60-9e88-c14df97d40c0').thema(thema).entry('halten').example(['Alle Busse halten hier.', 'Können wir hier halten?']).get());
// /* Double */        entries.push(new Builder().id('c801ca81-9738-4331-92fd-41f681127e43').thema(thema).entry('e Haltestelle, -n').example('Da ist die Haltestelle für den Bus M 27.').get());
// /* Double */        entries.push(new Builder().id('655078ce-350a-43f5-903f-fdd5439393c7').thema(thema).entry('e Hand, ä, -e').example(['Er hatte ein paar Blumen in der Hand.', 'Wasch dir die Hände.']).get());
// /* Double */        entries.push(new Builder().id('60067dc2-1fc3-4d0c-9247-f859408d4da3').thema(thema).entry('s Handy, -s').example('Dein Handy klingelt!').get());
// /* Double */        entries.push(new Builder().id('9b29ccb6-1682-4d5f-9086-9decf0afaea5').thema(thema).entry('s Haus, ä, -er').example(['Das ist unser Haus.', 'Ich bin zu Hause.', 'Ich gehe nach Hause.']).get());
// /* Double */        entries.push(new Builder().id('a55297af-0adc-4b3a-9b45-8a36021117dc').thema(thema).entry('e Hausaufgabe, -n').example('Wir machen unsere Hausaufgaben nach dem Essen.').get());
// /* Double */        entries.push(new Builder().id('0c321bff-35e1-4bfc-b87b-24085fbd526e').thema(thema).entry('heiraten').example('Nächste Woche heiratet meine Schwester.').get());
// /* Double */        entries.push(new Builder().id('e64f89f3-ba6b-4ec0-b6cc-0c2852733782').thema(thema).entry('heißen').example(['Wie heißt du?', '– Ich heiße Markus Müller.']).get());
// /* Double */        entries.push(new Builder().id('c15e62a4-3596-458e-a365-f2e074086d63').thema(thema).entry('helfen').example(['Hilf mir bitte!', 'Kann ich dir helfen?']).get());
// /* Double */        entries.push(new Builder().id('6389d376-3cc0-4626-ad3c-b41e2acc9e77').thema(thema).entry('r Herr, -en').example(['Sind Sie Herr Braunmüller?', 'Siehst du den Herrn dort?']).get());
// /* Double */        entries.push(new Builder().id('d7d9ea8f-b879-4911-9e43-a6c331406282').thema(thema).entry('herzlich').example(['Herzliche Grüße von Michael.', '– Herzlichen Glückwunsch!']).get());
// /* Double */        entries.push(new Builder().id('efa3a1c9-5ac0-49bc-81de-d693c6b47887').thema(thema).entry('heute').example('Heute ist Montag. Gestern war Sonntag.').get());
// /* Double */        entries.push(new Builder().id('ea0845df-7636-4d45-9ad1-7397b4046735').thema(thema).entry('hier').example(['Wir wohnen hier.', 'Hier gibt es gutes Brot.']).get());
// /* Double */        entries.push(new Builder().id('410b34c9-a2d6-46d6-bab0-bf9c0cac3f5d').thema(thema).entry('e Hilfe (Sg.)').example('Ich brauche deine Hilfe bei dieser Aufgabe.').get());
// /* Double */        entries.push(new Builder().id('e4dd8233-d3d9-4972-9da8-ee1d9e70f195').thema(thema).entry('hinten').example('Ich sitze vorne in der Klasse. Hinten ist es zu laut.').get());
// /* Double */        entries.push(new Builder().id('4a3dd866-d45d-4679-aece-31294b1d0ffb').thema(thema).entry('s Hobby, -s').example('Meine Hobbys sind Lesen und Tanzen.').get());
// /* Double */        entries.push(new Builder().id('a06eccba-0148-4075-b9a7-14bc1fd1d2ee').thema(thema).entry('hoch').example('Der Berg ist fast 3000 Meter hoch.').get());
// /* Double */        entries.push(new Builder().id('aa4464d0-51df-4739-8f62-888410bad4b1').thema(thema).entry('e Hochzeit, -en').example('Die Hochzeit meiner Schwester war sehr langweilig.').get());
// /* Double */        entries.push(new Builder().id('65e6e0ce-e9fe-4d25-b66c-ff5d18ceffcb').thema(thema).entry('holen').example(['Ich hole dir einen Tee.', 'Holst du die Tassen aus der Küche?']).get());
// /* Double */        entries.push(new Builder().id('eeafbdfd-f7b6-491e-8b3b-37039b3226e3').thema(thema).entry('hören').example('Hörst du gern Musik?').get());
// /* Double */        entries.push(new Builder().id('616dbc24-a8f4-4951-a881-ab73aff6587c').thema(thema).entry('s Hotel, -s').example('Wir haben im Urlaub im Hotel gewohnt.').get());
// /* Double */        entries.push(new Builder().id('59b399a1-c271-49e6-b827-15902e63b33f').thema(thema).entry('r Hund, -e').example('Magst du Hunde lieber als Katzen?').get());
// /* Double */        entries.push(new Builder().id('7248e0a3-2a97-4eaa-a7bd-0c28f4656ffd').thema(thema).entry('r Hunger (Sg.)').example('Wir haben Hunger. Wann ist das Essen fertig?').get());
        return entries;
    }

    createIEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'I'];
        entries.push(new Builder().id('993b95e8-163c-4587-a9cf-7d0d53b6c953').thema(thema).entry('e Idee, -n').translate('idée').example('Was machen wir heute? Hast du eine Idee?').get());
        entries.push(new Builder().id('d22bc6ec-919f-4d45-8057-a87d1ee28074').thema(thema).entry('r Idiot, -en').translate('idiot(e)').example('Du bist ein Idiot!').get());
        entries.push(new Builder().id('cf2606e2-2bc2-4cd1-8716-d66675477569').thema(thema).entry('e Insel, -n').translate('île').example('Rügen ist eine Insel.').get());
        entries.push(new Builder().id('049ae6ba-7d0b-4d23-bb3b-8ce93b72e899').thema(thema).entry('s Interesse (Sg.)').translate('intérêt').example('Die Leute haben viel Interesse an der Ausstellung gezeigt.').get());
        /*
        entries.push(new Builder().id('fe045833-9ca5-4aae-8062-e6906c044993').thema(thema).entry('ihr, ihm, Ihr, -e').example(['Wo seid ihr?', 'Ich möchte ihr helfen.', 'Kannst du ihm das erklären? Ist das Ihr Hund?']).get());
        entries.push(new Builder().id('9fd639c2-cc61-446e-a1b0-0335e3dc8fa4').thema(thema).entry('s Instrument, -e').example(['Spielst du ein Instrument?', '– Ja, Klavier.']).get());
        entries.push(new Builder().id('fab67961-0d1d-462b-b162-a8fb1aeff7ec').thema(thema).entry('intelligent').example(['Das ist eine sehr intelligente Frage.', 'Er ist ein intelligenter Schüler.']).get());
        entries.push(new Builder().id('0d6aeef6-41ad-4305-8f80-98c2b085f542').thema(thema).entry('interessant').example('Das Buch über die Römer ist interessant.').get());
        entries.push(new Builder().id('1b5321c2-93bf-41b6-8a14-f027ae1816ec').thema(thema).entry('interessieren').example(['Interessiert dich das Problem?', 'Ich interessiere mich für Biologie.']).get());
        */
// /* Double */        entries.push(new Builder().id('d8c28e33-b0e3-4c01-b4bd-afdb3e089e88').thema(thema).entry('ich').example('Ich wohne in Berlin.').get());
// /* Double */        entries.push(new Builder().id('bea99498-2852-4300-8c27-b5f228c90411').thema(thema).entry('immer').example(['Mathe ist immer so langweilig.', 'Er kommt immer zu spät.']).get());
// /* Double */        entries.push(new Builder().id('77160c93-4296-47b2-893f-cb974499951e').thema(thema).entry('in').example(['Er lebt in Italien', 'Er lebt in der Stadt.', 'Wir gehen ins Schwimmbad.', 'Der Bus kommt in fünf Minuten.', 'In den Ferien', 'Im Sommer', 'In zwei Jahren mache ich Abitur.']).get());
// /* Double */        entries.push(new Builder().id('19fa57e9-30a7-4426-9788-e6b1bfb6e479').thema(thema).entry('e Information, -en').example(['Sie haben eine Frage? Dann gehen Sie zur Information.', 'Hier gibt es Informationen zu unserem Programm.']).get());
// /* Double */        entries.push(new Builder().id('5bc41f63-20db-4149-b2f9-e1206d06be0f').thema(thema).entry('s Internet (Sg.)').example('Du kannst die Information im Internet finden.').get());
        return entries;
    }

    createJEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'J'];
        entries.push(new Builder().id('75ea9ddb-be0f-4352-bb9f-1f5071ebb5c2').thema(thema).entry('joggen').translate(['courrir', 'faire du jogging']).example('Mein Bruder ist er sportlich. Er joggt jeden Tag.').get());
        entries.push(new Builder().id('a9f9bbc8-6035-4073-a5fc-cb850aecb2ef').thema(thema).entry('e Jugendherberge, -n').translate('auberge de jeunesse').example('Wir schlafen in der Jugendherberge. Sie ist billiger als das Hotel.').get());
        entries.push(new Builder().id('f9f5670a-b1e6-4a2e-8e83-8135616b2476').thema(thema).entry('junge Leute (Pl.)').translate(['jeunes gens', 'jeunesse']).example('Viele junge Leute besuchen Sprachkurse im Ausland.').get());
/*
        entries.push(new Builder().id('81ff0046-557e-49c2-aa88-c25c255c24fa').thema(thema).entry('e Jeans (Pl.)').example('Er trägt heute Jeans und ein Hemd.').get());
        entries.push(new Builder().id('39f6b795-0162-47fc-9f47-854e535d9908').thema(thema).entry('jeder, -e, -s').example('Wir fahren jeden Sommer nach München.').get());
        entries.push(new Builder().id('9422f8f9-0275-4386-894a-975115b2a3fd').thema(thema).entry('jemand').example('Kann das jemand lesen?').get());
        entries.push(new Builder().id('74617f99-89d1-4f67-b130-4a776fa4b866').thema(thema).entry('r Joghurt, -s').example('Am Morgen esse ich Müsli und Joghurt.').get());
        */
// /* Double */        entries.push(new Builder().id('983ceb4f-6af0-4d5e-8e7a-3868cdf5b822').thema(thema).entry('ja').example(['Kommst du mit?', '– Ja, gern.']).get());
// /* Double */        entries.push(new Builder().id('84f9b31a-8327-40d8-8f4c-2ea7552b6ef0').thema(thema).entry('e Jacke, -n').example('Du brauchst eine Jacke, es ist kalt.').get());
// /* Double */        entries.push(new Builder().id('6ba6fb45-6ad5-412f-8079-02415a84ae4d').thema(thema).entry('jetzt').example('Das ist jetzt nicht mehr wichtig.').get());
// /* Double */        entries.push(new Builder().id('84a5e242-48d7-45be-bb4c-01379fcc3fe5').thema(thema).entry('r Job, -s').example('Ich suche einen Ferienjob. Ich will Geld verdienen.').get());
// /* Double */        entries.push(new Builder().id('2bd3c5a6-8d3a-4b69-a69a-e732e3981a36').thema(thema).entry('r/e Jugendliche, -n').example('Viele Jugendliche finden diese Musik toll.').get());
// /* Double */        entries.push(new Builder().id('590534fc-cf43-475d-bd4e-a1f517343d97').thema(thema).entry('jung').example(['Meine Eltern sind noch jung.', 'Du bist noch zu jung, vielleicht in zwei Jahren.']).get());
// /* Double */        entries.push(new Builder().id('4eaa004b-3f18-47fa-a6c1-54737aeb33af').thema(thema).entry('r Junge, -n').example('Der Junge ist neu in unserer Klasse.').get());
        return entries;
    }

    createKEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'K'];
        entries.push(new Builder().id('91e1274a-4018-4664-917d-a2a14a52f8dc').thema(thema).entry('r Keller, -').translate('cave').example('Räum die alten Sachen in den Keller.').get());
        entries.push(new Builder().id('1c63c547-17e1-4a2c-9682-cd4388f0ef2b').thema(thema).entry('klingeln').translate('sonner').example(['Du kannst bei Hausnummer 5 klingeln.', 'Das Telefon klingelt.']).get());
        entries.push(new Builder().id('fe159594-6d79-4acd-91bf-577938c15afe').thema(thema).entry('r Klub, -s').translate('club (disco)').example('Wollen wir in einen Klub zum Tanzen gehen?').get());
        entries.push(new Builder().id('f57226d2-59f1-435b-854a-76045ee29033').thema(thema).entry('klug').translate(['intelligent(e)', 'sage', 'judicieux, judicieuse', 'fin(e)', 'prudent(e)']).example(['Eine kluge Antwort.', 'Sie ist ein kluges Mädchen.']).get());
        entries.push(new Builder().id('978368ca-f6dc-4de4-8a82-3f208ac47cd0').thema(thema).entry('kostenlos').translate('gratuit(e)').example('Das Programm kannst du kostenlos bekommen. Du musst es nicht bezahlen.').get());
        entries.push(new Builder().id('641e3b71-35b9-4760-ad7c-8f83ee4973d9').thema(thema).entry('s Krankenhaus, ä, -er').translate('hôpital').example('Meine Freundin ist im Krankenhaus. Sie ist sehr krank.').get());
        entries.push(new Builder().id('3572a51a-f646-49aa-92b5-ab6ac0e4fd6c').thema(thema).entry('e Kreuzung, -en').translate(['carrefour', 'intersection', 'croisement']).example('An der Kreuzung musst du rechts fahren.').get());
        entries.push(new Builder().id('8f2ade26-300e-4da1-b0ae-c92f1170aca3').thema(thema).entry('kühl').translate('frais, fraîche').example('Es ist heute ziemlich kühl. Nimm eine Jacke mit.').get());
        entries.push(new Builder().id('bc819dbe-351c-409e-8dbd-02fb6bc8ae6a').thema(thema).entry('r Kuchen, -').translate(['gâteau', 'tarte']).example('Zum Geburtstag backe ich dir einen Kuchen.').get());
/*
        entries.push(new Builder().id('44ef9e74-3d85-4960-ba4c-c90571f623bc').thema(thema).entry('r Kakao (Sg.)').example('Ich trinke lieber Kakao. (Siehe auch Schokolade.)').get());
        entries.push(new Builder().id('5b5c06ba-c54b-4da5-8e0d-23f1ea13d39a').thema(thema).entry('kalt').example(['Im Winter ist es hier sehr kalt.', 'Mir ist kalt.']).get());
        entries.push(new Builder().id('32ae7cdb-b4e9-42ba-9999-da86694a9087').thema(thema).entry('e Kamera, -s').example('Meine Kamera ist neu. Deshalb mache ich viele Fotos.').get());
        entries.push(new Builder().id('d304d1d5-d117-4405-acde-1fbc98429edb').thema(thema).entry('r Käse (Sg.)').example('Abends esse ich gern ein Brot mit Käse.').get());
        entries.push(new Builder().id('760f1c04-78f6-4afa-a5bc-d33bcbd77cfb').thema(thema).entry('e Katze, -n').example(['Hast du ein Haustier?', '– Ja, eine Katze.']).get());
        entries.push(new Builder().id('c31a882f-c30f-45b1-989b-335dbc52ca5b').thema(thema).entry('e Kirche, -n').example('Die Kirche ist am Marienplatz.').get());
        entries.push(new Builder().id('515a0a29-311e-4b20-8eb7-6d579b58c8c5').thema(thema).entry('klappen').example('Ich wollte Herrn Meyer treffen. Es hat aber nicht geklappt.').get());
        entries.push(new Builder().id('2c1fa3f7-8647-4158-82fe-2738b809db20').thema(thema).entry('s Klavier, -e').example(['Spielst du ein Instrument?', '– Ja, Klavier.']).get());
        entries.push(new Builder().id('3184e884-6d12-4bd0-a4c8-b7c7cd4bd7b7').thema(thema).entry('s Kleid, -er').example('Das Kleid ziehe ich zur Hochzeit an.').get());
        entries.push(new Builder().id('bc9cf3af-b2d2-42b5-8acc-91716136fe1c').thema(thema).entry('klein').example(['Mein Bruder ist noch klein.', 'Mein Zimmer ist klein.']).get());
        entries.push(new Builder().id('02648461-8647-4ee8-befe-15c8fed0f746').thema(thema).entry('s Klima').example('Das Klima in Afrika ist heiß und trocken.').get());
        entries.push(new Builder().id('1c0c166a-96c7-4954-bc01-c2cd7b030147').thema(thema).entry('komisch').example(['Er hat ganz komisch reagiert.', 'Der Film ist sehr komisch. Ich habe viel gelacht.']).get());
        entries.push(new Builder().id('d0a1ea3e-4bd7-4059-aadd-d41833c0a8fe').thema(thema).entry('kompliziert').example('Die Übung ist ziemlich kompliziert. Kann mir jemand helfen?').get());
        entries.push(new Builder().id('6336383e-217b-4ea8-b096-87047ac16d97').thema(thema).entry('s Konzert, -e').example('Wir gehen heute Abend ins Konzert.').get());
        entries.push(new Builder().id('16a2582d-d2ea-42ce-b7f3-5fef75d7ee7f').thema(thema).entry('korrigieren').example('Die Lehrerin hat den Aufsatz korrigiert.').get());
        entries.push(new Builder().id('d2b320f4-b679-4afe-95a8-c9136a8c1022').thema(thema).entry('r Krimi, -s').example('Ich lese gerne Krimis.').get());
        entries.push(new Builder().id('b92fb87a-b463-414c-9a29-099c3a37ffcc').thema(thema).entry('r Kriminalfilm, -e').example('Im Fernsehen gibt es oft Kriminalfilme.').get());
        */
// /* Double */        entries.push(new Builder().id('e090a678-dddb-4788-b6ab-8c461860e8d5').thema(thema).entry('r Kaffee, -s').example('Möchtest du eine Tasse Kaffee?').get());
// /* Double */        entries.push(new Builder().id('1d853101-aaa8-457f-9ca5-0ff39628ccc7').thema(thema).entry('kaputt').example('Der Automat ist kaputt.').get());
// /* Double */        entries.push(new Builder().id('965968e8-e973-4373-bd28-2e0cd696372f').thema(thema).entry('e Karte, -n').example(['Schreibst du mir eine Karte aus den Ferien?', 'Wollen wir Karten spielen?', 'Holst du die Karten für das Theater?', 'Ich brauche noch eine Fahrkarte für den Bus.', 'Kann ich hier mit der Karte zahlen?', 'Hast du eine Straßenkarte von Bayern?']).get());
// /* Double */        entries.push(new Builder().id('ec8c85a4-741f-4df5-bfd7-936158f40923').thema(thema).entry('e Kartoffel, -n').example('Aus Kartoffeln macht man Pommes frites.').get());
// /* Double */        entries.push(new Builder().id('a55d61e3-be5d-4d43-a38c-c4054cd33aa3').thema(thema).entry('e Kasse, -n').example('Die Kasse ist neben dem Eingang. Dort kannst du bezahlen.').get());
// /* Double */        entries.push(new Builder().id('2726499a-5c18-4fe0-9aeb-2c5244d52db8').thema(thema).entry('kaufen').example('Ich möchte einen Pullover kaufen.').get());
// /* Double */        entries.push(new Builder().id('14c00e2c-eccf-4120-9e05-a77d35658c09').thema(thema).entry('kein, e').example(['Ich habe keine Lust.', 'Ich habe keine Zeit.']).get());
// /* Double */        entries.push(new Builder().id('3c6fbce2-7a54-4cd1-a61d-fff4880aa979').thema(thema).entry('kennen').example(['Kennst du Frau Braunmüller?', '– Nein, leider nicht.']).get());
// /* Double */        entries.push(new Builder().id('ca168042-2107-4452-905b-e5f9ec78a219').thema(thema).entry('kennenlernen').example(['Möchtest du meine Freunde kennenlernen?', 'Im Urlaub lernt man viele neue Leute kennen']).get());
// /* Double */        entries.push(new Builder().id('ddd81522-fff8-4c1d-a083-6d7d423b4fab').thema(thema).entry('s Kind, -er').example(['Die Kinder sind in der Schule.', 'Sie haben vier Kinder, zwei Jungs und zwei Mädchen.']).get());
// /* Double */        entries.push(new Builder().id('3e9908f2-5379-430b-95cd-7c96befe6198').thema(thema).entry('r Kindergarten, ä, -').example('Meine kleine Schwester geht in den Kindergarten.').get());
// /* Double */        entries.push(new Builder().id('9f8594d0-dba3-42ec-9c2c-bde3310c322b').thema(thema).entry('s Kino, -s').example('Kommt ihr mit ins Kino? Es läuft ein interessanter Film.').get());
// /* Double */        entries.push(new Builder().id('ea0d7c59-4158-40eb-800a-299888e21420').thema(thema).entry('r Kiosk , -e').example('Das kannst du am Kiosk kaufen.').get());
// /* Double */        entries.push(new Builder().id('e1d773c7-8efd-42c0-b029-703b323677b5').thema(thema).entry('klar').example(['Ist alles klar?', 'Machst du das?', '– Na, klar!', 'Das Wasser in diesem Fluss ist klar.']).get());
// /* Double */        entries.push(new Builder().id('78610024-3f77-4690-a656-a0b0ad409d3f').thema(thema).entry('e Klasse, -n').example('In unserer Klasse sind 25 Schüler.').get());
// /* Double */        entries.push(new Builder().id('ec777989-f994-463a-8068-722ceefe863b').thema(thema).entry('e Kleidung (Sg.)').example('Ich interessiere mich für Kleidung und Mode.').get());
// /* Double */        entries.push(new Builder().id('0e046a56-2e9a-4871-b3ec-fa2d1a585f08').thema(thema).entry('kochen').example(['Wer kocht bei euch?', 'Meistens kocht mein Vater das Abendessen.']).get());
// /* Double */        entries.push(new Builder().id('0d50e42d-543f-44bb-b6a5-732d0f2c2cb0').thema(thema).entry('r Koffer, -').example('Ich muss meinen Koffer noch packen. Ich fliege morgen nach Istanbul.').get());
// /* Double */        entries.push(new Builder().id('cded42f7-03c1-4612-939a-42b5b6bd8705').thema(thema).entry('kommen').example(['Ich komme aus München.', 'Kommt Markus auch zur Feier?']).get());
// /* Double */        entries.push(new Builder().id('bc721a2f-a706-4bc0-80d6-1c1929d40279').thema(thema).entry('können').example(['Er kann gut kochen.', 'Kannst du Spanisch?', 'Wann kannst du das machen?']).get());
// /* Double */        entries.push(new Builder().id('50d98d57-7eca-4418-ac0a-a43bc2c45aa1').thema(thema).entry('r Kopf, ö, -e').example('Mein Kopf tut weh. Ich brauche eine Tablette.').get());
// /* Double */        entries.push(new Builder().id('d747cd8a-27cc-4c41-8d0d-05eec47060d5').thema(thema).entry('kosten').example('Das Buch kostet 20 Euro.').get());
// /* Double */        entries.push(new Builder().id('802d7c8b-4cb1-4600-916b-1f2565e7d2b0').thema(thema).entry('krank').example('Ich bin krank. Ich muss zum Arzt.').get());
// /* Double */        entries.push(new Builder().id('1562ac0b-8d43-4632-b58c-b80a8a330d60').thema(thema).entry('e Küche, -n').example('Die Tassen sind in der Küche.').get());
// /* Double */        entries.push(new Builder().id('3d05bcd2-f435-4e06-aea8-2f8053d7f362').thema(thema).entry('r Kugelschreiber, -').example('Schreibe in der Prüfung mit dem Kugelschreiber?').get());
// /* Double */        entries.push(new Builder().id('72bd9f06-cacc-41a6-a3d1-27dbfebe9832').thema(thema).entry('r Kühlschrank, ä, -e').example('Die Milch ist im Kühlschrank.').get());
// /* Double */        entries.push(new Builder().id('8f363216-129c-4586-893c-747e521f3b5a').thema(thema).entry('r Kurs, -e').example('In den Ferien mache ich einen Deutschkurs.').get());
// /* Double */        entries.push(new Builder().id('eed52920-eb02-413d-9b95-a7ff127dd11f').thema(thema).entry('kurz').example(['Sie hat kurze Haare.', 'Die Hose ist zu kurz.']).get());
        return entries;
    }

    createLEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'L'];
        entries.push(new Builder().id('abb4e534-afa0-4f6b-a5db-18a832aae131').thema(thema).entry('e Landkarte, -n').translate('carte (cartographie)').example('Das ist eine Landkarte von Europa.').get());
        entries.push(new Builder().id('ddb1fe91-0bf4-4692-b7cf-bfdd2562ad90').thema(thema).entry('e Landschaft, -en').translate('paysage').example('Mir gefällt die Landschaft am Rhein.').get());
        entries.push(new Builder().id('1010a939-2c6e-4d0d-8189-c1c270f26419').thema(thema).entry('lassen').translate('laisser qc.').example(['Ihr könnt die Bücher zu Hause lassen.', 'Lass mich in Ruhe!']).get());
        entries.push(new Builder().id('bc0278c1-e13d-47e2-868d-d679f84618e4').thema(thema).entry('leid').translate(['las, lasse', 'Es tut mir leid: je suis désolé']).example('Es tut mir leid.').get());
        entries.push(new Builder().id('4c892c26-41e1-40a5-a4f0-7246748ca001').thema(thema).entry('leihen').translate('prêter').example('Kannst du mir dein Buch leihen? Ich bringe es morgen zurück.').get());
        entries.push(new Builder().id('d4abd2b9-05a9-4536-8258-282d11340b5c').thema(thema).entry('e Leistung, -en').translate(['performance', 'prestation']).example('Deine Leistungen in Mathematik sind nicht gut genug.').get());
        entries.push(new Builder().id('db883f19-b8a3-4332-9b87-c3cad6b70a6c').thema(thema).entry('lieb haben').translate('aimer bien').example(['Hast du mich lieb?', 'Ich habe meine Eltern lieb.']).get());
        entries.push(new Builder().id('5a21a612-5c26-4498-aca1-82294f647398').thema(thema).entry('lockig').translate(['bouclé(e)', 'frisé(e)']).example('Sie hat kurze, lockige Haare.').get());
        entries.push(new Builder().id('8a75f039-073d-42f6-a1fa-2a266b751ab2').thema(thema).entry('r Löffel, -').translate('cuillière').example('Ich brauche einen Löffel für die Suppe.').get());
        entries.push(new Builder().id('e3395468-a570-4d3a-9d75-902e3444a667').thema(thema).entry('e Lust (Sg.)').translate('plaisir').example('Ich habe jetzt keine Lust.').get());
/*
        entries.push(new Builder().id('466e208d-7da0-4914-be3b-49c2272032ea').thema(thema).entry('e Lampe, -n').example('Es ist so dunkel. Ich brauche eine Lampe.').get());
        entries.push(new Builder().id('67a7f540-63b5-445b-830f-7ca903bc14cc').thema(thema).entry('langweilig').example(['Physik ist langweilig. Es interessiert mich nicht.', 'Der Film war langweilig.']).get());
        entries.push(new Builder().id('9253dff5-cb54-4dae-bc8d-ad6a9452ca07').thema(thema).entry('leer').example('Mein Glas ist leer. Kann ich noch ein Mineralwasser haben?').get());
        entries.push(new Builder().id('d520c7a2-5168-411e-9dfc-eeeb23c45d39').thema(thema).entry('letzte').example('Im letzten Jahr hat sie Abitur gemacht. Jetzt ist sie Studentin.').get());
        */
// /* Double */        entries.push(new Builder().id('07ff5125-fbd1-422c-aa3e-d1c4c5557e37').thema(thema).entry('lachen').example(['Onkel Fritz lacht viel. Er ist lustig.', 'Sie hat über mich gelacht.']).get());
// /* Double */        entries.push(new Builder().id('5cf8f977-5645-4c3f-9d62-657a89c505a7').thema(thema).entry('s Land, ä, -er').example('Deutschland ist ein schönes Land.').get());
// /* Double */        entries.push(new Builder().id('1b38fc3d-b174-497b-a7ee-df44e0a8686e').thema(thema).entry('lang').example(['Der Weg ist zu lang. Du kannst nicht zu Fuß gehen.', 'Das Auto ist drei Meter lang.']).get());
// /* Double */        entries.push(new Builder().id('59618180-9e23-4798-95e1-004d52bec8b5').thema(thema).entry('lange').example(['Wartest du schon lange?', 'Ich bin schon lange hier.']).get());
// /* Double */        entries.push(new Builder().id('94cdeacd-900c-4450-bd24-46818a50f2cb').thema(thema).entry('langsam').example('Sprich bitte langsamer, ich verstehe dich nicht.').get());
// /* Double */        entries.push(new Builder().id('8c2e3d37-2826-43b2-a24a-02cbd95f6384').thema(thema).entry('laufen').example('Wir laufen nach Hause. Ich will nicht mit dem Auto fahren.').get());
// /* Double */        entries.push(new Builder().id('26356e8e-4872-4617-be90-d82ccc7a7dfa').thema(thema).entry('laut').example('Die Musik ist zu laut. Ich verstehe kein Wort.').get());
// /* Double */        entries.push(new Builder().id('18c79760-3a9c-41bb-9090-21f551bf46ed').thema(thema).entry('leben').example(['Er lebt in Berlin.', 'Sie lebt bei ihren Eltern.', 'Meine Großmutter lebt nicht mehr.']).get());
// /* Double */        entries.push(new Builder().id('3a534f3b-e1a6-47a2-b3c3-874092737a78').thema(thema).entry('e Lebensmittel (Pl.)').example('Lebensmittel bekommst du im Supermarkt.').get());
// /* Double */        entries.push(new Builder().id('31df7258-c45b-489f-844e-05af440a39c3').thema(thema).entry('legen').example('Leg bitte das Buch auf den Tisch.').get());
// /* Double */        entries.push(new Builder().id('dccdb21a-bd0c-495d-a556-1a97656863bc').thema(thema).entry('leicht').example(['Die Hausaufgaben sind leicht.', 'Mein Rucksack ist leicht.']).get());
// /* Double */        entries.push(new Builder().id('a5a06a42-0c3c-42d9-8195-d430769ddbc8').thema(thema).entry('leider').example('Ich kann leider nicht kommen. Ich muss noch arbeiten.').get());
// /* Double */        entries.push(new Builder().id('e73def7e-a18d-4949-b415-1b0a3cf94c9b').thema(thema).entry('leise').example('Mach die Musik bitte leiser!').get());
// /* Double */        entries.push(new Builder().id('bd17ff50-c90e-4c82-a2eb-004c0f5efc6d').thema(thema).entry('lernen').example(['Karin lernt Tennis spielen.', 'Ich muss noch für die Schule lernen.']).get());
// /* Double */        entries.push(new Builder().id('78ed92ca-23f8-4353-a972-a50cbf5a43bb').thema(thema).entry('lesen').example('In meiner Freizeit lese ich gern Krimis.').get());
// /* Double */        entries.push(new Builder().id('c8d61574-f951-4796-bd63-04572484ba10').thema(thema).entry('e Leute (Pl.)').example('In unserem Haus wohnen viele Leute.').get());
// /* Double */        entries.push(new Builder().id('854f46ed-5002-4b8b-b49f-39136554bfca').thema(thema).entry('s Licht, -er').example('Mach bitte das Licht an. Ich sehe nichts.').get());
// /* Double */        entries.push(new Builder().id('4a8caba0-bdd6-407a-94d0-5c2616425207').thema(thema).entry('lieb').example(['Lieber Franz!', 'Meine Katze ist sehr lieb.']).get());
// /* Double */        entries.push(new Builder().id('454e9a06-9dfc-47eb-868f-f9fec2c0050f').thema(thema).entry('lieben').example(['Sie liebt ihren Beruf.', 'Er liebt sie.']).get());
// /* Double */        entries.push(new Builder().id('5a8accb4-e435-47bc-8aea-60a5576f79da').thema(thema).entry('lieber').example('Tee oder Kaffee? Ich möchte lieber Tee.').get());
// /* Double */        entries.push(new Builder().id('81227c4f-ed0d-4139-827e-3b60ebd6a66f').thema(thema).entry('Lieblings-').example('Meine Lieblingsfarbe ist Blau.').get());
// /* Double */        entries.push(new Builder().id('67c47b84-cfee-43c2-b93b-166493392e1d').thema(thema).entry('s Lied, -er').example('Wir singen gern Lieder.').get());
// /* Double */        entries.push(new Builder().id('3d6b5d54-ba36-4043-8ba3-e97f6f8a508a').thema(thema).entry('liegen').example(['Da liegt ja meine Zeitung.', 'Bonn liegt am Rhein.']).get());
// /* Double */        entries.push(new Builder().id('a68a7e8c-8ec6-41bf-b8a0-009dc49b822d').thema(thema).entry('links').example('Das Rathaus ist links neben dem Museum.').get());
// /* Double */        entries.push(new Builder().id('d9aacc0e-bfb4-40b8-93ab-1752b4b83179').thema(thema).entry('lustig').example('Erzähl eine lustige Geschichte!').get());
        return entries;
    }

    createMEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'M'];
        entries.push(new Builder().id('c6e52181-8934-4892-93eb-410b384177bd').thema(thema).entry('s Mal, -e').translate('une fois').example(['Ich war zwei Mal in England.', 'Bis zum nächsten Mal!']).get());
        entries.push(new Builder().id('c1861052-a1bf-4104-9376-6dd330516ee2').thema(thema).entry('mal').translate('donc').example(['Kannst du bitte mal aufpassen?', 'Komm mal her!', 'Sag mal, wie findest du meine neue Hose?']).get());
        entries.push(new Builder().id('bbaf3b11-20a4-44e0-bc14-11d39b69bf6a').thema(thema).entry('e Maus, ä, -e').translate('souris').example(['Ich glaube, im Keller ist eine Maus.', 'An meinem Computer ist die Maus kaputt.']).get());
        entries.push(new Builder().id('2e508e21-f0ea-4832-8add-aae75c4c9d59').thema(thema).entry('e Meinung, -en').translate(['opinion', 'avis']).example(['Sag mir bitte deine Meinung zu diesem Thema.','Meiner Meinung nach ist das eine gute Idee']).get());
        entries.push(new Builder().id('ec58d53f-e483-4d04-885e-0cca665cda84').thema(thema).entry('die meisten').translate('la plupart').example('Die meisten Touristen wollen den Kölner Dom besichtigen.').get());
        entries.push(new Builder().id('d3de0dff-1837-4e52-b8d9-d98191679d2a').thema(thema).entry('mindestens').translate(['au moins', 'du moins']).example(['Ich habe mindestens 30 Minuten gewartet.', 'Du brauchst mindestens 40 Punkte.', 'Schreibe mindestens 50 Wörter.']).get());
        entries.push(new Builder().id('e40fff0d-c3b9-4586-b9b0-3d0b927bdcaa').thema(thema).entry('minus').translate('moins').example('Sechs minus zwei ist vier.').get());
        entries.push(new Builder().id('20225c73-e767-4ff3-9c75-0c75d9724d7c').thema(thema).entry('mitgehen').translate('escorter qn./qc.').example('Wir gehen alle mit ins Kino.').get());
        entries.push(new Builder().id('859fd20a-9e5a-4717-b60e-9b568a91df31').thema(thema).entry(['r Mitschüler, -', 'e Mitschülerin, -nen']).translate('camarade de classe').example('Meine Mitschüler ärgern mich immer.').get());
        entries.push(new Builder().id('75e58f0d-7c54-43fb-8ff3-279345541618').thema(thema).entry('mitspielen').translate(['être de la partie', 'participer au jeu']).example(['Ich möchte auch mitspielen!', 'Das geht nicht, wir sind schon vier Mitspieler.']).get());
        entries.push(new Builder().id('83246fcf-75dc-4572-a7e4-ff360bf4b626').thema(thema).entry('e Mitteilung, -en').translate(['avis', 'communication', 'message', 'notification']).example('Du hörst drei Mitteilungen für Jugendliche im Radio.').get());
        entries.push(new Builder().id('bfd8ecb7-43ac-46ba-b928-95ab9091f632').thema(thema).entry('e Modenschau, -en').translate('défilé de mode').example('Die Modenschau war toll. Es gab so viele schöne Kleider.').get());
        entries.push(new Builder().id('e0be4750-174c-4007-88fa-5ebda0cafbd4').thema(thema).entry('r Mond, -e').translate('lune').example('Der Mond war ganz hell.').get());
        entries.push(new Builder().id('6e79ff34-d0f4-432e-a87f-5a54b9396c46').thema(thema).entry('s Moped, -s').translate('vélomoteur').example('Er hat ein Moped bekommen. Damit fährt er nun in die Schule.').get());
        entries.push(new Builder().id('216b7e4a-4640-423e-8a67-3089bde6e881').thema(thema).entry('r Müll (Sg.)').translate(['détritus', 'ordures', 'déchets']).example(['Bringst du bitte den Müll weg/raus?', 'Lassen Sie keinen Müll im Park liegen!']).get());
        entries.push(new Builder().id('2a61e5c1-7bf2-4483-9574-dcc1d988b534').thema(thema).entry('s Müsli, -s').translate(['céréale', 'muesli']).example('Ich esse jeden Morgen ein Müsli mit Joghurt.').get());
/*
        entries.push(new Builder().id('1a739b05-08a8-4ead-aae6-08209b750544').thema(thema).entry('manchmal').example('Ich bin manchmal sehr traurig, aber nicht immer.').get());
        entries.push(new Builder().id('8b1255b0-3e5d-470d-b782-690c2a4a5a11').thema(thema).entry('r Mantel, ä, -').example('Es ist kalt. Zieh einen Mantel an.').get());
        entries.push(new Builder().id('87847a1d-561d-448b-94ed-ebbcc2dc656f').thema(thema).entry('r Markt, ä, -e').example(['Heute ist hier Markt.', 'Auf dem Markt gibt es Obst und Gemüse.']).get());
        entries.push(new Builder().id('b232bd0f-653b-4042-8a47-eaee3b9e34bb').thema(thema).entry('r Marktplatz, ä, -e').example('Der Bus fährt bis zum Marktplatz.').get());
        entries.push(new Builder().id('7de4a9ef-995e-435e-a741-a008f17a19a7').thema(thema).entry('e Marmelade, -n').example(['Was möchtest du zum Frühstück?', 'Brot mit Marmelade.']).get());
        entries.push(new Builder().id('9fdc8ac1-59b0-401a-ab71-00e09a70d5e3').thema(thema).entry('meinen').example('Ich meine, das ist zu teuer.').get());
        entries.push(new Builder().id('598a7590-8538-4902-a395-fdcc5f02c2ca').thema(thema).entry('s Messer, -').example('Ich habe nur eine Gabel. Kann ich noch ein Messer haben?').get());
        entries.push(new Builder().id('c761ec9e-264a-4532-85a2-3cd9f38eebfe').thema(thema).entry('s Mineralwasser, ä').example(['Was möchtest du trinken?', 'Ein Mineralwasser.']).get());
        entries.push(new Builder().id('1dc607c7-cf8f-4f0d-bd68-54c4b9f4d3e6').thema(thema).entry('s Mittagessen, -').example(['Zum Mittagessen sind immer alle zu Hause', 'Zum Mittagessen gibt es Nudeln.']).get());
        entries.push(new Builder().id('a268ca66-7505-43f6-bae8-bfbd7989bfa6').thema(thema).entry('e Mode (Sg.)').example(['Meine Freundin interessiert sich für Mode.', 'Das ist die neue Mode: blaue T-Shirts und grüne Hosen.']).get());
        entries.push(new Builder().id('7117fa3c-27a0-4130-b7ab-6027c139afd3').thema(thema).entry('modern').example(['Gelbe Pullover sind nicht mehr modern.', 'Diese Möbel sind jetzt modern.']).get());
        entries.push(new Builder().id('8b39745e-0484-4e09-83b5-b0c889fb01ef').thema(thema).entry('r Motor, -en').example('Der Motor ist kaputt. Mein Auto fährt nicht.').get());
        entries.push(new Builder().id('e51e4d40-d965-47e5-a1f1-174991725ec0').thema(thema).entry('s Motorrad, ä, -er').example('Ich fahre mit dem Motorrad zur Arbeit.').get());
        entries.push(new Builder().id('bf2fe6fa-c072-41d5-871f-1663fd8ede23').thema(thema).entry('r Motorroller, -').example('Ich möchte an meinem 16. Geburtstag einen Motorroller kaufen.').get());
        entries.push(new Builder().id('37ab9342-02b0-472e-8bb1-d9fef6e9b461').thema(thema).entry('s Museum, Museen').example('Wir gehen am Sonntag ins Museum und sehen uns die Bilder von Picasso an.').get());
        entries.push(new Builder().id('a5b2f87e-4aba-4d5f-8154-ba7edb4921e9').thema(thema).entry('e Musik, -en').example(['Ich höre gern Musik.', 'Ich mache gern Musik mit meiner Band.']).get());
        entries.push(new Builder().id('4fe3afbb-5059-40cd-9332-50177523cbd1').thema(thema).entry('r Musiker, -, e Musikerin, -nen').example('Ich lerne Klavier spielen. Ich möchte Musiker werden.').get());
        */
// /* Double */        entries.push(new Builder().id('0145ef3b-97c0-4e36-a87a-b50cd59f65a6').thema(thema).entry('machen').example(['Am Samstag machen wir einen Ausflug.', 'Das macht nichts!', 'Das macht € 5,70.']).get());
// /* Double */        entries.push(new Builder().id('14bceaf9-8079-4d27-ad56-801da696b587').thema(thema).entry('s Mädchen, -').example(['Die Mädchen spielen auch Fußball.', 'In der Klasse sind 15 Mädchen und 12 Jungs.']).get());
// /* Double */        entries.push(new Builder().id('6a339e42-467e-41d4-b8c8-add37a480f9e').thema(thema).entry('man').example('Hier darf man nicht laut sprechen.').get());
// /* Double */        entries.push(new Builder().id('c4704219-ac72-465b-94d9-93b2658c8133').thema(thema).entry('r Mann, ä, -er').example(['Ein Mann geht mit seinem Hund spazieren.', 'Mein Mann ist Arzt.']).get());
// /* Double */        entries.push(new Builder().id('9aded087-23c7-4c92-ab06-8bb1d186724a').thema(thema).entry('e Maschine, -n').example(['Ist die Maschine kaputt?', 'Er fliegt morgen mit der ersten Maschine nach Paris.', 'Die Harley Davidson ist eine tolle Maschine.']).get());
// /* Double */        entries.push(new Builder().id('0b209880-81fd-4c51-aeca-b58822557019').thema(thema).entry('s Meer, -e').example('In den Ferien fahren wir ans Meer.').get());
// /* Double */        entries.push(new Builder().id('9153756e-2cae-42ee-9082-e43e0d177a80').thema(thema).entry('mehr').example(['Ich habe kein Geld mehr.', 'Ich brauche mehr Taschengeld.', 'Du musst mir noch mehr von deiner Reise erzählen.']).get());
// /* Double */        entries.push(new Builder().id('8b56d6bb-f348-4273-81b9-5b8ab38f353c').thema(thema).entry('mein, -e').example('Meine Freundin heißt Gaby.').get());
// /* Double */        entries.push(new Builder().id('72fcd335-acac-432e-afde-940d7b7b28ea').thema(thema).entry('r Mensch, -en').example(['Wie viele Menschen leben in Berlin?', 'Ich glaube, die Stadt hat 3 Millionen Menschen.']).get());
// /* Double */        entries.push(new Builder().id('17d76c20-64da-408a-bee4-a6bcdef68a66').thema(thema).entry('e Milch (Sg.)').example(['Ich trinke den Kaffee immer mit Milch.', 'Holst du die Milch aus dem Kühlschrank?']).get());
// /* Double */        entries.push(new Builder().id('5df96452-54cf-4512-9da3-95cd29709130').thema(thema).entry('mit').example(['Ich spiele mit Andrea.', 'Er fährt mit dem Bus.']).get());
// /* Double */        entries.push(new Builder().id('504f0f3e-6c98-42d5-8e54-f49d15a78c2d').thema(thema).entry('mitbringen').example('Was bringst du zur Party mit?').get());
// /* Double */        entries.push(new Builder().id('83f583e1-ed21-49c5-b62f-a72c7844aef7').thema(thema).entry('mitkommen').example('Ich gehe ins Kino. Kommst du mit?').get());
// /* Double */        entries.push(new Builder().id('a3ec895a-7f1e-4802-b02a-6d07a555f9f6').thema(thema).entry('mitmachen').example('Komm, mach mit! Das Spiel ist lustig.').get());
// /* Double */        entries.push(new Builder().id('f5c996b4-d225-436a-86ae-ac9d893e9ae8').thema(thema).entry('mitnehmen').example('Könnt ihr mich im Auto mitnehmen? Ich will nicht zu Fuß nach Hause gehen.').get());
// /* Double */        entries.push(new Builder().id('d84d0465-b6ff-44c4-a88c-0fab3d79d678').thema(thema).entry('e Mitte, -n').example(['In der Mitte steht ein Tisch.', 'Mitte August fahre ich in den Urlaub.']).get());
// /* Double */        entries.push(new Builder().id('a7e871be-1614-4efb-b9fe-a1a6f77d9e04').thema(thema).entry('e Möbel (Pl.)').example('Sie kaufen neue Möbel: einen Tisch, zwei Stühle und ein Bett.').get());
// /* Double */        entries.push(new Builder().id('cc65edb7-b26a-43f0-851a-ff2417cc4ec5').thema(thema).entry('mögen').example(['Ich mag gern Spaghetti.', 'Ich mag keine Milch.']).get());
// /* Double */        entries.push(new Builder().id('2a32b59d-ea36-4805-80b1-b083397afba0').thema(thema).entry('möglich').example('Ich kann nicht kommen, es ist leider nicht möglich.').get());
// /* Double */        entries.push(new Builder().id('d0d59ce6-dce3-4ac5-8888-da3848c349f0').thema(thema).entry('r Moment, -e').example(['Warte bitte einen Moment!', 'In diesem Moment fängt das Spiel an.']).get());
// /* Double */        entries.push(new Builder().id('ae843361-8459-4f66-9e9e-d700408f2454').thema(thema).entry('morgen').example('Heute ist Montag. Morgen ist Dienstag.').get());
// /* Double */        entries.push(new Builder().id('ec0684ee-58d2-49c2-baad-0986f8f74ba9').thema(thema).entry('müde').example('Ich bin müde. Ich gehe heute früh ins Bett.').get());
// /* Double */        entries.push(new Builder().id('7d2ba9e7-ef41-4e45-bc39-412620855c73').thema(thema).entry('müssen').example(['Mein Zimmer muss ich allein aufräumen.', 'Meine Mutter muss von acht bis fünf arbeiten.']).get());
        return entries;
    }

    createNEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'N'];
        entries.push(new Builder().id('0f38bbb0-20ff-4bf1-a59c-695d5a99ae0a').thema(thema).entry('e Nachricht').translate(['nouvelle', 'message']).example(['Das ist eine gute Nachricht.', 'Jetzt kommen im Radio die Nachrichten für Schüler.', 'Du hörst die Nachricht noch einmal.']).get());
        entries.push(new Builder().id('f9fcc66a-fe9e-4561-a870-c55f70813ddc').thema(thema).entry('e Nähe (Sg.)').translate('proximité').example('Elmshorn liegt in der Nähe von Hamburg.').get());
        entries.push(new Builder().id('58a26f7f-9e48-435e-bfd2-10426badacc5').thema(thema).entry('nämlich').translate(["c'est que", 'en effet', 'à savoir']).example('Ich habe es nicht gekauft, es war nämlich sehr teuer.').get());
        entries.push(new Builder().id('a49e5fca-2a6d-482e-af77-2882f70ca829').thema(thema).entry('neben').translate("à côté d'autres choses").example(['Petra sitzt neben mir.', 'Die Bäckerei ist direkt neben dem Supermarkt.']).get());
        entries.push(new Builder().id('185b09ac-0e0e-40cd-8406-081e9d5a7633').thema(thema).entry('nennen').translate('appeler qn./qc.').example('Ich heiße Elisabeth, aber alle nennen mich Betty.').get());
        entries.push(new Builder().id('ff7b4f75-9053-48db-9c67-81eb4e192995').thema(thema).entry('nett').translate(['gentil(le)', 'sympathique']).example(['Wie findest du Maria?', '– Sie ist sehr nett.']).get());
        entries.push(new Builder().id('dba94f25-9d83-43fb-a090-151b052be068').thema(thema).entry('e Nudel, n').translate('nouille').example('Heute gibt es Nudeln.').get());
/*
        entries.push(new Builder().id('de7a46de-922d-4484-a74c-82483ae71c03').thema(thema).entry('r Nachbar, -n, e Nachbarin, -nen').example('Die Nachbarn hier im Haus sind sehr nett.').get());
        entries.push(new Builder().id('a187d313-9861-4b4b-ac23-7fd519cf2f07').thema(thema).entry('e Nase, -n').example('Er hat blaue Augen und eine große Nase.').get());
        entries.push(new Builder().id('8396af3b-1e40-41f2-9c81-d0685c45bd1f').thema(thema).entry('nass').example('Die Straßen sind vom Regen ganz nass.').get());
        entries.push(new Builder().id('f5529841-b349-44dd-a35f-d6adacaade0a').thema(thema).entry('e Natur, -en').example('Er ist am liebsten draußen in der freien Natur.').get());
        entries.push(new Builder().id('34d850f8-8fd9-44a5-b618-982476a7cdaf').thema(thema).entry('natürlich').example(['Kann ich hier schlafen?', '– Ja, natürlich.']).get());
        entries.push(new Builder().id('6ac915e2-1efa-4dc0-bc15-b25b3316aba4').thema(thema).entry('negativ').example('Sieh das nicht so negativ!').get());
        entries.push(new Builder().id('5cdc5241-2128-4435-9072-705051ed9466').thema(thema).entry('nervös').example('In Prüfungen bin ich immer so nervös.').get());
        entries.push(new Builder().id('f8836461-c803-40fa-a77b-baaf346de94b').thema(thema).entry('niemand').example('Kann mir niemand helfen?').get());
        entries.push(new Builder().id('3c33bc00-7f83-4538-a552-b589aed81520').thema(thema).entry('e Note, -n').example(['Hast du gute Noten in der Schule?', 'Die Noten liegen auf dem Klavier.']).get());
        entries.push(new Builder().id('9634b395-fc10-4025-ae53-448c94ae5eb0').thema(thema).entry('notieren').example(['Habt ihr alles notiert?', 'Notiert euch den Termin.']).get());
        entries.push(new Builder().id('5c04a3c6-6c3c-403d-9225-f3ce5f5696df').thema(thema).entry('nötig').example('Das brauchen wir nicht, das ist nicht nötig.').get());
        entries.push(new Builder().id('d4871830-bce9-4666-b5a5-2b57d7795e76').thema(thema).entry('nützlich').example('Du musst Sprachen lernen, das ist immer nützlich.').get());
        */
// /* Double */        entries.push(new Builder().id('4eb906df-f1b8-4830-b420-8e533614e594').thema(thema).entry('nach').example(['Wohin fährst du?', '– Nach Berlin.', 'Nach der Schule mache ich meine Hausaufgaben.', 'Es ist schon fünf nach eins.']).get());
// /* Double */        entries.push(new Builder().id('83e4501c-ebdc-4b94-9e49-52d619ade335').thema(thema).entry('nächste').example(['Wann kommst du wieder?', '– In der nächsten Woche.']).get());
// /* Double */        entries.push(new Builder().id('c7d85d59-ac19-4e53-bf21-39102ac91cdc').thema(thema).entry('r Name, -n').example('Mein Name ist Peter Niemöller.').get());
// /* Double */        entries.push(new Builder().id('325ae852-3e4a-49f6-baa7-fd83dd62667a').thema(thema).entry('nehmen').example(['Nehmen Sie den Bus zum Marktplatz!', 'Nimm noch ein Stück Kuchen.']).get());
// /* Double */        entries.push(new Builder().id('b93420b1-629f-4723-91d6-afbd13e945ca').thema(thema).entry('nein').example(['Kommst du mit?', '– Nein, leider nicht.']).get());
// /* Double */        entries.push(new Builder().id('bba322eb-3b78-44a0-b925-85c01d1a69de').thema(thema).entry('neu').example(['Ist der Computer neu?', 'Mein Auto ist noch neu.']).get());
// /* Double */        entries.push(new Builder().id('c4fe7ed0-9dda-4dfd-9d97-285a4bcc8028').thema(thema).entry('nicht').example(['Ist das gut?', '– Nein, es gefällt mir nicht.']).get());
// /* Double */        entries.push(new Builder().id('d5573e20-44f0-4e56-861b-2cecfe06647f').thema(thema).entry('nichts').example('Ich möchte nichts essen.').get());
// /* Double */        entries.push(new Builder().id('23959170-b7bc-4993-86f9-c1daaf9d32f0').thema(thema).entry('nie').example('Ich war noch nie in Frankreich.').get());
// /* Double */        entries.push(new Builder().id('09f7f708-0c88-470d-9226-e250e8dda65b').thema(thema).entry('noch').example(['Jetzt muss ich noch Hausaufgaben machen.', 'Vielleicht kommt er noch.']).get());
// /* Double */        entries.push(new Builder().id('4059f6a6-e5aa-42c0-a947-608f68923932').thema(thema).entry('normal').example(['Ich fühle mich schlecht.', '– Das ist normal. Du bist krank.']).get());
// /* Double */        entries.push(new Builder().id('fd4fc344-4471-4911-a5ca-9ab7b839931a').thema(thema).entry('e Nummer, n').example(['Bitte, sag mir deine Telefonnummer.', 'Können Sie mir Ihre Nummer geben?', 'Sie haben Zimmer Nummer 14.']).get());
// /* Double */        entries.push(new Builder().id('6b4e3037-f240-4fea-ab0e-c1425f6c4c78').thema(thema).entry('nur').example(['Ich möchte nur ein Glas Wasser.', 'Er ist nur heute in der Stadt.']).get());
        return entries;
    }

    createOEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'O'];
        entries.push(new Builder().id('7113b1cb-4c99-4f1c-b490-f87461f9d0bb').thema(thema).entry('s Ohr, -en').translate('oreille').example('Er hat große Ohren und eine kleine Nase.').get());
        entries.push(new Builder().id('38d2ebb6-0200-468e-ac25-f0a6159c3603').thema(thema).entry('r Ohrring, -e').translate("boucle d'oreille").example('Sie trägt einen kleinen Ohrring.').get());
        entries.push(new Builder().id('65d533ad-a233-41bd-ac73-37824bbdae0d').thema(thema).entry('e Oper, -n').translate('opéra').example(['Heute Abend gehen wir in die Oper.', 'Dies ist eine Oper von Mozart.']).get());

        /*
        entries.push(new Builder().id('6b40c2e8-b9ee-48f9-a13a-102e83ab0481').thema(thema).entry('offen').example(['Das Fenster ist offen, kannst du es bitte schließen?', 'Die Geschäfte sind bis 20.00 Uhr offen.']).get());
        entries.push(new Builder().id('aa81b8de-673a-4a29-a009-0931cef3df4e').thema(thema).entry('e Operation, -en').example('Ich muss ins Krankenhaus: Die Operation ist nötig.').get());
        entries.push(new Builder().id('e096c222-73aa-4ec9-b980-46ff15750924').thema(thema).entry('e Orange, -n').example('Ich kaufe drei Kilo Orangen.').get());
        entries.push(new Builder().id('8e5bdbb5-1232-49d0-803a-efec18118fbb').thema(thema).entry('organisieren').example('Ich organisiere das Fest. Ich habe also viel zu tun.').get());
        */
// /* Double */        entries.push(new Builder().id('35139d21-aab0-4a1f-a061-0ec06c4cf3e2').thema(thema).entry('oben').example('Oben auf dem Berg ist ein Restaurant.').get());
// /* Double */        entries.push(new Builder().id('ea8467cf-e1a1-467b-ae62-8716211e7822').thema(thema).entry('s Obst (Sg.)').example('Wir essen immer viel Obst: Äpfel, Bananen ...').get());
// /* Double */        entries.push(new Builder().id('feb91287-5e08-4f7e-9065-0eb8aac6d0bd').thema(thema).entry('oder').example('Trinkst du Tee oder Kaffee?').get());
// /* Double */        entries.push(new Builder().id('6be7d982-b9cd-4515-b270-7aa3e836fb95').thema(thema).entry('öffnen').example('Kannst du bitte die Tür öffnen? Die Geschäfte sind am Sonntag geöffnet.').get());
// /* Double */        entries.push(new Builder().id('442b8fce-349a-4a40-b103-462451ca2104').thema(thema).entry('oft').example('Wir gehen im Sommer oft im Park spazieren.').get());
// /* Double */        entries.push(new Builder().id('8c0a6d5f-6d4d-4449-baaf-7a9e70fd278d').thema(thema).entry('ohne').example(['Ein Sonntag ohne meine Freunde ist langweilig.', 'Ich trinke meinen Kaffee ohne Zucker.']).get());
// /* Double */        entries.push(new Builder().id('7ae81ba6-c4db-4862-832c-d38fd45960e3').thema(thema).entry('e Ordnung, -en').example(['Das ist in Ordnung, kein Problem.', 'Kannst du hier nicht Ordnung machen?']).get());
// /* Double */        entries.push(new Builder().id('2575f96d-7467-40d8-b594-c67deb7103f6').thema(thema).entry('r Ort, -e').example(['Dieser Ort hat 3000 Einwohner.', 'Dieser Ort liegt in den Bergen.']).get());
        return entries;
    }

    createPEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'P'];
        entries.push(new Builder().id('17c56ac4-38dc-4a70-82b1-3af260ef6af0').thema(thema).entry('s Päckchen, -').translate(['petit colis', 'paquet']).example('Ist das Päckchen von Tante Claudia endlich angekommen?').get());
        entries.push(new Builder().id('cb3c20f8-4f4d-49e3-a716-0d4e67abe431').thema(thema).entry('s Paket, -e').translate(['paquet', 'colis']).example('Ich muss das Paket zur Post bringen.').get());
        entries.push(new Builder().id('c43cd56d-f277-4aa7-a163-ba3cad24b41c').thema(thema).entry('passen').translate('convenir à qn.').example('Das Kleid passt mir nicht mehr. Es ist zu klein.').get());
        entries.push(new Builder().id('cc61c353-fbbd-40db-9b6e-6f5a37e688ae').thema(thema).entry('passieren').translate(['se passer', 'se produire']).example(['Was passiert in der Geschichte?', 'Ist dir etwas passiert?']).get());
        entries.push(new Builder().id('beeda51c-be7c-49cc-85a8-357f2ab861a8').thema(thema).entry('s Pech (Sg.)').translate(['poisse', 'malchance', 'malheur']).example(['Das war wirklich Pech!', 'Ich habe Pech gehabt.']).get());
        entries.push(new Builder().id('2c406c5a-ff5e-46b8-91a6-cc69cfb76eb4').thema(thema).entry('s Pferd, -e').translate('cheval').example('Ich möchte so gern ein Pferd haben! Ich reite sehr gern.').get());
        entries.push(new Builder().id('a537ffe9-12e5-4457-8075-ed6375ece41a').thema(thema).entry('s Plakat, -e').translate(['affiche', 'écriteau', 'poster']).example('Was steht auf dem Plakat?').get());
        entries.push(new Builder().id('8e6ce59c-fd4f-4d43-a9a2-3cf2be1f8980').thema(thema).entry('plus').translate('plus').example('Sieben plus drei ist zehn.').get());
        entries.push(new Builder().id('944eb7ed-b25b-4132-8e91-839fab0f5b2e').thema(thema).entry('prima').translate(['chouette', 'épatant(e)']).example(['Ich finde deine Idee prima!', 'Was können wir tun? Hast du eine Idee?']).get());
/*
        entries.push(new Builder().id('a963caee-b601-4754-9d75-a25bd56621c0').thema(thema).entry('s Paar, -e').example(['Karla und Uwe sind ein Liebespaar.', 'Ich brauche ein Paar Schuhe.']).get());
        entries.push(new Builder().id('c36ab694-c111-4d4c-9022-892d121530ef').thema(thema).entry('ein paar').example('Wir waren ein paar Tage am Meer.').get());
        entries.push(new Builder().id('2e9b47ff-0269-48e2-96e1-f3a329750793').thema(thema).entry('packen').example('Hast du den Koffer schon gepackt?').get());
        entries.push(new Builder().id('34d7dd90-d864-4037-a4cd-21e66e358438').thema(thema).entry('r Park, -s').example('Wir gehen gern im Park spazieren.').get());
        entries.push(new Builder().id('cbd7c718-17eb-40e3-9fac-259a04db6e97').thema(thema).entry('e Person, -en').example('Es kostet drei Euro pro Person.').get());
        entries.push(new Builder().id('9ced5587-ada3-4576-a507-d8fdfdd75748').thema(thema).entry('e Pflanze, -n').example('In unserem Garten sind viele Pflanzen.').get());
        entries.push(new Builder().id('4488a0b3-43e3-47cd-b62e-6e60089b1341').thema(thema).entry('e Pizza, -en').example('Heute gibt es bei uns Pizza mit Tomaten und Käse.').get());
        entries.push(new Builder().id('f59d1a24-6d6f-4a5d-a51e-c4c80fb94062').thema(thema).entry('planen').example('Wir planen gerade unsere Ferien.').get());
        entries.push(new Builder().id('4d142463-1872-48a4-bbf5-2e77c8c8e541').thema(thema).entry('plötzlich').example('Plötzlich war das Licht aus.').get());
        entries.push(new Builder().id('952750b6-aa3c-4524-ac3d-3d7cfda4c1c4').thema(thema).entry('positiv').example(['Alles wird gut. Denk positiv!', 'Das ist ein sehr positives Ergebnis.']).get());
        entries.push(new Builder().id('7d00be63-3956-422d-b310-415038b9f573').thema(thema).entry('s Poster, -').example(['Was sind das für Poster?', '– Ich bin Fan vom FC Bayern.']).get());
        entries.push(new Builder().id('8c0665fd-e7aa-4241-927b-9032f5d7fe0e').thema(thema).entry('e Postkarte, -n').example('Ich schreibe dir aus dem Urlaub eine Postkarte.').get());
        entries.push(new Builder().id('e7fc38ed-74f0-45a8-a881-260ea70c50e1').thema(thema).entry('praktisch').example('Diese Maschine ist sehr praktisch.').get());
        entries.push(new Builder().id('06541e78-75e5-46dc-a3e6-286ce16c05f8').thema(thema).entry('pro').example('Das macht 20 Euro pro Person.').get());
        entries.push(new Builder().id('11f0c67b-61be-4a36-907d-1de1ec5f3929').thema(thema).entry('probieren').example(['Kann ich das Kleid probieren?', 'Möchtest du den Kuchen probieren?']).get());
        entries.push(new Builder().id('0a5d3fcf-13a3-4098-b544-1c128efa14ce').thema(thema).entry('s Programm, -e').example(['Wir machen gerade ein Programm für die Klassen-reise.', 'Das Programm im Radio ist schlecht.']).get());
        entries.push(new Builder().id('062cc521-059c-4d0e-aff8-01347625e9ff').thema(thema).entry('s Projekt, -e').example('Wir arbeiten in der Schule an einem Projekt über die Umwelt.').get());
        entries.push(new Builder().id('a9407cc7-140b-42c9-a04b-2713b90d6d2c').thema(thema).entry('r Pullover, -').example('Du brauchst keinen Pullover, es ist warm.').get());
        entries.push(new Builder().id('8593d157-7a69-4bd5-972a-17ed24ce88d5').thema(thema).entry('putzen').example('Ich muss noch das Bad putzen.').get());
        entries.push(new Builder().id('9922ab34-a0eb-4e97-b41e-7877f94f9df0').thema(thema).entry('s Puzzle, -s').example('Das ist ein Puzzle mit 5000 Teilen.').get());
        */
// /* Double */        entries.push(new Builder().id('fcf49638-6249-46d9-9fad-a480060ea6da').thema(thema).entry('s Papier, -e').example('Kann ich ein Blatt Papier haben. Ich will einen Brief schreiben.').get());
// /* Double */        entries.push(new Builder().id('b0224857-c6d8-4aa6-acec-b60f4bcfde92').thema(thema).entry('e Party, -s').example('Die Party war toll.').get());
// /* Double */        entries.push(new Builder().id('b49178f9-16fc-49e4-9566-eab2c6bdceef').thema(thema).entry('e Pause, -n').example(['Du arbeitest zu viel. Mach doch eine Pause.', 'Von 12.00 bis 12.30 Uhr machen wir Mittagspause.']).get());
// /* Double */        entries.push(new Builder().id('9875f340-4c50-4496-ae18-d6559b6a2910').thema(thema).entry('r Plan, ä, -e').example(['Wie findest du meinen Plan?', 'Hast du einen Stadtplan von Berlin?', 'Ich brauche noch einen Fahrplan für den Bus.']).get());
// /* Double */        entries.push(new Builder().id('633a526e-e83f-4ea9-8de9-a53e3eb27e14').thema(thema).entry('r Platz, ä, -e').example(['Das ist mein Platz.', 'In meiner Wohnung ist wenig Platz.', 'Ist der Platz noch frei?']).get());
// /* Double */        entries.push(new Builder().id('6a231e04-be01-4011-812a-40a207035c94').thema(thema).entry('e Pommes frites (Pl.)').example(['Wie willst du die Pommes frites?', '– Mit Ketchup.']).get());
// /* Double */        entries.push(new Builder().id('17b2fbea-74fb-4497-a581-32a89b20fb76').thema(thema).entry('e Post (Sg.)').example('Ich bringe die Briefe zur Post.').get());
// /* Double */        entries.push(new Builder().id('f3838a09-d926-46b8-973f-826ba3d0f479').thema(thema).entry('r Preis, -e').example(['Die Preise für Autos sind ziemlich hoch.', 'Der erste Preis im Quiz ist eine Reise nach Paris.']).get());
// /* Double */        entries.push(new Builder().id('04b7c632-d87d-4452-8498-d47337f5aa78').thema(thema).entry('s Problem, -e').example(['Hast du Probleme mit deinen Eltern?', 'Ich habe ein Problem mit der Grammatik.']).get());
// /* Double */        entries.push(new Builder().id('43dcc8b6-261d-496c-bffb-29c043d07fbd').thema(thema).entry('r Prospekt, -e').example('Schicken Sie mir bitte einen Prospekt von Ihrem Hotel ...').get());
// /* Double */        entries.push(new Builder().id('70fe92e6-28f6-411a-af25-51426fadf10b').thema(thema).entry('pünktlich').example('Kommt bitte pünktlich um 18.00 Uhr nach Hause!').get());
        return entries;
    }

    createQEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Q'];
        entries.push(new Builder().id('3722120f-a3e7-41ea-95aa-27fbd062a9c3').thema(thema).entry('r Quatsch (Sg.)').translate(['balivernes', 'sottise', 'foutaise']).example('Ich finde, das ist nur Quatsch!').get());
        entries.push(new Builder().id('9947f705-4e6f-4d2c-9552-4c2df9810bd4').thema(thema).entry('quer').translate(['à travers', 'en travers', 'en diagonale']).example('Im Sommer reisen wir quer durch Deutschland.').get());
        entries.push(new Builder().id('fde1527f-62b6-4d30-80e1-9f914aa7a5e7').thema(thema).entry('s Quiz (Sg.)').translate('quiz').example('Das ist ein Quiz für Kinder.').get());
        return entries;
    }

    createREntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'R'];
        entries.push(new Builder().id('5a961b4b-7076-4227-b3ba-c76fac294bea').thema(thema).entry('r Radiergummi, -s').translate('gomme').example('Gibst du mir deinen Radiergummi? Ich muss meine Antwort korrigieren.').get());
        entries.push(new Builder().id('24e9dd71-324a-49ce-9815-4e04d36da706').thema(thema).entry('raten').translate(['deviner qc.', 'conseiller qc. à qn.']).example(['Das ist ein Quiz, man muss die Städte raten.', 'Ich weiß die Antwort nicht. Ich muss raten.']).get());
        entries.push(new Builder().id('cde5e9dd-9dbf-4109-b6f2-6ca5a2be6771').thema(thema).entry('s Rätsel, -').translate(['devinette', 'énigme', 'mystère']).example('Ich finde das Rätsel zu schwierig.').get());
        entries.push(new Builder().id('e938e230-6bf3-4499-a41a-ab41b521d043').thema(thema).entry('rechnen').translate('calculer (qc.)').example('Ich rechne das mit dem Taschenrechner.').get());
        entries.push(new Builder().id('9cfa38d5-fc7b-4a10-9c85-1ec3cf0e7c5f').thema(thema).entry('reden').translate('parler (avec qn. de qc.)').example('Sie reden immer so viel./ Er redet immer nur von Autos.').get());
        entries.push(new Builder().id('57b3327c-e048-46e4-a384-b1b49615663e').thema(thema).entry('e Reihe, en').translate(['rangée', 'ligne', 'rang', 'série']).example(['Ich sitze in der ersten Reihe.', 'Dies ist Reihe fünf.', 'Jetzt bin ich an der Reihe.']).get());
        entries.push(new Builder().id('d04bf040-83f9-4f40-b5c7-0ff677ac5a9c').thema(thema).entry('reinkommen').translate('entrer').example(['Darf ich reinkommen?', '– Ja bitte, kommen Sie rein.']).get());
        entries.push(new Builder().id('6374dd9a-4a60-4b5f-be89-6ac9535ad176').thema(thema).entry('reiten').translate('monter à cheval').example('Ich habe ein Pferd. Reiten ist mein Hobby.').get());
        entries.push(new Builder().id('0555dc27-5982-47f3-8eee-7169a256751a').thema(thema).entry('r Ring, -e').translate(['bague', 'anneau']).example('Sie trägt viele Ringe.').get());
        entries.push(new Builder().id('1116480e-f57c-45b5-adf7-c14ec6dc1782').thema(thema).entry('rufen').translate('appeler qn.').example(['Meine Mutter hat mich gerufen, darum bin ich nach Hause gegangen.', 'Ein Unfall! Wir müssen einen Arzt rufen!']).get());
        entries.push(new Builder().id('143ed5a8-4488-41f1-ad3c-1dc6006d3f84').thema(thema).entry('e Rundfahrt, -en').translate(['tour', 'circuit']).example('Wir machen eine Rundfahrt durch die Stadt.').get());
/*
        entries.push(new Builder().id('3b677a11-f9d3-4db0-8e23-b0a4af86d25a').thema(thema).entry('s Rad (s Fahrrad), ä, -er').example('Ich fahre mit dem Rad in die Schule.').get());
        entries.push(new Builder().id('8825f670-2e9b-4b94-89dd-80f1e47aa8de').thema(thema).entry('s Radio, -s').example('Im Radio spielen sie gute Musik.').get());
        entries.push(new Builder().id('0c1a4ef1-4c95-4096-b7f7-05e90a9c32d7').thema(thema).entry('e Radtour, -en').example('Im Sommer machen wir eine Radtour nach Potsdam.').get());
        entries.push(new Builder().id('6a1c212e-7287-481b-b8aa-7060600ee3ec').thema(thema).entry('s Rathaus, ä, -er').example('Im Rathaus bekommst du Prospekte über die Stadt.').get());
        entries.push(new Builder().id('069493fe-18e8-4541-ad3c-0591548c3afa').thema(thema).entry('s Rathaus,ä,-er').example('Der Raum hat zwei Fenster.').get());
        entries.push(new Builder().id('4c5a56d0-1fb5-46bb-a607-0d8a3cc9ec1a').thema(thema).entry('recht haben').example('Du hast recht. Meine Antwort ist falsch.').get());
        entries.push(new Builder().id('c9522dcf-346b-494c-9459-805ffd6395f4').thema(thema).entry('reich').example('Die Menschen sind hier nicht reich. Sie sind arm.').get());
        entries.push(new Builder().id('acfe83af-76ce-462d-aac5-81e690a560a4').thema(thema).entry('r Rest, -e').example(['Es ist noch ein Rest von dem Kuchen da.', 'Den Rest der Arbeit kannst du morgen machen.']).get());
        entries.push(new Builder().id('5c039c8e-5162-43e0-bda4-747da70c4401').thema(thema).entry('romantisch').example('Der Liebesfilm ist sehr romantisch.').get());
        entries.push(new Builder().id('477a8024-da63-46a9-8ca5-fdd27df551ef').thema(thema).entry('r Rücken, -').example(['Was tut dir weh?', '– Ich habe Schmerzen im Rücken.']).get());
        entries.push(new Builder().id('8c4010d8-e7e4-4d89-98cd-07d7d19cb1ac').thema(thema).entry('r Rucksack, ä, -e').example(['Hast du deinen Koffer gepackt?', '– Nein, ich brauche nur einen Rucksack.']).get());
        entries.push(new Builder().id('1dd3985c-1a1a-49e5-af22-7dcb82573ac4').thema(thema).entry('e Ruhe (Sg.)').example(['Er ist krank, er braucht viel Ruhe.', 'Ich brauche Ruhe. Ich muss lernen.']).get());
*/
// /* Double */        entries.push(new Builder().id('d0084d62-f416-47d1-8182-2a7072ef3ba9').thema(thema).entry('Rad fahren').example(['Kannst du Rad fahren?', '– Ja, aber ich habe kein Fahrrad.']).get());
// /* Double */        entries.push(new Builder().id('9e506e7b-f855-4978-90e4-5b24bd8ecc56').thema(thema).entry('rauchen').example('Stört es Sie, wenn ich rauche?').get());
// /* Double */        entries.push(new Builder().id('17ad0edf-6d71-48be-bf38-918bfbb02f52').thema(thema).entry('rechts').example('Hier rechts ist unsere Schule, links der Supermarkt.').get());
// /* Double */        entries.push(new Builder().id('1b657fbf-f250-47d7-b594-fc60d09aeb8a').thema(thema).entry('r Regen (Sg.)').example('Morgen soll es Regen geben.').get());
// /* Double */        entries.push(new Builder().id('a3af6760-52f3-401c-9b5f-87f50d9e41a7').thema(thema).entry('regnen').example('Wenn es regnet, bleibe ich zu Hause.').get());
// /* Double */        entries.push(new Builder().id('567980dd-aa5d-4a69-b475-69f284b2acca').thema(thema).entry('r Reis (Sg.)').example('Wir essen heute Hühnchen mit Reis.').get());
// /* Double */        entries.push(new Builder().id('73be443b-9ada-4f44-adf0-ec53a6e351fa').thema(thema).entry('e Reise, -n').example('Wir machen eine Reise nach Australien.').get());
// /* Double */        entries.push(new Builder().id('3a7e429f-a660-4c35-ae18-433ba342a054').thema(thema).entry('e Reparatur, -en').example('Der Motor ist kaputt. Die Reparatur ist sehr teuer.').get());
// /* Double */        entries.push(new Builder().id('0b6c9132-3bb6-4de9-9466-ecc658381fa3').thema(thema).entry('reparieren').example('Mein Rad ist kaputt, aber mein Vater kann es reparieren.').get());
// /* Double */        entries.push(new Builder().id('313efefe-646f-4c33-bb01-d0102da358b5').thema(thema).entry('s Restaurant, -s').example('Wir essen heute im Restaurant').get());
// /* Double */        entries.push(new Builder().id('e40e82e4-ce16-4ae6-bd53-3a8bc442a4b6').thema(thema).entry('ruhig').example(['Seid mal bitte ruhig! Ich muss telefonieren.', 'Ich suche eine ruhige Wohnung.']).get());
        return entries;
    }

    createSEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'S'];
        entries.push(new Builder().id('6b0a0af1-b21b-4f21-9eb6-138e3943c481').thema(thema).entry('sauer').translate(['aigre', 'acide    ']).example(['Die Milch ist sauer.', 'Der Apfel ist mir zu sauer.']).get());
        entries.push(new Builder().id('79d43991-d2a5-40fc-8b64-85aa3b699a15').thema(thema).entry('schädlich').translate(['nocif, nocive', 'nuisible', 'dommageable']).example('Zigaretten sind sehr schädlich.').get());
        entries.push(new Builder().id('ac1867a2-57df-4b32-8ff0-2b526b99fdec').thema(thema).entry('schaffen').translate('arriver à qc.').example(['Du kannst es bestimmt schaffen!', 'Soll ich dir helfen?', '– Nein, ich schaffe es allein.']).get());
        entries.push(new Builder().id('193bb442-b776-4870-a49c-57957f884cd6').thema(thema).entry('schenken').translate('offrir qc. à qn.').example('Was kann ich Anna zum Geburtstag schenken?').get());
        entries.push(new Builder().id('bbad7bd0-5b73-49f4-86f7-6442f28baa73').thema(thema).entry('e Schere, -n').translate('ciseaux').example('Hast du eine Schere? Ich muss dieses Bild ausschneiden.').get());
        entries.push(new Builder().id('2d27c8dc-da01-40b8-8f9a-e33c3fd54455').thema(thema).entry('scheußlich').translate(['infect(e)', 'dégueulasse', 'abominable', 'horrible']).example(['Das Essen hier ist scheußlich!', 'Das Wetter ist scheußlich!']).get());
        entries.push(new Builder().id('d65edb2a-5ea8-4569-9ed1-679ad59b1958').thema(thema).entry('schimpfen').translate(['gronder qn.', 'se fâcher contre qn.', 'rouspéter', 'râler']).example('Der Lehrer hat mit mir geschimpft.').get());
        entries.push(new Builder().id('d894a77d-a21e-4495-af24-981554a03679').thema(thema).entry('schrecklich').translate(['horriblement', 'affreux, affreuse', 'terrible', 'effrayant(e)', 'atroce', 'épouvantable']).example('Ich bin schrecklich nervös.').get());
        entries.push(new Builder().id('fb01d8e2-deea-45d2-9cf7-6e3d70103033').thema(thema).entry('r Schreibblock, ö, -e').translate('bloc-notes').example('Ich brauche einen neuen Schreibblock für die Schule.').get());
        entries.push(new Builder().id('4110c63f-da99-45e0-b36e-47114615247f').thema(thema).entry('schwach').translate('faible').example(['Deine Leistungen sind sehr schwach.', 'Für diese Arbeit bin ich zu schwach.']).get());
        entries.push(new Builder().id('5c1e9e58-5894-48e3-939f-96abe4311c10').thema(thema).entry('e Schwimmsachen (Pl.)').translate('affaires de natation').example('Wir fahren an den See. Vergesst nicht die Schwimmsachen mitzunehmen.').get());
        entries.push(new Builder().id('fc61bfb4-2752-4439-8a58-b1b2593d0aa7').thema(thema).entry('e Sendung, -en').translate('émission').example('Um 18 Uhr kommt meine Lieblingssendung im Fernsehen.').get());
        entries.push(new Builder().id('aafb674c-f50c-4180-98e3-a0bd2ed1b8fe').thema(thema).entry('sogar').translate(['même', 'voire même', 'même que']).example('Er hat mir sogar einen Brief geschrieben.').get());
        entries.push(new Builder().id('d4cb825d-c6cc-414e-ab9b-21fe6527adbd').thema(thema).entry('sonst').translate(['sinon', 'autrement', 'sans quoi', 'faute quoi']).example('Brauchen Sie sonst noch etwas?').get());
        entries.push(new Builder().id('852727a6-f60a-457f-908c-f34dd7654a6e').thema(thema).entry('e Soße, -n').translate('sauce').example('Zum Braten gibt es Kartoffeln und Soße.').get());
        entries.push(new Builder().id('4217300e-ad2a-4db1-b56c-4955239a5835').thema(thema).entry('sparen').translate(['économiser qc.', 'épargner qc.']).example('Sie hat viel Geld gespart. Jetzt kann sie ein Auto kaufen.').get());
        entries.push(new Builder().id('c3e9ae14-4b3d-49d8-b9cc-56a370e69e42').thema(thema).entry('steigen').translate(['monter', 'augmenter', 'être en hausse']).example(['Wir steigen auf den Berg.', 'Bitte steigen Sie jetzt in das Auto.']).get());
        entries.push(new Builder().id('480f684f-38fc-4d7d-8004-ff9e928cc910').thema(thema).entry('stimmen').translate(['être vrai', 'voter  ']).example('Das stimmt nicht. Das ist falsch.').get());
        entries.push(new Builder().id('e1f45ce7-d6a1-4d64-b3af-4a98792f4eb8').thema(thema).entry('streiten (sich)').translate('se disputer avec qn.').example(['Wir streiten leider sehr oft.', 'Ich streite mich oft mit meinem Bruder.']).get());
        entries.push(new Builder().id('eeaf7ddf-8966-4ab4-a2fa-bb9ca6d5c791').thema(thema).entry('Streit haben').translate(['avoir une dispute']).example(['Habt ihr schon wieder Streit?', 'Ich habe Streit mit meiner Schwester.']).get());
        entries.push(new Builder().id('1ac9a35b-8ead-475f-bb19-8b5984068a6d').thema(thema).entry('streng').translate(['sévère', 'strict(e)', 'rigide', 'dur(e)']).example(['Der Lehrer ist streng.', 'Meine Eltern sind sehr streng. Sie erlauben uns einfach nichts.']).get());
        entries.push(new Builder().id('7db342e4-7bce-4de5-adeb-464ede63b2b7').thema(thema).entry('stressig').translate('stressant(e)').example('Ich finde diese Situation stressig. Ich habe zu viel zu tun.').get());
        entries.push(new Builder().id('e081b725-b41b-437a-849e-6cbdf03c476e').thema(thema).entry('süß').translate(['sucré(e)', 'doux, douce', 'mignon(ne)', 'chou']).example(['Der Kuchen ist zu süß.', 'Der neue Mathelehrer ist wirklich süß!']).get());
        entries.push(new Builder().id('e15c7e7a-b640-495d-a90d-62e983b6021b').thema(thema).entry('e Süßigkeiten (Pl.)').translate(['friandises', 'douceurs', 'sucrerie', 'confiserie']).example('Ich esse so gern Süßigkeiten, leider sind sie nicht gesund.').get());

        /*
        entries.push(new Builder().id('b8b2a304-7674-4aea-bdd0-b4bcefb32a9a').thema(thema).entry('e Sache, -n').example(['Wo sind meine Schulsachen?', 'Das ist eine tolle Sache.', 'Pack deine Sachen und komm mit!']).get());
        entries.push(new Builder().id('67658d90-9b50-4e5f-afb5-c5f5cdd631e0').thema(thema).entry('sauber').example('Dein Zimmer ist sehr sauber und ordentlich.').get());
        entries.push(new Builder().id('d6a0d72e-5983-49a9-95fd-568c6f2158f9').thema(thema).entry('schade').example(['Tut mir leid, ich kann nicht kommen.', '– Das ist schade!']).get());
        entries.push(new Builder().id('7deb93e5-d85f-42b7-a6ae-2ca9ddb01f46').thema(thema).entry('schicken').example('Ich schicke dir aus dem Urlaub eine Karte.').get());
        entries.push(new Builder().id('dc2d84e6-8cdb-4d16-b5f3-275812a0faf7').thema(thema).entry('s Schiff, -e').example('Sie können mit dem Schiff nach Capri fahren.').get());
        entries.push(new Builder().id('2118a497-e7b5-4c29-9906-78c71d70e921').thema(thema).entry('s Schlafzimmer, -').example('In seinem Schlafzimmer steht ein neues Bett.').get());
        entries.push(new Builder().id('bd600650-0c63-49b8-9584-99d74a38cd4d').thema(thema).entry('s Schloss, ö, -er').example('Wir haben das Schloss Neuschwanstein besichtigt').get());
        entries.push(new Builder().id('bb04995c-e26d-4d95-939b-05585e6b81a2').thema(thema).entry('r Schmerz, -en').example('Ich habe Schmerzen. Ich muss zum Arzt.').get());
        entries.push(new Builder().id('b8a515fa-6c07-4010-aa0c-f2ce4ae721f7').thema(thema).entry('schmutzig').example('Die Küche ist schmutzig. Wer macht sie sauber?').get());
        entries.push(new Builder().id('439bbba1-755f-49b9-bffb-49b270a73973').thema(thema).entry('r Schnee (Sg.)').example('Im Winter gibt es hier viel Schnee.').get());
        entries.push(new Builder().id('6d85f650-f1bd-4bbe-8364-2a9d44248d25').thema(thema).entry('schneiden').example('Sie schneidet den Apfel mit dem Messer.').get());
        entries.push(new Builder().id('eb9bb052-d986-4b39-b8c0-d769cb3c970a').thema(thema).entry('e Schokolade (Sg.)').example(['Schokolade macht glücklich.', 'Ich esse gern Schokolade.', 'Ich trinke im Winter gern eine heiße Schokolade.']).get());
        entries.push(new Builder().id('03483c16-9636-4b8c-ad84-a8fe48e3ae8e').thema(thema).entry('schwierig').example('Ich finde die Hausaufgaben sehr schwierig.').get());
        entries.push(new Builder().id('3abc87d4-aee5-4dd2-93c4-0586ba99a32d').thema(thema).entry('sehr').example(['Ich liebe ihn sehr.', 'Das ist sehr wichtig.']).get());
        entries.push(new Builder().id('cb52dfd2-dad2-4c5c-83fb-5c8bb2953ece').thema(thema).entry('sein, -e').example('Er liebt nur seinen Computer.').get());
        entries.push(new Builder().id('5789c35a-86d5-43c2-a120-7033e979299e').thema(thema).entry('e Seite, -n').example('Das steht auf Seite 23.').get());
        entries.push(new Builder().id('aa3944d1-51d0-4775-b312-5e3ffc09f5d9').thema(thema).entry('selbst').example('Den Kuchen habe ich selbst gebacken.').get());
        entries.push(new Builder().id('38616ec7-3b9b-4da8-88ab-fdda7bcfe0bb').thema(thema).entry('setzen (sich)').example(['Setz dich!', 'Du kannst dich neben Carola setzen.']).get());
        entries.push(new Builder().id('6a8e959a-6d40-4f08-8bb5-3be7b401498a').thema(thema).entry('sicher').example(['Du bist sicher gut in der Schule.', 'Ich bin sicher, es ist richtig.']).get());
        entries.push(new Builder().id('9c8e2d56-554a-41ce-88d0-738e004f4bc3').thema(thema).entry('singen').example('Wir singen in einer Band.').get());
        entries.push(new Builder().id('1c708659-b6cc-457a-b2f7-7fd685add8b0').thema(thema).entry('r Sinn (Sg.)').example(['Die Geschichte hat keinen Sinn.', 'Das hat keinen Sinn.']).get());
        entries.push(new Builder().id('95651e60-2df6-4c80-b743-27e9a9ded79f').thema(thema).entry('e Situation').example('In dieser Situation kann man nichts machen.').get());
        entries.push(new Builder().id('3e6490d1-16cb-451a-8dca-210952f9de7e').thema(thema).entry('r Ski, auch -er').example(['Ich habe neue Ski bekommen.', 'Im Winter fahre ich oft Ski.']).get());
        entries.push(new Builder().id('d4729fe5-451e-4134-b7a5-82ac4a74afd2').thema(thema).entry('e Sorge, -n').example('Ich mache mir Sorgen. Er ruft nicht an.').get());
        entries.push(new Builder().id('4a013836-fb55-4cec-81de-bee1ebeac593').thema(thema).entry('spannend').example('Der Krimi ist sehr spannend.').get());
        entries.push(new Builder().id('5147b11c-7e48-4280-bb0f-f52291f39b22').thema(thema).entry('r Spaß (Sg.)').example(['Wir haben immer viel Spaß zusammen.', 'Viel Spaß!']).get());
        entries.push(new Builder().id('692e707d-10db-4458-b58b-8f244c521040').thema(thema).entry('spazieren gehen').example('Wollen wir mit dem Hund spazieren gehen?').get());
        entries.push(new Builder().id('1a54b31f-67ca-4b03-a97f-c00b75612eea').thema(thema).entry('r Spaziergang, ä, -e').example('Wir machen einen Spaziergang im Park.').get());
        entries.push(new Builder().id('e9da356f-0706-425e-90c8-8e4e18937295').thema(thema).entry('s Spiel, -e').example('Ich kenne ein neues Spiel.').get());
        entries.push(new Builder().id('fa7c2fad-0eab-45c5-92ba-7ac39497b174').thema(thema).entry('r Spielplatz, ä, -e').example('Wir brauchen mehr Spielplätze für Kinder.').get());
        entries.push(new Builder().id('af9b4ed6-67aa-44ea-87a6-9fc558a5cc81').thema(thema).entry('s Spielzeug, -e').example('Die Kinder haben zu viel Spielzeug.').get());
        entries.push(new Builder().id('d9edf2dd-4419-4d8b-93dc-f45ed5b1026d').thema(thema).entry('sportlich').example('Sie trägt sportliche Kleidung. Sie ist sehr sportlich.').get());
        entries.push(new Builder().id('e472a508-a7b0-483d-aaf9-59e2195666ce').thema(thema).entry('r Stadtplan, ä, -e').example('Ich möchte einen Stadtplan von München kaufen.').get());
        entries.push(new Builder().id('11e63e31-de34-4a7e-9665-2ab3929da0a6').thema(thema).entry('stark').example('Ich hatte starke Schmerzen.').get());
        entries.push(new Builder().id('e01b5ca2-9ba4-4c66-bbe7-19e6f1c36c08').thema(thema).entry('stattfinden').example('Das Konzert findet auf dem Marktplatz statt.').get());
        entries.push(new Builder().id('0ccf6331-5a79-43c9-8226-aaee83f57f56').thema(thema).entry('stören').example(['Mein kleiner Bruder stört uns immer.', 'Störe ich dich bei der Arbeit?']).get());
        entries.push(new Builder().id('c6fbda40-ec16-4de5-8e4b-6efc8d9e85c6').thema(thema).entry('r Strand, ä, -e').example('Im Urlaub war ich nur am Strand.').get());
        entries.push(new Builder().id('7e1b6938-dabd-471a-b31e-126100d549bb').thema(thema).entry('r Stress (Sg.)').example('Der Stress in der Schule ist groß.').get());
        entries.push(new Builder().id('c6605641-158b-4cad-aaec-970a84a70817').thema(thema).entry('s Stück, -e').example(['Willst du noch ein Stück Kuchen?', 'Ich nehme zwei Stück Zucker in den Kaffee.']).get());
        entries.push(new Builder().id('ca4dda4c-06db-4157-b1cc-df81de34dd3a').thema(thema).entry('r Student, -en').example('Mein Nachbar ist Student.').get());
        entries.push(new Builder().id('5bb6afe3-1dd4-48f1-9a6f-a7126e638528').thema(thema).entry('e Studentin, -nen').example('Ich bin Studentin. Ich studiere Fremdsprachen an der Universität in Berlin.').get());
        entries.push(new Builder().id('0272e015-6108-4729-8088-489b08993566').thema(thema).entry('r Stuhl, ü, -e').example(['Der Stuhl ist sehr unbequem.', 'Da ist noch ein Stuhl frei. Setz dich!']).get());
        entries.push(new Builder().id('e4aeac40-47f8-4257-a0e3-2b115e971483').thema(thema).entry('r Stundenplan, ä, -e').example('Für dieses Jahr haben wir noch keinen Stundenplan.').get());
        entries.push(new Builder().id('2d784341-dd55-4234-a85c-5f2aac60ea37').thema(thema).entry('super').example(['Ich finde Thomas wirklich super!', 'Die Idee ist super!']).get());
        entries.push(new Builder().id('697d9fc4-9a50-46ee-a502-b9777a7c25f9').thema(thema).entry('r Supermarkt, ä, -e').example('Wir kaufen immer im Supermarkt ein.').get());
        entries.push(new Builder().id('388491a0-0e3a-4b4d-b723-11b970e542db').thema(thema).entry('e Suppe, -n').example('Suppe isst man mit dem Löffel.').get());
        entries.push(new Builder().id('89745331-8188-4b16-aad2-0ce72f5824d5').thema(thema).entry('sympathisch').example('Ich finde Maria nett. Sie ist sehr sympathisch.').get());
*/
// /* Double */        entries.push(new Builder().id('a3a56473-4028-470d-9997-130c756732b8').thema(thema).entry('r Saft, ä, -e').example(['Möchtest du Wasser oder Saft?', '– Einen Apfelsaft, bitte.']).get());
// /* Double */        entries.push(new Builder().id('cff5d189-1ddb-4937-a10f-5cde36194313').thema(thema).entry('sagen').example(['Eva sagt, sie kommt heute nicht.', 'Sag mal, wie geht es dir denn?']).get());
// /* Double */        entries.push(new Builder().id('4b718173-7151-44d3-a35f-67e4651b2c49').thema(thema).entry('r Salat, -e').example('Ich esse abends gern Salat.').get());
// /* Double */        entries.push(new Builder().id('773cbb2a-a698-4ebf-ae99-7034c893670b').thema(thema).entry('s Salz, -e').example('In der Suppe fehlt Salz.').get());
// /* Double */        entries.push(new Builder().id('3ebfe0b9-54b4-481d-9152-5d643a6ef69f').thema(thema).entry('r Schalter, -').example(['Briefmarken bekommen Sie am Schalter.', 'Wo ist der Lichtschalter?']).get());
// /* Double */        entries.push(new Builder().id('2a4d6747-cbea-4b50-b8dd-c3a98ede8616').thema(thema).entry('scheinen').example('Die Sonne scheint.').get());
// /* Double */        entries.push(new Builder().id('0ef066f8-c522-4cbb-8328-21e224f6def6').thema(thema).entry('schlafen').example('Ich bin sehr müde. Heute schlafe ich sicher gut.').get());
// /* Double */        entries.push(new Builder().id('78678de0-b995-461b-8562-68d2b4301d68').thema(thema).entry('schlecht').example(['Mir ist so schlecht.', 'Das Essen hier ist nicht schlecht.']).get());
// /* Double */        entries.push(new Builder().id('b8a12bd0-c37d-4bbf-aae0-fbfa2dfd8e9f').thema(thema).entry('schließen').example(['Schließ bitte das Fenster.', 'Das Geschäft ist schon geschlossen.']).get());
// /* Double */        entries.push(new Builder().id('50a7c701-86d2-4b9a-8c40-85c6f3f43b1e').thema(thema).entry('r Schluss, ü, -sse').example(['Der Schluss der Geschichte ist sehr traurig.', 'Zum Schluss gibt es noch ein Eis.']).get());
// /* Double */        entries.push(new Builder().id('5012f269-b878-49b3-b225-cd2f4f038aab').thema(thema).entry('r Schlüssel, -').example('Ich habe meinen Schlüssel verloren. Wie komme ich jetzt ins Haus?').get());
// /* Double */        entries.push(new Builder().id('38695041-b5d4-45da-8118-5b3ae5fdff38').thema(thema).entry('schmecken').example('Wie schmeckt dir das Essen?').get());
// /* Double */        entries.push(new Builder().id('38f54242-e9eb-4312-a7b5-faaa7b9f19c4').thema(thema).entry('schnell').example(['Antworte schnell!', 'Das Auto fährt schnell.']).get());
// /* Double */        entries.push(new Builder().id('600a6013-0056-4038-907f-85b698296293').thema(thema).entry('schon').example(['Ich habe schon sechs Computerspiele.', 'Ist das Essen schon fertig?']).get());
// /* Double */        entries.push(new Builder().id('1b52c5ac-5ade-4c2c-9a91-b382f1c7c204').thema(thema).entry('schön').example(['Dein Zimmer ist sehr schön und gemütlich.', 'Das Bild ist schön. Es gefällt mir sehr gut.']).get());
// /* Double */        entries.push(new Builder().id('07bc6eff-7984-4025-988d-3dd4d871349a').thema(thema).entry('r Schrank, ä, -e').example('Die Kleider sind im Schrank').get());
// /* Double */        entries.push(new Builder().id('3048a8c2-24ff-4a50-8406-8f667d800307').thema(thema).entry('schreiben').example('Erika schreibt mir jeden Tag einen Brief.').get());
// /* Double */        entries.push(new Builder().id('5d786506-4589-434b-a611-333562ce8b91').thema(thema).entry('r Schuh, -e').example(['Ich habe neue Schuhe gekauft.', 'Zieh die Schuhe aus, wenn du ins Haus gehst.']).get());
// /* Double */        entries.push(new Builder().id('60181795-cad4-4be4-a3a6-237d6634a7da').thema(thema).entry('schwer').example('Meine Tasche ist so schwer.').get());
// /* Double */        entries.push(new Builder().id('877fa935-c9dd-4590-9d0f-18686c542387').thema(thema).entry('s Schwimmbad, ä, -er').example('Im Sommer gehen wir oft ins Schwimmbad.').get());
// /* Double */        entries.push(new Builder().id('418456f3-45ce-4bf6-9468-935caba3049b').thema(thema).entry('schwimmen').example(['Ich kann gut schwimmen.', 'Ich schwimme gern im See.']).get());
// /* Double */        entries.push(new Builder().id('9df90bb5-0dbf-4e08-bcac-7e0614b3e445').thema(thema).entry('r See, -n').example(['Der See ist sehr groß.', 'Wir wohnen am See.', 'Wir fahren zum Ammersee.']).get());
// /* Double */        entries.push(new Builder().id('9a80c263-ab72-4211-9229-fe025391fe34').thema(thema).entry('sehen').example(['Siehst du das große Haus?', '– Ja, wohnst du da?']).get());
// /* Double */        entries.push(new Builder().id('eed11948-6bab-4b8e-bca3-5a028a66db3d').thema(thema).entry('sein').example(['Ich bin 13 Jahre alt.', 'Das ist mein Bruder.', 'Er ist Student.', 'Die Kinder sind im Garten.']).get());
// /* Double */        entries.push(new Builder().id('9d0be63a-fa09-4f9f-8264-a1c400c8cc84').thema(thema).entry('sie').example('Ich glaube, sie findet dich interessant.').get());
// /* Double */        entries.push(new Builder().id('118aee0e-ebf9-4b40-a65b-1bbfec88e1b9').thema(thema).entry('Sie').example('Sind Sie der neue Lehrer? Wie geht es Ihnen?').get());
// /* Double */        entries.push(new Builder().id('dcb9f668-5fc1-4c1a-85cc-324d54a3ee6d').thema(thema).entry('sitzen').example('Er sitzt neben mir.').get());
// /* Double */        entries.push(new Builder().id('a6c74095-10b6-4ca7-9200-7d06bf587dee').thema(thema).entry('so').example(['Ich mache das nicht so.', 'Das schmeckt so scheußlich.', 'Sie ist so alt wie ich.']).get());
// /* Double */        entries.push(new Builder().id('86f5f795-1e43-403c-aac1-739460439ee6').thema(thema).entry('sofort').example(['Antworte bitte sofort!', 'Komm nach der Schule sofort nach Hause.']).get());
// /* Double */        entries.push(new Builder().id('975aa4c4-b45a-4d50-94ce-aa243a5481e7').thema(thema).entry('sollen').example('Was soll ich machen? Wie kann ich dir helfen?').get());
// /* Double */        entries.push(new Builder().id('350f1310-0199-47e1-9ece-1aefc8196d24').thema(thema).entry('e Sonne, -n').example('Die Sonne scheint.').get());
// /* Double */        entries.push(new Builder().id('d5e2cca5-7551-4a78-a7a7-35284cd9c7cc').thema(thema).entry('spät').example(['Mach schnell, es ist spät!', 'Ich komme zu spät.', 'Wie spät ist es?']).get());
// /* Double */        entries.push(new Builder().id('fd678178-c493-4e02-995e-020524dce0af').thema(thema).entry('später').example('Ich mache die Hausaufgaben später. Jetzt habe ichkeine Lust.').get());
// /* Double */        entries.push(new Builder().id('2f09281e-e1b7-4055-80b9-674b31dc484f').thema(thema).entry('spielen').example(['Ich möchte Karten spielen.', 'Ball spielen.', 'Klavier spielen.', 'Tennis spielen.']).get());
// /* Double */        entries.push(new Builder().id('7a1f8b6a-d6d7-474f-9ea2-bfe18bcf4cc1').thema(thema).entry('r Sport (Sg.)').example('Ich mache viel Sport: Fußball, Basketball und Volleyball.').get());
// /* Double */        entries.push(new Builder().id('1e0e50ee-a310-4e47-a83f-018c576c728e').thema(thema).entry('e Sprache, -n').example('Er spricht vier Sprachen: Deutsch, Englisch, Französisch und Italienisch.').get());
// /* Double */        entries.push(new Builder().id('64a4b479-0ca1-4b59-9d59-973b4d531111').thema(thema).entry('sprechen').example(['Sie spricht mit dem Lehrer.', 'Kann ich mit Frau Müller sprechen?']).get());
// /* Double */        entries.push(new Builder().id('ac5a4f72-5e43-40ef-b1da-abbdf9ff7a54').thema(thema).entry('e Stadt, ä, -e').example('Unsere Stadt ist nicht so groß. Sie hat nur 40000 Einwohner.').get());
// /* Double */        entries.push(new Builder().id('6f772943-ccad-45d3-89ec-5da3045825a8').thema(thema).entry('stehen').example(['Was steht in der Zeitung?', 'Die Suppe steht auf dem Tisch.', 'Das kleine Haus hat immer hier gestanden.']).get());
// /* Double */        entries.push(new Builder().id('0390ed26-d427-4217-b56a-6acabea9a3c2').thema(thema).entry('stellen').example('Stell bitte die Tassen auf den Tisch.').get());
// /* Double */        entries.push(new Builder().id('fcd3cfd1-6e27-4088-85bf-7b6bc49d8765').thema(thema).entry('e Straße, -n').example('Wir wohnen in der Goethe-Straße.').get());
// /* Double */        entries.push(new Builder().id('4e25bc8f-592a-4df0-acc9-2ff4e40256db').thema(thema).entry('e Straßenbahn, -en').example('Ich fahre mit der Straßenbahn in die Schule.').get());
// /* Double */        entries.push(new Builder().id('40eb7d2d-b083-41f1-af28-3643b3613f65').thema(thema).entry('studieren').example('Er studiert Chemie an der Universität in Leipzig.').get());
// /* Double */        entries.push(new Builder().id('a824906a-0951-45cf-b3d0-5419294103f9').thema(thema).entry('suchen').example('Ich suche meinen Kugelschreiber. Weißt du, wo er ist?').get());
        return entries;
    }

    createTEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'T'];
        entries.push(new Builder().id('643eaf37-4302-4bc5-a3d8-d1902c653a6f').thema(thema).entry('s Taschengeld (Sg.)').translate('argent de poche').example(['Wie viel Taschengeld bekommt ihr im Monat?', '– 15 Euro.']).get());
        entries.push(new Builder().id('f07633c1-7879-4623-80af-495c5de260fd').thema(thema).entry('r Taschenrechner, -').translate('calculatrice (de poche)').example('Ich rechne das mit dem Taschenrechner.').get());
        entries.push(new Builder().id('3ee8012e-7a67-4d24-a0c3-bb9873209551').thema(thema).entry('tatsächlich').translate('vraiment').example('Willst du das tatsächlich machen?').get());
        entries.push(new Builder().id('f143681e-a38d-47fb-994d-4c68ee83ffb7').thema(thema).entry('teilen').translate(['diviser qc.', 'partager qc.']).example('Wir teilen den Kuchen in 10 Stücke.').get());
        entries.push(new Builder().id('8ba12b77-2efe-44c8-86ff-43e40a93a875').thema(thema).entry('r Teller, -').translate('assiette').example('Ich möchte bitte einen Teller Suppe.').get());
        entries.push(new Builder().id('8773b144-3f68-4ac8-9653-d181a5948c3d').thema(thema).entry('toll').translate(['génial(le', 'formidable', 'fantastique', 'super', 'chouette']).example('In den Ferien war es toll.').get());
        entries.push(new Builder().id('5e2d513a-17bb-41cd-96bc-cee3000e0573').thema(thema).entry('e Torte, -n').translate('gâteau').example('Zum Geburtstag gibt es immer eine große Torte.').get());
        entries.push(new Builder().id('5cd6916b-8689-4bdd-890c-c3c8990d3177').thema(thema).entry('tragen').translate(['porter qc. sur soi', 'porter qc.']).example(['Er trägt kurze Hosen.', 'Soll ich deinen Koffer tragen?']).get());
        entries.push(new Builder().id('31ab2b36-70f8-4730-a40f-e2fc3b89c3f6').thema(thema).entry('trocken').translate('sec, sèche').example('Ich habe mein Kleid gewaschen. Ist es jetzt schon trocken?').get());
        entries.push(new Builder().id('e4026d15-907c-4f5e-95d6-382537e0a755').thema(thema).entry('trösten').translate(['consoler qn.', 'réconforter qn.']).example('Ich war traurig, aber meine Mutter hat mich getröstet.').get());
/*
        entries.push(new Builder().id('bd981c07-9136-4b9f-8629-505c5dbb45e4').thema(thema).entry('e Tasse, -n').example('Ich möchte eine Tasse Tee.').get());
        entries.push(new Builder().id('e93edb0b-4ec1-41a2-9604-3b1e8ef7fc93').thema(thema).entry('teilnehmen').example('Willst du auch am Wettbewerb teilnehmen?').get());
        entries.push(new Builder().id('8ff72aa9-17be-446b-86ec-dd0e8a8b8e2d').thema(thema).entry('Tennis spielen').example('Mein Hobby ist Tennis spielen.').get());
        entries.push(new Builder().id('08b43289-3e66-4465-8203-05d5f51aad6d').thema(thema).entry('r Teppich, -e').example('In meinem Zimmer ist ein roter Teppich.').get());
        entries.push(new Builder().id('7b6f3935-e998-4881-88c7-e02dab620fc8').thema(thema).entry('s Theater, -').example('Gestern waren wir im Theater, es gab ein Stück von Shakespeare.').get());
        entries.push(new Builder().id('bdf3341f-c0fe-428b-87cc-f3d2c3f4fb60').thema(thema).entry('s Tier, -e').example('Ich möchte ein Tier haben: eine Katze oder einen Hund.').get());
        entries.push(new Builder().id('3554c368-358a-4e59-bfc0-38788dd3bf4f').thema(thema).entry('r Titel, -').example('Finde einen Titel für den Text.').get());
        entries.push(new Builder().id('30961873-1a8b-48fc-b01d-9c412481e93f').thema(thema).entry('total').example(['Ist das Buch spannend?', '– Nein, es ist total langweilig.']).get());
        entries.push(new Builder().id('7bee867b-ab3e-4e25-b2d4-bb298fc4a829').thema(thema).entry(['r Tourist, -en', 'e Touristin, -nen']).example('Viele ausländische Touristen kommen nach Bayern.').get());
        entries.push(new Builder().id('85ca10f5-efa9-456d-8152-995628d0b5f7').thema(thema).entry('trainieren').example(['Machst du viel Sport?', '– Ja, ich muss jeden Tag trainieren.']).get());
        entries.push(new Builder().id('1f8b0306-6f52-4aa9-a2a7-4d5f6b297462').thema(thema).entry('s Training (Sg.)').example('Wir gehen zum Fußball-Training.').get());
        entries.push(new Builder().id('5eead5aa-2d1d-4219-ada3-8f52890029ae').thema(thema).entry('r Traum, ä, -e').example('Heute Nacht hatte ich einen schönen Traum.').get());
        entries.push(new Builder().id('c24004aa-f4fa-4e35-a926-5b162d64d652').thema(thema).entry('traurig').example('Ich bin sehr traurig. Meine Katze ist weg.').get());
        entries.push(new Builder().id('cc1b540f-67c0-469e-bc7b-a1828f51901c').thema(thema).entry('trotzdem').example('Der Film ist traurig, aber ich finde ihn trotzdem schön.').get());
        entries.push(new Builder().id('0759b1f8-7857-4029-8413-c1f30d1139a3').thema(thema).entry('s T-Shirt, -s').example('Wie findest du mein T-Shirt? Es ist neu und passt gut zu meiner Hose.').get());
        entries.push(new Builder().id('16781c0c-6e17-4d63-b901-a9c3933dd3b5').thema(thema).entry('e Tür, -en').example(['Mach bitte die Tür zu.', 'Es klingelt an der Tür.']).get());
        entries.push(new Builder().id('fbf4adc7-b73c-46b1-b455-ef033815cc7c').thema(thema).entry('typisch').example('Ich glaube, das ist typisch deutsch!').get());
*/
// /* Double */        entries.push(new Builder().id('368e1b13-0a96-47cf-9c5f-f3b8e31ca017').thema(thema).entry('tanzen').example('Ich tanze gern in der Disco.').get());
// /* Double */        entries.push(new Builder().id('7eb1e6c9-a36f-4a01-9bbb-d9aa291c430a').thema(thema).entry('e Tasche, -n').example('Die Tasche ist sehr schwer.').get());
// /* Double */        entries.push(new Builder().id('3069c629-35ad-469d-872e-2ecd2e1cb269').thema(thema).entry('s Taxi, -s').example(['Wie kommst du zum Flughafen?', '– Ich nehme ein Taxi.']).get());
// /* Double */        entries.push(new Builder().id('1ab47f71-4baa-4cd8-b72a-862cd2d7595e').thema(thema).entry('r Tee, -s').example('Im Winter trinken wir viel Tee.').get());
// /* Double */        entries.push(new Builder().id('d19a8bcc-20b5-4977-a456-2c2cb408c76f').thema(thema).entry('s Telefon, -e').example('Das Telefon klingelt.').get());
// /* Double */        entries.push(new Builder().id('eaf09206-6fc9-4bb1-a828-0445f8951e52').thema(thema).entry('telefonieren').example('Ich telefoniere oft mit meinen Großeltern in Frankfurt.').get());
// /* Double */        entries.push(new Builder().id('7a5ee6bb-66e2-42ad-beee-bcf1072a73b3').thema(thema).entry('r Termin, -e').example('Mach bitte einen Termin mit der Zahnärztin.').get());
// /* Double */        entries.push(new Builder().id('be3fd9ce-483b-4269-a06d-07cc885b8faf').thema(thema).entry('teuer').example(['Willst du den Computer kaufen?', '– Nein, er ist zu teuer.']).get());
// /* Double */        entries.push(new Builder().id('37be9cc1-017c-4178-9a86-eecc62ce9fee').thema(thema).entry('s Thema, -en').example(['Welches Thema hast du gewählt?', '– Ich schreibe über „meine beste Freundin“.']).get());
// /* Double */        entries.push(new Builder().id('3229a1f3-d43f-41a3-8fa1-b3250c0cee92').thema(thema).entry('r Tisch, -e').example(['Das Buch liegt auf dem Tisch.', 'Ich kaufe noch einen Tisch und vier Stühle.']).get());
// /* Double */        entries.push(new Builder().id('d71cdd4f-d4fc-481f-b380-befd626a0b1c').thema(thema).entry('e Toilette, -n').example('Wo ist die Toilette?').get());
// /* Double */        entries.push(new Builder().id('b94e8f57-d32f-46db-a577-ef68851cb255').thema(thema).entry('e Tomate, -n').example('Die Tomate ist noch grün. Ich mag nur rote Tomaten.').get());
// /* Double */        entries.push(new Builder().id('52c929ca-89fa-4ba0-beb8-30f6e53c77ae').thema(thema).entry('tot').example('Meine Katze ist tot. Deshalb bin ich traurig.').get());
// /* Double */        entries.push(new Builder().id('d2cf79cc-d182-4799-8ddd-2002e9181b65').thema(thema).entry('treffen (sich)').example(['Am Nachmittag treffe ich meine Freunde.', 'Wir treffen uns vor dem Café.']).get());
// /* Double */        entries.push(new Builder().id('cc27a16a-24b8-4b8b-9f2f-94706135ef3d').thema(thema).entry('e Treppe, -n').example('Hier ist die Treppe zum Keller.').get());
// /* Double */        entries.push(new Builder().id('ad3fa4ca-2d4a-497f-9d1f-100caf41baf3').thema(thema).entry('trinken').example(['Wir trinken gern Saft.', 'Kann ich etwas zu trinken haben?']).get());
// /* Double */        entries.push(new Builder().id('34b354db-ebab-4c67-96e3-810007ce8d62').thema(thema).entry('tschüss!').example('Also bis bald, tschüss!').get());
// /* Double */        entries.push(new Builder().id('f071d04a-dfb1-432d-87e8-d3765d71ea4e').thema(thema).entry('tun').example('Was soll ich denn tun?').get());
        return entries;
    }

    createUEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'U'];
        entries.push(new Builder().id('d2412199-8e2b-42b8-962a-1b3b073a17d1').thema(thema).entry('überall').translate(['partout', 'tous azimuts']).example(['Hast du das Buch gefunden?', '– Nein, ich habe schon überall gesucht.']).get());
        entries.push(new Builder().id('221423f7-e4aa-4f56-a9be-0d898da5bd52').thema(thema).entry('e Überschrift, -en').translate(['titre', 'intitulé']).example('Finden Sie eine Überschrift für den Text.').get());
        entries.push(new Builder().id('c7c69f2d-1d77-46ee-83a3-62e2d01ecc94').thema(thema).entry('e Umwelt (Sg.)').translate('environnement').example('Diese Fabrik ist schädlich für die Umwelt.').get());
        entries.push(new Builder().id('d90a8341-2286-4b43-995b-92d6d2f2dc82').thema(thema).entry('r Umweltschutz (Sg.)').translate(["protection de l'environnement", 'écologie']).example('Ich finde Umweltschutz sehr wichtig.').get());
        entries.push(new Builder().id('60330f95-2794-4ca5-9662-3dca24e3ac36').thema(thema).entry('und so weiter').translate(['etc', 'et cætera', 'et ainsi de suite']).example('u.s.w.').get());
        entries.push(new Builder().id('c4ac766b-07cc-48ac-86d5-9dfc9fd099d5').thema(thema).entry('unerträglich').translate(['insupportable', 'intolérable']).example(['Wie war die Party?', '– Sehr laut, die Musik war unerträglich.']).get());
/*
        entries.push(new Builder().id('658ad303-bb45-4588-8af9-17a40656e19a').thema(thema).entry('e U-Bahn, -en').example(['Wie komme ich zum Bahnhof?', 'Du kannst die U-Bahn nehmen.']).get());
        entries.push(new Builder().id('36dc347b-6d3f-43bf-abd8-92a6fb3c4ba4').thema(thema).entry('üben').example('Ich muss jeden Tag Klavier üben.').get());
        entries.push(new Builder().id('2776be2c-b583-4776-bf89-00664f2f7816').thema(thema).entry('übermorgen').example('Heute ist Montag, übermorgen ist Mittwoch.').get());
        entries.push(new Builder().id('40448eb5-179b-4b53-8173-d13def91be3a').thema(thema).entry('unbedingt').example('Das musst du unbedingt lesen.').get());
        entries.push(new Builder().id('adf2a26a-01c8-456b-9cac-e8a81cd64c90').thema(thema).entry('r Unfall, ä, -e').example(['Heute war ein schlimmer Unfall in der Gartenstraße. Drei Autos sind kaputt.', 'Ich hatte einen Unfall mit dem Motorrad.']).get());
        entries.push(new Builder().id('2363c14b-dece-4b9b-9a89-c511eef07129').thema(thema).entry('e Universität, -en').example('Mein Bruder studiert an der Universität Mathematik.').get());
        entries.push(new Builder().id('50edf9c2-59f1-41e8-8768-d70a23d02e91').thema(thema).entry('r Unsinn (Sg.)').example('Wir machen immer viel Unsinn und ärgern unsere Mutter.').get());
        */
// /* Double */        entries.push(new Builder().id('7e502c77-01eb-4927-ac05-ed2f16865e7e').thema(thema).entry('über').example(['Jetzt gehen wir über die Straße.', 'Das Bild hängt über dem Bett.']).get());
// /* Double */        entries.push(new Builder().id('52611442-4fc3-4c16-9197-d6f12be4bc65').thema(thema).entry('e Uhr, -en').example(['Hast du keine Uhr?', '– Es ist sechs Uhr.']).get());
// /* Double */        entries.push(new Builder().id('da78cc16-8440-44bd-a22d-2aef2e0d031e').thema(thema).entry('um').example('Um 7.30 Uhr kommt der Zug.').get());
// /* Double */        entries.push(new Builder().id('ef29456e-6c20-45dd-866c-9fcaf31ca87c').thema(thema).entry('und').example('Karl und Susanne kommen auch.').get());
// /* Double */        entries.push(new Builder().id('8fff2c4c-f394-48b5-a042-3198dd318ed4').thema(thema).entry('unser, -e').example('Das ist unser neues Auto.').get());
// /* Double */        entries.push(new Builder().id('b9f530e5-891c-4d86-9a00-737a783ae7af').thema(thema).entry('unten').example('Wir wohnen ganz unten im Haus.').get());
// /* Double */        entries.push(new Builder().id('f5ed2f0b-5397-4970-8bfa-ca41e6442b0c').thema(thema).entry('unter').example('Der Hund liegt unter dem Tisch.').get());
// /* Double */        entries.push(new Builder().id('5ce91080-f3a2-49bc-bd6c-9b9b26ac3dcf').thema(thema).entry('r Unterricht (Sg.)').example('Der Unterricht dauert bis 13 Uhr.').get());
// /* Double */        entries.push(new Builder().id('afc92e8f-4490-4596-aa4f-c1fc9d9486b6').thema(thema).entry('unterschreiben').example('Bitte unterschreiben Sie hier auf dem Formular.').get());
// /* Double */        entries.push(new Builder().id('25a57a5f-58c6-4ac3-a6a6-1cd082c56806').thema(thema).entry('e Unterschrift, -en').example('Auf dem Formular fehlt noch die Unterschrift.').get());
        return entries;
    }

    createVEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'V'];
        entries.push(new Builder().id('db9bb3ac-9ad5-4673-8911-5733381367bd').thema(thema).entry('verabredet sein').translate(['avoir rendez-vous avec qn.', 'avoir un rencard avec qn.']).example('Ich bin um 15 Uhr mit meiner Freundin verabredet. Wir treffen uns im Park.').get());
        entries.push(new Builder().id('ffbd8dc5-f39f-48e6-a602-0fecea82aab4').thema(thema).entry('verkleiden (sich)').translate(['se déguiser', 'se costumer en qc.', 'se travestir']).example('Im Karneval verkleidet sie sich gern.').get());
        entries.push(new Builder().id('eae64662-15a9-4442-9365-41dec808d247').thema(thema).entry('verliebt sein').translate('être amoureux(-euse)').example('Ich bin total in ihn/sie verliebt.').get());
        entries.push(new Builder().id('6eb2f809-7235-4375-b819-04811293d0d3').thema(thema).entry('verlieren').translate('perdre qn./qc.').example(['Ich habe mein Geld verloren.', 'Mein Vater hat seine Arbeit verloren.']).get());
        entries.push(new Builder().id('1d5c2bfb-a001-4a90-a23d-381f078f5a4c').thema(thema).entry('verreisen').translate(['se déplacer (voyager)', 'partir en voyage', 'voyager', 'être en voyage']).example('Herr Müller ist verreist. Er kommt am 15. August wieder.').get());
        entries.push(new Builder().id('acab0c3c-3988-4817-a5fd-5926227a6930').thema(thema).entry('versprechen').translate('promettre qc.').example('Ich komme sicher, das verspreche ich.').get());
        entries.push(new Builder().id('4c956507-447e-4d53-bc0b-5cc5bc05f398').thema(thema).entry('vor allem').translate(['surtout', 'avant tout']).example('Ich möchte vor allem das Museum sehen.').get());
        entries.push(new Builder().id('48dc591b-e678-4f34-8a81-b68d2baadf87').thema(thema).entry('vorbei').translate(['devant', 'être terminé']).example(['Fahr geradeaus, dann kommst du an der Kirche vorbei.', 'Leider sind die Ferien jetzt vorbei.']).get());
        entries.push(new Builder().id('f7a273a9-7b0f-4ad4-b3d7-671c24757d50').thema(thema).entry('vorher').translate(['au prélable', 'auparavant', 'avant']).example('Um sieben Uhr fahren wir weg, aber vorher muss ich telefonieren.').get());
        entries.push(new Builder().id('3832a160-08fd-49ff-94ea-25470a87737a').thema(thema).entry('vorn').translate('devant').example('Das Auto ist vorn ein bisschen kaputt.').get());
/*
        entries.push(new Builder().id('d3083cfe-c279-488d-adce-3ef7f8cfb82d').thema(thema).entry('verbieten').example(['Kommst du heute Abend mit?', '– Nein, mein Vater hat es mir verboten.']).get());
        entries.push(new Builder().id('36fe6180-f910-4384-9cd1-a253bbc1fb29').thema(thema).entry('verboten sein').example('Hier ist das Rauchen verboten.').get());
        entries.push(new Builder().id('aa92ce3e-2fe4-4125-b8b5-128d4f0c0a17').thema(thema).entry('vergessen').example('Ich vergesse oft die Vokabeln.').get());
        entries.push(new Builder().id('31f81421-a880-4531-9ab7-45111d72f5e8').thema(thema).entry('vergleichen').example(['Wir haben die Ergebnisse verglichen.', 'Vergleichen Sie die Preise.']).get());
        entries.push(new Builder().id('39ea21ab-bb3f-49ce-a011-9a07a9b21aed').thema(thema).entry('verletzen (sich)').example('Hast du dich bei dem Unfall schwer verletzt?').get());
        entries.push(new Builder().id('f2885893-b902-46c7-978c-22b8d43101ba').thema(thema).entry('verletzt sein').example('Bist du verletzt?').get());
        entries.push(new Builder().id('df32d081-438d-42c9-a31c-8d317832b330').thema(thema).entry('verrückt').example(['Ich finde die Idee verrückt.', 'Sie trägt so verrückte Kleider.']).get());
        entries.push(new Builder().id('8dac3460-3884-4961-9f1f-f9e7dded6af6').thema(thema).entry('verschieden').example(['Meine Schwester und ich, wir sind verschieden.', 'Ich habe verschiedene Hobbys.']).get());
        entries.push(new Builder().id('eca5f4bf-9b83-4fcb-8513-9d00d4bf87e9').thema(thema).entry('e Verspätung, -en').example('Hat der Zug aus Dresden Verspätung? Ja, 10 Minuten.').get());
        entries.push(new Builder().id('b3a981d8-2083-4613-a5ea-b4d32e022e61').thema(thema).entry('versuchen').example('Du kannst es noch einmal versuchen.').get());
        entries.push(new Builder().id('62c01124-7c9e-4e87-82e2-6dcf8a7bbd89').thema(thema).entry('r Vogel, ö, -').example('Morgens singen die Vögel im Garten.').get());
        entries.push(new Builder().id('0b0eb195-9066-4762-a510-3dc0754be8e8').thema(thema).entry('r Volleyball, ä, -e').example('Wir haben Volleyball gespielt.').get());
        entries.push(new Builder().id('103aa171-be95-4d9b-b513-32f6fa8ff74a').thema(thema).entry('vorbereiten').example(['Hast du alles für die Party vorbereitet?', 'Ich muss mich noch auf die Prüfung vorbereiten.']).get());
        entries.push(new Builder().id('dd65fc19-8a32-405d-913d-8f04ba7fbb2e').thema(thema).entry('vorgestern').example('Wo warst du vorgestern?').get());
        entries.push(new Builder().id('80497e09-c3aa-4b51-b2fa-50392a6517b0').thema(thema).entry('r Vorschlag, ä, -e').example('Mach doch einen Vorschlag fürs Wochenende!').get());
        entries.push(new Builder().id('51079ca8-076d-49b3-bacc-7b1394798eaa').thema(thema).entry('vorschlagen').example(['Darf ich etwas vorschlagen?', 'Ich schlage vor, wir machen eine Pause.']).get());
        entries.push(new Builder().id('41aa82c0-3a67-4cf0-8a3d-c1ee56a6c468').thema(thema).entry('vorsichtig').example('Seid vorsichtig auf der Straße! Es liegt viel Schnee!').get());
*/
// /* Double */        entries.push(new Builder().id('6074488c-09b8-4f49-947b-9715526ab4b8').thema(thema).entry('verdienen').example('In den Ferien will ich arbeiten und Geld verdienen.').get());
// /* Double */        entries.push(new Builder().id('3c457912-8684-4bd1-958d-5a743fa42b50').thema(thema).entry('verkaufen').example('Er will seine alten Sachen auf dem Flohmarkt verkaufen.').get());
// /* Double */        entries.push(new Builder().id('71598e25-a5fd-47ef-8f8b-a6c19746df63').thema(thema).entry('verstehen').example('Ich verstehe dich nicht. Kannst du bitte langsamer sprechen?').get());
// /* Double */        entries.push(new Builder().id('65114c21-e4a9-468d-9eff-61339760ff14').thema(thema).entry('viel, -e').example(['Hast du viele Freunde?', 'Es regnet viel.']).get());
// /* Double */        entries.push(new Builder().id('1267e8c8-3228-4d7e-bda3-4d62ffa78c2d').thema(thema).entry('vielleicht').example(['Kannst du mir vielleicht helfen?', 'Vielleicht kommt er.']).get());
// /* Double */        entries.push(new Builder().id('c447483c-7b9f-4e27-b64c-29f93b165f08').thema(thema).entry('von').example(['Der Computer ist ein Geschenk von meinem Onkel.', 'Sie arbeitet von sieben bis neun.', 'Er kommt von der Arbeit.']).get());
// /* Double */        entries.push(new Builder().id('c3b09c33-4a44-41ee-9d99-25b38d4d6074').thema(thema).entry('vor').example(['Ich treffe Peter vor dem Kino.', 'Vor dem Frühstück dusche ich.']).get());
// /* Double */        entries.push(new Builder().id('59fe53d2-91c2-45a5-8067-8506d7e5e899').thema(thema).entry('r Vorname, -n').example('Wie ist dein Vorname?').get());
// /* Double */        entries.push(new Builder().id('8823d6cf-5b1c-42c8-b74d-e04597fc18f1').thema(thema).entry('vorstellen (sich)').example('Stell dich bitte mit vier Sätzen vor: Name, Alter, Wohnort, Schule.').get());
        return entries;
    }

    createWEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'W'];
        entries.push(new Builder().id('9e137296-4e6c-43fa-a7a6-d813a5dbe9e2').thema(thema).entry('wach').translate(['réveillé(e)', 'éveillé(e)']).example('Ich war schon um sechs Uhr wach.').get());
        entries.push(new Builder().id('a8e1e96e-5e90-4441-bddc-1403a05a0c85').thema(thema).entry('wahr').translate(['vrai(e)', 'véritable']).example(['Die Geschichte ist sicher nicht wahr.', 'Das schmeckt gut, nicht wahr?']).get());
        entries.push(new Builder().id('c45be59e-31cf-4873-9f2f-927548e54351').thema(thema).entry('wahrscheinlich').translate(['sans doute', 'vraisemblablement', 'probablement']).example(['Wo ist Konrad?', '– Er ist wahrscheinlich noch im Büro.']).get());
        entries.push(new Builder().id('80003733-c202-489f-b7bd-f18bde47d83b').thema(thema).entry('r Wald, ä, -er').translate(['forêt', 'bois']).example(['Gehst du gern im Wald spazieren?', '– Ja, die Bäume gefallen mir.']).get());
        entries.push(new Builder().id('e264768b-00f0-44f2-afa9-bd22e418bac8').thema(thema).entry('wegbringen').translate(['emmener qn./qc.', 'emporter qc.', 'remporter qc.']).example('Kannst du bitte die Post wegbringen?').get());
        entries.push(new Builder().id('34229d1a-dcff-4615-8f41-becf34e5e208').thema(thema).entry('wegfahren').translate(['prendre la route', 'partir (en véhicule)']).example('Leider muss ich jetzt wegfahren.').get());
        entries.push(new Builder().id('8ab64588-a462-411c-8e56-7b0923bd7355').thema(thema).entry('weggehen').translate("partir (s'en aller)").example('Am Abend möchte ich noch mit meinen Freunden weggehen.').get());
        entries.push(new Builder().id('aa6b83c8-c518-4481-ae3a-28e2119f9815').thema(thema).entry('weinen').translate('pleurer').example('Ich habe geweint, weil ich sehr traurig bin.').get());
        entries.push(new Builder().id('c312a3f1-f20f-4666-b25a-1f3397536d67').thema(thema).entry('weitermachen').translate(['poursuivre', 'continuer']).example('Können wir jetzt weitermachen?').get());
        entries.push(new Builder().id('c00fb640-268f-40f2-b40f-d5b991fdb3c5').thema(thema).entry('weiterspielen').translate("continuer à jouer").example('Spielt doch weiter!').get());
        entries.push(new Builder().id('482891f5-9e3d-4154-9e6f-4eaec7ca9175').thema(thema).entry('wenigstens').translate(['au moins', 'du moins']).example('Du musst aber wenigstens anrufen.').get());
        entries.push(new Builder().id('e6d0e4fe-cd0c-4acc-9a68-90e10f048dd9').thema(thema).entry('r Wettbewerb, -e').translate(['concours', 'compétition']).example('Das ist ein Wettbewerb: Man muss eine Frage richtig beantworten, dann kann man eine Reise gewinnen.').get());
        entries.push(new Builder().id('e927afba-26ec-4dc0-85cb-8f5c34a34a2a').thema(thema).entry('e Wiese, -n').translate(['prairie', 'pré']).example(['Keinen Müll auf der Wiese lassen!', 'Wir spielen auf der Wiese Fußball.']).get());
        entries.push(new Builder().id('14a06c22-1715-4648-9cb0-c8da7817ed21').thema(thema).entry('r Witz, -e').translate(['blague', 'plaisanterie', 'astuce']).example('Er erzählt gern Witze. Wir müssen immer lachen.').get());
        entries.push(new Builder().id('b660d0e6-993d-4b35-b6ea-7c8978811a7d').thema(thema).entry('witzig').translate(['drôle', 'rigolo(te)']).example('Das Buch ist so witzig! Ich musste oft lachen.').get());
        entries.push(new Builder().id('092fee77-588b-4e17-960a-b0d9bb358e17').thema(thema).entry('e Wolke, -n').translate('nuage').example('Am Himmel sind viele Wolken. Es regnet bald.').get());
        /*
        entries.push(new Builder().id('084b19ac-b198-484e-a423-09a3b374620a').thema(thema).entry('wählen').example(['Wählen Sie eine Nummer.', 'Haben Sie schon ein Getränk gewählt?']).get());
        entries.push(new Builder().id('24c9fb78-14b6-444c-88f9-ab022f0ef79e').thema(thema).entry('warm').example('Im Sommer ist es hier sehr warm.').get());
        entries.push(new Builder().id('37cb0b6f-e3ee-4da8-9f3c-f10b00d0da97').thema(thema).entry('wechseln').example(['Ich möchte Dollar in Euro wechseln.', 'Können wir das Thema wechseln?']).get());
        entries.push(new Builder().id('53bc808d-7f3c-4556-8c69-00f9ce5ca49c').thema(thema).entry('wecken').example('Meine Mutter weckt mich um 7.30 Uhr.').get());
        entries.push(new Builder().id('45a9e708-70e5-4b30-b315-8bda97a6dd27').thema(thema).entry('r Weg, -e').example('Können Sie mir den Weg zum Bahnhof zeigen?').get());
        entries.push(new Builder().id('485106f5-a2fc-477f-89a6-7cbaca7a837d').thema(thema).entry('weil').example('Er kommt heute nicht, weil er lernen muss.').get());
        entries.push(new Builder().id('69968682-2b48-48ae-a5dc-c797dd58f8b2').thema(thema).entry('wenn').example('Ich rufe dich an, wenn ich Zeit habe.').get());
        entries.push(new Builder().id('46b37c6c-cacd-4da6-a431-fd189289b856').thema(thema).entry('wieder').example(['Ich möchte wieder nach Deutschland fahren.', 'Sie ist jetzt wieder gesund.']).get());
        entries.push(new Builder().id('e2d48985-fb74-45f9-8487-22707be83a77').thema(thema).entry('wirklich').example(['Willst du das wirklich kaufen?', 'Es ist wirklich so.']).get());
        entries.push(new Builder().id('8b46541a-12df-477d-9a69-c9dee2e86f48').thema(thema).entry('wohnen').example('Wo wohnst du? Ich wohne in der Gartenstraße.').get());
        entries.push(new Builder().id('9ec03767-cecf-4976-aca0-8c76533ece39').thema(thema).entry('s Wohnzimmer, -').example('Ich sehe im Wohnzimmer fern.').get());
        entries.push(new Builder().id('ab6fcad1-706c-4c55-9471-960e86369a02').thema(thema).entry('wünschen').example(['Ich wünsche dir schöne Ferien.', 'Ich wünsche dir viel Glück!']).get());
        entries.push(new Builder().id('07901f3b-5412-4145-bf89-1cc0e84faa2e').thema(thema).entry('e Wurst, ü, -e').example(['Morgens esse ich keine Wurst.', 'Kann ich ein Wurstbrot haben?']).get());
        entries.push(new Builder().id('83fccc4a-17b3-425e-9a87-cb745535bfc4').thema(thema).entry('s Würstchen, -').example('Ich möchte zwei Würstchen mit Brot.').get());
        */
// /* Double */        entries.push(new Builder().id('3b97afcd-4b2a-436e-a5b7-3db1d30caa5b').thema(thema).entry('wandern').example('Am Wochenende wandern wir in den Bergen.').get());
// /* Double */        entries.push(new Builder().id('8f413d2d-053e-432c-87d2-a941d4ae16ce').thema(thema).entry('wann').example('Wann hast du Geburtstag?').get());
// /* Double */        entries.push(new Builder().id('2b7140c8-33a8-445a-9c2c-92630d6a338f').thema(thema).entry('warten').example(['Ich warte auf meine Eltern.', 'Kannst du kurz warten? Ich bin gleich fertig.']).get());
// /* Double */        entries.push(new Builder().id('c3a7f7d8-96e2-4b2b-b1c1-ae033ed5cebf').thema(thema).entry('warum').example('Warum antwortest du nicht?').get());
// /* Double */        entries.push(new Builder().id('ab7b0a73-a848-4f20-a3a2-04d2e6196c27').thema(thema).entry('was').example('Was ist das?').get());
// /* Double */        entries.push(new Builder().id('ee3e96c4-b6be-4565-8078-ea9a4b1ceac6').thema(thema).entry('waschen').example(['Ich will meine Haare waschen.', 'Ich muss meine Kleider noch waschen.']).get());
// /* Double */        entries.push(new Builder().id('93a01caa-293b-4f3e-8308-08f298d379d4').thema(thema).entry('was für ein, e').example('Was für eine Bluse möchten Sie?').get());
// /* Double */        entries.push(new Builder().id('a1c5a06d-9552-420c-b82f-bb9d044d4a90').thema(thema).entry('s Wasser (Sg.)').example(['Das Wasser im See ist so kalt.', 'Gib mir bitte ein Glas Mineralwasser.']).get());
// /* Double */        entries.push(new Builder().id('a5b9efa7-0cd0-4fa0-824b-816f8e8f30e3').thema(thema).entry('wehtun').example('Mein Kopf tut so weh.').get());
// /* Double */        entries.push(new Builder().id('e7c64045-f746-495c-9e60-cce9007e6741').thema(thema).entry('r Wein, -e').example('Möchtest du ein Glas Wein?').get());
// /* Double */        entries.push(new Builder().id('6d287039-24ae-455c-8ac9-f3606f517505').thema(thema).entry('weit').example('Wir fahren zum See, das ist nicht weit von hier.').get());
// /* Double */        entries.push(new Builder().id('8f230682-b252-461d-8550-14618fd7f7e9').thema(thema).entry('weiter').example('Lies bitte weiter!').get());
// /* Double */        entries.push(new Builder().id('b4bc997a-c5aa-4e89-8e08-ef1d2d6de0a0').thema(thema).entry('welcher, e, s').example('Welche CD möchtest du?').get());
// /* Double */        entries.push(new Builder().id('234864ad-abcf-4800-a109-d02656a9b930').thema(thema).entry('e Welt, -en').example(['Er ist in der ganzen Welt bekannt.', 'Es gibt viele Probleme auf der Welt.']).get());
// /* Double */        entries.push(new Builder().id('186eb858-2ee0-4976-aecd-780531e9e85f').thema(thema).entry('wenig, -e').example('Ich habe heute wenig Zeit.').get());
// /* Double */        entries.push(new Builder().id('8328df62-d422-4b24-aafb-da359145e127').thema(thema).entry('wer (wen, wem)').example(['Wer kommt mit?', 'Wen möchtest du einladen?', 'Wem gehört die Tasche?']).get());
// /* Double */        entries.push(new Builder().id('ab31adeb-54f2-439b-8fbd-57d4b01fd518').thema(thema).entry('werden').example('Ich möchte Arzt werden.').get());
// /* Double */        entries.push(new Builder().id('2074a436-2b12-4969-b644-8f5b9d7dafbb').thema(thema).entry('s Wetter (Sg.)').example('Das Wetter war schlecht. Es hat nur geregnet.').get());
// /* Double */        entries.push(new Builder().id('b13f989d-a9ec-45a6-a5c7-16023736f934').thema(thema).entry('wichtig').example(['Ich glaube, die Frage ist wichtig.', 'Das ist wichtig für mich.']).get());
// /* Double */        entries.push(new Builder().id('16e453ad-19b8-485b-9c89-6557ab299088').thema(thema).entry('wie (vgl. Grammatik)').example(['Wie heißt das auf Deutsch?', 'Er schreibt wie ein Kind.']).get());
// /* Double */        entries.push(new Builder().id('f2f13e2f-be6f-42d9-abc8-2864209599d4').thema(thema).entry('wiederholen').example('Ich verstehe es nicht. Können Sie das bitte wiederholen?').get());
// /* Double */        entries.push(new Builder().id('70e9098f-9416-4b46-98ec-d6468fc8afca').thema(thema).entry('s Wiedersehen, -').example('Auf Wiedersehen.').get());
// /* Double */        entries.push(new Builder().id('68c2954d-9d3d-4d23-8a43-4486f5ba4a65').thema(thema).entry('wie viel, -e').example('Wie viel kostet das?').get());
// /* Double */        entries.push(new Builder().id('9cad6b5d-4e04-4ead-8b5e-e9dbf571a10d').thema(thema).entry('willkommen').example('Willkommen bei uns!').get());
// /* Double */        entries.push(new Builder().id('63fa43d6-7f0a-484d-9d71-ed5dd43647e2').thema(thema).entry('r Wind, -e').example('Hier gibt es immer viel Wind, meistens kommt er von Westen.').get());
// /* Double */        entries.push(new Builder().id('5ee5cea9-6d03-4911-91f5-e672c30b1a6c').thema(thema).entry('wir').example('Wir haben eine neue Lehrerin.').get());
// /* Double */        entries.push(new Builder().id('8695dd22-85ac-42ae-9806-db944184c9f8').thema(thema).entry('wissen').example(['Weißt du die Antwort?', '– Ich weiß sie nicht.']).get());
// /* Double */        entries.push(new Builder().id('fb99658d-84c7-4a59-8588-e559b32c453a').thema(thema).entry('wo').example(['Wo wohnt ihr?', '– In Berlin.']).get());
// /* Double */        entries.push(new Builder().id('5905c257-fc50-42ff-ade4-d25a999099b5').thema(thema).entry('woher').example(['Woher kommst du?', '– Aus Frankreich.']).get());
// /* Double */        entries.push(new Builder().id('c6f40bcc-4efe-4ea1-b296-b83335dc783f').thema(thema).entry('wohin').example(['Wohin fährt der Bus?', '– Nach Leipzig.']).get());
// /* Double */        entries.push(new Builder().id('8f162e24-bec7-454e-a393-9cd16f23c78f').thema(thema).entry('e Wohnung, -en').example('Unsere Wohnung hat drei Zimmer.').get());
// /* Double */        entries.push(new Builder().id('6905cffe-68d3-4378-b9e4-aac351662bf2').thema(thema).entry('wollen').example('Willst du meine Freunde kennenlernen?').get());
// /* Double */        entries.push(new Builder().id('a9d29a3c-6c32-4d5b-8933-764168d557ec').thema(thema).entry('s Wort, -e, ö, -er').example(['Ich kenne das Wort nicht.', 'Wie viele Wörter hat dein Brief?']).get());
// /* Double */        entries.push(new Builder().id('7cc1e230-490c-400f-8a41-bc951f65eb02').thema(thema).entry('wunderbar').example('Das Essen ist wunderbar.').get());
        return entries;
    }

    createZEntries(Builder) {
        let entries = [];
        let thema = ['Wortschatz', 'A2', 'Alphabetische Wortliste', 'Z'];
        entries.push(new Builder().id('9cb1cf46-63b7-46da-8211-577cfc4bd311').thema(thema).entry('e Zahnspange, -n').translate('appareil dentaire').example('Sie trägt eine Zahnspange.').get());
        entries.push(new Builder().id('5317e393-9494-4c66-bf83-3a98586517f6').thema(thema).entry('zeichnen').translate('dessiner').example('Wir haben ein Bild gezeichnet.').get());
        entries.push(new Builder().id('feb7f9ac-8c48-4e8b-bfaf-23a6a30a71f0').thema(thema).entry('s Zelt, -e').translate(['tente', 'chapiteau']).example('Früher haben wir im Zelt Ferien gemacht.').get());
        entries.push(new Builder().id('018d6d3e-5e43-41b3-87f5-1d2d6dc1a0e5').thema(thema).entry('r Zettel, -').translate(['billet', 'bout de papier', 'fiche']).example('Wer hat diesen Zettel geschrieben?').get());
        entries.push(new Builder().id('75c160e7-9962-4d7b-86bc-706529c4970d').thema(thema).entry('s Zeugnis, -se').translate(['bulletin', 'brevet', 'certificat']).example('Mein Zeugnis war ziemlich gut.').get());
        entries.push(new Builder().id('bc41dfb3-343c-4854-a2b2-83cf0f1e196b').thema(thema).entry('zuhören').translate(['écouter (qn./qc.)', "prêter l'oreille à"]).example('Hör jetzt zu! Das ist wichtig!').get());
        entries.push(new Builder().id('1e223852-8c23-4e9a-9309-d9605b85ad00').thema(thema).entry('zuletzt').translate(['en dernier lieu', 'en dernier', 'à la fin']).example('Wann hast du ihn zuletzt gesehen? Im letzten Sommer.').get());
        entries.push(new Builder().id('bd71dd69-d9bd-4b87-81e6-63325cebe2d6').thema(thema).entry('zumachen').translate('fermer qc.').example('Mach die Tür bitte zu!').get());
        entries.push(new Builder().id('bd8f5b81-bb91-497d-a246-07c3273a38e7').thema(thema).entry('zu sein').translate('être fermé').example('Die Bücherei ist in den Ferien zu.').get());
/*
        entries.push(new Builder().id('36d3209f-f3b1-41db-a1de-e5206db05399').thema(thema).entry('r Zahn, ä, -e').example('Mein Zahn tut weh.').get());
        entries.push(new Builder().id('a817c242-906c-430b-b5b6-ca2746466091').thema(thema).entry('zeigen').example('Können Sie mir den Weg zeigen?').get());
        entries.push(new Builder().id('f34692b9-f9fe-4291-8c3c-8f09e60cbbde').thema(thema).entry('s Zentrum, -en').example('Im Zentrum ist heute eine Fußgängerzone.').get());
        entries.push(new Builder().id('2a4034c1-521f-416b-8984-0a9a062a1e9a').thema(thema).entry('s Ziel, -e').example('Ich war als Erster am Ziel.').get());
        entries.push(new Builder().id('ca12904f-ce39-4305-b715-ca535ceb75b8').thema(thema).entry('r Zirkus, -se').example('Der Zirkus ist heute in der Stadt.').get());
        entries.push(new Builder().id('eb72c852-4d59-4516-9329-29b1d856880d').thema(thema).entry('r Zoo (Sg.)').example('Ich liebe Tiere, ich gehe gern in den Zoo.').get());
        entries.push(new Builder().id('9849a19a-b5fc-4064-968e-0dc3d16eb6d9').thema(thema).entry('r Zucker (Sg.)').example('Ich trinke meinen Kaffee mit Zucker.').get());
        entries.push(new Builder().id('ac9b39a6-66b2-41ac-aeab-f9615c4e4ff3').thema(thema).entry('zuerst').example('Sagen Sie bitte zuerst den Vornamen.').get());
        entries.push(new Builder().id('be6f2fe9-865b-4159-9158-67bf0076b8c8').thema(thema).entry('zum Beispiel').example('z. B.').get());
        entries.push(new Builder().id('cbb9cfcc-ef9e-4d1c-98f9-b7a3fed2c96a').thema(thema).entry('zurückkommen').example('Ich bin gestern aus dem Urlaub zurückgekommen.').get());
        */
// /* Double */        entries.push(new Builder().id('5fa6d58f-04e7-423e-949d-c12f78aec357').thema(thema).entry('e Zeit, -en').example(['Wann hast du Zeit für mich?', 'Ich kann nicht kommen. Ich habe keine Zeit.']).get());
// /* Double */        entries.push(new Builder().id('693ea628-3e57-42b0-9d81-8ea7d083c64b').thema(thema).entry('e Zeitung, -en').example('Meine Mutter liest am Morgen die Zeitung.').get());
// /* Double */        entries.push(new Builder().id('25948cbb-0072-4704-a0ad-25c03634f0af').thema(thema).entry('s Zimmer, -').example('Wie groß ist die Wohnung? Es sind drei Zimmer.').get());
// /* Double */        entries.push(new Builder().id('c16140eb-a3d7-43ce-bbff-9917c9cfcaad').thema(thema).entry('zu').example(['zu groß', 'zum Frühstück', 'zum Zahnarzt', 'zur Post', 'zum Geburtstag', 'zu Hause']).get());
// /* Double */        entries.push(new Builder().id('39ffc346-88aa-4b75-a80e-e5142d564107').thema(thema).entry('zufrieden').example('Ich bin mit meiner Note zufrieden.').get());
// /* Double */        entries.push(new Builder().id('2909aefc-7402-4491-aa48-c9cc17a4d21a').thema(thema).entry('r Zug, ü, -e').example('Wir fahren mit dem Zug zu meiner Tante.').get());
// /* Double */        entries.push(new Builder().id('b1f2b1fc-6f89-4763-842f-51477ab5e36c').thema(thema).entry('zurück').example('Wir fahren mit dem Zug, zurück nehmen wir den Bus.').get());
// /* Double */        entries.push(new Builder().id('6ed728a9-5c69-4069-bbe8-5369a2717698').thema(thema).entry('zusammen').example('Wir machen zusammen Hausaufgaben.').get());
// /* Double */        entries.push(new Builder().id('9128d282-4858-4b40-aa81-778de6ebc45d').thema(thema).entry('zwischen').example(['Der Supermarkt ist zwischen dem Rathaus und der Post.', 'Zwischen zwölf und zwei Uhr bin ich nicht da.']).get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default VocabularyA2Service;