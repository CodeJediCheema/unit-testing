import { LOGO_URL } from "./utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";



const Header = () =>{
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items); // Subscribing to the store
    console.log(cartItems)
    
    
  
    useEffect(()=>{
        // console.log("Use effect called");
    },[btnName]);
    return(
        <div className="flex justify-between  bg-pink-50 shadow-lg">
            <div className="bg-transparent">
                <img className="w-48" src={LOGO_URL}></img>

            </div>
            <div className="nav-items font-sans ">
                <ul className="flex  ">
                    <li className="p-4 mt-10">Status:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4 mt-10
                     hover:bg-cyan-300 text-blue-950 font-bold rounded-full">
                         <Link to="/">Home</Link></li>
                    <li className="p-4 mt-10
                     hover:bg-cyan-300 text-blue-950 font-bold rounded-full">
                         <Link to="/about">About Us</Link></li>
                    <li className="p-4 mt-10
                     hover:bg-cyan-300 text-blue-950 font-bold rounded-full">
                         <Link to="/contact">Contact Us</Link></li>
                    <li className="p-4 mt-10
                     hover:bg-cyan-300 text-blue-950 font-bold rounded-full"> 
                     <Link to= "/grocery"> Grocery</Link> </li>
                    <li className="p-4 mt-10 hover:bg-cyan-300
                     text-blue-950 font-bold rounded-full">
                        <Link to="/cart"> 🛒 ({cartItems.length} items)</Link></li>
                        
                    <button className="p-4 mt-11 bg-blue-500
                     hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        
                    }}> {btnName}</button>
                    <li className="p-4 mt-10 font-bold text-black">Hi {loggedInUser}</li>
                </ul>

            </div>
        </div>
        
    )
};

export default Header;