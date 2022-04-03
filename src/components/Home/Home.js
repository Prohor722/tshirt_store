import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import useTshirts from '../hooks/useTshirts';
import TShirt from './Tshirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTshirts] = useTshirts([]);
    const [cart , setCart ] = useState([]);

    const handleAddToCart =(product)=>{
        const exits = cart.find(item=>item._id === product._id);
        if(!exits){
            const newItems = [...cart,product];
            setCart(newItems);
        }
        else{
            alert("aleady added!!");
        }
    }

    const removeFromCart = (id)=>{
        const restItems = cart.filter(item=>item._id!==id)
        setCart(restItems);
    }

    return (
        <div className='home'>
            <div className="tShirt-container">
                {tShirts.map(product=>{
                    return <TShirt tShirt={product} key={product._id} addCart={handleAddToCart}></TShirt>
                })}
            </div>
            <div className="cart-container">
                <Cart cartItems={cart} remove={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;