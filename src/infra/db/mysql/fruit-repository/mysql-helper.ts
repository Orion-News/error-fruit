import { AddFruitRepository } from '../../../../data/protocols/add-fruits-repository'
import { AddFruitModel } from '../../../../domain/usecases/add-fruit'
import { FruitsModel } from '../../../../domain/models/fruits'
import knexClient from '../helpers/knex-helper'


export class MySqlRepository implements AddFruitRepository {
  async add (fruitData: AddFruitModel): Promise <FruitsModel> {
    const addFruit = knexClient.insertG(fruitData)
    return addFruit
  }
}