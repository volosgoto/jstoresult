import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <Clock />
      </div>
    )
  };
}


ReactDOM.render(<App />, document.getElementById('root'));








// function Greet() {
//    let phrase = 'world!';
//   return (
//     <h1>Hello {phrase} {4 + 4}</h1>
//   )
// }

// function Greet(props) {
//  return (
//    <h1> Hello {props.phrase}. My name is {props.name} </h1>
//    )
// }

// function GreetAll(){
//   return (
//     <div>
//       <Greet phrase="world" name="Sam"/>
//       <Greet phrase="world" name="John"/>
//       <Greet phrase="world" name="Lenny"/>
//     </div>
//   )
// }

// ReactDOM.render(<GreetAll />, document.getElementById('root'));
// ReactDOM.render(<Greet />, document.getElementById('root'));
// ReactDOM.render(<Greet phrase='world!!!' name="Ivan"/>, document.getElementById('root'));

// let element = <Greet phrase='world!!!' name="Ivan"/>;
// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
