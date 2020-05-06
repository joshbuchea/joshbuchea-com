---
slug: react-native-error-could-not-find-iphone-x-simulator
date: 2020-05-05
title: 'Error: Could not find iPhone X Simulator'
published: true
categories:
- Mobile Dev
---

## Issue

```sh
error Could not find "iPhone X" simulator. Run CLI with --verbose flag for more details.
error Command failed with exit code 1.
```

In my case, the iPhone X Simulator wasn't installed.

I verified installed simulators before and after with: `xcrun simctl list devices`

## Solution

- Open Xcode
- Select **Window > Devices and Simulators** from the top menu bar
- In the Devices and Simulators window, select the **Simulators** tab
- Add the iPhone X (and any others) in the left sidebar
- Don't give it a custom name since RN is looking for **iPhone X**
- Click Create