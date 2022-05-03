import Person from "./Person"

const Persons = ({persons, filterName, deletePerson}) => {
    let filteredPersons = persons

    const filter = (person) => {
        //console.log("filter:", person)
        let index = person.toLowerCase().indexOf(filterName.toLowerCase())
        return index
    }

    if (filterName !== '') {
        filteredPersons = persons.filter(person => filter(person.name) !== -1)
    }
    
    //console.log("filteredPersons:", filteredPersons)

    return(
        <div>
            <ul>
                {filteredPersons.map(person =>
                    <Person key={person.id} person={person} deletePerson={deletePerson} />    
                )}
            </ul>
        </div>
    )
}

export default Persons