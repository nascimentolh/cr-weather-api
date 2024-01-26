import { Injectable } from "@nestjs/common";
import { IWheaterResponse, IWheaterService } from "../interfaces";

@Injectable()
export class WheaterService implements IWheaterService {
    getCityWeather(cityName: string): Promise<IWheaterResponse> {
        throw new Error("Method not implemented.");
    }
    getCitiesWeather(citiesNames: string[]): Promise<IWheaterResponse[]> {
        throw new Error("Method not implemented.");
    }
    getCityAverage(city: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

}