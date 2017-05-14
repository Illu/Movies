import React, { Component } from 'react';
import placeholder from '../public/assets/imgs/placeholder-poster.png';
import Details from './details.js';
import {getTitle} from './utils.js';

class Moviecard extends Component {

  constructor(props){
    super(props);
    this.state = {class: "movie-card"}
  }

  handleClick(id){
    this.props.showDetails();
    console.log('Clicked on ' + id);
  }


  render(){

    var imgUrl;
    if (this.props.img)
      imgUrl = 'http://image.tmdb.org/t/p/w500/' + this.props.img;
    else
      imgUrl = placeholder;

    var posterAlt = this.props.name + " poster";
    var id = 'movie' + this.props.id;

    return (
      <div className="movie-card" id={id}>
        <img src={imgUrl}
             alt={posterAlt}
             className='movie-poster'
             onClick={() => this.handleClick(this.props.id)}
        />
        <h3 className='movie-title'>{this.props.name}</h3>
      </div>
    );
  }
}


class Movielist extends Component {

  constructor(props){
    super(props);
    this.state = {
      moviesNumber: 6,
      currentIndex: 0,
      movies: [],
      showDetails: -1,
      showDetailsData: null
    }
  }

  getFirsts(n, d){

    var moviesTmp = this.state.movies;
    for (var i = this.state.currentIndex; i < n + this.state.currentIndex; i++){
      try {

        var name = getTitle(d.data.results[i]);

        moviesTmp.push(<Moviecard
                    name={name}
                    img={d.data.results[i].poster_path}
                    id={i}
                    key={i}
                    enabled={null}
                    showDetails={this.showDetails.bind(this, i, d.data.results[i])}
                  />)
        }
        catch (err){
          console.log('Something went wrong retrieving a movie: ' + err)
        }
    }
    this.setState({movies: moviesTmp, currentIndex: i});
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.getFirsts(this.state.moviesNumber, nextProps);
  }

  resetDetails(){
    this.setState({showDetails: -1});
    this.setState({showDetailsData: null});
  }

  showDetails(i, data){
    this.setState({showDetails: i});
    this.setState({showDetailsData: data});
  }

  render(){

    console.log(this.props.data)

    var loadButton =
    <button onClick={ (e) => this.getFirsts(6, this.props)}
            className='load-more-button'>
      Load more
    </button>;

    if (this.state.currentIndex >= 20){
      loadButton =
      <h3 className='end-of-list'>You've reached the end of the list!</h3>;
    }

    if (this.props.data){
      return(
        <div className='movielist'>
          <h2 className="section-title">
            {this.props.title}
          </h2>
          <div className='movie-cards-container'>
            {this.state.movies}
          </div>
          {loadButton}
          <Details
            show={this.state.showDetails}
            data={this.state.showDetailsData}
            exit={this.resetDetails.bind(this)}
          />
        </div>
      );
    } else {
      return(
        <div className='loading-wrapper'>
          <div className='loading-anim'/>
        </div>
      );
    }
  }
}

export default Movielist;
