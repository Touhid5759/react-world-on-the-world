import React, { useState } from 'react';
import './Country.css';
function Country({ country,handleVisitedCountry,handleVisitedFlags }) {
    const [visited,setVisited]=useState(0);
    const handleVisited=()=>{
        setVisited(visited ? false:true);
        handleVisitedCountry(country)
    }
    return (
        <div className='country'>
            <p>ID:<b>{country.cca3.cca3}</b></p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name:<b>{country.name.common}</b></p>
            <p>Population:<b>{country.population.population}</b></p>
            <p>status :<b>{country.area.area > 300000 ? "big country" : "small country"}</b></p>
            <button onClick={handleVisited} className={`${visited && 'country-visit'}`}>
                {visited ? 'visited':'not visited'}
            </button>
            <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>Add Flag</button>
        </div>
    );
}

export default Country;