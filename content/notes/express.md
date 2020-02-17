---
slug: express
date: 2019-11-23
title: 'Express'
published: true
# banner: './banner.png'
categories:
- JavaScript
---

- Request Params: `req.params`

## Hello world

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

## Settings

```js
app.set('title', 'My Site')
app.get('title') // "My Site"

app.disable('trust proxy')
app.enable('trust proxy')

app.enabled('trust proxy') //=> true
```