import React, {useState} from 'react';
import './App.css';
import cola from './assets/cola.png';
import coffee from './assets/coffee.png';
import donut from './assets/donut.png';
import fries from './assets/fries.png';
import hamburger from './assets/hamburger.png';
import doner from './assets/doner.png';
import pizza from './assets/pizza.png';
import chicken from './assets/chicken.png';
import {nanoid} from 'nanoid';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import FastFoodApp from "./Containers/FastFoodList/FastFoodApp";
import Home from "./Containers/Home/Home";
import RestCountries from "./Containers/RestCountries/RestCountries";

function App() {
  const orderMenu = [
    {name: "Cola", price: 45, img: cola},
    {name: "Coffee", price: 80, img: coffee},
    {name: "Donut", price: 90, img: donut},
    {name: "Fries", price: 90, img: fries},
    {name: "Hamburger", price: 100, img: hamburger},
    {name: "Doner-Kebab", price: 160, img: doner},
    {name: "Pizza", price: 390, img: pizza},
    {name: "Chicken", price: 420, img: chicken}
  ];

  const [orders, setOrders] = useState([
    {name: "Cola", count: 0, id: nanoid()},
    {name: "Coffee", count: 0, id: nanoid()},
    {name: "Donut", count: 0, id: nanoid()},
    {name: "Fries", count: 0, id: nanoid()},
    {name: "Hamburger", count: 0, id: nanoid()},
    {name: "Doner-Kebab", count: 0, id: nanoid()},
    {name: "Pizza", count: 0, id: nanoid()},
    {name: "Chicken", count: 0, id: nanoid()},
  ]);

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/FastFoodService' element={<FastFoodApp />}/>
          <Route path="/RestCountries" element={<RestCountries/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
