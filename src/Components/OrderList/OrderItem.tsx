import React from 'react';
import {nanoid} from "nanoid";
import cancel from "../cancel.png";

interface OrderItemProps extends React.PropsWithChildren {
    order:{name:string, price: number, count:number};
    removeOrder:(name:string)=>void
}

const OrderItem: React.FC<OrderItemProps> = ({order, removeOrder}) => {
    return (
        <li key={nanoid()} className="list-group-item d-flex">
                            <span className="flex-grow-1">
                                 {order.name}
                            </span>
            <span className="mx-3">
                                x{order.count}
                            </span>
            <button
                style={{
                    border: "none",
                    background: "transparent",
                    width: "20px",
                    padding: "0"
                }}
                onClick={() => removeOrder(order.name)}
            >
                <img src={cancel} alt="" width="100%"/>
            </button>
        </li>
    );
};

export default OrderItem;