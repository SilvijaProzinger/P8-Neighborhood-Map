import React, { Component } from 'react';
import Places from './Places.js';

const { API } = 'https://api.foursquare.com/v2/venues/search?ll=45.5616873,18.6770196&intent=browse&radius=1000&query=cafe&client_id=PGIW2RVNRZZJO4GIBP1ALRK4T3ZK20H4WFHEY5X2OZB4C1MN&client_secret=LLUU3RJV0MHUXU2RSWDZ3RAPO00HFZRKVGU2AGGXUQB41DUY&v=20180728'

class Search extends Component {
  state = {
    query: '',
    venues: []
  }

  getInfo = () => {
    fetch(`${API}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          venues: data.data
        })
      })
  }
  
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render () {
    return (
      <div className="search-box">
      <form>
      <input type="text" placeholder="Search for venue" ref={input => this.search = input} onChange={this.handleInputChange}/>
      <Places results={this.state.venues} />
      </form>
      </div>
    )
  }
}

export default Search;