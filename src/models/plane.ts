import { GameEntity } from "./gameEntity";
import { Parachutist } from "./parachutist";

export class Plane implements GameEntity {
    private startX: number;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private speed: number;
    private planeImage: HTMLImageElement;

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        this.startX = x;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.planeImage = new Image();
        this.planeImage.src = 'assets/images/plane.png';
    }

    private fly(): void {
        this.x += this.speed;
        // Reset position when the plane is off the screen to the left
        if (this.x + this.planeImage.width < 0) {
            this.x = this.startX;
        }
    }

    public dropParachutist(): Parachutist {
        return new Parachutist(this.x + 50, this.y + 50);
    }

    public update(): void {
        this.fly();
    }

    public getImage(): HTMLImageElement {
        return this.planeImage;
    }

    public getCoordinates(): [number, number] {
        return [this.x, this.y];
    }

    public getSize(): [number, number] {
        return [this.width, this.height];
    }
}
