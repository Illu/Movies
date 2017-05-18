import React, { Component } from 'react';
import {cfg} from './cfg.js';
import {categories} from './categories.js';

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

class MenuItems extends Component{
  // This component requires the categories array

  constructor(props){
    super(props);
    this.state = {
      items: null,
      activeItem: 0
    }
  }

  componentWillMount(){
    var items = [];
    var i = 0;

    categories.forEach((item) => {

      var classes = "menu-title";
      if (this.state.activeItem === i)
        classes += " selected";

      items.push(
        <a href="#" key={i}>
          <li
            className={classes}
            onClick={() => {
              this.setState({activeItem: i});
              this.props.clickEvent(item.url, item.title);
            }}>
            <p>{item.title}</p>
          </li>
        </a>
      );
      i++;
    });

    this.setState({items: items});
  }

  render(){

    return (
      <ul>
        <a href="#">
          <div className="menu-app-title" onClick={this.props.clickEvent.bind(this, categories[0].url, categories[0].title)}>
            <p>Movies</p>
          </div></a>
        <Search updateData={this.props.updateData}/>
        {this.state.items}
      </ul>
    );
  }
}

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      check: false
    }
  }

  onClick(url, title){

    //hide menu on mobile
    this.setState({check: !this.state.check});

    //Update data url and set the title
    this.props.updateData(url, title);
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
          <MenuItems
            updateData={this.props.updateData.bind(this)}
            clickEvent={this.onClick.bind(this)}
          />
        </div>
      </div>
    );

  }
}

export default Menu;
