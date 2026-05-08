import { Link } from "react-router-dom"
import { Button, Card} from "react-bootstrap"

const WeatherCard = function ({ weather }) {
  return (
    <Card className="p-3 shadow border-0 rounded-5 text-center h-100">
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

        <Link to={`/details/${weather.name}`}>
          <Button variant="dark">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard
