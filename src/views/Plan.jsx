import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateExercise, getAllExercises  } from '../services/internalApiService';
import Tabs from "../Components/Tabs";

export default function Plan() {
    const [days, setDays] = useState([]);
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate() 
    const [exercises, setExercises] = useState([]);

    const tuesday = days.filter(day => (day.tuesday === 'true'))
    const wednesday = days.filter(day => (day.wednesday === 'true'))
    const thursday = days.filter(day => (day.thursday === 'true'))
    const friday = days.filter(day => (day.friday === 'true'))
    const saturday = days.filter(day => (day.saturday === 'true'))
    const sunday = days.filter(day => (day.sunday === 'true'))

    useEffect(() => {
        getAllExercises()
            .then((data) => {
                setExercises(data);
        });
    }, []);

    const handleFormChanges = (id, e) => {
        e.preventDefault();
        setFormData({
                    ...formData,
                    [e.target.name] : e.target.value
                })
    };

    const handleSubmit = (id, e) => {
        e.preventDefault();
        updateExercise(id, formData)
            .then((data) => {
                console.log('new pet data: ', data)
                navigate(`/plan`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors);
                console.log(id)
            })
    };


    return (
        <main>
            <Tabs>
                <div label="Monday">
                <div>
        {exercises.map((exercise) => {
            if (exercise.monday === 'true') {
            return (
            <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)}>
            <h3>{exercise.name}</h3>
            <label>Reps: </label>
            <input
                type="number"
                name="mondayReps"
                defaultValue={exercise.mondayReps}
                onChange={(e) => handleFormChanges(exercise._id, e)}
            />
            <br />
            <label>Sets: </label>
            <input
                type="number"
                name="mondaySets"
                defaultValue={exercise.mondaySets}
                onChange={(e) => handleFormChanges(exercise.id, e)}
            />
            <br />
            <button type="submit">Save</button>
            </form>
        )}})}
    </div>
                </div>
                <div label="Tuesday">
                    {tuesday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
                <div label="Wednesday">
                    {wednesday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
                <div label="Thursday">
                    {thursday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
                <div label="Friday">
                    {friday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
                <div label="Saturday">
                    {saturday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
                <div label="Sunday">
                    {sunday.map((exercise, i) => (
                        <div key={i}>
                            <p>{exercise.name}</p>
                        </div>
                    ))}  
                </div>
            </Tabs>
        </main>
    );
}
