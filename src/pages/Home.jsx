import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Footer from "../components/Footer"

import { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"

const cities = [
  "L'Aquila, IT",
  "Tokyo, JP",
  "London, UK",
  "Bangkok, TH",
  "Roma, IT",
  "Sydney, AU",
  "Seoul, KR",
  "Cape Town, ZA",
]

const Home = function () {
  const [weatherList, setWeatherList] = useState([])

  //   loading and error
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    //   loading and error initial state
    setIsLoading(true)
    setIsError(false)

    Promise.all(
      cities.map((city) => {
        return fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7282535f1801102596260041d76bf77&units=metric`,
        ).then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Error fetching cities")
          }
        })
      }),
    )
      .then((data) => {
        setWeatherList(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  return (
    <div className="home-background">
      <h1 className="text-center display-1 p-3">Your Weather App</h1>
      <div className="px-3">
        <SearchBar />
      </div>
      <div className="weather-content">
        {/* case loading */}
        {isLoading && <h1 className="text-center pt-5">Loading...</h1>}
        {/* case error */}
        {isError && <h1 className="text-center pt-5">Error loading weather</h1>}
        {/* case no load no err */}
        {!isLoading && !isError && (
          <Container className="my-5">
            <Row className="g-4">
              {weatherList.map((weather) => (
                <Col sm={12} md={6} lg={3} key={weather.id}>
                  <WeatherCard weather={weather} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home
