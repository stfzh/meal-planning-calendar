import React, { useState } from 'react';
import firebase from '../firebase';
import '../App.css';



const Content = (props) => {

  const [name, setName] = useState('')
  
  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('meals').doc(String(props.id)).set({... props.data, name})
  }

  return (
    <div>

      <input defaultValue={props.name} onChange={(e) => {setName(e.target.value)}}/>
      {/* {props.data.map(i => i.date)} */}
      {typeof JSON.stringify(props.id)}
      {/* {props.date} */}
      <td><button onClick={onUpdate}>update</button></td>
    </div>

  )
}

export default Content;
