import { gameControl } from "../../src/modules/logic/gamecontrol";

describe("gameControl", () => {
    test("defined", () => {
        expect(gameControl).toBeDefined();
    });

    test("place ship in game", () => {
        const game = gameControl();
        expect(game.placeShips(3, 2, 3, true));
    });

    test("play turn", () => {
        const game = gameControl();
        game.placeShips(3, 2, 1, true);
        game.placeShips(5, 7, 2, false);

        game.playRound(3, 2);

    });
})