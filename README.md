# The Pirate JS

The Pirate is a lib that has some util functions that can abstract
logic and prevent errors

## Install
```bash
# Using npm
npm i the-pirate
# Using yarn
yarn add the-pirate
```

## General examples
```js
import * as pirate from 'the-pirate'

// General functions
pirate.truthyJoin(['Hey', undefined, 'You'], ', ') // 'Hey, You'
pirate.any(false, true, false) // true
pirate.any(false, false) // false

pirate.maybe({}, 'item.price') // undefined
pirate.maybe({ item: { price: '$10.00' } }, 'item.price') // '$10.00'
```

## DOM utils
```js
import { dom } from 'the-pirate'
/*
imagine this span is in a structure like this:
<h2 class="parent">
    <div>
        <span class="child"></span>
    </div>
</h2>
*/
const spanChild = document.querySelector('.child')
dom.closest(spanChild, '.parent') // returns the h2 that has the .parent class

dom.scrollTo('.parent') // scrolls to parent

```

## Numeric utils
```js
import { numeric as numPyrate } from 'the-pirate'

numPyrate.cnpj.validateCNPJ('18.837.197/0001-83') // true
numPyrate.cnpj.validateCNPJ('47.372.635/4756-32') // false

numPyrate.cpf.validateCPF('93549281021') // true
numPyrate.cpf.validateCPF('34549284521') // false

numPyrate.normalizeLocalCurrency('20,000.04') // 20000.04 float
numPyrate.normalizeLocalCurrency('20.000,04') // 20000.04 float

// From 0 to 10
numPyrate.interval() // [0, 1, 2, 3, ..., 10]
// From 0 to 99
numPyrate.interval(99) // [0, 1, 2, 3, ..., 99]
// From 0 to 50 with 5 steps
numPyrate.interval(50, 5) // [0, 5, 10, 15, ..., 50]
// From 10 to 50 with 5 steps
numPyrate.interval(50, 5, 10) // [10, 15, 20, 25, ..., 50]
```

## String examples
```js
import { string as strPi } from 'the-pirate'
strPi.isURL('http://google.com') // true
strPi.isURL('this is not an url') // false
strPi.interpol('Hello', 'World') // 'Hello World'
strPi.toSnakeCase('Hello World')//hello_world
strPi.toSnakeCase('HelloWórld')//hello_wrld

```

## Color examples
```js
import { color } from 'the-pirate'
// r, g, b
color.isLight(0, 0, 0) // false

color.hexToRgb('#aa7392') // { r: 170, g: 115, b: 146 }

color.blackOrWhite('#ddd') // black
color.blackOrWhite('#200') // white

```

Note: not all functions were made from ground up.
Some of them were inspired by forum answers.
