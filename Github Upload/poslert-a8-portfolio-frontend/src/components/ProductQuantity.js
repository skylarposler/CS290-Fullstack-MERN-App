import { useState } from "react";
import { GrAdd, GrSubtract } from 'react-icons/gr'; 

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const add = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const subtract = () => setQuantity(quantity === 0? 0 : quantity - 1);

    return (
        <>
            <GrSubtract onClick={subtract} class="bigger" />
            <span class="quantity">{quantity}</span>
            <GrAdd onClick={add} class="bigger" />
        </>
    );

}

export default ProductQuantity;