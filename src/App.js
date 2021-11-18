import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import NavBar from "./components/NavBar";

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
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/resume" element={<Resume/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        </Router>
        </>
    );
}
