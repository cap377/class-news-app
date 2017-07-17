import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import {MessageBoxComponent} from './message-box/message-box.component';


import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/message-box', pathMatch: 'full' },
  { path: 'members-page',  component: MembersPageComponent },
  { path: 'member-component', component: MemberComponent },
  { path: 'member-detail-component', component: MemberDetailComponent },

  { path: 'message-box', component: MessageBoxComponent },

  { path: 'channels', component: ChannelsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
