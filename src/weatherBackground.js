// function to get the card background for both WeatherCard and Details
const getBackground = (condition) => {
  switch (condition) {
    case "Clear":
      return "../public/sunny.jpg"
    case "Rain":
      return "../public/rainy.jpg"
    case "Clouds":
      return "../public/cloudy.jpg"
    default:
      return "../public/default.jpg"
  }
}

export default getBackground
