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
    if ((props.lunch === undefined && props.dinner === undefined) ||
      (mealType === 'lunch' && id === '') ||
      (mealType === 'dinner' && id === '') 
      ) {
      db.collection('meals').add({ name: name, cost: cost, date: date, type: mealType });
    } else if (mealType === 'lunch' && cost === '') {
      db.collection('meals').doc(id).set({...props.lunch, name})
    } else if (mealType === 'lunch' && name === '') {
      db.collection('meals').doc(props.lunch.id).set({...props.lunch, cost})
    } else if (mealType === 'dinner' && cost === '') {
      db.collection('meals').doc(props.dinner.id).set({...props.dinner, name})
    } else if (mealType === 'dinner' && name === '') {
      db.collection('meals').doc(props.dinner.id).set({...props.dinner, cost})
    }
  }

  useEffect(() => {
    // console.log(mealType)
    // console.log(id)
  }, [mealType, id]);

  const handleLunchClick = (e) => {
    if (props.lunch) {
      setId(props.lunch.id);
      // console.log(props.lunch.id)
    } else {
      setId('');
    }
    setDate(props.stringDate);
    setMealType('lunch'); 
    // console.log(mealType)
    // console.log(id)
    // console.log(id)
  }

  const handleDinnerClick = (e) => {
    if (props.dinner) {
      setId(props.dinner.id);
      // console.log(props.dinner.id)
    } else {
      setId('')
    }
    setDate(props.stringDate);
    setMealType('dinner'); 
    // console.log(mealType)
    // console.log(id)
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
          {/* <td>{props.lunch ? props.lunch.id : null}</td> */}
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
              onClick={handleDinnerClick}
              onChange={e => setCost(e.target.value)}/>
          </td>
          {/* <td>{props.dinner ? props.dinner.id : null}</td> */}
        </tr>
        <tr>
          <td><button className='update-button' onClick={onUpdate}>update</button></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Day;