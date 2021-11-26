import * as assert from 'assert';
import { FairScheduler } from '../../dojoClock';

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
    suiteSetup(() => {
        clock = new FairScheduler(participantColors);
    });

    test('Gives random color', () => {
        const chosenColor = clock.getNext();

        const colorContained = participantColors.indexOf(chosenColor) > -1;
        assert.strictEqual(colorContained, true);
    });

    test("Doesn't get same color twice", () => {
        let lastColor = clock.getNext();

        for (let i = 0; i < 100; i++) {
            const chosenColor = clock.getNext();
            assert.notStrictEqual(chosenColor, lastColor);
            lastColor = chosenColor;
        }
    });
});
