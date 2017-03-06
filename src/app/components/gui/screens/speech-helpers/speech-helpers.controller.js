class SpeechHelpersController {
    /*@ngInject*/
    constructor($location, $anchorScroll, $stateParams) {
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.print = !!$stateParams.print;
        this.initData();

        if (!!this.print) {
            window.print();
        }
    }

    scrollTo(id) {
        this.$anchorScroll(this.$location.hash(id));
   }

   toogleSelection(topGroup) {
        topGroup.selected = !topGroup.selected;
   }

    initData() {

        this.levels = [
            { value: 'a1', selected: true },
            { value: 'a2', selected: true },
            { value: 'b1', selected: true },
            { value: 'b2', selected: true },
            { value: 'c1', selected: true },
            { value: 'c2', selected: true }
        ];

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
                            'einen Bruder / Geschwister / zwei Schwestern ... haben',
                            'etwas mit der Familie / zusammen machen die Hausarbeit machen',
                            'für die Familie einkaufen / kochen / waschen',
                            'Geburtstag haben / feiern',
                            'etwas mit den Freundinnen / Freunden zusammen machen',
                            'mit Freundinnen / Freunden zusammen einkaufen gehen',
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
                            'etwas am Wochenende / am Abend / im Urlaub ... machen',
                            'Wohin möchtest du / möchten Sie am liebsten reisen?',
                            'von einer Reise erzählen',
                            'Was hast du / haben Sie am letzten Wochenende / im Urlaub gemacht?'
                        ]
                    },
                    {
                        groupId: 'Medien',
                        entries: [
                            'mit dem Handy telefonieren',
                            'mit anderen Jugendlichen chatten',
                            'Hausaufgaben am Computer machen',
                            'etwas im Internet suchen',
                            'gern Computerspiele gut finden',
                            'Musik gut finden / mögen',
                            'Bücher / Zeitungen lesen / interessant finden',
                            'Filme / Serien gern sehen / spannend finden',
                            'fernsehen',
                            'Welche Filme / Serien findest du / finden Sie gut?',
                            'Wie lange bist du / sind Sie pro Tag im Internet?'
                        ]
                    },
                    {
                        groupId: 'Ausbildung / Arbeit',
                        entries: [
                            'Abitur machen / mit der Schule fertig sein / eine Ausbildung anfangen / studieren',
                            'einen Kurs machen',
                            'Hausaufgaben machen',
                            'einen Kursleiter / ein Thema / ... besonders gern mögen',
                            'etwas im Kurs / im Studium / in der Ausbildung / in der Arbeit gut finden',
                            'Fremdsprachen lernen',
                            'morgens zur Arbeit / in die Universität / in den Kurs ... kommen',
                            'Was gefällt Ihnen an Ihrem Arbeitsplatz / an Ihrer Arbeit gut / gar nicht?',
                            'Was gefällt dir an deinem Arbeitsplatz / an deiner Arbeit gut?',
                            'Was wollen Sie machen, wenn Sie mit der Schule / mit dem Studium / mit der Ausbildung ... fertig sind?',
                            'Was willst du machen, wenn du mit der Schule / ... fertig bist?',
                            'Wie viele Teilnehmer sind im Kurs / Mitarbeiter hat deine / Ihre Firma?',
                            'gut finden / Spaß haben / mögen',
                            'gute / schlechte Noten haben',
                            'vor der Prüfung Angst haben',
                            'eine Prüfung machen',
                            'Gruppenarbeit machen',
                            'sich auf eine Prüfung vorbereiten',
                            'eine Ausbildung zum/r ... -Fachmann/-frau machen',
                            'Ich will Chemie / Physik / Fremdsprachen ... studieren',
                            'Arzt / Lehrerin / Bankkaufmann ... werden',
                            'gern mit Kindern / Tieren / Menschen arbeiten',
                            'gern / nicht gern am Computer / im Freien arbeiten'
                        ]
                    },
                    {
                        groupId: 'Wohnen',
                        entries: [
                            'eine / keine eigene Wohnung haben',
                            'Wie sieht deine / Ihre Wohnung ... aus?',
                            'Meine / Unsere Wohnung hat ... Zimmer / einen Balkon / einen Keller / ... und ...',
                            'In meinem Zimmer / in unserem Wohnzimmer / ... steht ein Stuhl / liegt ein Teppich / steht eine Lampe / gibt es viele Bilder / ...',
                            'Tiere gern haben',
                            'einen Garten / ein Haustier haben',
                            'Wie ist deine / Ihre Telefonnummer?',
                            'Wo / Wie möchtest du / möchten Sie gern wohnen?'
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
                            'die Kleidung selbst kaufen / machen / wählen',
                            'gern moderne / sportliche Sachen anziehen',
                            'mit Freudinnen shoppen / einkaufen gehen',
                            'Markenkleidung toll / zu teuer finden',
                            'Mode interessant / langweilig finden',
                            'viel / sehr wenig Geld für Kleidung ausgeben',
                            'sich elegante / teure Kleidung wünschen',
                            'Wo / Wann soll man sich besonders gut anziehen?'
                        ]
                    },
                    {
                        groupId: 'Familie / Arbeiten im Haus',
                        entries: [
                            'sehr gut kochen / backen',
                            'gern / am liebsten essen',
                            'die Wohnung putzen',
                            'die Küche / das Zimmer ... aufräumen',
                            'im Garten arbeiten',
                            'eine Party vorbereiten / feiern',
                            'mit der Familie / Freunden zusammen essen',
                            'Freunde mit nach Hause bringen',
                            'sich mit jemandem manchmal / oft / nie streiten',
                            'über den Urlaub diskutieren'
                        ]
                    },
                    {
                        groupId: 'Ferien / Reisen',
                        entries: [
                            'einen Campingurlaub machen',
                            'einen Ferienkurs / Sprachkurs machen',
                            'eine Fremdsprache lernen',
                            'mit Freunden eine Fahrradtour machen',
                            'reiten / segeln / Tennis spielen lernen',
                            'eine Schiffsreise machen',
                            'Urlaub auf einem Campingplatz in den Bergen / am Strand / am Meer / in ... machen',
                            'mit Freunden verreisen',
                            'etwas Neues sehen',
                            'neue Freunde kennenlernen',
                            'zu Hause bleiben',
                            'für das Studium lernen'
                        ]
                    },
                    {
                        groupId: 'Freizeit / Unterhaltung',
                        entries: [
                            'Freunde treffen / besuchen',
                            'ein Computerspiel spielen',
                            'Lieblingsserien / Filme sehen',
                            'im Internet chatten',
                            'in die Stadt gehen',
                            'in den Klub / Verein gehen',
                            'Sport machen',
                            'Tennis / Fußball / Volleyball spielen',
                            'Musik hören / machen',
                            'einen Blog / E-Mails schreiben',
                            'Bücher / Zeitschriften lesen'
                        ]
                    },
                    {
                        groupId: 'Natur / Umwelt',
                        entries: [
                            'die Natur lieben',
                            'den Müll trennen',
                            'Tiere gern haben',
                            'sich einen Hund / eine Katze wünschen',
                            'gern im Wald wandern',
                            'sich für Pflanzen und Blumen interessieren',
                            'lieber in der Stadt / auf dem Land wohnen',
                            'Kann ein Hund / eine Katze in der Wohnung leben?'
                        ]
                    },
                    {
                        groupId: 'Sport / Gesundheit',
                        entries: [
                            'laufen / joggen / wandern / trainieren',
                            'Sport / Gymnastik / Yoga machen',
                            'in den Fitness-Klub / in die Sporthalle / zum Training gehen',
                            'einen Termin beim Arzt / Zahnarzt haben',
                            'Kopf-/Hals-/Bauchschmerzen haben',
                            'krank / gesund sein/werden',
                            'gesund / ungesund / falsch essen',
                            'verletzt sein',
                            'im Krankenhaus sein'
                        ]
                    },
                    {
                        groupId: 'Tagesablauf',
                        entries: [
                            'jeden Tag / an den Schultagen / am Wochenende',
                            'morgens / mittags / abends',
                            'am Vormittag / am Nachmittag',
                            'wenn ich an der Universität / in der Arbeit bin / wenn ich nach Hause komme',
                            'in der Mittagspause',
                            'nach dem Mittagsessen / vor dem Frühstück',
                            'immer / meistens / oft / manchmal / nie'
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
                            'Am besten machen wir das so: ...',
                            'Ich möchte einen Vorschlag machen.',
                            'Ich möchte lieber ...',
                            'Ich finde es besser, wenn wir ...',
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
                            'Bist du / Sind Sie damit einverstanden?',
                            'Bist du / Sind Sie damit einverstanden, dass ...',
                            'Wie denkst du / denken Sie darüber?',
                            'Was meinst du? / meinen Sie?',
                            'Findest du / Finden Sie das gut?',
                            'Gefällt dir / Ihnen der Vorschlag?',
                            'Sollen wir das so machen?'
                        ]
                    },
                    {
                        groupId: 'einen Vorschlag gut finden (zustimmen)',
                        entries: [
                            'Okay. Das machen wir.',
                            'Das ist eine gute Idee.',
                            'Wir können auch noch ...',
                            'Das gefällt mir.',
                            'Die Idee gefällt mir',
                            'Das finde ich gut / super / prima / toll.',
                            'Ich finde das gut / richtig',
                            'Ich glaube, das ist eine gute Idee.',
                            'Ich bin auch deiner / Ihrer Meinung.',
                            'Das denke ich auch.',
                            'Ich finde deinen / Ihren Vorschlag gut.',
                            'Du hast / Sie haben Recht, so machen wir es.',
                            'Genau!',
                            'Einverstanden!',
                            'Ich bin einverstanden.',
                            'In Ordnung!',
                            'Ja, gut. Machen wir das so.',
                            'Wunderbar, so machen wir das.',
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
                            'Ich finde das nicht so gut / falsch.',
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
                            'Besser nicht, wir sollten lieber ...',
                            'Ich glaube, das ist keine gute Idee.',
                            'Das möchte ich lieber nicht.',
                            'Ich meine, wir können auch ...',
                            'Das ist eine gute Idee, aber ...',
                            'Nein, das geht nicht.',
                            'Ich finde den Vorschlag nicht gut.',
                            'Ich bin nicht einverstanden.',
                            'Die Idee gefällt mir nicht.'
                        ]
                    },
                    {
                        groupId: 'das Bresprochene zusammenfassen',
                        entries: [
                            'Also, dann treffen wir uns am Montag / am Abend um 19:00 Uhr / in der Stadt / im Café / vor dem Rathaus / ...',
                            'Also, dann kommst du / kommen Sie am Sonntag / ... um 19:00 Uhr zu mir ...',
                            'Gut, dann komme ich am Samstag / ... um ... Uhr zu dir / Ihnen ...',
                            '... und wir kaufen zusammen das Geschenk für ...',
                            '... und wir lernen zusammen für die Prüfung',
                            '... und wir machen / kochen zusammen die Vorspeise'
                        ]
                    },
                    {
                        groupId: 'einen Termin verschieben',
                        entries: [
                            'Ich habe am Dienstag / am Abend leider keine Zeit. Geht es am Mittwoch / am Nachmittag?',
                            'Ich kann heute / morgen nicht ins Kino gehen. Gehen wir am Samstag?',
                            'Ich kann um 15:00 Uhr nicht kommen. Hast du / Haben Sie um 17:00 Uhr Zeit?',
                            'Hast du / Haben Sie am Samstag Zeit? Heute passt es mir nicht.',
                            'Können wir den Termin auf nächste Woche / nächsten Dienstag verschieben?'
                        ]
                    },
                    {
                        groupId: 'etwas vorschlagen',
                        entries: [
                            'Spielen wir zusammen Volleyball / Tennis?',
                            'Spielst du / Spielen Sie mit mir Tennis?',
                            'Wir können ein Computerspiel machen / einen Kaffee trinken / einen Film anschauen / Musik hören.',
                            'Komm / Kommen Sie, wir gehen zusammen in die Stadt / einkaufen / ins Kino.',
                            'Möchtest du / Möchten Sie vielleicht mitkommen?',
                            'Lass / Lassen Sie uns doch einen Spaziergang machen.',
                            'Darf ich etwas vorschlagen? Komm / Kommen Sie zu mir.',
                            'Willst du zu Heinz / Wollen Sie zu Herrn Becker / zum Fußball / zur Party mitkommen?',
                            'Vielleicht interessiert dich / Sie das.',
                            'Was meinst du / meinen Sie, wollen wir eine Radtour / eine Wanderung machen?',
                            'Hast du / Haben Sie am Sonntag Zeit?',
                            'Geht es bei dir / Ihnen um 10:00 Uhr am Sonntag?',
                            'Gut, dann treffen wir uns dort.'
                        ]
                    },
                    {
                        groupId: 'ein Vorschlag: einverstanden sein / nicht einverstanden sein',
                        entries: [
                            'Aber gern.',
                            'Klar, ich komme gern.',
                            'Gern/Okay, das machen wir.',
                            'Das ist eine tolle/super/gute Idee.',
                            'Ja, das finde ich gut/super/toll.',
                            'Ich kann morgen nicht kommen, ich bin bei meinen Großeltern / noch in Bonn.',
                            'Tut mir leid, ich habe keine Zeit.',
                            'Heute? Schade, das geht nicht.',
                            'Sehr nett / lieb von dir / Ihnen, aber da kann ich leider nicht.',
                            'Das ist keine so gute Idee. Gehen wir doch lieber ins Theater.',
                            'Also ich weiß nicht. Das finde ich nicht so interessant / gut.'
                        ]
                    },
                    {
                        groupId: 'jemanden einladen / einen Termin vereinbaren',
                        entries: [
                            'Ich lade dich/Sie herzlich zu meiner Party / am Samstag / ... ein',
                            'Ich mache eine Party und möchte dich/Sie einladen.',
                            'Was hast du / haben Sie am Freitag vor?',
                            'Hast du / Haben Sie am Freitag Zeit?',
                            'Wollen wir uns am Freitag treffen?',
                            'Treffen wir uns am Freitag um acht?',
                            'Treffen wir uns heute Abend vor dem italienischen Restaurant?',
                            'Wie wäre es mit Freitag?',
                            'Geht es am Freitag um acht?',
                            'Geht es am Nachmittag um 17:00 Uhr ?',
                            'Passt es dir / Ihnen am Freitag um acht?',
                            'Passt es dir / Ihnen am Mittwoch um 19:00 Uhr?',
                            'Wann / Um wie viel Uhr treffen wir uns?',
                            'Wann / Um wie viel Uhr hast du / haben Sie Zeit?',
                            'Hast du / Haben Sie am Montag Lust?',
                            'Kannst du / Können Sie nächste Woche kommen ?'
                        ]
                    },
                    {
                        groupId: 'auf eine Einladung reagieren',
                        entries: [
                            'Ja, das geht.',
                            'Ja, das passt mir gut.',
                            'Kein Problem.',
                            'Nein, am Freitag kann ich leider nicht.',
                            'Nein, am Freitag geht es leider nicht.',
                            '(Tut mir leid, ) ich habe keine Zeit, weil ich arbeiten muss.',
                            'Vielen Dank für die Einladung, ich komme gern.',
                            'Vielen Dank, dass du/Sie an mich gedacht hast/haben.',
                            'Ich danke dir/Ihnen für die Einladung und komme bestimmt.',
                            'Tolle Idee, vielen Dank, bis Sonntag.',
                            'Sehr lieb von dir/Ihnen, ich komme gern.',
                            'Vielen Dank, aber ich kann leider nicht kommen.',
                            '..., aber das geht leider nicht.',
                            '..., aber leider kann ich nicht kommen.',
                            '..., aber leider bin ich am Wochenende in Köln.',
                            '..., aber mein Vater feiert seinen Geburtstag auch am Samstag.'
                        ]
                    }
                ]
            },
            {
                groupId: 'Sonstiges',
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
                    },
                    {
                        groupId: 'Freunde ausdrücken',
                        entries: [
                            'Schön, dass du/Sie an mich gedacht hast/haben.',
                            'Ich habe mich sehr gefreut.',
                            'Ich mag ... besonders gern.',
                            'Das ist super.',
                            'Ich bin sehr froh, dass ...',
                            'Ich freue mich (sehr) auf ...'
                        ]
                    },
                    {
                        groupId: 'sich bedanken',
                        entries: [
                            'Ich danke dir/Ihnen für ...',
                            'Ich bedanke mich für ...',
                            'Vielen Dank für die Einladung.'
                        ]
                    },
                    {
                        groupId: 'etwas begründen',
                        entries: [
                            'Ich kann leider nicht kommen, weil ich noch einige Stunden arbeiten muss.',
                            'Sport mache ich montags, deshalb ist das mein Lieblingstag.',
                            'Ich habe erst um 14:00 Uhr Mittagspause.'
                        ]
                    },
                    {
                        groupId: 'etwas beschreiben',
                        entries: [
                            'Das Haus ist groß/klein und hat sehr große/kleine Fenster.',
                            'Im Erdgeschoss sind zwei kleine Geschäfte',
                            'Neben/Hinter dem Haus ist eine Garage',
                            'Vor/Hinter dem Haus ist ein Garten.',
                            'Das Geschäft ist in der Marktstraße',
                            'Die Kirche hat zwei Türme',
                            'Das Rathaus / Museum / Einkaufszentrum ... ist ganz alt / neu'
                        ]
                    },
                    {
                        groupId: 'etwas bewerten',
                        entries: [
                            'Ich finde es traurig / schrecklich, dass ...',
                            'Ich finde es schön, dass ...',
                            'Ich bin froh, dass ...',
                            'Ich denke, das ist eine gute Idee.',
                            'Meiner Meinung nach ist es sehr gut, dass ...',
                            'Am besten / Besonders gut gefällt mir, dass ...',
                            'Ich finde ihn ziemlich / sehr / total nett / sympatisch',
                            'Ich finde das gut / leicht / schwer / interessant / blöd',
                            'Ich finde das sehr interessant / ... aber auch ziemlich schwer.',
                            'Das finde ich ziemlich leicht und total cool.',
                            'Ich mag Sport total gern.',
                            'Ich finde das Buch ziemlich lustig',
                            'Die Party / Das Fest / Der Film ... hat mir (auch / sehr gut) gefallen.',
                            'Mir gefällt das Angebot / die Idee auch sehr gut.',
                            'Mir gefällt die Idee / das Angebot / der Film ... nicht besonders / überhaupt nicht.'
                        ]
                    },
                    {
                        groupId: 'sich entschuldigen',
                        entries: [
                            'Entschuldigung.',
                            'Entschuldigungen Sie bitte, dass ...',
                            'Das tut mir leid.',
                            'Ich entschuldige mich für ...',
                            'Leider konnte ich nicht kommen',
                            'Leider musste ich im Bett bleiben'
                        ]
                    },
                    {
                        groupId: 'nach dem Weg fragen',
                        entries: [
                            'Ich möchte gern wissen, wo die Blumenstraße / der Bahnhof / ... ist.',
                            'Ich suche die Franzstraße / den Bahnhof / ..., kannst du/können Sie mir helfen?',
                            'Können Sie / Kannst du mir bitte sagen, wie ich zum Dom komme / wo der Dom ist?',
                            'Wie komme ich zu Peter / zum Flughafen / zur Haltestelle?',
                            'Wo wohnst du? / Wo wohnen Sie?',
                            'Wo finde ich das neue Rathaus?'
                        ]
                    },
                    {
                        groupId: 'den Weg beschreiben',
                        entries: [
                            'Du fährst / Sie fahren zuerst geradeaus und dann nach rechts.',
                            'Du gehst / Sie gehen hier geradeaus, dann die erste Straße links.',
                            'Du fährst / Sie fahren 2km geradeaus.',
                            'Du gehst / Sie gehen die nächste Straße links / rechts.',
                            'Das ist in der Nähe von der Schule',
                            'Du gehst / Sie gehen hier gleich zurück.',
                            'Und dann siehst du / sehen Sie schön ...'
                        ]
                    },
                    {
                        groupId: 'sich verabreden',
                        entries: [
                            'Hast du / Haben Sie am Wochenende Zeit?',
                            'Wir wollen eine Radtour / eine Wanderung machen. Hast du Lust? / Haben Sie Lust?',
                            'Gehst du / Gehen Sie morgen mit ins Schwimmbad?',
                            'Wollen wir am Abend zusammen eine Pizza essen (gehen) ?',
                            'Geht es bei dir / Ihnen um 20:00 Uhr ?',
                            'Lass uns doch am Sonntag ins Theater gehen.'
                        ]
                    }
                ]
            }
        ];
    }

    back() {
        this.$location.url('/stack');
    }
}

export default SpeechHelpersController;