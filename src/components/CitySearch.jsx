import React from 'react'

export default function CitySearch() {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" id="Write a city name" />
            <button type="submit">Search</button>
        </form>
    )
}
