import React from "react";
import { useParams } from "react-router-dom";
import "./Calculator.css"

function Calculator(){
    let { operation, a, b } = useParams();
    a = parseInt(a);
    b = parseInt(b);
    
    let result;
    if(operation.toLocaleLowerCase() === "add"){
        result = a + b;
    }else if(operation.toLocaleLowerCase() === "subtract"){
        result = a - b;
    }else if(operation.toLocaleLowerCase() === "multiply"){
        result = a * b;
    }else if(operation.toLocaleLowerCase() === "divide"){
        result = a / b;
    }
    
    return (
        <div className="Calculator">
            <div className="Calculator-title">the <b>{ operation }</b> result is:</div>
            <div className="Calculator-result">{ result }</div>
        </div>
    );
}

export default Calculator;