import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepComponent } from './piedep.component';

describe('PiedepComponent', () => {
  let component: PiedepComponent;
  let fixture: ComponentFixture<PiedepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiedepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
