import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {

//marker gets its position from lat, lng and venue id
   const marker = this.props.markers.map((venue,i) => {
   	const marker = {
   		position: {
   			lat: venue.location.lat,
   			lng: venue.location.lng
   		}
   	}
   	return <Marker key={i} {...marker} />
   })

   const GoogleMapOsijek = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { 14 }
      >
        {marker}
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapOsijek
          containerElement={ <div style={{ height: `600px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );

   }
};

export default Map;