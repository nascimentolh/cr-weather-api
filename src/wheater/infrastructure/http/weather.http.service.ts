import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { IWheaterResponse } from "src/wheater/domain/interfaces";

@Injectable()
export class WheaterHttpSerivce {
    private readonly logger = new Logger(WheaterHttpSerivce.name);
    private apiKey: string;
    private apiURL: string;

    constructor(private httpService: HttpService, private configService: ConfigService) {
        this.apiKey = this.configService.get<string>('WEATHER_API_KEY');
        this.apiURL = this.configService.get<string>('WHEATER_API_URL');
    }

    async getCityWheater(cityName: string) {
        const url = `${this.apiURL}?city=${cityName}`;
        const headers = { 'X-Api-Key': this.apiKey };

        try {
            this.logger.log(`Buscando a previsão do tempo para a cidade: ${cityName}`);

            const { data } = await firstValueFrom(this.httpService.get<IWheaterResponse>(url, { headers }));
            return data;
        } catch (error) {
            this.logger.error(`Erro ao buscar previsão do tempo para a cidade: ${cityName}`, error.stack); if (error instanceof AxiosError) { throw new HttpException('Erro ao comunicar com a API externa', HttpStatus.BAD_GATEWAY); } throw new InternalServerErrorException('Erro interno no servidor');
        }
    }

}