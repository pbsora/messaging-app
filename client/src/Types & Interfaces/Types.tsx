export type Message = {
  author: string;
  date: number;
  message: string;
  messageId: string;
  name: string;
  to: string;
};

export type messageList = {
  author: string;
  date: number;
  message: string;
  messageId: string;
  name: string;
};

export type activeUsers = {
  username: string;
  socketId: string;
  userID: string;
};

export type selectedUser = {
  userID: string;
  username: string;
};
