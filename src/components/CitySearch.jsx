import React from 'react'
import WeatherDisplay from './WeatherDisplay'

const API_url = import.meta.env.VITE_GEOCODING_URL
const API_key = import.meta.env.VITE_API_KEY

export default function CitySearch({ setCity }) {

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const city = formData.get("city")

        const url = new URL(API_url)
        // console.log(url);


        url.searchParams.set("q", city)
        url.searchParams.set("appid", API_key)
        // console.log(url);

        const response = await fetch(url)
        const data = await response.json()
        // console.log(response);
        console.log(data);

        // const lat = data[0].lat
        // const lon = data[0].lon
        // const cityName = data[0].name

        setCity(data[0])




    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" name="city" id="city" placeholder='Write a city name' className='form__input' />
                <button type="submit" className='form__button'>Search</button>
            </form>
        </>
    )
}
