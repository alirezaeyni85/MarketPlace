import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBidsUsersComponent } from './active-bids-users.component';

describe('ActiveBidsUsersComponent', () => {
  let component: ActiveBidsUsersComponent;
  let fixture: ComponentFixture<ActiveBidsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveBidsUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveBidsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
