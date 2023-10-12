
import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./movie.jsx"; 
import SearchIcon from './search.svg';

// 7ede0638

 //Global Variables 

 const API_URL = 'http://www.omdbapi.com/?apikey=7ede0638&';
 const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
};

const App =() => {
   const [movies, setMovies] = useState([]); 
   const [searchTerm, setSearchTerm] = useState([]);
    
  // Load the movie by using the base URL and querying the title 
  // This defaults with a GET request 
const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}s=${title}`)
    .then((movies) => {
           return movies.json()
    }) // Convert the data into JSON format 
    .then((movieData)=>{

      // Set the State to initiliaze with all the movies from the API 
      // This is an array of movies 
      // The setMovies will then return the array into the movies local variable
      setMovies(movieData.Search);


      console.log(movieData.Search);
    })
    .catch( (err)=>{
      console.err(err + 'Failed to connect to the movies API');
    })
}
  // An effect when and only when the UI first renders
  useEffect( ()=>{
    searchMovies('Batman');
  }, []);

  return (
    <div className="App">

      <div className="container">
      <h1>MovieLand</h1>
      </div>
  
      <div className="search">
        <input placeholder="Seach for movies" value={searchTerm} onChange={(event)=> {setSearchTerm(event.target.value)}} ></input>

        {
        // IMG This is turned into a button
        }
         <img src={SearchIcon} onClick={ ()=> { searchMovies(searchTerm) }}></img>
      </div>
 
    {
      //This is a javascript code block, if we didn't use a javascript block 
      //and we did a ternary operator that would get rendered as written to the screen
      //The javascript block allows us to dynamically write code 
    }
      {
        
        movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) =>  
              
              { return <MovieCard movie={movie}/>}
  
              )}
           </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }
      
    </div>
  );
}


export default App;
