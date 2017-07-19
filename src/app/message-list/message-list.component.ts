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
  @Input()channel:any;

  name:string;
  numRecentMessages:number;
  // potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
  // potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  iconColor:string = "channel-feed-icon-";
  backgroundColor:string = "channel-feed-";
  messages: any[];
  testArray: any[] = [];
  constructor(private slackObj:SlackService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.getMessages();
  }

  getMessages(){
    this.slackObj.getChannelsAndMessages().then((data) =>{
        this.testArray = data;
        console.log("data: ", data);
        for (let i = 0; i < 100; i++){
          console.log("obj: ",data[0]);
        }
        //console.log(params["channelID"]);

        let matchedIndex = 0;
        // for(let index=0; index<data.length; index++){
        //   if(params["channelID"] == data[index].id){
        //     matchedIndex = index;
        //     break;
        //   }
        // }

        // this.name = data[matchedIndex].name;
        // this.messages = data[matchedIndex].messages;
        // this.iconColor = data[matchedIndex].color;
        // this.backgroundColor = data[matchedIndex].color;
        // this.numRecentMessages = data[matchedIndex].recentCount;
        // console.log(data[matchedIndex]);
      });

    // this.route.params.subscribe(params => {
    //   this.slackObj.getChannelsAndMessages().then((data) =>{
    //     let arrayTest = data;
    //     console.log(arrayTest[0]);
    //     console.log(params["channelID"]);
    //
    //     let matchedIndex = 0;
    //     for(let index=0; index<data.length; index++){
    //       if(params["channelID"] == data[index].id){
    //         matchedIndex = index;
    //         break;
    //       }
    //     }
    //
    //     this.name = data[matchedIndex].name;
    //     this.messages = data[matchedIndex].messages;
    //     this.iconColor = data[matchedIndex].color;
    //     this.backgroundColor = data[matchedIndex].color;
    //     this.numRecentMessages = data[matchedIndex].recentCount;
    //     console.log(data[matchedIndex]);
    //   });
    // });

  }

  // ngOnChanges(changes: SimpleChanges)
  // {
  //
  //   this.name = this.channel.name;
  //   this.numRecentMessages = this.channel.recentCount;
  //   this.messages = this.channel.messages;
  //   this.backgroundColor += this.channel.color;
  //   this.iconColor += this.channel.color;
  //   console.log(this.channel);
  // }

}
