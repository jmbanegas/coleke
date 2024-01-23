import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextogComponent } from './textog.component';

describe('TextogComponent', () => {
  let component: TextogComponent;
  let fixture: ComponentFixture<TextogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
