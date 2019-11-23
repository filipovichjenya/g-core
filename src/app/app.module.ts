import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LangService } from './shared/lang.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
