export class Message {
  date:string;
  author:string;
  text:string;
  reactions:any;

  constructor(date:string, author:string, text:string, reactions:any){
    this.date = date;
    this.author = author;
    this.text = text;
    this.reactions = reactions;
  }

  getDate(){
    return this.date;
  }

  getAuthor(){
    return this.author;
  }

  getText(){
    return this.text;
  }

  getReactions(){
    return this.reactions;
  }

}
