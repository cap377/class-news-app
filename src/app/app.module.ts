import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ChannelBoxComponent} from './channel-box.component';
import {ChannelDisplayComponent} from './channel-display.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelBoxComponent,
    ChannelDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
