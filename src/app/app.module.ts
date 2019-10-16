 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { RomanConversionComponent } from './roman-conversion/roman-conversion.component';
 import {FormsModule,ReactiveFormsModule} from '@angular/forms';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatButtonModule} from '@angular/material/button';
 import {MatFormFieldModule, MatInputModule } from '@angular/material';

 @NgModule({
   declarations: [
    AppComponent,
     RomanConversionComponent     
   ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
    
   ],
   providers: [],
  bootstrap: [AppComponent]
 })
 export class AppModule { }


