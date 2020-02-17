---
slug: js-three
date: 2019-11-24
title: 'Three.js'
published: true
# banner: './banner.png'
categories:
- JavaScript
---

## Places to Download 3D Models

- [LaPoste 3D](http://impression3d.laposte.fr/)

## Browser Support

### Quote from the three.js wikipedia page:

> Three.js runs in all browsers supported by WebGL.

### Quote from one of the authors:

> Actually all browsers are supported which have support for canvas. We do not support polyfilled canvas. Mainly because most of the time, we use other things beside the canvas that are not implemented by the browser.

http://stackoverflow.com/a/20854036/1492782

### CanIUse

A quick look at http://caniuse.com/webgl reveals browsers that lack WebGL support are:

- IE < v11 (v11 is latest version)
- Android Browser < v51 (v51 is latest version)
- iOS Safari < v8
- Opera Mini (all versions)

### Summary

So, in summary it looks like three.js will NOT run in IE < v11 and some mobile browsers.