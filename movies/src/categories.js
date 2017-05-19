import {cfg} from './cfg.js'

export const categories = [
    {
      "title": "Popular now",
      "url": "https://api.themoviedb.org/3/movie/popular?api_key=" + cfg.api_key + "&language=en-US&page=1"
    },
    {
      "title": "Upcoming",
      "url": "https://api.themoviedb.org/3/movie/upcoming?api_key=" + cfg.api_key + "&language=en-US&page=1"
    },
    {
      "title": "Latest",
      "url": "https://api.themoviedb.org/3/movie/latest?api_key=" + cfg.api_key + "&language=en-US"
    },
    {
      "title": "Top revenue",
      "url": "https://api.themoviedb.org/3/discover/movie?api_key=" + cfg.api_key + "&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1"
    },
    {
      "title": "In theaters",
      "url": "https://api.themoviedb.org/3/movie/now_playing?api_key=" + cfg.api_key + "&language=en-US&page=1"
    }

  ];
