import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'channel-box',
  templateUrl: './channel-box.component.html',
  styleUrls: ['./channel-box.component.scss']
})



export class ChannelBoxComponent implements OnInit {
  red: boolean = false;
  yellow: string = "";

  @Input() channel: any;

  ngOnInit(): void{
    //
  }

}
