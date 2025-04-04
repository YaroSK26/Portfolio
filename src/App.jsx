import { BrowserRouter, Route, Routes } from "react-router-dom"
import {About,  Experience, Feedbacks,Hero, Navbar,Tech,Works ,StarsCanvas ,Awards} from "./components"
import ContactWrapper from "./components/ContactWrapper"
import { CrispProvider } from "./components/CrispProvider"
import TechMobile from "./components/TechMobile";
import { Analytics } from "@vercel/analytics/react";
import ProjectList from "./project/ProjectList";
import LenisProvider from "./components/lenisProvider";
import useLenis from "./components/lenis";

import Courses from "./components/Courses";



function App() {
  useLenis();
    return (
      <>
        <LenisProvider>
          <CrispProvider />
          <Analytics />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="relative z-0 bg-primary">
                      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                        <Navbar></Navbar>
                        <Hero></Hero>
                      </div>
                      <About />
                      {/* <Experience /> */}
                      <Works />
                      <Courses></Courses>
                      {window.innerWidth > 1280 && <Tech />}
                      {window.innerWidth < 1280 && <TechMobile />}
                      {/* <Feedbacks /> */}
                     
                      <Awards></Awards>
                      <div className="relative  z-0">
                        <ContactWrapper />
                        {window.innerWidth > 1280 && <StarsCanvas />}
                      </div>
                    </div>
                  </>
                }
              />
              <Route path="/project" element={<ProjectList />} />
            </Routes>
          </BrowserRouter>
        </LenisProvider>
      </>
    );
}

export default App

