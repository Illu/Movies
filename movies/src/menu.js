import React, { Component } from 'react';
import {cfg} from './cfg.js';

class Search extends Component{
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.updateData("https://api.themoviedb.org/3/search/multi?api_key=" + cfg.api_key + "&language=en-US&query=" + e.target.value + "&page=1&include_adult=true", "Search results");
    }
  }

  render() {
    return <input className="search" placeholder="Search movies..." onKeyPress={this.onKeyPress} />
  }
}

class Menu extends Component {

  onClick(n){
    switch(n){
      case 0:
        this.props.updateData("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", "Popular now");
        break;
      case 1:
        this.props.updateData("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=primary_release_date.desc&include_adult=true&include_video=false&page=1", "Most recent");
        break;
      case 2:
        this.props.updateData("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=vote_count.desc&include_adult=true&include_video=false&page=1", "Top rated");
        break;
      case 3:
        this.props.updateData("https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1", "Top revenue");
        break;
      default:
        console.log("Something unexpected happened");
        break;
    }
  }

  render(){
    return (
      <ul>
        <a href="#">
          <div className="menu-app-title" onClick={this.onClick.bind(this, 0)}>
            <p>Movies</p>
          </div></a>
        <Search updateData={this.props.updateData}/>
        <a href="#">
          <li className="menu-title selected" onClick={this.onClick.bind(this, 0)}>
            <p>Popular now</p>
          </li></a>
        <a href="#">
          <li className="menu-title" onClick={this.onClick.bind(this, 1)}>
            <p>Most recent</p>
          </li></a>
        <a href="#">
          <li className="menu-title" onClick={this.onClick.bind(this, 2)}>
            <p>Top rated</p>
          </li></a>
        <a href="#">
          <li className="menu-title"  onClick={this.onClick.bind(this, 3)}>
            <p>Top revenue</p>
          </li></a>
      </ul>
    );

  }
}

export default Menu;
