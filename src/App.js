import './App.css'
import { Home } from './Home'

function App() {
  // removes the loading page(3000 ms)
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.visibility = "hidden"
  }, 300);

  // clock for the website
  setInterval(() => {
    const timeDisplay = document.getElementById("time");
    timeDisplay.textContent = new Date().toLocaleString().replace(", ", " - ");
  }, 1000);

  // weather api
  const fetchData = async () => {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=0a29a7e6a18c4c08ad3221540241510&q=salt lake city&days=5&aqi=yes&alerts=no`
    await fetch(url)
    .then((resp) => resp.json())
    .then((responseData) => {
      try{
        document.getElementById('weather-span').innerHTML = `Salt Lake City: ${responseData.current.temp_f}°F`
      }catch(err){
        document.getElementById('weather-span').innerHTML = `Could not fetch weather, sorry.`
        console.log(err)
      }
    })
  }
  fetchData()


  return (
    <div className="App">
        {/* <!-- CRT MONITER EFFECT --> */}
        <div id="crt"> 
            <div className="scanline"></div>
        </div>
        <div className="scanline"></div>

        {/* <!-- HEADER/NAVBAR --> */}
        <header>
            <span>What have I been up to?</span>
            <div className="dropdown">
                <button className="dropbtn">CONTACT ME</button>
                <div className="dropdown-content">
                <a href="https://www.linkedin.com/in/broderickhywell" target="_blank">LINKEDIN</a>
                <a href="https://github.com/BroderickHywell" target="_blank">GITHUB</a>
                </div>
            </div>
        </header>

        {/* <!-- FOOTER --> */}
        <footer>
            <span id="weather-span"></span>
            <span id="time"></span>
        </footer>

        {/* <!-- LOADING SCREEN --> */}
        <section id="loader-wrapper">
            <div id="loading-container">
              <span id="loading-span">LOADING...</span>
              <span className="loader"><span className="loader-inner"></span></span>
            </div>
        </section>
          <Home />
    </div>
  )
}

export default App
