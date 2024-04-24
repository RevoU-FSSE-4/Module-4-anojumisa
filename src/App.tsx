import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import NavigationComponent from './Components/NavigationComponent';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavigationComponent/>
      </header>
    </div>
  );
}

export default App;
