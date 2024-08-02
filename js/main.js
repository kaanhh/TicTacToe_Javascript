import { Spieler } from "./Spieler.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";

const spielerX = new Spieler('X');
const spielerO = new Spieler('O');

let currentPlayer = spielerX;

const game = new Game();
const board = new Board(game);

window.addEventListener('DOMContentLoaded', setzeZeichen);

function setzeZeichen() {
    const cells = document.querySelectorAll('.cell');
    
    const neustartButton = document.getElementById('neustart');
    neustartButton.addEventListener('click', ()=> {
        board.resetSpiel();
    });

    board.cells = cells;

    cells.forEach(cell => {
        cell.addEventListener('click', event => {
            if (event.target.textContent === '' && !game.isGameOver()) {
                event.target.textContent = currentPlayer.symbol;

                const gewinner = board.pruefeGewinn();
                if (gewinner) {
                    console.log(`Spieler ${gewinner} hat gewonnen!`);
                    // Hier können Sie zusätzliche Logik hinzufügen, z.B. das Spiel beenden oder die Felder farblich markieren
                    return;
                }

                currentPlayer = (currentPlayer === spielerX) ? spielerO : spielerX;
            }
        });
    });
}
