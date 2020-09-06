import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';

import AddForm from './AddForm.js';

const weekdayshort = moment.weekdaysShort();
const daysInMonth = moment().daysInMonth();

let blanks = []

for (let i = 0; i < daysInMonth; i++) {
  blanks.push(<td>{i}</td>)
}

let firstDayOfMonth = () => {
  // let firstDay = moment().startOf('month').format('d'); 
  let firstDay = moment().startOf('month').format('d');
 return firstDay;
};


let rows = [];
let cells = [];

blanks.forEach((row, i) => {
  if (i % 7 !== 0) {
    cells.push(row); // if index not equal 7 that means not go to next week
  } else {
    rows.push(cells); // when reach next week we contain all td in last week to rows 
    cells = []; // empty container 
    cells.push(row); // in current loop we still push current row to new container
  }
  if (i === blanks.length - 1) { // when end loop we add remain date
    rows.push(cells);
  }
});

const Calendar = () => {

  const [selectDate, setSelectDate] = useState(moment().toDate())
  return (
    <div>
      <div>
        <AddForm />
      </div> 
      <div>
        {/* {moment().format('LL')} */}
        {/* {[...Array(daysInMonth+1).keys()].map(item => <li>{item}</li>)} */}
        {firstDayOfMonth()}
      </div>
      <table>
      
        <thead>
          <tr className='calendar'>
            {weekdayshort.map(day => <th>{day}</th>)}
          </tr>
        </thead>
        <tbody>
      
          <tr className='topics'>
            {blanks}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;