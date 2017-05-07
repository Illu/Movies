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

    this.state = {
      test: null,
      url: "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    }

  }

  componentDidMount(){
    this.getData("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
  }

  updateURL(url){
    //The state is used as a key for the main-container element.
    this.setState({url: url});
    this.getData(url);
  }

  getData(url){
    console.log("getting data");
    loadJSON(url,
              data => this.setState({test: data}),
              function(xhr){
                console.log("Error retrieving data");
              }
            );
  }

  render() {

    // var imgUrl = 'http://image.tmdb.org/t/p/original/' + this.state.test;

    console.log("render !")

    return (
      <div className="App">

        <input type='checkbox' className='input-toggler' id='menuToggler'/>
        <label htmlFor="menuToggler" className='menu-toggler'>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
        </label>

        <div className="menu">
          <Menu updateData={this.updateURL.bind(this)}/>
        </div>

{/* key to reset component when changing data url */}
        <div className="main-container" key={this.state.url}>
          {/* <img src={imgUrl}/> */}
          <Topbar />
          <Movielist data={this.state.test}/>
        </div>
      </div>
    );
  }
}

export default App;
