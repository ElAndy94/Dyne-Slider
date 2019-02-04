import React, { Component } from 'react';
import tile1 from './assets/images/tile1.png';
import tile2 from './assets/images/tile2.png';
import tile3 from './assets/images/tile3.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideText: 'Check-in to the table and browse the menu to place your order.',
    };
  }

  slideOneText = () => {
    this.setState({ slideText: 'Check-in to the table and browse the menu to place your order.'});
  }

  slideTwoText = () => {
    this.setState({ slideText: 'View the app by scanning the NFC tag.'});
  }

  slideThreeText = () => {
    this.setState({ slideText: 'Enjoy the food and pay via the app when ready!'});
  }

  render() {
    return (
      <div className="slider">
        <div className="slides">
          <div id="slide-1">
            <img src={tile1} alt="logo1"/>
          </div>
          <div id="slide-2">
            <img src={tile2} alt="logo2"/>
          </div>
          <div id="slide-3">
            <img src={tile3} alt="logo3"/>
          </div>
        </div>
          <p id="white-text">{this.state.slideText}</p>
          <a href="#slide-1" onClick={this.slideOneText}>1</a>
          <a href="#slide-2" onClick={this.slideTwoText}>2</a>
          <a href="#slide-3" onClick={this.slideThreeText}>3</a>
      </div>
    );
  }
}

export default App;