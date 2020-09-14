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
      setMeals(data.docs.map(i => ({...i.data(), id: i.id}))); 
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>{meal.cost} {meal.date} {meal.type} {meal.name} {meal.id}</li>
        ))}
      </ul>
      <div>
        <Calendar data={meals} />
      </div>
    </div>
  )
}

export default App;
