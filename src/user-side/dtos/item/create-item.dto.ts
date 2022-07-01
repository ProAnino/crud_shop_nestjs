import { ParseIntPipe } from "@nestjs/common"
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateItemDto {

    @IsString()
    @IsNotEmpty()
    label: string

    @IsString()
    @IsOptional()
    description?: string

    @IsNotEmpty()
    price: number
}