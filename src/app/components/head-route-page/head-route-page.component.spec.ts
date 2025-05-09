import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRoutePageComponent } from './head-route-page.component';

describe('HeadRoutePageComponent', () => {
  let component: HeadRoutePageComponent;
  let fixture: ComponentFixture<HeadRoutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadRoutePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadRoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
