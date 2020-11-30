import { TestBed } from '@angular/core/testing';

import { CurrentRouteService } from './current-route.service';

describe('CurrentRouteService', () => {
  let service: CurrentRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
