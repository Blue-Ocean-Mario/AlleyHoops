export interface User {
  username: string,
  email: string,
  password: string,
  stats: Object,
  friends: Array<string>,
  events: Array<string>,
  picture: string,
  conversations: Object,
}

export interface Conversation {
  friendId: Object,
}

export interface Message {
  conversationId: Number,
  body: Array<object>,
}

export interface Event {
  eventName: string,
  eventDescription: string,
  peopleAttending: Array<string>,
  comments: Array<string>, //comment ids
  location: String,
  startTime: Date,
  endTime: Date,
  creator: string,
}

export interface Comment {
  username: string,
  date: Date,
  body: string,
}