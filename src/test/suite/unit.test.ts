import * as assert from 'assert';
import { expect } from 'chai';
import { FairScheduler } from '../../fairScheduler';

export const participantColors = [
    "Blue",
    "Green",
    "Red",
    "Purple",
    "Orange",
    "White",
    "Black",
    "Turquoise",
    "Violet",
    "Pink"
];

suite('Unit Test Suite', () => {
    let clock: FairScheduler<string>;
    setup(() => {
        clock = new FairScheduler(participantColors);
    });

    test('Gives random choice', () => {
        const chosenColor = clock.getNext();

        expect(participantColors).to.contain(chosenColor);
    });

    test("Doesn't choose same option twice until all others have been chosen", () => {
        const pastColors: string[] = [];

        for (let i = 0; i < participantColors.length; i++) {
            let current = clock.getNext();
            expect(pastColors).not.to.contain(current);
            pastColors.push(current);
        }
    });
});
