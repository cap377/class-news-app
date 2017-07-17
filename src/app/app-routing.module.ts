import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import {MessageBoxComponent} from './message-box/message-box.component';


import { ChannelsComponent } from './channels/channels.component';


const routes: Routes = [
  { path: '', redirectTo: '/members-page', pathMatch: 'full' },
  { path: 'members-page',  component: MembersPageComponent },
  { path: 'message-box', component: MessageBoxComponent },
  { path: 'channels', component: ChannelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
