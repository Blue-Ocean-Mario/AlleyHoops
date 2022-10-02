import {Request, Response} from "express";
import * as db from './db/BlueOceanSchema';  // db object has models as property



export function test (req: Request, res: Response): void {
  console.log(req.session)
  db.User.create({login: {
    username: 'Blake',
    email: 'email@email',
    password: 'password'
  }, stats: {jumping: 5}
})
  .then((result) => {
    console.log("success")
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(201);
  })

}