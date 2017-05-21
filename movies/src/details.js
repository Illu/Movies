import React, { Component } from 'react';
import './details.css';
import {getTitle} from './utils.js';
import {loadJSON} from './utils.js';
import moment from 'moment';
import placeholder from '../public/assets/imgs/placeholder-backdrop.png'
import {cfg} from './cfg.js';
import {Moviecard} from './movielist.js';

class Similar extends Component{
  render(){

    var infos = this.props.data.results,
    similarTmp = [];

    if (infos != null){
      for (var i = 0; i < 6; i++){
        similarTmp.push(
          <Moviecard
           name={getTitle(infos[i])}
           img={infos[i].poster_path}
           id={infos[i].id}
           key={infos[i].id}
           enabled={null}
           showDetails={this.props.updateDetails.bind(this, 0, infos[i])}
         />
        );
      }
    }

    return (
      <div className='movie-cards-container'>
         {similarTmp}
      </div>
    );
  }
}

class Details extends Component{

  constructor(props){
    super(props);
    this.state = {similar: null}
  }

  componentWillReceiveProps(nextProps){
    try{
    console.log("Getting similar movies data...");
    loadJSON("https://api.themoviedb.org/3/movie/" + nextProps.data.id + "/similar?api_key=" + cfg.api_key + "&language=en-US&page=1",
      data => this.setState({similar: data}),
      function(xhr){
        console.log("Error retrieving data");
      }
    );
    }
    catch(err){
      // Nothing, we closed the details panel
    }
  }

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
    else {

      var backdrop;
      if (this.props.data.backdrop_path)
        backdrop = "http://image.tmdb.org/t/p/w1280/" + this.props.data.backdrop_path;
      else
        backdrop = placeholder;
      var name = getTitle(this.props.data),
      date = moment(this.props.data.release_date).format('MMM DD YYYY'),
      overview = this.props.data.overview;

      return (
        <div
          className='details-container'
          style={{transform: 'translate(0vw, 0px)'}}
          >
            <div className='backdrop'
              style={
                {backgroundImage: 'url(' + backdrop + ')'}
              }>
              <div className='backdrop-bottom'>
                <h1 className='mtitle'>{name}<br/></h1>
                <h4 className='date'>{date}</h4>
              </div>
            </div>
            <div className='movie-details'>
              <p className='overview'>{overview}</p>
              <h3>Similar to...</h3>
              <Similar
                data={this.state.similar}
                updateDetails={this.props.updateDetails}
              />
            </div>
            <div className='close-button' onClick={this.props.exit}/>
        </div>
      );
    }
  }
}

export default Details;
