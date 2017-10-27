import React, { Component } from 'react';
import '../../styles/search.css'

class Search extends Component {
  thing(){

  }

  render(){
    return(
      <section>
        <form onSubmit={() => this.thing()}>
          <input className="search-bar" placeholder="Search for a Location" />
        </form>
      </section>
    );
  }
}

export default Search;
