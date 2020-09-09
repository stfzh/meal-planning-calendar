import React, { useState } from 'react';
import '../App.css';


import Content from './Content.js';


const Day = (props) => {

  const findMeal = (key, mealTime, mealDisplay) => {
    let answer;
    props.data.map(d => {
      if (d.date === props.key && d.type === mealTime && mealDisplay == 'name') {
        answer = d.name} else if (d.date === key && d.type === mealTime && mealDisplay == 'cost') { 
          answer = d.cost
        } 
    });
    return answer
  }

  const findId = () => {
    let output;
    props.data.map(
      i => {
        if (i.date === props.stringDate && i.type === 'lunch') {
          output = i.id
        }
      }
    )
    return output
  }

  let filteredProps = props.data.filter(i => (i.date === props.stringDate && i.type === 'lunch'))
  
  const lunchId = filteredProps.map(i => i.id)
  const lunchName = filteredProps.map(i => i.name)
  const lunchCost = filteredProps.map(i => i.cost)


  // <Day key={key} id={props.data.id} data={props.data}
  //     lunchName={findMeal(key, 'lunch', 'name')} lunchCost={findMeal(key, 'lunch', 'cost')} 
  //     dinnerName={findMeal(key, 'dinner', 'name')} dinnerCost={findMeal(key, 'dinner', 'cost')}
  //     head={key} heading={i} val='test'/>

  return (
    <table>
      <thead>
        <tr>
          <th>{props.heading}</th>
          <th>{props.key}</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>{props.lunchName}</td> */}
          <td><Content id={lunchId} name={lunchName} cost={lunchCost} data={filteredProps}/></td>
          {/* <td>{props.lunchCost}</td> */}
          <td><Content /></td>
        </tr>
        <tr>
          {/* <td>{props.dinnerName}</td>
          <td>{props.dinnerCost}</td> */}
          <td></td>
          {/* <td>{filteredProps.map(i => i.id)}</td> */}
          <td></td>
        </tr>
        <tr>
          {/* <td><button onClick={onUpdate}>update</button></td> */}
        </tr>
      </tbody>
    </table>

  )
}

export default Day;