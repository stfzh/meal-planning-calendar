import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../App.css';


import Content from './Content.js';


const Day = (props) => {


  const [name, setName] = useState('')
  const [currentDate, setCurrentDate] = useState('');
  const [currentMealType, setCurrentMealType] = useState('lunch');
  const [currentCost, setCurrentCost] = useState('');
  
  const onUpdate = () => {

      const db = firebase.firestore();
      db.collection('meals').doc(props.data.id).set({... props.data, name})
   


      // const db = firebase.firestore();
      // db.collection('meals').add({ name: name, date: currentDate, type: currentMealType });
  

  }

  const onAdd = () => {
    const db = firebase.firestore();
    db.collection('meals').add({ name: name, date: currentDate, type: currentMealType });
        
  }

  useEffect(() => {
    console.log(currentMealType);
    // handleLunchClick();
  }, [currentMealType]);

  const handleLunchClick = () => {
    
    setCurrentDate(props.stringDate);
    setCurrentMealType(props.data.type); 
    // console.log(currentMealType)
  }


  const testing = (mealType) => {
    let output; 
    if (props.data) {
      if (props.data.type === mealType) {
        output = <input defaultValue={props.data.name} onClick={handleLunchClick} onChange={(e) => setName(e.target.value)}/>
      } else {
        output = <input onClick={() => {setCurrentDate(props.stringDate);setCurrentMealType(mealType)}} onChange={(e) => setName(e.target.value)}/>
      }
    } else {
      output = <input onClick={() => {setCurrentDate(props.stringDate);setCurrentMealType(mealType)}} onChange={(e) => setName(e.target.value)}/>
    }
    return output
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
          <td><Content type='lunch' data={props.data}/></td>
          {/* <td>{testing('lunch', 'cost')}</td> */}
          <td>{currentMealType}</td>
        </tr>
        <tr>
          <td><Content type='dinner' data={props.data}/></td>
          {/* <td>{testing('dinner', 'cost')}</td> */}
          <td>{currentDate}</td>
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