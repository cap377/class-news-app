import { Component, OnInit } from '@angular/core';

import {Message} from '../message';
import {MessageService} from '../message-service/message.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
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
