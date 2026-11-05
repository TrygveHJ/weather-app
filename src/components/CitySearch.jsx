import React from 'react'
const API_url = import.meta.env.VITE_WEATHER_URL
const API_key = import.meta.env.VITE_API_KEY

export default function CitySearch() {
    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const city = formData.get("city")

        const url = new URL(API_url)
        console.log(url);


        url.searchParams.set("q", city)
        url.searchParams.set("appid", API_key)
        console.log(url);

        const response = await fetch(url)
        console.log(response);


    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" id="Write a city name" />
            <button type="submit">Search</button>
        </form>
    )
}
