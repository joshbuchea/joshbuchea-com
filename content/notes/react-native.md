---
slug: react-native
date: 2019-07-19
title: 'React Native'
published: true
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
