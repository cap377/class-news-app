import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import {MessageBoxComponent} from './message-box/message-box.component';
const routes: Routes = [
  { path: '', redirectTo: '/members-page', pathMatch: 'full' },
  { path: 'members-page',  component: MembersPageComponent },
  { path: 'member-component', component: MemberComponent },
  { path: 'member-detail-component', component: MemberDetailComponent },
  { path: 'message-box-component', component: MessageBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
