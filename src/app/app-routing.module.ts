import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import {MessageBoxComponent} from './message-box/message-box.component';
import {MessageListComponent} from './message-list/message-list.component';

import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'members-page',  component: MembersPageComponent },
  { path: 'message-box', component: MessageBoxComponent },
  { path: 'message-list/:channelIndex', component: MessageListComponent},
  { path: 'channels', component: ChannelsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
