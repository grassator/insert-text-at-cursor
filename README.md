# Insert Text at Cursor

This library provides a consistent  (and fast!) way to insert some text at the cursor position into a textrea or a text input field. If the field contains a selection, the selected text will be replaced with a given one.

### Quick Start

Add it to your project

```bash
npm install --save insert-text-at-cursor
```

Import using ES Modules:

```js
import insertTextAtCursor from 'insert-text-at-cursor';
```

Or as a CommonJS:

```js
const insertTextAtCursor = require('insert-text-at-cursor');
```

```js
// Find an element you want on the page
const el = document.getElementById('my-textarea');
insertTextAtCursor(el, 'foobar');
```

### Browser Support

The library has been tested in:

* Latest Edge, Firefox, Chrome, Opera, Safari (Mac)
* iOS 11 Safari
* IE 8-11

### Caveats

Due to the nature of the APIs used, the library will always focus the target field and set the cursor after the inserted text.

### Motivation

All previously existing solution that I could find rely on getting full value of the the textarea, then slicing in necessary text, resetting new value and then restoring selection to the right position.

While this works quite well for small size of the text, if you have a few pages of text, the delay is very noticeable, especially on mobile devices and older browsers.

To mitigate that the library uses several different strategies by doing feature detection of several non-standard features to find a fast path. If none of the fast options are available, it falls back to true and tested method described above.

### License

The MIT License

Copyright (c) 2018 Dmitriy Kubyshkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
