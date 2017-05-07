import React, { Component } from 'react';
import {cfg} from './cfg.js';

class Search extends Component{
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.updateData("https://api.themoviedb.org/3/search/multi?api_key=" + cfg.api_key + "&language=en-US&query=" + e.target.value + "&page=1&include_adult=true");
    }
  }

  render() {
    return <input className="search" placeholder="Search movies..." onKeyPress={this.onKeyPress} />
  }
}

class Menu extends Component {
  render(){
    return (
      <ul>
        <a href="#">
          <div className="menu-app-title">
            <p>Movies</p>
          </div></a>
        <Search updateData={this.props.updateData}/>
        <a href="#">
          <li className="menu-title">
            <p>Popular now</p>
          </li></a>
        <a href="./gallery.html">
          <li className="menu-title selected">
            <p>Most recent</p>
          </li></a>
        <a href="#">
          <li className="menu-title">
            <p>Top rated</p>
          </li></a>
        <a href="#">
          <li className="menu-title">
            <p>In theaters</p>
          </li></a>
        <a href="#">
          <li className="menu-title">
            <p>Notifications</p>
          </li></a>
      </ul>
    );

  }
}

export default Menu;
