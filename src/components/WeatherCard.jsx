import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

const WeatherCard = function ({ weather }) {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <h2>{weather.main.temp}°C</h2>
        <Card.Text>{weather.weather[0].description}</Card.Text>
        <Link to={`/details/${weather.name}`}>
          <Button>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard
