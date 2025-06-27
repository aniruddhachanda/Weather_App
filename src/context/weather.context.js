import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE,MEASUREMENT_SYSTEM,UNITS } from "../constants";
import { getWeatherData } from "../api";

const weatherContext=createContext();

function WeatherProvider({children}){

    const [place,setPlace]= useState(DEFAULT_PLACE);
    const [loading,setLoading]=useState(true);
    const [currentWeather,setCurrentWeather]= useState({});
    const [hourlyForecast,setHourlyForecast]= useState([]);
    const [dailyForecast,setDailyForecast]= useState([]);
    const [measurementSystem,setMeasurementSystem] = useState(MEASUREMENT_SYSTEM.AUTO);
    const [units,setUnits]=useState({});

    useEffect(()=>{
        async function _getWeatherData() {
            setLoading(true);

            const cw = await getWeatherData('current',place.place_id,measurementSystem);
            setCurrentWeather(cw.current);
            setUnits(UNITS[cw.units]);

            const hw= await getWeatherData('hourly',place.place_id,measurementSystem);
            setHourlyForecast(hw.hourly.data);

            const dw = await getWeatherData('daily',place.place_id,measurementSystem);
            setDailyForecast(dw.daily.data);

            setLoading(false);
        }

        _getWeatherData();
    },[place,measurementSystem]);


    return (
        <weatherContext.Provider value={{
            place,
            setPlace,
            loading,
            currentWeather,
            hourlyForecast,
            dailyForecast,
            measurementSystem,
            setMeasurementSystem,
            units
            }}>
            {children}
        </weatherContext.Provider>
    );
}

export {WeatherProvider};
export default weatherContext;