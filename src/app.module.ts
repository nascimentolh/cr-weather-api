import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WheaterModule } from './wheater/wheater.module';

@Module({
  imports: [WheaterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
