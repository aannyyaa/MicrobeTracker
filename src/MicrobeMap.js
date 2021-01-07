import React from 'react';
import mapboxgl from 'mapbox-gl';
// import MapPopup from './MapPopup';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWFuLXdhbGxzIiwiYSI6ImNraHV1aW9ibDB4OWUyeHQ5bDNqcHJwamgifQ.LCcUu3on3hufnDu1LSmVxw';

class MicrobeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.9923835,
      lat: 40.7044242,
      zoom: 14,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
      });
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-73.9923835, 40.7044242])
      // .setPopup(new mapboxgl.Popup().setHTML("test"))
      .addTo(map);
    // marker.on(click, ()=>{})
  }

  render() {
    return (
      <div id="map">
        <div id="mapContainer" ref={(elem) => (this.mapContainer = elem)} />
        <div>
          <h4 id="mapInfo">
            Longitude: {this.state.lng} | Latitude: {this.state.lat}
          </h4>
        </div>
      </div>
    );
  }
}

export default MicrobeMap;
