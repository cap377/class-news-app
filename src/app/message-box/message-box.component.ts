import { Component, OnInit, Input } from '@angular/core';


import {Message} from '../Message';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  @Input()messageJSON:any;
  constructor(
  ) { }

  ngOnInit() {
  }
  message = this.createMessage(this.messageJSON);

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
