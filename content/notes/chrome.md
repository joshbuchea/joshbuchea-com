---
slug: chrome
date: 2019-11-23
title: 'Google Chrome'
published: true
# banner: './banner.png'
categories:
- Apps
---

- Toggle Bookmarks Bar: `⇧⌘B`
- View History: `⌘Y`
- View Downloads: `⇧⌘J`

## DevTools

- Open Developer Tools: `⌥⌘I`
- Open Developer Tools and bring focus to the console: `⌥⌘J`
- Inspect Mode: `⇧⌘C`
- Inspect disappearing element: Set subtree breakpoint on parent element
- Search DOM tree by CSS selector: When browsing the DOM with the Elements panel, try searching for nodes via CMD/Ctrl+F by their CSS selectors.
- Search all source files: Use search tab in bottom drawer that is shown/hidden when `ESC` is pressed

## Extension Development

- [What are extensions?](https://developer.chrome.com/extensions)
- [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks)

### Publish Chrome Extension

Resources:

- [Analytics](https://developer.chrome.com/apps/analytics)
- [Frequently Asked Questions](https://developer.chrome.com/webstore/faq)
- [Publish in the Chrome Web Store](https://developer.chrome.com/webstore/publish)
- [Supplying Images](https://developer.chrome.com/webstore/images)
- starter-chrome-extension

Steps Followed to Publish SwiftTab:

- Generate new build with latest code: `npm run build`
- Generate Zip File of `build` directory
- Upload extension zip file
  - Go to [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
  - Sign in to Dev account
  - Click **Add New Item** button
  - If you've never uploaded an item before, you need to accept the developer agreement before going to the next step.
  - Click Choose file > your zip file > Upload. If your app's manifest and ZIP file are valid, you can edit your app on the next page.
- Added App Information:
  - Icon
  - Screenshot
  - Description
  - Google Analytics ID
  - Category
  - Price?
- Note: Took a little time after publishing:
  - Status changed to Published immediately
  - Showed up in search results immediately
  - Extension listing took 15-60 mins to become live. 404'd until live.

Quote from Google Chrome Product Forum [Post](https://productforums.google.com/forum/#!msg/chrome/zo_r_Pv0BGw/Kqw3cF9IBAAJ):

> If you have any further questions or issues in the future with your Chrome extension on the Chrome Web Store, you can submit your question directly to the Chrome Web Store team by going to their [Stack Overflow page](http://www.google.com/url?q=http%3A%2F%2Fstackoverflow.com%2Fquestions%2Ftagged%2Fgoogle-chrome-extension&sa=D&sntz=1&usg=AFQjCNFlp3a2D3Az4ANoWkI7ccAqmmA5-g) or you can fill out this [form](https://support.google.com/chrome_webstore/contact/developer_support/?hl=en).
