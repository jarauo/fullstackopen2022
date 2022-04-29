const PersonForm = ({addPerson,newName,inputNameChangeHandler,newNumber,inputNumberChangeHandler}) => {


    return(
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={inputNameChangeHandler} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={inputNumberChangeHandler}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm