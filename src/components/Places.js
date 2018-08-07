import React, { Component } from 'react';

class Places extends Component {
	constructor (){
		super();
		this.state = {
			search: '',

		};
	}

	updateSearch (event) {
		this.setState({search: event.target.value});

	}
	render () {
		let filteredList = this.props.venues.filter(
			(venue) => {
				return venue.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}

		);
		const list = filteredList.map((venue, i) => {
			return (
				<li key = {i}>{venue.name}</li>
			) 
		})

		return (
		 <div className="places-list">
		 	<h3>Venues:</h3>
		 <ul>
		 	{list}
		 </ul>
		 <div className="filter-box">
		 <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
		 </div>
		 </div>

		)
	}
}

export default Places;