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
    #board;

    constructor() {

    }

    resetBoard() {

    }
}

export { Gameboard }