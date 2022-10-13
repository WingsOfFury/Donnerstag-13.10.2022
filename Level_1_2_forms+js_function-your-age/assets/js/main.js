/*
Eine Formular zur Berechnung deines Alters.

Erstelle ein Formular, in dem du dein Geburtsjahr eingeben kannst.

Nutze einen Button, der eine Funktion aufruft.
Definiere eine Funktion, die dein Alter in Jahren ausgibt.
Gib dein Alter in deinem HTML aus.

Hinweise
gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt
*/




function birthday(event) {
    event.preventDefault();
    const number = document.getElementById("number").value;

    let zahl = number;
    let calculate = 2022 - zahl;


    document.getElementById("output").innerHTML = calculate;
    


}

