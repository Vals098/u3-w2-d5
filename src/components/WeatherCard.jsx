const WeatherCard = function({weather}){
return (
         <div>
            <h3>{weather.name}</h3>
            <h3>{weather.main.temp}°C</h3>
            <h3>{weather.weather[0].description}</h3>
        </div>
)
}

export default WeatherCard