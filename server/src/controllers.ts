import {Request, Response} from "express";
import * as db from './db/BlueOceanSchema';  // db object has models as property
import bcrypt from 'bcryptjs';

export function register (req: Request, res: Response): void {
  const {email, username, password} = req.body;
  db.User.findOne({email: email})

  .then((result) => {
    // if there is one in the database send back that it already exists
    if (result) {
      res.status(300).send('already exists');

    } else {
      // if not in database create a new one and send back new user id
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.User.create({email: email, username: username, password: hashedPassword})

      .then((result) => {
        const id = result._id.toString();

        // set the session to be authorized and have user id
        req.session.isAuth = true;
        req.session.user = id;
        res.send({id: result._id}).status(201);
      })
    }
  })

  .catch((err) => {
    console.log(err)
    res.sendStatus(404);
  })
}

export function login (req: Request, res: Response): void {
  const {email, password} = req.body;
  db.User.findOne({email: email})
  .then ((result) => {
    // if there is a user
    if (result) {
      // check if hashed password matches
      const isMatch = bcrypt.compareSync(password, result.password)
      if (isMatch) {
        // change new user id to a string to add to session
        const id = result._id.toString();

        // set the session to be authorized and have user id
        req.session.isAuth = true;
        req.session.user = id;
        res.send({id: result._id}).status(201);
      } else {
        // if login failed session is not authorized
        req.session.isAuth = false;
        res.sendStatus(401)
      }
    } else {
      // if no matches in data base
      req.session.isAuth = false;
      res.sendStatus(401);
    }
  })
  .catch((err) => {
    // if login failed session is not authorized
    req.session.isAuth = false;
    console.log(err);
    res.sendStatus(401);
  })
}

export function logout (req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      res.send('unable to log out').status(404);
    } else {
      res.sendStatus(200);
    }
  })
}

export function auth (req: Request, res: Response) {
  if (req.session.isAuth === true)  {
    res.send({id: req.session.user}).status(200)
  } else {
    res.status(404).send({id: null})
  }
}

/************************GAMES************************/
export async function getGames (req: Request, res: Response) {
  console.log('received request with these params:',req.query)
  let { gameId, gameIds} = req.query;
  if (gameId) {
    // case1 : get one game based on id
    try {
      let result = await db.Event.findById(gameId);
      res.send(result);
    } catch (error) {
      res.sendStatus(404);
    }
  } else if (gameIds) {
    // case2 : get games based on array of ids
    let results = [];
    // this is not best practice but it works for now, the incoming array of gameIds should be in json
    gameIds = JSON.parse(gameIds);
    for (let gameId of gameIds) {
      try {
        let result = await db.Event.findById(gameId);
        results.push(result);
      } catch (error) {
        // just don't push to results
        console.log(error);
      }
    }
    res.send(results);
  } else {
    // case3 : get all games
    try {
      let results = await db.Event.find({});
      res.send(results);
    } catch (error) {
      res.sendStatus(404);
    }
  }
}
/************************USERS************************/
export async function getUserInfo (req: Request, res: Response) {
  try {
    // search user by Id
  } catch (error) {

  }
}

export async function getFriends (req: Request, res: Response) {
  try {
    // search friends by array of IDs
  } catch (error) {

  }
}

export async function userJoinGame (req: Request, res: Response) {
  const { userId, gameId } = req.query;
  console.log('userId:', userId, 'gameId:', gameId);
  try {
    const user: any = await db.User.findById(userId);
    console.log('found user');
    if (!user.events.includes(gameId)) {
      console.log('this is a new gameId')
      user.events.push(gameId);
      await user.save();
      res.sendStatus(201);
    } else {
      res.sendStatus(200)
    }
  } catch (error) {
    res.sendStatus(404);
  }
}



