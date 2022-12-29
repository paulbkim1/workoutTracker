import React from 'react'
import { useEffect, useState } from 'react';
import { getAllExercises } from '../services/internalApiService';


export default function Schedule() {
    const [days, setDays] = useState([])

    const monday = days.filter(day => (day.monday === 'true'))
    const tuesday = days.filter(day => (day.tuesday === 'true'))
    const wednesday = days.filter(day => (day.wednesday === 'true'))
    const thursday = days.filter(day => (day.thursday === 'true'))
    const friday = days.filter(day => (day.friday === 'true'))
    const saturday = days.filter(day => (day.saturday === 'true'))
    const sunday = days.filter(day => (day.sunday === 'true'))

    useEffect(() => {
        getAllExercises()
            .then((data) => {
                setDays(data);
            })
            .catch ((error) => {
                console.log(error);
            })
    }, [])


    return (
    <div className='scheduleContainer'>
        <div className='exerciseColumn'>
            <h2>Monday</h2>
            {monday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.mondayReps}</p>
                    <p>sets: {exercise.mondaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Tuesday</h2>
            {tuesday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.tuesdayReps}</p>
                    <p>sets: {exercise.tuesdaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Wednesday</h2>
            {wednesday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.wednesdayReps}</p>
                    <p>sets: {exercise.wednesdaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Thursday</h2>
            {thursday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.thursdayReps}</p>
                    <p>sets: {exercise.thursdaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Friday</h2>
            {friday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.fridayReps}</p>
                    <p>sets: {exercise.fridaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Saturday</h2>
            {saturday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.saturdayReps}</p>
                    <p>sets: {exercise.saturdaySets}</p>
                </div>
            ))}
        </div>
        <div className='exerciseColumn'>
            <h2>Sunday</h2>
            {sunday.map((exercise, i) => (
                <div key={i} className='scheduleExercise'>
                    <p>{exercise.name}</p>
                    <p>reps: {exercise.sundayReps}</p>
                    <p>sets: {exercise.sundaySets}</p>
                </div>
            ))}
        </div>
    </div>
    )
}
