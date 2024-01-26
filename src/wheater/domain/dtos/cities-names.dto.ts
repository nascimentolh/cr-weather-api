import { IsArray, IsString } from "class-validator";

export class CitiesNamesDto {
    @IsArray()
    @IsString({ each: true })
    names: string[];
}