import { Game } from "../models/game";
import { UIController } from "./UIController";
import { InputController } from "./inputController";
import { Renderer } from "./renderer";

export class GameController {
    private game: Game;
    private context: CanvasRenderingContext2D;
    private uiController: UIController;
    private inputController: InputController;
    private renderer: Renderer;
    private lastDropTime: number = Date.now();

    constructor(game: Game, context: CanvasRenderingContext2D) {
        this.game = game;
        this.context = context;
        this.uiController = new UIController();
        this.inputController = new InputController(this.game, this.context);
        this.renderer = new Renderer(this.game, this.context);

        this.initializeControls();
    }

    private initializeControls(): void {
        this.uiController.startButton.addEventListener("click", () => this.start());
        this.inputController.initialize();
    }

    private start(): void {
        this.uiController.hideStartButton();
        this.game.startGame();
        this.gameLoop();
    }

    private gameLoop(): void {
        this.update();
        this.renderer.render();
        this.uiController.updateScoreboard(this.game.getScore(), this.game.getLives());

        if (this.game.getLives() > 0) {
            requestAnimationFrame(() => this.gameLoop());
        } else {
            this.uiController.showStartButton();
        }
    }

    private update(): void {
        this.dropParachutist();
        this.game.getPlane().update();
        this.game.getBoat().update();
        this.game.getParachutists().forEach(parachutist => parachutist.update());
        this.game.checkCollisions((parachutist, isCaught) => {
            if (isCaught) {
                this.game.setScore(this.game.getScore() + 10);
            } else {
                this.game.setLives(this.game.getLives() - 1);
            }
            this.game.removeParachutist(parachutist);
        });
    }

    private dropParachutist() {
        const plane = this.game.getPlane();
        const [px, py] = plane.getCoordinates();
        if (px > 0 && px < this.context.canvas.width - plane.getImage().width) {
            const currentTime = Date.now();
            if (currentTime - this.lastDropTime > 2500) {
                const newParachutist = plane.dropParachutist();
                this.game.addParachutist(newParachutist);
                this.lastDropTime = currentTime;
            }
        }
    }
}
