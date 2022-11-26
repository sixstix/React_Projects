import { useState } from "react";
import { useEffect } from "react";
import { filterFilmsByDirector } from "./helpers/film.helpers";
import { getListOf } from "./helpers/film.helpers";

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

  return (
    <div>
      <h1>"Studio Ghibli Films"</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="pickDirector">Pick Directors:</label>
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
              return <li key={element.id}>{element.title}</li>;
            })}
      </ul>
    </div>
  );
}

export default FilmsPage;
