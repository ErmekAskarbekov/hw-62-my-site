import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MenuItemProps {
    order: {name:string, img:string, price: number};
    addOrder: (name:string)=> void
}

const MenuItems:React.FC<MenuItemProps> = ({order, addOrder}) => {
    return (
        <div
            className="card flex-row p-3 mb-3 justify-content-evenly"
            style={{width: "250px", cursor: "pointer"}}
            onClick={()=> addOrder(order.name)}
        >
            <div style={{width: "90px"}}>
                <img src={order.img} alt="Fast food" width="100%"/>
            </div>
            <div>
                <h4>{order.name}</h4>
                <p>Price: {order.price} KGS</p>
            </div>
        </div>
    );
};

export default MenuItems;


