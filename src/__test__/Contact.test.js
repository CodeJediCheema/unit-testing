import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

import "@testing-library/jest-dom";

describe("Contact Us page Test Cases" ,()=>{
    test("Should load contact us component" , () =>{
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    it("Should contain button in Contact component",()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    
    });
    
    test("Should contain button name in Contact component",()=>{
        render(<Contact/>)
    
        const btnName = screen.getByText("Submit");
    
        expect(btnName).toBeInTheDocument();
    
    });
    
    test("Should contain input placeholder in Contact component",()=>{
        render(<Contact/>)
    
        const input = screen.getByPlaceholderText("name");
    
        expect(input).toBeInTheDocument();
    
    });
    
    test("Should contain 2 input boxes in Contact component",()=>{
         // Renderying
    
         render(<Contact/>)
    
         //Querying
    
         const inputBoxes = screen.getAllByRole("textbox");
    
        //  console.log(inputBoxes);
    
         // Assertion
        
         expect(inputBoxes.length).toBe(2);

});




});