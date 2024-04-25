import React from 'react';
import './App.css';
import NavigationComponent from './Components/NavigationComponent';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationComponent />
        {/* <HomePage/> */}
      </header>
    </div>
  );
}

export default App;
