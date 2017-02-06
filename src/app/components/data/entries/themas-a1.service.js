class ThemasA1Service {

    /*@ngInject*/
    constructor(ThemaBuilder) {
        this.createEntries(ThemaBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createThemasEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createThemasEntries(Builder) {
        let entries = [];
        let thema = ['Themen', 'A1'];
        thema = ['Themen', 'A1', 'Personen'];
        entries.push(new Builder().id('308a9821-1c17-4c17-887e-f667d0ffe934').thema(thema).entry('Themen').get());
        entries.push(new Builder().id('a5939876-773b-4cd3-b18d-2fb0171c45a3').thema(thema).entry('Person').get());
        entries.push(new Builder().id('4da0b39c-e796-44d0-83da-1de642c17133').thema(thema).entry('Name').get());
        entries.push(new Builder().id('85e835b0-8078-4c74-add0-0aaa121520c3').thema(thema).entry('Adresse').get());
        entries.push(new Builder().id('b583d05d-e389-4c16-ab47-9dc5f0e2c661').thema(thema).entry('Telefon').get());
        entries.push(new Builder().id('833e72ca-199f-4e32-80cd-e166df09b175').thema(thema).entry('Geburtsdatum').get());
        entries.push(new Builder().id('fbc9a19d-c25c-462b-88ea-0282ebea7290').thema(thema).entry('Geburtsort').get());
        entries.push(new Builder().id('998967a9-7881-4b26-b8ef-5780cbf5549f').thema(thema).entry('Alter').get());
        entries.push(new Builder().id('811e8aaf-86b6-4f73-93a4-9ae28f4d11d7').thema(thema).entry('Geschlecht').get());
        entries.push(new Builder().id('d95ffef6-f05a-42bb-9df9-ff202032e80c').thema(thema).entry('Familienstand').translate('état civil').get());
        entries.push(new Builder().id('5b56ee30-25fe-48f4-aaab-529cf0a29a81').thema(thema).entry('Familie').get());
        entries.push(new Builder().id('e2293b2f-beec-4265-aa23-9464410b1324').thema(thema).entry('Persönliche Beziehungen').get());
        entries.push(new Builder().id('6443c605-9a7f-4647-866a-8f5735a0a1d6').thema(thema).entry('Staatsangehörigkeit').translate('nationalité').get());
        entries.push(new Builder().id('95483e3e-c62c-4e4a-b2ab-666750b2231c').thema(thema).entry('Nationalität').get());
        entries.push(new Builder().id('6196e37e-97ea-4110-94bb-ec3f2afbce97').thema(thema).entry('Herkunft').get());
        entries.push(new Builder().id('ffb00923-5bc7-4494-9ff6-b3c7ae3ee7ce').thema(thema).entry('Aussehen').translate(['aspect', 'apparence']).get());
        entries.push(new Builder().id('f518a969-1b61-4cd1-9dc0-311e98868326').thema(thema).entry('Gewohnheit').translate(['coutume', 'habitude']).get());
        entries.push(new Builder().id('739a8fd6-9211-4920-893d-1a397e5ec086').thema(thema).entry('Tagesablauf').translate(['emploi du temps', 'journée']).get());

        thema = ['Themen', 'A1', 'Wohnen'];
        entries.push(new Builder().id('994e2fb7-7d2c-4e5d-9d18-92b3562f26a7').thema(thema).entry('Wohnen').translate('logement').get());
        entries.push(new Builder().id('0b9c1b8e-1d0f-442b-acfc-db138c6b9c14').thema(thema).entry('Wohnung').get());
        entries.push(new Builder().id('926e0ac3-fdb8-4ca6-9b82-79227dd32eee').thema(thema).entry('Räume').get());
        entries.push(new Builder().id('73d87a5f-059c-473a-96c6-4868c50607f0').thema(thema).entry('Einrichtung').translate(['aménagement', 'ameublement', 'équipement']).get());
        entries.push(new Builder().id('2374e874-efe5-4908-b1fa-252b528433ee').thema(thema).entry('Möbel').get());
        entries.push(new Builder().id('404680cc-79fb-4f9c-bf47-8a72644f9570').thema(thema).entry('Haushalt').translate(['foyer', 'ménage']).get());
        entries.push(new Builder().id('bbf6c65b-adf0-4c59-867c-2883ad453640').thema(thema).entry('technische Einrichtungen').translate('équipement technique').get());
        entries.push(new Builder().id('f6650f84-d793-478e-923a-c16c00683d18').thema(thema).entry('Miete').translate(['loyer', 'bail']).get());
        entries.push(new Builder().id('e25768a6-3bcc-4bf3-829f-9d44b46c1bab').thema(thema).entry('Mietverhältnis').translate('relation de loyer').get());
        entries.push(new Builder().id('d023f771-a369-48d4-b653-71ee0704ec81').thema(thema).entry('Wohnungswechsel').translate('changement de domicile').get());

        thema = ['Themen', 'A1', 'Umwelt'];
        entries.push(new Builder().id('5c672e57-9b48-4d9a-a801-dee6558978a8').thema(thema).entry('Umwelt').translate('environnement').get());
        entries.push(new Builder().id('8e7ab191-6984-439d-87bd-599a331fd105').thema(thema).entry('Pflanze').translate('plante').get());
        entries.push(new Builder().id('e6c30353-0ed9-43d4-94d6-bafa5694b03a').thema(thema).entry('Tier').translate('animal').get());
        entries.push(new Builder().id('5f3193e2-e5ef-40bd-9269-5e4e0c4b7d5e').thema(thema).entry('Klima').translate('climat').get());
        entries.push(new Builder().id('5f791093-3416-4c27-bc89-82acdec5171e').thema(thema).entry('Wetter').translate('temps').get());

        thema = ['Themen', 'A1', 'Reisen/Verkehr'];
        entries.push(new Builder().id('2baf7ca4-7a87-47de-8277-b99e6a917d40').thema(thema).entry('Reise').translate(['déplacement', 'voyage']).get());
        entries.push(new Builder().id('406e896f-81a3-4f3b-90ef-1763f6d165e2').thema(thema).entry('privater und öffentlicher Verkehr').translate('transports publics ou privés').get());
        entries.push(new Builder().id('26b4430b-0490-48e7-ba5e-c6c39257e197').thema(thema).entry('Unterkunft').translate('logement', 'hébergement').get());
        entries.push(new Builder().id('04ddf863-ce21-4e2b-8a87-e81841be60d5').thema(thema).entry('Gepäck').translate('bagages').get());

        thema = ['Themen', 'A1', 'Essen/Trinken'];
        entries.push(new Builder().id('b7835cc1-4282-41dd-a114-12100b5c4273').thema(thema).entry('essen').translate('manger').get());
        entries.push(new Builder().id('b0f39a3a-36e0-46d5-88dc-764dadf3dc92').thema(thema).entry('trinken').translate('boire').get());
        entries.push(new Builder().id('1420691e-0cef-4af1-a121-c245a13d7c80').thema(thema).entry('Nahrungsmittel').translate('aliment').get());
        entries.push(new Builder().id('75fbcdcf-756c-4b1d-98ea-01218eb3d8b7').thema(thema).entry('Mahlzeit').translate('repas').get());
        entries.push(new Builder().id('b3fd234c-02c8-420b-a3ab-d7c8145a5580').thema(thema).entry('Speise').translate(['nourriture', 'repas']).get());
        entries.push(new Builder().id('56726520-35fb-4b9c-a87f-e13b956aa192').thema(thema).entry('Getränke').translate('boisson').get());
        entries.push(new Builder().id('208cd1e0-c160-403b-aaee-753bde5bad83').thema(thema).entry(['Lokale', 'Restaurant', 'Café']).get());

        thema = ['Themen', 'A1', 'Einkaufen/Gebrauchsartikel'];
        entries.push(new Builder().id('29345ce4-5a16-4548-8e0e-5fc6e2126f4e').thema(thema).entry('einkaufen').translate('faire les commissions').get());
        entries.push(new Builder().id('9798177b-9a1f-41fa-956c-c2607c20080e').thema(thema).entry('Gebrauchsartikel').translate("article d'usage courant").get());
        entries.push(new Builder().id('79f60ff8-8275-4b4a-b88d-52b7cd2e3ed2').thema(thema).entry('Geschäft').translate(['magasin', 'boutique']).get());
        entries.push(new Builder().id('9b5f6c78-165e-4696-882b-79f60ea9a5c5').thema(thema).entry('Preis').get());
        entries.push(new Builder().id('7bca2ea7-7446-4a71-aeea-ebf6d9ad7ef9').thema(thema).entry('bezahlen').translate('payer qc.').get());
        entries.push(new Builder().id('ee69da67-7ce9-4f48-9ba2-eb765eb603e9').thema(thema).entry('Lebensmittel').translate(['aliment', 'denrées alimentaires']).get());
        entries.push(new Builder().id('7e6197f2-28b0-4ed3-9ca4-dacb215b093c').thema(thema).entry('Kleidung').get());

        thema = ['Themen', 'A1', 'Dienstleistungen'];
        entries.push(new Builder().id('bb86bf8f-66be-435d-9561-cae73c106ce2').thema(thema).entry('Dienstleistungen').translate('produits et services').get());
        entries.push(new Builder().id('9f4b5d4d-81d4-4359-990e-a428fd5c5f92').thema(thema).entry('Post').get());
        entries.push(new Builder().id('c359198b-7fea-438d-8ad5-931ed72c9c41').thema(thema).entry('Telekommunikation').get());
        entries.push(new Builder().id('fff2141d-627e-440e-bcf7-946542bbc2e7').thema(thema).entry('Banken').get());
        entries.push(new Builder().id('2495a439-b21f-497d-bd4a-1ebac26d3910').thema(thema).entry('Polizei').get());

        thema = ['Themen', 'A1', 'Erziehung/Ausbildung/Lernen'];
        entries.push(new Builder().id('97352b21-f8c3-4e81-a7a9-e2bfa594ba0f').thema(thema).entry('Erziehung').translate('éducation').get());
        entries.push(new Builder().id('1b913410-ffa3-4dfc-ac89-8b6eef1a6fb7').thema(thema).entry('Ausbildung').translate(['apprentissage', 'formation', 'éducation']).get());
        entries.push(new Builder().id('04b269b0-ce88-461d-9de1-f6fef96d0984').thema(thema).entry('lernen').translate(['apprendre qc.', 'étudier qc.']).get());
        entries.push(new Builder().id('a31121b0-e6f4-46d4-ad18-3b9dd4b21c43').thema(thema).entry('Kinderbetreuung').translate("garde d'enfant").get());
        entries.push(new Builder().id('de032262-d718-4c6c-bb5d-e3c373a83338').thema(thema).entry('Schule').get());
        entries.push(new Builder().id('9b3d92f3-cb26-4296-bdda-54572be51d39').thema(thema).entry('Sprachen lernen').get());

        thema = ['Themen', 'A1', 'Arbeit/Beruf'];
        entries.push(new Builder().id('0cfecd0a-b4ba-45ca-86ef-a2d67fc7d128').thema(thema).entry('Arbeit').get());
        entries.push(new Builder().id('8c28e50c-41fa-4e3e-b82b-999f30a1529f').thema(thema).entry('Beruf').get());
        entries.push(new Builder().id('a264fceb-ee75-4de6-a6d4-d7a0f268bb92').thema(thema).entry('Arbeitsplatz').get());
        entries.push(new Builder().id('04036f95-fb4f-45d7-8c84-23df80850a0d').thema(thema).entry('Urlaub').get());

        thema = ['Themen', 'A1', 'Freizeit/Unterhaltung'];
        entries.push(new Builder().id('3640cad0-4398-474f-bf4c-9edc80e809bd').thema(thema).entry('Freizeit').get());
        entries.push(new Builder().id('d5e0c9f7-c8b9-49b0-a723-09b31f622df0').thema(thema).entry('Unterhaltung').translate(['conversation', 'divertissement']).get());
        entries.push(new Builder().id('08062372-e97a-42d5-83cd-b3e7be69f07d').thema(thema).entry('Interessen').get());
        entries.push(new Builder().id('b9cfe4b9-b7df-4245-9098-34bed94a960f').thema(thema).entry('Sport treiben').translate('faire du sport').get());
        entries.push(new Builder().id('04dfb8dd-4421-471a-91e1-19114db7036d').thema(thema).entry('Radio').get());
        entries.push(new Builder().id('4c6d31d5-f696-4f4b-a454-10153e532649').thema(thema).entry('Fernsehen').get());
        entries.push(new Builder().id('d9560a69-acb2-42f4-8013-488c72d46e06').thema(thema).entry('Internet').get());
        entries.push(new Builder().id('bac206ea-5e9e-4a24-b3ed-ef1e2f8110fa').thema(thema).entry('Lektüre').translate('lecture').get());
        entries.push(new Builder().id('131f63e0-23fd-4def-8b2b-69f57b36ea39').thema(thema).entry('Presse').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default ThemasA1Service;