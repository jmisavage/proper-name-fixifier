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
    'Tester McTesterson, LL.M.'
];

const specialCases = [
    'Fname da Lname',
    'Fname dal Lname',
    'Fname de Lname',
    'Fname del Lname',
    'Fname der Lname',
    'Fname di Lname',
    'Fname la Lname',
    'Fname le Lname',
    'Fname den Lname',
    'Fname vel Lname',
    'Fname von Lname'
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
    test.each(specialCases)('Always lower case: %s', name => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });

    test.each(namesWithTitles)('Special titles: %s', name => {
        expect(fixifier.fixCase(name.toUpperCase())).toBe(name);
    });
});
