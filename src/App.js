import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Vector from "./Components/Vector";
import Projects from "./Components/Projects";
import CodingProfile from "./Components/CodingProfile";
import ArtGallary from "./Components/ArtGallary";
import ContactUs from "./Components/ContactUs";
const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Skills />
            <Projects />
            <CodingProfile />
            <ArtGallary />
            <ContactUs />
        </>
    );
};

export default App;
