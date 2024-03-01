import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { chefDRHGuard } from './chef-drh.guard';

describe('chefDRHGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => chefDRHGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
