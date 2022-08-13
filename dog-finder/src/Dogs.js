import React from "react";
import { Link } from "react-router-dom";
import Dog from "./Dog";
import "./Dogs.css"

import dog_logo from "./dog_finder_logo.jpg"

function Dogs({ dogs }){
    return (
        <div className="Dogs">
            <div className="Dogs-logo"><img src={ dog_logo } alt="" /></div>
            <div className="Dogs-list">
                <h2>PET's LIST:</h2>
                { dogs.map(dogData => (<div key={ dogData.name.toLowerCase() }><Link to={ `/dogs/${ dogData.name.toLowerCase() }` }>{ dogData.name }</Link></div>)) }
            </div>
        </div>
    );
}

export default Dogs;