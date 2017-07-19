import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { SlackService } from '../services/slack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  usedIndex:number;
  iconColor:string = "channel-feed-icon-";
  backgroundColor:string = "channel-feed-";
  channelData = {};
  channelDataArray:any[] = [];

  constructor(private slackObj:SlackService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.getMessagesTest();
  }

  getMessagesTest(){
    this.route.params.subscribe(params => {
      this.slackObj.getChannelsAndMessages().then((data) =>{
        this.usedIndex = params["channelIndex"];
        this.channelDataArray = data;
        this.channelData = data[this.usedIndex];

        console.log("params: ", params["channelIndex"]);
        console.log("index: ", params["channelIndex"]);
        console.log("data: ", data);
        console.log("object by ref: ", data[this.usedIndex]);
        console.log("object used: ", this.channelData);

        this.iconColor += this.channelDataArray[this.usedIndex].color;
        this.backgroundColor += this.channelDataArray[this.usedIndex].color;
      });
    });
  }


  ngOnChanges(changes: SimpleChanges)
  {
    // this.iconColor += this.channelDataArray[this.usedIndex].color;
    // this.backgroundColor += this.channelDataArray[this.usedIndex].color;
  }

}
