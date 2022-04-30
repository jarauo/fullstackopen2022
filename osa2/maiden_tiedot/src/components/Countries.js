import Country from "./Country"

const Countries = ({countries, getCountryName}) => {
    let filteredCountries = countries

    //console.log("filteredCountries amount:", filteredCountries)

    /*
    Renders full details if there's only 1 country
    Render a list of countries if maximum of 10 countries match the filter string
    */
    if (filteredCountries.length === 1) {
        return(
            <div>
                {filteredCountries.map(country =>
                    <Country 
                        key={country.name.common} 
                        name={country.name.common} 
                        capital={country.capital}
                        area={country.area}
                        languages={country.languages}
                        flag={country.flags.png}
                    />
                )}
            </div>
        )
    } else if (filteredCountries.length > 10) {
        //console.log("Over 10: ", filteredCountries.length)
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else {
        //console.log("More than 1: ",filteredCountries.length)
        return(
            <div>
                <ul>
                    {filteredCountries.map(country =>
                        <Country key={country.name.common} name={country.name.common} filter={getCountryName} />
                    )}
                </ul>
            </div>
        )
    }
}

export default Countries