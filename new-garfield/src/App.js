import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }

    this.getJoke = this.getJoke.bind(this)
  }

  getJoke() {
    const apiUrl = 'https://icanhazdadjoke.com';

    const request = new XMLHttpRequest();

    request.open('GET', apiUrl)

    request.setRequestHeader('Accept', 'application/json')

    request.onload = () => {
      const response = JSON.parse(request.responseText);


      this.setState({
        data: [...this.state.data, response.joke],
      })

    }

    request.send()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <button onClick={this.getJoke}>Get new joke</button>
        <br />
        <ul>
          <h1>
            {this.state.data.map((joke, index) => {
                return (
                  <li key={index}>{joke}</li>
                )
              })
            }
          </h1>
      </ul>
        
      </div>
    )
  }
  
}

export default App;


