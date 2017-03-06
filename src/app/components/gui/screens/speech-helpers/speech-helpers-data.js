let c1 = ['Hueber, Fit fürs Goethe-Zertifikat A2', 'Cornelsen, Prüfungstraining DaF: A1, A2'];
let c2 = 'Goethe Institut, GOETHE-ZERTIFIKAT A1 START DEUTSCH 1, PRÜFUNGSZIELE TESTBESCHREIBUNG';

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
                            { value: 'Hier gibt es aber viele Kinos.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'anwesend/abwesend sein',
                        translate: 'être présent/absent',
                        entries: [
                            { value: 'Ist Elke da?', level: 'a1', copyright: c2 },
                            { value: '– Ja./Nein, leider nicht.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '(nicht) verfügbar sein',
                        translate: '(ne pas) être disponible',
                        entries: [
                            { value: 'Hast du ein Auto?', level: 'a1', copyright: c2 },
                            { value: '– Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich habe kein Auto.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '(nicht) vorkommen',
                        translate: '(ne pas) se passer',
                        entries: [
                            { value: 'Was ist passiert?', level: 'a1', copyright: c2 },
                            { value: 'Wann ist das passiert?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Inklusion/Exklusion',
                        entries: [
                            { value: 'Ich komme mit meiner Freundin.', level: 'a1', copyright: c2 },
                            { value: 'Er kommt ohne Auto.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Besitz/Zugehörigkeit',
                        translate: ['Besitz: possession', 'Zugehörigkeit: appartenance'],
                        entries: [
                            { value: 'Wem gehört der Mercedes?', level: 'a1', copyright: c2 },
                            { value: '– Das ist mein/dein/sein/ihr Auto.', level: 'a1', copyright: c2 },
                            { value: 'Simon arbeitet jetzt bei Siemens.', level: 'a1', copyright: c2 }
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
                            { value: '– Die Schlüssel liegen auf dem Tisch.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Herkunft',
                        entries: [
                            { value: 'Woher kommst du?', level: 'a1', copyright: c2 },
                            { value: '– Aus der Ukraine.', level: 'a1', copyright: c2 },
                            { value: '– Aus Prag.', level: 'a1', copyright: c2 },
                            { value: '– Vom Arzt.', level: 'a1', copyright: c2 }
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
                            { value: '– Nach Österreich.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Distanz',
                        entries: [
                            { value: 'Wie weit ist es bis Bonn?', level: 'a1', copyright: c2 },
                            { value: '– Nur zehn Kilometer.', level: 'a1', copyright: c2 }
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
                            { value: '– Am 20. September.', level: 'a1', copyright: c2 },
                            { value: '– Im Juli.', level: 'a1', copyright: c2 },
                            { value: 'Wie spät ist es bitte?', level: 'a1', copyright: c2 },
                            { value: '– Es ist jetzt 7 Uhr.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zeitangaben',
                        translate: 'horaire',
                        entries: [
                            { value: 'Wann sind Sie geboren?', level: 'a1', copyright: c2 },
                            { value: '– Am 12. Mai 1988.', level: 'a1', copyright: c2 },
                            { value: 'Wir fahren im Mai in Urlaub.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vorzeitigkeit',
                        translate: 'antériorité',
                        entries: [
                            { value: 'Komm bitte vor 10 Uhr.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind (zu) früh.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Nachzeitigkeit',
                        translate: 'postériorité',
                        entries: [
                            { value: 'Bitte nach 23 Uhr nicht mehr anrufen.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind leider zu spät.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zukunftsbezug',
                        translate: 'référence future',
                        entries: [
                            { value: 'Morgen muss ich arbeiten.', level: 'a1', copyright: c2 },
                            { value: 'Wir machen das bald/später .', level: 'a1', copyright: c2 },
                            { value: 'Heute Abend rufe ich dich an.', level: 'a1', copyright: c2 },
                            { value: 'Am Montag gehen wir ins Kino.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Gegenwartsbezug',
                        translate: 'référence présent',
                        entries: [
                            { value: 'Wir essen jetzt.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin schon da.', level: 'a1', copyright: c2 },
                            { value: 'Er ist heute in Mainz.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vergangenheitsbezug',
                        translate: 'référence passé',
                        entries: [
                            { value: 'Gestern/vor zwei Tagen habe ich die Prüfung gemacht.', level: 'a1', copyright: c2 }
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
                            { value: '– Bis Montag.', level: 'a1', copyright: c2 }
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
                            { value: '– Oft.', level: 'a1', copyright: c2 }
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
                            { value: '– Ein bisschen, bitte.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Grad',
                        translate: ['degré', 'grade'],
                        entries: [
                            { value: 'Das ist sehr/zu gefährlich.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Dimension/Maßangabe',
                        entries: [
                            { value: 'Wie lang/groß ...?', level: 'a1', copyright: c2 },
                            { value: '– 1,5 Meter.', level: 'a1', copyright: c2 },
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
                            { value: '– Nur maximal 60 km/h.', level: 'a1', copyright: c2 }
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
                            { value: '– Erst 50.', level: 'a1', copyright: c2 }
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
                            { value: '– (nicht) leicht', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vergleich',
                        translate: 'comparaison',
                        entries: [
                            { value: 'Spielst du Fußball?', level: 'a1', copyright: c2 },
                            { value: '– Ja, wie meine Schwester.', level: 'a1', copyright: c2 },
                            { value: 'Sie ist so alt wie ich.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind gleich alt.', level: 'a1', copyright: c2 }
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
                            { value: '– Er kann nicht. Er arbeitet heute lange.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Bedingung',
                        translate: 'condition',
                        entries: [
                            { value: 'Kann ich das Auto haben?', level: 'a1', copyright: c2 },
                            { value: '– Ja, aber nur für eine Stunde.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Aufzählung/Alternative',
                        translate: 'Aufzählung: dénombrement, énumération',
                        entries: [
                            { value: 'Er isst und trinkt gern.', level: 'a1', copyright: c2 },
                            { value: 'Möchtest du Wasser oder Wein?', level: 'a1', copyright: c2 }
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
                            { value: '– Sicher.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Möglichkeit',
                        translate: ['occasion', 'possibilité'],
                        entries: [
                            { value: 'Können Sie morgen kommen?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Notwendigkeit/Verpflichtung',
                        translate: ['Notwendigkeit: besoin/nécessité', 'Verpflichtung: obligation/engagement'],
                        entries: [
                            { value: 'Mein Sohn muss um 8 Uhr zu Hause sein.', level: 'a1', copyright: c2 }
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
                            { value: '(Im Restaurant.) Hallo! Entschuldigung bitte!', level: 'a1', copyright: c2 }
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
                            { value: 'auf Wiedersehen.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'um das Wort bitten',
                        translate: 'prendre la parole',
                        entries: [
                            { value: 'Moment bitte.', level: 'a1', copyright: c2 },
                            { value: 'Bitte!', level: 'a1', copyright: c2 }
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
                            { value: '(Na) Klar.', translate: ['Forcément !', 'Bien sûr !'], level: 'a1', copyright: c2 }
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
                            { value: 'Und?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Beispiele geben/etwas verdeutlichen',
                        translate: ['Beispiele geben: donner des exemples', 'etwas verdeutlichen: expliquer qc.'],
                        entries: [
                            { value: 'Ich esse gern Obst, zum Beispiel Orangen, Bananen und Erdbeeren.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Höflichkeit',
                        translate: ['civilité', 'politesse', 'courtoisie'],
                        entries: [
                            { value: 'Kann ich Sie etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Darf ich Sie etwas fragen?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Abschwächung',
                        translate: 'modération',
                        entries: [
                            { value: 'Möchtest du noch etwas?', level: 'a1', copyright: c2 },
                            { value: '– Ja, ein bisschen.', level: 'a1', copyright: c2 }
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
                                    { value: 'Apotheke: Da kann man Medikamente kaufen.', level: 'a1', copyright: c2 }
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
                                    { value: 'Langsamer bitte.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'um Wiederholung bitten',
                                entries: [
                                    { value: 'Noch einmal bitte.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du das bitte noch einmal sagen?', level: 'a1', copyright: c2 },
                                    { value: 'Wie bitte?', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'um Erläuterung bitten',
                                translate: 'Erläuterung: explication',
                                entries: [
                                    { value: 'Entschuldigung, was heißt das?', level: 'a1', copyright: c2 },
                                    { value: 'Was bedeutet ... ?', level: 'a1', copyright: c2 }
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
                                    { value: 'Bitte schreiben Sie das auf.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'jemanden bitten, langsamer zu sprechen',
                                entries: [
                                    { value: 'Bitte ein bisschen langsamer.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'um Wiederholung bitten',
                                entries: [
                                    { value: 'Wie bitte?', level: 'a1', copyright: c2 },
                                    { value: 'Entschuldigung, noch einmal bitte.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'anzeigen, dass man etwas nicht verstanden hat',
                                entries: [
                                    { value: 'Das habe ich nicht verstanden.', level: 'a1', copyright: c2 },
                                    { value: 'Das (Wort) verstehe ich nicht.', level: 'a1', copyright: c2 }
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
                                    { value: '– Ah, dein Heft?', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'Selbstkorrektur',
                                entries: [
                                    { value: 'Ich möchte sagen... Ich fahre zu Paris... nein, nach Paris.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'ausdrücken, dass man ein Wort nicht kennt oder es vergessen hat',
                                entries: [
                                    { value: 'Wie sagt man auf Deutsch?', level: 'a1', copyright: c2 },
                                    { value: 'Auf Englisch sagt man ...', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'nachfragen, ob man (trotz fehlerhaftem Deutsch) verstanden wurde',
                                entries: [
                                    { value: 'Ich spreche nicht gut Deutsch. Haben Sie verstanden?', level: 'a1', copyright: c2 }
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
        entries: [
            {
                groupId: 'Informationsaustausch',
                entries: [
                    {
                        groupId: 'benennen/definieren/identifizieren',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'beschreiben',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'erklären',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'berichten',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Mitteilung/Ankündigung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zweck und Bestimmung angeben',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Wissen/Unwissen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    },

    /*
    createInformationsaustauschEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', ['benennen', 'definieren', 'identifizieren']];
        entries.push(new Builder().id('8fb96813-36bc-4932-adfb-412ccfd88548').thema(thema).entry(['Wer ist das?', '– Das ist Wolfgang', '– Das ist Frau Schuster', '– Das ist meine Kollegin.']).get());
        entries.push(new Builder().id('12534c9b-9623-47dc-9a92-33d6d323d403').thema(thema).entry(['Was ist das?', '– Das ist eine Blume.']).get());
        entries.push(new Builder().id('f99c0778-671e-4e60-82e1-7a0cdb1c4cb9').thema(thema).entry(['Ist das eine Orange?', '– Nein, eine Zitrone.']).get());
        entries.push(new Builder().id('3602d2d6-a8b3-4aeb-a0b2-cf0027b5d7ae').thema(thema).entry('Wie heißt das auf Deutsch? Erklären Sie mal.').get());
        entries.push(new Builder().id('40a62372-423d-4961-bf42-659e499dff14').thema(thema).entry('Der Film heißt „Abgeschminkt“.').get());
        entries.push(new Builder().id('769d5291-eb19-4d75-ae7c-96737422d823').thema(thema).entry('Diese CD gehört mir').get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', 'beschreiben'];
        entries.push(new Builder().id('54f73540-308c-4deb-9cab-9b213ad36bff').thema(thema).entry(['Wie sieht die Tasche aus?', '– Sie ist braun.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', 'erklären'];
        entries.push(new Builder().id('9fbad381-98f2-46a5-a55f-52c5f3a205c4').thema(thema).entry('Wie geht das?').get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', 'berichten'];
        entries.push(new Builder().id('3dcabd5e-1405-4a5a-8171-af964e244ab2').thema(thema).entry(['Was ist passiert?', '– Ich hatte einen Unfall.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', ['Mitteilung', 'Ankündigung']];
        entries.push(new Builder().id('4be53443-cd19-42c5-b49f-4ec3c2fcb61d').thema(thema).entry(['Was machst du heute Abend?', '– Ich besuche Freunde.']).get());
        entries.push(new Builder().id('e4041bed-3bc2-4f91-87a6-d968dff576e0').thema(thema).entry(['Wann fährst du (wieder)?', '– Nächstes Jahr fahren wir nach Griechenland.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', 'Zweck und Bestimmung angeben'];
        entries.push(new Builder().id('f3bfa2cc-cc39-433c-b0f1-4d51c753c3c3').thema(thema).entry('Was ist das?').get());

        thema = ['Sprachhandlungen', 'A1', 'Informationsaustausch', ['Wissen', 'Unwissen']];
        entries.push(new Builder().id('6cdc8995-ead3-49ee-bee6-e9f3197885f8').thema(thema).entry(['Weiß sie das?', '– Ja.', '– Nein.', '– Vielleicht.']).get());
        return entries;
    }
*/
    {
        groupId: 'Sprachhandlungen',
        entries: [
            {
                groupId: 'Bewertung, Kommentar',
                entries: [
                    {
                        groupId: 'Zufriedenheit/Unzufriedenheit',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Gefallen/Missfallen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Interesse/Desinteresse',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Billigung/Missbilligung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zustimmung/Ablehnung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Wunsch',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vorlieben',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Wichtigkeit',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'verneinen/Widerspruch',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Beschwerde',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Rechtfertigung/Begründung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    },
/*
    createBewertungKommentarEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Zufriedenheit', 'Unzufriedenheit']];
        entries.push(new Builder().id('877efa95-ff44-4a22-9679-06aa5c362914').thema(thema).entry(['Wie waren eure Ferien?', '– (Sehr) Schön.', '– Prima.', '– (Ganz) Gut.', '– (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('61464d60-720f-486b-8979-f31e70918b05').thema(thema).entry('Der Film war sehr gut.').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Gefallen', 'Missfallen']];
        entries.push(new Builder().id('b484e5c3-f5a2-4695-ab9a-f66c3dec4ccc').thema(thema).entry(['Was denkst du? Gefällt es dir hier?', '– Ja (sehr).', '– (Es ist) Super!', '– (Es ist) Toll!', '– (Es ist) Klasse!', '– Nein, leider nicht.']).get());
        entries.push(new Builder().id('97ca45e1-fe98-4d70-801c-6133930d37ea').thema(thema).entry(['Gefällt es Ihnen?', '– Ich finde es toll', '– Ich finde es (sehr) schön', '– Ich finde es gut',
            '– Ich finde es prima.', '– Ich bin zufrieden.', '– Das finde ich nicht gut', '– Das finde ich hässlich', '– Das finde ich langweilig.']).get());
        entries.push(new Builder().id('a9461264-cd4d-4ee4-b98e-93d5bd703eb0').thema(thema).entry(['Das Hotel gefällt mir nicht.', 'Ich finde es hier langweilig.']).get());
        entries.push(new Builder().id('402fc4a9-30e5-4669-85f7-fa1ec18544db').thema(thema).entry(['Das Restaurant sieht gut', 'Das Restaurant sieht nett', 'Das Restaurant sieht schrecklich aus.']).get());
        entries.push(new Builder().id('8127b1cf-5df3-47e5-8e14-70d1346ffb82').thema(thema).entry(['Ich liebe diese Stadt.', 'Ich mag diese Stadt nicht.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Interesse', 'Desinteresse']];
        entries.push(new Builder().id('4178168a-750e-4648-8004-0cb864fa68ec').thema(thema).entry(['Gefallen dir die Geschenke?', '– Ja klar.', '– Na ja, es geht.', '– Nicht so.']).get());
        entries.push(new Builder().id('a866f65b-244d-40c5-b63e-c48a68f7a5de').thema(thema).entry('Was sind deine Hobbys?').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Billigung', 'Missbilligung']];
        entries.push(new Builder().id('29bb231b-b03d-4f30-a040-deb9a7826bb9').thema(thema).entry(['Wie findest du das?', '– Gut.', '– (Un-) Interessant.', '– Es geht.', '– Langweilig.', '– (Nicht) Schlecht.']).get());
        entries.push(new Builder().id('cd13d37d-5675-4b04-a920-bb90da974416').thema(thema).entry(['Wie finden Sie das Lehrbuch?', '– Es ist (sehr) interessant', '– Es ist zu langweilig.']).get());
        entries.push(new Builder().id('5c940fb1-404a-49a8-87f1-b00a382ce192').thema(thema).entry('So geht das nicht.').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Zustimmung', 'Ablehnung']];
        entries.push(new Builder().id('3d8a5923-ac70-4ff2-8e66-3c7fa57f6fca').thema(thema).entry('Das stimmt (nicht).').get());
        entries.push(new Builder().id('0c404da4-cd4c-47ad-a8b6-ce7eb39505d7').thema(thema).entry(['Das ist richtig', 'Das ist falsch.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', 'Wunsch'];
        entries.push(new Builder().id('95ef81a0-11f4-4123-992d-cf7f6549ad0e').thema(thema).entry('Was wollen wir heute Abend machen?').get());
        entries.push(new Builder().id('2fc9dad7-9a63-410a-b0a0-4719d32630a4').thema(thema).entry('Willst du auf das Fest gehen?').get());
        entries.push(new Builder().id('8d00450d-88ea-4030-88ac-c4dc23d7856d').thema(thema).entry('Möchten Sie noch etwas Milch?').get());
        entries.push(new Builder().id('765963d9-8417-4b3b-a95f-b41afe08de96').thema(thema).entry('Ich möchte einen Kaffee.').get());
        entries.push(new Builder().id('361b73c1-6074-4183-9424-351f9a7ab112').thema(thema).entry('Peter will ein Eis.').get());
        entries.push(new Builder().id('59b951a4-d99d-45b9-9f12-d2a7f875bdc3').thema(thema).entry('Ich möchte den Film sehen.').get());
        entries.push(new Builder().id('bcb64ebd-6bd2-4042-9658-7ae654ecd8a1').thema(thema).entry('Ich brauche jetzt eine Pause.').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', 'Vorlieben'];
        entries.push(new Builder().id('fdb21873-476e-477d-ad96-f52abc5173ba').thema(thema).entry(['Tee oder Kaffee?', '– Kaffee, bitte.']).get());
        entries.push(new Builder().id('f8838e25-7db5-4d51-98dc-a139dafd40e6').thema(thema).entry(['Magst du Tee oder Kaffee?', '– Ich trinke lieber Tee.', '– Nichts, danke.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Wichtigkeit']];
        entries.push(new Builder().id('6e5d32de-89bd-4ea7-8aa7-028501dde7bb').thema(thema).entry(['Ist das (wirklich) wichtig?', '– Das ist (schon/sehr) wichtig.', '– Nicht so wichtig.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['verneinen', 'Widerspruch']];
        entries.push(new Builder().id('3e2d0a4d-d74c-49ea-94ee-1a1810a0a35e').thema(thema).entry('Nein!').get());
        entries.push(new Builder().id('117122ba-8b56-4c74-9bf2-99e7a44819b6').thema(thema).entry('Doch!').translate('si').get());
        entries.push(new Builder().id('af2600a8-7d85-4677-84af-1b1d20d82df1').thema(thema).entry('Das stimmt nicht.').get());
        entries.push(new Builder().id('ea1c52cb-2568-42be-bf7d-5093566c1ce9').thema(thema).entry('Das ist falsch.').get());
        entries.push(new Builder().id('e9b882dd-4c54-4eaf-997a-98fab784234c').thema(thema).entry('Unsinn!').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', 'Beschwerde'];
        entries.push(new Builder().id('9a8aa6d4-90a8-4066-bbdb-0339f230c0b2').thema(thema).entry('Es ist zu warm hier!').get());
        entries.push(new Builder().id('804efbf1-017b-437f-a603-e8ca6fc86b00').thema(thema).entry('Das ist zu teuer!').get());
        entries.push(new Builder().id('40470bce-1a8d-4881-b2fc-59a1022bdee3').thema(thema).entry('Entschuldigen Sie, die Heizung funktioniert nicht.').get());

        thema = ['Sprachhandlungen', 'A1', 'Bewertung, Kommentar', ['Rechtfertigung', 'Begründung']];
        entries.push(new Builder().id('9cdf7979-5cb1-4f56-9f3a-25ba447616ca').thema(thema).entry(['Warum kommst du nicht?', '– Ich habe keine Zeit.']).get());
        entries.push(new Builder().id('0563adbd-6ac0-447f-bb6d-4b36866d1ef6').thema(thema).entry('Seine Mutter ist krank. Deshalb kommt er heute nicht.').get());
        return entries;
    }
*/
    {
        groupId: 'Sprachhandlungen',
        entries: [
            {
                groupId: 'Gefühlsausdruck',
                entries: [
                    {
                        groupId: 'Freude/Bedauern',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Neigung/Abneigung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Gelassenheit/Gleichgültigkeit',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Mitleid',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Erstaunen/Überraschung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Hoffnung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Sorge/Befürchtung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Enttäuschung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    },
    /*
    createGefuehlsausdruckEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', ['Freude', 'Bedauern']];
        entries.push(new Builder().id('2f4102ff-b5da-4782-a49f-cb80de107533').thema(thema).entry(['Ist das nicht toll!', '– Ja, super!', '– Finde ich auch.']).get());
        entries.push(new Builder().id('1e10b851-3037-4b36-9554-8432b9d6cbe7').thema(thema).entry(['Ich bin glücklich. Und du?', '– Sehr.']).get());
        entries.push(new Builder().id('11c9ae13-f2bf-47c8-862a-a45a7e7f3c81').thema(thema).entry(['Glückwunsch!', '– Danke!']).get());
        entries.push(new Builder().id('30a1159a-6975-479f-9055-b4ef8a98fd1e').thema(thema).entry('Leider.').get());
        entries.push(new Builder().id('8b064ed1-5780-4342-a809-fa6f904b6cc2').thema(thema).entry('Das ist schade!').get());
        entries.push(new Builder().id('c472f698-3408-4f99-93dd-67a8ae222297').thema(thema).entry('Das tut mir leid.').get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', ['Neigung', 'Abneigung']];
        entries.push(new Builder().id('1114d72e-6582-4f76-ba2c-f978b439a76e').thema(thema).entry(['Schmeckt‘s dir nicht?', '– Doch, sehr gut.', '– Nein, ich mag eigentlich keinen Fisch.']).get());
        entries.push(new Builder().id('df3efe9e-6bb8-42b3-9e3a-6baaa9db4065').thema(thema).entry(['Isst du gern Chinesisch?', '– Ja, gern(e).', '– Nein, nie.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', ['Gelassenheit', 'Gleichgültigkeit']];
        entries.push(new Builder().id('55272517-9e33-4bc9-826f-0453cf627516').thema(thema).entry(['Ich kann leider nicht kommen.', '– Egal.', '– Na und?', '– Das ist mir egal']).get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', 'Mitleid'];
        entries.push(new Builder().id('2613ea92-3820-415a-8b7e-0e5def457c3a').thema(thema).entry('(Es) Tut mir (wirklich) (sehr) leid.').get());
        entries.push(new Builder().id('7f252b2e-f251-4efd-bc45-cfed3225aa09').thema(thema).entry('Das finde ich aber traurig.').get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', ['Erstaunen', 'Überraschung']];
        entries.push(new Builder().id('d4f1bc3d-27db-482d-bf47-5370c5db7c3e').thema(thema).entry(['Komisch!', 'Das ist ja komisch!', 'Wie komisch!', '– Ja, sehr komisch.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', 'Hoffnung'];
        entries.push(new Builder().id('98cc5bf9-ec45-4c6f-8703-be480a7a2930').thema(thema).entry('Hoffentlich regnet es nicht.').get());
        entries.push(new Builder().id('13fe5fb8-a58a-45c6-abc7-1ba71fdf4842').thema(thema).entry('Hoffentlich kommt bald der Bus.').get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', ['Sorge', 'Befürchtung']];
        entries.push(new Builder().id('15dcbdcf-e5f0-4aa9-bce8-11eeba6035eb').thema(thema).entry(['Ich habe Angst.', 'Schon 10 Uhr, und er ist immer noch nicht da.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Gefühlsausdruck', 'Enttäuschung'];
        entries.push(new Builder().id('a5de5948-2513-459f-a075-80c75b096007').thema(thema).entry('Was? Du bleibst zu Hause? Schade!').get());
        return entries;
    }
*/

    {
        groupId: 'Sprachhandlungen',
        entries: [
            {
                groupId: 'Handlungsregulierung',
                entries: [
                    {
                        groupId: 'Bitte/Aufforderung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Bestätigung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Hilfe anbieten/annehmen und ablehnen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Bestellung/Wunsch',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Rat/Empfehlung/Warnung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Erlaubnis/Genehmigung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vorschlag',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Versprechung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Verabredung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Einladung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    },
    /*
    createHandlungsregulierungEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', ['Bitte', 'Aufforderung']];
        entries.push(new Builder().id('bf040206-7553-4394-9169-16e8a74c45a3').thema(thema).entry('Kaufst du bitte Brot?').get());
        entries.push(new Builder().id('43abd82b-b63f-471d-96e8-def0bc8ef683').thema(thema).entry('Kannst du Milch kaufen?').get());
        entries.push(new Builder().id('ef27fd72-269f-4fb6-a2a0-955eb86daa00').thema(thema).entry('Haben Sie eine Briefmarke?').get());
        entries.push(new Builder().id('eb8f2fe8-e227-48e0-aeda-955ba0ee63b3').thema(thema).entry(['Na klar.', 'Aber natürlich.', 'Ja, natürlich.']).get());
        entries.push(new Builder().id('b02635ba-19c1-401b-b533-df8d1dbbb0cc').thema(thema).entry(['Gehen wir zusammen essen?', '– Gerne.']).get());
        entries.push(new Builder().id('f9dd9874-ac20-4210-8968-3a7f6fa7e500').thema(thema).entry(['Eine Frage bitte: Wie spät ist es?', '– Es ist halb acht (Uhr).']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Bestätigung'];
        entries.push(new Builder().id('7b6cac00-5bae-450c-9022-cf19e577c44e').thema(thema).entry('Stimmt das?').get());
        entries.push(new Builder().id('252779d4-076b-4f65-b5af-076be013fb99').thema(thema).entry('Richtig?').get());
        entries.push(new Builder().id('7968ee20-e627-406b-87d0-134bb8f54226').thema(thema).entry('Ja.').get());
        entries.push(new Builder().id('d0482282-748c-4d00-8c0b-1ace87434e80').thema(thema).entry('Doch.').translate('si').get());
        entries.push(new Builder().id('9be964d0-2b8c-43e3-8058-d4874e5927f2').thema(thema).entry('Das ist richtig.').get());
        entries.push(new Builder().id('8aef0da2-9d28-4ecc-8f80-55f9bb19accc').thema(thema).entry('Stimmt.').translate('tout à fait !').get());
        entries.push(new Builder().id('7ee613da-21fa-43cd-805d-2ab1298958f9').thema(thema).entry('Genau (so).').translate(['Absolument !', 'parfaitement !', 'tout à fait !']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Hilfe anbieten/annehmen und ablehnen'];
        entries.push(new Builder().id('f814dff1-ee22-456f-a8e6-53a7555d6e0a').thema(thema).entry(['Kann ich Ihnen helfen?', '– Ja, danke.', '– Gerne.', '– Sehr nett, danke.', '– Nein, danke.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', ['Bestellung', 'Wunsch']];
        entries.push(new Builder().id('4e0d36af-557e-4f95-bb7b-2cbb228cf979').thema(thema).entry('Ich möchte ein Zimmer reservieren.').get());
        entries.push(new Builder().id('bfb936b8-4fbb-42b0-a20e-f7339e43186e').thema(thema).entry('Ich nehme die Tomatensuppe und den Salat.').get());
        entries.push(new Builder().id('497cf1c8-2e69-4412-ba77-ad87c39be0e4').thema(thema).entry('Einen Moment.').get());
        entries.push(new Builder().id('a0d6977a-b3ae-4504-a4bb-0aca2b529ac8').thema(thema).entry('Sofort.').get());
        entries.push(new Builder().id('ab6b092c-8925-4916-9074-8cadc42534bd').thema(thema).entry('Gleich.').translate('tout de suite').get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', ['Rat', 'Empfehlung', 'Warnung']];
        entries.push(new Builder().id('e68c7919-32cf-4beb-b4db-a78bcf92125c').thema(thema).entry('Das ist zu gefährlich/heiß/kalt/...').get());
        entries.push(new Builder().id('8205b27a-fc7b-4811-ac19-412413af286e').thema(thema).entry('Vorsicht!').translate(['Attention !', 'Gare !']).get());
        entries.push(new Builder().id('fe4dada3-75c0-4b08-8cb9-3561207182e3').thema(thema).entry('Achtung!').translate(['Attention !', 'Gare !', 'garde à vous!']).get());
        entries.push(new Builder().id('2be55d69-18f3-42ca-bc05-1e94f7a6d910').thema(thema).entry('Halt!').translate('halte !').get());
        entries.push(new Builder().id('aa6582dc-b6b3-458f-b110-1521a63e7839').thema(thema).entry('Hilfe!').get());
        entries.push(new Builder().id('b9450720-a3e0-4fe1-a8f9-d093ea7ac1cb').thema(thema).entry('Stopp!').get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', ['Erlaubnis', 'Genehmigung']];
        entries.push(new Builder().id('ff0bbdf6-0a17-4342-9708-4a9c47ff9351').thema(thema).entry(['Kann man hier rauchen?', '– Gerne.', '– Natürlich.', '– Ja natürlich.', '– Bitte nicht.', '– Nein, tut mir leid.', '– Das ist hier verboten.']).get());
        entries.push(new Builder().id('13f404c3-f125-4f9c-b430-dac34867c025').thema(thema).entry('Kann ich mal telefonieren?').get());
        entries.push(new Builder().id('88e781a6-6fe8-4c85-9cc4-e3ee81a2e592').thema(thema).entry(['Kann man hier parken?', '– Nein, hier ist Parken verboten.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Vorschlag'];
        entries.push(new Builder().id('6eefbf43-45f0-4f91-af9a-3519c5bd6c0e').thema(thema).entry(['Gehen wir heute ins Kino?', '– Ja, gerne.']).get());
        entries.push(new Builder().id('330ddfe8-ed76-4ec8-9494-a4064eec8746').thema(thema).entry(['Kommst du mit zu Claudia?', '– Gute Idee.', '– Ja, warum nicht.', '– Gut.', '– Nein, leider nicht.', '– Keine Zeit.', '– Keine Lust']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Versprechung'];
        entries.push(new Builder().id('0955d546-d817-427d-adae-13fe86bb44df').thema(thema).entry(['Morgen bekommst du das Geld.', '– Gut.', '– Danke.', '– Hoffentlich!', '– Versprochen?', '– Wirklich?', '– Ich mache es morgen.', '– Das mache ich!']).get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Verabredung'];
        entries.push(new Builder().id('ef11140b-e3bb-45f7-ba88-ad2fa9cdf638').thema(thema).entry(['Kannst du morgen Abend?', 'Hast du am Mittwoch Zeit?', '– Ja, wann?', '– Ja, das ist gut.', '– Vielleicht.', '– Nein, (morgen kann ich/geht es) leider nicht.']).get());
        entries.push(new Builder().id('e1f70027-0fbf-480c-918d-1f94e36689c7').thema(thema).entry('Wann hast du (mal/denn) Zeit?').get());

        thema = ['Sprachhandlungen', 'A1', 'Handlungsregulierung', 'Einladung'];
        entries.push(new Builder().id('89c12867-492e-41c2-a8b1-8c4f7ea9edcd').thema(thema).entry(['Möchten Sie (noch) etwas trinken?', 'Orangensaft?', '– Nein, danke.']).get());
        entries.push(new Builder().id('04704e75-c44e-433e-a65a-acf9513a0438').thema(thema).entry(['Was möchten Sie bitte?', '– Nichts, danke.']).get());
        entries.push(new Builder().id('d816e242-fce1-4833-a309-c37d8869771a').thema(thema).entry('Setz dich!').get());
        entries.push(new Builder().id('f52f5db5-74a8-41de-b6d6-e02eb787eccb').thema(thema).entry('Setzen Sie sich doch!').get());
        return entries;
    }
*/
    {
        groupId: 'Sprachhandlungen',
        entries: [
            {
                groupId: 'Soziale Konventionen',
                entries: [
                    {
                        groupId: 'Kontaktaufnahme: jemanden ansprechen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            {
                                groupId: 'Telefon',
                                entries: [
                                    { value: '', level: 'a1', copyright: c2 },
                                    { value: '', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: '', level: 'a1', copyright: c2 },
                                    { value: '', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'grüßen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'sich/jemanden vorstellen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'über das Befinden sprechen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'gute Wünsche',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Gratulation',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'eine Anerkennung aussprechen/ein Kompliment machen',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Dank',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: '', level: 'a1', copyright: c2 },
                                    { value: '', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    },
                    {
                        groupId: 'Entschuldigung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Verabschiedung',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 },
                            {
                                groupId: 'Telefon',
                                entries: [
                                    { value: '', level: 'a1', copyright: c2 },
                                    { value: '', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'Brief',
                                entries: [
                                    { value: '', level: 'a1', copyright: c2 },
                                    { value: '', level: 'a1', copyright: c2 }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    /*
    createSozialeKonventionenEntries(Builder) {
        let entries = [];
        let thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Kontaktaufnahme: jemanden ansprechen'];
        entries.push(new Builder().id('284cce58-597b-4d65-889b-6be9de4ecbbe').thema(thema).entry('Hallo!').get());
        entries.push(new Builder().id('50e4afc6-fef0-45df-a74d-a7494ebc92eb').thema(thema).entry(['Roman Jaremkow.', 'Marija Kosik.', 'Helmut!', 'Frau Klein!']).get());
        entries.push(new Builder().id('d85395d9-a4a1-446d-a098-234b0daf4475').thema(thema).entry('Ja, bitte?').get());
        entries.push(new Builder().id('da661874-1bdd-4105-a437-445afb6d01c1').thema(thema).entry('Wie bitte?').get());
        entries.push(new Builder().id('928c9831-7b36-4bf3-a940-b3004052c958').thema(thema).entry(['Sind Sie nicht Frau Yilmaz?', '– Ja (das stimmt).', '– Ja, warum?', '– Nein, ich bin ...', '– Nein, ich heiße ...', '– Nein, mein Name ist ...']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', ['Kontaktaufnahme: jemanden ansprechen', 'Telefon']];
        entries.push(new Builder().id('dfecd253-9e52-4444-96df-e0d9648abf58').thema(thema).entry(['(Hier) Heine.', 'Guten Tag, Frau Heine.']).get());
        entries.push(new Builder().id('9e0b184a-f246-4a03-a402-0afec98f61ef').thema(thema).entry('Hier ist Josefa Karosz.').get());
        entries.push(new Builder().id('e8101477-1613-4b84-a344-41e4fd3cdc65').thema(thema).entry('Hallo, ist Julia da?').get());
        entries.push(new Builder().id('9b8aae23-fc50-4989-a0c6-242109c8ce37').thema(thema).entry(['Guten Tag. Frau Heuer bitte!', '– Ja, Moment bitte.', '– Tut mir leid, sie ist nicht da.', '– Nein, hier ist ...']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', ['Kontaktaufnahme: jemanden ansprechen', 'Brief']];
        entries.push(new Builder().id('388ee7a6-5ae1-4c22-8ae7-3a4f38f9c1af').thema(thema).entry('Liebe Renate/Frau Haushofer,').get());
        entries.push(new Builder().id('3141dede-8a04-480f-9995-e1c17f7b265d').thema(thema).entry('Sehr geehrter Herr Liebermann,').get());
        entries.push(new Builder().id('1e368098-9488-4795-ac93-4288bfe3c4fb').thema(thema).entry('Sehr geehrte Damen und Herren,').get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'grüßen'];
        entries.push(new Builder().id('9641e5ef-fa1b-4e36-834d-78e2b236905c').thema(thema).entry(['(Guten) Tag/Hallo, Ulrike!', '– (Guten) Tag/Hallo, Karina.']).get());
        entries.push(new Builder().id('9c85f5a8-3536-4d39-a747-5705f18fe429').thema(thema).entry(['Guten Morgen, Frau Schneider.', '– Guten Morgen, Frau Kowalski.']).get());
        entries.push(new Builder().id('3dc74883-3b33-4381-83bb-b759880e9ea5').thema(thema).entry(['Guten Tag, Frau Schneider.', '– Guten Tag, Frau Kowalski.']).get());
        entries.push(new Builder().id('47bbc845-c4ab-4614-b392-31f36820e20a').thema(thema).entry(['Guten Abend, Frau Schneider.', '– Guten Abend, Frau Kowalski.']).get());
        entries.push(new Builder().id('585b9506-92a5-4a13-a5dd-02cf2d7b88ec').thema(thema).entry(['Gute Nacht, Christian.', '– Gute Nacht, Bea.']).get());
        entries.push(new Builder().id('f396c6f3-f261-44aa-9a21-ab500fe421a4').thema(thema).entry(['Hallo, wie geht’s?/wie geht es dir?', '– Danke, gut.']).get());
        entries.push(new Builder().id('5ff10e14-c789-4ccb-89b2-044b0e313316').thema(thema).entry(['Grüß Gott! (süddeutsch)', '– Grüß Gott!']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'sich/jemanden vorstellen'];
        entries.push(new Builder().id('bf43ae14-ce70-4ce6-b9ac-47775f84550d').thema(thema).entry(['(Hallo) Mein Name ist/Ich heiße Vera.', '– Hallo, Vera. Ich heiße Mario.']).get());
        entries.push(new Builder().id('4a8ac2ee-23c0-419e-96dd-f5f6f07d2226').thema(thema).entry(['(Guten Tag) Ich bin Petra Holl.', '– Guten Tag. Ich bin Ulrike Meyer.']).get());
        entries.push(new Builder().id('ee96a88b-461e-4929-bf73-00f1313b1ac3').thema(thema).entry(['Das ist Ulrich Pfeiffer.', '– Ah ja. Ich heiße Johanna Hauser.', '– Ah ja. Ich bin Johanna Hauser.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'über das Befinden sprechen'];
        entries.push(new Builder().id('9bcf21c4-e109-4ee1-87e8-6e5be05d4f45').thema(thema).entry(["Wie geht’s/geht es dir (heute)?", '– Danke, gut. Und dir?', '– Danke, es geht gut. Und dir?', '– Danke, es geht nicht gut. Und dir?']).get());
        entries.push(new Builder().id('9d244000-5b0a-41b7-a6d9-7e731ac769f1').thema(thema).entry(['Geht es Ihnen gut?', '– Ja, super.', '– Na ja, es geht!', '– Ach, nicht so gut.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'gute Wünsche'];
        entries.push(new Builder().id('ec31bb30-3eca-4519-a58a-cda426f76f41').thema(thema).entry('Alles Gute.').translate(['Mes meilleurs vœux !', 'toutes sortes de bonnes choses']).get());
        entries.push(new Builder().id('665a376c-ffb0-45d7-8a5b-77a02bb26800').thema(thema).entry('Schöne Ferien!').get());
        entries.push(new Builder().id('d5fb4405-9280-4c90-92c8-539ffd3dfcd2').thema(thema).entry('Gut gemacht!').get());
        entries.push(new Builder().id('71fb9dd6-cd72-4ea5-ab28-969eb310270d').thema(thema).entry('Prost!').get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Gratulation'];
        entries.push(new Builder().id('6bf39333-5e0b-442a-b041-07c2590a9c4f').thema(thema).entry(['Herzlichen Glückwunsch', '– Danke (schön)!', '– Herzlichen', '– Vielen Dank.', '– Ihnen auch.', '– Danke, ebenfalls.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', ['eine Anerkennung aussprechen', 'ein Kompliment machen']];
        entries.push(new Builder().id('4f09dba2-c0a5-4215-8565-4822235c68b7').thema(thema).entry('Sie sprechen (sehr) gut Deutsch.').get());
        entries.push(new Builder().id('cd8fb1d9-3a27-42b2-8bf0-dfcdf09d4a45').thema(thema).entry('Das ist toll/(sehr) schön/gut.').get());
        entries.push(new Builder().id('7530c370-b3ce-489c-8002-022761df3894').thema(thema).entry('Das schmeckt gut.').translate(["c'est bon", "celà a un bon goût"]).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Dank'];
        entries.push(new Builder().id('65f1cdbf-ffd7-435c-bae5-ad7bd1df4125').thema(thema).entry(['Danke (schön)!', 'Herzlichen', 'Vielen Dank.', '– Ihnen auch.', '– Danke, ebenfalls.', '– (Aber) Bitte.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Dank', 'Brief'];
        entries.push(new Builder().id('80fbe548-bab1-4492-ad9c-aaff7150acc8').thema(thema).entry('Vielen Dank.').get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Entschuldigung'];
        entries.push(new Builder().id('9079ef28-7a23-4b61-a979-8583db94f4ab').thema(thema).entry(['Entschuldigung', 'Entschuldigen Sie bitte!', '– Bitte!', '– Schon gut.', '– Kein Problem.']).get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', 'Verabschiedung'];
        entries.push(new Builder().id('f0a6f68a-a533-4b53-b896-e6d3b0488a91').thema(thema).entry('(Auf) Wiedersehen!').get());
        entries.push(new Builder().id('de30ade5-f01d-4b43-a4cf-c86aa544cc48').thema(thema).entry('Tschüss!').get());
        entries.push(new Builder().id('c0ad5a09-26c3-4263-976e-66d7061b1a06').thema(thema).entry('Bis bald.').get());
        entries.push(new Builder().id('1b48c2f7-d1e9-403d-99c6-8731d2bef6f7').thema(thema).entry('Bis später.').get());
        entries.push(new Builder().id('eed44aa0-a4e1-4f7c-aef7-192dd877dcc2').thema(thema).entry('Gute Nacht!').get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', ['Verabschiedung', 'Telefon']];
        entries.push(new Builder().id('65313ed7-830a-4401-88a7-b3ba0d53c14e').thema(thema).entry('(Auf) Wiederhören!').get());

        thema = ['Sprachhandlungen', 'A1', 'Soziale Konventionen', ['Verabschiedung', 'Brief']];
        entries.push(new Builder().id('28123bbc-a83b-497d-b3cc-7e46e25bb3ef').thema(thema).entry(['Liebe Grüße', 'Herzliche Grüße']).get());
        entries.push(new Builder().id('debc19da-c966-472f-857d-882fcbce3e35').thema(thema).entry('Mit freundlichen Grüßen').get());
        return entries;
    }
*/
];


export {data as default};
