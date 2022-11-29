import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItems from "./Menu-items";


interface AddOrderProps {
    orderMenu: {name:string, price:number, img: string}[];
    addOrder: (name:string)=> void;
}

const AddOrder: React.FC<AddOrderProps> = ({orderMenu, addOrder}) => {
    return (
        <div className="card d-flex p-4" style={{width: "600px"}}>
            <h2>Add items:</h2>
            <div className="d-flex flex-wrap justify-content-evenly">
                {orderMenu.map((order:any, index:any) => {
                    return (
                        <MenuItems key={index} order={order} addOrder={addOrder}/>
                    )
                })}
            </div>
        </div>
    );
};

export default AddOrder;