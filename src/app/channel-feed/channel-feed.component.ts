import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.scss']
})
export class ChannelFeedComponent implements OnInit
{
  @Input()channelName:string;
  @Input()numRecentMessages:number;
  potentialColors = ["red", "blue", "orange", "green", "yellow"];
  color:string;
  @Input()messages:any[];
  constructor()
  {
  }

  ngOnInit()
  {
    this.color =  this.potentialColors[Math.floor(Math.random() * 5)];
  }

}
