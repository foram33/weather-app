import React, { useState } from "react";
import './weather-form.css';

const WeatherForm = ({onSearch, onClear}) => {
    const [location, setLocation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSearch(location);
    }

    const handleClear = () => {
        setLocation('');
        onClear();
    }

    return(
        <>
        <div className="title">Weather App</div>
        <form onSubmit={handleSubmit}>
            <input type="text" className="input-field" placeholder="Enter your location or city name" value={location} onChange={(event) => setLocation(event.target.value)} />
            <button type="button" onClick={handleClear} className="button">Clear</button>
            <button type="submit" className="button">Submit</button> 
        </form>
        </>
    );
}

export default WeatherForm;