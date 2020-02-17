---
slug: react-native-change-app-display-name
date: 2019-11-12
title: 'Change App Display Name in React Native'
published: true
# banner: './banner.png'
categories:
- Mobile Dev
---

## Android

In `android/app/src/main/res/values/strings.xml` change the value for `app_name` (replace `PrevAppName`):

```xml
<string name="app_name">PrevAppName</string>
```

## iOS

In `ios/<PrevAppName>/Info.plist` change the value for `CFBundleDisplayName` (replace `PrevAppName`):

```xml
<key>CFBundleDisplayName</key>
<string>PrevAppName</string>
```

**Note:** If you're using the iOS launch screen that's included with React Native apps by default, it may be desireable to keep the launch screen in sync also. In `ios/APP_NAME/Base.lproj/LaunchScreen.xib` search and replace any instances of `PrevAppName`.