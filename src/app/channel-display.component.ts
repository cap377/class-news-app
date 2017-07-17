import { Component, OnInit, Input } from '@angular/core';


const CHANNELS: any[] = [
  { name: 'General', color: 'orange' },
  { name: 'Introductions', color: 'blue' },
  { name: 'Random', color: 'lightgreen' },
  { name: 'Relocation', color: 'yellow' },
  { name: 'Speakers', color: 'pink' },
  { name: 'Announcements', color: 'red' }
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
  channels = CHANNELS;
  // @Input() channel: any;

  ngOnInit(): void{
    //
  }

}
