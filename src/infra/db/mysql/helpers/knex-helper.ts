import knexHelper from './knexfile'
import { FruitsModel } from '../../../../domain/models/fruits'

export default class knexClient {

    static async getAll(dbName) {
        return await knexHelper.select('*').from<FruitsModel>(dbName)
    }

    static async insertG(fruits: FruitsModel) {
        return await knexHelper('fruits').insert(fruits)
    }

    // <FruitsModel>(dbName)

}