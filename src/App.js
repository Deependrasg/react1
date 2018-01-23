import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. hello deependra singh
        </p>
        <h1> Im representing <State /> from here</h1>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}
/////
export default App;

class State extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}


export class First extends React.Component{
  render(){
    return (
            <h1>Export Class First </h1>
    );
  }
}
// 
export class Second extends React.Component{
  render(){
    return (
            <h1>Export Class Second </h1>
    );
  }
}
// 
// export class First;