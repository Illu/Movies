import React, { Component } from 'react';
import './details.css';
import {getTitle} from './utils.js';

class Details extends Component{

  render(){

    console.log("details received " + this.props.show)

    console.log(this.props.data)

    if (this.props.show < 0)
      return(
        <div
          className='details-container'
          style={{marginLeft: 100 + 'vw'}}
          >
        </div>
      );
    else{

      var name = getTitle(this.props.data);

      return (
        <div
          className='details-container'
          style={{marginLeft: 0}}
          >
            <div className='close-button' onClick={this.props.exit}/>
            <h1 className='mtitle'>Details about {name}</h1>
        </div>
      );
    }
  }
}

export default Details;
