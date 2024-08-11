import React, { useEffect, useState } from 'react';
import type { RootState } from '../../store.ts';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { IForecast } from '../../interfaces/Forecast.interface.ts';
import ForecastItem from './forecast-item.tsx';
import './forecast.css';

const Forecast: React.FC = () => {
  const search = useSelector((state: RootState) => state.search);
  const [forecasts, setForecasts] = useState<IForecast | null>(null);

  useEffect(() => {
    fetchForecast();
    console.log(search);
  }, [search]);

  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        'http://api.weatherapi.com/v1/forecast.json',
        {
          params: {
            key: '2025fdc48207436a94a14135241008',
            q: search.length ? search : 'Cottbus',
            days: 5,
          },
        }
      );

      setForecasts(response.data.forecast);
      console.log(response.data.forecast);
    } catch (error) {
      console.error(error);
    }
  };

  const itemsToShow = 5; // Number of items to display in the grid
  const forecastItems = forecasts?.forecastday || [];

  return (
    <section className="forecast-section">
      <div className="container">
        <h1 className="display-4 fw-bold text-white">5 Days Forecast</h1>
        <div className="row">
          {forecastItems.map((forecast, index) => (
            <div key={index} className="col-md-2 m-2">
              <ForecastItem forecast={forecast} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forecast;
