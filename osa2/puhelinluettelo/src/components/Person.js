const Person = ({person, deletePerson}) => {
    //console.log("Debug print: ", person)

    return(
        <li>{person.name} {person.number} <button value={person} onClick={() => deletePerson(person)}>delete</button></li>
    )
}

export default Person