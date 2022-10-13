/* 
Erstelle eine Formular, um das Alter von zwei Leuten zu vergleichen.

Nutze zwei Input Felder.
Nutze einen Button, der eine Funktion aufruft.
Definiere eine Funktion, die die Differenz in Jahren ausgibt.
Gib die Differenz in deinem HTML aus.

Hinweise
gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt

*/

function differenz(event) {
    event.preventDefault();

let alter1 = document.getElementById("alterOne").value;
let alter2 = document.getElementById("alterTwo").value;

let berechne = alter1 - alter2;
document.getElementById("para").innerHTML= berechne;


console.log(alter1)



}




