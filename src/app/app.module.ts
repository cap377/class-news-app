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

import {ChannelBoxComponent} from './channel-box.component';
import {ChannelDisplayComponent} from './channel-display.component';

import { MessageBoxComponent } from './message-box/message-box.component';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import {ChannelService} from './channel.service';



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
    ChannelDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
<<<<<<< HEAD
  //  ChannelService,
=======
    ChannelService,
    MessageService,
    SlackService,
    DatePipe
>>>>>>> df9a385a770d2d98e6d2d3362bfd5ba4505f8556
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
