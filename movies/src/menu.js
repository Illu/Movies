import React, { Component } from 'react';
import {cfg} from './cfg.js';

class CheckBox extends Component{

  constructor(props){
    super(props);

    this.state = {
      mobileMenuDisplay: false
    }
  }

  updateMobileMenu(v){
    //v should be a boolean
    this.props.updateCheck(v);
  }

  render(){
    return (
      <input
        type='checkbox'
        className='input-toggler'
        id='menuToggler'
        checked={this.props.display}
        onChange={this.updateMobileMenu.bind(this, !this.state.mobileMenuDisplay)}
      />
    );
  }
}

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

  constructor(props){
    super(props);
    this.state = {
      check: false
    }
  }

  onClick(n){

    //hide menu on mobile
    this.setState({check: !this.state.check});

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

  updateCheck(){
    this.setState({check: !this.state.check});
  }

  render(){
    return (

      <div>
        <CheckBox display={this.state.check} updateCheck={this.updateCheck.bind(this)}/>
        <label htmlFor="menuToggler" className='menu-toggler'>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
          <span className='menu-toggler__line'/>
        </label>
        <div className='menu'>
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
        </div>
      </div>
    );

  }
}

export default Menu;
