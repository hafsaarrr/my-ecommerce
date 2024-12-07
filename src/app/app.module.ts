import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Pour ngModel
import { CommonModule } from '@angular/common'; // Pour *ngIf, *ngFor

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Pour le support de ngModel
    CommonModule // Pour les directives comme *ngIf et *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
