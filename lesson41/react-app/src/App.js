 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Текущее время! </h1>
      </div>
    );
  }
}

export default Clock;
