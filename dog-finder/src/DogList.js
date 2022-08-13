import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

import dog_logo from "./dog_finder_logo.jpg"

function DogList({ dogs }){
    return (
        <div className="DogList">
            <div className="DogList-logo"><img src={ dog_logo } alt="" /></div>
            <div className="DogList-list">
                <h2>PET's LIST:</h2>
                { dogs.map(dogData => (<div key={ dogData.name.toLowerCase() }><Link to={ `/dogs/${ dogData.name.toLowerCase() }` }>{ dogData.name }</Link></div>)) }
            </div>
        </div>
    );
}

export default DogList;