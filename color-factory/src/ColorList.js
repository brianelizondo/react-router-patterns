import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"

function ColorList({ colors }){
    return (
        <div className="ColorList">
            <div className="ColorList-title">
                <div>Welcome to Color Factory</div>
                <div><Link to="/colors/new">Add a color</Link></div>
            </div>
            <div className="ColorList-colors">
                <div><h4>Please select a color:</h4></div>
                { colors.map(color => (<div key={ color.name.toLowerCase() }><Link to={ `/colors/${ color.name.toLowerCase() }` }>{ color.name }</Link></div>)) }
            </div>
        </div>
    );
}

export default ColorList;