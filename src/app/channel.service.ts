import { Injectable } from '@angular/core';

let CHANNELS:any[] = [
  {
    "Name" : "channel1",
    "recentPosts" : 5,
    "messages" : [
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj"
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj"
      }
    ]
  },
  {
    "Name" : "channel2",
    "recentPosts" : 7,
    "messages" : [
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj"
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj"
      }
    ]
  }
];

@Injectable()
export class ChannelService {

  constructor() { }

  getChannels(): Promise<any[]>
  {
    return Promise.resolve(CHANNELS);
  }

}
