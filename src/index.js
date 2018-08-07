// console.log('it is working!')

const mapboxgl = require('mapbox-gl');

// Get map marker factory
const mapMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWtlMDgiLCJhIjoiY2prazR2a2FzMW1rdTN2bnhzazJlcmo4YyJ9.plJMJ3rvjSewfcVE-67n9A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates => [-74.009, 40.705]; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

mapMarker('Restaurant', -87.641, 41.895).addTo(map);
