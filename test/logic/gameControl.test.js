import { gameControl } from "../../src/modules/logic/gamecontrol";

describe("gameControl", () => {
    test("defined", () => {
        expect(gameControl).toBeDefined();
    });

    test("place ship in game", () => {
        const game = gameControl();
        game.placeShips(3, 2, 3, true);
        expect(game.getPlayer.board.getBoard[3][2].hasShip()).toBe(true);
    });

    // test("play turn", () => {
    //     const game = gameControl();
    //     game.placeShips(3, 2, 1, true);

    //     game.playRound(3, 2);
    //     expect(game)

    // });
})