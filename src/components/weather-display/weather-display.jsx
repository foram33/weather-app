import React, { useState } from "react";
import './weather-display.css';

const WeatherDisplay = ({weatherData}) => {

    const [celsius, setCelsius] = useState(true);

    const handleWeatherUnit = () => {
        setCelsius((prevStatus) => !prevStatus);
     }
 
     const feelsLikeTemp = weatherData && weatherData.main ? (celsius ? weatherData.main.feels_like : (weatherData.main.feels_like * 9) / 5 + 32) : null;
     const temp = weatherData && weatherData.main ? (celsius ? weatherData.main.feels_like : (weatherData.main.temp * 9) / 5 + 32) : null;
     const minTemp = weatherData && weatherData.main ? (celsius ? weatherData.main.feels_like : (weatherData.main.temp_min * 9) / 5 + 32) : null;
     const maxTemp = weatherData && weatherData.main ? (celsius ? weatherData.main.feels_like : (weatherData.main.temp_max * 9) / 5 + 32) : null;

    return (
        <>
        <div className="weather-data">
            <button className="switch-button" onClick={handleWeatherUnit}>
                {celsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
            <p>Feels like: {feelsLikeTemp.toFixed(2)}°{celsius ? 'C' : 'F'}</p>
            <p>Temp: {temp.toFixed(2)}°{celsius ? 'C' : 'F'}</p>
            <p>Max Temp: {maxTemp.toFixed(2)}°{celsius ? 'C' : 'F'}</p>
            <p>Min Temp: {minTemp.toFixed(2)}°{celsius ? 'C' : 'F'}</p>
        </div>
        </>
    );

}

export default WeatherDisplay;