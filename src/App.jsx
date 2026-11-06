import { useState } from 'react'
import CitySearch from './components/CitySearch'
import WeatherDisplay from './components/WeatherDisplay'


function App() {
  const [cityData, setCity] = useState(null)

  return (

    <>
      <CitySearch setCity={setCity} />
      <WeatherDisplay cityData={cityData} />

    </>
  )
}

export default App
