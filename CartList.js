import { CDN_URL } from "./utils/constants";

const CartList = ({items}) =>{
    return(
        <div>
            {items.map((item) =>(
                <div key = {item?.card?.info?.id} className="text-left border-gray-300 border-b-2 p-2 m-2 flex justify-between">
                    <div className="w-10/12">
                        <div className="py-2 flex justify-between">
                            <span className="font-semibold">{item?.card?.info?.name}</span>
                            <span className="font-semibold mr-5">₹ {item?.card?.info?.price / 100}</span>

                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>

                    </div>
                    {item?.card?.info?.imageId ? <img className="w-36 " src={CDN_URL + item?.card?.info?.imageId } alt="Item" /> : <p className="text-gray-600 pl-7"> Image not available</p> }
                </div>
            ))}
        

        </div>
    )
};

export default CartList;