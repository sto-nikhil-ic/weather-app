import { useState } from "react"

export default function Weather(){


  const [weather,setWeather] =useState({})
  const [city,setCity] = useState()

  const fetchWeather = async ()=>{
    const apiKey = "4978dfb53da08bb0686a8254e45cb5d0"
    try {
        let response =await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=26.476544&lon=87.2906752&appid=${apiKey}`)
        let responseJson = await response.json()
        console.log(responseJson)
        var sunrise_date = new Date(0)
        sunrise_date.setUTCSeconds(responseJson.sys.sunrise)
        console.log("SUNRISE: ",sunrise_date.toLocaleString())
        var sunset_date = new Date(0)
        sunset_date.setUTCSeconds(responseJson.sys.sunset)
        console.log("SUNSET: ",sunset_date.toLocaleString())
        setWeather(responseJson)
    } catch (error) {
        console.log(error)

    }

  }


  const fetchWeatherCity = async (city)=>{
    const apiKey = "4978dfb53da08bb0686a8254e45cb5d0"
    try {
        let response =await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        let responseJson = await response.json()
        console.log(responseJson)
        var sunrise_date = new Date(0)
        sunrise_date.setUTCSeconds(responseJson.sys.sunrise)
        console.log("SUNRISE: ",sunrise_date.toLocaleString())
        var sunset_date = new Date(0)
        sunset_date.setUTCSeconds(responseJson.sys.sunset)
        console.log("SUNSET: ",sunset_date.toLocaleString())
        setWeather(responseJson)
    } catch (error) {
        console.log(error)

    }

  }
    return (
        <>
        
  <button onClick={fetchWeather}>Fetch Weather</button>
  <input style={{padding:"10px",}} placeholder='Enter city name..' type="text" onChange={(e)=>{
    setCity(e.target.value)
  }} />
  <button onClick={()=>{
    if (city){
      fetchWeatherCity(city)
    }
   
  }}>Fetch Weather City</button>


  {weather.main && <>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>

  <h1> 
  Temperature {(weather.main.temp -273).toFixed(2) } ° C</h1>
  </div>
    <h2>Country: {weather.sys.country}</h2>

    <h1> City: {weather.name}</h1>
    <h2>Weather {weather.weather[0].main} - {weather.weather[0].description}</h2>
  
  </> }
        </>
    )
}