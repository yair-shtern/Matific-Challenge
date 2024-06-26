export class UIController {
    startButton: HTMLElement;
    scoreElement: HTMLElement;
    livesElement: HTMLElement;

    constructor() {
        this.startButton = document.getElementById("startButton")!;
        this.scoreElement = document.getElementById("score")!;
        this.livesElement = document.getElementById("lives")!;
    }

    hideStartButton(): void {
        this.startButton.style.display = "none";
    }

    showStartButton(): void {
        this.startButton.style.display = "block";
    }

    updateScoreboard(score: number, lives: number): void {
        this.scoreElement.textContent = `Score: ${score}`;
        this.livesElement.textContent = `Lives: ${lives}`;
    }
}
