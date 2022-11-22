import { useState } from 'react';
import { useEffect } from 'react';

function FilmsList(props)  {
    let [list, setList] = useState([]);

    function getFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((films) => setList(films))
        .catch((error) => console.error(error));
    }

    useEffect(() =>{
        getFilms();
    },   []);

    
    
    return (
        <ul>
            {list.map((element) => {
                return <li key={element.id}>{element.title}</li>
            })}
        </ul>
    )
    
}
    
        

export default FilmsList;
        