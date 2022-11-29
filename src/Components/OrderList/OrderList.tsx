import React from 'react';
import OrderItem from "./OrderItem";

interface OrderListProps {
    orders:{name: string, count: number, id: string}[];
    removeOrder: (name:string)=>void;
}

const OrderList:React.FC<OrderListProps> = ({orders, removeOrder}) => {
    return (
        <ul className="list-group">
            {orders.map((order:any, i:number) => {
                if (order.count !== 0){
                    return (
                        <OrderItem key={i} order={order} removeOrder={removeOrder} />
                    )
                }
                return null;
            })}
        </ul>
    );
};
export default OrderList;