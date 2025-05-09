import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyChartsComponent } from './daily-charts.component';

describe('DailyChartsComponent', () => {
  let component: DailyChartsComponent;
  let fixture: ComponentFixture<DailyChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
