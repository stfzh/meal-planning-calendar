import React, { useState } from 'react';
import firebase from '../firebase';
import '../App.css';



const Content = (props) => {

  const [name, setName] = useState('')
  
  // const onUpdate = () => {
  //   const db = firebase.firestore();
  //   db.collection('meals').doc(String(props.id)).set({... props.data, name})
  // }

  const handleDefaultValue = () => {
    let output;
    if (props.data) {
      output = props.data
    } else {
      output = 'yo'
    }
    return output
  }

  return (
    <div>
      <input defaultValue={(props.data && props.data.type === props.type) ? props.data.name : null} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Content;
