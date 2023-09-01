import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItems,SetShowIndex}) =>{ 
    {/* As each RestaurantCategory mamnagesits own state, therefore it is not possible to 
        collapse the existing expanded category. Therefore, to do this
        we has to Lift-Up the state to its parent 
        so that it can manage its children. */}

    

   

    const handleEvent = () =>{
        return(
            SetShowIndex() 
        );
    };
    
    return(
        <div >
            
            <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 hover:shadow-gray-400">

                <div className="flex justify-between cursor-pointer " onClick={handleEvent}>

                    <span className="font-bold text-lg " >
                         {data.title} ({data.itemCards.length})
                    </span>
                    <span className="font-bold"> {showItems ? "˄" : "˅"}
                        
                    </span>

                </div>

                { showItems && <ItemList items = {data.itemCards}/>  }

            </div>
            
           

        </div>
    )
}

export default RestaurantCategory;