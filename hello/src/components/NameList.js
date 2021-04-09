import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Diana','Clark','Bruce']
    const persons = [
        {
            id: 1,
            name: 'Teerth',
            age: 21,
            skill: 'React'
        }, {
            id: 2,
            name: 'Tt',
            age: 21,
            skill: 'Angular'
        }, {
            id: 3,
            name: 'Tirth',
            age: 21,
            skill: 'Vue'
        }
      
  ]
// const personList = persons.map(person => <Person key={person.id } person={person} />)
const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
// return   <div>{personList}</div>
return   <div>{nameList}</div>

}

export default NameList
