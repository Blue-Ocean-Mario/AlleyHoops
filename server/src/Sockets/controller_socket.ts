import * as database from './../db/BlueOceanSchema';
import * as I from '../Utilities/Interfaces/Schemas'

export async function getUserConversations (username: string): Promise<any> {
  try {
    const user = await database.User.find({username: username});

    return user;
  } catch (err) {
    console.error(err)
  }
}