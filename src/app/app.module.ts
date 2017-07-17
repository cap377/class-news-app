import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MessageBoxComponent } from './message-box/message-box.component';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
// import {ChannelService} from './channel.service';



// import { ChannelService } from './channel.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MembersPageComponent,
    MemberComponent,
    MemberDetailComponent,
    // ChannelFeedComponent,
    // ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  //  ChannelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
