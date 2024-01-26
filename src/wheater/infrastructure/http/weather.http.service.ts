import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class WheaterHttpSerivce {
    private readonly logger = new Logger(WheaterHttpSerivce.name);
}