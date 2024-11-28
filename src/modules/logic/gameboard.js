import { Ship } from "./ship";

class Cell {
    #isHit;
    #ship;

    constructor() {
        this.#isHit = false;
        this.#ship = null;
    }

    get isHit() {
        return this.#isHit;
    }

    set setShip(ship) {
        this.#ship = ship;
    }

    get getShip() {
        return this.#ship;
    }

    hasShip() {
        return this.#ship != null;
    }

    hittedCell() {
        if (this.hasShip()) {
            this.#ship.hit();
        } else {
            this.isHit = true;
        }
    }
}

class Gameboard {
    #cols = 10;
    #rows = 10;
    #board = [];
    #shipArray = [];

    constructor() {
        this.resetBoard();
    }

    resetBoard() {
        for (let i = 0; i < this.#rows; i++) {
            this.#board[i] = [];
            for (let j = 0; j < this.#cols; j++) {
                this.#board[i].push(new Cell());
            }
        }
    }

    get getBoard() {
        return this.#board;
    }

    placeShip(x, y, ship, isHorizontal) {
        if (!this.#checkCoordvalue(x) || !this.#checkCoordvalue(y)) throw new Error("invalid coordinates");

        this.#shipArray.push(ship);

        let counter = ship.length;
        if (isHorizontal && this.#checkCoordvalue(x + ship.length)) {
            while (counter > 0) {
                this.#board[x][y].setShip = ship;
                x++;
                counter--;
            }
        } else if (this.#checkCoordvalue(y + ship.length)) {
            while (counter > 0) {
                this.#board[x][y].setShip = ship;
                y++;
                counter--;
            }
        }
    }

    #checkCoordvalue(x) {
        if (x < 0 || x > this.#cols) return false;
        return true;
    }
}

export { Gameboard, Cell }