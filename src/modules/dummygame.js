import { gameControl } from "./logic/gamecontrol";


function dummyGame() {
    const game = gameControl();
    game.shipsPlacement(3, 2, 3, true);
    game.shipsPlacement(5, 5, 2, false);
    game.shipsPlacement(0, 0, 4, true);

    game.playRound(3, 2);
    game.playRound(1, 1);
    game.playRound(0, 1);

    return game;
}



export { dummyGame }