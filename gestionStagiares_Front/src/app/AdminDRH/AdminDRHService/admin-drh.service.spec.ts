import { TestBed } from '@angular/core/testing';

import { AdminDrhService } from './admin-drh.service';

describe('AdminDrhService', () => {
  let service: AdminDrhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDrhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
