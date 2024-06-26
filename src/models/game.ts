import { Parachutist } from "./parachutist";
import { Plane } from "./plane";
import { Boat } from "./boat";

export class Game {
    private plane: Plane;
    private boat: Boat;
    private parachutists: Parachutist[] = [];
    private score: number = 0;
    private lives: number = 3;
    private seaLevel: number = 400;
    private screenWidth: number;

    constructor(screenWidth: number) {
        this.screenWidth = screenWidth;
        this.plane = new Plane(this.screenWidth, 30, 200, 100, -2);
        this.boat = new Boat((this.screenWidth - 200) / 2, this.seaLevel, 200, 75, 10);
    }

    public startGame(): void {
        this.score = 0;
        this.lives = 3;
        this.parachutists = [];
    }

    public checkCollisions(
        handleCollision: (parachutist: Parachutist, isCaught: boolean) => void
    ): void {
        const [boatX, boatY] = this.boat.getCoordinates();
        const [boatWidth, boatHeight] = this.boat.getSize();

        for (let i = 0; i < this.parachutists.length; i++) {
            const parachutist = this.parachutists[i];
            const [px, py] = parachutist.getCoordinates();

            const isCaught = px < boatX + boatWidth &&
                px > boatX &&
                py < boatY + boatHeight &&
                py > boatY;

            if (isCaught || py > this.seaLevel + 50) {
                handleCollision(parachutist, isCaught);
            }
        }
    }

    public addParachutist(newParachutist: Parachutist) {
        this.parachutists.push(newParachutist);
    }

    public removeParachutist(parachutist: Parachutist) {
        const index = this.parachutists.indexOf(parachutist);
        this.parachutists.splice(index, 1);
    }

    public getParachutists(): Parachutist[] {
        return this.parachutists;
    }

    public getScore(): number {
        return this.score;
    }

    public getLives(): number {
        return this.lives;
    }

    public getBoat(): Boat {
        return this.boat;
    }

    public getPlane(): Plane {
        return this.plane;
    }

    public setScore(score: number) {
        this.score = score;
    }

    public setLives(lives: number) {
        this.lives = lives;
    }
}
