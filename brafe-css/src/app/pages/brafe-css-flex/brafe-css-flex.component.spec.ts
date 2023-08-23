import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrafeCssFlexComponent } from './brafe-css-flex.component';

describe('BrafeCssFlexComponent', () => {
  let component: BrafeCssFlexComponent;
  let fixture: ComponentFixture<BrafeCssFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrafeCssFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrafeCssFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
