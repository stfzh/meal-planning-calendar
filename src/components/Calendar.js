import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';

import Day from './Day.js';


const Calendar = (props) => {

  const [date, setDate] = useState(moment());

  const weekdayshort = moment.weekdaysShort();
  const daysInMonth = date.daysInMonth();

  const handleNextClick = () => {
    setDate(date.clone().add(1, 'M'));
  }

  const handlePrevClick = () => {
    setDate(date.clone().add(-1, 'M'));
  }

  let firstDayOfMonth = () => {
    let firstDay = date.startOf('month').format('d');
   return firstDay;
  };

  const displayFunc = input => {
    if (input.toString().length === 1) {
      return '0' + input
    } else {
      return input
    }
  }

  const sendFiltered = (date) => {

    let output;
    props.data.map(i => {
      if (date === i.date) {
        output = i
      }
    });
    return output
  }
  

  let blanks = []
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td></td>)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let stringDate = date.format('MM') + displayFunc(i) + date.format('YY')
    blanks.push(
      <td>
        <Day data={sendFiltered(stringDate)} stringDate={stringDate} heading={i} />
      </td>

    )
    // <td key={dateObject.format('MM') + displayFunc(i) + dateObject.format('YY')} className='test'>
  }

  // Below used for display
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

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });

  return (
    <div>

      <h1>{date.format('MMMM')} {date.format('YYYY')}</h1>
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <table>
      
        <thead>
          <tr className='calendar'>
            {weekdayshort.map(day => <th>{day}</th>)}
          </tr>
        </thead>

        <tbody>
        {daysinmonth}
            
        </tbody>

      </table>


    </div>
  )
}

export default Calendar;