import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { ThirdComponent } from './third/third.component';


@NgModule({
  declarations: [
    AppComponent,
    SecComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
