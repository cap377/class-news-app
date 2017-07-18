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
  //private _data = new BehaviorSubject<Post[]>([]);
  constructor(private _ngZone: NgZone)
  {
    // if(this.channel)
    // {
    //   this.name = this.channel.name;
    //   this.numRecentMessages = this.channel.recentPosts;
    //   this.messages = this.channel.messages;
    // }

  }

  ngOnInit()
  {
    // this.name = this.channel.name;
    // this.numRecentMessages = this.channel.recentCount;
    // this.messages = this.channel.messages;
    // this.backgroundColor += this.channel.color;
    // this.iconColor += this.channel.color;

    // let classIndex:number = Math.floor(Math.random() * 6);
    // this.backgroundColor =  this.potentialBoxColors[classIndex];
    // this.iconColor =  this.potentialIconColors[classIndex];i

    // this._data

    // add this line
    // listen to data as long as groupPosts is undefined or null
    // Unsubscribe once groupPosts has value

    // .takeWhile(() => !this.groupPosts)
    // .subscribe(x => {
    //     this.groupPosts = this.groupByCategory(this.data);
    // });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // if(changes['channel'])
    // {
    //   this._ngZone.run(() => {
    //     this.name = this.channel.name;
    //     this.numRecentMessages = this.channel.recentCount;
    //     this.messages = this.channel.messages;
    //     this.backgroundColor += this.channel.color;
    //     this.iconColor += this.channel.color;
    //   });
    //
    // }
    this.name = this.channel.name;
    this.numRecentMessages = this.channel.recentCount;
    this.messages = this.channel.messages;
    this.backgroundColor += this.channel.color;
    this.iconColor += this.channel.color;
    console.log(this.channel);
  }

}
