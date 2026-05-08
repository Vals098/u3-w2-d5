import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"

import { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"

const cities = [
  "Roma, IT",
  "Tokyo, JP",
  "London, UK",
  "Bangkok, TH",
  "Berlin, DE",
  "Sydney, AU",
  "Seoul, KR",
  "Cape Town, ZA"
]

const Home = function () {
  const [weatherList, setWeatherList] = useState([])

  useEffect(() => {
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
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <div>
        <SearchBar />
      </div>
      <Container className="mt-5">
        <Row className="g-4">
          {weatherList.map((weather) => (
            <Col sm={12} md={6} lg={3} key={weather.id}>
              <WeatherCard weather={weather} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
