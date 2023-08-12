import axios from "axios";
//import REACT_APP_WEATHER_API_KEY from './../.env';

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const fetchWeather = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
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