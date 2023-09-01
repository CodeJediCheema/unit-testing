import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow p-8 text-center">
                <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
                <p className="text-gray-600 mb-4">Your shopping cart is empty.</p>
                <Link  className="block bg-blue-500 text-white rounded py-2 px-4
                 hover:bg-blue-600" to="/"> Continue Shopping</Link>
            </div>
        </div>
    );
}

export default EmptyCart;