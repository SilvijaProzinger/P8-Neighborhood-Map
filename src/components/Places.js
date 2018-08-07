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

	//filteredList variable filters the list of venues after user types into search box
	render () {
		let filteredList = this.props.venues.filter(
			(venue) => {
				//toLowerCase helps appropriate letter be recognized regardless of upper case or lower case
				return venue.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}

		);
		//variable list maps through list of venues and their id to generate their names
		const list = filteredList.map((venue, i) => {
			return (
				<li key = {i}>{venue.name}</li>
			) 
		})

		return (
		<div className="sidebar-content">
		 <div className="filter-box">
			<input type="text" 
			placeholder="Search for venues"
			value={this.state.search} 
			onChange={this.updateSearch.bind(this)}/>
		  </div>
		 <div className="places-list">
		 	<h3>Venues:</h3>
		 	<ul>
		 	{list}
		 	</ul>
		 </div>
		 </div>

		)
	}
}

export default Places;