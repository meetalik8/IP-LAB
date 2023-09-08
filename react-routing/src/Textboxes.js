import React from 'react';
import ReactDOM from 'react-dom';

const Textbox = ()=>{
    <div>
        <label htmlFor="box1">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="box2">Message</label>
        <input type="text" name="message" id="message" />
    </div>
}

export default Textbox;