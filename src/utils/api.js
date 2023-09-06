import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMxN2YxZmM4MTVmZjNjYmI5YTM1ZGJiNmMzNzJiZCIsInN1YiI6IjY0ZTc3ZWMzNTk0Yzk0MDEzOWM4MGFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gy2u06R4nhBvLziBXC3iCQqg7tlsc69nzoSuovEgCJo';

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};
