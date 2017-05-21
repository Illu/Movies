import React, { Component } from 'react';
import './App.css';
import {loadJSON} from './utils.js';
import {Movielist} from './movielist.js';
import Topbar from './topbar.js';
import Menu from './menu.js';
import {categories} from './categories.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: null,
      url: categories[0].url,
      title: "Popular now",
      mobileMenuDisplay: false
    }

  }

  componentDidMount(){
    this.getData(categories[0].url);
  }

  updateURL(url, title){
    //The state is used as a key for the main-container element.
    this.setState({data: null})
    this.setState({url: url});
    this.setState({title: title});
    this.getData(url);
  }



  getData(url){
    console.log("getting data");
    loadJSON(url,
              data => this.setState({data: data}),
              function(xhr){
                console.log("Error retrieving data");
              }
            );
  }

  render() {

    return (
      <div className="App">
        <Menu updateData={this.updateURL.bind(this)} />

        {/* key to reset component when changing data url */}
        <div className="main-container" key={this.state.url}>
          <Topbar updateData={this.updateURL.bind(this)}/>
          <Movielist
            data={this.state.data}
            title={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default App;
