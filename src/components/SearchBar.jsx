import { Form, Button } from "react-bootstrap"
import { useState } from "react"

const SearchBar = function () {
  const [search, setSearch] = useState("")

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
        console.log("Weather Data:", data)
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
    </>
  )
}

export default SearchBar
