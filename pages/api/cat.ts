import type { NextApiRequest, NextApiResponse } from 'next'
import {establishConnection} from '../../middleware/mongoose'
import { ICat } from '../../types/cat'
import {CatRepoImpl} from '../../repo/cat-repo'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await establishConnection()
    const catRepo = CatRepoImpl.of()


    switch (req.method) {
        case 'GET':
            try {
                const cats = await catRepo.getCats()
                return res.status(200).send( cats )
              } catch (error) {
                return res.status(500).send({ msg: 'Internal Server Error' })
              }
            break
        case 'POST':
            try {
                const catBody = req.body as ICat
                const cat = await catRepo.addCat(catBody)
                return res.status(201).send({ cat })
              } catch (error) {
                return res.status(500).send({ msg: 'Internal Server Error' })
              }
            break        

    }



  
}