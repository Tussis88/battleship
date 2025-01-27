import { dummyGame } from "../dummygame";
import { gameboardRenderer } from "./gameboardRenderer";

function mainPage() {
    const game = dummyGame();
    gameboardRenderer(game);
}

export { mainPage }