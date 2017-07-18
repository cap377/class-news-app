import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input()channel:any;

  name:string;
  numRecentMessages:number;
  // potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
  // potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  iconColor:string = "channel-feed-icon-";
  backgroundColor:string = "channel-feed-";
  messages:any[];

  constructor()
  {

  }

  ngOnInit()
  {

  }

  ngOnChanges(changes: SimpleChanges)
  {

    this.name = this.channel.name;
    this.numRecentMessages = this.channel.recentCount;
    this.messages = this.channel.messages;
    this.backgroundColor += this.channel.color;
    this.iconColor += this.channel.color;
    console.log(this.channel);
  }

}
