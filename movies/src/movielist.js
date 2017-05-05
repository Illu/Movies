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

  constructor(props){
    super(props);
    this.state = {moviesNumber: 6, currentIndex: 0, movies: []}
  }

  getFirsts(n, d){

    var moviesTmp = this.state.movies;
    for (var i = this.state.currentIndex; i < n + this.state.currentIndex; i++){
      try {
        moviesTmp.push(<Moviecard
                    name={d.data.results[i].original_title}
                    img={d.data.results[i].poster_path}
                    id={i}
                    key={i}
                    enabled={null}
                  />)
        }
        catch (err){
          console.log('Something went wrong retrieving a movie: ' + err)
        }
    }
    this.setState({movies: moviesTmp, currentIndex: i});
  }

  componentWillReceiveProps(nextProps) {
    this.getFirsts(this.state.moviesNumber, nextProps);
  }

  render(){

    if (this.props.data){
      return(
        <div className='movielist'>
          <h2 className="section-title">Popular now</h2>
          <div className='movie-cards-container'>
            {this.state.movies}
          </div>
          <button onClick={ (e) => this.getFirsts(6, this.props)}
                  className='load-more-button'>
            Load more
          </button>
        </div>
      );
    } else {
      return(
        <div className='movielist'>
          Loading movies...
        </div>
      );
    }
  }
}

export default Movielist;
