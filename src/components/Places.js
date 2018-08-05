import React, { Component } from 'react';

class Places extends Component {
	render () {
		const list = this.props.venues.map((venue, i) => {
			return (
				<li key = {i}>{venue.name}</li>
			) 
		})

		return (
		 <div className="list-title">
		 	Venues:
		 <ul>
		 	{list}
		 </ul>
		 </div>

		)
	}
}

export default Places;