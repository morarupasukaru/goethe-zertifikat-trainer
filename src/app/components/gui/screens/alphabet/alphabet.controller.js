class AlphabetController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        // audio data copied from https://en.m.wikipedia.org/wiki/German_orthography

        /*

                    <audio controls src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAA+..........+fm5nB6slBlZ3Fcha363d5ut7u3ni1rLoPf728l3KcK" />
*/
        this.letters = [];
        this.letters.push({ value:'a', pronunciation: '[a:], a',
            audio: "data:audio/ogg;base64,"
            });
        this.letters.push({ value:'b', pronunciation: '[be:], b' });
        this.letters.push({ value:'c', pronunciation: '[tse:], tsé' });
        this.letters.push({ value:'d', pronunciation: '[de:], d' });
        this.letters.push({ value:'e', pronunciation: '[e:], é' });
        this.letters.push({ value:'f', pronunciation: '[εf], f' });
        this.letters.push({ value:'g', pronunciation: '[ge:], gué' });
        this.letters.push({ value:'h', pronunciation: '[ha:], ha' });
        this.letters.push({ value:'i', pronunciation: '[i:], i' });
        this.letters.push({ value:'j', pronunciation: '[jοt], iote' });
        this.letters.push({ value:'k', pronunciation: '[ka:], k' });
        this.letters.push({ value:'l', pronunciation: '[εl], l' });
        this.letters.push({ value:'m', pronunciation: '[εm], m' });
        this.letters.push({ value:'n', pronunciation: '[εn], n' });
        this.letters.push({ value:'o', pronunciation: '[o:], o' });
        this.letters.push({ value:'p', pronunciation: '[pe:], p' });
        this.letters.push({ value:'q', pronunciation: '[ku:], cou' });
        this.letters.push({ value:'r', pronunciation: '[εr:], r' });
        this.letters.push({ value:'s', pronunciation: '[εs], s' });
        this.letters.push({ value:'t', pronunciation: '[te:], t' });
        this.letters.push({ value:'u', pronunciation: '[u:], ou' });
        this.letters.push({ value:'v', pronunciation: '[fau:], faau' });
        this.letters.push({ value:'w', pronunciation: '[ve:], v' });
        this.letters.push({ value:'x', pronunciation: '[iks], x' });
        this.letters.push({ value:'y', pronunciation: '[ypsilon], upsilonn' });
        this.letters.push({ value:'z', pronunciation: '[tsεt], tzet' });
        this.letters.push({ value:'ä', pronunciation: 'A-Umlaut', audio: 'audio/alphabet/ä.ogg' });
        this.letters.push({ value:'ö', pronunciation: 'O-Umlaut', audio: 'audio/alphabet/ö.ogg' });
        this.letters.push({ value:'ü', pronunciation: 'U-Umlaut', audio: 'audio/alphabet/ü.ogg' });
        this.letters.push({ value:'ß', pronunciation: '[εstsεt], Eszett, scharfes S', audio: 'audio/alphabet/ss.ogg' });
    }

    onClick(letter) {
        letter.selected = !letter.selected;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default AlphabetController;