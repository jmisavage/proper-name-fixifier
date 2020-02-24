import * as fixifier from './index';
import names from '../data/congress.json';

const differentCases = [
    ['levar woods', 'LeVar Woods'],
    ['LeVar Woods', 'LeVar Woods'],
    ['LEVAR WOODS', 'LeVar Woods'],
];

const namesWithTitles = [
    'Alfonsas Misevičius, Ph.D.',
    'Henry VIII',
    'John C. Doswell, II, DDS',
];

describe('Handle different case input', () => {
    test.each(differentCases)('Skip mix case names: %s', (input, output) => {
        expect(fixifier.fixCase(input)).toBe(output);
    });

    test.each(differentCases)('Run on all case names: %s', (input, output) => {
        expect(fixifier.fixCase(input, { onlyRunOnBadCase: false })).toBe(output);
    });
});

describe('General rules', () => {
    test.each(names)('Lower case to proper: %s', name => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });
});

describe('Special cases', () => {
    test.each(namesWithTitles)('Special titles: %s', name => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });
});
