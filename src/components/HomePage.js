import React, { useEffect, useState } from 'react';
import ErrorMsg from './ErrorMsg';
import WeatherCard from './WeatherCard';

const HomePage = (props) => {

    const [name, setName] = useState("");
    const [main, setMain] = useState([]);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false)


    const getWeather = async (city) => {
        try {
            setError(false);
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=cd8522640548b463b5132bb36abe9d4c`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setName(parsedData.name);
            setMain(parsedData.main);
            setWeather(parsedData.weather[0]);
        } catch (error) {
            setError(true);
            console.clear();
        }
    }

    useEffect(() => {
        getWeather(props.city);
        //   eslint-disable-next-line
    }, [])

    const handleWeather = async () => {
        let cit = document.getElementById("floatingCity").value;
        getWeather(cit);
    }

    if (error) {
        return <ErrorMsg />;
    }

    else {

        return (
            <>
                <div className="container">
                    <div className="p-5 mb-4 bg-secondary rounded-3">
                        <div className="row g-2">
                            <div className="col-md">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingCity" placeholder="State" required />
                                    <label htmlFor="floatingPassword">State/City</label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg my-2" type="button" onClick={handleWeather}>Get Update</button>
                    </div>

                </div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <WeatherCard city={name} temp={main.temp} feels_like={main.feels_like} haze={weather.main} humidity={main.humidity} icon={weather.icon} />

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;