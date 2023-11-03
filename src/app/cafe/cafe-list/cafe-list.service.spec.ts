/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeListService } from './cafe-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: CafeList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeListService]
    });
  });

  it('should ...', inject([CafeListService], (service: CafeListService) => {
    expect(service).toBeTruthy();
  }));
});
