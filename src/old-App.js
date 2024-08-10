import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("http://api.weatherapi.com/v1/current.json", {
          params: {
            key: "2025fdc48207436a94a14135241008", // Your API key
            q: "Cottbus", // Example location
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  const { location, current } = weatherData;
  const { temp_c, condition, wind_kph, precip_mm } = current;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6 text-center">
          <div style={styles.card}>
          <div style={styles.location}>{location.name}</div>
          <div style={styles.dateTime}>
            {new Date(location.localtime).toLocaleString("en-US", {
              weekday: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}, {condition.text}
          </div>
          <div style={styles.weatherInfo}>
            <div style={styles.temperature}>
              {Math.round(temp_c)}°C
            </div>
            <img
              src={`http:${condition.icon}`}
              alt={condition.text}
              style={styles.icon}
            />
          </div>
          <div style={styles.extraInfo}>
            <div style={styles.detail}>
              <img src="/assets/precipitation.svg" alt="precipitation" style={styles.detailIcon} />
              <div>{precip_mm}% Precipitation</div>
            </div>
            <div style={styles.detail}>
              <img src="/assets/wind.svg" alt="wind" style={styles.detailIcon} />
              <div>{wind_kph} km/h Winds</div>
            </div>
          </div>
          </div>
        </div>
      
      </div>
      
    </div>

  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    maxWidth: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  location: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  dateTime: {
    fontSize: "14px",
    color: "#888",
    margin: "10px 0",
  },
  weatherInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
  },
  temperature: {
    fontSize: "48px",
    fontWeight: "300",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginLeft: "10px",
  },
  extraInfo: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  detail: {
    textAlign: "center",
  },
  detailIcon: {
    width: "24px",
    height: "24px",
    marginBottom: "5px",
  },
};
