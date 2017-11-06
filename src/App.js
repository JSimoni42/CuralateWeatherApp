import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';
import dotenv from 'dotenv';

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: "search",
      api_ready: false
    }
    dotenv.config();
    this.navigate = this.navigate.bind(this);
  }

  navigate(page){
    this.setState({ page })
  }

  render() {
    // const inputProps = {
    //   value: this.state.address,
    //   onChange: this.onChange,
    // }
    //
    // if (this.state.api_ready) {
    //   return (
    //     <form onSubmit={this.handleFormSubmit}>
    //       <PlacesAutocomplete inputProps={inputProps} />
    //       <button type="submit">Submit</button>
    //     </form>
    //   );
    // } else {
    //   return (
    //     <h1>Nothing...</h1>
    //   )
    // }

    return(
      <div className="App">
        <Navbar onNav={this.navigate}/>
        <Content page="search"/>
      </div>
    );
  }
}

export default App;
