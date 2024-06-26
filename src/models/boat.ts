import { GameEntity } from "./gameEntity";

export class Boat implements GameEntity {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private speed: number;
    private boatImage: HTMLImageElement;

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.boatImage = new Image();
        this.boatImage.src = 'assets/images/boat.png';
    }

    public update(): void { }

    public moveLeft(): void {
        this.x -= this.speed;
    }

    public moveRight(): void {
        this.x += this.speed;
    }

    public getImage(): HTMLImageElement {
        return this.boatImage;
    }

    public getCoordinates(): [number, number] {
        return [this.x, this.y];
    }

    public getSize(): [number, number] {
        return [this.width, this.height];
    }
}
