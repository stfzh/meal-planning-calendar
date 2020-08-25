import React from 'react';
import '../App.css';

import AddForm from './AddForm.js';



const Calendar = () => {
  return (
    <div>
      <div>
        <AddForm />
      </div>  
      <table>
        <thead>
          <tr className='calendar'>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tues</th>
            <th>Weds</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr className='topics'>
            <td>1</td>
            <td>Fried rice</td>
            <td>2</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;