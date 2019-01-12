import { TestBed } from '@angular/core/testing';

import { VoteStatsService } from './vote-stats.service';

describe('VoteStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteStatsService = TestBed.get(VoteStatsService);
    expect(service).toBeTruthy();
  });
});
