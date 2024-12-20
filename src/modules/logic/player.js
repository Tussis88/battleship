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

    get getBoard() {
        return this.board.getBoard;
    }

    setAsComputer() {
        this.#isPlayer = false;
    }
};

export { Player }