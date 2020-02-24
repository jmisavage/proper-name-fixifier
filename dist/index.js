"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProperNameCase {
    constructor() {
        this.defaultOptions = {
            onlyRunOnBadCase: true,
        };
        this.lowerCaseExceptions = [
            'af',
            'al',
            'ap',
            'av',
            'ben',
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
            'e',
            'el',
            'la',
            'le',
            'lo',
            'vel',
            'von',
            'y',
        ];
    }
    fixCase(name, options = {}) {
        const opts = Object.assign(Object.assign({}, this.defaultOptions), options);
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
                if (this.lowerCaseExceptions.includes(p)) {
                    return p;
                }
                p = p.charAt(0).toUpperCase() + p.slice(1);
                return this.fixMcsMacs(p);
            });
            fixName = parts.join(s.r);
        });
        fixName = fixName.replace(/\b(?:\d{4}|(?:[IVX])(?:X{0,3}I{0,3}|X{0,2}VI{0,3}|X{0,2}I?[VX]))(?=,+|$)/i, v => v.toUpperCase());
        fixName = this.special(fixName);
        return fixName;
    }
    special(name) {
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
            .replace(/\bLl\.M\.\b/, 'LL.M.')
            .replace(/\bDds\b/, 'DDS');
        return name;
    }
    fixMcsMacs(name) {
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
}
exports.default = ProperNameCase;