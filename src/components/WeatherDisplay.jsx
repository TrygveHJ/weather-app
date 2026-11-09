import React, { useEffect, useState } from 'react'
import CitySearch from './CitySearch';

const API_key = import.meta.env.VITE_API_KEY
const API_url = import.meta.env.VITE_CURRENT_WEATHER_URL

export default function WeatherDisplay({ cityData }) {
    const [weatherData, setWeather] = useState(null)
    useEffect(() => {
        console.log(cityData);



        if (!cityData) return

        const { lat, lon } = cityData
        console.log(lat);
        console.log(lon);

        const url = new URL(API_url)
        url.search = new URLSearchParams(
            { lat, lon, appid: API_key, units: "metric", lang: "da" }
        )

        const searchCity = async () => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(response);
            console.log(data);
            setWeather(data)
        }
        searchCity()


    }, [cityData])


    return (
        <>
            <div className='details'>
                <p className='details__city'>Weather in {cityData?.name}</p>
                {weatherData && (
                    <>
                        <p className='details__temp'>Temp is: {weatherData?.main.temp} &deg;C</p>
                        <p className='details__weather'>Weather is: {weatherData.weather[0].description}</p>
                    </>
                )}
            </div>
        </>
    )
}
