import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav'

function App(props) {
  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
