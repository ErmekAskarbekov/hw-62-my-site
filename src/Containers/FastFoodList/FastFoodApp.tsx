import React, {FC, useState} from 'react';
import Orders from "../../Components/Orders/Orders";
import AddOrder from "../../Components/Add-order/AddOrder";
import cola from '../../assets/cola.png';
import coffee from '../../assets/coffee.png';
import donut from '../../assets/donut.png';
import fries from '../../assets/fries.png';
import hamburger from '../../assets/hamburger.png';
import doner from '../../assets/doner.png';
import pizza from '../../assets/pizza.png';
import chicken from '../../assets/chicken.png';
import {nanoid} from 'nanoid';

const FastFoodApp: FC = () => {
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

    const addOrder = (name:string) => {
        setOrders(orders.map(order => {
            if (order.name === name) {
                return {
                    ...order,
                    count: order.count + 1
                }
            }
            return order;
        }))
    };

    const removeOrder = (name:string) => {
        setOrders(orders.map(order => {
            if (order.name === name) {
                return {
                    ...order,
                    count: 0
                }
            }
            return order;
        }))
    }

    return (
        <div className="container">
            <div className="d-flex m-5 p-1 justify-content-evenly">
                <Orders
                    orders={orders}
                    orderMenu={orderMenu}
                    removeOrder={removeOrder}
                />
                <AddOrder orderMenu={orderMenu} addOrder={addOrder}/>
            </div>
        </div>
    );
}

export default FastFoodApp;
