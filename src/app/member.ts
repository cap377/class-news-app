export class Member {
  name: string;
  image: string;
  email: string;
  status: boolean;
  constructor(newName:string, newImage:string, newEmail:string, newStatus:boolean){
    this.name = newName;
    this.image = newImage;
    this.email = newEmail;
    this.status = newStatus;
  }
}
