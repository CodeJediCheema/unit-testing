import { useDispatch, useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import { clearCart } from "./utils/cartSlice";

import CartList from "./CartList";





const Cart = () =>{
    const dispatch = useDispatch();

    

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)
    const totalPrice = cartItems.reduce((accumulator, currentItem) =>{
        return accumulator + currentItem?.card?.info?.price/100
    },0)
    const roundedUpPrice = Math.round(totalPrice);
    
    
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="block bg-blue-500 text-white rounded py-2 px-4
                 hover:bg-blue-600 ml-[550px]" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-8/12 m-auto">
                {cartItems.length === 0 ? <EmptyCart/> : <CartList items= {cartItems}/>}
            
            </div>
            <div className="flex justify-between" >
                <h2 className="font-bold text-lg pl-56"> To pay:</h2>
                <h2 className="font-bold text-lg pr-80">₹ {roundedUpPrice}.00</h2>
            </div>
           
            
        </div>
    )
}

export default Cart;