export class Game{
    
    constructor(){
        this.gameOver = false;
    }

    setGameOver(){
        this.gameOver = true;
    }

    resetGameOver(){
        this.gameOver = false;
    }

    isGameOver(){
        return this.gameOver;
    }
    
}
