import React, { Component } from 'react';
import Search from './Search';

class Content extends Component {

  render(){
    const pageFinder = {
      'search': <Search />
    }
    return(
      <div>
        {pageFinder[this.props.page]}
      </div>
    );
  }
}

export default Content;
