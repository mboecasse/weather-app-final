import { WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeatherByCity(city: string): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return response.json();
}

export async function fetchWeatherByLocation(
  lat: number, 
  lon: number
): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return response.json();
}