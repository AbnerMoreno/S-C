import { TestBed } from '@angular/core/testing';

import { ValidateclienteGuard } from './validatecliente.guard';

describe('ValidateclienteGuard', () => {
  let guard: ValidateclienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateclienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
