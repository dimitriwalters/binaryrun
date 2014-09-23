# binaryrun

A small javascript library to create binary strings and arrays based on the length of runs (or blocks) of 0's and 1's.

## Installation

```
npm install binaryrun
```

or

```html
<script src="http://dimitriwalters.github.io/binaryrun/binaryrun.min.js"></script>
```

## Usage

```js
var binaryrun = require('binaryrun');

binaryrun.makeString([2, 1]);           // '001'
binaryrun.makeString([0, 1, 2, 1]);     // '1001'

binaryrun.makeArray('001');     // [2, 1]
binaryrun.makeArray('1001');    // [0, 1, 2, 1]
```

## License

Licensed under [MIT](http://opensource.org/licenses/MIT).
