import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminDRHGuard } from './admin-drh.guard';

describe('adminDRHGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminDRHGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
