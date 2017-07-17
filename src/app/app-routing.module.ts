import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
<<<<<<< HEAD
import {MessageBoxComponent} from './message-box/message-box.component';
=======

import { ChannelsComponent } from './channels/channels.component';

>>>>>>> 9b20daec0a5115371d2f32ece8767be0fef9959e
const routes: Routes = [
  { path: '', redirectTo: '/members-page', pathMatch: 'full' },
  { path: 'members-page',  component: MembersPageComponent },
  { path: 'member-component', component: MemberComponent },
  { path: 'member-detail-component', component: MemberDetailComponent },
<<<<<<< HEAD
  { path: 'message-box-component', component: MessageBoxComponent }
=======
  { path: 'channels', component: ChannelsComponent}
>>>>>>> 9b20daec0a5115371d2f32ece8767be0fef9959e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
