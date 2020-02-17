---
slug: jekyll
date: 2019-11-04
title: 'Jekyll'
published: true
# banner: './banner.png'
categories:
- Static Sites
---

- No autoprefixr without build step
- No individual pages for data records
- Categories & Tags
  - No individual page at `/tags/burritos`
  - but page at `/tags/` with **burrito** section, no problem :)
- Recommended Posts?
- Filter - Remove URL protocol & trailing slash: `{{ url | remove:'http://' | split:'/' | first }}`

## URL & BASEURL

```yml
site.url: https://domain.com # your domain
site.baseurl: "/blog" # the path to your website (optional)
```

**Note:** For root-level sites GitHub Pages assumes `site.baseurl: ""`.

## Wrap N Items In A Row Tag

```md
<!-- Wraps every three items in div.row -->
<!-- Closes div.row even there is not enough items -->

{% for item in site.data.your_data %}

  {% capture modulo %}{{ forloop.index | modulo: 3 }}{% endcapture %}

  {% if modulo == '1' %}
  <div class="row">
  {% endif %}
    <div class="col-sm-4">
      {{ item.name }}
    </div>
  {% if modulo == '0' or forloop.last %}
  </div>
  {% endif %}

{% endfor %}

<!-- Output: -->
<div class="row">
  <div class="col-sm-4">
    item1
  </div>
  <div class="col-sm-4">
    item2
  </div>
  <div class="col-sm-4">
    item3
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    item4
  </div>
</div>
```
