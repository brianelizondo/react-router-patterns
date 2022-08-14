import React from "react";
import { useParams } from "react-router-dom";
import "./Multiply.css"

function Multiply(){
    const { a, b } = useParams();
    const result = parseInt(a) * parseInt(b);
    
    return (
        <div className="Multiply">
            <div className="Multiply-title">the <b>multiply</b> result is:</div>
            <div className="Multiply-result">{ result }</div>
        </div>
    );
}

export default Multiply;