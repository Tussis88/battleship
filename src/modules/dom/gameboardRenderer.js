function gameboardRenderer(player) {
    const board = player.board.getBoard;
    const boardDiv = document.createElement("div");
    boardDiv.classList.add("board");
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (player.isPlayer) {
                if (board[i][j].hasShip() && board[i][j].isHit) {
                    cell.classList.add("hit");
                }
                else if (board[i][j].hasShip()) {
                    cell.classList.add("ship");
                }
                else if (board[i][j].isHit) {
                    cell.classList.add("miss");
                } else {
                    cell.classList.add("water")
                }
            } else {
                if (board[i][j].isHit) {
                    if (board[i][j].hasShip()) {
                        cell.classList.add("hit");
                    } else {
                        cell.classList.add("miss");
                    }
                }
            }
        }
    }
    return boardDiv;
}

export { gameboardRenderer }