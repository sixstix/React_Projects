import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    let updateList = [...this.state.list, this.state.text];
    this.setState({ list: updateList, text: "" });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="text"
            name="text"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}git 
        </ul>
      </div>
    );
  }
}
export default App;
