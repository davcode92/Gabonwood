import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import { infoMovies } from './moviesData';
import HeaderNav from "./components/HeaderNav";
import MovieList from "./components/MovieList";
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import AdsComp from './components/AdsComp';


function App() {
  const [movies, setMovies] = useState(infoMovies);
  const [searchtext, setSearchtext] = useState("");
  const [ratef, setRatef] = useState(1);

  const handleDelete = (MovieID) => {
    setMovies(movies.filter((el)=>el.id!== MovieID));
   };

   const handleAdd = (newMovie) =>{
    setMovies([...movies,newMovie]);
   };
   const handleSearch = (e) => {
    setSearchtext(e.target.value);
   };

   const handleRating = (x) => setRatef(x);
    
   return (
    <div className="App">
    <HeaderNav searchfunction={handleSearch} text={searchtext} 
    ratefun={handleRating}
    ratef={ratef}
    />
    <AdsComp/>
    <MovieList movies={movies} ratef={ratef} del={handleDelete} text={searchtext}/>
    <AddMovie add={handleAdd}/><br/>
    <Footer/>
    </div>
    
  );
}

export default App;
