import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';

import {Message} from '../message';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit
{
  @Input()messageObj:any;
  constructor(
  ) {}

  ngOnInit() {
  }
  message: Message;
  ngOnChanges(changes: SimpleChanges){
    if (changes['messageObj']){
      this.message = this.createMessage(this.messageObj)
    }
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
//this is fake data for testing
  fakeMessage = new Message('7.14.1990', 'Chris Harlow',
  'It is my birthday today, happy birthday to me', this.reactionArray );
//used to collect a modal
  selectedMessage: Message;
  reactions = this.fakeMessage.getReactions();
//used to select a message to display a modal
  onSelect(message): void{
    this.selectedMessage = message;

  }

//used to remove the modal
  removeSelected(): void{
    this.selectedMessage = null;

  }

  createMessage(obj:any):any{
    let date:string= obj.ts;
    let author:string = obj.user;
    let message:string = obj.text;
    //let reactions:any = 1;
    //let reactions:any = obj.reactions;
    let reactions:any = new Array(obj.reactions);

    return new Message(date, author, message, reactions);
  }



}
