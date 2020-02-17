---
slug: mac-revert-ssh-agent-behavior-pre-macos-sierra
date: 2016-12-22
title: 'Revert ssh-agent behavior pre macOS Sierra'
published: true
# banner: './banner.png'
categories:
- macOS
---

Recently, after updating my workstation to macOS Sierra, I discovered that Apple changed the default behavior of `ssh-agent`. It no longer auto-loads all the keys stored in Keychain that were added with `ssh-add -K`. I was able to revert to the pre macOS behavior of `ssh-agent` by creating a file `~/.ssh/config` with the following contents:

```
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa
```

Optionally replace `~/.ssh/id_rsa` with the path to your key. To add additional keys, add a new line for each key with: `IdentityFile /path/to/your_key`.

References:

- [Difficulties with ssh-agent in macOS Sierra](https://www.reddit.com/r/osx/comments/52zn5r/difficulties_with_sshagent_in_macos_sierra/)
