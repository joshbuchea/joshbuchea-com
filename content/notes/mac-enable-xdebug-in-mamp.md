---
slug: mac-enable-xdebug-in-mamp
date: 2016-08-21
title: 'Mac Enable Xdebug in MAMP'
published: true
# banner: './banner.png'
categories:
- macOS
---

Below are the steps necessary to enable Xdebug in MAMP (non-pro version) for Mac.

## Step 1: Determine PHP Version

1. In MAMP, press `Open start page`
2. View `phpinfo` to get PHP version
3. Note which PHP version you have

## Step 2: Configure php.ini

MAMP has two configuration files for each PHP version:

- `/Applications/MAMP/conf/php[version]/php.ini`
- `/Applications/MAMP/bin/php/php[version]/conf/php.ini`


1. Locate the `xdebug` section at the bottom of both of these files
2. Uncomment `zend_extension` line in both files (remove the `;`)
3. Add the following lines to the `xdebug` section in both files:

```
xdebug.remote_enable=1
xdebug.remote_host=127.0.0.1
xdebug.remote_connect_back=1    # Not safe for production servers
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.remote_mode=req
xdebug.remote_autostart=true
```

Result should look something like:

```
[xdebug]
zend_extension="/Applications/MAMP/bin/php/php7.0.8/lib/php/extensions/no-debug-non-zts-20151012/xdebug.so"
xdebug.remote_enable=1
xdebug.remote_host=127.0.0.1
xdebug.remote_connect_back=1    # Not safe for production servers
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.remote_mode=req
xdebug.remote_autostart=true
```

## Step 3: Restart MAMP!

1. Restart MAMP and Xdebug should be all set for whatever environment you use!
2. Visit the page you desire to debug with `?XDEBUG_SESSION_START=xdebug` appended to the URL.
