import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link, Routes} from 'react-router-dom';
import Planning from "./Planning";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Home from './Home';

function Navbar() {
return (
    <div >
        <Router>
        
            <nav className='flex justify-around'>
                <div>
                
                    <img src='./cooke.jpg' className='h-12 w-10'/>
                </div>

                <ul className='flex gap-10 text-xl font-mono items-center p-3'>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Planning">Planning</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/planning" element={<Planning/>}/>
                <Route exact path="/services" element={<Services/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>


        </Router>


    </div>
)
}

export default Navbar