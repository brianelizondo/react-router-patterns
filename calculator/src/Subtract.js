import React from "react";
import { useParams } from "react-router-dom";
import "./Subtract.css"

function Subtract(){
    const { a, b } = useParams();
    const result = parseInt(a) - parseInt(b);
    
    return (
        <div className="Subtract">
            <div className="Subtract-title">the <b>subtract</b> result is:</div>
            <div className="Subtract-result">{ result }</div>
        </div>
    );
}

export default Subtract;