class Ship {
    #length;
    constructor(length) {
        this.#length = length;
    }

    get length() {
        return this.#length;
    }
}

export { Ship }