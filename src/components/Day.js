import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../App.css';

const Day = (props) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('');
  const [id, setId] = useState('');

  const onUpdate = () => {
    const db = firebase.firestore();
    if (props.lunch === undefined || props.dinner === undefined) {
      db.collection('meals').add({ name: name, cost: cost, date: date, type: mealType });
    // } else if (mealType === 'lunch') {
    //   db.collection('meals').doc(props.lunch.id).set({...props.lunch, name})
    // } else if (mealType === 'dinner') {
    //   db.collection('meals').doc(props.dinner.id).set({...props.dinner, name})
    // } 
    } else if (mealType === 'lunch') {
      db.collection('meals').doc(id).set({...props.lunch, name, cost})
    } else if (mealType === 'dinner') {
      db.collection('meals').doc(id).set({...props.dinner, name, cost})
    } 
  }

  useEffect(() => {
    // handleLunchClick();
  }, [setMealType]);

  const handleLunchClick = () => {
    if (props.lunch) {
      setId(props.lunch.id);
    }
    setDate(props.stringDate);
    setMealType('lunch'); 
  }

  const handleDinnerClick = () => {
    setDate(props.stringDate);
    setMealType('dinner'); 
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{props.day}</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input 
              defaultValue={props.lunch ? props.lunch.name : null} 
              onClick={handleLunchClick}
              onChange={e => setName(e.target.value)}/>
          </td>
          <td>
            <input 
              defaultValue={props.lunch ? props.lunch.cost : null} 
              onClick={handleLunchClick}
              onChange={e => setCost(e.target.value)}/>
          </td>
          <td>{props.lunch ? props.lunch.id : null}</td>
        </tr>
        <tr>
          <td>
            <input 
              defaultValue={props.dinner ? props.dinner.name : null} 
              onClick={handleDinnerClick}
              onChange={e => setName(e.target.value)}/>
          </td>
          <td>
            <input 
              defaultValue={props.dinner ? props.dinner.cost : null} 
              onClick={handleLunchClick}
              onChange={e => setCost(e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td><button className='update-button' onClick={onUpdate}>update</button></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Day;