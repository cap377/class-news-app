import { Component, OnInit, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.scss']
})
export class ChannelFeedComponent implements OnInit
{
  @Input()channel:any;
  name:string;
  numRecentMessages:number;
  potentialColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow"];
  backgroundColor:string = "";
  messages:any[];
  constructor()
  {
    this.name = this.channel.name;
    this.numRecentMessages = this.channel.recentPosts;
    this.messages = this.channel.messages;
  }

  ngOnInit()
  {
    this.backgroundColor =  this.potentialColors[Math.floor(Math.random() * 5)];
  }

}
