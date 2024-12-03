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
    };
    this.#isHit = true;
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
    if (!this.#checkLegalPos(x, y, ship, isHorizontal)) throw new Error("invalid coordinates");

    this.#shipArray.push(ship);

    const incrementX = isHorizontal ? 1 : 0;
    const incrementY = isHorizontal ? 0 : 1;

    for (let i = 0; i < ship.length; i++) {
      const newX = x + i * incrementX;
      const newY = y + i * incrementY;

      this.#board[newX][newY].setShip = ship;
    };
  }

  #checkLegalPos(x, y, ship, isHorizontal) {
    const incrementX = isHorizontal ? 1 : 0;
    const incrementY = isHorizontal ? 0 : 1;

    for (let i = 0; i < ship.length; i++) {
      const newX = x + i * incrementX;
      const newY = y + i * incrementY;

      if (newX < 0 || newX >= this.#cols || newY < 0 || newY >= this.#rows) return false;

      if (this.#board[newX][newY].hasShip()) return false;
    }
    return true;
  }

  receiveAttack(x, y,) {
    if (x < 0 || x >= this.#cols || y < 0 || y >= this.#rows) throw new Error("invalid coordinates");
    if (this.#board[x][y].isHit) throw new Error("already hit");

    this.#board[x][y].hittedCell();

    return this.#board[x][y].hasShip();
  }
}

export { Gameboard, Cell }
