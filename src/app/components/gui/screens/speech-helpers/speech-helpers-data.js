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
                        entries: [
                            { value: 'Gibt es hier einen Kindergarten?', level: 'a1', copyright: c2 },
                            { value: '– Nein, es gibt nur eine Grundschule.', level: 'a1', copyright: c2 },
                            { value: 'Hier gibt es aber viele Kinos.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'anwesend/abwesend sein',
                        entries: [
                            { value: 'Ist Elke da?', level: 'a1', copyright: c2 },
                            { value: '– Ja./Nein, leider nicht.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '(nicht) verfügbar sein',
                        entries: [
                            { value: 'Hast du ein Auto?', level: 'a1', copyright: c2 },
                            { value: '– Nein, leider nicht.', level: 'a1', copyright: c2 },
                            { value: '– Nein, ich habe kein Auto.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '(nicht) vorkommen',
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
                entries: [
                    {
                        groupId: 'Zeitpunkt',
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
                        entries: [
                            { value: 'Wann sind Sie geboren?', level: 'a1', copyright: c2 },
                            { value: '– Am 12. Mai 1988.', level: 'a1', copyright: c2 },
                            { value: 'Wir fahren im Mai in Urlaub.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vorzeitigkeit',
                        entries: [
                            { value: 'Komm bitte vor 10 Uhr.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind (zu) früh.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Nachzeitigkeit',
                        entries: [
                            { value: 'Bitte nach 23 Uhr nicht mehr anrufen.', level: 'a1', copyright: c2 },
                            { value: 'Wir sind leider zu spät.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zukunftsbezug',
                        entries: [
                            { value: 'Morgen muss ich arbeiten.', level: 'a1', copyright: c2 },
                            { value: 'Wir machen das bald/später .', level: 'a1', copyright: c2 },
                            { value: 'Heute Abend rufe ich dich an.', level: 'a1', copyright: c2 },
                            { value: 'Am Montag gehen wir ins Kino.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Gegenwartsbezug',
                        entries: [
                            { value: 'Wir essen jetzt.', level: 'a1', copyright: c2 },
                            { value: 'Ich bin schon da.', level: 'a1', copyright: c2 },
                            { value: 'Er ist heute in Mainz.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Vergangenheitsbezug',
                        entries: [
                            { value: 'Gestern/vor zwei Tagen habe ich die Prüfung gemacht.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Verspätung/Frühzeitigkeit',
                        entries: [
                            { value: 'Es ist schon spät.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Dauer',
                        entries: [
                            { value: 'Wie lange bleibt ihr in Berlin?', level: 'a1', copyright: c2 },
                            { value: '– Drei Wochen.', level: 'a1', copyright: c2 },
                            { value: '– (Nicht) Lange.', level: 'a1', copyright: c2 },
                            { value: '– Bis Montag.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Beginn',
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
                entries: [
                    {
                        groupId: 'Grund',
                        entries: [
                            { value: 'Warum kommt er nicht mit zur Party?', level: 'a1', copyright: c2 },
                            { value: '– Er kann nicht. Er arbeitet heute lange.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Bedingung',
                        entries: [
                            { value: 'Kann ich das Auto haben?', level: 'a1', copyright: c2 },
                            { value: '– Ja, aber nur für eine Stunde.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Aufzählung/Alternative',
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
                        entries: [
                            { value: 'Können Sie Russisch (sprechen)?', level: 'a1', copyright: c2 },
                            { value: '– Ja klar.', level: 'a1', copyright: c2 },
                            { value: '– Sicher.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Möglichkeit',
                        entries: [
                            { value: 'Können Sie morgen kommen?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Notwendigkeit/Verpflichtung',
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
                            { value: 'Dann, herzlichen Dank', level: 'a1', copyright: c2 },
                            { value: 'auf Wiedersehen.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'um das Wort bitten',
                        entries: [
                            { value: 'Moment bitte.', level: 'a1', copyright: c2 },
                            { value: 'Bitte!', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Zuhören signalisieren',
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
                        entries: [
                            { value: 'Ich esse gern Obst, zum Beispiel Orangen, Bananen und Erdbeeren.', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Höflichkeit',
                        entries: [
                            { value: 'Kann ich Sie etwas fragen?', level: 'a1', copyright: c2 },
                            { value: 'Darf ich Sie etwas fragen?', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: 'Abschwächung',
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
                                entries: [
                                    { value: 'Apotheke: Da kann man Medikamente kaufen.', level: 'a1', copyright: c2 }
                                ]
                            },
                            {
                                groupId: 'Rückfragen zur Verständniskontrolle',
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
    }
    /*
    ,
    {
        groupId: 'xyz',
        [
            {
                groupId: '',
                entries: [
                    {
                        groupId: '',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    },
                    {
                        groupId: '',
                        entries: [
                            { value: '', level: 'a1', copyright: c2 },
                            { value: '', level: 'a1', copyright: c2 }
                        ]
                    }
                ]
            }
        ]
    }

    */
];


export {data as default};
