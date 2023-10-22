const rapid_api_api_key = "bb1c51a074msh2e5ba048322d78bp1eea33jsn6cbafd6838be"
const openweather_api_key = "f1f03e738a595abb7a070434ce2ce426"

let icon_code = "10d"

const getAirQuality = (city) => {
    cityname.innerHTML = city
    const air_quality_options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${rapid_api_api_key}`,
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };

    const air_quality_url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;

    fetch(air_quality_url, air_quality_options)
        .then(air_quality_response => air_quality_response.json())
        .then((air_quality_response) => {
            co_conc.innerHTML = air_quality_response.CO.concentration
            co_aqi.innerHTML = air_quality_response.CO.aqi
            no_conc.innerHTML = air_quality_response.NO2.concentration
            no_aqi.innerHTML = air_quality_response.NO2.aqi
            o3_conc.innerHTML = air_quality_response.O3.concentration
            o3_aqi.innerHTML = air_quality_response.O3.aqi
            so2_conc.innerHTML = air_quality_response.SO2.concentration
            so2_aqi.innerHTML = air_quality_response.SO2.aqi
            pm2_conc.innerHTML = air_quality_response["PM2.5"].concentration
            pm2_aqi.innerHTML = air_quality_response["PM2.5"].aqi
            pm10_conc.innerHTML = air_quality_response.PM10.concentration
            pm10_aqi.innerHTML = air_quality_response.PM10.aqi
            aqi.innerHTML = air_quality_response.overall_aqi
            console.log(air_quality_response)
        })
        .catch(err => console.error(err));
}

const getWeatherData = (lat,lon) => {

    const open_weather_onecall_info_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${openweather_api_key}`;

    fetch(open_weather_onecall_info_url)
        .then((open_weather_info_response) => open_weather_info_response.json())
        .then((open_weather_info_response) => {
            weatherimg.innerHTML = `<img width = "200" height = "200" src = "https://openweathermap.org/img/wn/${open_weather_info_response.current.weather[0].icon}@2x.png" alt = "${open_weather_info_response.current.weather[0].main}"></img>`
            weathermain.innerHTML = open_weather_info_response.current.weather[0].main
            temp.innerHTML = Math.round((open_weather_info_response.current.temp - 273.15) * 10) / 10
            feels.innerHTML = Math.round((open_weather_info_response.current.feels_like - 273.15) * 10) / 10
            wind.innerHTML = open_weather_info_response.current.wind_speed
            windegree.innerHTML = open_weather_info_response.current.wind_deg
            windgust.innerHTML = open_weather_info_response.current.wind_gust
            humidity.innerHTML = open_weather_info_response.current.humidity
            uv.innerHTML = open_weather_info_response.current.uvi
            visibility.innerHTML = open_weather_info_response.current.visibility
            
            let timezone = open_weather_info_response.timezone
            let sunriseTimestamp = new Date(open_weather_info_response.current.sunrise * 1000)
            let sunsetTimestamp = new Date(open_weather_info_response.current.sunset * 1000)
            const time_options = { timeZone: timezone, hour: 'numeric', minute: 'numeric', hour12: true };
            const sunriseTimeAMPM = sunriseTimestamp.toLocaleTimeString('en-US', time_options);
            const sunsetTimeAMPM = sunsetTimestamp.toLocaleTimeString('en-US', time_options);
            sunrise.innerHTML = sunriseTimeAMPM
            sunset.innerHTML = sunsetTimeAMPM
            
        })
        .catch((err) => console.error(err));
    
    const open_weather_info_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweather_api_key}`;

    fetch(open_weather_info_url)
        .then((data_response) => data_response.json())
        .then((data_response) => {
            max.innerHTML = Math.round((data_response.main.temp_max - 273.15) * 10) / 10
            min.innerHTML = Math.round((data_response.main.temp_min - 273.15) * 10) / 10
    })
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const open_weather_geocoding_url = `https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=1&appid=${openweather_api_key}`;

    fetch(open_weather_geocoding_url)
        .then((open_weather_geocoding_response) => open_weather_geocoding_response.json())
        .then((data) => {
            if (data.length > 0) {
                let lat = data[0].lat;
                let lon = data[0].lon;
                getWeatherData(lat,lon)
            } else {
                console.error("No data found for the specified city.");
            }
        })
        .catch((err) => console.error(err));
    getAirQuality(city.value)
    
})

// getAirQuality("Delhi")

























































































