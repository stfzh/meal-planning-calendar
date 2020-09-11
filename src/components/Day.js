import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../App.css';


const Day = (props) => {

  const [name, setName] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [currentMealType, setCurrentMealType] = useState('');

  const onUpdate = () => {
    const db = firebase.firestore();
    if (props.lunch === undefined || props.dinner === undefined) {
      db.collection('meals').add({ name: name, date: currentDate, type: currentMealType });
    } else if (currentMealType === 'lunch') {
      db.collection('meals').doc(String(props.lunch.id)).set({... props.lunch, name})
    } else if (currentMealType === 'dinner') {
      db.collection('meals').doc(String(props.dinner.id)).set({... props.dinner, name})
    } 
  }

  const onAdd = () => {
    const db = firebase.firestore();
    db.collection('meals').add({ name: name, date: currentDate, type: currentMealType});
        
  }

  useEffect(() => {
    // handleLunchClick();
  }, [currentMealType]);


  const handleLunchClick = () => {
    
    setCurrentDate(props.stringDate);
    setCurrentMealType('lunch'); 
    // console.log(currentMealType)
  }

  const handleDinnerClick = () => {
    
    setCurrentDate(props.stringDate);
    setCurrentMealType('dinner'); 
    // console.log(currentMealType)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{props.heading}</th>
          {/* <th>Cost</th> */}
          <th>test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <input 
          defaultValue={props.lunch ? props.lunch.name : null} 
            onClick={handleLunchClick}
            onChange={e => setName(e.target.value)}
          />
          </td>
          <td>{props.lunch === undefined ? 't': 'false'}</td>
        </tr>
        <tr>
          <td>
          <input 
          defaultValue={props.dinner ? props.dinner.name : null} 
            onClick={handleDinnerClick}
            onChange={e => setName(e.target.value)}
          />
          </td>
          {/* <td>{props.dinner ? 'true': 'false'}</td> */}
        </tr>
        <tr>
          {/* <td><button onClick={onUpdate}>update</button></td> */}
          <td><button onClick={onUpdate}>update</button></td>
          <td><button onClick={onAdd}>add</button></td>
        </tr>
      </tbody>
    </table>

  )
}

export default Day;