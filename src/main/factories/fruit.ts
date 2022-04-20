import { FruitController } from '../../presentation/controllers/fruit/fruit'
import { DbFruitAccount } from '../../data/usecases/add-fruit/db-add-fruit'
import { MySqlRepository } from '../../infra/db/mysql/fruit-repository/mysql-helper'

export const makeFruitController = (): FruitController => {
    const MySqlRepo = new MySqlRepository()
    const addFruit = new (MySqlRepo)
    return new FruitController(addFruit)
}