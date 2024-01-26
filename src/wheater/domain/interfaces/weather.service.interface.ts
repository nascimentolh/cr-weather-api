import { IWeatherSummary } from "./weather-summary.interface";
import { IWeatherResponse } from "./weather.response.interface";

export interface IWeatherService {
    getCityWeather(cityName: string): Promise<IWeatherSummary>; 
    getCitiesWeather(citiesNames: string[]): Promise<IWeatherSummary[]>; 
}