import {React, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import ColorNew from "./ColorNew";

function App() {
    const INITIAL_STATE = [];
    const [colors, setColors] = useState(INITIAL_STATE);

    return (
        <div className="App">
            <Switch>
                <Route exact path="/colors/new"><ColorNew /></Route>
                <Route exact path="/colors/:color"><ColorDetails /></Route>
                <Route exact path="/colors"><ColorList colors={colors} /></Route>
                <Redirect to="/colors" />
            </Switch>
        </div>
    );
}

export default App;
