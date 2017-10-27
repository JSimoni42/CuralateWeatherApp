import React, { Component } from 'react';
import Search from './Search';

class Content extends Component {

  render(){
    const pageFinder = {
      'search': <Search />
    }
    return(
      <main>
        {pageFinder[this.props.page]}
      </main>
    );
  }
}

export default Content;
