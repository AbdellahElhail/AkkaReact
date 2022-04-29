import { useContext }from 'react'

import CountriesContext from "../../appContexts/CountriesContext";

const About=()=>{

    const {countriesCount}=useContext(CountriesContext)
    return(
    <div>
            <h1>A propos</h1>
     <br />
    <h1>Countries Count : {countriesCount}</h1>
    </div>
    );

}

export default About