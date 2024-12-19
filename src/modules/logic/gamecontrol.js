import { Player } from "./player";
import { Ship } from "./ship";

function gameControl() {
    const humanPlayer = new Player();
    const cpuPlayer = new Player();
    cpuPlayer.setAsComputer();

    const placeShips = (x, y, shipLength, direction) => {
        const playerShip = new Ship(shipLength);
        humanPlayer.placeShips(x, y, playerShip, direction);

        const cpuShip = new Ship(shipLength);
        let cpuAttempt = true;
        while (cpuAttempt) {
            const randomX = Math.floor(Math.random() * 10) - 1;
            const randomY = Math.floor(Math.random() * 10) - 1;
            try {
                cpuPlayer.placeShips(randomX, randomY, cpuShip, Math.random() < 0.5);
                cpuAttempt = false;
            } catch {
                continue;
            }
        }
    }

    const getPlayer = () => humanPlayer;
    const getCpu = () => cpuPlayer;

    const playRound = (x, y) => {
        // human turn
        cpuPlayer.board.receiveAttack(x, y);
        if (cpuPlayer.board.gameOver) {
            return "player";
        }

        //cpu turn
        let attempt = true;
        while (attempt) {
            const randomX = Math.floor(Math.random() * 10) - 1;
            const randomY = Math.floor(Math.random() * 10) - 1;
            try {
                humanPlayer.board.receiveAttack(randomX, randomY);
                attempt = false;
            } catch (err) {
                continue;
            }
        }
        if (humanPlayer.board.gameOver) {
            return "cpu";
        }

    }
    return { playRound, placeShips, getPlayer, getCpu }
}

export { gameControl }