import Language from "./Language"
import Flag from "./Flag"
import Weather from "./Weather"

const Country = ({name,capital,area,languages,flag,filter}) => {
    if (languages != null) {
        const languagesArray = Object.values(languages)
        //console.log("LanguagesArray: ",languagesArray)
        return(
            <>
                <h1>{name}</h1>
                <div>capital {capital}</div>
                <div>area {area}</div>
                <h3>languages:</h3>
                <ul>
                    {languagesArray.map(language =>
                        <Language key={language} language={language} />
                    )}
                </ul>
                <Flag source={flag} />
                <Weather capital={capital} />
            </>
        )
    } else {
        return(
            <li> {name} <button value={name} onClick={filter}>show</button></li>
        )
    }
}

export default Country