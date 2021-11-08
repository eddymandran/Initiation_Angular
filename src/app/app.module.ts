import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
