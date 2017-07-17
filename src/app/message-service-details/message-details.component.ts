import { Component, OnInit, Input } from '@angular/core';

import {Message} from '../message';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {
  @Input()messageObj:any;
  constructor() { }

  ngOnInit() {
  }

}
