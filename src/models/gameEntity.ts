export interface GameEntity {
    getCoordinates(): [number, number];
    getSize(): [number, number];
    getImage(): HTMLImageElement;
    update(): void;
}
