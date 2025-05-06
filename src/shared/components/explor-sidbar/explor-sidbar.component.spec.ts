import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorSidbarComponent } from './explor-sidbar.component';

describe('ExplorSidbarComponent', () => {
  let component: ExplorSidbarComponent;
  let fixture: ComponentFixture<ExplorSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorSidbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
