import React from 'react';

interface CounterProps {
    orders: {name: string, count: number, id: string}[];
    orderMenu:{name:string, price:number, img: string}[];
}
const Counter:React.FC<CounterProps> = ({orders, orderMenu}) => {
    let totalPrice = 0;

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].name === orderMenu[i].name){
            totalPrice += (orders[i].count * orderMenu[i].price)
        }
    }
    return (
        <div>
            <h3>Total price: {totalPrice}</h3>
        </div>
    );
};

export default Counter;