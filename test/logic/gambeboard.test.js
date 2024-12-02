import { Cell, Gameboard } from "../../src/modules/logic/gameboard";
import { Ship } from "../../src/modules/logic/ship";

describe("Gameboard", () => {
    test("Gameboard defined", () => {
        expect(Gameboard).toBeDefined();
    });


    test("get initialized board", () => {
        const board = new Gameboard();
        expect(board.getBoard.length).toBe(10);
    });

    test("board has cells", () => {
        const board = new Gameboard();
        board.getBoard.forEach(row => {
            row.forEach(cell => {
                expect(cell).toBeInstanceOf(Cell);
            })
        })
    });

    test("false positive has Ship", () => {
        const board = new Gameboard();
        expect(board.getBoard[9][9].hasShip()).toBe(false);
    });

    test("place Ship", () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        board.placeShip(3, 2, ship, true);
        expect(board.getBoard[3][2].hasShip()).toBe(true);
        expect(board.getBoard[3][2].getShip.length).toBe(3);
        expect(board.getBoard[4][2].getShip.length).toBe(3);
        expect(board.getBoard[5][2].getShip.length).toBe(3);
        expect(board.getBoard[6][2].hasShip()).toBe(false);

        const ship2 = new Ship(4);
        board.placeShip(0, 1, ship2, false);
        expect(board.getBoard[0][1].hasShip()).toBe(true);
        expect(board.getBoard[0][2].getShip.length).toBe(4);
    });

    test("invalid coordinates", () => {
        const board = new Gameboard();
        const ship = new Ship(5);
        expect(() => board.placeShip(7, 3, ship, true)).toThrow();
        expect(() => board.placeShip(7, 6, ship, false)).toThrow();
    });

    test("occupied slot", () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        const ship2 = new Ship(5);
        board.placeShip(3, 2, ship, true);
        expect(board.getBoard[4][2].hasShip()).toBe(true);
        expect(() => board.placeShip(4, 0, ship2, false)).toThrow();
    });

    test("attack", () => {
        const board = new Gameboard();
        const ship = new Ship(3);
        board.placeShip(3, 2, ship, true);
        expect(() => board.receiveAttack(10, 3)).toThrow();
        expect(board.receiveAttack(4, 2)).toBe(true);
        expect(() => board.receiveAttack(4, 2)).toThrow();
        expect(board.receiveAttack(5, 2)).toBe(true);
        expect(board.receiveAttack(4, 1)).toBe(false);
    })
})
