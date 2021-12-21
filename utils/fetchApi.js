import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '158a178e06msh3a9b9c4dd7a0f50p1f7034jsna99e2061009a'
        },
    });

    return data;
}