---
slug: atom
date: 2017-02-23
title: 'Atom'
# description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie leo ut sodales porta. Vivamus pharetra risus ac fermentum faucibus. Nam in sodales ex.'
published: true
# banner: './banner.png'
categories:
- Apps
---

## Keyboard Shortcuts

- Edit
  - Move Line Up: `^⌘ + Up`
  - Move Line Down: `^⌘ + Down`
  - Duplicate Lines: `⇧⌘D`
- Find
  - Find File: `⌘P`
  - Select Next: Select text, then `⌘D`
  - Select All: Select text, then `^⌘G`
- Select
  - Split into Lines: `⇧⌘L`
- Packages
  - Command Palette
    - Toggle: `⇧⌘P`
  - Symbols
    - File Symbols: `⌘R`

<!-- - bookmarks: `⌘F2`
- code folding? -->

## Package Manager

I use the Stars functionality to keep a list of the packages I use:

- Star all installed packages (you will be prompted for an API token from https://atom.io/account): `apm star --installed`
- List starred packages: `apm stars` or `apm starred`
- Install all starred packages: `apm stars --install` or `apm starred --install`

## Snippets

### Selectors

- ALL Selector: `*`
- HTML Selector: `.text.html.basic` (not `.source.html`)
- PHP Selector: `.text.html.php` (not `.source.php`)
- CSS Selector: `.source.css`
- JS Selector: `.source.js`
- Markdown Selector: `.text.md`

## Show closing brace/tag when folding code blocks

Add below code to `~/.atom/config.cson`:

```cson
".basic.html.text":
  editor:
    foldEndPattern: ""
".css.source":
  editor:
    foldEndPattern: ""
".html.php.text":
  editor:
    foldEndPattern: ""
".js.jsx.source":
  editor:
    foldEndPattern: ""
".js.source":
  editor:
    foldEndPattern: ""
```

## Hide Ignored Names In Tree View

Hide files & directories in Tree View that match glob patterns in `Settings > Core > Ignored Names`:

- `Preferences > Settings > Packages > Tree View > Hide Ignored Names`
