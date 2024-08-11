import React from 'react';

import './forecast-item.css';
import { IForecastDay } from '../../interfaces/Forecast.interface.ts';

interface ForecastItemProps {
  forecast: IForecastDay;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ forecast }) => {
  return (
    <div className="row">
      <div className="card">
        <div className="dateTime">
          {new Date(forecast.date).toLocaleString('en-US', {
            weekday: 'short',
            //hour: '2-digit',
            //minute: '2-digit',
          })}
          <br /> {forecast.day.condition.text}
        </div>
        <div className="row d-flex justify-content-center">
          <img
            src={`http:${forecast.day.condition.icon}`}
            alt={forecast.day.condition.text}
            className="forecast-icon"
          />
        </div>
        <div className="weatherInfo">
          <div className="row">
            <div className="col-6">
              <div className="temperature-1">
                {Math.round(forecast.day.mintemp_c)}°C
              </div>
            </div>
            <div className="col-6">
              <div className="temperature-1">
                {Math.round(forecast.day.maxtemp_c)}°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
