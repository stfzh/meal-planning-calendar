import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';

// Import components
import Calendar from './components/Calendar.js';


const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('meals').get();
      setMeals(data.docs.map(d => ({...d.data(), id: d.id}))); 
    }
    fetchData();
  }, []);

  return (
    <div>
      Hello!
      {/* <ul>
        {meals.map(meal => (
          <li key={meal.date}>{meal.date} {meal.name}</li>
        ))}
      </ul> */}
      <Calendar data={meals} />
      

      {/* <InlineEdit text='hello this is a test'/> */}
    </div>
  )
}

export default App;
