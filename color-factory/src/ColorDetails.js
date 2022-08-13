import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./ColorDetails.css"

function ColorDetails({ colors }){
    const { color } = useParams();
    let colorData = colors.filter(colorArr => color === colorArr.name.toLowerCase());
    if(colorData.length == 0){
        return <Navigate replace to="/colors" />
    }else{
        colorData = colorData[0];
    }

    return (
        <div className="ColorDetails" style={{ backgroundColor: colorData.code }}>
            <div>this is <b>{ colorData.name }</b></div>
            <div>isn't it beautiful?</div>
            <div><Link to="/colors">go back</Link></div>
        </div>
    );
}

export default ColorDetails;