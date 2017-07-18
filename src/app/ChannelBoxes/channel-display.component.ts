import { Component, OnInit, Input } from '@angular/core';
import {SlackService} from '../services/slack.service';


const CHANNELS: any[] = [
  { name: 'General', color: 'orange' },
  { name: 'Introductions', color: 'blue' },
  { name: 'Random', color: 'lightgreen' },
  { name: 'Relocation', color: 'yellow' },
  { name: 'Speakers', color: 'pink' },
  { name: 'Announcements', color: 'red' }
];

const colors: any[] = [
  'orange',
  'blue',
  'lightgreen',
  'yellow',
  'pink',
  'red'
];



@Component({
  selector: 'channel-display',
  templateUrl: './channel-display.component.html',
  styleUrls: ['./channel-display.component.scss']
})



export class ChannelDisplayComponent implements OnInit {


  channelsWithColor: any[] = [];
  visitedIndexes: number[] = [];


  channels: any[] = [];
  // @Input() channel: any;
  constructor(private slackObj: SlackService) { }
    private channelData;

    getChannels():void{
    this.slackObj.getChannelsAndMessages().then((data) =>{
      this.channelData = data
      console.log(this.channelData);
    });

    for(let i = 0; i < 6; i++){
      this.channelsWithColor[i].push({name: this.channels[i], color: colors[i]});
    }
  }



  generateRandomChannels(): void{
    let val: number;
     for(let i = 0; i < 6; i++){
       do{
         val = Math.floor(Math.random() * 6);
       }
       while(this.visitedIndexes.indexOf(val) > -1);
       this.visitedIndexes[i] = val;
     }
    //  potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
    //  potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  }

  channelsAssignment(): void{
    for(let i = 0; i < 6; i++){
      this.channels.push(CHANNELS[this.visitedIndexes[i]])
    }
  }

  ngOnInit(): void{
    //  ngOnInit(): void{
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
    //this.getChannels();
    this.generateRandomChannels();
    this.channelsAssignment();
  }

}
