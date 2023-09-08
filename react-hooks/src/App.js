import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName]= useState('Meetali');
  const [lastName, setLastName]= useState('Kapse');
  const [message, setMessage]= useState ('This is the message');
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="App">
    <div className='form'>
      <label htmlFor="firstname">First Name: &nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="firstname" id="fname" value={firstName} onChange={handleFirstName}/>
      <br />

      <label htmlFor="lastname">Last Name: &nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="lastname" id="lname" value={lastName} onChange={handleLastName}/>
      <br />
      <br />
      <label htmlFor="message">Message: &nbsp;&nbsp;&nbsp;</label>
      <textarea name="message" id="message" cols="30" rows="5" value={message} onChange={handleMessage}></textarea>
      <div className='display'>
        <h2>First Name: {firstName} <br/> Last Name: {lastName}</h2>
        <p>Message: {message}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
