import React from 'react'

import MovieCard from "./MovieCard";
const MovieList = ({movies,del,text,ratef}) => {
  return (
    <div 
    style={{ 
    display:"flex",
    justifyContent:"space-evenly", 
    alignItems:"center",
    flexWrap:"wrap" 
    }}
    >
     {movies
     .filter(
      (el)=>
        el.name.trim().toUpperCase().includes(text.trim().toUpperCase())&&
        el.rating >= ratef
    )
    .map((el) => (
      <MovieCard el={el} key={el.id} del={del}/>
    ))} 
    </div>
  )
}

export default MovieList
