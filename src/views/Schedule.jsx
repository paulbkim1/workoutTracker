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
        <div className='mondayContainer'>
            <h2>Monday</h2>
            {monday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.mondayReps}</p>
                </div>
            ))}
        </div>
        <div className='tuesdayContainer'>
            <h2>Tuesday</h2>
            {tuesday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.tuesdayReps}</p>
                </div>
            ))}
        </div>
        <div className='wednesdayContainer'>
            <h2>Wednesday</h2>
            {wednesday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.wednesdayReps}</p>
                </div>
            ))}
        </div>
        <div className='thursdayContainer'>
            <h2>Thursday</h2>
            {thursday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.thursdayReps}</p>
                </div>
            ))}
        </div>
        <div className='fridayContainer'>
            <h2>Friday</h2>
            {friday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.fridayReps}</p>
                </div>
            ))}
        </div>
        <div className='saturdayContainer'>
            <h2>Saturday</h2>
            {saturday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.saturdayReps}</p>
                </div>
            ))}
        </div>
        <div className='sundayContainer'>
            <h2>Sunday</h2>
            {sunday.map((exercise, i) => (
                <div key={i}>
                    <p>{exercise.name}</p>
                    <p>{exercise.sundayReps}</p>
                </div>
            ))}
        </div>
    </div>
    )
}
