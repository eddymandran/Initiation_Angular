import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes=[
  {path:"", component: HomeComponent},
  {path:"about-us", component: AboutUsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
