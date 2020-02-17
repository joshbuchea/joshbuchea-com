---
slug: google-maps
date: 2016-10-15
title: 'Google Maps'
published: true
# banner: './banner.png'
---

## API v3

### Examples

#### Multiple Markers

```html
<html>
<head>
  <title>Google Maps API v3 Multiple Markers</title>
  <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
</head>
<body>
  <div id="map" style="height: 400px; width: 500px;"></div>

  <script type="text/javascript">
    var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  </script>
</body>
</html>
```

#### Change marker icon color

Use `setIcon`:

```js
marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
```

Or as part of `marker` init:

```js
marker = new google.maps.Marker({
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
});
```

Valid marker icon filenames are:

- Blue: `blue-dot.png`
- Red: `red-dot.png`
- Purple: `purple-dot.png`
- Yellow: `yellow-dot.png`
- Green: `green-dot.png`

More icon & color choices: `https://sites.google.com/site/gmapsdevelopment/`

#### Info Window content is missing/hidden

```css
.gm-style-iw div { overflow: visible !important; }
```
