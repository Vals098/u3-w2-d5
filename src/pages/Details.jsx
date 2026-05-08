import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Details = function () {
  const { cityName } = useParams()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e7282535f1801102596260041d76bf77&units=metric`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error fetching weather")
        }
      })
      .then((data) => {
        setWeather(data)
      })
      .catch(
        (error) => {
          console.log(error)
        },
        [cityName],
      )
  })

  return (
    <>
      <NavBar />
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <h2>{weather.main.temp}°C</h2>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </>
  )
}

export default Details
