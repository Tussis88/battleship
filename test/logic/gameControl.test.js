import { gameControl } from "../../src/modules/logic/gamecontrol";

describe("gameControl", () => {
    test("defined", () => {
        expect(gameControl).toBeDefined();
    });

    test("place ship in game", () => {
        const game = gameControl();
        game.shipsPlacement(3, 2, 3, true);
        expect(game.getPlayer().getBoard[3][2].hasShip()).toBe(true);
    });
    //
    test("play turn", () => {
        const game = gameControl();
        game.shipsPlacement(3, 2, 2, true);
        expect(game.playRound(3, 2)).toBeUndefined();
    });
})
