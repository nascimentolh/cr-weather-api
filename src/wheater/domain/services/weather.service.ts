import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { WeatherHttpService } from "../../infrastructure/http/weather.http.service";
import { IWeatherResponse, IWeatherService, IWeatherSummary } from "../interfaces";

@Injectable()
export class WeatherService implements IWeatherService {
    private readonly logger = new Logger(WeatherService.name);

    constructor(private weatherHttpService: WeatherHttpService) { }

    async getCityWeather(city: string): Promise<IWeatherSummary> {
        const cityData = await this.weatherHttpService.getCityWeather(city);
        return this.transformWeatherResponse(cityData);
    }

    async getCitiesWeather(citiesNames: string[]): Promise<IWeatherSummary[]> {
        console.log(citiesNames);
        return Promise.all(citiesNames.map(cityName => this.getCityWeather(cityName)));
    }

    private getCityAverage(cityData: IWeatherResponse): number {
        console.log(cityData);
        if (cityData && cityData.max_temp !== null && cityData.max_temp !== undefined && cityData.min_temp !== null && cityData.min_temp !== undefined) {
            return (cityData.max_temp + cityData.min_temp) / 2;
        } else {
            this.logger.error('A resposta não possui dados de temperatura válidos.', null);
        }
    }

    private transformWeatherResponse(cityData: IWeatherResponse): IWeatherSummary {
        return {
            minTemp: cityData.min_temp,
            maxTemp: cityData.max_temp,
            averageTemp: this.getCityAverage(cityData)
        }
    }
}