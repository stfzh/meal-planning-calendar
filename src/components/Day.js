import React, { useState } from 'react';
import '../App.css';


const Day = (props) => {

  const [lunch, setLunch] = useState('');
  const [lunchCost, setLunchCost] = useState('');
  const [dinner, setDinner] = useState('');
  const [dinnerCost, setDinnerCost] = useState('');
  const [date, setDate] = useState('');

  const handleLunchChange = e => {
    setLunch(e.target.value);
    setDate(props.id);
  }

  const handleDinnerChange = e => {
    setDinner(e.target.value);
    setDate(props.id);
  }

  const handleLunchSubmit = e => {
    e.preventDefault();
    const lunchDetails = {
      'lunch': lunch,
      'lunchCost': lunchCost, 
      'date': date
    }
    console.log(lunchDetails);
  }

  const handleDinnerSubmit = e => {
    e.preventDefault();
    const dinnerDetails = {
      'dinner': dinner,
      'dinnerCost': dinnerCost,
      'date': date
    }
    console.log(dinnerDetails);
  }


  return (
    <td>
    <table>
      <thead>
      <tr><th>{props.heading}</th></tr>
      </thead>
      <tbody>
      <tr>
      <td>from backend</td>
      <td>backend price</td>
      </tr>
      <tr>
      <td><form onSubmit={handleLunchSubmit}><input type='text' onChange={handleLunchChange}/></form></td>
      <td><form onSubmit={handleLunchSubmit}><input type='text' onChange={e => setLunchCost(e.target.value)}/></form></td>
      </tr>
      <tr>
      <td><form onSubmit={handleDinnerSubmit}><input type='text' onChange={handleDinnerChange}/></form></td>
      <td><form onSubmit={handleDinnerSubmit}><input type='text' onChange={e => setDinnerCost(e.target.value)}/></form></td>
      </tr>
      </tbody>
    </table>
    </td>
  )
}

export default Day;