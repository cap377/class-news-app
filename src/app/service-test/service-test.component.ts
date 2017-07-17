import { Component, OnInit } from '@angular/core';
import { SlackService } from '../services/slack.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.scss']
})
export class ServiceTestComponent implements OnInit {
  private userData;
  private channelData;

  constructor(private slackObj: SlackService) { }

  getChannels():void{
    this.slackObj.getChannelsAndMessages().then((data) =>{
      this.channelData = data
      console.log(this.channelData);
    });

    this.slackObj.getUsers().then((data) => {
      this.userData = data;
      console.log(this.userData);
    });

  }

  ngOnInit() {
    this.getChannels();
  }

}
