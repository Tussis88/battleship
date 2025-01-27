function gameboardRenderer(game) {
    const playerBoard = game.getPlayer().board.getBoard;
    const cpuBoard = game.getCpu().board.getBoard;

    const boardPlayerDiv = document.createElement("div");
    boardPlayerDiv.classList.add("board");

    const boardCpuDiv = document.createElement("div");
    boardCpuDiv.classList.add("board");

    const boardDiv = document.querySelector("#board_container");
    boardDiv.textContent = "";
    boardDiv.appendChild(boardPlayerDiv);
    boardDiv.appendChild(boardCpuDiv);


    for (let i = 0; i < playerBoard.length; i++) {
        for (let j = 0; j < playerBoard[i].length; j++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");
            boardPlayerDiv.appendChild(cell);
            if (playerBoard[i][j].hasShip() && playerBoard[i][j].isHit) {
                cell.classList.add("hit");
            }
            else if (playerBoard[i][j].hasShip()) {
                cell.classList.add("ship");
            }
            else if (playerBoard[i][j].isHit) {
                cell.classList.add("miss");
            } else {
                cell.classList.add("water")
            }
        }
    }


    for (let i = 0; i < cpuBoard.length; i++) {
        for (let j = 0; j < cpuBoard[i].length; j++) {
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell")
            boardCpuDiv.appendChild(cellButton);
            cellButton.addEventListener("click", () => {
                const result = game.playRound(i, j);
                if (result === "player") {
                    alert("You Win!");
                    location.reload();
                } else if (result === "cpu") {
                    alert("You Lose!");
                    location.reload();
                }
                gameboardRenderer(game);
            })
            if (cpuBoard[i][j].hasShip() && cpuBoard[i][j].isHit) {
                cellButton.classList.add("hit");
            }
            // else if (cpuBoard[i][j].hasShip()) {
            //     cell.classList.add("ship");
            // }
            else if (cpuBoard[i][j].isHit) {
                cellButton.classList.add("miss");
            } else {
                cellButton.classList.add("water")
            }
        }
    }

    return boardDiv;
}


export { gameboardRenderer }