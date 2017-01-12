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
        entries.push(new Builder().thema(thema).entry('Wer ist das?').get());
        entries.push(new Builder().thema(thema).entry('Das ist Wolfgang/Frau Schuster/meine Kollegin.').get());
        entries.push(new Builder().thema(thema).entry('Was ist das?').get());
        entries.push(new Builder().thema(thema).entry('Das ist eine Blume.').get());
        entries.push(new Builder().thema(thema).entry('Ist das eine Orange?').get());
        entries.push(new Builder().thema(thema).entry('Nein, eine Zitrone.').get());
        entries.push(new Builder().thema(thema).entry('Wie heißt das auf Deutsch?').get());
        entries.push(new Builder().thema(thema).entry('Erklären Sie mal.').get());
        return entries;
    }

    getEntries() {
        return this.entries;
    }
}

export default SpeechActsA1Service;