import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';

// Components
import Calendar from './components/Calendar.js';


const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('meals').get();
      setMeals(data.docs.map(d => ({...d.data(), id: d.id}))); 
    };
    fetchData();
  }, []);

  return (
    <div>
      Hello!
      
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>{meal.date} {meal.type} {meal.name}</li>
        ))}
      </ul>

      <Calendar data={meals} />
      
    </div>
  )
}

export default App;
