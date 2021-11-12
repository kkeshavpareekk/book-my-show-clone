import axios from "axios";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

//components
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

//Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movies/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
};

export default App;
