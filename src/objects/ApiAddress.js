import React from "react";


export const ApiAddress ={
     API_KEY : "api_key=1cf50e6248dc270629e802686245c2c8",
     BASE_URL : "https://api.themoviedb.org/3",
     requestPopular :
     "https://api.themoviedb.org/3" + "/discover/movie?sort_by=popularity.desc&" + "api_key=1cf50e6248dc270629e802686245c2c8",
     requestComedy : `https://api.themoviedb.org/3/discover/movie?${"api_key=1cf50e6248dc270629e802686245c2c8"}&with_genres=35`,
     requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?${"api_key=1cf50e6248dc270629e802686245c2c8"}&language=en-US&page=1`,
      IMG_URL : "https://image.tmdb.org/t/p/w500",


}