import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './wheater/weather.module';
@Module({
  imports: [ConfigModule.forRoot(), WeatherModule],
  providers: [], 
  controllers: [], 
  exports: [] 
})
export class AppModule { }
