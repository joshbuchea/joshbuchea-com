---
slug: react-native-run-on-ipad-or-any-ios-simulator
date: 2020-05-05
title: 'Run React Native App on iPad or any iOS Simulator'
published: true
categories:
- Mobile Dev
---

```sh
yarn react-native run-ios --simulator="iPad (7th generation)"
```

List available iOS Simulators with: `xcrun simctl list devices`

At the time of authoring this note, there is no way to set a default device for the Simulator.