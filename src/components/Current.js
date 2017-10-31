import React, { Component } from 'react';

class Current extends Component {
  render() {
    return(
      <div>I am a current page! Searching for {this.props.query}</div>
    );
  }
}

export default Current;
