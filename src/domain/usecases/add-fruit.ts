import { FruitsModel } from '../models/fruits'

export interface AddFruitModel {
    fruit_id: number,
    name: string,
    variety: string
}

export interface AddFruit {
    add (fruit: AddFruitModel): Promise <FruitsModel>
}