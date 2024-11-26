import { Ship } from "../../src/modules/logic/ship"

describe("Ship", () => {
    test("ship defined", () => {
        expect(Ship).toBeDefined();
    });

    test("get length", () => {
        const ship = new Ship(3);
        expect(ship.length).toBe(3);
    })
})