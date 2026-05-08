import { Container, Row, Col, Card } from "react-bootstrap"

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
        <Container className="mt-4">
          <Card className="p-4 shadow-lg border-0 rounded-5">
            <div className="text-center">
              <h1>{weather.name}</h1>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />

              <h2 className="display-1">{Math.round(weather.main.temp)}°C</h2>

              <h4 className="text-capitalize">
                {weather.weather[0].description}
              </h4>
            </div>

            <Row className="mt-4 text-center">
              <Col>
                <h5>Feels like</h5>
                <p>{Math.round(weather.main.feels_like)}°C</p>
              </Col>

              <Col>
                <h5>Humidity</h5>
                <p>{weather.main.humidity}%</p>
              </Col>

              <Col>
                <h5>Wind</h5>
                <p>{weather.wind.speed} m/s</p>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </>
  )
}

export default Details
