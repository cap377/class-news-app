import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { NgIf, NgClass } from '@angular/common';
import { SlackService } from '../services/slack.service';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {
  members: Member[] = [];
  private selectedMember: Member;
  private users;

  constructor(private slackObj: SlackService) {

  }

  getMembers(): void{
    this.slackObj.getUsers().then((data) => {
      this.users = data;
      for (let i = 0; i < this.users.length; i++){
        this.members[i] = new Member(this.users[i].name, this.users[i].picture, this.users[i].email, this.users[i].presence);
      }
    });
  }

  ngOnInit() {
    this.getMembers();
  }

  onSelect(member: Member): void{
    this.selectedMember = member;
  }

  removeSelected(): void{
    this.selectedMember = null;
  }

}
