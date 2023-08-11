import axios from "axios";

const API_KEY = '39932d45323b6c3accbead5229453007';

export const fetchWeather = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/fdata/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`);
        return response.data;
    }
    catch(error) {
        const weatherError = error.code;
        if(weatherError === 'ERR_BAD_REQUEST') {
            throw new Error('Location not found.');
        } else {
            throw new Error(error.message);
        }
    }
}