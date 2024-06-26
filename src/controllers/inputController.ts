import { Game } from "../models/game";

export class InputController {
    private game: Game;
    private context: CanvasRenderingContext2D;

    constructor(game: Game, context: CanvasRenderingContext2D) {
        this.game = game;
        this.context = context;
    }

    initialize(): void {
        window.addEventListener("keydown", (e) => this.handleKeydown(e));
    }

    private handleKeydown(event: KeyboardEvent): void {
        const boat = this.game.getBoat();
        if (event.key === "ArrowLeft") {
            if (boat.getCoordinates()[0] > 0) {
                boat.moveLeft();
            }
        } else if (event.key === "ArrowRight") {
            if (boat.getCoordinates()[0] < this.context.canvas.width - boat.getSize()[0]) {
                boat.moveRight();
            }
        }
    }
}
