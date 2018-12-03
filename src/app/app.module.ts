import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageBoxTestComponent } from './message-box-test/message-box-test.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MessageBoxTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],  
  bootstrap: [AppComponent]
})

export class AppModule { }
