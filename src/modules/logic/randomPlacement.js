import { gameControl } from "./gamecontrol";

function randomPlacement() {
    const game = gameControl();
    const shipLengths = [5, 4, 3, 3, 2];

    shipLengths.forEach((shipLength) => {
        while (true) {
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            try {
                game.shipsPlacement(randomX, randomY, shipLength, Math.random() < 0.5);
                break;
            } catch {
                continue;
            }
        }
    });
    return game;
}

export { randomPlacement };