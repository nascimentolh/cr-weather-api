import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { IWeatherSummary } from "../../../wheater/domain/interfaces";
import { WeatherService } from "../../../wheater/domain/services/weather.service";
import { CitiesNamesDto } from "../../../wheater/domain/dtos/cities-names.dto";


@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService) { }
    @Get('city')
    async getWeather(@Query('name') city: string): Promise<IWeatherSummary> {
        if (!city) {
            throw new BadRequestException('City name must be provided');
        }
        return this.weatherService.getCityWeather(city);
    }

    @Get('cities')
    async getCitiesWeather(@Query() cityNames: CitiesNamesDto): Promise<IWeatherSummary[]> {
        return this.weatherService.getCitiesWeather(cityNames.names);
    }
}