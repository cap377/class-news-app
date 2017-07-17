import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit
{
  channels:any[];

  constructor(private channelService:ChannelService) { }
  ngOnInit()
  {
    this.channelService.getChannels().then(channels => this.channels = channels);
  }

}
