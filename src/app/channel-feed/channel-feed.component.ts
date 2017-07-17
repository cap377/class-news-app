import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.scss']
})
export class ChannelFeedComponent implements OnInit
{
  @Input()channel:any;
  // channel:any =   {
  //     "name" : "channel1",
  //     "recentPosts" : 5,
  //     "messages" : [
  //       {
  //         "ts" : 993,
  //         "user" : "guy",
  //         "text" : "klefljldkejslkfdj"
  //       },
  //       {
  //         "ts" : 993,
  //         "user" : "guy",
  //         "text" : "klefljldkejslkfdj"
  //       }
  //     ]
  //   };
  name:string;
  numRecentMessages:number;
  potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
  potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  iconColor:string = "";
  backgroundColor:string = "";
  messages:any[];
  constructor()
  {
    if(this.channel)
    {
      this.name = this.channel.name;
      this.numRecentMessages = this.channel.recentPosts;
      this.messages = this.channel.messages;
    }
  }

  ngOnInit()
  {
    let classIndex:number = Math.floor(Math.random() * 6);
    this.backgroundColor =  this.potentialBoxColors[classIndex];
    this.iconColor =  this.potentialIconColors[classIndex];
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes['channel'])
    {
      this.name = this.channel.name;
      this.numRecentMessages = this.channel.recentPosts;
      this.messages = this.channel.messages;
    }
  }

}
