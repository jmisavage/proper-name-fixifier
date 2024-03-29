# proper-name-fixifier

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

A Javascript/TypeScript-friendly library for fixing the capitalization of people's names, but only if they're all upper or lower case. For the most part we don't what to change what a person does since there are A LOT of possibilities.

I highly encourage everyone to look into the test file for a more exhaustive list of test cases.  The test also pulls in names from the 116th US Congress (theres over 500 names in there with various languages, accents marks, titles, and even nicknames).

Influenced by Perl's [Lingua-EN-NameCase](https://metacpan.org/pod/Lingua::EN::NameCase) module and Emgee's [namecase](https://github.com/emgee3/namecase)

## Usage

```JavaScript
import * as fixifier from 'proper-name-fixifier';

const name = fixifier.fixCase('johnny mnemonic');
// name = Johnny Mnemonic
```

[npm-image]: https://img.shields.io/npm/v/proper-name-fixifier.svg?style=flat
[npm-url]: https://npmjs.org/package/proper-name-fixifier
[downloads-image]: https://img.shields.io/npm/dm/proper-name-fixifier.svg
[downloads-url]: https://npmjs.org/package/proper-name-fixifier
