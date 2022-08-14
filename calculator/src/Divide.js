import React from "react";
import { useParams } from "react-router-dom";
import "./Divide.css"

function Divide(){
    const { a, b } = useParams();
    const result = parseInt(a) / parseInt(b);
    
    return (
        <div className="Divide">
            <div className="Divide-title">the <b>divide</b> result is:</div>
            <div className="Divide-result">{ result }</div>
        </div>
    );
}

export default Divide;