export interface IInfo {
  name: string;
  username: string;
  user_id: number;
  followers: string;
  following: string;
  numTweets: string;
  since: string;
  until: string;
};

export interface ICount {
  count: number;
};

export interface ITweets {
  id: number;
  date: string;
  time: string;
  tweet: string;
  replies: number;
  retweets: number;
  likes: number;
};

export interface ITweet {
  id: number;
  date: string;
  time: string;
  tweet: string;
  replies: number;
  retweets: number;
  likes: number;
};

export interface IBubble {
  id: number; 
  cx: string;
  cy: string;
  r: string;
  fill: string;
};
