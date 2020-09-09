import React, { useState } from 'react';
import '../App.css';
import firebase from '../firebase';


const Day = (props) => {

  const [name, setName] = useState(props.data.name)
  

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('meals').doc(props.id).set({... props.data, name})
  }



  return (
    <td>
    <table>
      <thead>
      <tr>
      <th>{props.heading}</th>
      <th>Cost</th>
      <th>Update</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      {/* <td>{props.lunchName}</td> */}
      <td>
        <input value={props.lunchName} onChange={(e) => {setName(e.target.value)}}/>
      </td>
      <td>{props.lunchCost}</td>
      </tr>
      <tr>
        <td>{props.dinnerName}</td>
        <td>{props.dinnerCost}</td>
      </tr>
      <tr>
        <td><button onClick={onUpdate}>update</button></td>
      </tr>
      {/* <tr>
      <td><form onSubmit={handleLunchSubmit}><input type='text' onChange={handleLunchChange}/></form></td>
      <td><form onSubmit={handleLunchSubmit}><input type='text' onChange={e => setLunchCost(e.target.value)}/></form></td>
      </tr>
      <tr>
      <td><form onSubmit={handleDinnerSubmit}><input type='text' onChange={handleDinnerChange}/></form></td>
      <td><form onSubmit={handleDinnerSubmit}><input type='text' onChange={e => setDinnerCost(e.target.value)}/></form></td>
      </tr> */}
      </tbody>
    </table>
    </td>
  )
}

export default Day;