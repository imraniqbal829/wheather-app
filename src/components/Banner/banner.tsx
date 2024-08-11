import React, { useEffect, useState } from 'react';
import type { RootState } from '../../store.ts';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../feature/search/searchSlice.ts';
import axios from 'axios';
import './banner.css';
import Weather from '../../interfaces/Weather.interface.ts'; // Import the Weather DTO
import Loader from '../Loader/loader.js';

const Banner: React.FC = () => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null); // Type the state with Weather DTO
  const search = useSelector((state: RootState) => state.search);
  const [searchVal, setSearchVal] = useState('Cottbus');
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWeatherData();
    console.log(search);
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios
        .get('http://api.weatherapi.com/v1/current.json', {
          params: {
            key: '2025fdc48207436a94a14135241008',
            q: searchVal.length ? searchVal : 'Cottbus',
          },
        })
        .then((res) => {
          setLoader(false);
          return res;
        });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setLoader(true);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
    console.log(search);
  };

  const submit = () => {
    dispatch(setSearchValue(searchVal));
    fetchWeatherData();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setSearchValue(searchVal));
      fetchWeatherData();
    }
  };

  if (!weatherData) return <div>Loading...</div>;

  const current = weatherData.current;
  const location = weatherData.location;

  return (
    <section className="banner text-light d-flex">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-5">
        <div className="banner-text">
          <h1 className="display-4 fw-bold">Weather Wisdom for Every Day</h1>
          <p className="lead">Forecast, Every Day.</p>
        </div>
        <div className="banner-image">
          <div className="card">
            <div className="row">
              <div className="col-9">
                <div className="form-group">
                  <input
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search city"
                  />
                </div>
              </div>
              <div className="col-3">
                <button onClick={submit} className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            {loader ? (
              <Loader show={loader} />
            ) : (
              <>
                <div className="location">{location.name}</div>
                <div className="dateTime">
                  {new Date(location.localtime).toLocaleString('en-US', {
                    weekday: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                  , {current.condition.text}
                </div>
                <div className="weatherInfo">
                  <div className="temperature">
                    {Math.round(current.temp_c)}°C
                  </div>
                  <img
                    src={`http:${current.condition.icon}`}
                    alt={current.condition.text}
                    className="icon"
                  />
                </div>
                <div className="extraInfo">
                  <div className="detail">
                    <img
                      src="/assets/precipitation.svg"
                      alt="precipitation"
                      className="detailIcon"
                    />
                    <div>{current.precip_mm}% Precipitation</div>
                  </div>
                  <div className="detail">
                    <img
                      src="/assets/wind.svg"
                      alt="wind"
                      className="detailIcon"
                    />
                    <div>{current.wind_kph} km/h Winds</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
