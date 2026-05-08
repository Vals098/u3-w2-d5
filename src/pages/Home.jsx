import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"

const Home = function(){
    return(
        <>
        <NavBar/>
        <h1>Home</h1>
        <div>
            <SearchBar/>
        </div>
        </>
    )
}

export default Home