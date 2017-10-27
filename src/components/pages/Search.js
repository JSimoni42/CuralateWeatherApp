import React, { Component } from 'react';
import '../../styles/search.css'

class Search extends Component {
  constructor(){
    super();
    this.state = {
      locationQuery: null
    }
  }

  onLocation(){
    // Send location Query to google places API
  }

  render(){
    return(
      <section>
        <button></button>
        <form onSubmit={() => this.onLocation()}>
          <input className="search-bar"
                placeholder="Search for a Location"
                value={this.state.locationQuery}
                onChange={(locationQuery) => this.setState({ locationQuery })}/>
        </form>
      </section>
    );
  }
}

export default Search;
