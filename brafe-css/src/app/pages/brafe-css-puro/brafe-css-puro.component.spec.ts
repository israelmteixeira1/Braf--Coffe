import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrafeCssPuroComponent } from './brafe-css-puro.component';

describe('BrafeCssPuroComponent', () => {
  let component: BrafeCssPuroComponent;
  let fixture: ComponentFixture<BrafeCssPuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrafeCssPuroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrafeCssPuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
