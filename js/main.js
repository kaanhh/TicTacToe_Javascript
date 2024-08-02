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
    const gewinnerText = document.getElementById('gewinner-text');

    
    const neustartButton = document.getElementById('neustart');
    neustartButton.addEventListener('click', ()=> {
        board.resetSpiel();
        
        gewinnerText.textContent = 'Noch kein Gewinner';
        gewinnerText.style.display = 'none';
    });

    board.cells = cells;

    cells.forEach(cell => {
        cell.addEventListener('click', event => {
            if (event.target.textContent === '' && !game.isGameOver()) {
                event.target.textContent = currentPlayer.symbol;

                const gewinner = board.pruefeGewinn();
                if (gewinner) {
                    console.log(`Spieler ${gewinner} hat gewonnen!`);
                    gewinnerText.textContent = `Spieler ${gewinner} hat gewonnen!`;
                    gewinnerText.style.display = 'block';
                    return;
                }

                currentPlayer = (currentPlayer === spielerX) ? spielerO : spielerX;
            }
        });
    });
}
