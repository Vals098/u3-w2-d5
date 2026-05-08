import NavBar from "../components/NavBar"
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
    <div className="home-background">
      <h1 className="text-center display-1 p-3">Your Weather App</h1>
      <div className="px-3">
        <SearchBar />
      </div>
      <Container className="my-5">
        <Row className="g-4">
          {weatherList.map((weather) => (
            <Col sm={12} md={6} lg={3} key={weather.id}>
              <WeatherCard weather={weather} />
            </Col>
          ))}
        </Row>
      </Container>
         <Footer />
    </div>
  )
}

export default Home
