import { TestBed } from '@angular/core/testing';

import { SerieService } from './series.service';

describe('SeriesService', () => {
  let service: SerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
