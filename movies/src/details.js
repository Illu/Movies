import React, { Component } from 'react';
import './details.css';
import {getTitle} from './utils.js';
import moment from 'moment';

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

      var name = getTitle(this.props.data),
      backdrop = "http://image.tmdb.org/t/p/w1280/" + this.props.data.backdrop_path,
      backAlt = name + " backdrop image",
      date = moment(this.props.data.release_date).format('MMM DD YYYY'),
      overview = this.props.data.overview;

      return (
        <div
          className='details-container'
          style={{marginLeft: 0}}
          >
            <div className='close-button' onClick={this.props.exit}/>
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
