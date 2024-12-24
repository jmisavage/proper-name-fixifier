# proper-name-fixifier

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

A JavaScript/TypeScript-friendly library for correcting the capitalization of people's names, specifically when they are entirely upper or lower case. The library avoids making unnecessary changes, respecting the wide variety of valid name formats.

I highly encourage everyone to look into the test file for a more exhaustive list of test cases.  The test also pulls in names from the 116th US Congress (there's over 500 names in there with various languages, accent marks, titles, and even nicknames).

Influenced by Perl's [Lingua-EN-NameCase](https://metacpan.org/pod/Lingua::EN::NameCase) module and Emgee's [namecase](https://github.com/emgee3/namecase)

## Installation

```
npm install proper-name-fixifier
```

## Usage

```JavaScript
import * as fixifier from 'proper-name-fixifier';

console.log(fixifier.fixCase('johnny mnemonic'));   // Johnny Mnemonic
console.log(fixifier.fixCase('john doe'));          // John Doe
console.log(fixifier.fixCase('JANE DOE'));          // Jane Doe
console.log(fixifier.fixCase('McDONALD'));          // McDonald
console.log(fixifier.fixCase('o\'reilly'));         // O'Reilly
```

[npm-image]: https://img.shields.io/npm/v/proper-name-fixifier.svg?style=flat
[npm-url]: https://npmjs.org/package/proper-name-fixifier
[downloads-image]: https://img.shields.io/npm/dm/proper-name-fixifier.svg
[downloads-url]: https://npmjs.org/package/proper-name-fixifier
