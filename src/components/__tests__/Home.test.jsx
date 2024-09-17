
import {render, fireEvent, screen} from "@testing-library/react"
import Home from "../../pages/Home"
import '@testing-library/jest-dom';
import { describe, expect } from "vitest";
jest.mock('lottie-web'); // I have tried mock the animation data, nothing
jest.mock('react-lottie');
  
// Checking Home component whether inside components present or not. Navbar, Hero, TrackRecord, Carousel, FAQ, Final, Footer
describe("Checking whether all components present or not", ()=>{
   
    it("Components present or not", ()=>{
        render(<Home/>)
        // Checking NavBar
        const navbar = screen.getByRole('navbar');
        expect(navbar).toBeInTheDocument()
        // Checking Hero
        const hero = screen.getByRole('hero');
        expect(hero).toBeInTheDocument()
        // Chekcing TrackRecord
        const trackRecord = screen.getByRole('trackRecord')
        expect(trackRecord).toBeInTheDocument()
        // Checking Carousel 
        const carousel = screen.getByRole("carousel")
        expect(carousel).toBeInTheDocument()
        // Checking FAQ
        const faq = screen.getByRole("faq")
        expect(faq).toBeInTheDocument()
        // Checking Final 
        const final = screen.getByRole("final")
        expect(final).toBeInTheDocument()
        //Checking Footer
        const footer = screen.getByRole("footer")
        expect(footer).toBeInTheDocument()
    })
})
