import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
      return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted )
    );
  }
}
@Component({
  selector: 'app-roman-conversion',
  templateUrl: './roman-conversion.component.html',
  styleUrls: ['./roman-conversion.component.css']
})

export class RomanConversionComponent implements OnInit { 
  public result: string;
  public num:number;
  constructor() {  }
  ngOnInit() {    
  }
    
  convertToRoman(num: number){  
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  this.result = "";
  for (let i = 0;i<=decimal.length;i++) {
    while (num % decimal[i] < num) {  
      this.result += roman[i]; 
      num -= decimal[i];     
    }
  }  
  }
numericOnly(event): boolean { 
  let patt = /^([0-9])$/;
  let result = patt.test(event.key);
  return result;
}
}