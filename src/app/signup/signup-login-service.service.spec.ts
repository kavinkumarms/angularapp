import { TestBed } from '@angular/core/testing';

import { SignupLoginServiceService } from './signup-login-service.service';

describe('SignupLoginServiceService', () => {
  let service: SignupLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
