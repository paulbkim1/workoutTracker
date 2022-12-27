import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllExercises = async () => {
    const res = await http.get('/exercises');
    return res.data;
}

export const getExerciseById = async (id) => {
    const res = await http.get(`/exercises/${id}`);
    return res.data;
}

export const createExercise = async (data) => {
    const res = await http.post('/exercises/new', data);
    return res.data;
}

export const updateExercise = async (id, data) => {
    const res = await http.put(`/exercises/update/${id}`, data);
    return res.data;
}

export const deleteExercise = async (id) => {
    const res = await http.delete(`/exercises/delete/${id}`);
    return res.data;
}