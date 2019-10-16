import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RomanConversionComponent} from './roman-conversion/roman-conversion.component'


const routes: Routes = [
  { path: "", component: RomanConversionComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
