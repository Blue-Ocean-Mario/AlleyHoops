import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  login: Object, // username, gmail or email, password
  stats: Object, // dribbling, passing, shooting, dunking,
  friends: Array, // of [ids]
  events: Array, // of [ids]
  picture: String, // url?
  conversations: Object, // other users // store objects of objects
});

// not to implement, just to see inside object of objects
const conversationSchema = new mongoose.Schema({
  friendId: Object, // username, conversationId: Number
});

const messageSchema = new mongoose.Schema({
  conversationId: Number,
  body: Array,
  // Object
  /*
  body: String
  from: String, // username
  date: Date,
  */
});

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventDescription: String,
  peopleAttending: Array,
  comments: Array,
  location: String, // ???
  startTime: Date,
  endTime: Date,
  creator: String, // user id
});

const commentSchema = new mongoose.Schema({
  username: String,
  date: Date,
  body: String,
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost/AlleyOops');
