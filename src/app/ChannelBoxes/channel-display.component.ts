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
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
    private colors;
    channels: any[] = [];
    channelsWithColor: any[] = [];
    // @Input() channel: any;

    private channelData;

    constructor(private slackObj: SlackService) { }


    getChannels():void{
      this.slackObj.getChannelsAndMessages().then((data) =>{
        this.channelData = data
        console.log(this.channelData);
      });

      for(let i = 0; i < 6; i++){
        this.channels.push(this.channelData[i].name)

      }
      for(let i = 0; i < 6; i++){
        this.channelsWithColor[i].push({name: this.channels[i], color: colors[i]});

      }

    }

    ngOnInit() {
      this.getChannels();
    }

  // channels = CHANNELS;
  // // @Input() channel: any;
  //
  // ngOnInit(): void{
  //   //  ngOnInit(): void{
  //       //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
  //
  // }

}



// import { Component, OnInit, Input } from '@angular/core';
//
//

//
//
// const CHANNELS: any[] = [
//   { name: 'General', color: 'orange' },
//   { name: 'Introductions', color: 'blue' },
//   { name: 'Random', color: 'lightgreen' },
//   { name: 'Relocation', color: 'yellow' },
//   { name: 'Speakers', color: 'pink' },
//   { name: 'Announcements', color: 'red' }
// ];
//
//
//
//
//
// @Component({
//   selector: 'channel-display',
//   templateUrl: './channel-display.component.html',
//   styleUrls: ['./channel-display.component.scss']
// })
//
//
//
// export class ChannelDisplayComponent implements OnInit {
//   // hero: Hero = {
//   //   id: 1,
//   //   name: 'Windstorm'
//   // };

//
//
// }
