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
/*
– Entschuldigung ...
– Entschuldige, hast du einen Moment Zeit?
– Kann ich etwas fragen?
– Kannst du mir helfen?
– Hallo!
– Hallo, Chris! Wie waren deine Ferien?
– Sag mal: wo ist denn ...
*/
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
/*
– Danke. Ich muss jetzt leider gehen.
– Okay, tschüss, bis bald.
– Gut: ...
– Na gut.
– Dann herzlichen Dank/auf Wiedersehen.
– Entschuldigung, ich muss jetzt weg.
– Also, bis heute Mittag.
– Danke für deine Hilfe.
*/
                        ]
                    },
                    {
                        groupId: 'um das Wort bitten',
                        translate: 'prendre la parole',
                        entries: [
                            { value: 'Moment bitte.', level: 'a1', copyright: c2 },
                            { value: 'Bitte!', level: 'a1', copyright: c2 }
/*
– Bitte.
– Ich möchte (noch) etwas sagen.
*/
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
/*
– Ja?/So?/Wirklich?
– Bitte?
– (Na) klar.
– Und (dann)?
*/
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
/*
– Also?
– Ja?
– Und?
– Ja, bitte!
– Sag!
– Erzähl!
– Fängst du bitte an?
*/
                        ]
                    },
/*
groupId: gemeinsames Wissen andeuten
– Nein, heute geht es nicht. Da spielen wir
doch Fußball.
– Du weißt ja, dass Micha krank ist.
                    */
                    {
                        groupId: 'Beispiele geben/etwas verdeutlichen',
                        translate: ['Beispiele geben: donner des exemples', 'etwas verdeutlichen: expliquer qc.'],
                        entries: [
                            { value: 'Ich esse gern Obst, zum Beispiel Orangen, Bananen und Erdbeeren.', level: 'a1', copyright: c2 }
/*
– Ich habe viele Hobbys, zum Beispiel
Fußball spielen und Musik hören.
– Meine Familie, also das ist: mein Vater
Bruno, meine Mutter Anna und mein
Bruder Fabio.
*/
                        ]
                    },
/*
groupId: Vermeidung
– Potsdam liegt ... ja, das liegt nahe
bei Berlin.
– Wie viele waren gestern beim Fussball?
Hm; vielleicht zehn oder so.
– Kommst du mit? Ach nein, ich muss meiner
Mutter helfen.
*/
                    {
                        groupId: 'Höflichkeit',
                        translate: ['civilité', 'politesse', 'courtoisie'],
                        entries: [
                            { value: 'Kann ich Sie etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Darf ich Sie etwas fragen?', level: 'a1', copyright: c2 }
/*
– Kann ich dir helfen?
– Entschuldigung!
– Darf ich noch ein Stück Torte haben?
*/
                        ]
                    },
                    {
                        groupId: 'Abschwächung',
                        translate: 'modération',
                        entries: [
                            { value: 'Möchtest du noch etwas?', level: 'a1', copyright: c2 },
                            { value: '– Ja, ein bisschen.', level: 'a1', copyright: c2 }
/*
– Möchtest du noch etwas? Ja, ein bisschen.
– Eigentlich hast du ja recht.
*/
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
/*
– Küche: Da kann man das Essen machen.
– Gabel und Messer: Das braucht man beim
Essen.
– Eine Insel ist zum Beispiel Zypern
oder Rügen.
*/
                                ]
                            },
                            {
                                groupId: 'Rückfragen zur Verständniskontrolle',
                                translate: 'rückfragen: demander des précisions',
                                entries: [
                                    { value: 'Haben Sie das verstanden?', level: 'a1', copyright: c2 },
                                    { value: 'Ist das klar?', level: 'a1', copyright: c2 }
/*

*/
                                ]
                            },
                            {
                                groupId: 'schwierige Wörter buchstabieren',
                                entries: [
                                    { value: 'Mein Name ist „Kuntz“, ich buchstabiere: K-U-N-T-Z.', level: 'a1', copyright: c2 }
/*

*/
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
/*
– Entschuldigung, wie bitte?
– Kannst du bitte langsamer sprechen,
ich habe das nicht verstanden.
– Das (Wort) verstehe ich nicht.
– Tut mir leid, ich verstehe dich nicht.
*/
                                ]
                            },
                            {
                                groupId: 'um Wiederholung bitten',
                                entries: [
                                    { value: 'Entschuldigung, noch einmal bitte.', level: 'a1', copyright: c2 }
                                    { value: 'Noch einmal bitte.', level: 'a1', copyright: c2 },
                                    { value: 'Kannst du das bitte noch einmal sagen?', level: 'a1', copyright: c2 },
                                    { value: 'Wie bitte?', level: 'a1', copyright: c2 }
/*
– Noch einmal bitte.
– Kannst du das noch einmal sagen?
– Wie bitte?
*/
                                ]
                            },
/*
groupId: sich bestätigen lassen, ob man richtig gehört bzw. den Kontext richtig verstanden hat
– Entschuldigung, habe ich das richtig
verstanden?
– Hast du „dreizehn“ oder „dreißig“ gesagt?
– Wie meinst du das?
*/
                            {
                                groupId: 'um Erläuterung bitten',
                                translate: 'Erläuterung: explication',
                                entries: [
                                    { value: 'Entschuldigung, was heißt das?', level: 'a1', copyright: c2 },
                                    { value: 'Was bedeutet ... ?', level: 'a1', copyright: c2 }
/*
– Entschuldigung, wie heißt das?
– Ich kenne das Wort nicht.
Kannst du es erklären?
*/
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
/*
– Wie schreibt man ...?
– Kannst du das bitte schreiben?
*/
                                ]
                            },
                            {
                                groupId: 'jemanden bitten, langsamer zu sprechen',
                                entries: [
                                    { value: 'Bitte ein bisschen langsamer.', level: 'a1', copyright: c2 }
/*
– Kannst du bitte langsamer sprechen?
*/
                                ]
                            },
/*
groupId: Hilfestellung beim Formulieren
– Meinst du vielleicht ...?
*/
/*
groupId: Rückfragen zur Verständnissicherung
– Hab’ ich richtig verstanden?
Wir treffen uns bei Eva.
– Tut mir leid, ich kann dich nicht verstehen.
*/
                            {
                                groupId: 'anzeigen, dass man etwas nicht verstanden hat',
                                entries: [
                                    { value: 'Das habe ich nicht verstanden.', level: 'a1', copyright: c2 },
                                    { value: 'Das (Wort) verstehe ich nicht.', level: 'a1', copyright: c2 }
/*
– Ich glaube, das habe ich nicht (richtig)
verstanden.
– Tut mir leid, ich kann dich nicht verstehen.
*/
                                ]
                            }
                        ]
                    },
                    {
/*
groupId: Wörter und Begriffe umschreiben
– Ich muss noch die ... ich weiß nicht, wie
man das sagt – Übung für die Schule –
machen. Wie sagt man?
Ja, die Hausaufgaben.
*/
                        groupId: 'Kompensation',
                        entries: [
                            {
                                groupId: 'Synonyme oder ähnliche Begriffe verwenden',
                                entries: [
                                    { value: 'Wo ist mein Buch... nicht ein Buch... ein Schreibbuch.', level: 'a1', copyright: c2 },
                                    { value: '– Ah, dein Heft?', level: 'a1', copyright: c2 }
/*
– Ich habe zwei ...
– einen Bruder und eine Schwester.
*/
                                ]
                            },
                            {
                                groupId: 'Selbstkorrektur',
                                entries: [
                                    { value: 'Ich möchte sagen... Ich fahre zu Paris... nein, nach Paris.', level: 'a1', copyright: c2 }
/*
– Ich gehe nach Schule ... nein, in die Schule.
– Entschuldigung, ich sage es noch einmal: ...
*/
                                ]
                            },
                            {
                                groupId: 'ausdrücken, dass man ein Wort nicht kennt oder es vergessen hat',
                                entries: [
                                    { value: 'Wie sagt man auf Deutsch?', level: 'a1', copyright: c2 },
                                    { value: 'Auf Englisch sagt man ...', level: 'a1', copyright: c2 }
/*
– Wie sagt man das auf Deutsch? Auf ............
heißt es /sagt man ...
– Jetzt weiß ich das Wort nicht mehr.
– Ich habe das Wort vergessen.
*/
                                ]
                            },
                            {
                                groupId: 'nachfragen, ob man (trotz fehlerhaftem Deutsch) verstanden wurde',
                                entries: [
                                    { value: 'Ich spreche nicht gut Deutsch. Haben Sie verstanden?', level: 'a1', copyright: c2 }
/*
– Hast du das verstanden?
– Ich spreche nicht gut Deutsch.
Hast du mich verstanden?
*/
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
                           { value: 'Diese CD gehört mir', level: 'a1', copyright: c2 }
                           /*
– Alle Schüler kommen aus Russland.
– Das ist Wolfgang/Frau Brandt/mein Bruder.
– Das ist ein Musikinstrument.
– Was ist das deutsche Wort für ...
– Auf Deutsch sagt man „Obst“.
Wer kann das Wort erklären?
– Was braucht man zum Schreiben?
– Welche Unterrichtsfächer findest du
interessant/langweilig?
– Er ist ein typischer Norweger.
– Von Beruf ist meine Mutter Ärztin.
– Der Computer gehört mir.
– Was für einen Pulli hast du gekauft?
                           */
                        ]
                    },
                    {
                        groupId: 'beschreiben',
                        translate: 'décrire qn./qc.',
                        entries: [
                            { value: 'Wie sieht die Tasche aus?', level: 'a1', copyright: c2 },
                            { value: '– Sie ist braun.', level: 'a1', copyright: c2 }
                        ]
/*
– Kannst du sie beschreiben? Sie ist blond,
nicht sehr groß und hat grüne Augen.
– Palermo ist eine große Stadt in Süditalien
und liegt am Meer.
                        */
                    },
                    {
                        groupId: 'erklären',
                        translate: 'expliquer qc.',
                        entries: [
                            { value: 'Wie geht das?', level: 'a1', copyright: c2 }
                        ]
/*
                        – Wie macht man das? Wie geht das?
                        – Du musst zuerst den Computer anmachen
                        und dann siehst du alles.
                        */
                    },
                    {
                        groupId: 'berichten',
                        translate: ['communiquer qc.', 'faire un rapport (sur qc.)'],
                        entries: [
                            { value: 'Was ist passiert?', level: 'a1', copyright: c2 },
                            { value: '– Ich hatte einen Unfall.', level: 'a1', copyright: c2 }
                            /*
– Ich war im Sommer in Berlin.
– Ich habe in den Ferien einen Deutschkurs
gemacht.
– Was ist passiert? Michael hatte einen Unfall
und liegt jetzt im Krankenhaus. Er ist aber
nur leicht verletzt.
                            */
                        ]
                    },
                    {
                        groupId: 'Mitteilung/Ankündigung',
                        translate: ['Mitteilung: avis, communication, message', 'Ankündigung: annonce'],
                        entries: [
                            { value: 'Was machst du heute Abend?', level: 'a1', copyright: c2 },
                            { value: '– Ich besuche Freunde.', level: 'a1', copyright: c2 },
                            { value: 'Wann fährst du (wieder)?', level: 'a1', copyright: c2 },
                            { value: '– Nächstes Jahr fahren wir nach Griechenland.', level: 'a1', copyright: c2 }
                            /*
– Die Party ist am Samstag um halb acht.
– Wir treffen uns am Samstag vor der Schule.
– In den Ferien fahre ich zu meiner Tante
nach Paris.
– Wann schreiben wir den Englischtest?
Am nächsten Donnerstag in der ersten
Stunde.
                            */
                        ]
                    },
                    {
                        groupId: 'Zweck und Bestimmung angeben',
                        translate: ['Zweck  angeben: citer but', 'Bestimmung angeben: citer détermination'],
                        entries: [
                            { value: 'Was ist das?', level: 'a1', copyright: c2 }
                            /*
– Das Geschenk ist für Peter.
– Was ist das? Das brauche ich für meinen
Motorroller.
– Wie geht das? Das geht so: Du musst ...
– Was kann man mit dem Computer machen?
Mit dem Computer kann man alle neuen
Spiele machen.
                            */
                        ]
                    },
                    {
                        groupId: 'Wissen/Unwissen',
                        translate: ['Wissen: savoir, connaissance(s), science', 'Unwissen: ignorance'],
                        entries: [
                            { value: 'Weiß sie das?', level: 'a1', copyright: c2 },
                            { value: '– Ja.', level: 'a1', copyright: c2 },
                            { value: '– Nein.', level: 'a1', copyright: c2 },
                            { value: '– Vielleicht.', level: 'a1', copyright: c2 }
/*
– Weißt du das? – Ja./Nein./Noch nicht.
– Bist du sicher? Weißt du das genau?
– Ich bin (nicht) sicher.
– Sie kommt bestimmt/wahrscheinlich.
– Vielleicht hat sie es vergessen.
                            */
                        ]
                    }
/*
groupId: Nachfrage
– Wir treffen uns am Mittag vor der Schule.
Wann genau?
– Um halb eins.
                    */
                ]
            },
            {
                groupId: 'Bewertung, Kommentar',
                translate: ['Bewertung: évaluation (de la valeur), estimation (de la valeur), cote', 'Kommentar: commentaire'],
                entries: [
                    {
                    /*
groupId: Meinung/Ansicht
– Was denkst/meinst du?
– Ich glaube/denke, ...
                    */

                        groupId: 'Zufriedenheit/Unzufriedenheit',
                        translate: ['Zufriedenheit: satisfaction, contentement', 'Unzufriedenheit: insatisfaction, mécontentement'],
                        entries: [
                            { value: 'Wie waren eure Ferien?', level: 'a1', copyright: c2 },
                            { value: '– (Sehr) Schön.', level: 'a1', copyright: c2 },
                            { value: '– Prima.', level: 'a1', copyright: c2 },
                            { value: '– (Ganz) Gut.', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Schlecht.', level: 'a1', copyright: c2 },
                            { value: 'Der Film war sehr gut.', level: 'a1', copyright: c2 }
                        ]
/*
– Wie waren die Ferien? Toll./Gut./
Nicht (so) gut./Schlecht.
– Ich freue mich, dass du kommst.
– Der Film ist sehr gut.
– Bis du mit dem neuen Lehrer zufrieden?
Ja, es geht. Nein, gar nicht.
– Ich bin sehr zufrieden mit meinem neuen
Motorrad.
– Ich habe keine Lust mehr.
– Ich habe mich sehr geärgert, weil er mich
nicht eingeladen hat.
*/
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
                            { value: 'Ich mag diese Stadt nicht.', level: 'a1', copyright: c2 }
                        ]
/*
– Gefällt dir mein Pullover? Ja, der ist toll/
Nein, ich finde den Pullover nicht schön.
– Ich finde den Film langweilig/lustig.
– Ja, die CD ist toll/fantastisch/wunderbar./
Nein, ich finde sie nicht gut.
– Ich finde den Roman spannend/langweilig.
– Ich bin zufrieden.
– Ich finde die Stadt hübsch/hässlich.
– Ist das nicht toll?
– Das mag ich sehr gerne/gar nicht.
– Das ist doch Unsinn.
– Das kann man doch nicht machen.
– Physik ist mein Lieblingsfach.
                        */
                    },
                    {
                        groupId: 'Interesse/Desinteresse',
                        translate: ['Interesse: intérêt', 'Desinteresse: désintérêt'],
                        entries: [
                            { value: 'Gefallen dir die Geschenke?', level: 'a1', copyright: c2 },
                            { value: '– Ja klar.', level: 'a1', copyright: c2 },
                            { value: '– Na ja, es geht.', level: 'a1', copyright: c2 },
                            { value: '– Nicht so.', level: 'a1', copyright: c2 },
                            { value: 'Was sind deine Hobbys?', level: 'a1', copyright: c2 }
                        ]
                        /*
– Was sind deine Hobbys?
– Spielst du gern Fußball? Ja, sehr gern./
Nein.
– Was machst du in deiner Freizeit?
Am liebsten treffe ich meine Freunde.
– Gehst du gern ins Kino? Ja gern./
Nein, ich sehe lieber fern.
– Fußball interessiert mich nicht.
Ich finde Tennis interessant.
                        */
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
                            { value: 'Wie finden Sie das Lehrbuch?', level: 'a1', copyright: c2 },
                            { value: '– Es ist (sehr) interessant', level: 'a1', copyright: c2 },
                            { value: '– Es ist zu langweilig.', level: 'a1', copyright: c2 },
                            { value: 'So geht das nicht.', level: 'a1', copyright: c2 }
/*
                            – Wie findest du das?
                            – Ich finde das (nicht) gut.
                            – So geht das nicht!
                            */
                        ]
                    },
                    {
                        groupId: 'Zustimmung/Ablehnung',
                        translate: ['Zustimmung: approbation, consentement', 'Ablehnung: refus, rejet, récusation'],
                        entries: [
                            { value: 'Das stimmt (nicht).', level: 'a1', copyright: c2 },
                            { value: 'Das ist richtig.', level: 'a1', copyright: c2 },
                            { value: 'Das ist falsch.', level: 'a1', copyright: c2 }
                        ]
/*
– Ich bin einverstanden/nicht einverstanden.
– Das finde ich toll/langweilig.
– Das ist in Ordnung. Genau.
– Das ist eine tolle Idee.
– Stimmt das? Klar./Sicher./Natürlich./
Nein, das stimmt so nicht.
– Ich denke, das ist richtig/falsch.
Das finde ich auch/nicht.
                        */
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
                            { value: 'Ich brauche jetzt eine Pause.', level: 'a1', copyright: c2 }
/*
– Was wollen wir heute machen?
– Willst du in die Disco?
– Was wünschst du dir zum Geburtstag?
Ich wünsche mir/Ich hätte gern ein Handy.
– Ich wünsche dir viel Spaß.
– Ich möchte ein neues Fahrrad.
                            */
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
                            { value: '– Nichts, danke.', level: 'a1', copyright: c2 }
/*
– Hörst du lieber Rap oder Hip Hop?
Ich höre lieber Rap.
– Wohin fährst du am liebsten in den Ferien?
Am liebsten fahre ich ans Meer.
– Welcher Sport gefällt dir am besten?
Fußball gefällt mir am besten.
                            */
                        ]
                    },
                    {
                        groupId: 'Wichtigkeit',
                        translate: 'importance',
                        entries: [
                            { value: 'Ist das (wirklich) wichtig?', level: 'a1', copyright: c2 },
                            { value: '– Das ist (schon/sehr) wichtig.', level: 'a1', copyright: c2 },
                            { value: '– Nicht so wichtig.', level: 'a1', copyright: c2 }
/*
– Ist das wichtig? Das ist (sehr) wichtig./
Das ist nicht so wichtig.
– Dieses Wort ist wichtig.
– Muss das sein? Ja, sofort.
– Vergiss ja die CD nicht.
                            */
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
                            { value: 'Unsinn!', level: 'a1', copyright: c2 }
/*
– Nein!/Das mache ich nie!
– Die Antwort ist falsch.
– Ich glaube das nicht.
– Also, ich weiß nicht.
– Du hast nicht recht.
– Auf keinen Fall.
                            */
                       ]
                    },
                    {
                        groupId: 'Beschwerde',
                        translate: ['réclamation', 'plainte', 'doléance'],
                        entries: [
                            { value: 'Es ist zu warm hier!', level: 'a1', copyright: c2 },
                            { value: 'Das ist zu teuer!', level: 'a1', copyright: c2 },
                            { value: 'Entschuldigen Sie, die Heizung funktioniert nicht.', level: 'a1', copyright: c2 }
/*
– Das ist zu teuer.
– Es ist zu kalt.
– Der Automat geht nicht.
– Das Moped ist kaputt.
                            */
                        ]
                    },
                    {
                        groupId: 'Rechtfertigung/Begründung',
                        translate: ['Rechtfertigung: justification, légimitation', 'Begründung: motivation, justification'],
                        entries: [
                            { value: 'Warum kommst du nicht?', level: 'a1', copyright: c2 },
                            { value: '– Ich habe keine Zeit.', level: 'a1', copyright: c2 },
                            { value: 'Seine Mutter ist krank. Deshalb kommt er heute nicht.', level: 'a1', copyright: c2 }
/*
– Warum kommst du nicht?
Ich habe keine Lust.
– Sie ist krank. Deshalb bleibt sie zu Hause.
– Warum ...? Weil ich noch Hausaufgaben
machen muss.
                            */
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
                            { value: 'Das tut mir leid.', level: 'a1', copyright: c2 }
/*
– Das ist toll!
– Ja, das finde ich auch.
– Ich bin froh.
– Leider kann ich nicht kommen.
– Das tut mir leid.
– Der Sprachkurs macht mir viel Spaß.
– Ich freue mich, dass du kommst.
– Schön, dass du mitkommst.
– Schade, dass es morgen nicht klappt.
                            */
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
                            { value: '– Nein, nie.', level: 'a1', copyright: c2 }
/*
– Magst du Pizza? Ja, gern./
Nein, das schmeckt mir nicht.
– Isst du gern Fisch?
                            */
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
/*
– Ärgerst du dich über das Zeugnis?
Das ist mir ganz egal.
– Das interessiert mich nicht.
– Das ist mir doch gleich.
– Stört dich das nicht?
Da kann man nichts machen.
                            */
                        ]
                    },
                    {
                        groupId: 'Mitleid',
                        translate: ['compassion', 'pitié', 'apitoiement'],
                        entries: [
                            { value: '(Es) Tut mir (wirklich) (sehr) leid.', level: 'a1', copyright: c2 },
                            { value: 'Das finde ich aber traurig.', level: 'a1', copyright: c2 }
/*
– Das tut mir leid.
– Das finde ich traurig.
– Es tut mir so leid, dass du Zahnschmerzen
hast.
                            */
                        ]
                    },
/*
groupId: Schmerz
– Mein Kopf tut so weh.
– Ich habe Halsschmerzen.
– Ich habe starke Schmerzen.
                    */
                    {
                        groupId: 'Erstaunen/Überraschung',
                        translate: ['Erstaunen: étonnement', 'Überraschung: surprise, mauvaise surprise'],
                        entries: [
                            { value: 'Komisch!', level: 'a1', copyright: c2 },
                            { value: 'Das ist ja komisch!', level: 'a1', copyright: c2 },
                            { value: 'Wie komisch!', level: 'a1', copyright: c2 },
                            { value: '– Ja, sehr komisch.', level: 'a1', copyright: c2 }
/*
– Willst du das wirklich machen?
– Das ist ja toll!
– Das ist doch verrückt.
– Das ist aber komisch.
– Ja, wirklich komisch.
– Das kann ich nicht glauben.
– Das ist doch nicht möglich.
                            */
                        ]
                    },
                    {
                        groupId: 'Hoffnung',
                        translate: ['espoir', 'espérance'],
                        entries: [
                            { value: 'Hoffentlich regnet es nicht.', level: 'a1', copyright: c2 },
                            { value: 'Hoffentlich kommt bald der Bus.', level: 'a1', copyright: c2 }
/*
– Ich hoffe, du kommst heute.
– Hoffentlich finde ich das Heft.
– Ich hoffe, dass er heute pünktlich ist ...
                            */
                        ]
                    },
                    {
                      groupId: 'Sorge/Befürchtung',
                        translate: ['Sorge: souci, préocupation, inquiétude', 'Befürchtung: appréhension (de qc.)'],
                        entries: [
                            { value: 'Ich habe Angst.', level: 'a1', copyright: c2 },
                            { value: 'Schon 10 Uhr, und er ist immer noch nicht da.', level: 'a1', copyright: c2 }
/*
– Hast du Angst?
– Ich kann die Hausaufgaben nicht machen.
– Mach schnell. Es ist schon sehr spät.
– Was ist los?
– Wann antwortet er denn endlich?
– Warum ruft sie nicht an?
Hoffentlich ist nichts passiert.
                            */
                        ]
                    },
                    {
                        groupId: 'Enttäuschung',
                        translate: ['désenchantement', 'déception', 'désillusion'],
                        entries: [
                            { value: 'Was? Du bleibst zu Hause? Schade!', level: 'a1', copyright: c2 }
/*
– Warum kommst du nicht mit?
– Das ist aber schade!
– Schade, dass es nicht klappt.
– Da kann man (leider) nichts machen.
*/
                        ]
                    }
/*
groupId: Sympathie/Antipathie
– Ich mag Sabine (sehr) gern.
– Ich finde Frau Berger nicht sympathisch.
– Ich bin total in sie/ihn verliebt.
*/
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
                            { value: '– Es ist halb acht (Uhr).', level: 'a1', copyright: c2 }
/*
– Zeigst du mir deinen Computer?
Ja gern./Nein.
– Kann ich das Buch haben? Ja./
Nein, das ist nicht mein Buch.
– Wie spät ist es? Es ist halb acht.
– Mach bitte die Tür auf! Ja, sofort./
Nein, ich kann nicht.
– Gib mir bitte das Heft! Ja, gleich./
Nein, ich finde das Heft nicht.
– Könntest du mir helfen? Ja./ Sofort./
Vielleicht./ Jetzt nicht./ Nein, tut mir leid.
– Ich hätte gern eine CD von ...
                            */
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
                            { value: 'Genau (so).', translate: ['Absolument !', 'parfaitement !', 'tout à fait !'], level: 'a1', copyright: c2 }
/*
– Die Antwort ist richtig.
– Richtig? Ja!/Nein!/Doch!
– Ist das so richtig? Aber natürlich./
Klar./Sicher.
                            */
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
                            { value: '– Nein, danke.', level: 'a1', copyright: c2 }
/*
– Kann ich helfen?
– Ja, gern./Klar./Sicher./Danke./Nein danke.
– Wollen wir das zusammen machen?
Ja, du kannst mir helfen./Das ist lieb/nett./
Nein danke, ich kann es alleine.
                            */
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
                            { value: 'Gleich.', translate: 'tout de suite', level: 'a1', copyright: c2 }
/*
– Ich möchte nach Deutschland fliegen.
– Ich will morgen ins Schwimmbad.
– Ich hätte gern eine Fahrkarte.
– Kannst du mir bitte den Bleistift geben?
                            */
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
                            { value: 'Stopp!', level: 'a1', copyright: c2 }
/*
– Der Film ist wunderbar.
– Das Wasser ist zu kalt.
– Du musst gut aufpassen.
– Was soll ich machen?
– Schreib es auf! Mach es gleich! Pass auf!
– Das ist zu gefährlich.
– Sei vorsichtig! Achtung!
                            */
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
                            { value: '– Nein, hier ist Parken verboten.', level: 'a1', copyright: c2 }
/*
– Kann ich zu dir kommen? Ja./
Nein, heute nicht.
– Kann ich die CD haben? Ja./Nein.
– Darf man hier fahren? Ja, klar./
Nein, das ist verboten.
– Darfst du heute Abend weggehen?
Ja, meine Eltern erlauben das./
Nein, meine Mutter hat es verboten.
                            */
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
                            { value: '– Keine Lust', level: 'a1', copyright: c2 }
/*
– Gehen wir heute in die Disco? Ja, gern.
– Kommst du mit ins Schwimmbad?
Das ist eine tolle Idee./Nein, keine Lust.
– Darf ich etwas vorschlagen?
– Wollen wir die Hausaufgaben zusammen
machen? Einverstanden./
Ich bin dafür/dagegen.
                            */
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
                            { value: '– Ich mache es morgen.', level: 'a1', copyright: c2 },
                            { value: '– Das mache ich!', level: 'a1', copyright: c2 },
/*
– Ich komme nach der Schule.
– Morgen gehen wir zusammen zu Bodo.
– Wirklich? Versprochen?/Ganz sicher.
Bestimmt.
                            */
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
                            { value: 'Wann hast du (mal/denn) Zeit?', level: 'a1', copyright: c2 }
/*
– Hast du am Mittwoch Zeit? Ja, wann?/
Vielleicht./Ich weiß es nicht.
– Treffen wir uns um acht vor dem Kino?
Ja, das passt mir.
                            */
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
                            { value: 'Setzen Sie sich doch!', level: 'a1', copyright: c2 }
/*
– Kommst du heute zu mir? Ja, toll./
Nein, ich kann nicht./Es tut mir leid, aber
ich habe keine Zeit.
– Komm doch heute Nachmittag zu mir.
– Bleib doch noch ein bisschen.
– Komm rein./Setz dich!
– Ich lade dich zu meinem Geburtstag ein.
– Willst du mit mir essen?
                            */
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
/*
– Hallo!
– Michael!
– Heißt du Miriam? Nein, ich bin Michaela.
– Telefon: Hallo, ich bin es, Meike./
Guten Tag, kann ich mit Britta sprechen?
– Mail: Hallo ...
– Brief: Liebe/-r Meike/ Micha, ...
Liebe Frau/Lieber Herr Maier, ...
                            */
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
                                    { value: '– Nein, hier ist ...', level: 'a1', copyright: c2 }
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
                            { value: '– Grüß Gott!', level: 'a1', copyright: c2 }
/*
– Guten Tag/Hallo, Bodo.
– Hi, Marika.
– Guten Morgen/Tag/Abend.
– Gute Nacht, Silke.
– Hallo, wie geht es dir? Danke, (sehr) gut/
es geht.
– Und dir?
– Herzlich willkommen!
– Viele Grüße von Angelika.
                            */
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
                            { value: '– Ah ja. Ich bin Johanna Hauser.', level: 'a1', copyright: c2 }
/*
– Ich heiße Nina.
– (Hallo) Ich bin Marko.
– Ich bin Marco Gellner.
– Mein Name ist Erkan.
– Mein Name ist Erkan Özlem.
– Das ist Anna.
– Sie heißt Pia.
– Kennst du Micha? Ja klar/natürlich./
Nein, noch nicht.
                            */
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
                            { value: 'Geht es Ihnen gut?', level: 'a1', copyright: c2 },
                            { value: '– Ja, super.', level: 'a1', copyright: c2 },
                            { value: '– Na ja, es geht!', level: 'a1', copyright: c2 },
                            { value: '– Ach, nicht so gut.', level: 'a1', copyright: c2 },
/*
– Wie geht es dir? Gut./Nicht so gut./Schlecht.
– Geht es dir gut? Ja, super./
Nein, nicht so gut.
– Ich bin heute (nicht) fit. Prima!/
Was ist los?/Was ist passiert?/Was hast du?
                            */
                        ]
                    },
                    {
                        groupId: 'gute Wünsche',
                        translate: 'bons voeux',
                        entries: [
                            { value: 'Alles Gute.', translate: ['Mes meilleurs vœux !', 'toutes sortes de bonnes choses'], level: 'a1', copyright: c2 },
                            { value: 'Schöne Ferien!', level: 'a1', copyright: c2 },
                            { value: 'Gut gemacht!', level: 'a1', copyright: c2 },
                            { value: 'Prost!', level: 'a1', copyright: c2 }
/*
– Frohe Weihnachten!
– (Ich wünsche dir) schöne Ferien!
– Gute Reise!
– Guten Appetit!
– Viel Glück! *Viel Spaß!
– (Herzlichen) Glückwunsch!
– Frohe Weihnachten!
– Ich gratuliere dir zum Geburtstag!
                            */
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
                            { value: 'Das schmeckt gut.', translate: ["c'est bon", "celà a un bon goût"], level: 'a1', copyright: c2 }
                        ]
                    },
/*
grouoId: ein Kompliment machen
– Du bist toll.
– Tolle Frisur/Fantastisches Kleid!
– Du siehst gut/wunderbar aus.
– Das ist sehr nett/lieb/freundlich.
– Das ist wunderbar.
                    */
                    {
                        groupId: 'Dank',
                        translate: ['merci', 'remerciement'],
                        entries: [
                            { value: 'Danke (schön)!', level: 'a1', copyright: c2 },
                            { value: 'Herzlichen', level: 'a1', copyright: c2 },
                            { value: 'Vielen Dank.', level: 'a1', copyright: c2 },
                            { value: '– Ihnen auch.', level: 'a1', copyright: c2 },
                            { value: '– Danke, ebenfalls.', level: 'a1', copyright: c2 },
                            { value: '– (Aber) Bitte.', level: 'a1', copyright: c2 },
/*
– Danke, Dankeschön.
– Vielen Dank für dein Geschenk.
– Herzlichen Dank.
*/
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
/*
– Entschuldigung.
– Kein Problem.
– Das tut mir sehr/schrecklich/furchtbar leid.
– Das macht nichts.
                            */
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
/*
– Tschüss!
– Bis bald/später!
– Auf Wiedersehen.
– Brief: Viele/herzliche/liebe Grüße.
                            */
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
                                    { value: 'Mit freundlichen Grüßen', level: 'a1', copyright: c2 }
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
