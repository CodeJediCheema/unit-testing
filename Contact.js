const Contact = () =>{
    return(
        <div >
            

            <h1 className="font-bold text-3xl p-4 m-4 "> This is our contact us page </h1>
            <form >
                <input className="border border-black m-2 p-2" type="text" placeholder="name"></input>
                <input  className="border border-black m-2 p-2" type="text" placeholder="message"></input>
                <button className="border border-black m-2 p-2 bg-gray-200 rounded-lg">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;
