import { Injectable } from '@angular/core';

let CHANNELS:any[] = [
  {
    "name" : "ANNOUCEMENTS",
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
    "name" : "channel2",
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
  },
  {
    "name" : "channel3",
    "recentPosts" : 74,
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
    "name" : "channel4",
    "recentPosts" : 67,
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
    "name" : "channel5",
    "recentPosts" : 97,
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
