import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import WeatherCard from "./WeatherCard"

const SearchBar = function () {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState(null)

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e7282535f1801102596260041d76bf77&units=metric`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error in fetching")
        }
      })
      .then((data) => {
        // first test data in console:
        // console.log("Weather Data:", data)

        // save data and show them in Home
        setWeather(data)
      })
      .catch((error) => {
        console.log("Error:", error)
      })
  }

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search city..."
          className="me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="primary" onClick={fetchWeather}>
          Search
        </Button>
      </Form>
      {/* test */}
      {/* <p>{search}</p> verified*/}
      
      {weather && <WeatherCard weather={weather} />}
    </>
  )
}

export default SearchBar
