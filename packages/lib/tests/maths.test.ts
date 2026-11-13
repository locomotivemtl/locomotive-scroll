import { describe, expect, it } from 'vitest';
import {
    clamp,
    closestNumber,
    damp,
    mapRange,
    normalize,
} from '../utils/maths';

describe('maths', () => {
    it('clamps a value within a range', () => {
        expect(clamp(0, 100, -12)).toBe(0);
        expect(clamp(0, 100, 112)).toBe(100);
        expect(clamp(0, 100, 50)).toBe(50);
    });

    it('maps a value from one range to another', () => {
        expect(mapRange(-10, 10, 0, 100, 5)).toBe(75);
    });

    it('returns the output minimum for an empty input range', () => {
        expect(mapRange(10, 10, 0, 100, 10)).toBe(0);
    });

    it('normalizes a value to a progress', () => {
        expect(normalize(100, 200, 150)).toBe(0.5);
    });

    it('finds the closest number', () => {
        expect(closestNumber([0, 10, 20], 12)).toBe(10);
    });

    it('damps by the factor over a 60 fps frame', () => {
        expect(damp(0, 100, 0.1, 1 / 60)).toBeCloseTo(10);
    });

    it('damps the same over two 8 ms steps as over one 16 ms step', () => {
        const twoSteps = damp(damp(0, 100, 0.1, 0.008), 100, 0.1, 0.008);
        expect(twoSteps).toBeCloseTo(damp(0, 100, 0.1, 0.016));
    });

    it('does not move without elapsed time', () => {
        expect(damp(20, 100, 0.1, 0)).toBe(20);
    });
});
