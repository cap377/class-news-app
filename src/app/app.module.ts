import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { ChannelsComponent } from './channels/channels.component';

import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageDetailsComponent } from './message-details/message-details.component';


import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// import { ChannelService } from './channel.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MessageDetailsComponent,
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
    // ChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
