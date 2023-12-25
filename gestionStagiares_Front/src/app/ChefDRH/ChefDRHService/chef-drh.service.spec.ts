import { TestBed } from '@angular/core/testing';

import { ChefDrhService } from './chef-drh.service';

describe('ChefDrhService', () => {
  let service: ChefDrhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefDrhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
