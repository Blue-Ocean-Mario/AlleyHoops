import {Schema, model, connect } from 'mongoose';
import * as I from '../Utilities/Interfaces/Schemas'

const userSchema = new Schema<I.User>({
  username: String, // username, gmail or email, password
  email: String,
  password: String,
  stats: Object, // dribbling, passing, shooting, dunking,
  friends: Array, // of [ids]
  events: Array, // of [ids]
  picture: String, // url?
  conversations: Object, // other users // store objects of objects
});

// not to implement, just to see inside object of objects
const conversationSchema = new Schema<I.Conversation>({
  friendId: Object, // username, conversationId: Number
});

const messageSchema = new Schema<I.Message>({
  conversationId: Number,
  body: Array,
  // Object
  /*
  body: String
  from: String, // username
  date: Date,
  */
});

const eventSchema = new Schema<I.Event>({
  eventName: String,
  eventDescription: String,
  peopleAttending: Array,
  comments: Array,
  location: String, // ???
  startTime: Date,
  endTime: Date,
  creator: String, // user id
});

const commentSchema = new Schema<I.Comment>({
  username: String,
  date: Date,
  body: String,
});

export const User = model("User", userSchema);
export const Conversation = model('Conversation', conversationSchema);
export const Message = model('Message', messageSchema);
export const Event = model ('Event', eventSchema);
export const Comment = model ('Comment', commentSchema);

const DBName = 'AlleyOops'; //  defin in env file later

connect(`mongodb://localhost/${DBName}`)
  .then((res) => {
    console.log(`connected to DB: ${DBName}`);
  })
  .catch((err) => {
    console.log("could not connect");
  });


