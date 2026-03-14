import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { NgdirComponent } from './ngdir/ngdir.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NgdirComponent,
    IfelseComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
