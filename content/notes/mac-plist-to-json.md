---
slug: mac-plist-to-json
date: 2015-07-28
title: 'Convert Plist to JSON'
published: true
# banner: './banner.png'
categories:
- macOS
---

As long as you have Xcode installed, you can simply do:

```bash
plutil -convert json Data.plist -o Data.json
```

Or go one step further and create a Service with Automator:

```bash
for f in "$@"
do
  filename="${f%.*}"
  plutil -convert json "$filename".plist -o "$filename".json
done
```

1. Open Automator and create a new workflow with Service type.
2. Choose Run Shell Script.
3. Copy the above code snippet to the code field.
4. Save the workflow. The name of the workflow is up to you, it will become the service name.

Now, just choose a .json file in Finder, pop up the context menu, choose Convert to json (or whatever name you just gave), and there should be a .plist file of the same name in the same directory.
