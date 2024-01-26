import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherService } from './domain/services/weather.service';
import { WeatherController } from './application/controllers/weather.controller';
import { WeatherHttpService } from './infrastructure/http/weather.http.service';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [HttpModule],
    providers: [WeatherService, WeatherHttpService, ConfigService],
    controllers: [WeatherController],
    exports: [WeatherService]
})
export class WeatherModule {}
