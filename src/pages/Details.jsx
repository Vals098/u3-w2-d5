import { Container, Row, Col, Card } from "react-bootstrap"

import Footer from "../components/Footer"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import getBackground from "../weatherBackground"

const Details = function () {
  const { cityName } = useParams()
  const [weather, setWeather] = useState(null)

  //   loading and error
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    //   loading and error initial state
    setIsLoading(true)
    setIsError(false)

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
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      })
  }, [cityName])

  const backgroundImage = getBackground(weather?.weather[0].main)

  return (
    <>
      <div
        className="details-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {isLoading && <h1 className="text-center pt-5">Loading...</h1>}

        {isError && <h1 className="text-center pt-5">Error loading weather</h1>}

        {weather && (
          <Container className="pt-4">
            <Card className="p-4 shadow-lg border-0 rounded-5 bg-light bg-opacity-50">
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
        <Footer />
      </div>
    </>
  )
}

export default Details
