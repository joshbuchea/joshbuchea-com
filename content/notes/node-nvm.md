---
slug: nvm
date: 2019-11-25
title: 'NVM'
published: true
# banner: './banner.png'
categories:
- JavaScript
---

- List installed versions of node: `nvm ls`
- List available versions to install: `nvm ls-remote`
- Use specific version of node: `nvm use 6.0`
- Install specific version of node: `nvm install 7.7.1`
- Install latest stable version of node: `nvm install stable`
- Update node to latest stable and reinstall packages from current version: `nvm install node --reinstall-packages-from=node`
- Update node to latest stable, reinstall packages from current version, and install latest npm: `nvm install node --reinstall-packages-from=node --latest-npm`
- Update node to specific version and migrate packages from specific version: `nvm install 7.7.1 --reinstall-packages-from=7.5.0`
- Update node to specific version and migrate packages from specific version: `nvm install NEW_VERSION --reinstall-packages-from=OLD_VERSION`
- Then optionally delete previous version: `nvm uninstall YOUR_PREVIOUS_VERSION`
- To set a default Node version to be used in any new shell, use the alias 'default': `nvm alias default 7.7.1`
- To set a default Node version to be used in any new shell, use the alias 'default': `nvm alias default stable`