class AlphabetController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        // audio data copied from https://en.m.wikipedia.org/wiki/German_orthography
        let src = 'audio/alphabet/';
        this.letters = [];
        this.letters.push({ value:'a', pronunciation: '[a:], a', audio: src + 'a.ogg' });
        this.letters.push({ value:'b', pronunciation: '[be:], b', audio: src + 'b.ogg' });
        this.letters.push({ value:'c', pronunciation: '[tse:], tsé', audio: src + 'c.ogg' });
        this.letters.push({ value:'d', pronunciation: '[de:], d', audio: src + 'd.ogg' });
        this.letters.push({ value:'e', pronunciation: '[e:], é', audio: src + 'e.ogg' });
        this.letters.push({ value:'f', pronunciation: '[εf], f', audio: src + 'f.ogg' });
        this.letters.push({ value:'g', pronunciation: '[ge:], gué', audio: src + 'g.ogg' });
        this.letters.push({ value:'h', pronunciation: '[ha:], ha', audio: src + 'h.ogg' });
        this.letters.push({ value:'i', pronunciation: '[i:], i', audio: src + 'i.ogg' });
        this.letters.push({ value:'j', pronunciation: '[jοt], iote', audio: src + 'j.ogg' });
        this.letters.push({ value:'k', pronunciation: '[ka:], k', audio: src + 'k.ogg' });
        this.letters.push({ value:'l', pronunciation: '[εl], l', audio: src + 'l.ogg' });
        this.letters.push({ value:'m', pronunciation: '[εm], m', audio: src + 'm.ogg' });
        this.letters.push({ value:'n', pronunciation: '[εn], n', audio: src + 'n.ogg' });
        this.letters.push({ value:'o', pronunciation: '[o:], o', audio: src + 'o.ogg' });
        this.letters.push({ value:'p', pronunciation: '[pe:], p', audio: src + 'p.ogg' });
        this.letters.push({ value:'q', pronunciation: '[ku:], cou', audio: src + 'q.ogg' });
        this.letters.push({ value:'r', pronunciation: '[εr:], r', audio: src + 'r.ogg' });
        this.letters.push({ value:'s', pronunciation: '[εs], s', audio: src + 's.ogg' });
        this.letters.push({ value:'t', pronunciation: '[te:], t', audio: src + 't.ogg' });
        this.letters.push({ value:'u', pronunciation: '[u:], ou', audio: src + 'u.ogg' });
        this.letters.push({ value:'v', pronunciation: '[fau:], faau', audio: src + 'v.ogg' });
        this.letters.push({ value:'w', pronunciation: '[ve:], v', audio: src + 'w.ogg' });
        this.letters.push({ value:'x', pronunciation: '[iks], x', audio: src + 'x.ogg' });
        this.letters.push({ value:'y', pronunciation: '[ypsilon], upsilonn', audio: src + 'y.ogg' });
        this.letters.push({ value:'z', pronunciation: '[tsεt], tzet', audio: src + 'z.ogg' });
        this.letters.push({ value:'ä', pronunciation: 'A-Umlaut', audio: src + 'ä.ogg' });
        this.letters.push({ value:'ö', pronunciation: 'O-Umlaut', audio: src + 'ö.ogg' });
        this.letters.push({ value:'ü', pronunciation: 'U-Umlaut', audio: src + 'ü.ogg' });
        this.letters.push({ value:'ß', pronunciation: '[εstsεt], Eszett, scharfes S', audio: src + 'ss.ogg' });
    }

    onClick(letter) {
        letter.selected = !letter.selected;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default AlphabetController;