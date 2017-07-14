import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

=======
import { MembersPageComponent } from './members-page/members-page.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
>>>>>>> 0d6e9a2a3310d1c505f50478eefe7584e13d1e76

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MessageBoxComponent,
    MessageDetailsComponent
=======
    MembersPageComponent,
    MemberComponent,
    MemberDetailComponent
>>>>>>> 0d6e9a2a3310d1c505f50478eefe7584e13d1e76
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
