import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Don't Stare Too Long!</h1>
        <p>
          React is so cool!
        </p>
        <p>No seriously, React is SO COOL!!</p>
        <ul>
          <li>IT'S</li>
          <li>SO</li>
          <li>KEWL</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
