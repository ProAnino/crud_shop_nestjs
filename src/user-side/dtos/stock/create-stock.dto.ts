import { IsNotEmpty } from "class-validator"
import { Item } from "src/business-logic/entities/item"

export class CreateStockDto {

    @IsNotEmpty()
    itemId: number

    @IsNotEmpty()
    count: number

}