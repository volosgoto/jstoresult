import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Button extends Component {
  constructor(props){
    super(props);
    this.myClick = this.myClick.bind(this);
  }
  
  myClick(){
      // document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F5A6";
      document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F5A6";
      console.log('this is:', this);
    }
    
  

  render(){
    return (
      <div>
        {/* <button onClick={this.myClick()} className="clicker"> Изменить дизайн </button> */}
        <button className="clicker"> Изменить дизайн </button>
      </div>
    );
  }  
    
}


export default Button;
