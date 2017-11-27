import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Button from './components/Button'
import Emoji from './components/Emoji'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>

        <Emoji />
        <Emoji cat />
        <Emoji emotion='sad' />
        <Emoji cat emotion='sad' />
        <Emoji emotion='love' />
        <Emoji cat emotion='love' />
        <Emoji emotion='fear' />
        <Emoji cat emotion='fear' />

        <br />

        <Button children='Find Flights' primary />
        <Button>
          { /* These are children as well */ }
          <Emoji emotion='love' />
          {' '}
          Sign Up
        </Button>
        <Button children='Enter Competition' magic href='/competition' />
        <ul>
          <li>First Item</li>
          <li>Second Item</li>
          <li>Third Item</li>
        </ul>
        This is content
      </div>
    )
  }
}

export default App
