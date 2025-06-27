import "../style/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./ForeCast";
import { useContext } from "react";
import weatherContext from "../context/weather.context";
import Loader from "./Loader";

function Main(){
    const {loading,currentWeather,hourlyForecast,dailyForecast} = useContext(weatherContext);
    return <div className="Main">
        {loading ?(
            <Loader/>
        ) : (
            <>
            <CurrentWeather data={currentWeather}/>
            <Forecast type="hourly" title="Hourly Forecast" data={hourlyForecast}/>
            <Forecast type="daily" title="21 Days Forecast" data={dailyForecast}/>
            </>
        )}
    </div>
}

export default Main;