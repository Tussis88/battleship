import { Player } from "./player";
import { Gameboard } from "./gameboard";

function gameControl() {
    const humanPlayer = new Player();
    const cpuPlayer = new Player();
    cpuPlayer.setAsComputer();

    const playRound = (x, y) => {
        humanPlayer.board.receiveAttack(x, y);
        if (cpuPlayer.board.gameOver) {
            return false;
        }

        // turno del pc qui. con funzione per gestire un attacco random.
    }
}