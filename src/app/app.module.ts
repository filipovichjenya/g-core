import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { LangService } from './shared/lang.service';
import { DataService } from './shared/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [LangService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
