import { Component, OnInit, Input, OnChanges, SimpleChanges, Pipe } from '@angular/core';
import {SlackService} from '../services/slack.service';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/observable';
import {ShufflePipe} from './ShufflePipe';

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
  private channelData: any[] = [];

  channels: any[] = [];
  // @Input() channel: any;
  constructor(private slackObj: SlackService) { }
    //private channelData;

    getChannels(){

      console.log("gathering channels");
      this.slackObj.getChannelsAndMessages().then((data) =>{
      this.channelData = data;
      console.log(this.channelData.length, "length of data");
      // for(let i = 0; i < this.channelData.length; i++){
      //   console.log(this.channelData[i], "something is here");
      // }
      // return new Promise((resolve, reject) => {
      //
      //   console.log(this.channelData, "all channels from api call");
      //   this.generateRandomChannels();
      //   this.channelsAssignment();
      //   resolve();
      // })
    });
  }


  generateRandomChannels(): void{
    let val: number;
    let length: number = this.channelData.length;
     for(let i = 0; i < length; i++){
       do{
         val = Math.floor(Math.random() * length + 1);
       }
       while(this.visitedIndexes.indexOf(val) > -1);
       this.visitedIndexes[i] = val;
     }
     console.log(this.visitedIndexes, "vals")
    //  potentialBoxColors = ["channel-feed-red", "channel-feed-blue", "channel-feed-orange", "channel-feed-green", "channel-feed-yellow", "channel-feed-pink"];
    //  potentialIconColors = ["channel-feed-icon-red", "channel-feed-icon-blue", "channel-feed-icon-orange", "channel-feed-icon-green", "channel-feed-icon-yellow", "channel-feed-icon-pink"];
  }

  channelsAssignment(): void{
    for(let i = 0; i < 6; i++){
      this.channels.push(this.channelData[this.visitedIndexes[i]])
    }
    console.log(this.channels, "data for channels")
  }

  ngOnInit(): void{
    //  ngOnInit(): void{
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
    //this.getChannels().then(data => this.generateRandomChannels())
    this.getChannels();
    // this.generateRandomChannels();
    //this.channelsAssignment();


  }

  ngOnChanges(changes: SimpleChanges):void{
    this.generateRandomChannels();
    this.channelsAssignment();
  }

}
