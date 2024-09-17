
import { render, screen } from "@testing-library/react";
import About from "../../pages/About";
import '@testing-library/jest-dom';
import { describe, expect } from "vitest";

// Checking About Component

describe("Checking About Component", ()=>{

    // Checking Navbar
    it("Checking Navbar component", ()=>{
        render(<About/>)

        const navbar = screen.getByRole('navbar')
        expect(navbar).toBeInTheDocument()
    })

    // Checking About One 
    it("Checking About One component", ()=>{
        render(<About/>)

        const aboutOne = screen.getByRole('aboutOne')
        expect(aboutOne).toBeInTheDocument()
    })

    // Checking About Two 
    it("Checking About Two component", ()=>{
        render(<About/>)

        const aboutTwo = screen.getByRole('aboutTwo')
        expect(aboutTwo).toBeInTheDocument()
    })

     // Checking Footer 
     it("Checking Footer component", ()=>{
        render(<About/>)

        const Footer = screen.getByRole('footer')
        expect(Footer).toBeInTheDocument()
    })

})
