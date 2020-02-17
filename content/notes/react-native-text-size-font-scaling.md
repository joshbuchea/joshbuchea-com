---
slug: react-native-text-size-font-scaling
date: 2016-06-28
title: 'React Native - Text Size & Font Scaling'
published: true
# banner: './banner.png'
categories:
- Mobile Dev
---

<div class="image-wrapper">
  <img
    src="/images/notes/react-native-font-size-text-scaling.gif"
    alt="React Native Text Size & Font Scaling"
    width="300"
  />
</div>

In React Native, a default behavior of the `<Text>` Component is to respect the Text Size accessibility setting on iOS.

In a perfect world, your app would be 100% accessible and the UI would gracefully adapt to any text size. In reality, parts of your app's UI may break if the text size is adjusted. To disable this behavior on a `<Text>` Component, set it's `allowFontScaling` prop to `false`:

```html
<Text allowFontScaling={false}>
  Hi! I will not change. I don't respect settings.
</Text>
```

```html
<Text>
  Hi! I may change. By default, I respect the Text Size accessibility setting on iOS.
</Text>
```
_**Note:** Most icon fonts (like [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)) are affected by font scaling. And last I checked, font scaling behavior isn’t present in the iOS Simulator; only physical devices. That makes this behavior easy to miss during development._
