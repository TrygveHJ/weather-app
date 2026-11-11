import { useState } from 'react'
import CitySearch from './components/CitySearch'
import WeatherDisplay from './components/WeatherDisplay'
import './App.css'


function App() {
  const [cityData, setCity] = useState(null)

  return (

    <>
      <header className='header'>
        <h1>Weather</h1>
      </header>
      <main className="main">
        <h2></h2>
        <CitySearch setCity={setCity} />
        <WeatherDisplay cityData={cityData} />
      </main>
    </>
  )
}

export default App
