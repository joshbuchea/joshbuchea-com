---
slug: react-native
date: 2019-07-19
title: 'React Native'
published: true
# banner: './banner.png'
categories:
- Mobile Dev
---

## Initialize new project

### For React Native `0.60.0` or greater:

Using `npx`:

- Default template: `npx react-native init ProjectName`
- TypeScript template: `npx react-native init ProjectName --template typescript`
- Custom template: `npx react-native init ProjectName --template ${TEMPLATE_NAME}`

### For older React Native versions:

Using legacy `react-native-cli` package:

```sh
yarn global add react-native-cli
react-native init ProjectName
```

## Run app with specific device in Simulator

Specify a simulator using the `--simulator` flag.

List all available iOS devices:

`xcrun simctl list devices`

Available devices for iOS `12.0`:

```bash
react-native run-ios --simulator="iPhone 5s"
react-native run-ios --simulator="iPhone 6"
react-native run-ios --simulator="iPhone 6 Plus"
react-native run-ios --simulator="iPhone 6s"
react-native run-ios --simulator="iPhone 6s Plus"
react-native run-ios --simulator="iPhone 7"
react-native run-ios --simulator="iPhone 7 Plus"
react-native run-ios --simulator="iPhone 8"
react-native run-ios --simulator="iPhone 8 Plus"
react-native run-ios --simulator="iPhone SE"
react-native run-ios --simulator="iPhone X"
react-native run-ios --simulator="iPhone XR"
react-native run-ios --simulator="iPhone Xs"
react-native run-ios --simulator="iPhone Xs Max"
react-native run-ios --simulator="iPad Air"
react-native run-ios --simulator="iPad Air 2"
react-native run-ios --simulator="iPad"
react-native run-ios --simulator="iPad Pro"
react-native run-ios --simulator="iPad Pro"
react-native run-ios --simulator="iPad Pro"
react-native run-ios --simulator="iPad Pro"
react-native run-ios --simulator="iPad"
```

There is currently no way to set a default.
