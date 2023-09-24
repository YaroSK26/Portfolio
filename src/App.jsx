import { BrowserRouter } from "react-router-dom"
import {About,  Experience, Feedbacks,Hero, Navbar,Tech,Works ,StarsCanvas } from "./components"
import ContactWrapper from "./components/ContactWrapper"
import { CrispProvider } from "./components/CrispProvider"
import TechMobile from "./components/TechMobile";


function App() {
  return (
    <>
      <CrispProvider />
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
           
          </div>
          <About />
          {/* <Experience /> */}

          <Works />

          {window.innerWidth > 1280 && <Tech />}
          {window.innerWidth < 1280 && <TechMobile />}
          {/* <Feedbacks /> */}

          <div className="relative  z-0">
            <ContactWrapper />
            {window.innerWidth > 1280 && <StarsCanvas />}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
