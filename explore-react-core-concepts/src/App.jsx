import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'

function App() {
  const actors =['Rajib','Sojib','Zihad','Shishir','Yeasin'];
  const singers =[
    {id:1,name: 'Dr. Mahfuzur Rahman',age:68},
    {id:2,name: 'Hero Alom',age:38},
    {id:3,name: 'Bhuvon Baddokor',age:71},
    {id:4,name: 'Pritom',age:29}
  ]
  return (
    <>
      <h1>Vite + React</h1>

        {
          singers.map(singer => <Singer singer={singer}></Singer>)
        }


        <Actor name={"Bappa Raz"}></Actor>
        {
          actors.map(actor =><Actor name={actor}></Actor>)
        }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX"isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props){
  // console.log(props)
  return <h2>This Device: {props.name} Price: {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 20;
  const person ={name: 'sakib',age:12}
  return <h3>I am a {person.name} with age : {age + money }</h3>
}
function Student({grade=1,score=0}) {
  console.log(grade,score)
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>Class:{grade}</p>
    <p>Score:{score}</p>
  </div>
  )
}
function Developer() {
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Debo debo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
