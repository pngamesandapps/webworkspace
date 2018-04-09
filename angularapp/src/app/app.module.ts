import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';


@NgModule({
  declarations: [
    AppComponent,
    SecComponent,
    ThirdComponent,
    FourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
