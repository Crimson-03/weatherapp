import React from 'react';

const WeatherCard = (props) => {
    let { city, temp, feels_like, haze, icon } = props;
    let imageUrl = `http://openweathermap.org/img/w/${icon}.png`;

    return (
        <div className="h-100 p-5 text-white bg-dark rounded-3 mx-auto border border-primary">
            <p className='ml-auto mr-4 mt-2 mb-0 fs-3'>Weather in {city}</p>
            <h2><img className='my-2 fs-1' src={imageUrl} alt="weather-icon" /> {temp}° C</h2>
            <p className='fw-light'>Feels Like: <strong>{feels_like}° C</strong></p>
            <h5>{haze}</h5>
        </div>
    )
}

export default WeatherCard;