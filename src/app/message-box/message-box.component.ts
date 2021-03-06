import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone } from '@angular/core';
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
  constructor(private _ngZone: NgZone)
  {

  }

  ngOnInit() {
  }
  message: Message = new Message("","","",[]);
  ngOnChanges(changes: SimpleChanges){
    if (changes['messageObj']){
      this.message = this.createMessage(this.messageObj);
    }
  }



//used to collect a modal
  selectedMessage: Message;
  reactions = this.message.getReactions();
//used to select a message to display a modal
  onSelect(message): void{
    this.selectedMessage = message;

  }

//used to remove the modal
  removeSelected(): void{
    this.selectedMessage = null;

  }

  createMessage(obj:any):any{
      let date= obj.time;
      let author = obj.name;
      let text= obj.text;
      //let reactions:any = 1;
      //let reactions:any = obj.reactions;
      let reactions = obj.reactions;

      return new Message(date, author, text, reactions);

  }



}
