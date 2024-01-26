import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { firstValueFrom } from "rxjs";
import { IWeatherResponse } from "../../../wheater/domain/interfaces";

@Injectable()
export class WeatherHttpService {
    private readonly logger = new Logger(WeatherHttpService.name);
    private apiKey: string;
    private apiURL: string;

    constructor(private httpService: HttpService, private configService: ConfigService) {
        this.apiKey = this.configService.get<string>('WEATHER_API_KEY');
        this.apiURL = this.configService.get<string>('WEATHER_API_URL');
    }

    async getCityWeather(cityName: string) {
        const url = `${this.apiURL}?city=${cityName}`;
        const headers = { 'X-Api-Key': this.apiKey };

        try {
            this.logger.log(`Buscando a previsão do tempo para a cidade: ${cityName}`);

            const { data } = await firstValueFrom(this.httpService.get<IWeatherResponse>(url, { headers }));
            return data;
        } catch (error) {
            const err = error as AxiosError;
            this.logger.error(`Erro ao buscar previsão do tempo para a cidade: ${cityName}`, error.stack); 
            
            if (err.response) {
                throw new HttpException(`Error na API: ${err.response.statusText}`, err.response.status);
            } else if (err.request) {
                throw new HttpException("Erro ao comunicar com a API externa", HttpStatus.BAD_REQUEST);
            } else {
                throw new InternalServerErrorException('Erro interno no servidor');
            }
        }
    }
}