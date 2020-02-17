---
slug: ie
date: 2019-11-06
title: 'Internet Explorer'
published: true
# banner: './banner.png'
categories:
- Apps
---

- Excellent list of what _is_ supported in IE: https://devhints.io/ie

## Not Supported

- Custom Event (`new CustomEvent('eventName')`)
  - Polyfill works for this
- Fetch
- URL API/Object
  - https://www.npmjs.com/package/@publica/url-polyfill

### fit-content (All versions of IE & Edge)

- Issue: IE does not support `fit-content` ( `width: fit-content;`)
- Fix: Replace style rule with `display: table !important;`

Sources:

- https://caniuse.com/#feat=intrinsic-width
- https://github.com/aurelia/dialog/issues/91

**Note:** May not be supported in some versions of Edge as well. There was conflicting information between the [fit-content](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content) & [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) pages on MDN.
The [intrinsic-width](https://caniuse.com/#feat=intrinsic-width) page on [CanIUse](https://caniuse.com) seems to state `fit-content` is not supported in the latest versions of Edge, which would insinuate that `fit-content` is not supported in any version of Edge (or IE).

## Bugs

### `<textarea>` placeholder becomes value (IE 11)

This issue is caused by a [bug in IE 11](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101525/) that Microsoft will not fix.

- Issue: A `textarea`'s placeholder text becomes it's actual value
- Fix: Add click handler for all `textarea` elements, if value matches placeholder set value to empty string

```js
$('body').on('click', 'textarea', function(e) {
  var $textarea = $(e.target);
  $textarea.val() === $textarea.attr('placeholder') && $textarea.val('');
});

// OR:

$('textarea').each(function(i) {
  var $textarea = $(this);
  $textarea.val() === $textarea.attr('placeholder') && $textarea.val('');
});
```
