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
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { ChannelService } from './channel.service';
import { MessageListComponent } from './message-list/message-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ServiceTestComponent,
    MessageBoxComponent,
    MembersPageComponent,
    ChannelFeedComponent,
    ChannelsComponent,
    ChannelBoxComponent,
    ChannelDisplayComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    SlackService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
