import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtCartComponent } from './bought-cart.component';

describe('BoughtCartComponent', () => {
  let component: BoughtCartComponent;
  let fixture: ComponentFixture<BoughtCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoughtCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoughtCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
