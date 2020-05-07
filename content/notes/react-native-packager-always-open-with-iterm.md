---
slug: react-native-packager-always-open-with-iterm
date: 2020-05-03
title: 'Always open React Native packager with iTerm'
published: true
categories:
- Mobile Dev
---

On macOS, `.command` files open with Terminal.app by default.

To always open the React Native packager with iTerm, associate `.command` files with iTerm:

- Open Finder
- Find any file with the `.command` extension (`$PROJECT/node_modules/react-native/scripts/launchPackager.command`)
- Right-click on `.command` file to bring up context menu
- Choose **Get Info**
- Change **Open with** to **iterm.app**
- Click **Change All...**
