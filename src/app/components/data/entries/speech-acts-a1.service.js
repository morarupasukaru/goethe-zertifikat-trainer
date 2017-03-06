class SpeechActsA1Service {

    /*@ngInject*/
    constructor(SpeechActBuilder, VocabularyBuilder) {
        this.entries = [];
        this.createEntries(SpeechActBuilder);
        this.createThemaAsWordEntries(VocabularyBuilder);
    }

    createEntries(Builder) {
        this.addEntries(this.createInformationsaustauschEntries(Builder));
        this.addEntries(this.createBewertungKommentarEntries(Builder));
        this.addEntries(this.createGefuehlsausdruckEntries(Builder));
        this.addEntries(this.createHandlungsregulierungEntries(Builder));
        this.addEntries(this.createSozialeKonventionenEntries(Builder));
    }

    createThemaAsWordEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Wortschatz'];
        entries.push(new Builder().id('c2941274-8685-45b6-89db-9607fb844973').thema(thema).entry('Sprachhandlung').translate('acte de parole').get());
        entries.push(new Builder().id('bfe86459-9246-4663-b432-7a8562e9d0c5').thema(thema).entry('Informationsaustausch').translate("échange d'information").get());
        entries.push(new Builder().id('15430452-fa42-41c7-8add-bce027209637').thema(thema).entry('benennen').translate('qualifier qc.').get());
        entries.push(new Builder().id('6602d946-7525-48ae-b11a-5e6ab8fdddb8').thema(thema).entry('definieren').translate('définir qc.').get());
        entries.push(new Builder().id('9b6220e9-f912-497f-a9e9-c2ddb016c0dc').thema(thema).entry('identifizieren').translate('identifier qn./qc.').get());
        entries.push(new Builder().id('1642258c-0779-409e-952b-7a953cc3a920').thema(thema).entry('beschreiben').translate('décrire qn./qc.').get());
        entries.push(new Builder().id('317d48aa-1ef1-4b86-94d9-8e444c816f24').thema(thema).entry('erklären').translate('expliquer qc.').get());
        entries.push(new Builder().id('4cfc2e8a-7dce-486a-9594-bcb6ef4dc030').thema(thema).entry('berichten').translate(['communiquer qc.', 'faire un rapport (sur qc.)']).get());
        entries.push(new Builder().id('63f8f7c9-6299-4013-ad3f-62eb4fef005c').thema(thema).entry('Mitteilung').translate(['avis', 'communication', 'message']).get());
        entries.push(new Builder().id('471c25f2-69e5-445c-8b18-d2733ed1f69f').thema(thema).entry('Ankündigung').translate('annonce').get());
        entries.push(new Builder().id('3ab4631b-34d5-4351-b017-1cfbf27dbd50').thema(thema).entry('Zweck angeben').translate('citer but').get());
        entries.push(new Builder().id('b3173eba-3f60-4653-ba42-4f52d19ea080').thema(thema).entry('Bestimmung angeben').translate('citer détermination').get());
        entries.push(new Builder().id('db117add-e12f-468c-87f4-2a96590c1d9c').thema(thema).entry('Wissen').translate(['savoir', 'connaissance(s)', 'science']).get());
        entries.push(new Builder().id('9de7c64a-ce80-4736-ba7d-7e0287513ff9').thema(thema).entry('Unwissen').translate('ignorance').get());
        entries.push(new Builder().id('086d70aa-4765-4a82-af90-86a9a527a1b2').thema(thema).entry('Bewertung').translate(['évaluation (de la valeur)', 'estimation (de la valeur)', 'cote']).get());
        entries.push(new Builder().id('1d9922c2-1cb6-451f-aac4-5a5b0f332215').thema(thema).entry('Kommentar').translate('commentaire').get());
        entries.push(new Builder().id('a1312880-6fc7-40d0-8034-b596889b90fd').thema(thema).entry('Zufriedenheit').translate(['satisfaction', 'contentement']).get());
        entries.push(new Builder().id('963ecd7d-ea13-4cbf-8c6e-5adf4f838770').thema(thema).entry('Unzufriedenheit').translate(['insatisfaction', 'mécontentement']).get());
        entries.push(new Builder().id('95bf5e32-7b4e-450e-8bbf-7dd670f1d775').thema(thema).entry('Gefallen').translate('plaisir').get());
        entries.push(new Builder().id('1a475117-fc9a-46ab-b509-bc548e2618d6').thema(thema).entry('Missfallen').translate(['déplaisir', 'réprobation']).get());
        entries.push(new Builder().id('78b8ed3a-e370-442b-b2cf-9b22482f1d1d').thema(thema).entry('Interesse').translate('intérêt').get());
        entries.push(new Builder().id('76fdcac7-54ac-4d91-8169-a6220bde8df5').thema(thema).entry('Desinteresse').translate('désintérêt').get());
        entries.push(new Builder().id('19fc33f8-8f10-4e38-930b-530909ef946e').thema(thema).entry('Billigung').translate(['approbation', 'consentement']).get());
        entries.push(new Builder().id('fbde8281-96b9-466b-98e6-1aaa741df5a9').thema(thema).entry('Missbilligung').translate(['désapprobation', 'réprobation', 'désaveu']).get());
        entries.push(new Builder().id('e46bc1e3-0890-492f-abeb-0baaaf7fe839').thema(thema).entry('Zustimmung').translate(['approbation', 'consentement']).get());
        entries.push(new Builder().id('9a4f1158-6950-43fa-81b4-4d3329dcd05b').thema(thema).entry('Ablehnung').translate(['refus', 'rejet', 'récusation']).get());
        entries.push(new Builder().id('1d9b001e-974f-4b36-a33f-5feda37f925a').thema(thema).entry('Wunsch').translate(['désir', 'souhait', 'vœu']).get());
        entries.push(new Builder().id('692009a1-e0ce-40d7-bdde-9fa9c3ab6dcc').thema(thema).entry('Vorlieben').translate(['goût', 'prédilection', 'préférence']).get());
        entries.push(new Builder().id('38ab04e5-38c0-4789-93e7-f0dacc75899c').thema(thema).entry('Wichtigkeit').translate('importance').get());
        entries.push(new Builder().id('be21220c-436b-4a97-97c3-291c04134146').thema(thema).entry('verneinen').translate('répondre négativement à qc.').get());
        entries.push(new Builder().id('7c862f5d-e9e0-440c-8f78-9e9ab097b291').thema(thema).entry('Widerspruch').translate(['opposition', 'contradiction']).get());
        entries.push(new Builder().id('830a39d4-e062-4bc4-abc8-c2347b66c0b2').thema(thema).entry('Beschwerde').translate(['réclamation', 'plainte', 'doléance']).get());
        entries.push(new Builder().id('2d9ff58f-cc83-4e6e-ba65-e93f73282166').thema(thema).entry('Rechtfertigung').translate(['justification', 'légimitation']).get());
        entries.push(new Builder().id('5f8fef39-026a-470e-98bb-a4e96ec59ef0').thema(thema).entry('Begründung').translate(['motivation', 'justification']).get());
        entries.push(new Builder().id('cc9029a5-db09-432b-878e-19b5afa06bb1').thema(thema).entry('Freude').translate(['joie', 'plaisir', 'allégresse']).get());
        entries.push(new Builder().id('87be95f2-9d44-4844-99be-c2c440077e9c').thema(thema).entry('Bedauern').translate('regret').get());
        entries.push(new Builder().id('91b91a38-71dc-419d-89b0-1abbce29a592').thema(thema).entry('Gefühlsausdruck').translate('expression émotionnelle').get());
        entries.push(new Builder().id('194b662a-b568-4cd9-90f3-fb384fb7be82').thema(thema).entry('Neigung').translate(['attirance', 'inclinaison', 'penchant']).get());
        entries.push(new Builder().id('6bb2634a-3b44-4338-ba49-5b3946f9ca46').thema(thema).entry('Abneigung').translate(['aversion', 'répulsion']).get());
        entries.push(new Builder().id('02fbd261-2721-449f-aa1f-f60a3fe6091d').thema(thema).entry('Gelassenheit').translate(['impassibilité', 'sang-froid (maîtrise de soi)', 'contenance', 'calme', 'flegme']).get());
        entries.push(new Builder().id('c28adfb2-4655-4788-8a72-63010ded1a47').thema(thema).entry('Gleichgültigkeit').translate(['indifférence', 'détachement']).get());
        entries.push(new Builder().id('0c7924c9-1ebc-4d94-94c9-380ee83fb819').thema(thema).entry('Mitleid').translate(['compassion', 'pitié', 'apitoiement']).get());
        entries.push(new Builder().id('4d666b24-185d-4c78-ac0f-0dc9aac9a28a').thema(thema).entry('Erstaunen').translate('étonnement').get());
        entries.push(new Builder().id('64965ceb-6c6f-40bb-810d-0e5362110076').thema(thema).entry('Überraschung').translate(['surprise', 'mauvaise surprise']).get());
        entries.push(new Builder().id('8f6ee307-cb9d-4623-95ff-b9e3bdb141df').thema(thema).entry('Hoffnung').translate(['espoir', 'espérance']).get());
        entries.push(new Builder().id('ca7bebbb-170f-4b13-a7b3-d399a107b8e0').thema(thema).entry('Sorge').translate(['souci', 'préocupation', 'inquiétude']).get());
        entries.push(new Builder().id('1aa6bb06-faad-47f7-9aa3-973a28c6fb36').thema(thema).entry('Befürchtung').translate('appréhension (de qc.)').get());
        entries.push(new Builder().id('c31c50ee-5481-49f0-b8d0-f1577c88d54c').thema(thema).entry('Enttäuschung').translate(['désenchantement', 'déception', 'désillusion']).get());
        entries.push(new Builder().id('eab0a9f4-10b2-4570-b645-d9f399674299').thema(thema).entry('Handlungsregulierung').translate("régulation de l'action").get());
        entries.push(new Builder().id('9b93430f-a8c3-4977-b9f8-803db85df02b').thema(thema).entry('Bitte').translate(['demande', 'sollication', 'prière']).get());
        entries.push(new Builder().id('9270d45b-9242-4a89-be4c-33cf5feff7fe').thema(thema).entry('Bestätigung').translate(['validation', 'confirmation']).get());
        entries.push(new Builder().id('cd33dbb5-5985-429f-acf6-f25dafa6f654').thema(thema).entry('Hilfe anbieten').translate("proposer de l'aide").get());
        entries.push(new Builder().id('4e22e0bb-3ff7-4b9f-9d1b-f55b586f474c').thema(thema).entry('Hilfe annehmen').translate("accepter de l'aide").get());
        entries.push(new Builder().id('0d672742-5031-46bb-977b-9b17fef051ab').thema(thema).entry('Hilfe ablehnen').translate("refuser de l'aide").get());
        entries.push(new Builder().id('f259c5ef-b29b-4a73-ab41-5fd22a4d1793').thema(thema).entry('Bestellung').translate('commande').get());
        entries.push(new Builder().id('39079227-173a-476f-a508-13ef0e0d48a4').thema(thema).entry('Rat').translate('conseil').get());
        entries.push(new Builder().id('785dedfc-2daa-4b79-8fd9-b12751cb72bf').thema(thema).entry('Empfehlung').translate(['suggestion', 'recommandation']).get());
        entries.push(new Builder().id('f64584b6-4ddc-4d94-8c69-aad2edabc555').thema(thema).entry('Warnung').translate(['avertissement', 'mise en garde', 'semonce']).get());
        entries.push(new Builder().id('9f0ba5d8-fed8-4ebd-bacb-ac2b2d09ff97').thema(thema).entry('Erlaubnis').translate(['permission', 'autorisation', 'permis']).get());
        entries.push(new Builder().id('da9d7fa6-696d-4f70-9aee-44a02c1ef15b').thema(thema).entry('Genehmigung').translate(['consontement', 'autorisation', 'octroi']).get());
        entries.push(new Builder().id('6f0ec975-900a-4f2f-a43f-acdb3dcda780').thema(thema).entry('Vorschlag').translate(['suggestion', 'proposition']).get());
        entries.push(new Builder().id('aa072ce0-21df-48a3-8ffa-1bc7ae831913').thema(thema).entry('Versprechung').translate('promesse').get());
        entries.push(new Builder().id('509e6e8a-d755-4254-bef4-340dd7aa3e84').thema(thema).entry('Verabredung').translate('rendez-vous').get());
        entries.push(new Builder().id('d2f1c952-b366-46db-8db6-fefd56edfab3').thema(thema).entry('Einladung').translate(['invitation', 'convocation']).get());
        entries.push(new Builder().id('b0be4b5d-55b9-4de8-aaed-1bee9b85011c').thema(thema).entry('Soziale Konventionen').translate('conventions sociales').get());
        entries.push(new Builder().id('6103de06-19e1-48f7-9428-e86a6ab39dcb').thema(thema).entry('Kontaktaufnahme').translate('prise de contact').get());
        entries.push(new Builder().id('abf797d7-bb8b-41fe-84b3-273dd1ee30b7').thema(thema).entry('jemanden ansprechen').translate('plaire à qn.').get());
        entries.push(new Builder().id('40def51a-eb2b-414e-8f54-2652e538086a').thema(thema).entry('grüßen').translate(['saluer qn.', 'dire bonjour à qn.']).get());
        entries.push(new Builder().id('07880339-3900-4b37-a72c-d1629073faf1').thema(thema).entry('sich/jemanden vorstellen').translate(['se présenter', 'présenter qn. à qn.']).get());
        entries.push(new Builder().id('7496da78-9006-4f81-818c-a17f3154eaa9').thema(thema).entry('über das Befinden sprechen').translate("discuter sur l'état de santé").get());
        entries.push(new Builder().id('48aa636d-f709-439c-a171-088e4c345c21').thema(thema).entry('gute Wünsche').translate('bons voeux').get());
        entries.push(new Builder().id('09de2344-69f1-4c51-90d8-127f7da7c094').thema(thema).entry('Gratulation').translate('félicitation').get());
        entries.push(new Builder().id('9ddd9e58-2a23-4b34-91d9-c1c99c558bed').thema(thema).entry('eine Anerkennung aussprechen').translate('féliciter qn.').get());
        entries.push(new Builder().id('7ac5322b-044d-4385-95c7-4668341a477e').thema(thema).entry('ein Kompliment machen').translate('complimenter qn.').get());
        entries.push(new Builder().id('1f82a551-efbc-4017-8f13-0eed10296a66').thema(thema).entry('Dank').translate(['merci', 'remerciement']).get());
        entries.push(new Builder().id('4a1b534f-181f-476f-9151-974e82c7386a').thema(thema).entry('Entschuldigung').translate('excuse').get());
        entries.push(new Builder().id('fe9ba8b6-4f95-4304-929d-6738ad2daf9d').thema(thema).entry('Verabschiedung').translate('formule de politesse en fin de lettre, email').get());
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

export default SpeechActsA1Service;