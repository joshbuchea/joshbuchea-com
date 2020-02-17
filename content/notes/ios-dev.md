---
slug: ios-dev
date: 2019-11-26
title: 'iOS Dev'
published: true
# banner: './banner.png'
categories:
- Mobile Dev
---

## Simulator

### ios-sim & ios-deploy

- Install [ios-sim](https://github.com/ios-control/ios-sim): `npm install -g ios-sim`
- Install [ios-deploy](https://github.com/ios-control/ios-deploy): `npm install -g ios-deploy`
- Launch simulator with app: `ios-sim start`
- List devices: `ios-sim showdevicetypes`

Launch app on a specific device:

```bash
ios-sim launch --devicetypeid DEVICE_TYPE_ID ~/Desktop/AppName.app
```

Launch app on iPhone X:

```bash
ios-sim launch --devicetypeid iPhone-X ~/Desktop/AppName.app
```

### xcrun simctl

- List available commands: `xcrun simctl`
- List devices: `xcrun simctl list`
- Install app on specific device: `xcrun simctl install DEVICE_UID ~/Desktop/AppName.app`
- Install app on currently booted simulator: `xcrun simctl install booted ~/Desktop/AppName.app`