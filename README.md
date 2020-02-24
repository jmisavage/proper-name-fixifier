# proper-name-fixifier

A Javascript/TypeScript-friendly library for fixing the capitalization of people's names, but only if they're all upper or lower case. For the most part we don't what to change what a person does since there are A LOT of possibilities.

Influenced by Perl's [Lingua-EN-NameCase](https://metacpan.org/pod/Lingua::EN::NameCase) module and Emgee's [namecase](https://github.com/emgee3/namecase)

## Usage

```JavaScript
import pnc from 'proper-name-fixifier';

const name = pnc.fixCase('johnny mnemonic');
// name = Johnny Mnemonic
```
