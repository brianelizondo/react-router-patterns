import {React, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";

import Calculator from './Calculator';

function App() {
    return (
        // REACT ROUTER CALCULATOR WITH DIFFERENTS COMPONENTS
        // <div className="App">
        //     <Routes>
        //         <Route path="/add/:a/:b" element={ <Add /> } />
        //         <Route path="/subtract/:a/:b" element={ <Subtract /> } />
        //         <Route path="/multiply/:a/:b" element={ <Multiply /> } />
        //         <Route path="/divide/:a/:b" element={ <Divide /> } />
        //     </Routes>
        // </div>

        <div className="App">
            <Routes>
                <Route path="/:operation/:a/:b" element={ <Calculator /> } />
            </Routes>
        </div>
    );
}

export default App;
