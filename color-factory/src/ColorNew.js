import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ColorNew.css"

function ColorNew({ addColor }){
    const INITIAL_STATE = { name: "", code: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    let navigate = useNavigate();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        navigate("/colors");
    }

    return (
        <div className="ColorNew">
            <div className="ColorNew-form">
                <h1>Add New Color</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task">Color Name:</label>
                    <input 
                        name="name" 
                        id="name"
                        placeholder="color name"
                        value={formData.name} 
                        onChange={handleChange}
                    />

                    <label htmlFor="task">Color Code (HEX):</label>
                    <input 
                        name="code" 
                        id="code"
                        value={formData.code} 
                        type="color" 
                        onChange={handleChange}
                    />
                    
                    <div><button>Add this Color!</button></div>
                </form>
            </div>
        </div>
    );
}

export default ColorNew;