import Person from "./Person"

const Persons = ({persons, filterName}) => {
    let filteredPersons = persons

    const filter = (person) => {
        //console.log("filter:", person)
        let index = person.toLowerCase().indexOf(filterName.toLowerCase())
        return index
    }

    if (filterName !== '') {
        filteredPersons = persons.filter(person => console.log(person.name, filter(person.name)) || filter(person.name) !== -1)
    }
    
    //console.log("filteredPersons:", filteredPersons)

    return(
        <div>
            <ul>
                {filteredPersons.map(person =>
                    <Person key={person.name} name={person.name} number={person.number}/>
                )}
            </ul>
        </div>
    )
}

export default Persons