import React from 'react';
import CountryItem from "./CountryItem/CountryItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Countries} from "../CountryInfoApp";

interface CountriesListProps {
    countries: Countries[];
    getCountry: (code:string)=> void;
}

const CountriesList: React.FC<CountriesListProps> = ({countries, getCountry}) => {
    return (
        <div className="d-flex flex-column" style={{height: "730px", overflowY: "scroll"}}>
            {countries.map(item => {
                return <CountryItem
                    key={item.alpha3Code}
                    onItem={()=> getCountry(item.alpha3Code)}
                    name={item.name}
                />
            })}
        </div>
    );
};

export default CountriesList;