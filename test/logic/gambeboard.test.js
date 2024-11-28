import { Cell, Gameboard } from "../../src/modules/logic/gameboard";
import { Ship } from "../../src/modules/logic/ship";

describe("Gameboard", () => {
    test("Gameboard defined", () => {
        expect(Gameboard).toBeDefined();
    });

    const board = new Gameboard();

    test("get initialized board", () => {
        expect(board.getBoard.length).toBe(10);
    })

    test("board has cells", () => {
        board.getBoard.forEach(row => {
            row.forEach(cell => {
                expect(cell).toBeInstanceOf(Cell);
            })
        })
    })

    test("false positive has Ship", () => {
        expect(board.getBoard[9][9].hasShip()).toBe(false);
    })

    test("place Ship", () => {
        const ship = new Ship(3);
        board.placeShip(3, 2, ship, true);
        expect(board.getBoard[3][2].hasShip()).toBe(true);
        expect(board.getBoard[3][2].getShip.length).toBe(3);
        expect(board.getBoard[4][2].getShip.length).toBe(3);
        expect(board.getBoard[5][2].getShip.length).toBe(3);
        expect(board.getBoard[6][2].hasShip()).toBe(false);
    })
})