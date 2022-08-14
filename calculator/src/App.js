import {React, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/add/:a/:b" element={ <Add /> } />
                <Route path="/subtract/:a/:b" element={ <Subtract /> } />
                <Route path="/multiply/:a/:b" element={ <Multiply /> } />
                <Route path="/divide/:a/:b" element={ <Divide /> } />
            </Routes>
        </div>
    );
}

export default App;
