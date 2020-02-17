---
slug: npm
date: 2019-11-25
title: 'NPM'
published: true
# banner: './banner.png'
categories:
- JavaScript
---

- List globally installed packages + versions: `npm list -g --depth=0`
- Update npm: `npm install -g npm`
- Install specific version of npm (works with NVM): `npm install -g npm@1.4.3`
- Install local module: `npm install /path`
  - Beware, the command will COPY the content of the target repo found in `/path` into your project's `node_modules`, no further changes in `/path` will be reflected in the local repo unless you do `npm install /path` again. I'd recommend to use `npm link` for module development.
- Execute commands for a package in a subdirectory:
  - Install: `npm --prefix ./path/to/package install ./path/to/package`
  - Test: `npm --prefix ./path/to/package test`
- `package.json` dependency notation (https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json):
  - `^` or `1.x.x`: is 1.[any].[any] (latest minor version)
  - `~` or `1.2.x`: is 1.2.[any] (latest patch)
- Error: "ENOENT: no such file or directory, uv_cwd"
  - Weird shell/dir issue, restart shell(s)
  - https://github.com/nodejs/node/issues/1184
  - https://github.com/foreverjs/forever/issues/200