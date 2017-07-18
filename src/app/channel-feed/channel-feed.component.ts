import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone  } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
//import {BehaviorSubject} from '@rxjs/subject/BehaviorSubject';

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
  // potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
  // potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  iconColor:string = "channel-feed-icon-";
  backgroundColor:string = "channel-feed-";
  messages:any[];

  constructor(private _ngZone: NgZone)
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

  listAllMessages(event){
    let a = event.target;
    let b = event.currentTarget;
    console.log(a);
    console.log(b);
    console.log(event);
    let classArray:any = new Array<any>();
    classArray = document.getElementsByClassName('channel-feed-container');
    for (let item of classArray){
      if (item != event){
      item.style.display = 'none';
    }}

  }

}
