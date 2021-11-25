import { randomInt } from "crypto";

export enum AvailableColor {
    Blue = "Blue",
    Green = "Green",
    Red = "Red",
    Purple = "Purple",
    Orange = "Orange",
    White = "White",
    Black = "Black",
    Turquoise = "Turquoise",
    Violet = "Violet",
    Pink = "Pink"
};

export class DojoClock {
    private lastColor: AvailableColor | null = null;

    public getNextColor(): AvailableColor {
        let color: AvailableColor;
        do {
            const colors = Object.values(AvailableColor);
            color = colors[randomInt(colors.length)];
        } while (color === this.lastColor);
        this.lastColor = color;
        return color;
    }
}
