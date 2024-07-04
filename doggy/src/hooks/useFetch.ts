import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Dog } from '../models.ts';


export function useFetch(){
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchDogs() {
        try{
            setError('');
            setLoading(true);
            const response = await axios.get<Dog[]>('http://localhost:3001/doggos');
            setDogs(response.data);
            setLoading(false);
        }catch(e: unknown){
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect( () => {
        fetchDogs()
    }, [])

    return {dogs, loading, error}
}

