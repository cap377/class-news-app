import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlackService } from './services/slack.service';

import { DatePipe } from '@angular/common';
import { ServiceTestComponent } from './service-test/service-test.component';

const appRoutes: Routes = [
  {path: 'service-test', component: ServiceTestComponent}
];

import {ChannelBoxComponent} from './channelboxes/channel-box.component';
import {ChannelDisplayComponent} from './channelboxes/channel-display.component';

import { MessageBoxComponent } from './message-box/message-box.component';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import {ChannelService} from './channel.service';
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceTestComponent,
    MessageBoxComponent,
    MembersPageComponent,
    MemberComponent,
    MemberDetailComponent,
    ChannelFeedComponent,
    ChannelsComponent,
    ChannelBoxComponent,
    ChannelDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ChannelService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
