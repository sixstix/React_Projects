import { Component } from 'react';
import './App.css';
import FilmsList from './components/filmsList';
import { useState } from 'react';

function App(props) {

    let [list, setList] = useState(["ready", "set", "GO"]);    
    let [text, setText] = useState("");    
        
    function onSubmit(event) {
      event.preventDefault();
      let updateList = [...list, text];
      setList(updateList);
      setText("");
    }
    
      return (
         <div>
          <h1>Hello World</h1>
            <form onSubmit={onSubmit}>
              <input 
              type="text" id="text" name="text" value={text} 
              onChange={(event) => setText(event.target.value)}
              />
              <button type="submit">Add</button>
            </form>
            <ul>
              {list.map((item, index) => {
                return (<li key={index}>{item}</li>);
              })}
            </ul>
            <FilmsList />
         </div>
       );
    
  }
      
      

  export default App;
    





