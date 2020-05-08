---
slug: react-native-image-auto-scale
date: 2020-05-08
title: 'Auto-scaling Images in React Native'
published: true
categories:
- Mobile Dev
---

One method to auto-scale images in React Native while preserving aspect ratio:

```jsx
const imageStyles = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'contain',
}

const Example = () => {
  return (
    <Image
      style={imageStyles}
      source={{ uri: 'https://placeholder.com/850' }}
    />
  );
}
```
