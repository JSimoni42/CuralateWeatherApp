import React, { Component } from 'react';
import Search from './Search';
import Current from './Current';
import History from './History';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      page: props.page,
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page })
  }

  handleSearch(query) {
    this.setState({ query, page: 'current' });
  }

  render(){
    const pageFinder = {
      'search': <Search handleSearch={this.handleSearch} api_ready={this.props.api_ready}/>,
      'current': <Current location={this.state.query} />,
      'history': <History location={this.state.query} />,
      'about': "I am about!",
    }
    if (this.state.query || this.state.page == 'about') {
      return(
        <div>
          {pageFinder[this.state.page]}
        </div>
      );
    } else {
      return(
        <div>
          {pageFinder['search']}
        </div>
      )
    }
  }
}

export default Content;
