---
slug: react-native-specify-device-for-ios-simulator
date: 2020-05-05
title: 'Run React Native App on iPad or any other iOS Simulator'
published: true
categories:
- Mobile Dev
---

To run a React Native App on iPad or any other iOS Simulator, the [React Native Docs](https://facebook.github.io/react-native/docs/running-on-simulator-ios#specifying-a-device) outline using the `--simulator` flag with `react-native run-ios`:

```sh
npx react-native run-ios --simulator="iPad (7th generation)"
```

List available iOS Simulators:

```sh
xcrun simctl list devices
```

At the time of authoring this note, there is no way to set a default device for the Simulator.