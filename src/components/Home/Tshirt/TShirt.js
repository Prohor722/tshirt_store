import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, addCart}) => {
    const { _id, price, picture,name} = tShirt;
    // console.log(props.tShirt);
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={()=>addCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;