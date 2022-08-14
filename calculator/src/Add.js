import React from "react";
import { useParams } from "react-router-dom";
import "./Add.css"

function Add(){
    const { a, b } = useParams();
    const result = parseInt(a) + parseInt(b);
    
    return (
        <div className="Add">
            <div className="Add-title">the <b>add</b> result is:</div>
            <div className="Add-result">{ result }</div>
        </div>
    );
}

export default Add;