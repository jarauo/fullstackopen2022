const Filter = ({name, filterNameHandler}) => {
    //console.log("Filter value:", name)
    return(
        <div>
            filter shown with <input value={name} onChange={filterNameHandler}/>
        </div>
    )
}

export default Filter