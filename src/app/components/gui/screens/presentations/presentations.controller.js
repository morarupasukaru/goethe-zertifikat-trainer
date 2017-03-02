class PresentationsController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        this.data = [
            {
                groupId: 'Privat',
                groups: [
                    {
                        groupId: 'Name',
                        entries: [
                            'Wie heißen Sie?',
                            '– Ich heiße <Vorname> <Nachname>.',
                            '– Ich bin <Vorname> <Nachname>.',
                            '– Mein Name ist <Vorname> <Nachname>.',
                            'Was ist Ihr Vorname und Ihr Nachname?',
                            '– Mein Vorname ist <Vorname> und mein Familienname ist <Nachname>.',
                            'Können Sie das bitte buchstabieren?',
                            '– Ja: ... und dann ...',
                            'Ich buchstabiere meinen Familiennamen: ...'
                        ]
                    },
                    {
                        groupId: 'Alter',
                        entries: [
                            'Wie alt sind Sie?',
                            '– Ich bin xx Jahre alt.'
                        ]
                    },
                    {
                        groupId: 'Geburtstag',
                        entries: [
                            'Wann haben Sie Geburtstag?',
                            '– Ich habe am 9. Oktober Geburstag.'
                        ]
                    },
                    {
                        groupId: 'Land',
                        entries: [
                            'Woher kommen Sie?',
                            '– Ich komme aus der Schweiz.'
                        ]
                    },
                    {
                        groupId: 'Wohnort',
                        entries: [
                            'Wo wohnen Sie?',
                            '– Ich wohne in Neuenburg, in der ... Strasse xx. Die Postleizahl ist 2001.',
                            'Wie heißt die Straße?',
                            '– Das ist die ... Straße.',
                            'Wie ist Ihre Hausnummer?',
                            '– Die Hausnummer ist xx.',
                            'Wie ist die Postleitzahl?',
                            '– Die Postleitzahl ist 2001.'
                        ]
                    },
                    {
                        groupId: 'Telefon',
                        entries: [
                            'Haben Sie Telefon?',
                            '– Nein, ich habe kein Telefon.',
                            'Haben Sie ein Handy?',
                            '– Ja, ich habe ein Handy.',
                            '– Ja. Meine Handynummer ist ...',
                            'Wie ist Ihre Nummer?',
                            '– Meine Nummer ist xx-xxx xx xx'
                        ]
                    },
                    {
                        groupId: 'Sprachen',
                        entries: [
                            'Welche Sprachen sprechen Sie?',
                            '– Ich spreche Französisch und ein bisschen Deutsch, Englisch und Japanisch',
                            'Was ist Ihre Muttersprache?',
                            '– Meine Muttersprache ist Französisch.'
                        ]
                    },
                    {
                        groupId: 'Deutsch',
                        entries: [
                            'Warum lernen Sie Deutsch?',
                            '– Ich lerne Deutsch, weil ich in Bern arbeite.',
                            'Wie lange lernen Sie Deutsch?',
                            '– Ich lerne wieder seit 3 Monate.',
                            'Wo lernen Sie Deutsch?',
                            '– Ich lerne allein.',
                            '– Ich baue mich eine Anwendung um Deutsch Wortschaẗz zu studieren.',
                        ]
                    },
                    {
                        groupId: 'Beruf',
                        entries: [
                            'Was sind Sie von Beruf?',
                            '– Ich bin Software Ingenieur von Beruf.',
                            'Was ist Ihr Beruf?',
                            '– Ich arbeite in einem Firma als Entwickler.'
                        ]
                    },
                    {
                        groupId: 'Familie',
                        entries: [
                            'Haben Sie Kinder?',
                            '– Ich habe keine Kinder.',
                            '– Ich habe eine Schwester.',
                            '– Ich wohne, zusammen mit meiner Freundin.'
                        ]
                    },
                    {
                        groupId: 'Hobby',
                        entries: [
                            'Was ist Ihr Hobby?',
                            'Was machen Sie gern?'
                        ]
                    }
                ]
            }
            /*
            TODO business presentation
            ,{
                groupId: 'Geschäft',
                groups: [
                ]
            }
            */
        ];
    }

    showAll() {
        for (let i = 0; i< this.data.length; i++) {
            if (!!this.data[i].groups && !!this.data[i].groups.length > 0) {
                for (let j = 0; i < this.data[i].groups.length; j++) {
                    this.show(this.data[i].groups[j]);
                }
            }
        }
    }

    show(group) {
        group.visible = true;
    }

    isButtonVisible(group) {
        return !group.visible;
    }

    isGroupVisible(group) {
        return !!group.visible;
    }

    back() {
        this.$location.url('/stack');
    }
}

export default PresentationsController;