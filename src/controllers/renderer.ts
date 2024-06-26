import { Game } from "../models/game";

export class Renderer {
    private game: Game;
    private context: CanvasRenderingContext2D;

    constructor(game: Game, context: CanvasRenderingContext2D) {
        this.game = game;
        this.context = context;
    }

    render(): void {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        const plane = this.game.getPlane();
        const boat = this.game.getBoat();
        this.renderElement(plane.getImage(), plane.getCoordinates(), plane.getSize());
        this.renderElement(boat.getImage(), boat.getCoordinates(), boat.getSize());
        this.game.getParachutists().forEach(parachutist =>
            this.renderElement(parachutist.getImage(), parachutist.getCoordinates(), parachutist.getSize())
        );
    }

    private renderElement(image: HTMLImageElement, [x, y]: [number, number], [dw, dh]: [number, number]): void {
        this.context.drawImage(image, x, y, dw, dh);
    }
}
