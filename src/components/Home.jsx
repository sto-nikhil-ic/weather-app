import  { useState } from "react"
import Game from "./Game.jsx"
export default function Home (){

    const [count,setCount] = useState(0)
  
    const [games,setGames]= useState([
      "Volleyball",
      "Basketball",
      "Football",
      "Cricket",
    ])
  
    const [persons,setPersons] = useState([
      {
        'name':'Ram',
        'age':20,
        'gender':"M"
      }
    ,
      {
        'name':'Hari',
        'age':22,
        'gender':"M"
      },
      {
        'name':'Sita',
        'age':21,
        'gender':"F"
      },
      {
        'name':'Gita',
        'age':23,
        'gender':"F"
      }
    ])
  
    // let count = 0;
    return (
    <>
      <h1> This is Home</h1>
      <p>THIS IS PARAGRAPH</p>
  
      <button onClick={
        ()=>{
          // let personsData = persons
          // let newPerson = {
          //   name:"Ravi",
          //   age:25,
          //   gender:"M"
          // }
          // personsData.push(
          //   newPerson
          // )
          // console.log(personsData)
          setPersons((persons)=>{
  
            return [ {
              name:"Ravi",
              age:25,
              gender:"M"
            },...persons,]
          })
          console.log(persons)
  
        }
      }>Add person</button>
      {
        persons.map(
          (person)=>{
                return ( <div className='person'>
              <h1>{person.name}</h1>
              <h2> Age : {person.age}</h2>
              <p>Gender : {person.gender}</p>
            </div>)
          }
        )
      }
  
      <ul>
        {
          games.map(
            (game,index)=>{
           
            return (<Game key={index} game={game}/>)
  
          })
        }
      </ul>
  
      <h1> COUNT : {count}</h1>
      {
        count>10?<p>Count greater than 10</p>:<p>Count less than 10</p>
  
      }
  
      <button onClick={
        ()=>{
          console.log('btn clicked')
          setCount(
            (count)=>count+1
            )
  
          // setCount((count)=>{
          //   return count + 1
          // })
    
          console.log(count)
      }
      }  >
        Click Me +
      </button>
  
  
      <button disabled={count<=0} onClick={
        ()=>{
          console.log('btn clicked')
          // setCount(count - 1)
          setCount((count)=>count-1)
          console.log(count)
      }
      }  >
        Click Me -
      </button>
    </>
  )
  }