
window.onload = scritta;

var contatore = 0;
var testo = 'ULTIME NOTIZIE';
var velocita = 200;

function scritta() {
    if (contatore < testo.length) {
        document.getElementById("titolo").innerHTML += testo.charAt(contatore);
        contatore++;
        setTimeout(scritta, velocita);
    } else {
        setTimeout(ricomincia, 5000);
    }

}
function ricomincia() {
    document.getElementById("titolo").innerHTML = "";
    contatore = 0;
    scritta();
}


