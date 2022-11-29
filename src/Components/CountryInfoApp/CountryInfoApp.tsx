import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";

export interface Countries {
    name: string, alpha3Code: string, independent: boolean
}

export interface Country {
    name: string
    capital: string
    subregion: string
    region: string
    population: number
    latlng: [number, number]
    demonym: string
    area: number
    borders?: string[]
    flags: {
        svg: string,
        png: string
    }
    alpha2Code: string,
    alpha3Code: string,
}


const url = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

const CountryInfoApp = () => {
    const [countries, setCountries] = useState<Countries[]>([]);
    const [country, setCountry] = useState<Country>();

    const getAxios = async () => {
        const data = await axios.get(url);
        setCountries(data.data);
    }

    const getCountry = async (code:string) => {
        const {data} = await axios.get(`https://restcountries.com/v2/alpha/${code}`);
        setCountry(data);
    }

    useEffect(() => {
        getAxios();
    }, []);

    return (
        <div className="container d-flex justify-content-evenly">
            <CountriesList countries={countries} getCountry={getCountry}/>
            <CountryInfo country={country}/>
        </div>
    );
};


export default CountryInfoApp;