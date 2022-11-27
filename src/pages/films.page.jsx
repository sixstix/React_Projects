import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "./helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");
  

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avg_score, total, latest } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>"Studio Ghibli Films"</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="pickDirector">Pick Director:</label>
          <select
            name=""
            id="pickDirector"
            value={searchDirector}
            onChange={(event) => {
              setSearchDirector(event.target.value);
            }}
          >
            <option value="">All</option>
            {directors.map((directorName, index) => {
              return (
                <option key={`${directorName}${index}`} value={directorName}>
                  {directorName}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.length > 0
          ? filmsByDirector.map((element) => {
              return (
                <li key={element.id}>
                  <p>
                    {element.title} ---- {element.rt_score}%
                  </p>
                  <img src={element.image} alt="Movie Poster" />
                </li>
              );
            })
          : list.map((element) => {
              return (
                <li key={element.id}>
                  <Link to={`${element.id}`}>{element.title}</Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default FilmsPage;
