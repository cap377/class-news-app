import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChannelService } from '../channel.service';
import { SlackService } from '../services/slack.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit
{
  channels:any[] = [];

  constructor(private slackService:SlackService ) { }
  ngOnInit()
  {
    this.slackService.getChannelsAndMessages().then((channelsArray) =>{
     this.channels = channelsArray;

     console.log("inside : ",this.channels);
    });
  }



}
