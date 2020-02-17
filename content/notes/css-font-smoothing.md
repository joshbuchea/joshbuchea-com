---
slug: css-font-smoothing
date: 2015-06-22
title: 'CSS Font Smoothing'
published: true
# banner: './banner.png'
categories:
- CSS
---

If fonts on your website appear to be rendering &quot;thicker&quot; in Webkit or Firefox than they do in other applications (Photoshop, other browsers, etc.), the issue *may* be resolved by enabling font smoothing. Font smoothing can be enabled for Webkit & Firefox with the following CSS:

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
