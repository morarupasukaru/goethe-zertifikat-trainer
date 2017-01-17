class SpeechActsA1Service {

    /*@ngInject*/
    constructor(SpeechActBuilder) {
        this.createEntries(SpeechActBuilder);
    }

    createEntries(Builder) {
        this.entries = [];
        this.addEntries(this.createSpeechActsEntries(Builder));
    }

    addEntries(newEntries) {
        for (let i = 0; i < newEntries.length; i++) {
            this.entries.push(newEntries[i]);
        }
    }

    createSpeechActsEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'Informationsaustausch', 'benennen/definieren/identifizieren'];
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry('Wer ist das?').get());
        entries.push(new Builder().id('cf27cc2b-d3ee-4a83-b89e-cba21646f0e5').thema(thema).entry('Das ist Wolfgang/Frau Schuster/meine Kollegin.').get());
        entries.push(new Builder().id('12534c9b-9623-47dc-9a92-33d6d323d403').thema(thema).entry('Was ist das?').get());
        entries.push(new Builder().id('fe27f111-4a2f-417b-a60b-c5f74a893c85').thema(thema).entry('Das ist eine Blume.').get());
        entries.push(new Builder().id('f99c0778-671e-4e60-82e1-7a0cdb1c4cb9').thema(thema).entry('Ist das eine Orange?').get());
        entries.push(new Builder().id('b6aa1d11-c892-458b-9688-efe6ffefff17').thema(thema).entry('Nein, eine Zitrone.').get());
        entries.push(new Builder().id('3602d2d6-a8b3-4aeb-a0b2-cf0027b5d7ae').thema(thema).entry('Wie heißt das auf Deutsch?').get());
        entries.push(new Builder().id('cd9cc7fb-bb19-44c9-9789-8c5c1fe86416').thema(thema).entry('Erklären Sie mal.').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;