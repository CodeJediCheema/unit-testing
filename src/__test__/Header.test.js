import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";




test("Should render the Header component with login button" , ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();

});

test("Should have cart in the Header component", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    // const cart = screen.getByText("🛒 (0 items)")
    // Don't need to write the full string. 
    // use Regex
    const cart = screen.getByText(/🛒/)

    expect(cart).toBeInTheDocument();
});

test("Should change Login button to Logout on click",()=>{

    render(<BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButon = screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginButon);

    const logoutButton = screen.getByRole("button",{name: "Logout"});


    expect(logoutButton).toBeInTheDocument();

});