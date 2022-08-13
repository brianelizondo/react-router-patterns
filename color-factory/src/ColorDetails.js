import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ColorDetails.css"

function ColorDetails({ colors }){
    const { color } = useParams();
    const colorData = colors.filter(colorArr => color === colorArr.name.toLowerCase())[0];

    return (
        <div className="ColorDetails" style={{ backgroundColor: colorData.code }}>
            <div>this is <b>{ colorData.name }</b></div>
            <div>isn't it beautiful?</div>
            <div><Link to="/colors">go back</Link></div>
        </div>
    );
}

export default ColorDetails;