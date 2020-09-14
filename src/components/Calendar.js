import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';

// Components
import Day from './Day.js';

let dateObject = moment();

const Calendar = (props) => {

  const [date, setDate] = useState(dateObject);

  const daysOfWeek = moment.weekdaysShort();
  const daysInMonth = date.daysInMonth();
  const firstDayOfMonth = date.startOf('month').format('d')

  const handleNextClick = () => {
    setDate(date.clone().add(1, 'M'));
  }

  const handlePrevClick = () => {
    setDate(date.clone().add(-1, 'M'));
  }

  const displayFunc = (input) => {
    if (input.toString().length === 1) {
      return '0' + input
    } else {
      return input
    }
  }

  const sendLunch = (date) => {
    let output;
    props.data.forEach(elem => {
      if (date === elem.date && elem.type === 'lunch') {
        output = elem
      } 
    });
    return output
  }

  const sendDinner = (date) => {
    let output;
    props.data.forEach(elem => {
      if (date === elem.date && elem.type === 'dinner') {
        output = elem
      }
    });
    return output
  }

  let entries = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    entries.push(<td></td>)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let stringDate = date.format('MM') + displayFunc(i) + date.format('YY')
    entries.push(
      <td key={stringDate}>
        <Day lunch={sendLunch(stringDate)} dinner={sendDinner(stringDate)} stringDate={stringDate} day={i} />
      </td>
    )
  }

  // Below used for display
  let rows = [];
  let cells = [];
  entries.forEach((entry, idx) => {
    if (idx % 7 !== 0) {
      cells.push(entry); // Add entry to cell if not the start of the week
    } else {
      rows.push(cells); // when we reach the end of the week, contain all td in last week to rows 
      cells = []; // create new empty container
      cells.push(entry); // in current loop we still push current row to new container
    }
    if (idx === entries.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  return (
    <div>
      <h1>{date.format('MMMM')} {date.format('YYYY')}</h1>
      <div>
        <button className='toggle-month' onClick={handlePrevClick}>&laquo;</button>
        <button className='toggle-month' onClick={handleNextClick}>&raquo;</button>
      </div>
      <table className='outer-calendar'>
        <thead>
          <tr>
            {daysOfWeek.map((day, idx) => <th key={idx}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => <tr key={idx}>{row}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;