import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"


const Details = function () {
const {cityName} = useParams()

  return (
    <>
      <NavBar />
      <h1>{cityName}</h1>

    </>
  )
}

export default Details
