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

        let c1 = ['Hueber, Fit fürs Goethe-Zertifikat A2', 'Cornelsen, Prüfungstraining DaF: A1, A2'];

        this.data = [
            {
                groupId: 'Fragen zur Person',
                groups: [
                    {
                        groupId: 'Einkaufen',
                        entries: [
                            { value: 'sich für Mode interessieren', level: 'a2', copyright: c1 },
                            { value: '... gern anziehen', level: 'a2', copyright: c1 },
                            { value: 'Kleidung selbst kaufen', level: 'a2', copyright: c1 },
                            { value: 'mit der Freundin / dem Freund einkaufen gehen', level: 'a2', copyright: c1 },
                            { value: 'sportliche / formelle Kleidung mögen', level: 'a2', copyright: c1 },
                            { value: 'Was denkst du / denken Sie über Marken-Kleidung?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Essen / Trinken',
                        entries: [
                            { value: '... zum Frühstück essen / trinken', level: 'a2', copyright: c1 },
                            { value: '... besonders gern essen', level: 'a2', copyright: c1 },
                            { value: 'Was ist dein / Ihr Lieblingsessen?', level: 'a2', copyright: c1 },
                            { value: 'selbst kochen', level: 'a2', copyright: c1 },
                            { value: 'Rezepte lesen', level: 'a2', copyright: c1 },
                            { value: 'kein Fleisch / ... essen', level: 'a2', copyright: c1 },
                            { value: 'Bio-Produkte kaufen', level: 'a2', copyright: c1 },
                            { value: 'gesund essen', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Familie / Freunde',
                        entries: [
                            { value: 'einen Bruder / Geschwister / zwei Schwestern ... haben', level: 'a2', copyright: c1 },
                            { value: 'etwas mit der Familie / zusammen machen die Hausarbeit machen', level: 'a2', copyright: c1 },
                            { value: 'für die Familie einkaufen / kochen / waschen', level: 'a2', copyright: c1 },
                            { value: 'Geburtstag haben / feiern', level: 'a2', copyright: c1 },
                            { value: 'etwas mit den Freundinnen / Freunden zusammen machen', level: 'a2', copyright: c1 },
                            { value: 'mit Freundinnen / Freunden zusammen einkaufen gehen', level: 'a2', copyright: c1 },
                            { value: 'die beste Freundin / den besten Freund beschreiben', level: 'a2', copyright: c1 },
                            { value: 'Taschengeld bekommen', level: 'a2', copyright: c1 },
                            { value: 'vom Taschengeld bezahlen', level: 'a2', copyright: c1 },
                            { value: 'Mit wem bist du / sind Sie gern zusammen?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Freizeit',
                        entries: [
                            { value: 'ein Hobby haben', level: 'a2', copyright: c1 },
                            { value: 'etwas am liebsten machen', level: 'a2', copyright: c1 },
                            { value: 'Pläne für den Urlaub / für den Abend haben', level: 'a2', copyright: c1 },
                            { value: 'etwas am Wochenende / am Abend / im Urlaub ... machen', level: 'a2', copyright: c1 },
                            { value: 'Wohin möchtest du / möchten Sie am liebsten reisen?', level: 'a2', copyright: c1 },
                            { value: 'von einer Reise erzählen', level: 'a2', copyright: c1 },
                            { value: 'Was hast du / haben Sie am letzten Wochenende / im Urlaub gemacht?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Medien',
                        entries: [
                            { value: 'mit dem Handy telefonieren', level: 'a2', copyright: c1 },
                            { value: 'mit anderen Jugendlichen chatten', level: 'a2', copyright: c1 },
                            { value: 'Hausaufgaben am Computer machen', level: 'a2', copyright: c1 },
                            { value: 'etwas im Internet suchen', level: 'a2', copyright: c1 },
                            { value: 'gern Computerspiele gut finden', level: 'a2', copyright: c1 },
                            { value: 'Musik gut finden / mögen', level: 'a2', copyright: c1 },
                            { value: 'Bücher / Zeitungen lesen / interessant finden', level: 'a2', copyright: c1 },
                            { value: 'Filme / Serien gern sehen / spannend finden', level: 'a2', copyright: c1 },
                            { value: 'fernsehen', level: 'a2', copyright: c1 },
                            { value: 'Welche Filme / Serien findest du / finden Sie gut?', level: 'a2', copyright: c1 },
                            { value: 'Wie lange bist du / sind Sie pro Tag im Internet?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Ausbildung / Arbeit',
                        entries: [
                            { value: 'Abitur machen / mit der Schule fertig sein / eine Ausbildung anfangen / studieren', level: 'a2', copyright: c1 },
                            { value: 'einen Kurs machen', level: 'a2', copyright: c1 },
                            { value: 'Hausaufgaben machen', level: 'a2', copyright: c1 },
                            { value: 'einen Kursleiter / ein Thema / ... besonders gern mögen', level: 'a2', copyright: c1 },
                            { value: 'etwas im Kurs / im Studium / in der Ausbildung / in der Arbeit gut finden', level: 'a2', copyright: c1 },
                            { value: 'Fremdsprachen lernen', level: 'a2', copyright: c1 },
                            { value: 'morgens zur Arbeit / in die Universität / in den Kurs ... kommen', level: 'a2', copyright: c1 },
                            { value: 'Was gefällt Ihnen an Ihrem Arbeitsplatz / an Ihrer Arbeit gut / gar nicht?', level: 'a2', copyright: c1 },
                            { value: 'Was gefällt dir an deinem Arbeitsplatz / an deiner Arbeit gut?', level: 'a2', copyright: c1 },
                            { value: 'Was wollen Sie machen, wenn Sie mit der Schule / mit dem Studium / mit der Ausbildung ... fertig sind?', level: 'a2', copyright: c1 },
                            { value: 'Was willst du machen, wenn du mit der Schule / ... fertig bist?', level: 'a2', copyright: c1 },
                            { value: 'Wie viele Teilnehmer sind im Kurs / Mitarbeiter hat deine / Ihre Firma?', level: 'a2', copyright: c1 },
                            { value: 'gut finden / Spaß haben / mögen', level: 'a2', copyright: c1 },
                            { value: 'gute / schlechte Noten haben', level: 'a2', copyright: c1 },
                            { value: 'vor der Prüfung Angst haben', level: 'a2', copyright: c1 },
                            { value: 'eine Prüfung machen', level: 'a2', copyright: c1 },
                            { value: 'Gruppenarbeit machen', level: 'a2', copyright: c1 },
                            { value: 'sich auf eine Prüfung vorbereiten', level: 'a2', copyright: c1 },
                            { value: 'eine Ausbildung zum/r ... -Fachmann/-frau machen', level: 'a2', copyright: c1 },
                            { value: 'Ich will Chemie / Physik / Fremdsprachen ... studieren', level: 'a2', copyright: c1 },
                            { value: 'Arzt / Lehrerin / Bankkaufmann ... werden', level: 'a2', copyright: c1 },
                            { value: 'gern mit Kindern / Tieren / Menschen arbeiten', level: 'a2', copyright: c1 },
                            { value: 'gern / nicht gern am Computer / im Freien arbeiten', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Wohnen',
                        entries: [
                            { value: 'eine / keine eigene Wohnung haben', level: 'a2', copyright: c1 },
                            { value: 'Wie sieht deine / Ihre Wohnung ... aus?', level: 'a2', copyright: c1 },
                            { value: 'Meine / Unsere Wohnung hat ... Zimmer / einen Balkon / einen Keller / ... und ...', level: 'a2', copyright: c1 },
                            { value: 'In meinem Zimmer / in unserem Wohnzimmer / ... steht ein Stuhl / liegt ein Teppich / steht eine Lampe / gibt es viele Bilder / ...', level: 'a2', copyright: c1 },
                            { value: 'Tiere gern haben', level: 'a2', copyright: c1 },
                            { value: 'einen Garten / ein Haustier haben', level: 'a2', copyright: c1 },
                            { value: 'Wie ist deine / Ihre Telefonnummer?', level: 'a2', copyright: c1 },
                            { value: 'Wo / Wie möchtest du / möchten Sie gern wohnen?', level: 'a2', copyright: c1 }
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
                            { value: 'die Kleidung selbst kaufen / machen / wählen', level: 'a2', copyright: c1 },
                            { value: 'gern moderne / sportliche Sachen anziehen', level: 'a2', copyright: c1 },
                            { value: 'mit Freudinnen shoppen / einkaufen gehen', level: 'a2', copyright: c1 },
                            { value: 'Markenkleidung toll / zu teuer finden', level: 'a2', copyright: c1 },
                            { value: 'Mode interessant / langweilig finden', level: 'a2', copyright: c1 },
                            { value: 'viel / sehr wenig Geld für Kleidung ausgeben', level: 'a2', copyright: c1 },
                            { value: 'sich elegante / teure Kleidung wünschen', level: 'a2', copyright: c1 },
                            { value: 'Wo / Wann soll man sich besonders gut anziehen?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Familie / Arbeiten im Haus',
                        entries: [
                            { value: 'sehr gut kochen / backen', level: 'a2', copyright: c1 },
                            { value: 'gern / am liebsten essen', level: 'a2', copyright: c1 },
                            { value: 'die Wohnung putzen', level: 'a2', copyright: c1 },
                            { value: 'die Küche / das Zimmer ... aufräumen', level: 'a2', copyright: c1 },
                            { value: 'im Garten arbeiten', level: 'a2', copyright: c1 },
                            { value: 'eine Party vorbereiten / feiern', level: 'a2', copyright: c1 },
                            { value: 'mit der Familie / Freunden zusammen essen', level: 'a2', copyright: c1 },
                            { value: 'Freunde mit nach Hause bringen', level: 'a2', copyright: c1 },
                            { value: 'sich mit jemandem manchmal / oft / nie streiten', level: 'a2', copyright: c1 },
                            { value: 'über den Urlaub diskutieren', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Ferien / Reisen',
                        entries: [
                            { value: 'einen Campingurlaub machen', level: 'a2', copyright: c1 },
                            { value: 'einen Ferienkurs / Sprachkurs machen', level: 'a2', copyright: c1 },
                            { value: 'eine Fremdsprache lernen', level: 'a2', copyright: c1 },
                            { value: 'mit Freunden eine Fahrradtour machen', level: 'a2', copyright: c1 },
                            { value: 'reiten / segeln / Tennis spielen lernen', level: 'a2', copyright: c1 },
                            { value: 'eine Schiffsreise machen', level: 'a2', copyright: c1 },
                            { value: 'Urlaub auf einem Campingplatz in den Bergen / am Strand / am Meer / in ... machen', level: 'a2', copyright: c1 },
                            { value: 'mit Freunden verreisen', level: 'a2', copyright: c1 },
                            { value: 'etwas Neues sehen', level: 'a2', copyright: c1 },
                            { value: 'neue Freunde kennenlernen', level: 'a2', copyright: c1 },
                            { value: 'zu Hause bleiben', level: 'a2', copyright: c1 },
                            { value: 'für das Studium lernen', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Freizeit / Unterhaltung',
                        entries: [
                            { value: 'Freunde treffen / besuchen', level: 'a2', copyright: c1 },
                            { value: 'ein Computerspiel spielen', level: 'a2', copyright: c1 },
                            { value: 'Lieblingsserien / Filme sehen', level: 'a2', copyright: c1 },
                            { value: 'im Internet chatten', level: 'a2', copyright: c1 },
                            { value: 'in die Stadt gehen', level: 'a2', copyright: c1 },
                            { value: 'in den Klub / Verein gehen', level: 'a2', copyright: c1 },
                            { value: 'Sport machen', level: 'a2', copyright: c1 },
                            { value: 'Tennis / Fußball / Volleyball spielen', level: 'a2', copyright: c1 },
                            { value: 'Musik hören / machen', level: 'a2', copyright: c1 },
                            { value: 'einen Blog / E-Mails schreiben', level: 'a2', copyright: c1 },
                            { value: 'Bücher / Zeitschriften lesen', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Natur / Umwelt',
                        entries: [
                            { value: 'die Natur lieben', level: 'a2', copyright: c1 },
                            { value: 'den Müll trennen', level: 'a2', copyright: c1 },
                            { value: 'Tiere gern haben', level: 'a2', copyright: c1 },
                            { value: 'sich einen Hund / eine Katze wünschen', level: 'a2', copyright: c1 },
                            { value: 'gern im Wald wandern', level: 'a2', copyright: c1 },
                            { value: 'sich für Pflanzen und Blumen interessieren', level: 'a2', copyright: c1 },
                            { value: 'lieber in der Stadt / auf dem Land wohnen', level: 'a2', copyright: c1 },
                            { value: 'Kann ein Hund / eine Katze in der Wohnung leben?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Sport / Gesundheit',
                        entries: [
                            { value: 'laufen / joggen / wandern / trainieren', level: 'a2', copyright: c1 },
                            { value: 'Sport / Gymnastik / Yoga machen', level: 'a2', copyright: c1 },
                            { value: 'in den Fitness-Klub / in die Sporthalle / zum Training gehen', level: 'a2', copyright: c1 },
                            { value: 'einen Termin beim Arzt / Zahnarzt haben', level: 'a2', copyright: c1 },
                            { value: 'Kopf-/Hals-/Bauchschmerzen haben', level: 'a2', copyright: c1 },
                            { value: 'krank / gesund sein/werden', level: 'a2', copyright: c1 },
                            { value: 'gesund / ungesund / falsch essen', level: 'a2', copyright: c1 },
                            { value: 'verletzt sein', level: 'a2', copyright: c1 },
                            { value: 'im Krankenhaus sein', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Tagesablauf',
                        entries: [
                            { value: 'jeden Tag / an den Schultagen / am Wochenende', level: 'a2', copyright: c1 },
                            { value: 'morgens / mittags / abends', level: 'a2', copyright: c1 },
                            { value: 'am Vormittag / am Nachmittag', level: 'a2', copyright: c1 },
                            { value: 'wenn ich an der Universität / in der Arbeit bin / wenn ich nach Hause komme', level: 'a2', copyright: c1 },
                            { value: 'in der Mittagspause', level: 'a2', copyright: c1 },
                            { value: 'nach dem Mittagsessen / vor dem Frühstück', level: 'a2', copyright: c1 },
                            { value: 'immer / meistens / oft / manchmal / nie', level: 'a2', copyright: c1 }
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
                            { value: 'Am besten machen wir das so: ...', level: 'a2', copyright: c1 },
                            { value: 'Ich möchte einen Vorschlag machen.', level: 'a2', copyright: c1 },
                            { value: 'Ich möchte lieber ...', level: 'a2', copyright: c1 },
                            { value: 'Ich finde es besser, wenn wir ...', level: 'a2', copyright: c1 },
                            { value: 'Ich habe eine Idee ...', level: 'a2', copyright: c1 },
                            { value: 'Ich schlage vor, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich möchte etwas vorschlagen: ...', level: 'a2', copyright: c1 },
                            { value: 'Wollen wir ...?', level: 'a2', copyright: c1 },
                            { value: 'Wir können auch ...', level: 'a2', copyright: c1 },
                            { value: 'Was meinst du? / Was meinen Sie?', level: 'a2', copyright: c1 },
                            { value: 'Was denkst du / Was denken Sie, wollen wir das machen?', level: 'a2', copyright: c1 },
                            { value: 'Was denkst du / Was denken Sie, machen wir das?', level: 'a2', copyright: c1 },
                            { value: 'Wie findest du ...? / Wie finden Sie ...?', level: 'a2', copyright: c1 },
                            { value: 'Wir können ja ..., oder?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'nach der Meinung fragen',
                        entries: [
                            { value: 'Bist du / Sind Sie damit einverstanden?', level: 'a2', copyright: c1 },
                            { value: 'Bist du / Sind Sie damit einverstanden, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Wie denkst du / denken Sie darüber?', level: 'a2', copyright: c1 },
                            { value: 'Was meinst du? / meinen Sie?', level: 'a2', copyright: c1 },
                            { value: 'Findest du / Finden Sie das gut?', level: 'a2', copyright: c1 },
                            { value: 'Gefällt dir / Ihnen der Vorschlag?', level: 'a2', copyright: c1 },
                            { value: 'Sollen wir das so machen?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'einen Vorschlag gut finden (zustimmen)',
                        entries: [
                            { value: 'Okay. Das machen wir.', level: 'a2', copyright: c1 },
                            { value: 'Das ist eine gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Wir können auch noch ...', level: 'a2', copyright: c1 },
                            { value: 'Das gefällt mir.', level: 'a2', copyright: c1 },
                            { value: 'Die Idee gefällt mir', level: 'a2', copyright: c1 },
                            { value: 'Das finde ich gut / super / prima / toll.', level: 'a2', copyright: c1 },
                            { value: 'Ich finde das gut / richtig', level: 'a2', copyright: c1 },
                            { value: 'Ich glaube, das ist eine gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Ich bin auch deiner / Ihrer Meinung.', level: 'a2', copyright: c1 },
                            { value: 'Das denke ich auch.', level: 'a2', copyright: c1 },
                            { value: 'Ich finde deinen / Ihren Vorschlag gut.', level: 'a2', copyright: c1 },
                            { value: 'Du hast / Sie haben Recht, so machen wir es.', level: 'a2', copyright: c1 },
                            { value: 'Genau!', level: 'a2', copyright: c1 },
                            { value: 'Einverstanden!', level: 'a2', copyright: c1 },
                            { value: 'Ich bin einverstanden.', level: 'a2', copyright: c1 },
                            { value: 'In Ordnung!', level: 'a2', copyright: c1 },
                            { value: 'Ja, gut. Machen wir das so.', level: 'a2', copyright: c1 },
                            { value: 'Wunderbar, so machen wir das.', level: 'a2', copyright: c1 },
                            { value: 'Ja, gut. Das können wir machen.', level: 'a2', copyright: c1 },
                            { value: 'Ich bin dafür.', level: 'a2', copyright: c1 },
                            { value: 'Super!', level: 'a2', copyright: c1 },
                            { value: 'Prima!', level: 'a2', copyright: c1 },
                            { value: 'Toll.', level: 'a2', copyright: c1 },
                            { value: 'Das finde ich spannend.', level: 'a2', copyright: c1 },
                            { value: 'Du hast recht.', level: 'a2', copyright: c1 },
                            { value: 'Ja, ich habe Lust.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Sie sind nicht sicher',
                        entries: [
                            { value: 'Ich weiß nicht. Vielleicht sollten wir lieber ...?', level: 'a2', copyright: c1 },
                            { value: 'Vielleicht können wir das so machen, aber ...', level: 'a2', copyright: c1 },
                            { value: 'Das ist eine gute Idee, aber ...', level: 'a2', copyright: c1 },
                            { value: 'Ich finde es besser, wenn ...', level: 'a2', copyright: c1 },
                            { value: 'Vielleicht ist es besser, wenn ...', level: 'a2', copyright: c1 },
                            { value: 'Besser ist es, wenn ...', level: 'a2', copyright: c1 },
                            { value: 'Wir könnten aber auch ...', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'einen Vorschlag nicht gut finden (ablehnen)',
                        entries: [
                            { value: 'Das finde ich nicht gut. Ich habe eine andere Idee: ...', level: 'a2', copyright: c1 },
                            { value: 'Das kann man doch nicht machen.', level: 'a2', copyright: c1 },
                            { value: 'Das ist keine gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Das gefällt mir nicht (so) gut.', level: 'a2', copyright: c1 },
                            { value: 'Das finde ich nicht gut.', level: 'a2', copyright: c1 },
                            { value: 'Ich finde das nicht so gut / falsch.', level: 'a2', copyright: c1 },
                            { value: 'Besser ist es, wenn ...', level: 'a2', copyright: c1 },
                            { value: 'Wir sollten ...', level: 'a2', copyright: c1 },
                            { value: 'Ich finde, wir sollten ...', level: 'a2', copyright: c1 },
                            { value: 'Ich bin dagegen.', level: 'a2', copyright: c1 },
                            { value: 'Nein, dazu habe ich keine Lust.', level: 'a2', copyright: c1 },
                            { value: 'Nein, ich habe keine Lust.', level: 'a2', copyright: c1 },
                            { value: 'Das ist doch Unsinn.', level: 'a2', copyright: c1 },
                            { value: 'Ich bin anderer Meinung.', level: 'a2', copyright: c1 },
                            { value: 'Das finde ich langweilig.', level: 'a2', copyright: c1 },
                            { value: 'Das geht nicht!', level: 'a2', copyright: c1 },
                            { value: 'Besser nicht, wir sollten lieber ...', level: 'a2', copyright: c1 },
                            { value: 'Ich glaube, das ist keine gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Das möchte ich lieber nicht.', level: 'a2', copyright: c1 },
                            { value: 'Ich meine, wir können auch ...', level: 'a2', copyright: c1 },
                            { value: 'Das ist eine gute Idee, aber ...', level: 'a2', copyright: c1 },
                            { value: 'Nein, das geht nicht.', level: 'a2', copyright: c1 },
                            { value: 'Ich finde den Vorschlag nicht gut.', level: 'a2', copyright: c1 },
                            { value: 'Ich bin nicht einverstanden.', level: 'a2', copyright: c1 },
                            { value: 'Die Idee gefällt mir nicht.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'das Bresprochene zusammenfassen',
                        entries: [
                            { value: 'Also, dann treffen wir uns am Montag / am Abend um 19:00 Uhr / in der Stadt / im Café / vor dem Rathaus / ...', level: 'a2', copyright: c1 },
                            { value: 'Also, dann kommst du / kommen Sie am Sonntag / ... um 19:00 Uhr zu mir ...', level: 'a2', copyright: c1 },
                            { value: 'Gut, dann komme ich am Samstag / ... um ... Uhr zu dir / Ihnen ...', level: 'a2', copyright: c1 },
                            { value: '... und wir kaufen zusammen das Geschenk für ...', level: 'a2', copyright: c1 },
                            { value: '... und wir lernen zusammen für die Prüfung', level: 'a2', copyright: c1 },
                            { value: '... und wir machen / kochen zusammen die Vorspeise', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'einen Termin verschieben',
                        entries: [
                            { value: 'Ich habe am Dienstag / am Abend leider keine Zeit. Geht es am Mittwoch / am Nachmittag?', level: 'a2', copyright: c1 },
                            { value: 'Ich kann heute / morgen nicht ins Kino gehen. Gehen wir am Samstag?', level: 'a2', copyright: c1 },
                            { value: 'Ich kann um 15:00 Uhr nicht kommen. Hast du / Haben Sie um 17:00 Uhr Zeit?', level: 'a2', copyright: c1 },
                            { value: 'Hast du / Haben Sie am Samstag Zeit? Heute passt es mir nicht.', level: 'a2', copyright: c1 },
                            { value: 'Können wir den Termin auf nächste Woche / nächsten Dienstag verschieben?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'etwas vorschlagen',
                        entries: [
                            { value: 'Spielen wir zusammen Volleyball / Tennis?', level: 'a2', copyright: c1 },
                            { value: 'Spielst du / Spielen Sie mit mir Tennis?', level: 'a2', copyright: c1 },
                            { value: 'Wir können ein Computerspiel machen / einen Kaffee trinken / einen Film anschauen / Musik hören.', level: 'a2', copyright: c1 },
                            { value: 'Komm / Kommen Sie, wir gehen zusammen in die Stadt / einkaufen / ins Kino.', level: 'a2', copyright: c1 },
                            { value: 'Möchtest du / Möchten Sie vielleicht mitkommen?', level: 'a2', copyright: c1 },
                            { value: 'Lass / Lassen Sie uns doch einen Spaziergang machen.', level: 'a2', copyright: c1 },
                            { value: 'Darf ich etwas vorschlagen? Komm / Kommen Sie zu mir.', level: 'a2', copyright: c1 },
                            { value: 'Willst du zu Heinz / Wollen Sie zu Herrn Becker / zum Fußball / zur Party mitkommen?', level: 'a2', copyright: c1 },
                            { value: 'Vielleicht interessiert dich / Sie das.', level: 'a2', copyright: c1 },
                            { value: 'Was meinst du / meinen Sie, wollen wir eine Radtour / eine Wanderung machen?', level: 'a2', copyright: c1 },
                            { value: 'Hast du / Haben Sie am Sonntag Zeit?', level: 'a2', copyright: c1 },
                            { value: 'Geht es bei dir / Ihnen um 10:00 Uhr am Sonntag?', level: 'a2', copyright: c1 },
                            { value: 'Gut, dann treffen wir uns dort.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'ein Vorschlag: einverstanden sein / nicht einverstanden sein',
                        entries: [
                            { value: 'Aber gern.', level: 'a2', copyright: c1 },
                            { value: 'Klar, ich komme gern.', level: 'a2', copyright: c1 },
                            { value: 'Gern/Okay, das machen wir.', level: 'a2', copyright: c1 },
                            { value: 'Das ist eine tolle/super/gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Ja, das finde ich gut/super/toll.', level: 'a2', copyright: c1 },
                            { value: 'Ich kann morgen nicht kommen, ich bin bei meinen Großeltern / noch in Bonn.', level: 'a2', copyright: c1 },
                            { value: 'Tut mir leid, ich habe keine Zeit.', level: 'a2', copyright: c1 },
                            { value: 'Heute? Schade, das geht nicht.', level: 'a2', copyright: c1 },
                            { value: 'Sehr nett / lieb von dir / Ihnen, aber da kann ich leider nicht.', level: 'a2', copyright: c1 },
                            { value: 'Das ist keine so gute Idee. Gehen wir doch lieber ins Theater.', level: 'a2', copyright: c1 },
                            { value: 'Also ich weiß nicht. Das finde ich nicht so interessant / gut.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'jemanden einladen / einen Termin vereinbaren',
                        entries: [
                            { value: 'Ich lade dich/Sie herzlich zu meiner Party / am Samstag / ... ein', level: 'a2', copyright: c1 },
                            { value: 'Ich mache eine Party und möchte dich/Sie einladen.', level: 'a2', copyright: c1 },
                            { value: 'Was hast du / haben Sie am Freitag vor?', level: 'a2', copyright: c1 },
                            { value: 'Hast du / Haben Sie am Freitag Zeit?', level: 'a2', copyright: c1 },
                            { value: 'Wollen wir uns am Freitag treffen?', level: 'a2', copyright: c1 },
                            { value: 'Treffen wir uns am Freitag um acht?', level: 'a2', copyright: c1 },
                            { value: 'Treffen wir uns heute Abend vor dem italienischen Restaurant?', level: 'a2', copyright: c1 },
                            { value: 'Wie wäre es mit Freitag?', level: 'a2', copyright: c1 },
                            { value: 'Geht es am Freitag um acht?', level: 'a2', copyright: c1 },
                            { value: 'Geht es am Nachmittag um 17:00 Uhr ?', level: 'a2', copyright: c1 },
                            { value: 'Passt es dir / Ihnen am Freitag um acht?', level: 'a2', copyright: c1 },
                            { value: 'Passt es dir / Ihnen am Mittwoch um 19:00 Uhr?', level: 'a2', copyright: c1 },
                            { value: 'Wann / Um wie viel Uhr treffen wir uns?', level: 'a2', copyright: c1 },
                            { value: 'Wann / Um wie viel Uhr hast du / haben Sie Zeit?', level: 'a2', copyright: c1 },
                            { value: 'Hast du / Haben Sie am Montag Lust?', level: 'a2', copyright: c1 },
                            { value: 'Kannst du / Können Sie nächste Woche kommen ?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'auf eine Einladung reagieren',
                        entries: [
                            { value: 'Ja, das geht.', level: 'a2', copyright: c1 },
                            { value: 'Ja, das passt mir gut.', level: 'a2', copyright: c1 },
                            { value: 'Kein Problem.', level: 'a2', copyright: c1 },
                            { value: 'Nein, am Freitag kann ich leider nicht.', level: 'a2', copyright: c1 },
                            { value: 'Nein, am Freitag geht es leider nicht.', level: 'a2', copyright: c1 },
                            { value: '(Tut mir leid, ) ich habe keine Zeit, weil ich arbeiten muss.', level: 'a2', copyright: c1 },
                            { value: 'Vielen Dank für die Einladung, ich komme gern.', level: 'a2', copyright: c1 },
                            { value: 'Vielen Dank, dass du/Sie an mich gedacht hast/haben.', level: 'a2', copyright: c1 },
                            { value: 'Ich danke dir/Ihnen für die Einladung und komme bestimmt.', level: 'a2', copyright: c1 },
                            { value: 'Tolle Idee, vielen Dank, bis Sonntag.', level: 'a2', copyright: c1 },
                            { value: 'Sehr lieb von dir/Ihnen, ich komme gern.', level: 'a2', copyright: c1 },
                            { value: 'Vielen Dank, aber ich kann leider nicht kommen.', level: 'a2', copyright: c1 },
                            { value: '..., aber das geht leider nicht.', level: 'a2', copyright: c1 },
                            { value: '..., aber leider kann ich nicht kommen.', level: 'a2', copyright: c1 },
                            { value: '..., aber leider bin ich am Wochenende in Köln.', level: 'a2', copyright: c1 },
                            { value: '..., aber mein Vater feiert seinen Geburtstag auch am Samstag.', level: 'a2', copyright: c1 }
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
                            { value: 'Wie bitte?', level: 'a2', copyright: c1 },
                            { value: 'Tut mir leid, ich habe dich / Sie nicht verstanden.', level: 'a2', copyright: c1 },
                            { value: 'Kannst du / Können Sie das bitte wiederholen / noch einmal sagen?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Sie wissen ein Wort auf Deutsch nicht',
                        entries: [
                            { value: 'Entschuldigung. Wie heißt das Wort ... auf Deutsch?', level: 'a2', copyright: c1 },
                            { value: 'Ich weiß das Wort nicht auf Deutsch. Ich meine ...', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'Freunde ausdrücken',
                        entries: [
                            { value: 'Schön, dass du/Sie an mich gedacht hast/haben.', level: 'a2', copyright: c1 },
                            { value: 'Ich habe mich sehr gefreut.', level: 'a2', copyright: c1 },
                            { value: 'Ich mag ... besonders gern.', level: 'a2', copyright: c1 },
                            { value: 'Das ist super.', level: 'a2', copyright: c1 },
                            { value: 'Ich bin sehr froh, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich freue mich (sehr) auf ...', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'sich bedanken',
                        entries: [
                            { value: 'Ich danke dir/Ihnen für ...', level: 'a2', copyright: c1 },
                            { value: 'Ich bedanke mich für ...', level: 'a2', copyright: c1 },
                            { value: 'Vielen Dank für die Einladung.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'etwas begründen',
                        entries: [
                            { value: 'Ich kann leider nicht kommen, weil ich noch einige Stunden arbeiten muss.', level: 'a2', copyright: c1 },
                            { value: 'Sport mache ich montags, deshalb ist das mein Lieblingstag.', level: 'a2', copyright: c1 },
                            { value: 'Ich habe erst um 14:00 Uhr Mittagspause.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'etwas beschreiben',
                        entries: [
                            { value: 'Das Haus ist groß/klein und hat sehr große/kleine Fenster.', level: 'a2', copyright: c1 },
                            { value: 'Im Erdgeschoss sind zwei kleine Geschäfte', level: 'a2', copyright: c1 },
                            { value: 'Neben/Hinter dem Haus ist eine Garage', level: 'a2', copyright: c1 },
                            { value: 'Vor/Hinter dem Haus ist ein Garten.', level: 'a2', copyright: c1 },
                            { value: 'Das Geschäft ist in der Marktstraße', level: 'a2', copyright: c1 },
                            { value: 'Die Kirche hat zwei Türme', level: 'a2', copyright: c1 },
                            { value: 'Das Rathaus / Museum / Einkaufszentrum ... ist ganz alt / neu', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'etwas bewerten',
                        entries: [
                            { value: 'Ich finde es traurig / schrecklich, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich finde es schön, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich bin froh, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich denke, das ist eine gute Idee.', level: 'a2', copyright: c1 },
                            { value: 'Meiner Meinung nach ist es sehr gut, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Am besten / Besonders gut gefällt mir, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Ich finde ihn ziemlich / sehr / total nett / sympatisch', level: 'a2', copyright: c1 },
                            { value: 'Ich finde das gut / leicht / schwer / interessant / blöd', level: 'a2', copyright: c1 },
                            { value: 'Ich finde das sehr interessant / ... aber auch ziemlich schwer.', level: 'a2', copyright: c1 },
                            { value: 'Das finde ich ziemlich leicht und total cool.', level: 'a2', copyright: c1 },
                            { value: 'Ich mag Sport total gern.', level: 'a2', copyright: c1 },
                            { value: 'Ich finde das Buch ziemlich lustig', level: 'a2', copyright: c1 },
                            { value: 'Die Party / Das Fest / Der Film ... hat mir (auch / sehr gut) gefallen.', level: 'a2', copyright: c1 },
                            { value: 'Mir gefällt das Angebot / die Idee auch sehr gut.', level: 'a2', copyright: c1 },
                            { value: 'Mir gefällt die Idee / das Angebot / der Film ... nicht besonders / überhaupt nicht.', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'sich entschuldigen',
                        entries: [
                            { value: 'Entschuldigung.', level: 'a2', copyright: c1 },
                            { value: 'Entschuldigungen Sie bitte, dass ...', level: 'a2', copyright: c1 },
                            { value: 'Das tut mir leid.', level: 'a2', copyright: c1 },
                            { value: 'Ich entschuldige mich für ...', level: 'a2', copyright: c1 },
                            { value: 'Leider konnte ich nicht kommen', level: 'a2', copyright: c1 },
                            { value: 'Leider musste ich im Bett bleiben', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'nach dem Weg fragen',
                        entries: [
                            { value: 'Ich möchte gern wissen, wo die Blumenstraße / der Bahnhof / ... ist.', level: 'a2', copyright: c1 },
                            { value: 'Ich suche die Franzstraße / den Bahnhof / ..., kannst du/können Sie mir helfen?', level: 'a2', copyright: c1 },
                            { value: 'Können Sie / Kannst du mir bitte sagen, wie ich zum Dom komme / wo der Dom ist?', level: 'a2', copyright: c1 },
                            { value: 'Wie komme ich zu Peter / zum Flughafen / zur Haltestelle?', level: 'a2', copyright: c1 },
                            { value: 'Wo wohnst du? / Wo wohnen Sie?', level: 'a2', copyright: c1 },
                            { value: 'Wo finde ich das neue Rathaus?', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'den Weg beschreiben',
                        entries: [
                            { value: 'Du fährst / Sie fahren zuerst geradeaus und dann nach rechts.', level: 'a2', copyright: c1 },
                            { value: 'Du gehst / Sie gehen hier geradeaus, dann die erste Straße links.', level: 'a2', copyright: c1 },
                            { value: 'Du fährst / Sie fahren 2km geradeaus.', level: 'a2', copyright: c1 },
                            { value: 'Du gehst / Sie gehen die nächste Straße links / rechts.', level: 'a2', copyright: c1 },
                            { value: 'Das ist in der Nähe von der Schule', level: 'a2', copyright: c1 },
                            { value: 'Du gehst / Sie gehen hier gleich zurück.', level: 'a2', copyright: c1 },
                            { value: 'Und dann siehst du / sehen Sie schön ...', level: 'a2', copyright: c1 }
                        ]
                    },
                    {
                        groupId: 'sich verabreden',
                        entries: [
                            { value: 'Hast du / Haben Sie am Wochenende Zeit?', level: 'a2', copyright: c1 },
                            { value: 'Wir wollen eine Radtour / eine Wanderung machen. Hast du Lust? / Haben Sie Lust?', level: 'a2', copyright: c1 },
                            { value: 'Gehst du / Gehen Sie morgen mit ins Schwimmbad?', level: 'a2', copyright: c1 },
                            { value: 'Wollen wir am Abend zusammen eine Pizza essen (gehen) ?', level: 'a2', copyright: c1 },
                            { value: 'Geht es bei dir / Ihnen um 20:00 Uhr ?', level: 'a2', copyright: c1 },
                            { value: 'Lass uns doch am Sonntag ins Theater gehen.', level: 'a2', copyright: c1 }
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