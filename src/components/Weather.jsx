import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Weather(){

    const [city,setCity] = useState("biratnagar")
    const [weather,setWeather] = useState({})
  


    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4978dfb53da08bb0686a8254e45cb5d0`

    useEffect(()=>{
        fetchWeather()
    },[])

    async function fetchWeather(){
        const response = await fetch(baseUrl)
        const responseJson = await response.json()
        console.log(responseJson)
        setWeather(responseJson)
    }
    function getIcon(weather){
        switch (weather){
            case "Rain":
                return  <FontAwesomeIcon icon="fa-solid fa-umbrella" />
            
            case"Clouds":
              return <FontAwesomeIcon icon="fa-solid fa-cloud" />
              case "Clear":
                 return <FontAwesomeIcon icon="fa-solid fa-check" />
              default :
             
        }
    }
    function getImage(weather){
        switch(weather){
            case "Rain":
        return "https://wallpapercave.com/wp/Yvk8T1N.jpg"
        case"Clouds":
        return "https://th.bing.com/th/id/OIP.p4x2A4FdyIt-jnOdkSrYwgHaE7?rs=1&pid=ImgDetMain"
        case"Clear":
        return "https://th.bing.com/th/id/OIP.pL6etCvR1ubtjEfP3mljywHaEK?rs=1&pid=ImgDetMain"

            default :
    }
}




    return <div>
        <h1><FontAwesomeIcon icon="fa-solid fa-cloud" />WEATHER APP</h1>
        
            <p>{city}</p>
        <input type="text" placeholder="Enter city name.." onChange={
            (e)=>{
                // console.log(e.target.value)
                setCity(e.target.value)
            }
        }  style={{padding:"10px"}} />
        <button onClick={fetchWeather} >Search Weather</button>

        {
            weather.main && 
           (
            <div className="weather" style={{backgroundImage:`URL(${getImage(weather.weather[0].main)})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",}}>
                <h1><FontAwesomeIcon icon="fa-solid fa-temperature-three-quarters" />Temperature: <span style={{color:"red"}}>{weather.main.temp} °C</span></h1> 
                <h1> <FontAwesomeIcon icon="fa-solid fa-droplet" />HUMIDITY :{ weather.main.humidity}%</h1>

                    <h2> {weather.weather[0].main}{getIcon(weather.weather[0].main)}</h2>
                    <p><FontAwesomeIcon icon="fa-solid fa-book" />     {weather.weather[0].description}</p>
                    <h2><FontAwesomeIcon icon="fa-solid fa-location-dot" />{weather.name}</h2>

            </div>
            )
        }

{/* hello how are you? what's up ? nikhil dhital chor mula . 
how are you?

hey there how is going 
nikhil chor m;ula 
nikhil dhital chor mula hawa mula chor chor 
pen chor 
pen chor 
pen chor
pen chor

>
*/}

    </div>
}