import React from 'react';
import './App.css';
import Form from './form.jsx';
import Two from './Two.jsx'

function App() {
  return (
    <div className="App">
      <h1>The date and time of today is:</h1>
      <Form date={Date()} />
      <Two time={Date()} />
    </div>
  );
}
export default App;
