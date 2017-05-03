import React, { Component } from 'react';
import './App.css';
import {loadJSON} from './utils.js';
import Movielist from './movielist.js';
import Topbar from './topbar.js';
import Menu from './menu.js';
import {cfg} from './cfg.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {test: null}

  }


  componentDidMount(){
    this.getData();
  }

  getData(){
    loadJSON("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
              data => this.setState({test: data}),
              function(xhr){
                console.log("Error retrieving data");
              }
            );
  }

  render() {

    // var imgUrl = 'http://image.tmdb.org/t/p/original/' + this.state.test;

    return (
      <div className="App">

        <input type='checkbox' className='input-toggler' id='menuToggler'/>
        <label htmlFor="menuToggler" className='menu-toggler'>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
        </label>

        <div className="menu">
          <Menu />
        </div>

        <div className="main-container">
          {/* <img src={imgUrl}/> */}
          <Topbar />
          <Movielist data={this.state.test}/>
        </div>
      </div>
    );
  }
}

export default App;
