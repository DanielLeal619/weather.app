import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import VisibleWeather from './components/VisibleWeather'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords !== undefined) {
    const apiKey = "fd0c520d410ef41fb7cd86cac920b88a"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
    axios.get(url)
    .then(res => { 
      setWeather(res.data)
      const obj = {
        cel: (res.data.main.temp - 273.15).toFixed(0),
        far: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
      }
      setTemperature(obj)
    })

    .catch(err => console.log(err))
    }
  }, [coords])  

  return (
    <div>
      <VisibleWeather 
      weather={weather}
      temperature={temperature}
      />
    </div>
  )
}

export default App
