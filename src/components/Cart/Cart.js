import React from 'react';

const Cart = ({cartItems,remove}) => {
    // console.log(cartItems);

    return (
        <div>
            <h2>This is cart</h2>
            {
                cartItems.map(item=>{
                    return <div>
                                <p>Name: {item.name}</p>
                                <p>Price: ${item.price}</p>
                                <button onClick={()=>remove(item._id)}>X</button>
                            </div>
                })
            }
        </div>
    );
};

export default Cart;