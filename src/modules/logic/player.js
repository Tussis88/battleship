import { Gameboard } from "./gameboard";

class Player {
    #isComputer;

    constructor(isComputer) {
        this.board = new Gameboard();
        this.#isComputer = isComputer;
    }

    get isComputer() {
        return this.#isComputer;
    }
};

export { Player }