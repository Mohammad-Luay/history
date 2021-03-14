import React from 'react';
import logo from './logo.svg';
import './App.css';


const Navigation = () => {
  return(
    <div className = "NavigationChild">

    <div>HISTORY</div>
    <a href="#">home</a>
    <a href="#">Heros</a>
    <a href="#">History</a>
    <a href="#">About us</a>
    <a href="#">Contact us</a>

    </div>
    )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
              <Navigation/>

      </header>
    </div>
  );
}

export default App;
