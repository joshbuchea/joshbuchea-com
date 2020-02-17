---
slug: mac-app-store-links
date: 2017-12-16
title: 'Mac App Store Links'
published: true
# banner: './banner.png'
categories:
- macOS
---

Below is a list of Mac App Store link (`macappstore://`) structures I've compiled. If there's any I missed, please [let me know](/contact/)!

During my testing, I found Mac App Store links work as expected in Safari and Firefox, but not Chrome. This could be due to my local config, your mileage may very.

- Direct App Link: [macappstore://itunes.apple.com/app/id425424353](macappstore://itunes.apple.com/app/id425424353)
- Featured Tab: [macappstore://](macappstore://)
- Top Charts Tab: ?
- Categories Tab: ?
- Updates Tab: [macappstore://showUpdatesPage](macappstore://showUpdatesPage)
- Purchased Tab: [macappstore://showPurchasesPage](macappstore://showPurchasesPage)
- Search: [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?q=SEARCHTERM](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?q=SEARCHTERM)
- Search (UTI): [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?uti=YOURUTI](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?uti=YOURUTI)
- Search for apps that support a specific file extension: [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?extension=png](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?extension=png)

**Note:** Mac App Store links can also be called from the command line (works without root privileges): `open macappstore://showUpdatesPage`
