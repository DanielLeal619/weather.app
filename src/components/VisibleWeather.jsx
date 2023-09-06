import { useState } from "react"

const VisibleWeather = ({ weather, temperature }) => {

  const [celsius, setCelsius] = useState(true)

  const changeTemp = () => setCelsius(!celsius)

  const bgImage = {
    backgroundImage: `url(/backgroundWeather.jpg)`
  }

  return (
    <article  className="totalApp" style={bgImage}>
      <section className="appCard">
        <h1 className="titleHeader">Weather App</h1>
        <h2 className="locationHeader">{weather?.name}, {weather?.sys.country}</h2>      
      <div className="bodyCard">
        <div className="iconBody">
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <section className="informationBody">
          <h3 className="descriptionBody">'{weather?.weather[0].description}'</h3>
          <ul className="listBody">
            <li><span className="subtitleInfo">🪁Wind Speed: </span><span className="descriptionInfo">{weather?.wind.speed} m/s</span></li>
            <li><span className="subtitleInfo">🌩️Clouds: </span><span className="descriptionInfo">{weather?.clouds.all}%</span></li>
            <li><span className="subtitleInfo">⏱️Pressure: </span><span className="descriptionInfo">{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <div className="footerCard">
        <h2 className="temperatureFooter">{celsius ? `${temperature?.cel}°C` : `${temperature?.far}°F`}</h2>
        <button className="buttonFooter" onClick={changeTemp}>{celsius ? `${"Change to °F"}` : `${"Change to °C"}`}</button>
      </div>
      </section>
    </article>
  )
}

export default VisibleWeather