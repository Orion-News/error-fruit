import { AddFruitModel } from '../../domain/usecases/add-fruit'
import { FruitsModel } from '../../domain/models/fruits'

export interface AddFruitRepository {
    add (accountData: AddFruitModel): Promise <FruitsModel>
}