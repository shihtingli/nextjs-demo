import { ICat } from './../types/cat'
import Cat from './../models/cat'
 
interface CatRepo {
  getCats(): Promise<Array<ICat>>
  addCat(catBody: ICat): Promise<ICat>
}
 
class CatRepoImpl implements CatRepo {
  private constructor() {}
 
  static of(): CatRepoImpl {
    return new CatRepoImpl()
  }
 
  async getCats(): Promise<Array<ICat>> {
    return Cat.find().lean()
  }

  async addCat(catBody: ICat): Promise<ICat> {
    return Cat.create(catBody)
  }
 
}
 
export { CatRepoImpl }