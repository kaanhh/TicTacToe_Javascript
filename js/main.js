import { Spieler } from "./Spieler.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";

const spielerX = new Spieler('X');
const spielerO = new Spieler('O');

let currentPlayer = spielerX;

window.addEventListener('DOMContentLoaded', setzeZeichen);

//0. Funktion erstellen, die mit querySelectorAll alle .cell Elemente speichert
//1. Alle Cellen mit einer forEach durchlaufen
//2. WENN das event.target also angeklickte Element leer ist mit ===, dann führe aus
//3. Es soll das aktuelle Zeichen gesetzt werden. 
//4  WENN "aktueller Spieler Spieler X ist, soll umgewandelt werden auf SpielerO"
//5. Andernfalls wieder SpielerX setzen

//Spielzüge X und O werden platziert
function setzeZeichen(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {     
        cell.addEventListener('click', event => {
            if(event.target.textContent === ''){
                event.target.textContent = currentPlayer.symbol;
                if(currentPlayer == spielerX){
                    currentPlayer = spielerO; 
                }else{
                    currentPlayer = spielerX;
                }
            } 
        });
    });
}

