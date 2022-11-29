import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Country} from "../CountryInfoApp";

interface CountryInfoProps {
    country?: Country;
}

const CountryInfo:React.FC<CountryInfoProps> = ({country}) => {

    return (
        country?
            <div className="p-2">
                <h2>{country.name}</h2>
                <img src={country.flags.png} alt="flag" style={{width: "100px"}}/>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Capital:</b> {country.capital}</p>
                <p><b>Population:</b> {country.population}</p>
                {country.borders ?
                    <div>
                        <p><b>Borders:</b></p>
                        <ul>
                            {country.borders.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div> : null}
            </div> : null
    );
};

export default CountryInfo;