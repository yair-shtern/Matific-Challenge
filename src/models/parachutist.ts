import { GameEntity } from "./gameEntity";

export class Parachutist implements GameEntity {
    private x: number;
    private y: number;
    private width: number = 60;
    private height: number = 60;
    private speed: number;
    private parachutistImage: HTMLImageElement;

    constructor(x: number, y: number, speed: number = 4) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.parachutistImage = new Image();
        this.parachutistImage.src = 'assets/images/parachutist.png';
    }

    private parachute(): void {
        this.y += this.speed;
    }

    public update(): void {
        this.parachute();
    }

    public getImage(): HTMLImageElement {
        return this.parachutistImage;
    }

    public getCoordinates(): [number, number] {
        return [this.x, this.y];
    }

    public getSize(): [number, number] {
        return [this.width, this.height];
    }
}
