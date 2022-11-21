import { Component } from 'react';

class FilmsList extends Component {

    constructor(props) {
        super(props) 

        this.state = {
             list: []
        }
    }
        
    getFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((films) => this.setState({list: films}))
        .catch((error) => console.error(error));
    }

    componentDidMount(){
        this.getFilms();
    }


    render() {
        return<ul>
            {this.state.list.map((element) => {
                return <li key={element.id}>{element.title}</li>
            })}
        </ul>;
    }
}

export default FilmsList;