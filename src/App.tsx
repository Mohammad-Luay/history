import React from 'react';
import logo from './logo.svg';
import './App.css';

 
const Navigation = () => {
  return(
    <div className = "Navigation">

    <div className = "NavigationChild">HIST0RY</div>
    <a className ="NavigationChild" href="#">home</a>
    <a className ="NavigationChild" href="#">Heros</a>
    <a className ="NavigationChild" href="#">History</a>
    <a className ="NavigationChild" href="#">About us</a>
    <a className ="NavigationChild" href="#">Contact us</a>

    </div>
    )
}
const Splash = () => {
  return(
    <img src="background.jpg" style={{width: "100%"}} ></img>

    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <Navigation/>
              <Splash/>

      </header>
    </div>
  );
}

export default App;
