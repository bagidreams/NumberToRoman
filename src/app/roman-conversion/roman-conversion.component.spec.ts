import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanConversionComponent } from './roman-conversion.component';

describe('RomanConversionComponent', () => {
  let component: RomanConversionComponent;
  let fixture: ComponentFixture<RomanConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should 66 be converted to LXVI', () => {    
   expect(Component.convertToRoman(66)).toBe('LXVI');
  });
  it('should 530 be converted to DXXX', () => {    
   expect(Component.convertToRoman(530)).toBe('DXXX');
  });
   it('should 39 be converted to XXXIX', () => {    
   expect(Component.convertToRoman(39)).toBe('XXXIX');
  });
   it('should 97 be converted to XCVII', () => {    
   expect(Component.convertToRoman(97)).toBe('XCVII');
  });
  
});
