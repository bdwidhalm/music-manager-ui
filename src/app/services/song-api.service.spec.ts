import { TestBed } from '@angular/core/testing';

import { SongApiService } from './song-api.service';

describe('SongApiService', () => {
  let service: SongApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
