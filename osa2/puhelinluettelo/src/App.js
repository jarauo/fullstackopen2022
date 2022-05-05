import { useEffect, useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import pbService from './services/phonebook'
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState([])
  

  useEffect(() => {
    //console.log("Effect")
    pbService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('Button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber
    }

    let foundPerson = isPersonAlreadyAdded(personObject)

    //console.log("foundPerson:", foundPerson)

    if (typeof foundPerson !== "undefined") {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        //console.log("foundPerson.id:",foundPerson.id, "foundPerson.name",foundPerson.name)
        pbService
          .update(foundPerson.id, personObject)
          .then(returnedPerson => {
            //console.log("returnedPerson", returnedPerson)
            setErrorMessage([`Changed ${returnedPerson.name} number`,"success"])
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
            setPersons(persons.map(person => person.id !== foundPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.log("UpdatePersonError", error)
            //alert(`the person '${foundPerson.name}' was already deleted from server`)
            setErrorMessage([`the person ${personObject.name} was already deleted from server`,"error"])
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
            setPersons(persons.filter(person => person.id !== foundPerson.id))
          })
      }
    } else {
      pbService
        .create(personObject)
        .then(response => {
          setErrorMessage([`Added ${personObject.name}`,"success"])
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        }).catch(error => {
          console.log("AddPersonError: ", error)
        })
    }
  }

  const deletePerson = (person) => {
    //console.log("DELETETEST: ", person)

    const personName = person.name
    const personId = person.id

    //console.log("Person to be deleted:", person.name, "id", person.id)

    if (window.confirm(`Do you really want to delete ${personName}?`))
    pbService
      .deleteOne(personId)
      .then(response => {
        //console.log("DeleteResponse: ", response.data)
        setErrorMessage([`Deleted ${personName}`,"success"])
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
        setPersons(persons.filter(person => person.id !== personId))
      }).catch(error => {
        console.log("DeleteError", error)
      })

  }

  const inputNameChangeHandler = (event) => {
    //console.log("inputNameChangeHandler", event.target.value)
    setNewName(event.target.value)
  }

  const inputNumberChangeHandler = (event) => {
    //console.log("inputNumberChangeHandler", event.target.value)
    setNewNumber(event.target.value)
  }

  const isPersonAlreadyAdded = (personObject) => {
    //console.log("PersonObject", personObject)
    const foundPerson = persons.find(person => person.name === personObject.name)
    //console.log("isPersonAlreadyAdded: ", index === -1 ? false : true)
    return foundPerson
  }

  const filterNameHandler = (event) => {
    //console.log("filterNameHandler ",event.target.value)
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter name={filterName} filterNameHandler={filterNameHandler} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} 
        newName={newName} inputNameChangeHandler={inputNameChangeHandler} 
        newNumber={newNumber} inputNumberChangeHandler={inputNumberChangeHandler} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} deletePerson={deletePerson} />
    </div>
  )

}

export default App