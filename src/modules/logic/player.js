import { Gameboard } from "./gameboard";

class Player {
    #isPlayer;

    constructor() {
        this.board = new Gameboard();
        this.#isPlayer = true;
    }

    get isPlayer() {
        return this.#isPlayer;
    }

    setAsComputer() {
        this.#isPlayer = false;
    }
};

export { Player }