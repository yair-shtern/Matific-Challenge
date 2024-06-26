import { Game } from "../models/game";
import { GameController } from "./gameController";

document.addEventListener("DOMContentLoaded", () => {
    const canvasId = "gameCanvas";
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;

    const game = new Game(canvas.width);
    new GameController(game, context);
});
