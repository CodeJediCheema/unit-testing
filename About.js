import UserClass from "./UserClass";
import { Component } from "react"; // Another method to use it
import UserContext from "./utils/UserContext";





class About extends Component {
    constructor(props){
        super(props);
        //console.log("Parent Constructor called");
    }


    // This will be called when the whole page is mounted/ rendered.
    componentDidMount(){ 
       // console.log("Parent Component Did Mount called");
    }

    render(){
        //console.log("Parent Render  called");
        return(
            <div>
            <h1>About page</h1>
            
            {/* This is how  we use Context data inside class based components */}
            {/* <UserContext.Consumer>
                {({loggedInUser})=> <h1>{loggedInUser}</h1>}
            </UserContext.Consumer> */}
            
            
            
            <h2>This is our developing page.</h2>
            <UserClass name = {"Gagan Cheema" } location = {"Surya enclave"}/>
            {/* <User/> */}
            
        </div>
        )
        
    }
}


export default About;