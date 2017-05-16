import React, { Component } from 'react';
import './details.css';
import {getTitle} from './utils.js';
import moment from 'moment';
import placeholder from '../public/assets/imgs/placeholder-backdrop.png'

class Details extends Component{

  render(){

    console.log("details received " + this.props.show)

    console.log(this.props.data)

    if (this.props.show < 0)
      return(
        <div
          className='details-container'
          style={{transform: 'translate(100vw, 0px)'}}
          >
        </div>
      );
    else{

      var backdrop;
      if (this.props.data.backdrop_path)
        backdrop = "http://image.tmdb.org/t/p/w1280/" + this.props.data.backdrop_path;
      else
        backdrop = placeholder;
      var name = getTitle(this.props.data),
      backAlt = name + " backdrop image",
      date = moment(this.props.data.release_date).format('MMM DD YYYY'),
      overview = this.props.data.overview;

      return (
        <div
          className='details-container'
          style={{transform: 'translate(0vw, 0px)'}}
          >
            <div className='close-button' onClick={this.props.exit}/>
            {/*Switch this for a div with background image
              then put the mtitle and date as children
              to have the text always positioned correctly  */}
            <img src={backdrop}
                 alt={backAlt}
                 className='backdrop'
            />
            <div className='movie-details'>
              <h1 className='mtitle'>{name}<br/></h1>
              <h4 className='date'>{date}</h4>

              <p className='overview'>{overview}</p>
            </div>
        </div>
      );
    }
  }
}

export default Details;
