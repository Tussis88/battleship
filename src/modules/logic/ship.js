class Ship {
    #length;
    #hitsTaken = 0;

    constructor(length) {
        this.#length = length;
    }

    get length() {
        return this.#length;
    }

    hit() {
        this.#hitsTaken++;
    }

    isSunk() {
        return this.#hitsTaken >= this.#length;
    }
}

export { Ship }