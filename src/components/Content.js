import React, { Component } from 'react';
import Search from './Search';
import Current from './Current';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      page: props.page,
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    this.setState({ query, page: 'current' })
  }

  render(){
    const pageFinder = {
      'search': <Search handleSearch={this.handleSearch}/>,
      'current': <Current query={this.state.query} />,
    }
    return(
      <div>
        {pageFinder[this.state.page]}
      </div>
    );
  }
}

export default Content;
