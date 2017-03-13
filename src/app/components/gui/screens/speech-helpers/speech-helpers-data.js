let c1 = ['Hueber, Fit fürs Goethe-Zertifikat A2', 'Cornelsen, Prüfungstraining DaF: A1, A2'];
let c2 = 'Goethe Institut, GOETHE-ZERTIFIKAT A1 START DEUTSCH 1, PRÜFUNGSZIELE TESTBESCHREIBUNG';
let c3 = 'Goethe Institut, GOETHE-ZERTIFIKAT A2 FIT IN DEUTSCH 2, PRÜFUNGSZIELE TESTBESCHREIBUNG';

const data = [
    {
        groupId: 'Fragen zur Person',
        entries: [
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
        entries: [
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
        entries: [
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
        entries: [
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
    },
    {
        groupId: 'Allgemeine Begriffe (Notionen)',
        entries: [
            {
                groupId: 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken',
                entries: [
                    {
                        groupId: '(nicht) sein',
                        translate: "Zugehörigkeit ausdrücken: exprimer l'appartenance; ausdrücken: exprimer qc.",
                        entries: [
                            { value: 'Gibt es hier einen Kindergarten?', level: 'a1', copyright: c2 },
                            { value: '– Nein, es gibt nur eine Grundschule.', level: 'a1', copyright: c2 },
                            { value: 'Hier gibt es aber viele Kinos.', level: 'a1', copyright: c2 },
                            { value: 'Es gibt hier keinen Bahnhof.', level: 'a2', copyright: c3 },
                            { value: 'Gibt es hier ein Schwimmbad?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'anwesend/abwesend sein',
                        translate: 'être présent/absent',
                        entries: [
                            { value: 'Ist Elke da?', level: 'a1', copyright: c2 },
                            { value: '– Ja./Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: 'Peter ist heute nicht da.', level: 'a2', copyright: c3 },
                            { value: 'Ist Herr Neumann da?', level: 'a2', copyright: c3 },
                            { value: 'Ich glaube, heute ist niemand da.', level: 'a2', copyright: c3 },
                            { value: 'Meine Freundin kommt gleich.', level: 'a2', copyright: c3 },
                            { value: 'Tut mir leid, Herr Brandt ist schon weg.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: '(nicht) verfügbar sein',
                        translate: '(ne pas) être disponible',
                        entries: [
                            { value: 'Hast du ein Auto?', level: 'a1', copyright: c2 },
                            { value: '– Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich habe kein Auto.', level: 'a1', copyright: c2 },
                            { value: 'Ich habe ein Fahrrad.', level: 'a2', copyright: c3 },
                            { value: 'Leider habe ich kein Geld mehr.', level: 'a2', copyright: c3 },
                            { value: 'Wir haben nichts gefunden.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: '(nicht) vorkommen/geschehen',
                        translate: '(ne pas) se passer',
                        entries: [
                            { value: 'Was ist passiert?', level: 'a1', copyright: c2 },
                            { value: 'Wann ist das passiert?', level: 'a1', copyright: c2 },
                            { value: 'Was ist hier los?', level: 'a2', copyright: c3 },
                            { value: 'Das ist gestern passiert.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Inklusion/Exklusion',
                        entries: [
                            { value: 'Ich komme mit meiner Freundin.', level: 'a1', copyright: c2 },
                            { value: 'Er kommt ohne Auto.', level: 'a1', copyright: c2 },
                            { value: 'Ich fahre mit meinen Eltern in Ferien.', level: 'a2', copyright: c3 },
                            { value: 'Er kommt ohne Auto.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Besitz/Zugehörigkeit',
                        translate: ['Besitz: possession', 'Zugehörigkeit: appartenance'],
                        entries: [
                            { value: 'Wem gehört der Mercedes?', level: 'a1', copyright: c2 },
                            { value: '– Das ist mein/dein/sein/ihr Auto.', level: 'a1', copyright: c2 },
                            { value: 'Simon arbeitet jetzt bei Siemens.', level: 'a1', copyright: c2 },
                            { value: 'Das ist (nicht) mein, dein, sein, ihr Wörterbuch.', level: 'a2', copyright: c3 },
                            { value: 'Natürlich gehört das mir!', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Raum definieren',
                translate: ['lieu', 'endroit', 'place'],
                entries: [
                    {
                        groupId: 'Ort',
                        entries: [
                            { value: 'Wo wohnst du?', level: 'a1', copyright: c2 },
                            { value: '– In Köln.', level: 'a1', copyright: c2 },
                            { value: '– Ich wohne jetzt bei Petra.', level: 'a1', copyright: c2 },
                            { value: 'Wo ist denn meine Brille?', level: 'a1', copyright: c2 },
                            { value: '– Hier.', level: 'a1', copyright: c2 },
                            { value: '– Dort.', level: 'a1', copyright: c2 },
                            { value: '– Da ist sie ja.', level: 'a1', copyright: c2 },
                            { value: 'Wo sind die Kinder?', level: 'a1', copyright: c2 },
                            { value: '– Zu Hause.', level: 'a1', copyright: c2 },
                            { value: '– In der Schule.', level: 'a1', copyright: c2 },
                            { value: 'Wo liegt ...?', level: 'a1', copyright: c2 },
                            { value: '– Kiel liegt an der Ostsee.', level: 'a1', copyright: c2 },
                            { value: '– Die Schlüssel liegen auf dem Tisch.', level: 'a1', copyright: c2 },
                            { value: 'Miriam wohnt in Hamburg bei ihren Eltern.', level: 'a2', copyright: c3 },
                            { value: 'Hier/dort/da steht mein neues Fahrrad.', level: 'a2', copyright: c3 },
                            { value: 'Meine Schwester ist zu Hause/in der Schule.', level: 'a2', copyright: c3 },
                            { value: 'Hamburg ist in Norddeutschland.', level: 'a2', copyright: c3 },
                            { value: 'Ich wohne in Soest, das ist in der Nähe von Köln.', level: 'a2', copyright: c3 },
                            { value: 'Die Breite Straße ist im Zentrum.', level: 'a2', copyright: c3 },
                            { value: 'Im Süden/Norden/Westen/Osten.', level: 'a2', copyright: c3 },
                            { value: 'Das ist hier/dort/in der Mitte/am Ende der Straße.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Herkunft',
                        entries: [
                            { value: 'Woher kommst du?', level: 'a1', copyright: c2 },
                            { value: '– Aus der Ukraine.', level: 'a1', copyright: c2 },
                            { value: '– Aus Prag.', level: 'a1', copyright: c2 },
                            { value: '– Vom Arzt.', level: 'a1', copyright: c2 },
                            { value: '– Ich komme aus Polen.', level: 'a2', copyright: c3 },
                            { value: 'Um acht gehe ich aus dem Haus.', level: 'a2', copyright: c3 },
                            { value: 'Kommst du jetzt vom Arzt?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Richtung',
                        entries: [
                            { value: 'Wohin gehst du?', level: 'a1', copyright: c2 },
                            { value: 'Wohin fährst du?', level: 'a1', copyright: c2 },
                            { value: '– Nach Hause.', level: 'a1', copyright: c2 },
                            { value: '– Zur Arbeit.', level: 'a1', copyright: c2 },
                            { value: '– In die Schule.', level: 'a1', copyright: c2 },
                            { value: '– Zu Susi.', level: 'a1', copyright: c2 },
                            { value: '– Auf die Bank.', level: 'a1', copyright: c2 },
                            { value: '– Ans Meer.', level: 'a1', copyright: c2 },
                            { value: '– Nach Österreich.', level: 'a1', copyright: c2 },
                            { value: 'Wir gehen (fahren) nach Hause.', level: 'a2', copyright: c3 },
                            { value: 'Wir gehen (fahren) in die Schule.', level: 'a2', copyright: c3 },
                            { value: 'Wir gehen (fahren) ans Meer.', level: 'a2', copyright: c3 },
                            { value: 'Wir gehen (fahren) nach Deutschland.', level: 'a2', copyright: c3 },
                            { value: 'Wir gehen (fahren) zu meiner Freundin.', level: 'a2', copyright: c3 },
                            { value: 'Gehen Sie hier rechts in die Bahnhofsstraße, dann immer geradeaus und bei der Ampel links in die Poststraße.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Distanz',
                        entries: [
                            { value: 'Wie weit ist es bis Bonn?', level: 'a1', copyright: c2 },
                            { value: '– Nur zehn Kilometer.', level: 'a1', copyright: c2 },
                            { value: 'Bis zur Schule ist es nicht weit, nur zehn Minuten.', level: 'a2', copyright: c3 },
                            { value: 'Wie weit ist es von hier bis zum Hauptbahnhof?', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Zeit angeben',
                translate: "citer l'heure",
                entries: [
                    {
                        groupId: 'Zeitpunkt',
                        translate: ['temps', 'moment', 'instant'],
                        entries: [
                            { value: 'Wann kommst du?', level: 'a1', copyright: c2 },
                            { value: '– Um 3 (Uhr).', level: 'a1', copyright: c2 },
                            { value: '– Heute Nachmittag.', level: 'a2', copyright: c3 },
                            { value: '– Am 20. September.', level: 'a1', copyright: c2 },
                            { value: '– Im Juli.', level: 'a1', copyright: c2 },
                            { value: 'Wie spät ist es bitte?', level: 'a1', copyright: c2 },
                            { value: '– Es ist jetzt 7 Uhr.', level: 'a1', copyright: c2 },
                            { value: 'Die Schule geht bis halb zwei.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Zeitangaben',
                        translate: 'horaire',
                        entries: [
                            { value: 'Wann sind Sie geboren?', level: 'a1', copyright: c2 },
                            { value: '– Am 12. Mai 1988.', level: 'a1', copyright: c2 },
                            { value: 'Wir fahren im Mai in Urlaub.', level: 'a1', copyright: c2 },
                            { value: 'Wir fahren im Juli ans Meer.', level: 'a2', copyright: c3 },
                            { value: 'Die Ferien beginnen nächste Woche.', level: 'a2', copyright: c3 },
                            { value: 'Am Morgen/Morgens bin ich immer müde.', level: 'a2', copyright: c3 },
                            { value: 'Am Abend/Abends etc. treffe ich meine Freunde.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vorzeitigkeit',
                        translate: 'antériorité',
                        entries: [
                            { value: 'Komm bitte vor 10 Uhr.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind (zu) früh.', level: 'a1', copyright: c2 },
                            { value: 'Du kommst zu früh.', level: 'a2', copyright: c3 },
                            { value: 'Ich rufe dich vor dem Unterricht an.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Nachzeitigkeit',
                        translate: 'postériorité',
                        entries: [
                            { value: 'Bitte nach 23 Uhr nicht mehr anrufen.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind leider zu spät.', level: 'a1', copyright: c2 },
                            { value: 'Du kommst zu spät.', level: 'a2', copyright: c3 },
                            { value: 'Die Hausaufgaben mache ich nach dem Essen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Zukunftsbezug',
                        translate: 'référence future',
                        entries: [
                            { value: 'Morgen muss ich arbeiten.', level: 'a1', copyright: c2 },
                            { value: 'Wir machen das bald/später .', level: 'a1', copyright: c2 },
                            { value: 'Heute Abend rufe ich dich an.', level: 'a1', copyright: c2 },
                            { value: 'Ich rufe dich gleich/später/morgen/nächste Woche an.', level: 'a2', copyright: c3 },
                            { value: 'Am Montag gehen wir ins Kino.', level: 'a1', copyright: c2 },
                            { value: 'Morgen/Bald/Später kommt mein Vater nach Hause.', level: 'a2', copyright: c3 },
                            { value: 'Morgen Nachmittag/Abend/Mittag treffen wir uns wieder.', level: 'a2', copyright: c3 },
                            { value: 'Nächste Woche/Nächsten Monat/Nächstes Jahr kommt er.', level: 'a2', copyright: c3 },
                            { value: 'Am Dienstag/ Morgen früh/In zwei Tagen bin ich zu Hause.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Gegenwartsbezug',
                        translate: 'référence présent',
                        entries: [
                            { value: 'Wir essen jetzt.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin schon da.', level: 'a1', copyright: c2 },
                            { value: 'Er ist heute in Mainz.', level: 'a1', copyright: c2 },
                            { value: 'Was machst du heute/jetzt?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vergangenheitsbezug',
                        translate: 'référence passé',
                        entries: [
                            { value: 'Gestern/vor zwei Tagen habe ich die Prüfung gemacht.', level: 'a1', copyright: c2 },
                            { value: 'Gestern/Vor einer Woche war ich in Berlin.', level: 'a2', copyright: c3 },
                            { value: 'Er war gerade noch hier.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe Angelika letzte Woche gesehen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Verspätung/Frühzeitigkeit',
                        translate: ['Verspätung: retard', 'Frühzeitigkeit: précocité'],
                        entries: [
                            { value: 'Es ist schon spät.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Dauer',
                        translate: 'durée',
                        entries: [
                            { value: 'Wie lange bleibt ihr in Berlin?', level: 'a1', copyright: c2 },
                            { value: '– Drei Wochen.', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Lange.', level: 'a1', copyright: c2 },
                            { value: '– Bis Montag.', level: 'a1', copyright: c2 },
                            { value: 'Wir bleiben drei Tage in Rom.', level: 'a2', copyright: c3 },
                            { value: 'Wir wohnen schon lange in Livorno.', level: 'a2', copyright: c3 },
                            { value: 'Wir bleiben bis Montag hier.', level: 'a2', copyright: c3 },
                            { value: 'Von acht bis eins haben wir Schule.', level: 'a2', copyright: c3 },
                            { value: 'Der Film dauert zwei Stunden.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Beginn',
                        translate: ['début', 'commencement'],
                        entries: [
                            { value: 'Wann beginnt der Film?', level: 'a1', copyright: c2 },
                            { value: '– Um 20 Uhr fängt er an.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Ende',
                        entries: [
                            { value: 'Bis wann arbeitest du?', level: 'a1', copyright: c2 },
                            { value: '– Heute bis 18 Uhr.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Häufigkeit',
                        translate: 'fréquence',
                        entries: [
                            { value: 'Wie oft geht sie ins Kino?', level: 'a1', copyright: c2 },
                            { value: '– Zweimal im Monat.', level: 'a1', copyright: c2 },
                            { value: '– Nie!', level: 'a1', copyright: c2 },
                            { value: '– Oft.', level: 'a1', copyright: c2 },
                            { value: 'Gehst du oft in die Disco?', level: 'a2', copyright: c3 },
                            { value: '– Manchmal./Oft./Nie./Zweimal im Monat.', level: 'a2', copyright: c3 },
                            { value: 'Fährst du jedes Wochenende nach Hause?', level: 'a2', copyright: c3 },
                            { value: 'Abends bin ich immer zu Hause.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Quantität angeben',
                entries: [
                    {
                        groupId: 'Zahlen/Mengenangaben',
                        translate: 'Mengenangaben: donnée de quantité',
                        entries: [
                            { value: 'Was/Wie viel kostet die Zeitung?', level: 'a1', copyright: c2 },
                            { value: '– Vier Euro.', level: 'a1', copyright: c2 },
                            { value: 'Was darf‘s denn sein?', level: 'a1', copyright: c2 },
                            { value: '– Ein Pfund Tomaten, bitte.', level: 'a1', copyright: c2 },
                            { value: '– Ein Glas Milch, bitte.', level: 'a1', copyright: c2 },
                            { value: '– Eine Flasche Wein, bitte.', level: 'a1', copyright: c2 },
                            { value: '– Eine Tasse Tee, bitte.', level: 'a1', copyright: c2 },
                            { value: '– 1,5 Liter, bitte.', level: 'a1', copyright: c2 },
                            { value: 'Wie viel möchten Sie?', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Alles.', level: 'a1', copyright: c2 },
                            { value: '– Viel.', level: 'a1', copyright: c2 },
                            { value: '– Ein bisschen, bitte.', level: 'a1', copyright: c2 },
                            { value: 'Was/Wie viel kostet das?', level: 'a2', copyright: c3 },
                            { value: '– Ein Euro fünfzig.', level: 'a2', copyright: c3 },
                            { value: 'Ein Kilo Kartoffeln', level: 'a2', copyright: c3 },
                            { value: 'Ein Glas Wasser', level: 'a2', copyright: c3 },
                            { value: 'Ein Teller Suppe', level: 'a2', copyright: c3 },
                            { value: 'Eine Flasche Apfelsaft', level: 'a2', copyright: c3 },
                            { value: 'Eine Tasse Tee', level: 'a2', copyright: c3 },
                            { value: '500 Gramm.', level: 'a2', copyright: c3 },
                            { value: 'Ein halbes Hähnchen.', level: 'a2', copyright: c3 },
                            { value: 'Ein paar Äpfel', level: 'a2', copyright: c3 },
                            { value: 'Ein bisschen Gemüse', level: 'a2', copyright: c3 },
                            { value: 'Viele Kartoffeln.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe alles/nur noch wenig/nichts mehr.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Menge',
                        translate: 'Quantité',
                        entries: [
                            { value: 'Wie viel möchtest du?', level: 'a2', copyright: c3 },
                            { value: '– (Nicht) Alles/Viel/Ein bisschen, bitte.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe nichts mehr/nur noch wenig.', level: 'a2', copyright: c3 },
                            { value: 'Du hast fast alles/nichts gegessen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Grad',
                        translate: ['degré', 'grade'],
                        entries: [
                            { value: 'Das ist sehr/zu gefährlich.', level: 'a1', copyright: c2 },
                            { value: 'Das ist ziemlich/sehr/viel zu/nicht so schwierig.', level: 'a2', copyright: c3 },
                            { value: 'Er hat nur wenig Interesse für uns.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Dimension/Maßangabe',
                        entries: [
                            { value: 'Wie lang/groß ... ist das?', level: 'a1', copyright: c2 },
                            { value: '– 1,5 Meter.', level: 'a1', copyright: c2 },
                            { value: '– Das ist zu kurz.', level: 'a2', copyright: c3 },
                            { value: 'Wie schwer ...?', level: 'a1', copyright: c2 },
                            { value: '– 500 Gramm.', level: 'a1', copyright: c2 },
                            { value: '– 2 Kilo(gramm).', level: 'a1', copyright: c2 },
                            { value: 'Wie warm ...?', level: 'a1', copyright: c2 },
                            { value: '– 20 Grad.', level: 'a1', copyright: c2 },
                            { value: '– Sehr warm.', level: 'a1', copyright: c2 },
                            { value: '– Nicht kalt.', level: 'a1', copyright: c2 },
                            { value: 'Wie viel ...?', level: 'a1', copyright: c2 },
                            { value: '– Einen Liter.', level: 'a1', copyright: c2 },
                            { value: 'Wie schnell ...?', level: 'a1', copyright: c2 },
                            { value: '– Nur maximal 60 km/h.', level: 'a1', copyright: c2 },
                            { value: 'Das ist sehr lang/ groß/klein/schwer/warm/kalt/schnell/langsam.', level: 'a2', copyright: c3 },
                            { value: 'Das ist ganz einfach.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Art und Weise angeben',
                entries: [
                    {
                        groupId: 'physisch',
                        entries: [
                            { value: 'Wie schmeckt das Essen?', level: 'a1', copyright: c2 },
                            { value: 'Wie riecht das Essen?', level: 'a1', copyright: c2 },
                            { value: '– Wirklich gut.', level: 'a1', copyright: c2 },
                            { value: '– Wirklich nicht gut.', level: 'a1', copyright: c2 },
                            { value: 'Welche Farbe hat das Auto?', level: 'a1', copyright: c2 },
                            { value: '– Es ist rot.', level: 'a1', copyright: c2 },
                            { value: '– Es ist blau.', level: 'a1', copyright: c2 },
                            { value: '– Es ist grün.', level: 'a1', copyright: c2 },
                            { value: '– Es ist gelb.', level: 'a1', copyright: c2 },
                            { value: '– Es ist schwarz.', level: 'a1', copyright: c2 },
                            { value: '– Es ist weiß.', level: 'a1', copyright: c2 },
                            { value: '– Es ist braun.', level: 'a1', copyright: c2 },
                            { value: 'Die Tür ist offen.', level: 'a1', copyright: c2 },
                            { value: 'Die Tür ist geschlossen.', level: 'a1', copyright: c2 },
                            { value: 'Wie alt ist Dieter?', level: 'a1', copyright: c2 },
                            { value: '– Nicht sehr alt.', level: 'a1', copyright: c2 },
                            { value: '– Schon 60.', level: 'a1', copyright: c2 },
                            { value: '– Erst 50.', level: 'a1', copyright: c2 },
                            { value: 'Das Essen schmeckt wunderbar.', level: 'a2', copyright: c3 },
                            { value: 'Mein neuer Pullover ist rot, grün, blau ...', level: 'a2', copyright: c3 },
                            { value: 'Angelika ist 15 Jahre alt.', level: 'a2', copyright: c3 },
                            { value: 'Das Museum ist heute geschlossen/offen.', level: 'a2', copyright: c3 },
                            { value: 'Er ist krank/gesund.', level: 'a2', copyright: c3 },
                            { value: 'Es geht ihm gut.', level: 'a2', copyright: c3 },
                            { value: 'Das ist aus Plastik/Holz/Glas.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Wertung',
                        translate: 'évaluation',
                        entries: [
                            { value: '(Wert/Preis?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) teuer/billig', level: 'a1', copyright: c2 },
                            { value: '(Qualität?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) (sehr) gut', level: 'a1', copyright: c2 },
                            { value: '(akzeptabel?)', level: 'a1', copyright: c2 },
                            { value: '(adäquat?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) in Ordnung', level: 'a1', copyright: c2 },
                            { value: '– (nicht) in Ordnung, genug', level: 'a1', copyright: c2 },
                            { value: '(richtig?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) richtig', level: 'a1', copyright: c2 },
                            { value: '(Fähigkeit?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) können', level: 'a1', copyright: c2 },
                            { value: '(Wichtigkeit?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) wichtig', level: 'a1', copyright: c2 },
                            { value: 'wie wichtig?', level: 'a1', copyright: c2 },
                            { value: '(Normalität?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) normal', level: 'a1', copyright: c2 },
                            { value: '(Schwierigkeit?)', level: 'a1', copyright: c2 },
                            { value: '– (nicht) leicht', level: 'a1', copyright: c2 },
                            { value: 'Diese Sache ist teuer/billig/(nicht) in Ordnung/(nicht) wichtig/(nicht) richtig/(nicht) leicht.', level: 'a2', copyright: c3 },
                            { value: 'Die Übung ist nicht schwierig.', level: 'a2', copyright: c3 },
                            { value: 'Diesen Film finde ich besser.', level: 'a2', copyright: c3 },
                            { value: 'Das hast du falsch gemacht, am besten versuchst du es noch einmal.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vergleich',
                        translate: 'comparaison',
                        entries: [
                            { value: 'Spielst du Fußball?', level: 'a1', copyright: c2 },
                            { value: '– Ja, wie meine Schwester.', level: 'a1', copyright: c2 },
                            { value: 'Sie ist so alt wie ich.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind gleich alt.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin so groß wie meine Freundin.', level: 'a2', copyright: c3 },
                            { value: 'Wir sind gleich groß/alt.', level: 'a2', copyright: c3 },
                            { value: 'Ich bin älter als du.', level: 'a2', copyright: c3 },
                            { value: 'Der rote Pullover ist viel teurer als der weiße.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Logische Verknüpfung herstellen',
                translate: 'établir un lien logique',
                entries: [
                    {
                        groupId: 'Grund',
                        translate: ['cause', 'raison'],
                        entries: [
                            { value: 'Warum kommt er nicht mit zur Party?', level: 'a1', copyright: c2 },
                            { value: '– Er kann nicht. Er arbeitet heute lange.', level: 'a1', copyright: c2 },
                            { value: 'Warum ist Miriam heute nicht in der Schule?', level: 'a2', copyright: c3 },
                            { value: '– Sie ist krank.', level: 'a2', copyright: c3 },
                            { value: '– Weil sie krank ist.', level: 'a2', copyright: c3 },
                            { value: '– Miriam ist krank, deshalb kommt sie nicht.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Bedingung',
                        translate: 'condition',
                        entries: [
                            { value: 'Kann ich das Auto haben?', level: 'a1', copyright: c2 },
                            { value: '– Ja, aber nur für eine Stunde.', level: 'a1', copyright: c2 },
                            { value: 'Kann ich das Buch haben?', level: 'a2', copyright: c3 },
                            { value: '– Ja, aber du musst es mir morgen zurückgeben.', level: 'a2', copyright: c3 },
                            { value: 'Wenn es regnet, bleiben wir zu Hause.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Aufzählung/Alternative',
                        translate: 'Aufzählung: dénombrement, énumération',
                        entries: [
                            { value: 'Er isst und trinkt gern.', level: 'a1', copyright: c2 },
                            { value: 'Möchtest du Wasser oder Wein?', level: 'a1', copyright: c2 },
                            { value: 'Ich esse gern Brot und Kartoffeln und Fleisch.', level: 'a2', copyright: c3 },
                            { value: 'Möchtest du Wasser oder Cola?', level: 'a2', copyright: c3 },
                            { value: 'Wir gehen erst einkaufen und dann ins Café.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Modales ausdrücken',
                entries: [
                    {
                        groupId: 'Fähigkeit',
                        translate: ['aptitude', 'capacité'],
                        entries: [
                            { value: 'Können Sie Russisch (sprechen)?', level: 'a1', copyright: c2 },
                            { value: '– Ja klar.', level: 'a1', copyright: c2 },
                            { value: '– Sicher.', level: 'a1', copyright: c2 },
                            { value: 'Kannst du Tennis spielen?', level: 'a2', copyright: c3 },
                            { value: '– Ja, ein bisschen/gut./Natürlich./Leider nicht.', level: 'a2', copyright: c3 },
                            { value: 'Ich weiß nicht, wie man das macht.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Möglichkeit',
                        translate: ['occasion', 'possibilité'],
                        entries: [
                            { value: 'Können Sie morgen kommen?', level: 'a1', copyright: c2 },
                            { value: 'Ich kann morgen um acht Uhr bei dir sein.', level: 'a2', copyright: c3 },
                            { value: 'Vielleicht sehen wir uns morgen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Notwendigkeit/Verpflichtung',
                        translate: ['Notwendigkeit: besoin/nécessité', 'Verpflichtung: obligation/engagement'],
                        entries: [
                            { value: 'Mein Sohn muss um 8 Uhr zu Hause sein.', level: 'a1', copyright: c2 },
                            { value: 'Du musst mir helfen!', level: 'a2', copyright: c3 },
                            { value: 'Kannst du sofort kommen? Es ist wichtig.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        groupId: 'Strategien',
        entries: [
            {
                groupId: 'Redeorganisation',
                entries: [
                    {
                        groupId: 'eine Äußerung einleiten',
                        entries: [
                            { value: 'Entschuldigung... Kann ich etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigen Sie... Kann ich etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Was kann ich für Sie tun?', level: 'a1', copyright: c2 },
                            { value: 'Brauchen Sie Hilfe?', level: 'a1', copyright: c2 },
                            { value: '(Im Restaurant.) Hallo! Entschuldigung bitte!', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigung ...', level: 'a2', copyright: c3 },
                            { value: 'Entschuldige, hast du einen Moment Zeit?', level: 'a2', copyright: c3 },
                            { value: 'Kann ich etwas fragen?', level: 'a2', copyright: c3 },
                            { value: 'Kannst du mir helfen?', level: 'a2', copyright: c3 },
                            { value: 'Hallo!', level: 'a2', copyright: c3 },
                            { value: 'Hallo, Chris! Wie waren deine Ferien?', level: 'a2', copyright: c3 },
                            { value: 'Sag mal: wo ist denn ...', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'eine Äußerung abschließen',
                        entries: [
                            { value: 'Danke. Ich muss jetzt leider gehen.', level: 'a1', copyright: c2 },
                            { value: 'Okay, tschüss bis bald.', level: 'a1', copyright: c2 },
                            { value: 'Gut: ...', level: 'a1', copyright: c2 },
                            { value: 'Na gut.', translate: 'mouais', level: 'a1', copyright: c2 },
                            { value: 'Dann, herzlichen Dank', translate: 'Merci beaucoup !', level: 'a1', copyright: c2 },
                            { value: 'auf Wiedersehen.', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigung, ich muss jetzt weg.', level: 'a2', copyright: c3 },
                            { value: 'Also, bis heute Mittag.', level: 'a2', copyright: c3 },
                            { value: 'Danke für deine Hilfe.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'um das Wort bitten',
                        translate: 'prendre la parole',
                        entries: [
                            { value: 'Moment bitte.', level: 'a1', copyright: c2 },
                            { value: 'Bitte!', level: 'a1', copyright: c2 },
                            { value: 'Ich möchte (noch) etwas sagen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Zuhören signalisieren',
                        translate: 'signaler son écoute',
                        entries: [
                            { value: 'a?', level: 'a1', copyright: c2 },
                            { value: 'So?', level: 'a1', copyright: c2 },
                            { value: 'Wirklich?', level: 'a1', copyright: c2 },
                            { value: 'Ach.', translate: ['Hélas !', 'Ah !'], level: 'a1', copyright: c2 },
                            { value: 'Sicher.', translate: 'assurément', level: 'a1', copyright: c2 },
                            { value: 'Aha.', translate: 'Ah! (ironie, étonnement)', level: 'a1', copyright: c2 },
                            { value: 'Naja.', translate: 'bof', level: 'a1', copyright: c2 },
                            { value: 'Bitte?', level: 'a1', copyright: c2 },
                            { value: '(Na) Klar.', translate: ['Forcément !', 'Bien sûr !'], level: 'a1', copyright: c2 },
                            { value: 'Ja?', level: 'a2', copyright: c3 },
                            { value: 'Und (dann)?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'zum Sprechen auffordern',
                        translate: 'engager le dialogue',
                        entries: [
                            { value: 'Also?', translate: 'Alors !', level: 'a1', copyright: c2 },
                            { value: 'Ja?', level: 'a1', copyright: c2 },
                            { value: 'Und?', level: 'a1', copyright: c2 },
                            { value: 'Ja bitte !', level: 'a1', copyright: c2 },
                            { value: 'Und dann?', level: 'a1', copyright: c2 },
                            { value: 'Und?', level: 'a1', copyright: c2 },
                            { value: 'Sag!', level: 'a2', copyright: c3 },
                            { value: 'Erzähl!', level: 'a2', copyright: c3 },
                            { value: 'Fängst du bitte an?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'gemeinsames Wissen andeuten',
                        translate: 'faire comprendre des connaissances partagées',
                        entries: [
                            { value: 'Nein, heute geht es nicht. Da spielen wir doch Fußball.', level: 'a2', copyright: c3 },
                            { value: 'Du weißt ja, dass Micha krank ist.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Beispiele geben/etwas verdeutlichen',
                        translate: ['Beispiele geben: donner des exemples', 'etwas verdeutlichen: expliquer qc.'],
                        entries: [
                            { value: 'Ich esse gern Obst, zum Beispiel Orangen, Bananen und Erdbeeren.', level: 'a1', copyright: c2 },
                            { value: 'Ich habe viele Hobbys, zum Beispiel Fußball spielen und Musik hören.', level: 'a2', copyright: c3 },
                            { value: 'Meine Familie, also das ist: mein Vater Bruno, meine Mutter Anna und mein Bruder Fabio.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vermeidung',
                        translate: 'évitement',
                        entries: [
                            { value: 'Potsdam liegt ... ja, das liegt nahe bei Berlin.', level: 'a2', copyright: c3 },
                            { value: 'Wie viele waren gestern beim Fussball?', level: 'a2', copyright: c3 },
                            { value: '– Hm; vielleicht zehn oder so.', level: 'a2', copyright: c3 },
                            { value: 'Kommst du mit?', level: 'a2', copyright: c3 },
                            { value: '– Ach nein, ich muss meiner Mutter helfen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Höflichkeit',
                        translate: ['civilité', 'politesse', 'courtoisie'],
                        entries: [
                            { value: 'Kann ich Sie etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Darf ich Sie etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Kann ich dir helfen?', level: 'a2', copyright: c3 },
                            { value: 'Entschuldigung!', level: 'a2', copyright: c3 },
                            { value: 'Darf ich noch ein Stück Torte haben?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Abschwächung',
                        translate: 'modération',
                        entries: [
                            { value: 'Möchtest du noch etwas?', level: 'a1', copyright: c2 },
                            { value: '– Ja, ein bisschen.', level: 'a1', copyright: c2 },
                            { value: 'Eigentlich hast du ja recht.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Verständnissicherung',
                entries: [
                    {
                        groupId: 'Verständnishilfen anbieten',
                        entries: [
                            {
                                groupId: 'einzelne Wörter oder Begriffe umschreiben',
                                translate: 'Begriff: idée, notion, concept, terme',
                                entries: [
                                    { value: 'Apotheke: Da kann man Medikamente kaufen.', level: 'a1', copyright: c2 },
                                    { value: 'Küche: Da kann man das Essen machen.', level: 'a2', copyright: c3 },
                                    { value: 'Gabel und Messer: Das braucht man beim Essen.', level: 'a2', copyright: c3 },
                                    { value: 'Eine Insel ist zum Beispiel Zypern oder Rügen.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Rückfragen zur Verständniskontrolle',
                                translate: 'rückfragen: demander des précisions',
                                entries: [
                                    { value: 'Haben Sie das verstanden?', level: 'a1', copyright: c2 },
                                    { value: 'Ist das klar?', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'schwierige Wörter buchstabieren',
                                entries: [
                                    { value: 'Mein Name ist „Kuntz“, ich buchstabiere: K-U-N-T-Z.', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'um Verständnishilfen bitten',
                        entries: [
                            {
                                groupId: 'signalisieren, dass man etwas nicht verstanden hat',
                                entries: [
                                    { value: 'Entschuldigung, wie bitte?', level: 'a1', copyright: c2 },
                                    { value: 'Langsamer bitte.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du bitte langsamer sprechen, ich habe das nicht verstanden.', level: 'a2', copyright: c3 },
                                    { value: 'Das (Wort) verstehe ich nicht.', level: 'a2', copyright: c3 },
                                    { value: 'Tut mir leid, ich verstehe dich nicht.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'um Wiederholung bitten',
                                entries: [
                                    { value: 'Entschuldigung, noch einmal bitte.', level: 'a1', copyright: c2 },
                                    { value: 'Noch einmal bitte.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du das bitte noch einmal sagen?', level: 'a1', copyright: c2 },
                                    { value: 'Wie bitte?', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du das noch einmal sagen?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'sich bestätigen lassen, ob man richtig gehört bzw. den Kontext richtig verstanden hat',
                                translate: "se faire confirmer, si l'on a bien compris ce que l'on a entendu",
                                entries: [
                                    { value: 'Entschuldigung, habe ich das richtig verstanden?', level: 'a2', copyright: c3 },
                                    { value: 'Hast du „dreizehn“ oder „dreißig“ gesagt?', level: 'a2', copyright: c3 },
                                    { value: 'Wie meinst du das?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'um Erläuterung bitten',
                                translate: 'Erläuterung: explication',
                                entries: [
                                    { value: 'Entschuldigung, was heißt das?', level: 'a1', copyright: c2 },
                                    { value: 'Was bedeutet ... ?', level: 'a1', copyright: c2 },
                                    { value: 'Entschuldigung, wie heißt das?', level: 'a2', copyright: c3 },
                                    { value: 'Ich kenne das Wort nicht.', level: 'a2', copyright: c3 },
                                    { value: 'Kannst du es erklären?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'jemanden bitten, ein Wort zu buchstabieren',
                                entries: [
                                    { value: 'Bitte buchstabieren Sie mir den Namen.', level: 'a1', copyright: c2 },
                                    { value: 'Können Sie das Wort buchstabieren?', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'jemanden bitten, etwas aufzuschreiben',
                                entries: [
                                    { value: 'Wie schreibt man ... ?', level: 'a1', copyright: c2 },
                                    { value: 'Bitte schreiben Sie das auf.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du das bitte schreiben?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'jemanden bitten, langsamer zu sprechen',
                                entries: [
                                    { value: 'Bitte ein bisschen langsamer.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du bitte langsamer sprechen?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Hilfestellung beim Formulieren',
                                translate: 'aide, coup de pouce à la reformulation',
                                entries: [
                                    { value: 'Meinst du vielleicht ...?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Rückfragen zur Verständnissicherung',
                                translate: "demander des précisions pour s'assurer de la compréhension",
                                entries: [
                                    { value: 'ab’ ich richtig verstanden? Wir treffen uns bei Eva.', level: 'a2', copyright: c3 },
                                    { value: 'Tut mir leid, ich kann dich nicht verstehen.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'anzeigen, dass man etwas nicht verstanden hat',
                                entries: [
                                    { value: 'Das habe ich nicht verstanden.', level: 'a1', copyright: c2 },
                                    { value: 'Das (Wort) verstehe ich nicht.', level: 'a1', copyright: c2 },
                                    { value: 'Ich glaube, das habe ich nicht (richtig) verstanden.', level: 'a2', copyright: c3 },
                                    { value: 'Tut mir leid, ich kann dich nicht verstehen.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Wörter und Begriffe umschreiben',
                                translate: 'décrire des mots ou notions',
                                entries: [
                                    { value: 'Ich muss noch die ... ich weiß nicht, wie man das sagt – Übung für die Schule machen. Wie sagt man?', level: 'a2', copyright: c3 },
                                    { value: '– Ja, die Hausaufgaben.', level: 'a2', copyright: c3 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'Kompensation',
                        entries: [
                            {
                                groupId: 'Synonyme oder ähnliche Begriffe verwenden',
                                entries: [
                                    { value: 'Wo ist mein Buch... nicht ein Buch... ein Schreibbuch.', level: 'a1', copyright: c2 },
                                    { value: '– Ah, dein Heft?', level: 'a1', copyright: c2 },
                                    { value: 'Ich habe zwei ... einen Bruder und eine Schwester.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Selbstkorrektur',
                                entries: [
                                    { value: 'Ich möchte sagen... Ich fahre zu Paris... nein, nach Paris.', level: 'a1', copyright: c2 },
                                    { value: 'Ich gehe nach Schule ... nein, in die Schule.', level: 'a2', copyright: c3 },
                                    { value: 'Entschuldigung, ich sage es noch einmal: ...', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'ausdrücken, dass man ein Wort nicht kennt oder es vergessen hat',
                                entries: [
                                    { value: 'Wie sagt man auf Deutsch?', level: 'a1', copyright: c2 },
                                    { value: 'Auf Englisch sagt man ...', level: 'a1', copyright: c2 },
                                    { value: 'Auf ... heißt es /sagt man ...', level: 'a2', copyright: c3 },
                                    { value: 'Jetzt weiß ich das Wort nicht mehr.', level: 'a2', copyright: c3 },
                                    { value: 'Ich habe das Wort vergessen.', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'nachfragen, ob man (trotz fehlerhaftem Deutsch) verstanden wurde',
                                entries: [
                                    { value: 'Ich spreche nicht gut Deutsch. Haben Sie verstanden?', level: 'a1', copyright: c2 },
                                    { value: 'Hast du das verstanden?', level: 'a2', copyright: c3 },
                                    { value: 'Ich spreche nicht gut Deutsch.', level: 'a2', copyright: c3 },
                                    { value: 'Hast du mich verstanden?', level: 'a2', copyright: c3 }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        groupId: 'Sprachhandlungen',
        translate: 'acte de parole',
        entries: [
            {
                groupId: 'Informationsaustausch',
                translate: "échange d'information",
                entries: [
                    {
                        groupId: 'benennen/definieren/identifizieren',
                        translate: ['benennen: qualifier qc.', 'definieren: définir qc.', 'identifizieren: identifier qn./qc.'],
                        entries: [
                            { value: 'Wer ist das?', level: 'a1', copyright: c2 },
                            { value: '– Das ist Wolfgang', level: 'a1', copyright: c2 },
                            { value: '– Das ist Frau Schuster', level: 'a1', copyright: c2 },
                            { value: '– Das ist meine Kollegin.', level: 'a1', copyright: c2 },
                            { value: 'Was ist das?', level: 'a1', copyright: c2 },
                            { value: '– Das ist eine Blume.', level: 'a1', copyright: c2 },
                            { value: 'Ist das eine Orange?', level: 'a1', copyright: c2 },
                            { value: '– Nein, eine Zitrone.', level: 'a1', copyright: c2 },
                            { value: 'Wie heißt das auf Deutsch? Erklären Sie mal.', level: 'a1', copyright: c2 },
                            { value: 'Der Film heißt „Abgeschminkt“.', level: 'a1', copyright: c2 },
                            { value: 'Diese CD gehört mir.', level: 'a1', copyright: c2 },
                            { value: 'Alle Schüler kommen aus Russland.', level: 'a2', copyright: c3 },
                            { value: 'Das ist ein Musikinstrument.', level: 'a2', copyright: c3 },
                            { value: 'Was ist das deutsche Wort für ...', level: 'a2', copyright: c3 },
                            { value: 'Auf Deutsch sagt man „Obst“.', level: 'a2', copyright: c3 },
                            { value: 'Wer kann das Wort erklären?', level: 'a2', copyright: c3 },
                            { value: 'Was braucht man zum Schreiben?', level: 'a2', copyright: c3 },
                            { value: 'Welche Unterrichtsfächer findest du interessant/langweilig?', level: 'a2', copyright: c3 },
                            { value: 'Er ist ein typischer Norweger.', level: 'a2', copyright: c3 },
                            { value: 'Von Beruf ist meine Mutter Ärztin.', level: 'a2', copyright: c3 },
                            { value: 'Der Computer gehört mir.', level: 'a2', copyright: c3 },
                            { value: 'Was für einen Pulli hast du gekauft?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'beschreiben',
                        translate: 'décrire qn./qc.',
                        entries: [
                            { value: 'Wie sieht die Tasche aus?', level: 'a1', copyright: c2 },
                            { value: '– Sie ist braun.', level: 'a1', copyright: c2 },
                            { value: 'Kannst du sie beschreiben?', level: 'a2', copyright: c3 },
                            { value: '– Sie ist blond, nicht sehr groß und hat grüne Augen.', level: 'a2', copyright: c3 },
                            { value: 'Palermo ist eine große Stadt in Süditalien und liegt am Meer.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'erklären',
                        translate: 'expliquer qc.',
                        entries: [
                            { value: 'Wie geht das?', level: 'a1', copyright: c2 },
                            { value: 'Wie macht man das?', level: 'a2', copyright: c3 },
                            { value: '– Du musst zuerst den Computer anmachen und dann siehst du alles.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'berichten',
                        translate: ['communiquer qc.', 'faire un rapport (sur qc.)'],
                        entries: [
                            { value: 'Was ist passiert?', level: 'a1', copyright: c2 },
                            { value: '– Ich hatte einen Unfall.', level: 'a1', copyright: c2 },
                            { value: 'Ich war im Sommer in Berlin.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe in den Ferien einen Deutschkurs gemacht.', level: 'a2', copyright: c3 },
                            { value: 'Was ist passiert?', level: 'a2', copyright: c3 },
                            { value: '– Michael hatte einen Unfall und liegt jetzt im Krankenhaus. Er ist aber nur leicht verletzt.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Mitteilung/Ankündigung',
                        translate: ['Mitteilung: avis, communication, message', 'Ankündigung: annonce'],
                        entries: [
                            { value: 'Was machst du heute Abend?', level: 'a1', copyright: c2 },
                            { value: '– Ich besuche Freunde.', level: 'a1', copyright: c2 },
                            { value: 'Wann fährst du (wieder)?', level: 'a1', copyright: c2 },
                            { value: '– Nächstes Jahr fahren wir nach Griechenland.', level: 'a1', copyright: c2 },
                            { value: 'Die Party ist am Samstag um halb acht.', level: 'a2', copyright: c3 },
                            { value: 'Wir treffen uns am Samstag vor der Schule.', level: 'a2', copyright: c3 },
                            { value: 'In den Ferien fahre ich zu meiner Tante nach Paris.', level: 'a2', copyright: c3 },
                            { value: 'Wann schreiben wir den Englischtest?', level: 'a2', copyright: c3 },
                            { value: '– Am nächsten Donnerstag in der ersten Stunde.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Zweck und Bestimmung angeben',
                        translate: ['Zweck  angeben: citer but', 'Bestimmung angeben: citer détermination'],
                        entries: [
                            { value: 'Was ist das?', level: 'a1', copyright: c2 },
                            { value: 'Das Geschenk ist für Peter.', level: 'a2', copyright: c3 },
                            { value: 'Was ist das?', level: 'a2', copyright: c3 },
                            { value: '– Das brauche ich für meinen Motorroller.', level: 'a2', copyright: c3 },
                            { value: 'Wie geht das?', level: 'a2', copyright: c3 },
                            { value: '– Das geht so: Du musst ...', level: 'a2', copyright: c3 },
                            { value: 'Was kann man mit dem Computer machen?', level: 'a2', copyright: c3 },
                            { value: '– Mit dem Computer kann man alle neuen Spiele machen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Wissen/Unwissen',
                        translate: ['Wissen: savoir, connaissance(s), science', 'Unwissen: ignorance'],
                        entries: [
                            { value: 'Weiß sie das?', level: 'a1', copyright: c2 },
                            { value: '– Ja.', level: 'a1', copyright: c2 },
                            { value: '– Nein.', level: 'a1', copyright: c2 },
                            { value: '– Vielleicht.', level: 'a1', copyright: c2 },
                            { value: 'Bist du sicher? / Weißt du das genau?', level: 'a2', copyright: c3 },
                            { value: '– Ich bin (nicht) sicher.', level: 'a2', copyright: c3 },
                            { value: 'Sie kommt bestimmt/wahrscheinlich.', level: 'a2', copyright: c3 },
                            { value: 'Vielleicht hat sie es vergessen.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Nachfrage',
                translate: 'demande',
                entries: [
                    { value: 'Wir treffen uns am Mittag vor der Schule.', level: 'a2', copyright: c3 },
                    { value: 'Wann genau?', level: 'a2', copyright: c3 },
                    { value: '– Um halb eins.', level: 'a2', copyright: c3 }
                ]
            },
            {
                groupId: 'Meinung/Ansicht',
                translate: ['Meinung: opinion, avis', 'Ansicht: avis, point de vue'],
                entries: [
                    { value: 'Was denkst/meinst du?', level: 'a2', copyright: c3 },
                    { value: '– Ich glaube/denke, ...', level: 'a2', copyright: c3 }
                ]
            },
            {
                groupId: 'Bewertung, Kommentar',
                translate: ['Bewertung: évaluation (de la valeur), estimation (de la valeur), cote', 'Kommentar: commentaire'],
                entries: [
                    {
                        groupId: 'Zufriedenheit/Unzufriedenheit',
                        translate: ['Zufriedenheit: satisfaction, contentement', 'Unzufriedenheit: insatisfaction, mécontentement'],
                        entries: [
                            { value: 'Wie waren eure Ferien?', level: 'a1', copyright: c2 },
                            { value: '– (Sehr) Schön.', level: 'a1', copyright: c2 },
                            { value: '– Prima.', level: 'a1', copyright: c2 },
                            { value: '– (Ganz) Gut.', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Schlecht.', level: 'a1', copyright: c2 },
                            { value: 'Der Film war sehr gut.', level: 'a1', copyright: c2 },
                            { value: 'Wie waren die Ferien?', level: 'a2', copyright: c3 },
                            { value: '– Toll./Nicht (so) gut.', level: 'a2', copyright: c3 },
                            { value: 'Ich freue mich, dass du kommst.', level: 'a2', copyright: c3 },
                            { value: 'Der Film ist sehr gut.', level: 'a2', copyright: c3 },
                            { value: 'Bis du mit dem neuen Lehrer zufrieden?', level: 'a2', copyright: c3 },
                            { value: '– Ja, es geht.', level: 'a2', copyright: c3 },
                            { value: '– Nein, gar nicht.', level: 'a2', copyright: c3 },
                            { value: 'Ich bin sehr zufrieden mit meinem neuen Motorrad.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe keine Lust mehr.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe mich sehr geärgert, weil er mich nicht eingeladen hat.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Gefallen/Missfallen',
                        translate: ['Gefallen: plaisir', 'Missfallen: déplaisir, réprobation'],
                        entries: [
                            { value: 'Was denkst du? Gefällt es dir hier?', level: 'a1', copyright: c2 },
                            { value: '– Ja (sehr).', level: 'a1', copyright: c2 },
                            { value: '– (Es ist) Super!', level: 'a1', copyright: c2 },
                            { value: '– (Es ist) Toll!', level: 'a1', copyright: c2 },
                            { value: '– (Es ist) Klasse!', level: 'a1', copyright: c2 },
                            { value: '– Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: 'Gefällt es Ihnen?', level: 'a1', copyright: c2 },
                            { value: '– Ich finde es toll', level: 'a1', copyright: c2 },
                            { value: '– Ich finde es (sehr) schön', level: 'a1', copyright: c2 },
                            { value: '– Ich finde es gut', level: 'a1', copyright: c2 },
                            { value: '– Ich finde es prima.', level: 'a1', copyright: c2 },
                            { value: '– Ich bin zufrieden.', level: 'a1', copyright: c2 },
                            { value: '– Das finde ich nicht gut', level: 'a1', copyright: c2 },
                            { value: '– Das finde ich hässlich', level: 'a1', copyright: c2 },
                            { value: '– Das finde ich langweilig.', level: 'a1', copyright: c2 },
                            { value: 'Das Hotel gefällt mir nicht.', level: 'a1', copyright: c2 },
                            { value: 'Ich finde es hier langweilig.', level: 'a1', copyright: c2 },
                            { value: 'Das Restaurant sieht gut', level: 'a1', copyright: c2 },
                            { value: 'Das Restaurant sieht nett', level: 'a1', copyright: c2 },
                            { value: 'Das Restaurant sieht schrecklich aus.', level: 'a1', copyright: c2 },
                            { value: 'Ich liebe diese Stadt.', level: 'a1', copyright: c2 },
                            { value: 'Ich mag diese Stadt nicht.', level: 'a1', copyright: c2 },
                            { value: 'Gefällt dir mein Pullover?', level: 'a2', copyright: c3 },
                            { value: '– Ja, der ist toll.', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich finde den Pullover nicht schön.', level: 'a2', copyright: c3 },
                            { value: 'Ich finde den Film langweilig/lustig.', level: 'a2', copyright: c3 },
                            { value: 'Ja, die CD ist toll/fantastisch/wunderbar.', level: 'a2', copyright: c3 },
                            { value: 'Nein, ich finde sie nicht gut.', level: 'a2', copyright: c3 },
                            { value: 'Ich finde den Roman spannend/langweilig.', level: 'a2', copyright: c3 },
                            { value: 'Ich bin zufrieden.', level: 'a2', copyright: c3 },
                            { value: 'Ich finde die Stadt hübsch/hässlich.', level: 'a2', copyright: c3 },
                            { value: 'Ist das nicht toll?', level: 'a2', copyright: c3 },
                            { value: 'Das mag ich sehr gerne/gar nicht.', level: 'a2', copyright: c3 },
                            { value: 'Das ist doch Unsinn.', level: 'a2', copyright: c3 },
                            { value: 'Das kann man doch nicht machen.', level: 'a2', copyright: c3 },
                            { value: 'Physik ist mein Lieblingsfach.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Interesse/Desinteresse',
                        translate: ['Interesse: intérêt', 'Desinteresse: désintérêt'],
                        entries: [
                            { value: 'Gefallen dir die Geschenke?', level: 'a1', copyright: c2 },
                            { value: '– Ja klar.', level: 'a1', copyright: c2 },
                            { value: '– Na ja, es geht.', level: 'a1', copyright: c2 },
                            { value: '– Nicht so.', level: 'a1', copyright: c2 },
                            { value: 'Was sind deine Hobbys?', level: 'a1', copyright: c2 },
                            { value: 'Was sind deine Hobbys?', level: 'a2', copyright: c3 },
                            { value: 'Spielst du gern Fußball?', level: 'a2', copyright: c3 },
                            { value: '– Ja, sehr gern./Nein.', level: 'a2', copyright: c3 },
                            { value: 'Was machst du in deiner Freizeit?', level: 'a2', copyright: c3 },
                            { value: '– Am liebsten treffe ich meine Freunde.', level: 'a2', copyright: c3 },
                            { value: 'Gehst du gern ins Kino?', level: 'a2', copyright: c3 },
                            { value: '– Ja gern.', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich sehe lieber fern.', level: 'a2', copyright: c3 },
                            { value: 'Fußball interessiert mich nicht.', level: 'a2', copyright: c3 },
                            { value: 'Ich finde Tennis interessant.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Billigung/Missbilligung',
                        translate: ['Billigung: approbation, consentement', 'Missbilligung: désapprobation, réprobation, désaveu'],
                        entries: [
                            { value: 'Wie findest du das?', level: 'a1', copyright: c2 },
                            { value: '– Gut.', level: 'a1', copyright: c2 },
                            { value: '– (Un-) Interessant.', level: 'a1', copyright: c2 },
                            { value: '– Es geht.', level: 'a1', copyright: c2 },
                            { value: '– Langweilig.', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Schlecht.', level: 'a1', copyright: c2 },
                            { value: '– Ich finde das (nicht) gut.', level: 'a2', copyright: c3 },
                            { value: 'Wie finden Sie das Lehrbuch?', level: 'a1', copyright: c2 },
                            { value: '– Es ist (sehr) interessant', level: 'a1', copyright: c2 },
                            { value: '– Es ist zu langweilig.', level: 'a1', copyright: c2 },
                            { value: 'So geht das nicht.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zustimmung/Ablehnung',
                        translate: ['Zustimmung: approbation, consentement', 'Ablehnung: refus, rejet, récusation'],
                        entries: [
                            { value: 'Das stimmt (nicht).', level: 'a1', copyright: c2 },
                            { value: 'Das ist richtig.', level: 'a1', copyright: c2 },
                            { value: 'Das ist falsch.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin einverstanden/nicht einverstanden.', level: 'a2', copyright: c3 },
                            { value: 'Das finde ich toll/langweilig.', level: 'a2', copyright: c3 },
                            { value: 'Das ist in Ordnung. Genau.', level: 'a2', copyright: c3 },
                            { value: 'Das ist eine tolle Idee.', level: 'a2', copyright: c3 },
                            { value: 'Stimmt das?', level: 'a2', copyright: c3 },
                            { value: '– Klar./Sicher./Natürlich./Nein, das stimmt so nicht.', level: 'a2', copyright: c3 },
                            { value: 'Ich denke, das ist richtig/falsch.', level: 'a2', copyright: c3 },
                            { value: 'Das finde ich auch/nicht.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Wunsch',
                        translate: ['désir', 'souhait', 'vœu'],
                        entries: [
                            { value: 'Was wollen wir heute Abend machen?', level: 'a1', copyright: c2 },
                            { value: 'Willst du auf das Fest gehen?', level: 'a1', copyright: c2 },
                            { value: 'Möchten Sie noch etwas Milch?', level: 'a1', copyright: c2 },
                            { value: 'Ich möchte einen Kaffee.', level: 'a1', copyright: c2 },
                            { value: 'Peter will ein Eis.', level: 'a1', copyright: c2 },
                            { value: 'Ich möchte den Film sehen.', level: 'a1', copyright: c2 },
                            { value: 'Ich brauche jetzt eine Pause.', level: 'a1', copyright: c2 },
                            { value: 'Willst du in die Disco?', level: 'a2', copyright: c3 },
                            { value: 'Was wünschst du dir zum Geburtstag?', level: 'a2', copyright: c3 },
                            { value: '– Ich wünsche mir/Ich hätte gern ein Handy.', level: 'a2', copyright: c3 },
                            { value: '– Ich möchte ein neues Fahrrad.', level: 'a2', copyright: c3 },
                            { value: 'Ich wünsche dir viel Spaß.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vorlieben',
                        translate: ['goût', 'prédilection', 'préférence'],
                        entries: [
                            { value: 'Tee oder Kaffee?', level: 'a1', copyright: c2 },
                            { value: '– Kaffee, bitte.', level: 'a1', copyright: c2 },
                            { value: 'Magst du Tee oder Kaffee?', level: 'a1', copyright: c2 },
                            { value: '– Ich trinke lieber Tee.', level: 'a1', copyright: c2 },
                            { value: '– Nichts, danke.', level: 'a1', copyright: c2 },
                            { value: 'Hörst du lieber Rap oder Hip Hop?', level: 'a2', copyright: c3 },
                            { value: '– Ich höre lieber Rap.', level: 'a2', copyright: c3 },
                            { value: 'Wohin fährst du am liebsten in den Ferien?', level: 'a2', copyright: c3 },
                            { value: '– Am liebsten fahre ich ans Meer.', level: 'a2', copyright: c3 },
                            { value: 'Welcher Sport gefällt dir am besten?', level: 'a2', copyright: c3 },
                            { value: '– Fußball gefällt mir am besten.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Wichtigkeit',
                        translate: 'importance',
                        entries: [
                            { value: 'Ist das (wirklich) wichtig?', level: 'a1', copyright: c2 },
                            { value: '– Das ist (schon/sehr) wichtig.', level: 'a1', copyright: c2 },
                            { value: '– Nicht so wichtig.', level: 'a1', copyright: c2 },
                            { value: '– Das ist nicht so wichtig.', level: 'a2', copyright: c3 },
                            { value: 'Dieses Wort ist wichtig.', level: 'a2', copyright: c3 },
                            { value: 'Muss das sein?', level: 'a2', copyright: c3 },
                            { value: '– Ja, sofort.', level: 'a2', copyright: c3 },
                            { value: 'Vergiss ja die CD nicht.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'verneinen/Widerspruch',
                        translate: ['verneinen: répondre négativement à qc.', 'Widerspruch: opposition, contradiction'],
                        entries: [
                            { value: 'Nein!', level: 'a1', copyright: c2 },
                            { value: 'Doch!', translate: 'si', level: 'a1', copyright: c2 },
                            { value: 'Das stimmt nicht.', level: 'a1', copyright: c2 },
                            { value: 'Das ist falsch.', level: 'a1', copyright: c2 },
                            { value: 'Unsinn!', level: 'a1', copyright: c2 },
                            { value: 'Das mache ich nie!', level: 'a2', copyright: c3 },
                            { value: 'Die Antwort ist falsch.', level: 'a2', copyright: c3 },
                            { value: 'Ich glaube das nicht.', level: 'a2', copyright: c3 },
                            { value: 'Also, ich weiß nicht.', level: 'a2', copyright: c3 },
                            { value: 'Du hast nicht recht.', level: 'a2', copyright: c3 },
                            { value: 'Auf keinen Fall.', level: 'a2', copyright: c3 }
                       ]
                    },
                    {
                        groupId: 'Beschwerde',
                        translate: ['réclamation', 'plainte', 'doléance'],
                        entries: [
                            { value: 'Es ist zu warm hier!', level: 'a1', copyright: c2 },
                            { value: 'Das ist zu teuer!', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigen Sie, die Heizung funktioniert nicht.', level: 'a1', copyright: c2 },
                            { value: 'Es ist zu kalt.', level: 'a2', copyright: c3 },
                            { value: 'Der Automat geht nicht.', level: 'a2', copyright: c3 },
                            { value: 'Das Moped ist kaputt.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Rechtfertigung/Begründung',
                        translate: ['Rechtfertigung: justification, légimitation', 'Begründung: motivation, justification'],
                        entries: [
                            { value: 'Warum kommst du nicht?', level: 'a1', copyright: c2 },
                            { value: '– Ich habe keine Zeit.', level: 'a1', copyright: c2 },
                            { value: 'Seine Mutter ist krank. Deshalb kommt er heute nicht.', level: 'a1', copyright: c2 },
                            { value: '– Ich habe keine Lust.', level: 'a2', copyright: c3 },
                            { value: 'Sie ist krank. Deshalb bleibt sie zu Hause.', level: 'a2', copyright: c3 },
                            { value: 'Warum ...?', level: 'a2', copyright: c3 },
                            { value: 'Weil ich noch Hausaufgaben machen muss.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Gefühlsausdruck',
                translate: 'expression émotionnelle',
                entries: [
                    {
                        groupId: 'Freude/Bedauern',
                        translate: ['Freude: joie, plaisir, allégresse', 'Bedauern: regret'],
                        entries: [
                            { value: 'Ist das nicht toll!', level: 'a1', copyright: c2 },
                            { value: '– Ja, super!', level: 'a1', copyright: c2 },
                            { value: '– Finde ich auch.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin glücklich. Und du?', level: 'a1', copyright: c2 },
                            { value: '– Sehr.', level: 'a1', copyright: c2 },
                            { value: 'Glückwunsch!', level: 'a1', copyright: c2 },
                            { value: '– Danke!', level: 'a1', copyright: c2 },
                            { value: 'Leider.', level: 'a1', copyright: c2 },
                            { value: 'Das ist schade!', level: 'a1', copyright: c2 },
                            { value: 'Das tut mir leid.', level: 'a1', copyright: c2 },
                            { value: 'Das ist toll!', level: 'a2', copyright: c3 },
                            { value: '– Ja, das finde ich auch.', level: 'a2', copyright: c3 },
                            { value: 'Ich bin froh.', level: 'a2', copyright: c3 },
                            { value: 'Leider kann ich nicht kommen.', level: 'a2', copyright: c3 },
                            { value: 'Der Sprachkurs macht mir viel Spaß.', level: 'a2', copyright: c3 },
                            { value: 'Ich freue mich, dass du kommst.', level: 'a2', copyright: c3 },
                            { value: 'Schön, dass du mitkommst.', level: 'a2', copyright: c3 },
                            { value: 'Schade, dass es morgen nicht klappt.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Neigung/Abneigung',
                        translate: ['Neigung: attirance, inclinaison, penchant', 'Abneigung: aversion, répulsion'],
                        entries: [
                            { value: 'Schmeckt‘s dir nicht?', level: 'a1', copyright: c2 },
                            { value: '– Doch, sehr gut.', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich mag eigentlich keinen Fisch.', level: 'a1', copyright: c2 },
                            { value: 'Isst du gern Chinesisch?', level: 'a1', copyright: c2 },
                            { value: '– Ja, gern(e).', level: 'a1', copyright: c2 },
                            { value: '– Nein, nie.', level: 'a1', copyright: c2 },
                            { value: 'Magst du Pizza?', level: 'a2', copyright: c3 },
                            { value: '– Ja, gern./Nein, das schmeckt mir nicht.', level: 'a2', copyright: c3 },
                            { value: 'Isst du gern Fisch?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Gelassenheit/Gleichgültigkeit',
                        translate: ['Gelassenheit: impassibilité, sang-froid (maîtrise de soi), contenance, calme, flegme', 'Gleichgültigkeit: indifférence, détachement'],
                        entries: [
                            { value: 'Ich kann leider nicht kommen.', level: 'a1', copyright: c2 },
                            { value: '– Egal.', level: 'a1', copyright: c2 },
                            { value: '– Na und?', level: 'a1', copyright: c2 },
                            { value: '– Das ist mir egal', level: 'a1', copyright: c2 },
                            { value: 'Ärgerst du dich über das Zeugnis?', level: 'a2', copyright: c3 },
                            { value: '– Das ist mir ganz egal.', level: 'a2', copyright: c3 },
                            { value: '– Das interessiert mich nicht.', level: 'a2', copyright: c3 },
                            { value: '– Das ist mir doch gleich.', level: 'a2', copyright: c3 },
                            { value: 'Stört dich das nicht?', level: 'a2', copyright: c3 },
                            { value: 'Da kann man nichts machen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Mitleid',
                        translate: ['compassion', 'pitié', 'apitoiement'],
                        entries: [
                            { value: '(Es) Tut mir (wirklich) (sehr) leid.', level: 'a1', copyright: c2 },
                            { value: 'Das finde ich aber traurig.', level: 'a1', copyright: c2 },
                            { value: 'Das tut mir leid.', level: 'a2', copyright: c3 },
                            { value: 'Das finde ich traurig.', level: 'a2', copyright: c3 },
                            { value: 'Es tut mir so leid, dass du Zahnschmerzen hast.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Schmerz',
                        translate: ['souffrance', 'douleur', 'mal'],
                        entries: [
                            { value: 'Mein Kopf tut so weh.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe Halsschmerzen.', level: 'a2', copyright: c3 },
                            { value: 'Ich habe starke Schmerzen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Erstaunen/Überraschung',
                        translate: ['Erstaunen: étonnement', 'Überraschung: surprise, mauvaise surprise'],
                        entries: [
                            { value: 'Komisch!', level: 'a1', copyright: c2 },
                            { value: 'Das ist ja komisch!', level: 'a1', copyright: c2 },
                            { value: 'Wie komisch!', level: 'a1', copyright: c2 },
                            { value: '– Ja, sehr komisch.', level: 'a1', copyright: c2 },
                            { value: 'Willst du das wirklich machen?', level: 'a2', copyright: c3 },
                            { value: 'Das ist ja toll!', level: 'a2', copyright: c3 },
                            { value: 'Das ist doch verrückt.', level: 'a2', copyright: c3 },
                            { value: 'Das ist aber komisch.', level: 'a2', copyright: c3 },
                            { value: '– Ja, wirklich komisch.', level: 'a2', copyright: c3 },
                            { value: 'Das kann ich nicht glauben.', level: 'a2', copyright: c3 },
                            { value: 'Das ist doch nicht möglich.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Hoffnung',
                        translate: ['espoir', 'espérance'],
                        entries: [
                            { value: 'Hoffentlich regnet es nicht.', level: 'a1', copyright: c2 },
                            { value: 'Hoffentlich kommt bald der Bus.', level: 'a1', copyright: c2 },
                            { value: 'Ich hoffe, du kommst heute.', level: 'a2', copyright: c3 },
                            { value: 'Hoffentlich finde ich das Heft.', level: 'a2', copyright: c3 },
                            { value: 'Ich hoffe, dass er heute pünktlich ist ...', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                      groupId: 'Sorge/Befürchtung',
                        translate: ['Sorge: souci, préocupation, inquiétude', 'Befürchtung: appréhension (de qc.)'],
                        entries: [
                            { value: 'Ich habe Angst.', level: 'a1', copyright: c2 },
                            { value: 'Schon 10 Uhr, und er ist immer noch nicht da.', level: 'a1', copyright: c2 },
                            { value: 'Hast du Angst?', level: 'a2', copyright: c3 },
                            { value: 'Ich kann die Hausaufgaben nicht machen.', level: 'a2', copyright: c3 },
                            { value: 'Mach schnell. Es ist schon sehr spät.', level: 'a2', copyright: c3 },
                            { value: 'Was ist los?', level: 'a2', copyright: c3 },
                            { value: 'Wann antwortet er denn endlich?', level: 'a2', copyright: c3 },
                            { value: 'Warum ruft sie nicht an?', level: 'a2', copyright: c3 },
                            { value: 'Hoffentlich ist nichts passiert.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Enttäuschung',
                        translate: ['désenchantement', 'déception', 'désillusion'],
                        entries: [
                            { value: 'Was? Du bleibst zu Hause? Schade!', level: 'a1', copyright: c2 },
                            { value: 'Warum kommst du nicht mit?', level: 'a2', copyright: c3 },
                            { value: 'Das ist aber schade!', level: 'a2', copyright: c3 },
                            { value: 'Schade, dass es nicht klappt.', level: 'a2', copyright: c3 },
                            { value: 'Da kann man (leider) nichts machen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Sympathie/Antipathie',
                        entries: [
                            { value: 'Ich mag Sabine (sehr) gern.', level: 'a2', copyright: c3 },
                            { value: 'Ich finde Frau Berger nicht sympathisch.', level: 'a2', copyright: c3 },
                            { value: 'Ich bin total in sie/ihn verliebt.', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Handlungsregulierung',
                translate: "régulation de l'action",
                entries: [
                    {
                        groupId: 'Bitte/Aufforderung',
                        translate: 'Bitte: demande, sollication, prière',
                        entries: [
                            { value: 'Kaufst du bitte Brot?', level: 'a1', copyright: c2 },
                            { value: 'Kannst du Milch kaufen?', level: 'a1', copyright: c2 },
                            { value: 'Haben Sie eine Briefmarke?', level: 'a1', copyright: c2 },
                            { value: '– Na klar.', level: 'a1', copyright: c2 },
                            { value: '– Aber natürlich.', level: 'a1', copyright: c2 },
                            { value: '– Ja, natürlich.', level: 'a1', copyright: c2 },
                            { value: 'Gehen wir zusammen essen?', level: 'a1', copyright: c2 },
                            { value: '– Gerne.', level: 'a1', copyright: c2 },
                            { value: 'Eine Frage bitte: Wie spät ist es?', level: 'a1', copyright: c2 },
                            { value: '– Es ist halb acht (Uhr).', level: 'a1', copyright: c2 },
                            { value: 'Zeigst du mir deinen Computer?', level: 'a2', copyright: c3 },
                            { value: '– Ja gern./Nein.', level: 'a2', copyright: c3 },
                            { value: 'Kann ich das Buch haben?', level: 'a2', copyright: c3 },
                            { value: '– Ja.', level: 'a2', copyright: c3 },
                            { value: '– Nein, das ist nicht mein Buch.', level: 'a2', copyright: c3 },
                            { value: 'Wie spät ist es?', level: 'a2', copyright: c3 },
                            { value: '– Es ist halb acht.', level: 'a2', copyright: c3 },
                            { value: 'Mach bitte die Tür auf!', level: 'a2', copyright: c3 },
                            { value: '– Ja, sofort.', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich kann nicht.', level: 'a2', copyright: c3 },
                            { value: 'Gib mir bitte das Heft!', level: 'a2', copyright: c3 },
                            { value: '– Ja, gleich.', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich finde das Heft nicht.', level: 'a2', copyright: c3 },
                            { value: 'Könntest du mir helfen?', level: 'a2', copyright: c3 },
                            { value: '– Ja./ Sofort./Vielleicht./ Jetzt nicht./ Nein, tut mir leid.', level: 'a2', copyright: c3 },
                            { value: 'Ich hätte gern eine CD von ...', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Bestätigung',
                        translate: ['validation', 'confirmation'],
                        entries: [
                            { value: 'Stimmt das?', level: 'a1', copyright: c2 },
                            { value: 'Richtig?', level: 'a1', copyright: c2 },
                            { value: 'Ja.', level: 'a1', copyright: c2 },
                            { value: 'Doch.', translate: 'si', level: 'a1', copyright: c2 },
                            { value: 'Das ist richtig.', level: 'a1', copyright: c2 },
                            { value: 'Stimmt.', translate: 'tout à fait!', level: 'a1', copyright: c2 },
                            { value: 'Genau (so).', translate: ['Absolument !', 'parfaitement !', 'tout à fait !'], level: 'a1', copyright: c2 },
                            { value: 'Die Antwort ist richtig.', level: 'a2', copyright: c3 },
                            { value: 'Richtig? Ja!/Nein!/Doch!', level: 'a2', copyright: c3 },
                            { value: 'Ist das so richtig?', level: 'a2', copyright: c3 },
                            { value: '– Aber natürlich./Klar./Sicher.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Hilfe anbieten/annehmen und ablehnen',
                        translate: ["Hilfe anbieten: proposer de l'aide", "Hilfe annehmen: accepter de l'aide", "Hilfe ablehnen: refuser de l'aide"],
                        entries: [
                            { value: 'Kann ich Ihnen helfen?', level: 'a1', copyright: c2 },
                            { value: '– Ja, danke.', level: 'a1', copyright: c2 },
                            { value: '– Gerne.', level: 'a1', copyright: c2 },
                            { value: '– Sehr nett, danke.', level: 'a1', copyright: c2 },
                            { value: '– Nein, danke.', level: 'a1', copyright: c2 },
                            { value: 'Kann ich helfen?', level: 'a2', copyright: c3 },
                            { value: '– Ja, gern.', level: 'a2', copyright: c3 },
                            { value: '– Klar.', level: 'a2', copyright: c3 },
                            { value: '– Sicher.', level: 'a2', copyright: c3 },
                            { value: '– Danke.', level: 'a2', copyright: c3 },
                            { value: 'Wollen wir das zusammen machen?', level: 'a2', copyright: c3 },
                            { value: '– Ja, du kannst mir helfen.', level: 'a2', copyright: c3 },
                            { value: '– Das ist lieb/nett.', level: 'a2', copyright: c3 },
                            { value: '– Nein danke, ich kann es alleine.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Bestellung/Wunsch',
                        translate: 'Bestellung: commande',
                        entries: [
                            { value: 'Ich möchte ein Zimmer reservieren.', level: 'a1', copyright: c2 },
                            { value: 'Ich nehme die Tomatensuppe und den Salat.', level: 'a1', copyright: c2 },
                            { value: 'Einen Moment.', level: 'a1', copyright: c2 },
                            { value: 'Sofort.', level: 'a1', copyright: c2 },
                            { value: 'Gleich.', translate: 'tout de suite', level: 'a1', copyright: c2 },
                            { value: 'Ich möchte nach Deutschland fliegen.', level: 'a2', copyright: c3 },
                            { value: 'Ich will morgen ins Schwimmbad.', level: 'a2', copyright: c3 },
                            { value: 'Ich hätte gern eine Fahrkarte.', level: 'a2', copyright: c3 },
                            { value: 'Kannst du mir bitte den Bleistift geben?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Rat/Empfehlung/Warnung',
                        translate: ['Rat: conseil', 'Empfehlung: suggestion, recommandation', 'Warnung: avertissement, mise en garde, semonce'],
                        entries: [
                            { value: 'Das ist zu gefährlich/heiß/kalt/...', level: 'a1', copyright: c2 },
                            { value: 'Vorsicht!', translate: ['Attention !', 'Gare !'], level: 'a1', copyright: c2 },
                            { value: 'Achtung!', translate: ['Attention !', 'Gare !', 'garde à vous!'], level: 'a1', copyright: c2 },
                            { value: 'Halt!', translate: 'halte !', level: 'a1', copyright: c2 },
                            { value: 'Hilfe!', level: 'a1', copyright: c2 },
                            { value: 'Stopp!', level: 'a1', copyright: c2 },
                            { value: 'Der Film ist wunderbar.', level: 'a2', copyright: c3 },
                            { value: 'Das Wasser ist zu kalt.', level: 'a2', copyright: c3 },
                            { value: 'Du musst gut aufpassen.', level: 'a2', copyright: c3 },
                            { value: 'Was soll ich machen?', level: 'a2', copyright: c3 },
                            { value: 'Schreib es auf!', level: 'a2', copyright: c3 },
                            { value: 'Mach es gleich!', level: 'a2', copyright: c3 },
                            { value: 'Pass auf!', level: 'a2', copyright: c3 },
                            { value: 'Das ist zu gefährlich.', level: 'a2', copyright: c3 },
                            { value: 'Sei vorsichtig!', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Erlaubnis/Genehmigung',
                        translate: ['Erlaubnis: permission, autorisation, permis', 'Genehmigung: consontement, autorisation, octroi'],
                        entries: [
                            { value: 'Kann man hier rauchen?', level: 'a1', copyright: c2 },
                            { value: '– Gerne.', level: 'a1', copyright: c2 },
                            { value: '– Natürlich.', level: 'a1', copyright: c2 },
                            { value: '– Ja natürlich.', level: 'a1', copyright: c2 },
                            { value: '– Bitte nicht.', level: 'a1', copyright: c2 },
                            { value: '– Nein, tut mir leid.', level: 'a1', copyright: c2 },
                            { value: '– Das ist hier verboten.', level: 'a1', copyright: c2 },
                            { value: 'Kann ich mal telefonieren?', level: 'a1', copyright: c2 },
                            { value: 'Kann man hier parken?', level: 'a1', copyright: c2 },
                            { value: '– Nein, hier ist Parken verboten.', level: 'a1', copyright: c2 },
                            { value: 'Kann ich zu dir kommen?', level: 'a2', copyright: c3 },
                            { value: '– Ja./Nein, heute nicht.', level: 'a2', copyright: c3 },
                            { value: 'Kann ich die CD haben?', level: 'a2', copyright: c3 },
                            { value: '– Ja./Nein.', level: 'a2', copyright: c3 },
                            { value: 'Darf man hier fahren?', level: 'a2', copyright: c3 },
                            { value: '– Ja, klar./Nein, das ist verboten.', level: 'a2', copyright: c3 },
                            { value: 'Darfst du heute Abend weggehen?', level: 'a2', copyright: c3 },
                            { value: '– Ja, meine Eltern erlauben das.', level: 'a2', copyright: c3 },
                            { value: '– Nein, meine Mutter hat es verboten.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Vorschlag',
                        translate: ['suggestion', 'proposition'],
                        entries: [
                            { value: 'Gehen wir heute ins Kino?', level: 'a1', copyright: c2 },
                            { value: '– Ja, gerne.', level: 'a1', copyright: c2 },
                            { value: 'Kommst du mit zu Claudia?', level: 'a1', copyright: c2 },
                            { value: '– Gute Idee.', level: 'a1', copyright: c2 },
                            { value: '– Ja, warum nicht.', level: 'a1', copyright: c2 },
                            { value: '– Gut.', level: 'a1', copyright: c2 },
                            { value: '– Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: '– Keine Zeit.', level: 'a1', copyright: c2 },
                            { value: '– Keine Lust', level: 'a1', copyright: c2 },
                            { value: 'Kommst du mit ins Schwimmbad?', level: 'a2', copyright: c3 },
                            { value: '– Das ist eine tolle Idee.', level: 'a2', copyright: c3 },
                            { value: 'Darf ich etwas vorschlagen?', level: 'a2', copyright: c3 },
                            { value: 'Wollen wir die Hausaufgaben zusammen machen?', level: 'a2', copyright: c3 },
                            { value: '– Einverstanden.', level: 'a2', copyright: c3 },
                            { value: '– Ich bin dafür.', level: 'a2', copyright: c3 },
                            { value: '– Ich bin dagegen.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Versprechung',
                        translate: 'promesse',
                        entries: [
                            { value: 'Morgen bekommst du das Geld.', level: 'a1', copyright: c2 },
                            { value: '– Gut.', level: 'a1', copyright: c2 },
                            { value: '– Danke.', level: 'a1', copyright: c2 },
                            { value: '– Hoffentlich!', level: 'a1', copyright: c2 },
                            { value: '– Versprochen?', level: 'a1', copyright: c2 },
                            { value: '– Wirklich?', level: 'a1', copyright: c2 },
                            { value: '– Ganz sicher.', level: 'a2', copyright: c3 },
                            { value: '– Bestimmt.', level: 'a2', copyright: c3 },
                            { value: '– Ich mache es morgen.', level: 'a1', copyright: c2 },
                            { value: '– Das mache ich!', level: 'a1', copyright: c2 },
                            { value: 'Ich komme nach der Schule.', level: 'a2', copyright: c3 },
                            { value: 'Morgen gehen wir zusammen zu Bodo.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Verabredung',
                        translate: 'rendez-vous',
                        entries: [
                            { value: 'Kannst du morgen Abend?', level: 'a1', copyright: c2 },
                            { value: 'Hast du am Mittwoch Zeit?', level: 'a1', copyright: c2 },
                            { value: '– Ja, wann?', level: 'a1', copyright: c2 },
                            { value: '– Ja, das ist gut.', level: 'a1', copyright: c2 },
                            { value: '– Vielleicht.', level: 'a1', copyright: c2 },
                            { value: '– Nein, (morgen kann ich/geht es) leider nicht.', level: 'a1', copyright: c2 },
                            { value: '– Ich weiß es nicht.', level: 'a2', copyright: c3 },
                            { value: 'Wann hast du (mal/denn) Zeit?', level: 'a1', copyright: c2 },
                            { value: 'Treffen wir uns um acht vor dem Kino?', level: 'a2', copyright: c3 },
                            { value: '– Ja, das passt mir.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Einladung',
                        translate: ['invitation', 'convocation'],
                        entries: [
                            { value: 'Möchten Sie (noch) etwas trinken?', level: 'a1', copyright: c2 },
                            { value: 'Orangensaft?', level: 'a1', copyright: c2 },
                            { value: '– Nein, danke.', level: 'a1', copyright: c2 },
                            { value: 'Was möchten Sie bitte?', level: 'a1', copyright: c2 },
                            { value: '– Nichts, danke.', level: 'a1', copyright: c2 },
                            { value: 'Setz dich!', level: 'a1', copyright: c2 },
                            { value: 'Setzen Sie sich doch!', level: 'a1', copyright: c2 },
                            { value: 'Kommst du heute zu mir?', level: 'a2', copyright: c3 },
                            { value: '– Ja, toll.', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich kann nicht.', level: 'a2', copyright: c3 },
                            { value: '– Es tut mir leid, aber ich habe keine Zeit.', level: 'a2', copyright: c3 },
                            { value: 'Komm doch heute Nachmittag zu mir.', level: 'a2', copyright: c3 },
                            { value: 'Bleib doch noch ein bisschen.', level: 'a2', copyright: c3 },
                            { value: 'Komm rein.', level: 'a2', copyright: c3 },
                            { value: 'Ich lade dich zu meinem Geburtstag ein.', level: 'a2', copyright: c3 },
                            { value: 'Willst du mit mir essen?', level: 'a2', copyright: c3 }
                        ]
                    }
                ]
            },
            {
                groupId: 'Soziale Konventionen',
                translate: 'conventions sociales',
                entries: [
                    {
                        groupId: 'Kontaktaufnahme: jemanden ansprechen',
                        translate: ['Kontaktaufnahme: prise de contact', 'jemanden ansprechen: plaire à qn.'],
                        entries: [
                            { value: 'Hallo!', level: 'a1', copyright: c2 },
                            { value: 'Roman Jaremkow.', level: 'a1', copyright: c2 },
                            { value: 'Marija Kosik.', level: 'a1', copyright: c2 },
                            { value: 'Helmut!', level: 'a1', copyright: c2 },
                            { value: 'Frau Klein!', level: 'a1', copyright: c2 },
                            { value: 'Ja, bitte?', level: 'a1', copyright: c2 },
                            { value: 'Wie bitte?', level: 'a1', copyright: c2 },
                            { value: 'Sind Sie nicht Frau Yilmaz?', level: 'a1', copyright: c2 },
                            { value: '– Ja (das stimmt).', level: 'a1', copyright: c2 },
                            { value: '– Ja, warum?', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich bin ...', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich heiße ...', level: 'a1', copyright: c2 },
                            { value: '– Nein, mein Name ist ...', level: 'a1', copyright: c2 },
                            { value: 'Heißt du Miriam?', level: 'a2', copyright: c3 },
                            { value: '– Nein, ich bin Michaela.', level: 'a2', copyright: c3 },
                            {
                                groupId: 'Telefon',
                                entries: [
                                    { value: '(Hier) Heine.', level: 'a1', copyright: c2 },
                                    { value: 'Guten Tag, Frau Heine.', level: 'a1', copyright: c2 },
                                    { value: 'Hier ist Josefa Karosz.', level: 'a1', copyright: c2 },
                                    { value: 'Hallo, ist Julia da?', level: 'a1', copyright: c2 },
                                    { value: 'Guten Tag. Frau Heuer bitte!', level: 'a1', copyright: c2 },
                                    { value: '– Ja, Moment bitte.', level: 'a1', copyright: c2 },
                                    { value: '– Tut mir leid, sie ist nicht da.', level: 'a1', copyright: c2 },
                                    { value: '– Nein, hier ist ...', level: 'a1', copyright: c2 },
                                    { value: 'Guten Tag, kann ich mit Britta sprechen?', level: 'a2', copyright: c3 }
                                ]
                            },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: 'Liebe Renate/Frau Haushofer,', level: 'a1', copyright: c2 },
                                    { value: 'Sehr geehrter Herr Liebermann,', level: 'a1', copyright: c2 },
                                    { value: 'Sehr geehrte Damen und Herren,', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'grüßen',
                        translate: ['saluer qn.', 'dire bonjour à qn.'],
                        entries: [
                            { value: '(Guten) Tag/Hallo, Ulrike!', level: 'a1', copyright: c2 },
                            { value: '– (Guten) Tag/Hallo, Karina.', level: 'a1', copyright: c2 },
                            { value: 'Guten Morgen, Frau Schneider.', level: 'a1', copyright: c2 },
                            { value: '– Guten Morgen, Frau Kowalski.', level: 'a1', copyright: c2 },
                            { value: 'Guten Tag, Frau Schneider.', level: 'a1', copyright: c2 },
                            { value: '– Guten Tag, Frau Kowalski.', level: 'a1', copyright: c2 },
                            { value: 'Guten Abend, Frau Schneider.', level: 'a1', copyright: c2 },
                            { value: '– Guten Abend, Frau Kowalski.', level: 'a1', copyright: c2 },
                            { value: 'Gute Nacht, Christian.', level: 'a1', copyright: c2 },
                            { value: '– Gute Nacht, Bea.', level: 'a1', copyright: c2 },
                            { value: 'Hallo, wie geht’s?/wie geht es dir?', level: 'a1', copyright: c2 },
                            { value: '– Danke, gut.', level: 'a1', copyright: c2 },
                            { value: 'Grüß Gott! (süddeutsch)', level: 'a1', copyright: c2 },
                            { value: '– Grüß Gott!', level: 'a1', copyright: c2 },
                            { value: 'Hi, Marika.', level: 'a2', copyright: c3 },
                            { value: 'Hallo, wie geht es dir?', level: 'a2', copyright: c3 },
                            { value: '– Danke, (sehr) gut/ es geht. Und dir?', level: 'a2', copyright: c3 },
                            { value: 'Herzlich willkommen!', level: 'a2', copyright: c3 },
                            { value: 'Viele Grüße von Angelika.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'sich/jemanden vorstellen',
                        translate: ['se présenter', 'présenter qn. à qn.'],
                        entries: [
                            { value: '(Hallo) Mein Name ist/Ich heiße Vera.', level: 'a1', copyright: c2 },
                            { value: '– Hallo, Vera. Ich heiße Mario.', level: 'a1', copyright: c2 },
                            { value: '(Guten Tag) Ich bin Petra Holl.', level: 'a1', copyright: c2 },
                            { value: '– Guten Tag. Ich bin Ulrike Meyer.', level: 'a1', copyright: c2 },
                            { value: 'Das ist Ulrich Pfeiffer.', level: 'a1', copyright: c2 },
                            { value: '– Ah ja. Ich heiße Johanna Hauser.', level: 'a1', copyright: c2 },
                            { value: '– Ah ja. Ich bin Johanna Hauser.', level: 'a1', copyright: c2 },
                            { value: 'Kennst du Micha?', level: 'a2', copyright: c3 },
                            { value: '– Ja klar/natürlich./Nein, noch nicht.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'über das Befinden sprechen',
                        translate: "discuter sur l'état de santé",
                        entries: [
                            { value: "Wie geht’s/geht es dir (heute)?", level: 'a1', copyright: c2 },
                            { value: '– Danke, gut. Und dir?', level: 'a1', copyright: c2 },
                            { value: '– Danke, es geht gut. Und dir?', level: 'a1', copyright: c2 },
                            { value: '– Danke, es geht nicht gut. Und dir?', level: 'a1', copyright: c2 },
                            { value: '– Gut./Nicht so gut./Schlecht.', level: 'a2', copyright: c3 },
                            { value: 'Geht es Ihnen gut?', level: 'a1', copyright: c2 },
                            { value: '– Ja, super.', level: 'a1', copyright: c2 },
                            { value: '– Na ja, es geht!', level: 'a1', copyright: c2 },
                            { value: '– Ach, nicht so gut.', level: 'a1', copyright: c2 },
                            { value: 'Geht es dir gut?', level: 'a2', copyright: c3 },
                            { value: '– Ja, super.', level: 'a2', copyright: c3 },
                            { value: '– Nein, nicht so gut.', level: 'a2', copyright: c3 },
                            { value: '– Ich bin heute (nicht) fit.', level: 'a2', copyright: c3 },
                            { value: '– Prima!', level: 'a2', copyright: c3 },
                            { value: 'Was ist los?', level: 'a2', copyright: c3 },
                            { value: 'Was ist passiert?', level: 'a2', copyright: c3 },
                            { value: 'Was hast du?', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'gute Wünsche',
                        translate: 'bons voeux',
                        entries: [
                            { value: 'Alles Gute.', translate: ['Mes meilleurs vœux !', 'toutes sortes de bonnes choses'], level: 'a1', copyright: c2 },
                            { value: 'Schöne Ferien!', level: 'a1', copyright: c2 },
                            { value: '(Ich wünsche dir) schöne Ferien!', level: 'a2', copyright: c3 },
                            { value: 'Gut gemacht!', level: 'a1', copyright: c2 },
                            { value: 'Prost!', level: 'a1', copyright: c2 },
                            { value: 'Frohe Weihnachten!', level: 'a2', copyright: c3 },
                            { value: 'Gute Reise!', level: 'a2', copyright: c3 },
                            { value: 'Guten Appetit!', level: 'a2', copyright: c3 },
                            { value: 'Viel Glück!', level: 'a2', copyright: c3 },
                            { value: 'Viel Spaß!', level: 'a2', copyright: c3 },
                            { value: '(Herzlichen) Glückwunsch!', level: 'a2', copyright: c3 },
                            { value: 'Ich gratuliere dir zum Geburtstag!', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Gratulation',
                        translate: 'félicitation',
                        entries: [
                            { value: 'Herzlichen Glückwunsch', level: 'a1', copyright: c2 },
                            { value: '– Danke (schön)!', level: 'a1', copyright: c2 },
                            { value: '– Herzlichen', level: 'a1', copyright: c2 },
                            { value: '– Vielen Dank.', level: 'a1', copyright: c2 },
                            { value: '– Ihnen auch.', level: 'a1', copyright: c2 },
                            { value: '– Danke, ebenfalls.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'eine Anerkennung aussprechen/ein Kompliment machen',
                        translate: ['eine Anerkennung aussprechen: féliciter qn.', 'ein Kompliment machen: complimenter qn.'],
                        entries: [
                            { value: 'Sie sprechen (sehr) gut Deutsch.', level: 'a1', copyright: c2 },
                            { value: 'Das ist toll/(sehr) schön/gut.', level: 'a1', copyright: c2 },
                            { value: 'Das schmeckt gut.', translate: ["c'est bon", "celà a un bon goût"], level: 'a1', copyright: c2 },
                            { value: 'Du bist toll.', level: 'a2', copyright: c3 },
                            { value: 'Tolle Frisur', level: 'a2', copyright: c3 },
                            { value: 'Fantastisches Kleid!', level: 'a2', copyright: c3 },
                            { value: 'Du siehst gut/wunderbar aus.', level: 'a2', copyright: c3 },
                            { value: 'Das ist sehr nett/lieb/freundlich.', level: 'a2', copyright: c3 },
                            { value: 'Das ist wunderbar.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Dank',
                        translate: ['merci', 'remerciement'],
                        entries: [
                            { value: 'Danke', level: 'a2', copyright: c3 },
                            { value: 'Danke (schön)!', level: 'a1', copyright: c2 },
                            { value: 'Herzlichen', level: 'a1', copyright: c2 },
                            { value: 'Herzlichen Dank.', level: 'a2', copyright: c3 },
                            { value: 'Vielen Dank.', level: 'a1', copyright: c2 },
                            { value: '– Ihnen auch.', level: 'a1', copyright: c2 },
                            { value: '– Danke, ebenfalls.', level: 'a1', copyright: c2 },
                            { value: '– (Aber) Bitte.', level: 'a1', copyright: c2 },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: 'Vielen Dank.', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'Entschuldigung',
                        translate: 'excuse',
                        entries: [
                            { value: 'Entschuldigung', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigen Sie bitte!', level: 'a1', copyright: c2 },
                            { value: '– Bitte!', level: 'a1', copyright: c2 },
                            { value: '– Schon gut.', level: 'a1', copyright: c2 },
                            { value: '– Kein Problem.', level: 'a1', copyright: c2 },
                            { value: 'Das tut mir sehr/schrecklich/furchtbar leid', level: 'a2', copyright: c3 },
                            { value: 'Das macht nichts.', level: 'a2', copyright: c3 }
                        ]
                    },
                    {
                        groupId: 'Verabschiedung',
                        translate: 'formule de politesse en fin de lettre, email',
                        entries: [
                            { value: '(Auf) Wiedersehen!', level: 'a1', copyright: c2 },
                            { value: 'Tschüss!', level: 'a1', copyright: c2 },
                            { value: 'Bis bald.', level: 'a1', copyright: c2 },
                            { value: 'Bis später.', level: 'a1', copyright: c2 },
                            { value: 'Gute Nacht!', level: 'a1', copyright: c2 },
                            {
                                groupId: 'Telefon',
                                entries: [
                                    { value: '(Auf) Wiederhören!', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: 'Liebe Grüße', level: 'a1', copyright: c2 },
                                    { value: 'Herzliche Grüße', level: 'a1', copyright: c2 },
                                    { value: 'Mit freundlichen Grüßen', level: 'a1', copyright: c2 },
                                    { value: 'Viele Grüße', level: 'a2', copyright: c3 }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


export {data as default};
