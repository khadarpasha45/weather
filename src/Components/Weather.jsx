import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("London"); // Default location
    const [error, setError] = useState(null);

    const API_KEY = "5a09347bafd6b6d2e0198239340840e4"; // Replace with your API key
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    useEffect(() => {
        fetchWeather();
    }, [location]);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(API_URL);
            setWeatherData(response.data);
            setError(null);
        } catch (err) {
            setError("Unable to fetch weather data. Please check the location.");
            setWeatherData(null);
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="weather-container">
            <h2>Weather Information</h2>
            <div className="location-input">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={location}
                    onChange={handleLocationChange}
                />
            </div>
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <p>
                        <strong>City:</strong> {weatherData.name}
                    </p>
                    <p>
                        <strong>Temperature:</strong> {weatherData.main.temp}°C
                    </p>
                    <p>
                        <strong>Humidity:</strong> {weatherData.main.humidity}%
                    </p>
                    <p>
                        <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
                    </p>
                    <p>
                        <strong>Weather:</strong> {weatherData.weather[0].description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;