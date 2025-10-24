import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';
const Countries = ({countryPromise}) => {
    const countrData=use(countryPromise);
    const countris=countrData.countries;
    const [visitedCounty,setVisitedCountry]=useState([]);
    const [visitFlags,setVisitFlags]=useState([]);
    const handleVisitedCountry=(country)=>{
        console.log(`successfully handled!!!\ncountry is ${country.name.common}`);
        const newVisitedCountries=[...visitedCounty,country];
        setVisitedCountry(newVisitedCountries);
    }
    const handleVisitedFlags=(flag)=>{
        const newVisitedFlag=[...visitFlags,flag];
        setVisitFlags(newVisitedFlag);
    }
    return (
        <div>
            <h1>World Country</h1>
            <p>Total visited country: {visitedCounty.length}</p>
            <ol>
                {
                    visitedCounty.map(country=><li>{country.name.common}</li>)
                }
            </ol>
            <div className='flag-visit'>
                {
                    visitFlags.map(flag=><img style={{height:"80px",width:"150px",marginRight:"10px"}} src={flag}></img>)
                }
            </div>
            <div className='countries'>
             {
                countris.map(country=>
                <Country
                key={country.cca3.cca3}
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}>
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;