import {cfg} from './cfg.js'

export const categories = [
    {
      "title": "Popular now",
      "url": "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    },
    {
      "title": "Most recent",
      "url": "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=primary_release_date.desc&include_adult=true&include_video=false&page=1"
    },
    {
      "title": "Top rated",
      "url": "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=vote_count.desc&include_adult=true&include_video=false&page=1"
    },
    {
      "title": "Top revenue",
      "url": "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1"
    }

  ];
