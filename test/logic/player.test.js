import { Player } from "../../src/modules/logic/player";

describe("Player", () => {
    test("Player Defined", () => {
        expect(Player).toBeDefined();
    })

    test("human player check", () => {
        const player1 = new Player();
        expect(player1.isPlayer).toBe(true);
    })

    test("computer player check", () => {
        const player1 = new Player();
        player1.setAsComputer();
        expect(player1.isPlayer).toBe(false);
    })
})