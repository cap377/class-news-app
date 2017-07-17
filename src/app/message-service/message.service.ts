import { Injectable } from '@angular/core';
import {Message} from '../message';


@Injectable()
export class MessageService {

  constructor() { }

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
