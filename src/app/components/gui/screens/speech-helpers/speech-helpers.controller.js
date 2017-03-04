class SpeechHelpersController {
    /*@ngInject*/
    constructor($location) {
        this.$location = $location;
        this.initData();
    }

    initData() {
        // Copyright Hueber, Fit fürs Goethe-Zertifikat A2
        // Copyright Cornelsen, Prüfungstraining DaF: A1, A2

        this.data = [
            {
                groupId: 'Fragen zur Person',
                groups: [
                    {
                        groupId: 'Einkaufen',
                        entries: [
                            'sich für Mode interessieren',
                            '... gern anziehen',
                            'Kleidung selbst kaufen',
                            'mit der Freundin / dem Freund einkaufen gehen',
                            'sportliche / formelle Kleidung mögen',
                            'Was denkst du / denken Sie über Marken-Kleidung?'
                        ]
                    },
                    {
                        groupId: 'Essen / Trinken',
                        entries: [
                            '... zum Frühstück essen / trinken',
                            '... besonders gern essen',
                            'Was ist dein / Ihr Lieblingsessen?',
                            'selbst kochen',
                            'Rezepte lesen',
                            'kein Fleisch / ... essen',
                            'Bio-Produkte kaufen',
                            'gesund essen'
                        ]
                    },
                    {
                        groupId: 'Familie / Freunde',
                        entries: [
                            'einen Bruder / Geschwister / zwei Schwestern / ... haben',
                            'etwas mit der Familie / zusammen machen die Hausarbeit machen',
                            'für die Familie einkaufen / kochen / waschen',
                            'Geburtstag haben / feiern',
                            'etwas mit den Freundinnen / Freunden zusammen machen',
                            'mit Freundinnen / Freunden zusammen einkaufen gehen / ...',
                            'die beste Freundin / den besten Freund beschreiben',
                            'Taschengeld bekommen',
                            'vom Taschengeld bezahlen',
                            'Mit wem bist du / sind Sie gern zusammen?'
                        ]
                    },
                    {
                        groupId: 'Freizeit',
                        entries: [
                            'ein Hobby haben',
                            'etwas am liebsten machen',
                            'Pläne für den Urlaub / für den Abend haben',
                            'etwas am Wochenende / am Abend / im Urlaub / ... machen',
                            'Wohin möchtest du / möchten Sie am liebsten reisen?',
                            'von einer Reise erzählen',
                            'Was hast du / haben Sie am letzten Wochenende / im Urlaub gemacht?'
                        ]
                    },
                    {
                        groupId: 'Medien',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Ausbildung / Arbeit',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Wohnen',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    }
                ]
            },
            {
                groupId: 'Von sich erzählen',
                groups: [
                    {
                        groupId: 'Einkaufen / Mode',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Familie / Arbeiten im Haus',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Ferien / Reisen',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Freizeit / Unterhaltung',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Natur / Umwelt',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Sport / Gesundheit',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'Tagesablauf',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    }
                ]
            },
            {
                groupId: 'Zusammen etwas planen',
                groups: [
                    {
                        groupId: 'Etwas vorschlagen',
                        entries: [
                            'TODO',
                            'Ich habe eine Idee ...',
                            'Ich schlage vor, dass ...',
                            'Ich möchte etwas vorschlagen: ...',
                            'Wollen wir ...?',
                            'Wir können auch ...',
                            'Was meinst du? / Was meinen Sie?',
                            'Was denkst du / Was denken Sie, wollen wir das machen?',
                            'Was denkst du / Was denken Sie, machen wir das?',
                            'Wie findest du ...? / Wie finden Sie ...?',
                            'Wir können ja ..., oder?'
                        ]
                    },
                    {
                        groupId: 'nach der Meinung fragen',
                        entries: [
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            ''
                        ]
                    },
                    {
                        groupId: 'einen Vorschlag gut finden (zustimmen)',
                        entries: [
                            'Okay. Das machen wir.',
                            'Das ist eine gute Idee.',
                            'Wir können auch noch ...',
                            'Das gefällt mir.',
                            'Das finde ich gut / super / prima / toll.',
                            'Du hast / Sie haben Recht, so machen wir es.',
                            'Genau!',
                            'Einverstanden!',
                            'In Ordnung!',
                            'Ja, gut. Machen wir das so.',
                            'Ja, gut. Das können wir machen.',
                            'Ich bin dafür.',
                            'Super!',
                            'Prima!',
                            'Toll.',
                            'Das finde ich spannend.',
                            'Du hast recht.',
                            'Ja, ich habe Lust.'
                        ]
                    },
                    {
                        groupId: 'Sie sind nicht sicher',
                        entries: [
                            'Ich weiß nicht. Vielleicht sollten wir lieber ...?',
                            'Vielleicht können wir das so machen, aber ...',
                            'Das ist eine gute Idee, aber ...',
                            'Ich finde es besser, wenn ...',
                            'Vielleicht ist es besser, wenn ...',
                            'Besser ist es, wenn ...',
                            'Wir könnten aber auch ...'
                        ]
                    },
                    {
                        groupId: 'einen Vorschlag nicht gut finden (ablehnen)',
                        entries: [
                            'Das finde ich nicht gut. Ich habe eine andere Idee: ...',
                            'Das kann man doch nicht machen.',
                            'Das ist keine gute Idee.',
                            'Das gefällt mir nicht (so) gut.',
                            'Das finde ich nicht gut.',
                            'Besser ist es, wenn ...',
                            'Wir sollten ...',
                            'Ich finde, wir sollten ...',
                            'Ich bin dagegen.',
                            'Nein, dazu habe ich keine Lust.',
                            'Nein, ich habe keine Lust.',
                            'Das ist doch Unsinn.',
                            'Ich bin anderer Meinung.',
                            'Das finde ich langweilig.',
                            'Das geht nicht!',
                            'Besser nicht, wir sollten lieber ...'
                        ]
                    },
                    {
                        groupId: 'das Bresprochene zusammenfassen',
                        entries: [
                            ''
                        ]
                    },
                    {
                        groupId: 'Termin ausmachen',
                        entries: [
                            'Was hast du / haben Sie am Freitag vor?',
                            'Hast du / Haben Sie am Freitag Zeit?',
                            'Wollen wir uns am Freitag treffen?',
                            'Treffen wir uns am Freitag um acht?',
                            'Wie wäre es mit Freitag?',
                            'Geht es am Freitag um acht?',
                            'Passt es dir / Ihnen am Freitag um acht?',
                            'Wann / Um wie viel Uhr treffen wir uns?',
                            'Wann / Um wie viel Uhr hast du / haben Sie Zeit?'
                        ]
                    },
                    {
                        groupId: 'Sie reagieren auf einen Terminvorschlag',
                        entries: [
                            'Ja, das geht.',
                            'Ja, das passt mir gut.',
                            'Kein Problem.',
                            'Nein, am Freitag kann ich leider nicht.',
                            'Nein, am Freitag geht es leider nicht.',
                            '(Tut mir leid, ) ich habe keine Zeit, weil ich arbeiten muss.'
                        ]
                    }
                ]
            },
            {
                groupId: 'Nicht verstehen etwas',
                groups: [
                    {
                        groupId: 'Sie verstehen Ihren Partner / Ihre Partnerin nicht',
                        entries: [
                            'Wie bitte?',
                            'Tut mir leid, ich habe dich / Sie nicht verstanden.',
                            'Kannst du / Können Sie das bitte wiederholen / noch einmal sagen?'
                        ]
                    },
                    {
                        groupId: 'Sie wissen ein Wort auf Deutsch nicht',
                        entries: [
                            'Entschuldigung. Wie heißt das Wort ... auf Deutsch?',
                            'Ich weiß das Wort nicht auf Deutsch. Ich meine ...'
                        ]
                    }
                ]
            }
        ];
    }

    showAll() {
        for (let i = 0; i < this.data.length; i++) {
            if (!!this.data[i].groups && !!this.data[i].groups.length > 0) {
                for (let j = 0; j < this.data[i].groups.length; j++) {
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

export default SpeechHelpersController;