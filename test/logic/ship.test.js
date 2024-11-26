import { Ship } from "../../src/modules/logic/ship"

describe("Ship", () => {
    test("ship defined", () => {
        expect(Ship).toBeDefined();
    });

    test("get length", () => {
        const ship = new Ship(3);
        expect(ship.length).toBe(3);
    })

    test("is not sunk", () => {
        const ship = new Ship(3);
        expect(ship.isSunk()).toBe(false);
    })

    test("is sunk", () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })
})