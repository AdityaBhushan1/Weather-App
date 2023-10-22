let city = "Delhi"

const rapid_api_api_key = "bb1c51a074msh2e5ba048322d78bp1eea33jsn6cbafd6838be"


const air_quality_url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;

const air_quality_options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${rapid_api_api_key}`,
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(air_quality_url, air_quality_options)
    .then(air_quality_response => air_quality_response.json())
    .then((air_quality_response) => {
        co_conc = air_quality_response.CO.concentration
        co_aqi = air_quality_response.CO.aqi
        no_conc = air_quality_response.NO2.concentration
        no_aqi = air_quality_response.NO2.aqi
        o3_conc = air_quality_response.O3.concentration
        o3_aqi = air_quality_response.O3.aqi
        so2_conc = air_quality_response.SO2.concentration
        so2_aqi = air_quality_response.SO2.aqi
        pm2_conc = air_quality_response["PM2.5"].concentration
        pm2_aqi = air_quality_response["PM2.5"].aqi
        pm10_conc = air_quality_response.PM10.concentration
        pm10_aqi = air_quality_response.PM10.aqi
        aqi = air_quality_response.overall_aqi
        console.log(co_conc,co_aqi,no_conc,co_aqi,o3_conc,o3_aqi,so2_conc,so2_aqi,pm2_conc,pm2_aqi,pm10_conc,pm10_aqi,aqi)
    })
    .catch(err => console.error(err));