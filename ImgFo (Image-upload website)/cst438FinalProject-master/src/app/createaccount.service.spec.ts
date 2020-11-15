import { TestBed } from '@angular/core/testing';

import { CreateaccountService } from './createaccount.service';

describe('CreateaccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateaccountService = TestBed.get(CreateaccountService);
    expect(service).toBeTruthy();
  });
});
