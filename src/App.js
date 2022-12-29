import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Schedule from './views/Schedule';
import Plan from './views/Plan';
import Exercises from './views/Exercises';

function App() {
  return (
    <>
      <nav className='d-flex justify-content-around'>
        <Link className='text-decoration-none' to={`/schedule`}>Schedule</Link>
        <Link className='text-decoration-none' to={`/plan`}>Exercise Plan</Link>
        <Link className='text-decoration-none' to={`/exercises`}>Find Exercises</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Navigate to= '/schedule' replace/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
      </Routes>
    </>
  );
}

export default App;