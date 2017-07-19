import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private slackService:SlackService,
               private router: Router) { }
  ngOnInit()
  {
    this.slackService.getChannelsAndMessages().then((channelsArray) =>{
     this.channels = channelsArray;
     console.log(this.slackService.getChData());
   });
  }

  sendChannelInformation(channel:any){
    //console.log("Channel",channel);
    //@output
    this.router.navigate(['/message-list',channel.id]);
  }



}
