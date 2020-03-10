"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = {
    onlyRunOnBadCase: true,
};
const lowerCaseExceptions = [
    'af',
    'ap',
    'av',
    'da',
    'dal',
    'de',
    'del',
    'della',
    'delle',
    'den',
    'der',
    'di',
    'du',
    'el',
    'la',
    'le',
    'lo',
    'vel',
    'von',
];
function fixCase(name, options = {}) {
    const opts = Object.assign(Object.assign({}, defaultOptions), options);
    let fixName = name;
    fixName = fixName.replace(/\s{2,}/g, '');
    if (opts.onlyRunOnBadCase) {
        if (fixName !== fixName.toLowerCase() &&
            fixName !== fixName.toUpperCase()) {
            return fixName;
        }
    }
    fixName = fixName.trim().toLowerCase();
    const splitters = [
        { ch: /\s/, r: ' ' },
        { ch: /\-/, r: '-' },
        { ch: /\'/, r: "'" },
        { ch: /’/, r: '’' },
        { ch: /\"/, r: '"' },
        { ch: /\./, r: '.' },
    ];
    splitters.forEach(s => {
        let parts = fixName.split(s.ch).map((p, i) => {
            p = p.charAt(0).toUpperCase() + p.slice(1);
            return fixMcsMacs(p);
        });
        fixName = parts.join(s.r);
    });
    fixName = fixName.replace(/\b(?:\d{4}|(?:[IVX])(?:X{0,3}I{0,3}|X{0,2}VI{0,3}|X{0,2}I?[VX]))(?=,+|$)/i, v => v.toUpperCase());
    fixName = fixSpecialLowerCase(fixName);
    fixName = special(fixName);
    return fixName;
}
exports.fixCase = fixCase;
function fixSpecialLowerCase(name) {
    lowerCaseExceptions.forEach(r => {
        let p = r.charAt(0).toUpperCase() + r.slice(1);
        let reg = new RegExp('\\b' + p + '(?=\\s+\\w)', 'u');
        name = name.replace(reg, r);
    });
    name = name.replace(/(?!^)Al(?=\s+\w)\b/g, 'al');
    name = name.replace(/(?!^)Ben(?=\s+\w)\b/g, 'ben');
    name = name.replace(/\bE\b(?!\.)/, 'e');
    name = name.replace(/\bE\b(?!\.)/, 'y');
    return name;
}
function special(name) {
    name = name
        .replace(/\bDeshawn\b/, 'DeShawn')
        .replace(/\bDeangelo\b/, 'DeAngelo')
        .replace(/\bLevar\b/, 'LeVar')
        .replace(/\bLashaun\b/, 'LaShaun')
        .replace(/\bDefazio\b/, 'DeFazio')
        .replace(/\bDegette\b/, 'DeGette')
        .replace(/\bDelauro\b/, 'DeLauro')
        .replace(/\bDesjarlais\b/, 'DesJarlais')
        .replace(/\bDelbene\b/, 'DelBene')
        .replace(/\bLamalfa\b/, 'LaMalfa')
        .replace(/\bDesaulnier\b/, 'DeSaulnier')
        .replace(/\bLahood\b/, 'LaHood')
        .replace(/\bAj\b/, 'AJ')
        .replace(/\bCc\b/, 'CC')
        .replace(/\bCj\b/, 'CJ')
        .replace(/\bDj\b/, 'DJ')
        .replace(/\bJj\b/, 'JJ')
        .replace(/\bJt\b/, 'JT')
        .replace(/\bKt\b/, 'KT')
        .replace(/\bLj\b/, 'LJ')
        .replace(/\bRj\b/, 'RJ')
        .replace(/\bTj\b/, 'TJ')
        .replace(/\bLl\.M\b/, 'LL.M')
        .replace(/\bDds\b/, 'DDS');
    return name;
}
function fixMcsMacs(name) {
    if (new RegExp(/\bMac[A-Za-z]{2,}[^aciozj]\b/).test(name) ||
        new RegExp(/\bMc/).test(name)) {
        name = name.replace(/\b(Ma?c)([A-Za-z]+)/, (x, y, z) => {
            return y + z.charAt(0).toUpperCase() + z.substring(1);
        });
    }
    name = name
        .replace(/\bMacEvicius\b/, 'Macevicius')
        .replace(/\bMacHado\b/, 'Machado')
        .replace(/\bMacHar\b/, 'Machar')
        .replace(/\bMacHin\b/, 'Machin')
        .replace(/\bMacHlin\b/, 'Machlin')
        .replace(/\bMacIas\b/, 'Macias')
        .replace(/\bMacIulis\b/, 'Maciulis')
        .replace(/\bMacKie\b/, 'Mackie')
        .replace(/\bMacKle\b/, 'Mackle')
        .replace(/\bMacKlin\b/, 'Macklin')
        .replace(/\bMacQuarie\b/, 'Macquarie')
        .replace(/\bMacOmber\b/, 'Macomber')
        .replace(/\bMacIn\b/, 'Macin')
        .replace(/\bMacKintosh\b/, 'Mackintosh')
        .replace(/\bMacKen\b/, 'Macken')
        .replace(/\bMacHen\b/, 'Machen')
        .replace(/\bMacHiel\b/, 'Machiel')
        .replace(/\bMacIol\b/, 'Maciol')
        .replace(/\bMacKell\b/, 'Mackell')
        .replace(/\bMacKlem\b/, 'Macklem')
        .replace(/\bMacKrell\b/, 'Mackrell')
        .replace(/\bMacLin\b/, 'Maclin')
        .replace(/\bMacKey\b/, 'Mackey')
        .replace(/\bMacKley\b/, 'Mackley')
        .replace(/\bMacHell\b/, 'Machell')
        .replace(/\bMacHon\b/, 'Machon')
        .replace(/\bMacAyla\b/, 'Macayla');
    name = name
        .replace(/\bMacmurdo/, 'MacMurdo')
        .replace(/\bMacisaac/, 'MacIsaac');
    return name;
}
