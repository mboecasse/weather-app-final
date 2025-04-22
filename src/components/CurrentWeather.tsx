import { WeatherData } from '../types/weather';
import { formatTemperature } from '../utils/formatters';
import './CurrentWeather.css';

interface CurrentWeatherProps {
  weather: WeatherData;
}

const CurrentWeather = ({ weather }: CurrentWeatherProps) => {
  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p className="date">{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{formatTemperature(weather.main.temp)}</span>
          <div className="hi-lo">
            <span>H: {formatTemperature(weather.main.temp_max)}</span>
            <span>L: {formatTemperature(weather.main.temp_min)}</span>
          </div>
        </div>
        
        <div className="weather-icon">
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
          <p className="description">{weather.weather[0].description}</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail">
          <span className="label">Feels like</span>
          <span className="value">{formatTemperature(weather.main.feels_like)}</span>
        </div>
        <div className="detail">
          <span className="label">Humidity</span>
          <span className="value">{weather.main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind</span>
          <span className="value">{Math.round(weather.wind.speed * 3.6)} km/h</span>
        </div>
        <div className="detail">
          <span className="label">Pressure</span>
          <span className="value">{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;