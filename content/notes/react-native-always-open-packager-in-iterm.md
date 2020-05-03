---
slug: react-native-always-open-packager-in-iterm
date: 2020-05-03
title: 'Always open React Native packager in iTerm'
published: true
categories:
- Mobile Dev
---

On macOS, always open the React Native packager in iTerm by associating `.command` files with iTerm:

- Open Finder
- Find any `.command` file (there's a `.command` file in React Native projects: `$PROJECT/node_modules/react-native/scripts/launchPackager.command`)
- Right-click on `.command` file to bring up context menu
- Choose **Get Info**
- Change **Open with** to **iterm.app**
- Click **Change All...**
