title Fullstack open 2022 tehtävä 0.4
selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over palvelin: 
palvelin lisää uuden 
noten tietorakenteeseen
end note

palvelin-->selain: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{content: "go to shaking", date: "2022-04-21T23:57:40.913Z"}, ...]
note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note