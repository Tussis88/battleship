import { dummyGame } from "../dummygame";
import { randomPlacement } from "../logic/randomPlacement";
import { gameboardRenderer } from "./gameboardRenderer";

function mainPage() {
    const game = randomPlacement();;
    gameboardRenderer(game);
}

export { mainPage }