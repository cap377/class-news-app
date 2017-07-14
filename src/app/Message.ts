export class Message {
  date: string;
  author: string;
  message:string;
  reactions = new Array();

  constructor(date:string, author:string, message:string, reactions:Array<any>){
    this.date = date;
    this.author = author;
    this.message = message;
    this.reactions = reactions;
  }

  getDate(){
    return this.date
  }

  getAuthor(){
    return this.author
  }

  getMessage(){
    return this.message
  }

  getReactions(){
    return this.reactions;
  }
}
