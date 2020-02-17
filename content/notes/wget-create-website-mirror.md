---
slug: wget-create-website-mirror
date: 2017-04-06
title: 'Wget - Create Website Mirror'
published: true
# banner: './banner.png'
categories:
- CLI
---

Use the command below to create a local offline-capable mirror of an entire website:

```
wget \
  --mirror \
  --page-requisites \
  --adjust-extension \
  --convert-links \
  --no-parent \
  --wait=1 \
  www.example.com
```

OR use the short version: `wget -mpEknp -w 1 www.example.com`

Note: In the short version you'll notice `p` twice in the flags. This is because the last `p` is part of `np` (`--no-parent`).

| Option                   | Description |
| ------------------------ | ---- |
| `-m --mirror`            | Turns on recursion and time-stamping, sets infinite recursion depth and keeps FTP directory listings (Shorthand for `-r -l inf -N`) |
| `-p --page-requisites`   | Download things like CSS style-sheets and images required to properly display the page offline. |
| `-E --adjust-extension`  | Adds suitable extensions to filenames (.html or .css) depending on their content-type. |
| `-k --convert-links`     | Convert all the links (also to stuff like CSS stylesheets) to relative, so it will be suitable for offline viewing. |
| `-np --no-parent`        | When recursing do not ascend to the parent directory. It useful for restricting the download to only a portion of the site. |
| `-w --wait`              | Wait the specified number of seconds between the retrievals. |
| `-r --recursive`         | Turn on recursive retrieving. The default maximum depth is 5. |
| `-l inf`                 | ‘-l 0’ is equivalent to ‘-l inf’ — that is, infinite recursion |
| `-N --timestamping`      | Turn on time-stamping |

References:
- [Wget Manual](https://www.gnu.org/software/wget/manual/wget.html)
