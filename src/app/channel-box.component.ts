import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'channel-box',
  templateUrl: './channel-box.component.html',
  styleUrls: ['./channel-display.component.scss']
})



export class ChannelBoxComponent implements OnInit {
  red: boolean = false;
  yellow: string = "";

  @Input() channel: any;
  // @Input() hero: Hero;

  switchClass(){
    this.yellow = "channel-box";
  }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  ngOnInit(): void{
    //
  }

}
