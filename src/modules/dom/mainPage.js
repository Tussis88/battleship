import { dummyGame } from "../dummygame";
import { gameboardRenderer } from "./gameboardRenderer";

function mainPage() {
    const game = dummyGame();
    gameboardRenderer(game);

    // const main = document.createElement("main");
    // main.appendChild(boards);
    // return main;
}

export { mainPage }