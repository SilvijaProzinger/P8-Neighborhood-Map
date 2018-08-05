import React, { Component } from 'react';
import Map from './components/Map.js';
import Places from './components/Places.js';
import './App.css';

const API = 'https://api.foursquare.com/v2/venues/search?ll=45.5616873,18.6770196&intent=browse&radius=1000&query=cafe&client_id=PGIW2RVNRZZJO4GIBP1ALRK4T3ZK20H4WFHEY5X2OZB4C1MN&client_secret=LLUU3RJV0MHUXU2RSWDZ3RAPO00HFZRKVGU2AGGXUQB41DUY&v=20180728'

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			venues: []
		};
	}
	
	componentDidMount(){

        //Source: https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
		fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ venues: data.response.venues }));

    }   
  render() {

//location variable shows which location the marker or zoom should be on
  	const location = { 
		lat: 45.5616873, 
		lng: 18.6770196 
	}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coffee shops near Ante Starčević Square in Osijek, Croatia</h1>
        </header>
        <div className="map">
        <Map center={location} markers={this.state.venues}/>
        </div>
        <Places venues={this.state.venues}/>
      </div>
    );
  }
}

export default App;
