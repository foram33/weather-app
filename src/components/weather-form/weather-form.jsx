import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your location or city name" value={location} onChange={(event) => setLocation(event.target.value)} />
            <button type="button" onClick={handleClear}>Clear</button>
            <button type="submit">Submit</button> 
        </form>
        </>
    );
}

export default WeatherForm;