import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

import getBackground from "../weatherBackground"

const WeatherCard = function ({ weather }) {
  const backgroundImage = getBackground(weather.weather[0].main)

  return (
    <Card
      className="p-3 shadow border-0 rounded-5 text-center h-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />

        <h2 className="display-5">{Math.round(weather.main.temp)}°C</h2>

        <Card.Text className="text-capitalize">
          {weather.weather[0].description}
        </Card.Text>


{/* filter by name and also country */}
        <Link to={`/details/${weather.name},${weather.sys.country}`}>
          <Button variant="light" className="bg-opacity-50">
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard
