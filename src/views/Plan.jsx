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
                    <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.monday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="mondayReps"
                                        defaultValue={exercise.mondayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="mondaySets"
                                        defaultValue={exercise.mondaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Tuesday">
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.tuesday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="tuesdayReps"
                                        defaultValue={exercise.tuesdayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="tuesdaySets"
                                        defaultValue={exercise.tuesdaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Wednesday"> 
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.wednesday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="wednesdayReps"
                                        defaultValue={exercise.wednesdayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="wednesdaySets"
                                        defaultValue={exercise.wednesdaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Thursday">
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.thursday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="thursdayReps"
                                        defaultValue={exercise.thursdayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="thursdaySets"
                                        defaultValue={exercise.thursdaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Friday">
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.friday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="fridayReps"
                                        defaultValue={exercise.fridayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="fridaySets"
                                        defaultValue={exercise.fridaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Saturday">
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.saturday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="saturdayReps"
                                        defaultValue={exercise.saturdayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="saturdaySets"
                                        defaultValue={exercise.saturdaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
                <div label="Sunday">
                <div class="row border border-dark text-center bg-danger text-white" id="heading">
                        <h2 class="col">Exercise</h2>
                        <h2 class="col">Repetitions</h2>
                        <h2 class="col">Sets</h2>
                        <h2 class="col">Update</h2>
                        <h2 class="col">Remove</h2>
                    </div>
                    {exercises.map((exercise) => {
                        if (exercise.sunday === 'true') {
                        return (
                            <>
                                <form key={exercise._id} onSubmit={(e) => handleSubmit(exercise._id, e)} class="row border border-dark bg-secondary text-center text-white">
                                    <h3 class="col">{exercise.name}</h3>
                                    <input
                                        class="col form-control w-50 bg-secondary text-white form-control mx-auto d-block"
                                        type="number"
                                        name="sundayReps"
                                        defaultValue={exercise.sundayReps}
                                        onChange={(e) => handleFormChanges(exercise._id, e)}
                                    />
                                    <input
                                        class="col form-control w-50 bg-secondary text-white"
                                        type="number"
                                        name="sundaySets"
                                        defaultValue={exercise.sundaySets}
                                        onChange={(e) => handleFormChanges(exercise.id, e)}
                                    />
                                    <button class="col form-control w-50 bg-secondary text-white" type="submit">Save</button>
                                    <button class="col form-control w-50 bg-secondary text-white" onClick={(e) => handleDelete(exercise._id)}>Delete</button>
                                </form>
                            </>
                        )}
                    })}
                </div>
            </Tabs>
        </main>
    );
}
