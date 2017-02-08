class StrategiesA1Service {

    /*@ngInject*/
    constructor(StrategyBuilder, VocabularyBuilder) {
        this.entries = [];
        this.createStrategiesEntries(StrategyBuilder);
        this.createStrategiesWordEntries(VocabularyBuilder);
    }

    createStrategiesEntries(Builder) {
        let entries = [];
        let thema = ['Strategien', 'A1', 'Redeorganisation', 'eine Äußerung einleiten'];
        entries.push(new Builder().id('3b6b10c9-e3b6-465c-80aa-08b0d566218d').thema(thema).entry(['Entschuldigung ... ... Kann ich etwas fragen?', 'Entschuldigen Sie ... Kann ich etwas fragen?']).get());
        entries.push(new Builder().id('48c94b01-9c32-4498-8e05-6ee1e4babfe8').thema(thema).entry('Was kann ich für Sie tun?').get());
        entries.push(new Builder().id('e50d4f74-8a82-43ce-bf42-27bc6a564b79').thema(thema).entry('Brauchen Sie Hilfe?').get());
        entries.push(new Builder().id('0b834cf4-182b-423c-93ad-8b3dbd9e5842').thema(thema).entry('(Im Restaurant.) Hallo! Entschuldigung bitte!').get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'eine Äußerung abschließen'];
        entries.push(new Builder().id('61588273-f0b4-42e0-a43a-e109c960e160').thema(thema).entry('Danke. Ich muss jetzt leider gehen.').get());
        entries.push(new Builder().id('771f4e13-4038-43da-81cc-57db4fa4894d').thema(thema).entry('Okay, tschüss bis bald.').get());
        entries.push(new Builder().id('a6da9952-b050-4ec6-879e-e10fccfd3530').thema(thema).entry('Gut: ...').get());
        entries.push(new Builder().id('0c92d9c4-c565-4ffc-94b0-9594014aabb3').thema(thema).entry('Na gut.').translate('mouais').get());
        entries.push(new Builder().id('38b6aacd-2abe-4bab-b33e-9f8afeaba0c9').thema(thema).entry('Dann, herzlichen Dank').translate('Merci beaucoup !').get());
        entries.push(new Builder().id('e72298c6-69d5-4ad3-8cf5-ee04187471bf').thema(thema).entry('auf Wiedersehen.').get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'um das Wort bitten'];
        entries.push(new Builder().id('c6c76166-1fe3-4557-9c8c-522de23c931a').thema(thema).entry('Moment bitte.').get());
        entries.push(new Builder().id('a9354621-f964-4247-96d2-4d06ddf8cc61').thema(thema).entry('Bitte!').get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'Zuhören signalisieren'];
        entries.push(new Builder().id('c4ed50b2-2bd8-429c-829a-e8b842f62d1d').thema(thema).entry('a?').get());
        entries.push(new Builder().id('16787f4d-14d2-4296-ac3f-b26a9301ffa6').thema(thema).entry('So?').get());
        entries.push(new Builder().id('e530000e-0915-451a-8ecd-5753303bf742').thema(thema).entry('Wirklich?').get());
        entries.push(new Builder().id('d32a005a-3ffa-4518-a12e-a501e8fe1a65').thema(thema).entry('Ach.').translate(['Hélas !', 'Ah !']).get());
        entries.push(new Builder().id('52e1b278-d620-4ce4-918a-66e794876267').thema(thema).entry('Sicher.').translate('assurément').get());
        entries.push(new Builder().id('9db2a9bd-7c99-471c-9940-7813a8b61a2e').thema(thema).entry('Aha.').translate('Ah! (ironie, étonnement)').get());
        entries.push(new Builder().id('22698b2a-c9a4-4359-a371-5a0f9115bd86').thema(thema).entry('Naja.').translate('bof').get());
        entries.push(new Builder().id('5876a418-27cb-4b4f-a92b-b310faff5f00').thema(thema).entry('Bitte?').get());
        entries.push(new Builder().id('c10b3be3-fac3-4818-bfba-932e33192ed2').thema(thema).entry('(Na) Klar.').translate(['Forcément !', 'Bien sûr !']).get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'zum Sprechen auffordern'];
        entries.push(new Builder().id('a325c45a-62f4-4594-b0ee-6431fbd250fb').thema(thema).entry('Also?').translate('Alors !').get());
        entries.push(new Builder().id('ea4aab56-16df-493d-8623-4a62e15092ae').thema(thema).entry('Ja?').get());
        entries.push(new Builder().id('ab3eaf9e-b1df-4074-86d1-e88fd3f95201').thema(thema).entry('Und?').get());
        entries.push(new Builder().id('2d163510-42df-4a67-9818-2a7c1368cd14').thema(thema).entry('Ja bitte !').get());
        entries.push(new Builder().id('0e8a88f1-7aa8-459b-ba4d-6b9bd8289cc6').thema(thema).entry('Und dann?').get());
        entries.push(new Builder().id('d6e64ba4-c019-434d-a8b4-ec9902f610e4').thema(thema).entry('Und?').get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'Beispiele geben/etwas verdeutlichen'];
        entries.push(new Builder().id('2c1cd5de-0dc0-43ae-9930-9c5d6e651c70').thema(thema).entry('Ich esse gern Obst, zum Beispiel Orangen, Bananen und Erdbeeren.').get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'Höflichkeit'];
        entries.push(new Builder().id('e6591ce5-4920-4692-968c-029331013c55').thema(thema).entry(['Kann ich Sie etwas fragen?', 'Darf ich Sie etwas fragen?']).get());

        thema = ['Strategien', 'A1', 'Redeorganisation', 'Abschwächung'];
        entries.push(new Builder().id('747f5683-578d-4dc3-8516-cacddbe3d41c').thema(thema).entry(['Möchtest du noch etwas?', '– Ja, ein bisschen.']).get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Verständnishilfen anbieten', 'einzelne Wörter oder Begriffe umschreiben'];
        entries.push(new Builder().id('09c2738c-720a-4c42-bcdb-ddebc5f238b3').thema(thema).entry('Apotheke: Da kann man Medikamente kaufen.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Verständnishilfen anbieten', 'Rückfragen zur Verständniskontrolle'];
        entries.push(new Builder().id('2c2dde3f-b400-4b99-888e-e50f9bebfa96').thema(thema).entry('Haben Sie das verstanden?').get());
        entries.push(new Builder().id('78c59d29-6098-4402-b14e-08a3bf9b8ab1').thema(thema).entry('Ist das klar?').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Verständnishilfen anbieten', 'schwierige Wörter buchstabieren'];
        entries.push(new Builder().id('9d7275e7-a346-4685-9951-74a8b53ebcf6').thema(thema).entry('Mein Name ist „Kuntz“, ich buchstabiere: K-U-N-T-Z.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'signalisieren, dass man etwas nicht verstanden hat'];
        entries.push(new Builder().id('64f86ce2-7115-4a6f-b81f-ad573e55dfa8').thema(thema).entry('Entschuldigung, wie bitte?').get());
        entries.push(new Builder().id('43d43da7-3e8c-45dd-86e5-2f48ea38795d').thema(thema).entry('Langsamer bitte.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'um Wiederholung bitten'];
        entries.push(new Builder().id('b3fd2aa6-b68b-43f4-84fc-55c92fb74762').thema(thema).entry('Noch einmal bitte.').get());
        entries.push(new Builder().id('27711963-6933-4238-8ddc-6f6617143132').thema(thema).entry('Kannst du das bitte noch einmal sagen?').get());
        entries.push(new Builder().id('8f5d8280-3b6a-49e0-8b36-ed69194d7ade').thema(thema).entry('Wie bitte?').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'um Erläuterung bitten'];
        entries.push(new Builder().id('0ea6f7f9-8f13-4625-95f8-df20dddaed90').thema(thema).entry('Entschuldigung, was heißt das?').get());
        entries.push(new Builder().id('8f22183a-35bf-4651-9be2-281c02ab7522').thema(thema).entry('Was bedeutet ... ?').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'jemanden bitten, ein Wort zu buchstabieren'];
        entries.push(new Builder().id('0302fd4f-2df5-449c-9c5d-ef2e9f08a30d').thema(thema).entry('Bitte buchstabieren Sie mir den Namen.').get());
        entries.push(new Builder().id('8e8944ac-3077-42d0-b01e-bf2d1d0195c1').thema(thema).entry('Können Sie das Wort buchstabieren?').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'jemanden bitten, etwas aufzuschreiben'];
        entries.push(new Builder().id('4c12c4b4-a1dd-4efb-b55a-4b60581ae612').thema(thema).entry('Wie schreibt man ... ?').get());
        entries.push(new Builder().id('71debee3-36b4-4a75-88bd-4d31b089aaa8').thema(thema).entry('Bitte schreiben Sie das auf.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'jemanden bitten, langsamer zu sprechen'];
        entries.push(new Builder().id('26d07119-a7f0-4c75-9db1-9f4a7d3a3aff').thema(thema).entry('Bitte ein bisschen langsamer.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'um Wiederholung bitten'];
        entries.push(new Builder().id('b4091431-c9f1-4dbd-80fd-2990de24a8b7').thema(thema).entry('Wie bitte?').get());
        entries.push(new Builder().id('c6ba05ca-203d-4122-90a5-839d968239b6').thema(thema).entry('Entschuldigung, noch einmal bitte.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'um Verständnishilfen bitten', 'anzeigen, dass man etwas nicht verstanden hat'];
        entries.push(new Builder().id('40bc6506-c85d-449d-899b-be4d05695222').thema(thema).entry('Das habe ich nicht verstanden.').get());
        entries.push(new Builder().id('0c2e7610-482a-40b5-a1d9-5aabc7f90782').thema(thema).entry('Das (Wort) verstehe ich nicht.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Kompensation', 'Synonyme oder ähnliche Begriffe verwenden'];
        entries.push(new Builder().id('3dc1e320-335f-4d4c-84f5-b20b16ac501a').thema(thema).entry(['Wo ist mein Buch ... nicht ein Buch ... ein Schreibbuch.', '– Ah, dein Heft?']).get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Kompensation', 'Selbstkorrektur'];
        entries.push(new Builder().id('902b8e48-2fbb-48cb-9ee9-2af13d61b1c7').thema(thema).entry('Ich möchte sagen ... Ich fahre zu Paris ... nein, nach Paris.').get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Kompensation', 'ausdrücken, dass man ein Wort nicht kennt oder es vergessen hat'];
        entries.push(new Builder().id('e9d5d342-9a9f-4384-a773-cc2b765a48e7').thema(thema).entry(['Wie sagt man auf Deutsch?', 'Auf Englisch sagt man ...']).get());

        thema = ['Strategien', 'A1', 'Verständnissicherung', 'Kompensation', 'nachfragen, ob man (trotz fehlerhaftem Deutsch) verstanden wurde'];
        entries.push(new Builder().id('a9ac2ac5-a1a6-4765-814b-71e82533b12a').thema(thema).entry('Ich spreche nicht gut Deutsch. Haben Sie verstanden?').get());
        this.addEntries(entries);
    }

    createStrategiesWordEntries(Builder) {
        let entries = [];
        let thema = ['Strategien', 'A1', 'Wortschatz'];
        entries.push(new Builder().id('99332e42-bcae-4cfe-ad86-49b54d316da8').thema(thema).entry('Strategien').get());
        entries.push(new Builder().id('8827eb98-9020-4e3c-8f2e-4a77140d8311').thema(thema).entry('Redeorganisation').get());
        entries.push(new Builder().id('913cbd81-8fbb-4c17-a071-4d0ba62f53ec').thema(thema).entry('eine Äußerung einleiten').get());
        entries.push(new Builder().id('4b580ad8-3880-4927-a03a-caac968857da').thema(thema).entry('eine Äußerung abschließen').get());
        entries.push(new Builder().id('9bf0bf7e-6fcc-4b4c-a4fd-07f55edc06bc').thema(thema).entry('um das Wort bitten').translate('prendre la parole').get());
        entries.push(new Builder().id('b89ec4a5-b217-4fe8-b0af-1166e658c376').thema(thema).entry('Zuhören signalisieren').translate('signaler son écoute').get());
        entries.push(new Builder().id('118f96aa-6b89-49cc-982d-bcc704b74e11').thema(thema).entry('zum Sprechen auffordern').translate('engager le dialogue').get());
        entries.push(new Builder().id('018b7a0d-86b1-4c6d-8bcb-92e25e9014c4').thema(thema).entry('gemeinsames Wissen andeuten').get());
        entries.push(new Builder().id('e97b75e8-b08d-4645-8bb3-4b1c006d47b6').thema(thema).entry('Beispiele geben').translate('donner des exemples').get());
        entries.push(new Builder().id('97ebb94d-0707-46bc-ba5d-0fde25d6160c').thema(thema).entry('etwas verdeutlichen').translate('expliquer qc.').get());
        entries.push(new Builder().id('b4da55ab-038a-453b-b133-e9947b84e771').thema(thema).entry('das Thema wechseln').translate('changer de sujet').get());
        entries.push(new Builder().id('127a37fe-2f3b-4e1d-b481-8d41877ce4ae').thema(thema).entry('etwas hervorheben').translate('mettre qc. en relief').get());
        entries.push(new Builder().id('2122e01a-5ac3-462e-a70d-7eef629aa4fa').thema(thema).entry('Vermeidung').translate('évitement').get());
        entries.push(new Builder().id('5b7c85ff-56f4-46e9-a2c9-a529ce932f4b').thema(thema).entry('Höflichkeit').translate(['civilité', 'politesse', 'courtoisie']).get());
        entries.push(new Builder().id('a63a7904-3838-4787-acd4-4d3a40c94c04').thema(thema).entry('Abschwächung').translate('modération').get());
        entries.push(new Builder().id('09ada268-0a97-4abb-9ddd-2b9c711c46f4').thema(thema).entry('Verständnissicherung').get());
        entries.push(new Builder().id('4a8bee94-49f6-463d-ae0d-044d91ba03ff').thema(thema).entry('Verständnishilfen anbieten').get());
        entries.push(new Builder().id('d42262bc-e24d-4487-af20-49be9ba983f8').thema(thema).entry('einzelne Wörter oder Begriffe umschreiben').get());
        entries.push(new Builder().id('d42262bc-e24d-4487-af20-49be9ba983f8').thema(thema).entry('Begriff').translate(['idée', 'noton', 'concept', 'terme']).get());
        entries.push(new Builder().id('adbc4ec3-1ec8-426e-98a4-553c922f854e').thema(thema).entry('Rückfragen zur Verständniskontrolle').get());
        entries.push(new Builder().id('02792c81-4e7d-4949-baea-421a7fff24b5').thema(thema).entry('rückfragen').translate('demander des précisions').get());
        entries.push(new Builder().id('3b859628-c5b9-4d1b-b2f5-a1a5109410d7').thema(thema).entry('schwierige Wörter buchstabieren').get());
        entries.push(new Builder().id('303b5b0d-c3d7-41e5-8944-924d10465e66').thema(thema).entry('um Verständnishilfen bitten').get());
        entries.push(new Builder().id('bc28e652-12c4-4084-bdb1-0c71985c5780').thema(thema).entry('signalisieren, dass man etwas nicht verstanden hat').get());
        entries.push(new Builder().id('9fad199c-9beb-4733-af4e-1d0c0e9b4767').thema(thema).entry('um Wiederholung bitten').get());
        entries.push(new Builder().id('e6534820-c86a-43d5-97d7-2a96bbe69a1b').thema(thema).entry('um Erläuterung bitten').get());
        entries.push(new Builder().id('16a3365b-b82d-48ab-9b53-ffcbe6d57573').thema(thema).entry('Erläuterung').translate('explication').get());
        entries.push(new Builder().id('fad22d42-27de-4a19-9293-125b985325e9').thema(thema).entry('jemanden bitten, ein Wort zu buchstabieren').get());
        entries.push(new Builder().id('dd8b3080-98c7-4ce3-bc24-b912cfa7b739').thema(thema).entry('jemanden bitten, etwas aufzuschreiben').get());
        entries.push(new Builder().id('c54014e0-19e3-4a92-b184-c2884c08cad5').thema(thema).entry('jemanden bitten, langsamer zu sprechen').get());
        entries.push(new Builder().id('14453aae-8f79-433d-8eb9-b912e93e132e').thema(thema).entry('um Wiederholung bitten').get());
        entries.push(new Builder().id('0822341e-a17c-4605-a1a2-29b7c1161f06').thema(thema).entry('anzeigen, dass man etwas nicht verstanden hat').get());
        entries.push(new Builder().id('cc5137e3-25e0-4e9b-a2ff-57fab59066ba').thema(thema).entry('Kompensation').get());
        entries.push(new Builder().id('4d95c9f8-ef90-4021-af67-f77b11c64e35').thema(thema).entry('Synonyme oder ähnliche Begriffe verwenden').get());
        entries.push(new Builder().id('02bc5249-8e0d-45d2-8a7e-fdaff054950b').thema(thema).entry('Selbstkorrektur').translate('autocorrection').get());
        entries.push(new Builder().id('9173cce8-a707-48fa-910c-9cb5b7aad84e').thema(thema).entry('ausdrücken, dass man ein Wort nicht kennt oder es vergessen hat').get());
        entries.push(new Builder().id('bcf04882-f60f-4e99-8b8e-fe462b866f7b').thema(thema).entry('nachfragen, ob man (trotz fehlerhaftem Deutsch) verstanden wurde').get());
        this.addEntries(entries);
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    getEntries() {
        return this.entries;
    }
}

export default StrategiesA1Service;