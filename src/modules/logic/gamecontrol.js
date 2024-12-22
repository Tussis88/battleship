import { Player } from "./player";
import { Ship } from "./ship";

function gameControl() {
    const humanPlayer = new Player();
    const cpuPlayer = new Player();
    cpuPlayer.setAsComputer();

    const shipsPlacement = (x, y, shipLength, direction) => {
        const playerShip = new Ship(shipLength);
        humanPlayer.board.placeShip(x, y, playerShip, direction);

        const cpuShip = new Ship(shipLength);
        let cpuAttempt = true;
        while (cpuAttempt) {
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            try {
                cpuPlayer.board.placeShip(randomX, randomY, cpuShip, Math.random() < 0.5);
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
        console.log(cpuPlayer.board.gameOver);
        if (cpuPlayer.board.gameOver) {
            return "player";
        }

        //cpu turn
        let attempt = true;
        while (attempt) {
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
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
    return { playRound, shipsPlacement, getPlayer, getCpu }
}

export { gameControl }
