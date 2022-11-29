import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

interface CountryItemProps {
    onItem:React.MouseEventHandler<HTMLParagraphElement> | undefined;
    name:string
}

const CountryItem: React.FC<CountryItemProps> = ({onItem, name}) => {
    return (
        <p
            style={{cursor: "pointer"}}
            onClick={onItem}
            className="m-1"
        >
            {name}
        </p>
    );
};

export default CountryItem;