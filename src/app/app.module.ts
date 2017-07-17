import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MessageService} from './message-service/message.service';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import {ChannelService} from './channel.service';




@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MessageDetailsComponent,
    MembersPageComponent,
    MemberComponent,
    MemberDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChannelService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
