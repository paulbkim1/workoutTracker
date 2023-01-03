import React,{ useEffect, useState } from "react";
import axios from 'axios';
import Popup from "../Components/Popup";

export default function Exercises() {
    const [searches, setSearches] = useState([]);
    const [exercise, setExercise] = useState();
    const [error, setError] = useState()
    const [popup, setPopup] = useState(false) 
    const [targetMuscle, setTargetMuscle] = useState()
    

    useEffect(() => {
        axios
            .get(`https://wger.de/api/v2/exerciseinfo/?limit=386&offset=0`, {
                headers: {
                    Authorization: '860017b7a422a9e7a5cff0a50e37b3d95b5cfb38'
                }
            })
            .then((res) => {
                console.log(res.data)
                setSearches(res.data.results)
                setError(false)
            })
            .catch((err) => {
                setError(true)
                console.log("error", err)
            })
    },[])

    const handleChange = (e) => {
        setTargetMuscle(e.target.value);
    };

    const filteredExercises = searches.filter(exercise => (exercise.muscles.some(muscle => muscle.name === targetMuscle) || exercise.muscles_secondary.some(secondMuscle => secondMuscle.name === targetMuscle)) && exercise.language.id === 2);


    return (
        <div className="exerciseContainer">
            <div className="exerciseSearch">
                <h3>Target Muscle: </h3>
                <select id="muscleGroup" value={targetMuscle} onChange={handleChange}>
                    <option value="">--Select the muscle you would like to exercise--</option>
                    <option value="Biceps brachii">Biceps Brachii (Biceps)</option>
                    <option value="Anterior deltoid">Anterior Deltoid (Shoulders)</option>
                    <option value="Serratus anterior">Serratus Anterior</option>
                    <option value="Pectoralis major">Pectoralis Major (Chest)</option>
                    <option value="Triceps brachii">Triceps Brachii (Triceps)</option>
                    <option value="Rectus abdominis">Rectus Abdominis (Abs)</option>
                    <option value="Gastrocnemius">Gastrocnemius (Calves)</option>
                    <option value="Gluteus maximus">Gluteus Maximus (Glutes)</option>
                    <option value="Trapezius">Trapezius (Traps)</option>
                    <option value="Quadriceps femoris">Quadriceps Femoris (Quads)</option>
                    <option value="Biceps femoris">Biceps Femoris (Hamstrings)</option>
                    <option value="Latissimus dorsi">Latissimus Dorsi (Lats)</option>
                    <option value="Brachialis">Brachialis</option>
                    <option value="Obliquus externus abdominis">Obliquus Externus Abdominis</option>
                    <option value="Soleus">Soleus</option>
                </select>
            </div>
            <div className="container">
                <main className='exerciseResults'>
                    {filteredExercises.map((exercise, i) => (
                        <button onClick={() => setPopup(true) & setExercise(exercise.name)} key={i} className="card">
                            <p>{exercise.name}</p>
                        </button>
                    ))}
                    <Popup trigger={ popup } setTrigger={ setPopup } workout={ exercise }>
                        <h1>My Popup</h1>
                    </Popup>
                </main>
            </div>
        </div>
    )
}
