import React, { useState } from "react";
import WeatherForm from "../weather-form/weather-form";
import { fetchWeather } from "../weatherServices";

const WeatherApp = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (location) => {
        try {
            const weatherData = await fetchWeather(location);
            setWeatherData(weatherData);
            setError('');
        } catch(error) {
            setError(error.message);
            setWeatherData([]);
        }
    };

    const resetSearch = () => {
        setWeatherData([]);
        setError('');
    }

    return (
        <>
        <WeatherForm onSearch={handleSearch} onClear={resetSearch} />
        {weatherData && weatherData.main && (
            <div className="weatherData">
                <p>Feels like: {weatherData.main.feels_like}</p>
                <p>Temp: {weatherData.main.temp}</p>
                <p>Max Temp: {weatherData.main.temp_max}</p>
                <p>Min Temp: {weatherData.main.temp_min}</p>
            </div>
        )}
        {error && <div className="error">{error}</div>}
        </>
    );  
};

export default WeatherApp;