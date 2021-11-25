import * as assert from 'assert';
import { AvailableColor, DojoClock } from '../../dojoClock';

suite('Unit Test Suite', () => {
    let clock: DojoClock;
    suiteSetup(() => {
        clock = new DojoClock();
    });

    test('Gives random color', () => {
        const availableColors = Object.values(AvailableColor);

        const chosenColor = clock.getNextColor();

        const colorContained = availableColors.indexOf(chosenColor) > -1;
        assert.strictEqual(colorContained, true);
    });
});
