import { IsInt, IsOptional, IsString } from "class-validator"

export class EditItemDto {

    @IsString()
    @IsOptional()
    label?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsInt()
    @IsOptional()
    price?: number
}