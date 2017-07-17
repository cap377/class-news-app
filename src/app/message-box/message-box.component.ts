import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import {Message} from '../message';
import {MessageService} from '../message-service/message.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  @Input()messageJSON:any;
  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
  }
  //message = this.messageService.createMessage(this.messageJSON);

  reactionArray = [
    {
      name:'thumbsUp',
      count: 5
  },

  {
    name: 'smiley',
    count: 2
  },
  {
  name: 'randomReaction',
  count: 9
}
]
  fakeMessage = new Message('7.14.1990', 'Chris Harlow',
  'It is my birthday today, happy birthday to me', this.reactionArray );



}
