import React,  from 'react';
import '../App.css';
import moment from 'moment';

import AddForm from './AddForm.js';
import Day from './Day.js';

const weekdayshort = moment.weekdaysShort();
const dateObject = moment()
const daysInMonth = dateObject.daysInMonth();

const Calendar = () => {

  

  let firstDayOfMonth = () => {
    let firstDay = dateObject.startOf('month').format('d');
   return firstDay;
  };

  const displayFunc = input => {
    if (input.toString().length === 1) {
      return '0' + input
    } else {
      return input
    }
  }


  let blanks = []
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td></td>)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let key = dateObject.format('MM') + displayFunc(i) + dateObject.format('YY')
    blanks.push(<Day key={key} id={key} heading={i} val='test'/>)
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
      <div>
        {/* <AddForm /> */}
      </div> 
      <div>
        {/* {moment().format('LL')} */}
        {/* {[...Array(daysInMonth+1).keys()].map(item => <li>{item}</li>)} */}
        {/* {selectDate.map(i => <li>{i}</li>)} */}
        {/* {selectDate} */}
        
      </div>

      <h1>{dateObject.format('MMMM')} {dateObject.format('YYYY')}</h1>
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
      <button>Previous</button>
      <button>Next</button>

    </div>
  )
}

export default Calendar;