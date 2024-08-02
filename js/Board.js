export class Board{

    constructor(game){
        this.cells = [];
        this.game = game;
    }
  
    resetSpiel() {
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.style.backgroundColor = ''; 
        });
        this.game.resetGameOver();
    }

    markiereGewinnzellen(a, b, c) {
        this.cells[a].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        this.cells[b].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        this.cells[c].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }

    //Überprüfe ob drei Steine nebeneinander oder diagonal gesetzt wurden
        //1. Die Gewinnmuster als Array definieren
        //2. Durch jedes Gewinnmuster Iterieren mit for, damit überprüft werden kann, ob dieser case zugetroffen ist
        //2.1Dieser Case soll bei Zutreffen dann das Spiel stoppen 
        //3. Wenn keine Gewinnzahl getroffen gib Null zurück
        //4. Wenn Gewinn gefunden wurde, soll der Gewinner als Text ausgegeben werden und die 3 Felder farblich markiert

    pruefeGewinn(){
        const gewinnPattern = [
            [0, 1, 2], // Erste Reihe
            [3, 4, 5], // Zweite Reihe
            [6, 7, 8], // Dritte Reihe
            [0, 3, 6], // Erste Spalte, oben nach unten
            [1, 4, 7], // Zweite Spalte, oben nach unten
            [2, 5, 8], // Dritte Spalte, oben nach unten
            [0, 4, 8], // Diagonale von oben links nach unten rechts
            [2, 4, 6]  // Diagonale von oben rechts nach unten links
        ];

        // Iteriere durch jedes Gewinnmuster
        for (let i = 0; i < gewinnPattern.length; i++) {
        // Hole die drei Positionen aus dem aktuellen Gewinnmuster
        const [a, b, c] = gewinnPattern[i];

        // Überprüfe, ob die drei Zellen dasselbe Symbol haben und nicht leer sind
        if (this.cells[a].textContent && 
            this.cells[a].textContent === this.cells[b].textContent && 
            this.cells[a].textContent === this.cells[c].textContent) {
            this.markiereGewinnzellen(a, b, c);
            this.game.setGameOver();
            return this.cells[a].textContent;
        }
    }

    // Wenn keiner gewonnen hat, gib null zurück
    return null;
}
    
    //Überprüfe ob Feld voll ist

}