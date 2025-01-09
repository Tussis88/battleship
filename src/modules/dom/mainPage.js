import { dummyGame } from "../dummygame";
import { gameboardRenderer } from "./gameboardRenderer";

function mainPage() {
    const game = dummyGame();
    const playerBoard = gameboardRenderer(game.getPlayer());
    const cpuBoard = gameboardRenderer(game.getCpu());

    const main = document.createElement("main");
    main.appendChild(playerBoard);
    main.appendChild(cpuBoard);
    return main;
}

export { mainPage }