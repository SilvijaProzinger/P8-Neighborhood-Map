import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
  }


  render () {
    return (
      <div className="search-box">
      <form>
      <input type="text" placeholder="Search for venue" ref={input => this.search = input} onChange={this.handleInputChange}/>
      <p>{this.state.query}</p>
      </form>
      </div>
    )
  }
}

export default Search;