import React, { Component } from 'react';

class Moviecard extends Component {

  constructor(props){
    super(props);
    this.state = {class: "movie-card"}
  }

  handleClick(id){
    console.log('Clicked on ' + id);
  }


  render(){

    var imgUrl = 'http://image.tmdb.org/t/p/w500/' + this.props.img;
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

  getFirsts(n){
    //Get the n firsts movies of the data
    var movies = [];

    for (var i = 0; i < n; i++){
      movies.push(<Moviecard
                  name={this.props.data.results[i].original_title}
                  img={this.props.data.results[i].poster_path}
                  id={i}
                  key={i}
                  enabled={null}
                />)
    }
    return movies;
  }

  render(){

    if (this.props.data){
      var movies = this.getFirsts(6);

      return(
        <div className='movielist'>
          <h2 className="section-title">Popular now</h2>
          <div className='movie-cards-container'>
            {movies}
            <h1>{this.props.data.results[0].overview}</h1>
          </div>
        </div>
      );
    } else {
      return(
        <p>Loading movies...</p>
      );
    }
  }
}

export default Movielist;
