---
slug: expo
date: 2019-11-12
title: 'Expo'
published: true
# banner: './banner.png'
categories:
- Mobile Dev
---

<!-- ## Pros / Benefits

- Ads
- Code Push
- Push Notifications
- Easy Publish
- Easy Icons
- Social Auth
- Web Support (Coming soon!)
- App Rating
- Image Picker
- Icons
- Maps
- SQLite
- Contacts
- Tabs Template (Optional)
- Release Management? -->

## Get Started

- Install Expo CLI: `npm install expo-cli --global`
- Create New Project: `expo init MyAwesomeProject`
- Run Project: `expo start` (from project directory)
- Run Project (and clear caches): `expo start -c`

## Build Standalone App Binaries

- Build (iOS): `expo build:ios`
- Build (Android): `expo build:android`
- Check Build Status: `expo build:status`

> **Note:** We enable bitcode for iOS, so the `.ipa` files for iOS are much larger than the eventual App Store download available to your users. For more information, see [App Thinning](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html).

## Submit to App Stores

> **Note:** Apple will ask you whether your app uses the IDFA. Because Expo depends on Segment Analytics, the answer is yes, and you'll need to check a couple boxes on the Apple submission form. See [Segment's Guide](https://segment.com/docs/sources/mobile/ios/quickstart/#step-5-submitting-to-the-app-store) for which specific boxes to fill in.

## References

- [Expo Docs](https://docs.expo.io/versions/latest/)
- [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
- [Configuration with app.json](https://docs.expo.io/versions/latest/workflow/configuration/)
- [Building Standalone Apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)
- [Uploading Apps to the Apple App Store and Google Play](https://docs.expo.io/versions/latest/distribution/uploading-apps/)
