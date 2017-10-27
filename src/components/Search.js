import React, { Component } from 'react';

class Search extends Component {
  thing(){
    
  }

  render(){
    return(
      <form onSubmit={() => this.thing()}>
        <input className="search-bar" placeholder="Search for things" />
      </form>
    );
  }
}

export default Search;
