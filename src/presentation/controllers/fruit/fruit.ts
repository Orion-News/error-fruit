import {  Controller, HttpResponse, HttpRequest, AddFruit } from './fruit-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError, ok } from '../../helpers/http-helper'

export class FruitController implements Controller {
  private readonly fruit: AddFruit

  constructor (fruit: AddFruit) {
    this.fruit = fruit
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const requiredFields = ['name', 'variety']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, variety, fruit_id } = httpRequest.body
      
      return ok(await this.fruit.add({
        fruit_id,
        name,
        variety,
      }))

    } catch (error) {
      return serverError()
    }
  }
}