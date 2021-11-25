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
    public getNextColor(): AvailableColor {
        const colors = Object.values(AvailableColor);
        return colors[randomInt(colors.length)];
    }
}
