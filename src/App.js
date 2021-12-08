import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//router for links
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


//components, Switch was not working, changed to Routes and Route
export default function App() {
    return (
        <>
        <Router>
        <NavBar />
        <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Footer />
        </Router>
        </>
    );
}
