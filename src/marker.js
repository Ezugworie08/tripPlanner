const mapboxgl = require('mapbox-gl');

// A mapper factory function;

module.exports = (locationType, lat, long) => {
  const markerType = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png',
  };
  // normalize input
  locationType = locationType.trim().toLowerCase();
  const coordinates = [lat, long];
  // create marker element for map
  const markerEl = document.createElement('div');
  markerEl.style.width = '32px';
  markerEl.style.height = '39px';
  markerEl.style.backgroundImage = `url(${markerType[locationType]})`;
  // return map marker instance
  console.log(markerEl);
  return new mapboxgl.Marker(markerEl).setLngLat(coordinates);
};
