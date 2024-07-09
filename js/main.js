import { Spieler } from "./Spieler.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";

const spielerX = new Spieler('X');
const spielerO = new Spieler('O');

let currentPlayer = spielerX;

window.addEventListener('load', setzeZeichen);

//Spielzüge X und O werden platziert
function setzeZeichen(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach(function(cell) {     
        cell.addEventListener('click', function(event) {
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


