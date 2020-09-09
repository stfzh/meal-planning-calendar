import React, { useState } from 'react';
import '../App.css';
import moment from 'moment';

import AddForm from './AddForm.js';
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

  // const showBack = (id) => {
  //   props.data.map((d, i) => {
  //     console.log(d.date)
  //     // if (d.date === id) {
  //     //   // console.log(d.name)

  //     //   return d.name
  //     // } else {
  //     //   console.log(d.date)
  //     //   return 'yo'
  //     // }
  //     // console.log(d.date)
  //     // console.log(d.date === id)
      
  //   });
  // }
  
  const showBack = (key) => {
    let answer;
    props.data.map(d => {
      if (d.date === key) {
        answer = d.name}
    });
    return answer
  }

  let blanks = []
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td></td>)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    let key = date.format('MM') + displayFunc(i) + date.format('YY')
    blanks.push(
      <Day key={key} data={showBack(key)} id={key} heading={i} val='test'/>

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
      <div>
        {/* <AddForm /> */}
        {showBack()}
      </div> 
      <div>
        {/* {moment().format('LL')} */}
        {/* {[...Array(daysInMonth+1).keys()].map(item => <li>{item}</li>)} */}
        {/* {selectDate.map(i => <li>{i}</li>)} */}
        {/* {selectDate} */}
        {/* {date} */}
        
      </div>

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