import { AddFruitRepository, AddFruit, AddFruitModel, FruitsModel} from './db-add-fruit-protocols'

export class DbFruitAccount implements AddFruit {
  private readonly addFruitRepository: AddFruitRepository

  constructor ( addFruitRepository: AddFruitRepository) {
    this.addFruitRepository = addFruitRepository
  }
  
  async add (fruit: AddFruitModel): Promise<FruitsModel> {
    // Object.assign({}, accountData, { password: hashedPassword })
    console.log(fruit)
    return await this.addFruitRepository.add(fruit)
  }
}