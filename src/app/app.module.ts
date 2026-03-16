import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { NgdirComponent } from './ngdir/ngdir.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NgdirComponent,
    IfelseComponent,
    NgforComponent,
    NgmodelComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
