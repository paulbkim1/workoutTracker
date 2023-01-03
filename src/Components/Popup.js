import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createExercise } from "../services/internalApiService";

function Popup(props) {
    const [formData, setFormData] = useState({
        name: (props.workout),
        monday: "false",
        tuesday: "false",
        wednesday: "false",
        thursday: "false",
        friday: "false",
        saturday: "false",
        sunday: "false",
    })

    const [errors, setErrors] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        createExercise(formData)
            .then((data) => {
                console.log('new exercise data: ', data)
                navigate(`/exercises`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
            console.log(formData)
            
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
            name : (props.workout)
        })
    }


    return (props.trigger) ? (
        <form className="popup" onSubmit={(e) => {
                handleSubmit(e); props.setTrigger(false)
            }}>
            <div>
                <h2>Mondays</h2>
                <input type="checkbox" name="monday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Tuesday</h2>
                <input type="checkbox" name="tuesday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Wednesday</h2>
                <input type="checkbox" name="wednesday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Thursday</h2>
                <input type="checkbox" name="thursday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Friday</h2>
                <input type="checkbox" name="friday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Saturday</h2>
                <input type="checkbox" name="saturday" value={true} onChange={handleFormChanges}/>
            </div>
            <div>
                <h2>Sunday</h2>
                <input type="checkbox" name="sunday" value={true} onChange={handleFormChanges}/>
            </div>
            <button className="closeButton" >close</button>
        </form>
    ) : "";
}

export default Popup