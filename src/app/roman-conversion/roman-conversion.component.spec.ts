import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RomanConversionComponent } from './roman-conversion.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatInputModule } from '@angular/material';

describe('RomanConversionComponent', () => {
  let component: RomanConversionComponent;
  let fixture: ComponentFixture<RomanConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,],
      declarations: [ RomanConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should 66 be converted to LXVI', () => { 
    component.convertToRoman(66);
   expect(component.result).toBe('LXVI');
  });

  it('should 530 be converted to DXXX', () => { 
   component.convertToRoman(530);
   expect(component.result).toBe('DXXX');   
  });

  it('should 39 be converted to XXXIX', () => {
    component.convertToRoman(39);
    expect(component.result).toBe('XXXIX'); 
  });
   
  it('should 97 be converted to XCVII', () => {   
    component.convertToRoman(97);
    expect(component.result).toBe('XCVII'); 
   });
  
   it('should B key return false', () => {   
    expect(component.numericOnly( {key: 'B'})).toBe(false); 
   });

   it('should 7 key return true', () => {   
    expect(component.numericOnly( {key: 7})).toBe(true); 
   });

   it('should & key return false', () => {   
    expect(component.numericOnly( {key: '&'})).toBe(false); 
   });

});
