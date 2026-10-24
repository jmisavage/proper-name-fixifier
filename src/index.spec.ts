import { describe, expect, test } from 'vitest';
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
    'Tester McTesterson, LL.M.',
];

const specialCases = [
    'Ben Hebrew',
    'Ben ben Hebrew',
    'da Lname',
    'dal Lname',
    'de Lname',
    'del Lname',
    'der Lname',
    'di Lname',
    'la Lname',
    'le Lname',
    'den Lname',
    'vel Lname',
    'von Lname',
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
    test.each(names)('Lower case to proper: %s', (name) => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });
});

describe('Special cases', () => {
    test.each(specialCases)('Always lower case: %s', (name) => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });

    test.each(namesWithTitles)('Special titles: %s', (name) => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });
});

describe('Regressions', () => {
    test('Collapses repeated whitespace to a single space', () => {
        expect(fixifier.fixCase('john   doe')).toBe('John Doe');
    });

    test('Gives the same result on repeated calls', () => {
        for (let i = 0; i < 4; i++) {
            expect(fixifier.fixCase('McDONALD')).toBe('McDonald');
        }
    });
});

describe('Example Logs', () => {
    test('The example code returns what we expect', () => {
        expect(fixifier.fixCase('johnny mnemonic')).toBe('Johnny Mnemonic');
        expect(fixifier.fixCase('john doe')).toBe('John Doe');
        expect(fixifier.fixCase('JANE DOE')).toBe('Jane Doe');
        expect(fixifier.fixCase('McDONALD')).toBe('McDonald');
        expect(fixifier.fixCase("o'reilly")).toBe("O'Reilly");
    });
});
