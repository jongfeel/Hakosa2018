/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
       id: 1,
       title: "title",
       url: "https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg",
    };
  }

  async componentWillMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor((Math.random() * 5000) + 1));
    const resolve = await response.json();
    this.setState(resolve);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
        <div>
            <p id="photo-id">The ID is {this.state.id}</p>
            <p class="photo-title">The title is {this.state.title}</p>
            <img src={this.state.url}/>
        </div>
        </body>
      </div>
    );
  }
}

export default App;
