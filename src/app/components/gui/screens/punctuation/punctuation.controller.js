class PunctuationController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        this.entries = [];
        this.entries.push({ sign: '.', signAndSignification: '. der Punkt'})
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