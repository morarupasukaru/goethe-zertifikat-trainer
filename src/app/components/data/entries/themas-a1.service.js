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
        entries.push(new Builder().id('').thema(thema).entry('Themen').get());

        thema = ['Themen', 'A1', 'Personen'];
        entries.push(new Builder().id('').thema(thema).entry('Themen').get());
        entries.push(new Builder().id('').thema(thema).entry('Person').get());
        entries.push(new Builder().id('').thema(thema).entry('Name').get());
        entries.push(new Builder().id('').thema(thema).entry('Adresse').get());
        entries.push(new Builder().id('').thema(thema).entry('Telefon').get());
        entries.push(new Builder().id('').thema(thema).entry('Geburtsdatum').get());
        entries.push(new Builder().id('').thema(thema).entry('Geburtsort').get());
        entries.push(new Builder().id('').thema(thema).entry('Alter').get());
        entries.push(new Builder().id('').thema(thema).entry('Geschlecht').get());
        entries.push(new Builder().id('').thema(thema).entry('Familienstand').get());
        entries.push(new Builder().id('').thema(thema).entry('Familie').get());
        entries.push(new Builder().id('').thema(thema).entry('Persönliche Beziehungen').get());
        entries.push(new Builder().id('').thema(thema).entry('Staatsangehörigkeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Nationalität').get());
        entries.push(new Builder().id('').thema(thema).entry('Herkunft').get());
        entries.push(new Builder().id('').thema(thema).entry('Aussehen').get());
        entries.push(new Builder().id('').thema(thema).entry('Gewohnheiten').get());
        entries.push(new Builder().id('').thema(thema).entry('Tagesablauf').get());

        thema = ['Themen', 'A1', 'Wohnen'];
        entries.push(new Builder().id('').thema(thema).entry('Wohnen').get());
        entries.push(new Builder().id('').thema(thema).entry('Wohnung').get());
        entries.push(new Builder().id('').thema(thema).entry('Räume').get());
        entries.push(new Builder().id('').thema(thema).entry('Einrichtung').get());
        entries.push(new Builder().id('').thema(thema).entry('Möbel').get());
        entries.push(new Builder().id('').thema(thema).entry('Haushalt').get());
        entries.push(new Builder().id('').thema(thema).entry('technische Einrichtungen').get());
        entries.push(new Builder().id('').thema(thema).entry('Miete').get());
        entries.push(new Builder().id('').thema(thema).entry('Mietverhältnis').get());
        entries.push(new Builder().id('').thema(thema).entry('Wohnungswechsel').get());

        thema = ['Themen', 'A1', 'Umwelt'];
        entries.push(new Builder().id('').thema(thema).entry('Umwelt').get());
        entries.push(new Builder().id('').thema(thema).entry('Pflanzen').get());
        entries.push(new Builder().id('').thema(thema).entry('Tiere').get());
        entries.push(new Builder().id('').thema(thema).entry('Klima').get());
        entries.push(new Builder().id('').thema(thema).entry('Wetter').get());

        thema = ['Themen', 'A1', 'Reisen/Verkehr'];
        entries.push(new Builder().id('').thema(thema).entry('Reisen').get());
        entries.push(new Builder().id('').thema(thema).entry('privater und öffentlicher Verkehr').get());
        entries.push(new Builder().id('').thema(thema).entry('Unterkunft').get());
        entries.push(new Builder().id('').thema(thema).entry('Gepäck').get());

        thema = ['Themen', 'A1', 'Essen/Trinken'];
        entries.push(new Builder().id('').thema(thema).entry('Essen').get());
        entries.push(new Builder().id('').thema(thema).entry('Trinken').get());
        entries.push(new Builder().id('').thema(thema).entry('Nahrungsmittel').get());
        entries.push(new Builder().id('').thema(thema).entry('Mahlzeiten').get());
        entries.push(new Builder().id('').thema(thema).entry('Speisen').get());
        entries.push(new Builder().id('').thema(thema).entry('Getränke').get());
        entries.push(new Builder().id('').thema(thema).entry(['Lokale', 'Restaurant', 'Café']).get());

        thema = ['Themen', 'A1', 'Einkaufen/Gebrauchsartikel'];
        entries.push(new Builder().id('').thema(thema).entry('Einkaufen').get());
        entries.push(new Builder().id('').thema(thema).entry('Gebrauchsartikel').get());
        entries.push(new Builder().id('').thema(thema).entry('Geschäfte').get());
        entries.push(new Builder().id('').thema(thema).entry('Preis').get());
        entries.push(new Builder().id('').thema(thema).entry('Bezahlen').get());
        entries.push(new Builder().id('').thema(thema).entry('Lebensmittel').get());
        entries.push(new Builder().id('').thema(thema).entry('Kleidung').get());

        thema = ['Themen', 'A1', 'Dienstleistungen'];
        entries.push(new Builder().id('').thema(thema).entry('Dienstleistungen').get());
        entries.push(new Builder().id('').thema(thema).entry('Post').get());
        entries.push(new Builder().id('').thema(thema).entry('Telekommunikation').get());
        entries.push(new Builder().id('').thema(thema).entry('Banken').get());
        entries.push(new Builder().id('').thema(thema).entry('Polizei').get());

        thema = ['Themen', 'A1', 'Erziehung/Ausbildung/Lernen'];
        entries.push(new Builder().id('').thema(thema).entry('Erziehung').get());
        entries.push(new Builder().id('').thema(thema).entry('Ausbildung').get());
        entries.push(new Builder().id('').thema(thema).entry('Lernen').get());
        entries.push(new Builder().id('').thema(thema).entry('Kinderbetreuung').get());
        entries.push(new Builder().id('').thema(thema).entry('Schule').get());
        entries.push(new Builder().id('').thema(thema).entry('Sprachen lernen').get());

        thema = ['Themen', 'A1', 'Arbeit/Beruf'];
        entries.push(new Builder().id('').thema(thema).entry('Arbeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Beruf').get());
        entries.push(new Builder().id('').thema(thema).entry('Arbeitsplatz').get());
        entries.push(new Builder().id('').thema(thema).entry('Urlaub').get());

        thema = ['Themen', 'A1', 'Freizeit/Unterhaltung'];
        entries.push(new Builder().id('').thema(thema).entry('Freizeit').get());
        entries.push(new Builder().id('').thema(thema).entry('Unterhaltung').get());
        entries.push(new Builder().id('').thema(thema).entry('Interessen').get());
        entries.push(new Builder().id('').thema(thema).entry('Sport treiben').get());
        entries.push(new Builder().id('').thema(thema).entry('Radio').get());
        entries.push(new Builder().id('').thema(thema).entry('Fernsehen').get());
        entries.push(new Builder().id('').thema(thema).entry('Internet').get());
        entries.push(new Builder().id('').thema(thema).entry('Lektüre').get());
        entries.push(new Builder().id('').thema(thema).entry('Presse').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default ThemasA1Service;