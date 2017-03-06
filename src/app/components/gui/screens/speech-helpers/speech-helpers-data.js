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
        groupId: 'Allgemeine Begriffe',
        entries: [
            {
                groupId: 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken',
                entries: [
                    {
                        groupId: '(nicht) sein',
                        entries: [
                            { value: 'Gibt es hier einen Kindergarten?', level: 'a1', copyright: c2 },
                            { value: '– Nein, es gibt nur eine Grundschule.', level: 'a1', copyright: c2 },
                            { value: 'Hier gibt es aber viele Kinos.', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    }
    /*
            let thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) sein'];
            entries.push(new Builder().id('d61ab341-bd1e-43e9-a236-1f4e7f02b278').thema(thema).entry(['Gibt es hier einen Kindergarten?', '– Nein, es gibt nur eine Grundschule.']).get());
            entries.push(new Builder().id('38b0eee2-4d43-4140-82ba-ba364c5b4968').thema(thema).entry('Hier gibt es aber viele Kinos.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'anwesend/abwesend sein'];
            entries.push(new Builder().id('f534fe27-b0bd-4ded-abd9-de139673ade2').thema(thema).entry(['Ist Elke da?', '– Ja./Nein, leider nicht.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) verfügbar sein'];
            entries.push(new Builder().id('98cf6007-169c-4959-888f-5d9cafd40a46').thema(thema).entry(['Hast du ein Auto?', '– Nein, leider nicht.', '– Nein, ich habe kein Auto.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', '(nicht) vorkommen'];
            entries.push(new Builder().id('c4c0413a-6927-4a08-9a76-348d7b27e6e4').thema(thema).entry('Was ist passiert?').get());
            entries.push(new Builder().id('a9f010f7-ab7e-479d-b2d4-bdaf8dcbd5ba').thema(thema).entry('Wann ist das passiert?').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Inklusion/Exklusion'];
            entries.push(new Builder().id('07efa5e1-3206-493d-a5b9-e9e1171140a2').thema(thema).entry('Ich komme mit meiner Freundin.').get());
            entries.push(new Builder().id('6fbe2d67-5bd7-46b1-9518-41211336d9fd').thema(thema).entry('Er kommt ohne Auto.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Existenz von Personen und Dingen, Besitz/Zugehörigkeit ausdrücken', 'Besitz/Zugehörigkeit'];
            entries.push(new Builder().id('10aa9ef7-37cd-4c0d-80be-8d02e7c9cb6a').thema(thema).entry(['Wem gehört der Mercedes?', '– Das ist mein/dein/sein/ihr Auto.']).get());
            entries.push(new Builder().id('8d200679-9584-4c05-94e2-c2cc9d5f450a').thema(thema).entry('Simon arbeitet jetzt bei Siemens.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Ort'];
            entries.push(new Builder().id('d73e9bca-16b6-449f-9200-6db680faa87e').thema(thema).entry(['Wo wohnst du?', '– In Köln.', '– Ich wohne jetzt bei Petra.']).get());
            entries.push(new Builder().id('2be6c907-9e93-4bc1-bd64-f571e459150e').thema(thema).entry(['Wo ist denn meine Brille?', '– Hier.', '– Dort.', '– Da ist sie ja.']).get());
            entries.push(new Builder().id('e16b7a41-fe7b-499f-a0ca-1b86fdf4dfc5').thema(thema).entry(['Wo sind die Kinder?', '– Zu Hause.', '– In der Schule.']).get());
            entries.push(new Builder().id('632c42f9-10ae-4dc0-877d-8468b00d47fd').thema(thema).entry(['Wo liegt ...?', '– Kiel liegt an der Ostsee.', '– Die Schlüssel liegen auf dem Tisch.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Herkunft'];
            entries.push(new Builder().id('b217eae2-48af-4255-9a73-a38073f04eae').thema(thema).entry(['Woher kommst du?', '– Aus der Ukraine.', '– Aus Prag.', '– Vom Arzt.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Richtung'];
            entries.push(new Builder().id('5ef39bb5-0c83-4258-b8c1-796b277b9032').thema(thema).entry(['Wohin gehst du?', 'Wohin fährst du?', '– Nach Hause.', '– Zur Arbeit.', '– In die Schule.', '– Zu Susi.', '– Auf die Bank.', '– Ans Meer.', '– Nach Österreich.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Raum definieren', 'Distanz'];
            entries.push(new Builder().id('f415487e-eefc-4e5f-af47-b324d1f4ca5e').thema(thema).entry(['Wie weit ist es bis Bonn?', '– Nur zehn Kilometer.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zeitpunkt'];
            entries.push(new Builder().id('d0149e0e-fd9d-407a-963e-02984e3f20d8').thema(thema).entry(['Wann kommst du?', '– Um 3 (Uhr).', '– Am 20. September.', '– Im Juli.']).get());
            entries.push(new Builder().id('c51c2744-299d-4041-9840-80b3acc2b3c2').thema(thema).entry(['Wie spät ist es bitte?', '– Es ist jetzt 7 Uhr .']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zeitangaben'];
            entries.push(new Builder().id('0591f36d-55e1-434e-9f96-8ad20ad3bb97').thema(thema).entry(['Wann sind Sie geboren?', '– Am 12. Mai 1988.']).get());
            entries.push(new Builder().id('5f992da2-af53-4c41-a302-462942f62943').thema(thema).entry('Wir fahren im Mai in Urlaub.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Vorzeitigkeit'];
            entries.push(new Builder().id('4cff3a4d-0a32-4a51-811d-f6ee419cf10a').thema(thema).entry('Komm bitte vor 10 Uhr.').get());
            entries.push(new Builder().id('b5d754c1-5745-4643-bdd0-3b47f388b6b9').thema(thema).entry('Wir sind (zu) früh .').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Nachzeitigkeit'];
            entries.push(new Builder().id('9ea3f416-f092-4c86-b415-c2de3bf5cd58').thema(thema).entry('Bitte nach 23 Uhr nicht mehr anrufen.').get());
            entries.push(new Builder().id('52122611-1e51-4a8a-98b9-7a7a9a2aa7d3').thema(thema).entry('Wir sind leider zu spät .').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Zukunftsbezug'];
            entries.push(new Builder().id('209b9c06-388b-4462-a6ad-49a3ba82d4e2').thema(thema).entry('Morgen muss ich arbeiten.').get());
            entries.push(new Builder().id('57bd0bae-e4aa-4966-8285-cf56a750c62b').thema(thema).entry('Wir machen das bald/später .').get());
            entries.push(new Builder().id('a5f33626-3cf0-4359-899b-a51d0af16c36').thema(thema).entry('Heute Abend rufe ich dich an.').get());
            entries.push(new Builder().id('064c6fa6-5128-411e-810b-c6dfa0ff4ec1').thema(thema).entry('Am Montag gehen wir ins Kino.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Gegenwartsbezug'];
            entries.push(new Builder().id('d7a874ee-db25-4398-bb00-28fd0d42e862').thema(thema).entry('Wir essen jetzt .').get());
            entries.push(new Builder().id('548d4368-137e-4359-8505-8fb7c06309df').thema(thema).entry('Ich bin schon da.').get());
            entries.push(new Builder().id('694e99d5-4b65-41d7-9330-e2cb1c5d03cb').thema(thema).entry('Er ist heute in Mainz.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Vergangenheitsbezug'];
            entries.push(new Builder().id('52e865ef-83b4-4fa8-9d84-ccc9f52ab966').thema(thema).entry('Gestern/vor zwei Tagen habe ich die Prüfung gemacht.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Verspätung/Frühzeitigkeit'];
            entries.push(new Builder().id('ae5533b4-2a30-4a8a-88cd-1faa94ed4751').thema(thema).entry('Es ist schon spät .').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Dauer'];
            entries.push(new Builder().id('84424875-add6-4661-9f3e-9d22581b49a4').thema(thema).entry(['Wie lange bleibt ihr in Berlin?', '– Drei Wochen.', '– (Nicht) Lange.', '– Bis Montag.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Beginn'];
            entries.push(new Builder().id('f9de84c5-bbc7-43aa-93e3-cd9133cee725').thema(thema).entry(['Wann beginnt der Film?', '– Um 20 Uhr fängt er an .']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Ende'];
            entries.push(new Builder().id('f265545e-3683-46cf-bcdc-07460e123eda').thema(thema).entry(['Bis wann arbeitest du?', '– Heute bis 18 Uhr.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Zeit angeben', 'Häufigkeit'];
            entries.push(new Builder().id('da5a5eb5-23b3-4f87-a083-ed99a1fa07b6').thema(thema).entry(['Wie oft geht sie ins Kino?', '– Zweimal im Monat.', '– Nie!', '– Oft.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Zahlen/Mengenangaben'];
            entries.push(new Builder().id('41941a44-bb2d-4330-b5a9-f4c6e83ffc2b').thema(thema).entry(['Was/Wie viel kostet die Zeitung?', '– Vier Euro.']).get());
            entries.push(new Builder().id('cb4d2aaf-98a3-4a7f-b4f2-32a03ce21bed').thema(thema).entry(['Was darf‘s denn sein?', '– Ein Pfund Tomaten, bitte.', '– Ein Glas Milch, bitte.', '– Eine Flasche Wein, bitte.', '– Eine Tasse Tee, bitte.', '– 1,5 Liter, bitte.']).get());
            entries.push(new Builder().id('7bf02814-ffd8-4313-a3ad-93b68a5bae18').thema(thema).entry(['Wie viel möchten Sie?', '– (Nicht) Alles.', '– Viel.', '– Ein bisschen, bitte.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Grad'];
            entries.push(new Builder().id('352ebb06-cdf2-4691-9da6-02c45cfee1b3').thema(thema).entry('Das ist sehr/zu gefährlich.').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Quantität angeben', 'Dimension/Maßangabe'];
            entries.push(new Builder().id('ffd7295e-58e9-4c50-b77b-a6bb641b1306').thema(thema).entry(['Wie lang/groß ...?', '– 1,5 Meter.']).get());
            entries.push(new Builder().id('a09246e3-248a-4fc9-aede-f101ea3c952a').thema(thema).entry(['Wie schwer ...?', '– 500 Gramm.', '– 2 Kilo(gramm).']).get());
            entries.push(new Builder().id('8e4fc4bb-909e-4393-91df-0450715ddf8e').thema(thema).entry(['Wie warm ...?', '– 20 Grad.', '– Sehr warm.', '– Nicht kalt.']).get());
            entries.push(new Builder().id('113c9843-822b-41bc-9988-7373e175a5cd').thema(thema).entry(['Wie viel ...?', '– Einen Liter.']).get());
            entries.push(new Builder().id('3dacbb00-d34c-4d9b-8b91-25937a123100').thema(thema).entry(['Wie schnell ...?', '– Nur maximal 60 km/h.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'physisch'];
            entries.push(new Builder().id('e7e3e9c3-5062-48ee-a556-ec1d89a6cf30').thema(thema).entry(['Wie schmeckt das Essen?', 'Wie riecht das Essen?', '– Wirklich gut.', '– Wirklich nicht gut.']).get());
            entries.push(new Builder().id('2c4e672b-59a9-4a39-b7c8-2867c3a1aa42').thema(thema).entry(['Welche Farbe hat das Auto?', '– Es ist rot.', '– Es ist blau.', '– Es ist grün.', '– Es ist gelb.', '– Es ist schwarz.', '– Es ist weiß.', '– Es ist braun.']).get());
            entries.push(new Builder().id('e9a35f28-c8d0-4838-bb44-ec743cd5b74f').thema(thema).entry(['Die Tür ist offen.', 'Die Tür ist geschlossen.']).get());
            entries.push(new Builder().id('f3b8f37d-a025-4503-ad72-77316f5bbc64').thema(thema).entry(['Wie alt ist Dieter?', '– Nicht sehr alt.', '– Schon 60.', '– Erst 50.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'Wertung'];
            entries.push(new Builder().id('920f206b-434d-4a5d-99e6-8d6dc0ddc97f').thema(thema).entry(['(Wert/Preis?)', '– (nicht) teuer/billig']).get());
            entries.push(new Builder().id('46c7369b-46e7-4457-8b06-fe607c940574').thema(thema).entry(['(Qualität?)', '– (nicht) (sehr) gut']).get());
            entries.push(new Builder().id('f796ea02-0777-467c-be1a-52eec68d642d').thema(thema).entry(['(akzeptabel?)', '(adäquat?)', '– (nicht) in Ordnung', '– (nicht) in Ordnung, genug']).get());
            entries.push(new Builder().id('6b200c3e-5922-4195-b113-bfde26f3cc64').thema(thema).entry(['(richtig?)', '– (nicht) richtig']).get());
            entries.push(new Builder().id('55e3b19e-dbbd-4c52-b30b-da9228d62880').thema(thema).entry(['(Fähigkeit?)', '– (nicht) können']).get());
            entries.push(new Builder().id('cab900a1-4c65-49c5-91ef-f81e0ab531c2').thema(thema).entry(['(Wichtigkeit?)', '– (nicht) wichtig', 'wie wichtig?']).get());
            entries.push(new Builder().id('69ddcb61-63b2-47c8-8e4b-46c795a2426e').thema(thema).entry(['(Normalität?)', '– (nicht) normal']).get());
            entries.push(new Builder().id('02db56c6-0026-4f51-83be-e6491c50d9f9').thema(thema).entry(['(Schwierigkeit?)', '– (nicht) leicht']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Art und Weise angeben', 'Vergleich'];
            entries.push(new Builder().id('a93bf30f-ee1c-44c0-9252-541e1b9d7595').thema(thema).entry(['Spielst du Fußball?', '– Ja, wie meine Schwester.']).get());
            entries.push(new Builder().id('977bb41c-27f5-4158-8afb-bee0e9749b1d').thema(thema).entry(['Sie ist so alt wie ich.', 'Wir sind gleich alt.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Grund'];
            entries.push(new Builder().id('f493c962-a899-4e4d-8838-a76f131bb374').thema(thema).entry(['Warum kommt er nicht mit zur Party?', '– Er kann nicht. Er arbeitet heute lange.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Bedingung'];
            entries.push(new Builder().id('87e78823-7d20-4311-acc0-6bda2ce1aa49').thema(thema).entry(['Kann ich das Auto haben?', '– Ja, aber nur für eine Stunde.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Logische Verknüpfung herstellen', 'Aufzählung/Alternative'];
            entries.push(new Builder().id('0625d50e-be98-418a-8cee-a6d6f68abb2c').thema(thema).entry('Er isst und trinkt gern.').get());
            entries.push(new Builder().id('ab49a78b-a21c-46bf-b046-710f30d47099').thema(thema).entry('Möchtest du Wasser oder Wein?').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Fähigkeit'];
            entries.push(new Builder().id('ef8760ae-3e1c-4006-9ec7-3e9d06ce1c27').thema(thema).entry(['Können Sie Russisch (sprechen)?', '– Ja klar.', '– Sicher.']).get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Möglichkeit'];
            entries.push(new Builder().id('2b35b4e9-2d15-44f4-ad78-5375dfef5406').thema(thema).entry('Können Sie morgen kommen?').get());

            thema = ['Allgemeine Begriffe (Notionen)', 'A1', 'Modales ausdrücken', 'Notwendigkeit/Verpflichtung'];
            entries.push(new Builder().id('a2d07e96-9fcb-40e4-83e7-6ae146b1bdc0').thema(thema).entry('Mein Sohn muss um 8 Uhr zu Hause sein.').get());
*/
];


export {data as default};
