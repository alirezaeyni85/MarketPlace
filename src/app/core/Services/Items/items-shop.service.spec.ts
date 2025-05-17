import { TestBed } from '@angular/core/testing';

import { ServiceItems } from './items-shop.service';

describe('ItemsShopService', () => {
  let service: ServiceItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
