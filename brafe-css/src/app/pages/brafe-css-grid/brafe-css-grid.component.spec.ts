import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrafeCssGridComponent } from './brafe-css-grid.component';

describe('BrafeCssGridComponent', () => {
  let component: BrafeCssGridComponent;
  let fixture: ComponentFixture<BrafeCssGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrafeCssGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrafeCssGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
