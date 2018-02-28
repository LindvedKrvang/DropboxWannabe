import { TestBed, async, inject } from '@angular/core/testing';

import { AlreadyLoggedGuard } from './already-logged.guard';

describe('AlreadyLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyLoggedGuard]
    });
  });

  it('should ...', inject([AlreadyLoggedGuard], (guard: AlreadyLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
