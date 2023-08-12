import React, { useState } from "react";
import WeatherForm from "../weather-form/weather-form";
import WeatherDisplay from "../weather-display/weather-display";
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
        <div className="container">
            <WeatherForm onSearch={handleSearch} onClear={resetSearch} />
            {weatherData && weatherData.main && <WeatherDisplay weatherData={weatherData} />}
            {error && <div className="error">{error}</div>}
        </div>
    );  
};

export default WeatherApp;