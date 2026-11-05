import React from 'react'

export default function CitySearch() {
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new formData(form)
        const city = formData.get("city")

        const url = new URL()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" id="Write a city name" />
            <button type="submit">Search</button>
        </form>
    )
}
