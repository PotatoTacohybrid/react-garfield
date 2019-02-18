import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputDisabled: true,
      input: '',
      inputPlaceholder: '',
      messages: []
    }

    this.timer = this.timer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  timer() {
    let d = new Date()

    let curTime = d.getTime()

    let oldTime = localStorage.getItem('oldTime')

    if (!oldTime) { return true; }




    setTimeout(function() {
      let timeLeft = Math.round((oldTime / 1000) - (curTime / 1000) + 59)


        if (timeLeft <= 0) {
          this.setState({
            inputDisabled: false,
            input: '',
            inputPlaceholder: 'Your Garfield comment'
        })


        localStorage.removeItem('oldTime');

        return true;
      };

      this.setState({
        inputPlaceholder: (timeLeft >= 10) ? `Time until next message 0:${timeLeft}`: `Time until next message 0:0${timeLeft}`
      })
    }.bind(this), 1000)
  
  };



  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  };

  handleSubmit() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    })

    let d = new Date()

    localStorage.setItem('oldTime', d.getTime())
    this.timer()
  }


  render() {


    return (
      <div className="App">
        <textarea onChange={this.handleChange} value={this.state.input} placeholder={this.state.inputPlaceholder}></textarea>
        <button disabled={!this.timer()} onClick={this.handleSubmit}>Submit</button>
        <p>{this.state.messages}</p>
      </div>
    );
  }
}

export default App;


//function timer() {

//  let d = new Date()

//  let curTime = d.getTime()

//  let oldTime = localStorage.getItem('oldTime')


//  if (!localStorage.getItem('oldTime')) { return true; }

//  newText.disabled = true;
//  button.disabled = true;


//  setTimeout(function() {


//      let timeLeft = Math.round((oldTime / 1000) - (curTime / 1000) + 59)


//      if (timeLeft <= 0) {
//
//          newText.placeholder = `Your Garfield comment`;

//          button.disabled = false;
//          newText.disabled = false;


//          localStorage.removeItem('oldTime');


//          return true;
//     }
//     newText.placeholder = (timeLeft >= 10) ? `Time until next message 0:${timeLeft}`: `Time until next message 0:0${timeLeft}`;

///      timer();

//  }, 1000)

//}
