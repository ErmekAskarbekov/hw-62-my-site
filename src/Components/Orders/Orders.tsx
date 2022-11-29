import React from 'react';
import Counter from "../Counter/Counter";
import OrderList from "../OrderList/OrderList";
import 'bootstrap/dist/css/bootstrap.min.css';

interface OrdersProps extends React.PropsWithChildren{
    orderMenu: {name:string, price:number, img: string}[];
    orders: {name: string, count: number, id: string}[];
    removeOrder:(name:string)=>void;

}

const Orders: React.FC<OrdersProps> = ({orderMenu, orders, removeOrder}) => {
    let item;
    const isOrder = orders.every((order, index, array) => array[index].count === 0);

    if (!isOrder){
        item =
            <div >
                <OrderList removeOrder={removeOrder} orders={orders}/>
                <Counter orders={orders} orderMenu={orderMenu}/>
            </div>

    } else {
        item =
            <div>
                <p>Order is empty</p>
                <p>Please add some items!</p>
            </div>

    }

    return (
        <div className="card d-flex p-4" style={{width: "400px"}}>
            <h2>Order Details:</h2>
            {item}
        </div>
    );
};

export default Orders;