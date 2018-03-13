console.log('some stuff in it');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3hyYSIsImEiOiJjamVxMmV4OWQwM2tiMnBwN3FtcDBkenhwIn0.x4jp6DuVIbzxHUbNY8PlVQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});


const markers = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const addMarker = (itinerary, latLng) => {
    const markerEl = document.createElement('div')
        markerEl.style.width = '32px'
        markerEl.style.height = '39px'
        markerEl.style.backgroundImage = `url(${markers[itinerary]})`

    new mapboxgl.Marker(markerEl).setLngLat(latLng).addTo(map)
}

addMarker('hotel', [-74.009151, 40.705086])
