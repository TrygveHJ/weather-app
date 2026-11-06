import { createContext, useState } from "react";

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [city, setCityData] = useState(null)
    return (
        <WeatherContext.Provider value={{ city, setCityData }}>
            {children}
        </WeatherContext.Provider>
    )
}