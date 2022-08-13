import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css"

function DogDetails({ dogs }){
    const { dogName } = useParams();
    const dogData = dogs.filter(dog => dogName === dog.name.toLowerCase())[0];

    return (
        <div className="DogDetails">
            <div><img src={ dogData.src } alt={ dogData.name }></img></div>
            <div><h1>{ dogData.name }</h1></div>
            <div><b>Age:</b> { dogData.age }</div>
            <div><b>Facts:</b></div>
            <div>{ dogData.facts.join(" ") }</div>
        </div>
    );
}

export default DogDetails;