import { IWheaterResponse } from "./wheater.response.interface";

export interface IWheaterService {
    getCityWeather(cityName: string): Promise<IWheaterResponse>; 
    getCitiesWeather(citiesNames: string[]): Promise<IWheaterResponse[]>; 
    getCityAverage(city: string): Promise<number>;
}