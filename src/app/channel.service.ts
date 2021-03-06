import { Injectable } from '@angular/core';

let CHANNELS:any[] = [
  {
    "name" : "ANNOUCEMENTS",
    "recentPosts" : 5,
    "messages" : [
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
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
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
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
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
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
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
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
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
      },
      {
        "ts" : 993,
        "user" : "guy",
        "text" : "klefljldkejslkfdj",
        "reactions" : [
                {
                  name:'thumbsUp',
                  count: 5
                },
                {
                  name: 'smiley',
                  count: 2
                },
                {
                  name: 'randomReaction',
                  count: 9
                }
              ]
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
