import React, { Component } from 'react';
import '../styles/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return(
      <div id="search-component">
        <h1>Enter Location Name</h1>
        <form onSubmit={() => this.props.handleSearch(this.state.search)}>
          <input type="text" value={this.state.search} onChange={this.handleInput} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
