import React, { Component } from 'react';

class Menu extends Component {
  render(){
    return (
      <ul>
        <a href="#">
          <li className="menu-app-title">
            <p>Movies</p>
          </li></a>
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
