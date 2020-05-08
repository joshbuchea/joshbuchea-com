---
slug: typescript-eslint-ignore-rule-comment
date: 2020-05-08
title: 'Ignore TypeScript-ESLint Rule with Code Comment'
published: true
categories:
- JavaScript
---

To ignore a typescript-eslint rule for a single line or block of code:

```js
/* eslint-disable @typescript-eslint/camelcase */
const myObj = {
  some_property: 'blah',
};
```