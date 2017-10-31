import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }
  }

  render() {
    return(
      <div>
        <h1>Enter Location Name</h1>
        <input value={this.state.search} onChange={(search) => this.setState({ search })} />
      </div>
    );
  }
}

export default Search;
