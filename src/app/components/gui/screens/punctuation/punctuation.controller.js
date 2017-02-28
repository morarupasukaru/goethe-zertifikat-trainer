class PunctuationController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        this.entries = [];
        this.entries.push({ sign: '.', signAndSignification: '. der Punkt'})
        this.entries.push({ sign: ',', signAndSignification: ', das Komma'})
        this.entries.push({ sign: ';', signAndSignification: '; das Semikolon'})
        this.entries.push({ sign: ':', signAndSignification: ': der Doppelpunkt / das Kolon'})
        this.entries.push({ sign: '...', signAndSignification: '... die Auslassungspunkte'})
        this.entries.push({ sign: '?', signAndSignification: '? das Fragezeichen'})
        this.entries.push({ sign: '!', signAndSignification: '! das Ausrufezeichen'})
        this.entries.push({ sign: '"', signAndSignification: '" das Anführungzeichen'})
        this.entries.push({ sign: "'", signAndSignification: "' der Apostroph"})
        this.entries.push({ sign: ' ', signAndSignification: ' das Leerzeichen'})
        this.entries.push({ sign: '()', signAndSignification: '() die (runde) Klammern'})
        this.entries.push({ sign: '(', signAndSignification: '( die linke Klammer / die Klammer auf'})
        this.entries.push({ sign: ')', signAndSignification: ') die rechte Klammer / die Klammer zu '})
        this.entries.push({ sign: '[]', signAndSignification: '[] die eckigen Klammern'})
        this.entries.push({ sign: '<>', signAndSignification: '<> die spitzen Klammern'})
        this.entries.push({ sign: '{}', signAndSignification: '{} die geschweiften Klammern / die geschwungenen Klammern '})
        this.entries.push({ sign: '/', signAndSignification: '/ der Schrägstrich'})
        this.entries.push({ sign: '\\', signAndSignification: '\\ der umgekehrte Schrägstrich'})
        this.entries.push({ sign: '_', signAndSignification: '_ der Unterstrich'})
        this.entries.push({ sign: '-', signAndSignification: '- der Viertelgeviertstrich / der Bindestrich (zwischen zwei Worte) / der Trennstrich (Wort in zwei Zeilen getrennt) / der Ergänzungsstrich (z.B. Ein- und Ausgänge)'})
        this.entries.push({ sign: '|', signAndSignification: '| der senkrechte Strich'})
        this.entries.push({ sign: '@', signAndSignification: '@ das At-Zeichen'})
        this.entries.push({ sign: '#', signAndSignification: '# das Rautenzeichen'})
        this.entries.push({ sign: '&', signAndSignification: '& das Et-Zeichen / das Kaufmannsund'})
        this.entries.push({ sign: '~', signAndSignification: '~ die Tilde'})
        this.entries.push({ sign: '*', signAndSignification: '* das Sternchen / der Asteriskus '})
        this.entries.push({ sign: '´', signAndSignification: '´ der Akut'})
    }

    show(entry) {
        entry.displayed = !entry.displayed;
    }

    showAll() {
        for (let i = 0; i < this.entries.length; i++) {
            this.entries[i].displayed = true;
        }
    }

    back() {
        this.$location.url('/stack');
    }
}

export default PunctuationController;