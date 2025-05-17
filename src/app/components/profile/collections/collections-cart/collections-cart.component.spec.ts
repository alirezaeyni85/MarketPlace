import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCartComponent } from './collections-cart.component';

describe('CollectionsCartComponent', () => {
  let component: CollectionsCartComponent;
  let fixture: ComponentFixture<CollectionsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
