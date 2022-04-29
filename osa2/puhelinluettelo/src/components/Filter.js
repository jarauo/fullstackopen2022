const Filter = ({name, filterNameHandler}) => {
    return(
        <div>
            filter shown with <input value={name} onChange={filterNameHandler}/>
        </div>
    )
}

export default Filter