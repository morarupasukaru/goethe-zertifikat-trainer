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
                            'Was ist Ihr Vorname und Ihr Nachname?'
                        ]
                    },
                    {
                        groupId: 'Alter',
                        entries: [
                            'Wie alt sind Sie?'
                        ]
                    },
                    {
                        groupId: 'Land',
                        entries: [
                            'Woher kommen Sie?'
                        ]
                    },
                    {
                        groupId: 'Wohnort',
                        entries: [
                            'Wo wohnen Sie?',
                            'Wie heißt die Strasse?',
                            'Wie ist Ihre Hausnummer?',
                            'Wie ist die Postleitzahl?'
                        ]
                    },
                    {
                        groupId: 'Telefon',
                        entries: [
                            'Haben Sie Telefon?',
                            'Haben Sie ein Handy?',
                            'Wie ist Ihre Nummer?'
                        ]
                    },
                    {
                        groupId: 'Sprachen',
                        entries: [
                            'Welche Sprachen sprechen Sie?',
                            'Was ist Ihre Muttersprache?'
                        ]
                    },
                    {
                        groupId: 'Beruf',
                        entries: [
                            'Was sind Sie von Beruf?',
                            'Was ist Ihr Beruf?'
                        ]
                    },
                    {
                        groupId: 'Familie',
                        entries: [
                            'Haben Sie Kinder?'
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
            },
            {
                groupId: 'Geschäft',
                groups: [
                ]
            }
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