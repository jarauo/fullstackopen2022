import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  //https://restcountries.com/v3.1/all
  //http://localhost:3001/maat

  useEffect(() => {
    //console.log("Effect Maat")
    axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          //console.log('promise fulfilled')
          setCountries(response.data)
        })
  },[])

  const compareNameAndFilter = (name, value) => {
    let index = -1

    if (name != null) {
      index = name.toLowerCase().indexOf(value.toLowerCase())
    }

    return index
  }

  const filterNameHandler = (event) => {
    //console.log("filterNameHandler")
    let value = event.target.value
    setFilterValue(value)
    
    let filtered = countries.filter(country => compareNameAndFilter(country.name.common, value) !== -1)
    setFilteredCountries(filtered)
    
  }

  const getCountryName = (event) => {
    //console.log("getCountryNameHandler")
    let value = event.target.value
    setFilterValue(value)

    let filtered = countries.filter(country => compareNameAndFilter(country.name.common, value) !== -1)
    setFilteredCountries(filtered)
  }

  //console.log("FILTERED COUNTRIES: ", filteredCountries)

  return (
    <div>
      <Filter name={filterValue} filterNameHandler={filterNameHandler} />
      <Countries countries={filteredCountries} getCountryName={getCountryName} />
    </div>
  )

}

export default App