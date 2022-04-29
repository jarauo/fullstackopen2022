import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (isPersonAlreadyAdded(personObject)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')

    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const inputNameChangeHandler = (event) => {
    console.log("inputNameChangeHandler", event.target.value)
    setNewName(event.target.value)
  }

  const inputNumberChangeHandler = (event) => {
    console.log("inputNumberChangeHandler", event.target.value)
    setNewNumber(event.target.value)
  }

  const isPersonAlreadyAdded = (personObject) => {
    console.log("PersonObject", personObject)
    const index = persons.findIndex(person => person.name === personObject.name)
    console.log("isPersonAlreadyAdded: ", index === -1 ? false : true)
    return index === -1 ? false : true
  }

  const filterNameHandler = (event) => {
    console.log("filterNameHandler ",event.target.value)
    setFilterName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName} {newNumber}</div>
      <h2>Phonebook</h2>
      <Filter name={filterName} filterNameHandler={filterNameHandler} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} 
                  newName={newName} inputNameChangeHandler={inputNameChangeHandler} 
                  newNumber={newNumber} inputNumberChangeHandler={inputNumberChangeHandler} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  )

}

export default App