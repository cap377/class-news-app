export class Member {
  name: string;
  image: string;
  email: string;
  presence: string;
  constructor(newName:string, newImage:string, newEmail:string, newPresence:string){
    this.name = newName;
    this.image = newImage;
    this.email = newEmail;
    this.presence = newPresence;
  }
}
