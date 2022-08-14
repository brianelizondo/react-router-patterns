import {React, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from './Hooks';
import './App.css';

import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import ColorNew from "./ColorNew";

function App() {
    const [colors, setColors] = useLocalStorage();

    const addColor = newColor => {
        setColors(colors => [newColor, ...colors]);
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/colors/new" element={ <ColorNew addColor={addColor} /> } />
                <Route path="/colors/:color" element={ <ColorDetails colors={colors} /> } />
                <Route path="/colors" element={ <ColorList colors={colors} /> } />
                <Route path="*" element={ <Navigate replace to="/colors" /> } />
            </Routes>
        </div>
    );
}

export default App;
