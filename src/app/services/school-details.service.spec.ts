import { TestBed, inject } from '@angular/core/testing';

import { SchoolDetailsService } from './school-details.service';

describe('SchoolDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolDetailsService]
    });
  });

  it('should be created', inject([SchoolDetailsService], (service: SchoolDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
