import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";

import "../style/components/Forecast.scss";
import HorrizontallyScrollable from "./HorrizontallyScrollable";

function Forecast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="Forecast-container">
        <h3>{title}</h3>

        <HorrizontallyScrollable className="widget-container">
          {
            data.map((singleData) => (
              <div key={singleData.date||singleData.day}>
                {type === 'hourly' ? (
                  <HourlyForecastWidget data={singleData} />
                ) : (
                  <DailyForecastWidget data={singleData} />
                )}
              </div>
            ))}
        </HorrizontallyScrollable>
      </div>
    </div>
  );
}

export default Forecast;
