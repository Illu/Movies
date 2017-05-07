import React, { Component } from 'react';
import {cfg} from './cfg.js';

//These components are only enabled on mobile

class SearchMobile extends Component {

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.updateData("https://api.themoviedb.org/3/search/multi?api_key=" + cfg.api_key + "&language=en-US&query=" + e.target.value + "&page=1&include_adult=true");
    }
  }

  render(){

    if (this.props.display)
      return (
        <div>
          <input className='search' type='text' placeholder='Search movies...' onKeyPress={this.onKeyPress} autoFocus />
        </div>
      )
    return <h1 className='app-title'>Movies</h1>
  }
}

class Topbar extends Component {

  constructor(props){
    super(props);
    this.state = ({displayMobileInput: false})
  }

  mobileSearch(){
    this.setState({displayMobileInput: !this.state.displayMobileInput});
  }

  render(){

    return(
        <div className='topbar'>
          <div className='search-mobile' onClick={this.mobileSearch.bind(this)}></div>

          <SearchMobile
            display={this.state.displayMobileInput}
            updateData={this.props.updateData}
          />
        </div>

    );

  }
}

export default Topbar;
