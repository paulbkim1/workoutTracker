import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { updateExercise, getAllExercises, deleteExercise } from '../services/internalApiService';
import Tabs from "../Components/Tabs";

export default function Plan() {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState(null);
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate() 

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

    const handleDelete = (idToDelete) => {
        deleteExercise(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredExercises = exercises.filter((exercise) => {
                return exercise._id !== idToDelete
            })
            setExercises(filteredExercises)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <main className="planContainer">
            <Tabs>
                <div label="Monday">
                    {exercises.map((exercise) => {
                        if (exercise.monday === 'true') {
                        return (
                            <>
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
                                <button onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                            </>
                        )}
                    })}
                </div>
                <div label="Tuesday">
                </div>
                <div label="Wednesday"> 
                </div>
                <div label="Thursday">
                </div>
                <div label="Friday">
                </div>
                <div label="Saturday">
                </div>
                <div label="Sunday">
                </div>
            </Tabs>
        </main>
    );
}
