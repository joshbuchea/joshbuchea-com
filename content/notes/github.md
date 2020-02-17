---
slug: github
date: 2019-11-23
title: 'GitHub'
published: true
# banner: './banner.png'
---

- Code Highlights are done via Linguist: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml

## Link to GitHub Avatar

- Get image URL from GitHub profile
- Example: `https://avatars2.githubusercontent.com/u/1474361?v=3&s=460`

## Generate New GitHub SSH Key

- Generate SSH key (substitute email with GitHub email): `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- Accept Default Location (Press Enter)
- Enter Passphrase (and write down somewhere safe!)
- Add new SSH key to ssh-agent: `ssh-add -K ~/.ssh/id_rsa`
- Enter Passphrase
- Copy SSH key to clipboard: `pbcopy < ~/.ssh/id_rsa.pub` (Just copy EXACT file contents if this command fails)
- Add SSH key to GitHub account: On GitHub website `Account Settings > SSH keys > New SSH key`

Sources:

- [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)