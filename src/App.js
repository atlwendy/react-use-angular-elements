import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    let button = document.querySelector('ts-button');
    let buttonHTMLElement = document.querySelector('.c-button');
    let count = 0;
    this.component.addEventListener('click', (event) => {
      if (count % 2 === 0) {
        buttonHTMLElement.textContent = "Click again!!";
        button.format = 'fill';
        button.theme = "primary";
        button.collapsed = 'true';
      } else {
        buttonHTMLElement.textContent = "Click Me!!";
        button.format = 'hollow';
        button.theme = "warn";
        button.collapsed = 'false';
      }
      count++;
      if (count === 5) {
        button.isDisabled = true;
      }
    });
  }

  componentWillUnmount() {
    this.component.removeEventListener('click', this.onClickSubmit);
  }


  handleRef = component => {
    this.component = component;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here!!!
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
        <div className="button">
          <ts-button
            buttonType="search"
            theme="warn"
            format="hollow"
            ref={this.handleRef}
          >Click Me!!</ts-button>
        </div>
      </div>
    );
  }
}

export default App;
