import React from 'react';
import './App.css';
// Import components
import Calendar from './components/Calendar.js';
import InlineEdit from './components/test.js';

const App = () => {
  return (
    <div>
      Hello!
      <Calendar />
      {/* <InlineEdit text='hello this is a test'/> */}
    </div>
  )
}

export default App;
